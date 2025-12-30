// Test Suite for DTGC Staking Contracts
// Run: npx hardhat test

const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time, loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("DTGC Staking Ecosystem", function () {
  
  async function deployTokenFixture() {
    const [owner, treasury, user1, user2, user3] = await ethers.getSigners();
    
    const MockToken = await ethers.getContractFactory("MockPRC20");
    const dtgc = await MockToken.deploy("DTGC Token", "DTGC", ethers.parseEther("1000000000"));
    
    return { dtgc, owner, treasury, user1, user2, user3 };
  }
  
  async function deployStakingFixture() {
    const { dtgc, owner, treasury, user1, user2, user3 } = await loadFixture(deployTokenFixture);
    
    const DTGCStaking = await ethers.getContractFactory("DTGCStaking");
    const staking = await DTGCStaking.deploy(
      await dtgc.getAddress(),
      treasury.address,
      treasury.address
    );
    
    const rewardAmount = ethers.parseEther("50000000");
    await dtgc.transfer(await staking.getAddress(), rewardAmount);
    
    const userAmount = ethers.parseEther("100000");
    await dtgc.transfer(user1.address, userAmount);
    await dtgc.transfer(user2.address, userAmount);
    await dtgc.transfer(user3.address, userAmount);
    
    return { dtgc, staking, owner, treasury, user1, user2, user3, rewardAmount, userAmount };
  }
  
  describe("DTGCStaking", function () {
    
    describe("Deployment", function () {
      it("Should set correct token address", async function () {
        const { dtgc, staking } = await loadFixture(deployStakingFixture);
        expect(await staking.dtgcToken()).to.equal(await dtgc.getAddress());
      });
      
      it("Should set correct owner", async function () {
        const { staking, owner } = await loadFixture(deployStakingFixture);
        expect(await staking.owner()).to.equal(owner.address);
      });
    });
    
    describe("Staking Tiers", function () {
      it("Should return correct tier information", async function () {
        const { staking } = await loadFixture(deployStakingFixture);
        const tiers = await staking.getTiers();
        
        expect(tiers[0].lockDuration).to.equal(14 * 24 * 60 * 60);
        expect(tiers[0].aprBps).to.equal(500);
        
        expect(tiers[1].lockDuration).to.equal(30 * 24 * 60 * 60);
        expect(tiers[1].aprBps).to.equal(1200);
        
        expect(tiers[2].lockDuration).to.equal(90 * 24 * 60 * 60);
        expect(tiers[2].aprBps).to.equal(2500);
      });
    });
    
    describe("Staking", function () {
      it("Should stake tokens with 5% entry fee", async function () {
        const { dtgc, staking, user1 } = await loadFixture(deployStakingFixture);
        
        const stakeAmount = ethers.parseEther("10000");
        const expectedFee = stakeAmount * 500n / 10000n;
        const expectedPrincipal = stakeAmount - expectedFee;
        
        await dtgc.connect(user1).approve(await staking.getAddress(), stakeAmount);
        await staking.connect(user1).stake(stakeAmount, 2);
        
        const position = await staking.getPosition(user1.address);
        expect(position.amount).to.equal(expectedPrincipal);
        expect(position.isActive).to.be.true;
      });
      
      it("Should not allow staking with existing position", async function () {
        const { dtgc, staking, user1 } = await loadFixture(deployStakingFixture);
        
        const stakeAmount = ethers.parseEther("5000");
        await dtgc.connect(user1).approve(await staking.getAddress(), stakeAmount * 2n);
        await staking.connect(user1).stake(stakeAmount, 1);
        
        await expect(staking.connect(user1).stake(stakeAmount, 1))
          .to.be.revertedWith("POSITION_EXISTS");
      });
    });
    
    describe("Withdrawal", function () {
      it("Should not allow withdrawal before lock expires", async function () {
        const { dtgc, staking, user1 } = await loadFixture(deployStakingFixture);
        
        const stakeAmount = ethers.parseEther("10000");
        await dtgc.connect(user1).approve(await staking.getAddress(), stakeAmount);
        await staking.connect(user1).stake(stakeAmount, 0);
        
        await time.increase(7 * 24 * 60 * 60);
        
        await expect(staking.connect(user1).withdraw())
          .to.be.revertedWith("STILL_LOCKED");
      });
      
      it("Should allow withdrawal after lock", async function () {
        const { dtgc, staking, user1 } = await loadFixture(deployStakingFixture);
        
        const stakeAmount = ethers.parseEther("10000");
        await dtgc.connect(user1).approve(await staking.getAddress(), stakeAmount);
        await staking.connect(user1).stake(stakeAmount, 0);
        
        await time.increase(15 * 24 * 60 * 60);
        
        const balanceBefore = await dtgc.balanceOf(user1.address);
        await staking.connect(user1).withdraw();
        const balanceAfter = await dtgc.balanceOf(user1.address);
        
        expect(balanceAfter).to.be.gt(balanceBefore);
        
        const position = await staking.getPosition(user1.address);
        expect(position.isActive).to.be.false;
      });
    });
    
    describe("Emergency Withdrawal", function () {
      it("Should allow emergency withdrawal with 20% penalty", async function () {
        const { dtgc, staking, user1 } = await loadFixture(deployStakingFixture);
        
        const stakeAmount = ethers.parseEther("10000");
        await dtgc.connect(user1).approve(await staking.getAddress(), stakeAmount);
        await staking.connect(user1).stake(stakeAmount, 2);
        
        const principal = stakeAmount * 9500n / 10000n;
        const expectedPenalty = principal * 2000n / 10000n;
        const expectedReturn = principal - expectedPenalty;
        
        const balanceBefore = await dtgc.balanceOf(user1.address);
        await staking.connect(user1).emergencyWithdraw();
        const balanceAfter = await dtgc.balanceOf(user1.address);
        
        expect(balanceAfter - balanceBefore).to.equal(expectedReturn);
      });
    });
  });
});

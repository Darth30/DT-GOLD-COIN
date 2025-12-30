import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ethers } from 'ethers';
import {
  CONTRACTS,
  TOKENS,
  STAKING_TIERS,
  DIAMOND_TIER,
  STAKING_V2_ABI,
  LP_STAKING_V2_ABI,
  DAO_VOTING_ABI,
  ERC20_ABI,
  CHAIN_ID,
  EXPLORER,
  FEES,
  VOTING_OPTIONS,
  BURN_ADDRESS,
} from './config/constants';

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║     🏆 DTGC PREMIUM STAKING PLATFORM 🏆                      ║
    ║                                                               ║
    ║     ✦ Marbled White & Real Gold Design                       ║
    ║     ✦ DAO Voting Integration                                 ║
    ║     ✦ Live Burn Tracker                                      ║
    ║     ✦ Premium Animations                                     ║
    ║                                                               ║
    ║                    dump.tires                                 ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

// ═══════════════════════════════════════════════════════════════
//                    BURNED LP DATA (REAL)
// ═══════════════════════════════════════════════════════════════

const BURNED_LPS = [
  { name: 'URMOM/PLS', address: '0x682B82baAC38dDb185D77deAF98D9D246EF9c9E5', plpBurned: 87226017 },
  { name: 'URMOM/DTGC', address: '0x1891bD6A959B32977c438f3022678a8659364A72', plpBurned: 64850000 },
  { name: 'URMOM/pHEX', address: '0x6Bd31Cdc8c87F3bE93bEaC2E4F58DAeEf1f7905e', plpBurned: 61000000 },
  { name: 'URMOM/INC', address: '0xc8EC3c754B259fB7503072058A71d00cc20121DF', plpBurned: 3000000 },
  { name: 'URMOM/pWBTC', address: '0xccD9751D7E04cF8c8F95D5a06C900f7a2D0a2cA1', plpBurned: 0 },
];

const BURN_BREAKDOWN = [
  { pool: 'PTGC Pool', amount: 31232571 },
  { pool: 'PLS Pool', amount: 26643051 },
  { pool: 'HEX Pool', amount: 11919546 },
  { pool: 'PLSX Pool', amount: 11093073 },
  { pool: 'PLS Pool 2', amount: 6117908 },
  { pool: 'INC Pool', amount: 10068493 },
  { pool: 'pHEX Pool', amount: 5975013 },
];

// ═══════════════════════════════════════════════════════════════
//                         STYLES
// ═══════════════════════════════════════════════════════════════

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gold-bright: #FFF1A8;
    --gold-light: #FFE55C;
    --gold: #D4AF37;
    --gold-dark: #B8860B;
    --gold-deep: #8B6914;
    --platinum: #E5E4E2;
    --platinum-shine: #F8F8F8;
    --diamond: #B9F2FF;
    --diamond-dark: #00BCD4;
    --emerald: #50C878;
    --ruby: #E0115F;
    --marble-white: #FEFEFE;
    --marble-gray: #F5F5F5;
    --marble-vein: #E8E8E8;
    --obsidian: #0D0D0D;
    --charcoal: #1A1A1A;
    --text-dark: #1A1A1A;
    --text-medium: #4A4A4A;
    --text-light: #7A7A7A;
    --success: #2E7D32;
    --error: #C62828;
    --glow-gold: 0 0 40px rgba(212, 175, 55, 0.4);
    --glow-diamond: 0 0 40px rgba(0, 188, 212, 0.4);
    --shadow-luxury: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--marble-white);
    min-height: 100vh;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  /* ═══════════════════════════════════════════════════════════════
                        ANIMATIONS
     ═══════════════════════════════════════════════════════════════ */

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-gold {
    0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
    50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
  }

  @keyframes rotate-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes particle-rise {
    0% { transform: translateY(100vh) scale(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
  }

  @keyframes glow-pulse {
    0%, 100% { filter: drop-shadow(0 0 10px currentColor); }
    50% { filter: drop-shadow(0 0 25px currentColor); }
  }

  @keyframes border-dance {
    0% { border-color: var(--gold); }
    33% { border-color: var(--diamond); }
    66% { border-color: var(--gold-light); }
    100% { border-color: var(--gold); }
  }

  @keyframes count-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slide-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fire-flicker {
    0%, 100% { transform: scale(1) rotate(-1deg); filter: brightness(1); }
    25% { transform: scale(1.02) rotate(1deg); filter: brightness(1.1); }
    50% { transform: scale(0.98) rotate(-1deg); filter: brightness(0.95); }
    75% { transform: scale(1.01) rotate(0deg); filter: brightness(1.05); }
  }

  /* ═══════════════════════════════════════════════════════════════
                        PARTICLES BACKGROUND
     ═══════════════════════════════════════════════════════════════ */

  .particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--gold);
    border-radius: 50%;
    animation: particle-rise linear infinite;
    opacity: 0;
  }

  .particle:nth-child(odd) {
    background: var(--diamond);
  }

  /* ═══════════════════════════════════════════════════════════════
                        MARBLE TEXTURE
     ═══════════════════════════════════════════════════════════════ */

  .marble-texture {
    background: 
      linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.95) 100%),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(200,200,200,0.03) 10px,
        rgba(200,200,200,0.03) 20px
      );
  }

  /* ═══════════════════════════════════════════════════════════════
                        GOLD EFFECTS
     ═══════════════════════════════════════════════════════════════ */

  .gold-text {
    background: linear-gradient(
      135deg, 
      var(--gold-bright) 0%, 
      var(--gold-light) 25%, 
      var(--gold) 50%, 
      var(--gold-dark) 75%, 
      var(--gold-deep) 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  .gold-border {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark)) border-box;
  }

  .gold-glow {
    animation: pulse-gold 2s ease-in-out infinite;
  }

  /* ═══════════════════════════════════════════════════════════════
                        APP CONTAINER
     ═══════════════════════════════════════════════════════════════ */

  .app-container {
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }

  /* ═══════════════════════════════════════════════════════════════
                        NAVIGATION
     ═══════════════════════════════════════════════════════════════ */

  .nav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--marble-vein);
    transition: all 0.3s ease;
  }

  .nav-header.scrolled {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 16px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo-mark {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-weight: 900;
    font-size: 1.2rem;
    color: var(--charcoal);
    box-shadow: var(--glow-gold);
    animation: float 3s ease-in-out infinite;
  }

  .logo-text-group {
    display: flex;
    flex-direction: column;
  }

  .logo-text {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 3px;
  }

  .logo-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.75rem;
    color: var(--text-light);
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    gap: 8px;
  }

  .nav-link {
    padding: 12px 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-medium);
    background: transparent;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--gold-light), var(--gold));
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::before,
  .nav-link.active::before {
    width: 80%;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--gold-dark);
  }

  .connect-btn {
    padding: 14px 32px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--charcoal);
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    background-size: 200% auto;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .connect-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    background-position: right center;
  }

  .connect-btn.connected {
    background: linear-gradient(135deg, var(--platinum-shine) 0%, var(--platinum) 100%);
    border: 2px solid var(--gold);
  }

  /* ═══════════════════════════════════════════════════════════════
                        HERO SECTION
     ═══════════════════════════════════════════════════════════════ */

  .hero-section {
    padding: 160px 40px 100px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at top, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at bottom, rgba(0, 188, 212, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%);
    border: 1px solid rgba(212, 175, 55, 0.3);
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gold-dark);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    animation: slide-in-up 0.6s ease;
  }

  .hero-title {
    font-family: 'Cinzel', serif;
    font-size: 4.5rem;
    font-weight: 900;
    letter-spacing: 6px;
    margin-bottom: 20px;
    line-height: 1.1;
    animation: slide-in-up 0.6s ease 0.1s both;
  }

  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    color: var(--text-medium);
    letter-spacing: 3px;
    margin-bottom: 50px;
    font-weight: 400;
    animation: slide-in-up 0.6s ease 0.2s both;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    animation: slide-in-up 0.6s ease 0.3s both;
  }

  .hero-stat {
    text-align: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    border: 1px solid var(--marble-vein);
    min-width: 180px;
    transition: all 0.3s ease;
  }

  .hero-stat:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-luxury);
    border-color: var(--gold);
  }

  .hero-stat-value {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .hero-stat-label {
    font-size: 0.75rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  /* ═══════════════════════════════════════════════════════════════
                        MAIN CONTENT
     ═══════════════════════════════════════════════════════════════ */

  .main-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px 100px;
  }

  .section {
    margin-bottom: 80px;
    animation: slide-in-up 0.6s ease both;
  }

  .section-header {
    text-align: center;
    margin-bottom: 50px;
  }

  .section-title {
    font-family: 'Cinzel', serif;
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 16px;
  }

  .section-divider {
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 0 auto;
  }

  .section-description {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: var(--text-medium);
    margin-top: 16px;
    letter-spacing: 1px;
  }

  /* ═══════════════════════════════════════════════════════════════
                        TIER CARDS
     ═══════════════════════════════════════════════════════════════ */

  .tiers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  @media (max-width: 1200px) {
    .tiers-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .tiers-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.5rem; }
    .nav-content { flex-direction: column; gap: 16px; }
    .nav-links { display: none; }
  }

  .tier-card {
    background: linear-gradient(180deg, #FFFFFF 0%, var(--marble-gray) 100%);
    border-radius: 24px;
    padding: 36px 28px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    cursor: pointer;
  }

  .tier-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--tier-gradient);
  }

  .tier-card::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(var(--tier-rgb), 0.03) 100%);
    pointer-events: none;
  }

  .tier-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: var(--shadow-luxury);
  }

  .tier-card.selected {
    border-color: var(--gold);
    box-shadow: var(--glow-gold);
  }

  .tier-card.diamond {
    background: linear-gradient(180deg, #F0FFFF 0%, #E0F7FA 100%);
  }

  .tier-card.diamond::before {
    background: linear-gradient(90deg, var(--diamond), var(--diamond-dark), var(--diamond));
    background-size: 200% auto;
    animation: shimmer 2s linear infinite;
  }

  .tier-card.diamond.selected {
    border-color: var(--diamond-dark);
    box-shadow: var(--glow-diamond);
  }

  .tier-icon {
    font-size: 4rem;
    margin-bottom: 16px;
    animation: float 3s ease-in-out infinite;
  }

  .tier-name {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .tier-apr-container {
    margin: 20px 0;
  }

  .tier-apr {
    font-family: 'Cinzel', serif;
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1;
  }

  .tier-apr-label {
    font-size: 1rem;
    color: var(--text-light);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .tier-features {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--marble-vein);
    text-align: left;
  }

  .tier-feature {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 0.9rem;
  }

  .tier-feature-label {
    color: var(--text-light);
  }

  .tier-feature-value {
    font-weight: 600;
    color: var(--text-dark);
  }

  .tier-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 6px 12px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 20px;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
    color: var(--charcoal);
  }

  .tier-badge.lp {
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
  }

  /* ═══════════════════════════════════════════════════════════════
                        STAKING FORM
     ═══════════════════════════════════════════════════════════════ */

  .staking-panel {
    max-width: 650px;
    margin: 60px auto 0;
    background: linear-gradient(180deg, #FFFFFF 0%, var(--marble-gray) 100%);
    border-radius: 32px;
    padding: 48px;
    box-shadow: var(--shadow-luxury);
    border: 1px solid var(--marble-vein);
    position: relative;
    overflow: hidden;
  }

  .staking-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--gold-light), var(--gold), var(--diamond), var(--gold), var(--gold-light));
    background-size: 200% auto;
    animation: shimmer 3s linear infinite;
  }

  .panel-title {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 36px;
  }

  .input-group {
    margin-bottom: 28px;
  }

  .input-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .input-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-medium);
    letter-spacing: 1px;
  }

  .balance-display {
    font-size: 0.85rem;
    color: var(--gold-dark);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .balance-display:hover {
    color: var(--gold);
    text-decoration: underline;
  }

  .input-container {
    position: relative;
  }

  .stake-input {
    width: 100%;
    padding: 20px 120px 20px 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    border: 2px solid var(--marble-vein);
    border-radius: 16px;
    background: #FFFFFF;
    transition: all 0.3s ease;
    color: var(--text-dark);
  }

  .stake-input:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
  }

  .stake-input::placeholder {
    color: var(--text-light);
  }

  .input-suffix {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .token-badge {
    padding: 6px 12px;
    background: var(--marble-gray);
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-medium);
  }

  .max-btn {
    padding: 10px 18px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--charcoal);
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: 1px;
  }

  .max-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  }

  .action-btn {
    width: 100%;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .action-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  .action-btn:hover::before {
    left: 100%;
  }

  .action-btn.primary {
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    color: var(--charcoal);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.35);
  }

  .action-btn.primary:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.45);
  }

  .action-btn.secondary {
    background: linear-gradient(135deg, var(--platinum-shine) 0%, var(--platinum) 100%);
    color: var(--text-dark);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  .fee-breakdown {
    margin-top: 28px;
    padding: 24px;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(212, 175, 55, 0.02) 100%);
    border: 1px solid rgba(212, 175, 55, 0.2);
    border-radius: 16px;
  }

  .fee-title {
    font-family: 'Cinzel', serif;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 16px;
    color: var(--gold-dark);
  }

  .fee-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 0.85rem;
    color: var(--text-medium);
  }

  .fee-row span:last-child {
    font-weight: 600;
  }

  /* ═══════════════════════════════════════════════════════════════
                        POSITION CARD
     ═══════════════════════════════════════════════════════════════ */

  .position-card {
    max-width: 800px;
    margin: 0 auto 60px;
    background: linear-gradient(180deg, #FFFFFF 0%, var(--marble-gray) 100%);
    border-radius: 32px;
    padding: 48px;
    border: 3px solid var(--gold);
    box-shadow: var(--glow-gold);
    position: relative;
    overflow: hidden;
  }

  .position-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .position-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--marble-vein);
  }

  .position-title {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 3px;
  }

  .position-tier-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--charcoal);
  }

  .position-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 36px;
  }

  @media (max-width: 768px) {
    .position-stats { grid-template-columns: repeat(2, 1fr); }
  }

  .position-stat {
    text-align: center;
    padding: 24px;
    background: rgba(212, 175, 55, 0.05);
    border-radius: 16px;
    transition: all 0.3s ease;
  }

  .position-stat:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: translateY(-3px);
  }

  .position-stat-value {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .position-stat-label {
    font-size: 0.7rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .progress-container {
    margin-bottom: 36px;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 0.9rem;
  }

  .progress-bar {
    height: 12px;
    background: var(--marble-vein);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark));
    border-radius: 6px;
    transition: width 1s ease;
    position: relative;
  }

  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s linear infinite;
  }

  .position-actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 600px) {
    .position-actions { grid-template-columns: 1fr; }
  }

  .action-btn.danger {
    background: linear-gradient(135deg, #FFCDD2 0%, #EF9A9A 100%);
    color: #C62828;
  }

  /* ═══════════════════════════════════════════════════════════════
                        BURN TRACKER
     ═══════════════════════════════════════════════════════════════ */

  .burn-section {
    background: linear-gradient(180deg, #1A0A00 0%, #0D0505 100%);
    border-radius: 32px;
    padding: 60px;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
  }

  .burn-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at top left, rgba(255, 87, 34, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(255, 152, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .burn-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 48px;
    position: relative;
  }

  .burn-icon {
    font-size: 4rem;
    animation: fire-flicker 1s ease-in-out infinite;
  }

  .burn-title {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(135deg, #FF9800 0%, #FF5722 50%, #F44336 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .burn-subtitle {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
    margin-top: 4px;
  }

  .burn-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 48px;
    position: relative;
  }

  @media (max-width: 900px) {
    .burn-stats-grid { grid-template-columns: repeat(2, 1fr); }
  }

  .burn-stat-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 152, 0, 0.3);
    border-radius: 20px;
    padding: 28px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .burn-stat-card:hover {
    background: rgba(255, 152, 0, 0.1);
    border-color: #FF9800;
    transform: translateY(-5px);
  }

  .burn-stat-value {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #FFE082 0%, #FF9800 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .burn-stat-label {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .burn-pools-title {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    letter-spacing: 3px;
    margin-bottom: 24px;
    color: rgba(255, 255, 255, 0.8);
    position: relative;
  }

  .burn-pools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 48px;
    position: relative;
  }

  @media (max-width: 900px) {
    .burn-pools-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .burn-pools-grid { grid-template-columns: 1fr; }
  }

  .burn-pool-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 152, 0, 0.2);
    border-radius: 16px;
    padding: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .burn-pool-card:hover {
    background: rgba(255, 152, 0, 0.1);
    border-color: #FF9800;
  }

  .burn-pool-name {
    font-weight: 600;
    margin-bottom: 8px;
    color: #FFFFFF;
  }

  .burn-pool-value {
    font-family: 'Cinzel', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #FF9800;
    margin-bottom: 8px;
  }

  .burn-pool-address {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.4);
    font-family: monospace;
  }

  .burn-address-box {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 152, 0, 0.3);
    border-radius: 16px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    position: relative;
  }

  .burn-address-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 4px;
  }

  .burn-address-value {
    font-family: monospace;
    font-size: 0.9rem;
    color: #FF9800;
  }

  .burn-view-btn {
    padding: 12px 24px;
    background: linear-gradient(135deg, #FF9800 0%, #FF5722 100%);
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .burn-view-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.4);
  }

  /* ═══════════════════════════════════════════════════════════════
                        DAO VOTING
     ═══════════════════════════════════════════════════════════════ */

  .voting-section {
    background: linear-gradient(180deg, #0D1421 0%, #0A0E14 100%);
    border-radius: 32px;
    padding: 60px;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
  }

  .voting-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at top, rgba(0, 188, 212, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .voting-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 48px;
    position: relative;
  }

  .voting-icon {
    font-size: 4rem;
    animation: glow-pulse 2s ease-in-out infinite;
    color: var(--diamond);
  }

  .voting-title {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .voting-subtitle {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
    margin-top: 4px;
  }

  .voting-eligibility {
    background: rgba(0, 188, 212, 0.1);
    border: 1px solid rgba(0, 188, 212, 0.3);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 48px;
    position: relative;
  }

  .eligibility-title {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    letter-spacing: 2px;
    margin-bottom: 16px;
    color: var(--diamond);
  }

  .eligibility-items {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  .eligibility-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .eligibility-check {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }

  .eligibility-check.active {
    background: var(--diamond-dark);
    color: #FFFFFF;
  }

  .eligibility-check.inactive {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.4);
  }

  .voting-options-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 48px;
    position: relative;
  }

  @media (max-width: 768px) {
    .voting-options-grid { grid-template-columns: 1fr; }
  }

  .voting-option {
    background: rgba(255, 255, 255, 0.03);
    border: 2px solid rgba(0, 188, 212, 0.2);
    border-radius: 20px;
    padding: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .voting-option:hover {
    background: rgba(0, 188, 212, 0.1);
    border-color: var(--diamond);
  }

  .voting-option.selected {
    background: rgba(0, 188, 212, 0.15);
    border-color: var(--diamond);
    box-shadow: 0 0 30px rgba(0, 188, 212, 0.3);
  }

  .voting-option-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
  }

  .voting-option-letter {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-weight: 800;
    font-size: 1.2rem;
    color: var(--charcoal);
  }

  .voting-option-name {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #FFFFFF;
  }

  .voting-option-desc {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
  }

  .voting-option-votes {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .votes-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .votes-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--diamond), var(--diamond-dark));
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .votes-count {
    font-size: 0.8rem;
    color: var(--diamond);
  }

  .vote-btn {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
    border: none;
    border-radius: 16px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--charcoal);
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
  }

  .vote-btn:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: var(--glow-diamond);
  }

  .vote-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ═══════════════════════════════════════════════════════════════
                        FOOTER
     ═══════════════════════════════════════════════════════════════ */

  .footer {
    text-align: center;
    padding: 60px 40px;
    background: linear-gradient(180deg, var(--marble-gray) 0%, var(--marble-vein) 100%);
    border-top: 1px solid var(--marble-vein);
  }

  .footer-logo {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 4px;
    margin-bottom: 24px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .footer-link {
    color: var(--text-medium);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s ease;
    letter-spacing: 1px;
  }

  .footer-link:hover {
    color: var(--gold);
  }

  .footer-divider {
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 0 auto 24px;
  }

  .footer-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    color: var(--text-light);
    letter-spacing: 2px;
  }

  /* ═══════════════════════════════════════════════════════════════
                        TOAST & UTILITIES
     ═══════════════════════════════════════════════════════════════ */

  .toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 18px 28px;
    border-radius: 16px;
    font-size: 0.9rem;
    font-weight: 500;
    animation: slide-in-right 0.4s ease;
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: var(--shadow-luxury);
  }

  .toast.success {
    background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
    border: 1px solid #81C784;
    color: #2E7D32;
  }

  .toast.error {
    background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
    border: 1px solid #E57373;
    color: #C62828;
  }

  .toast.info {
    background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
    border: 1px solid #64B5F6;
    color: #1565C0;
  }

  .spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: rotate-slow 0.8s linear infinite;
  }

  .connect-prompt {
    text-align: center;
    padding: 80px 40px;
    background: rgba(212, 175, 55, 0.03);
    border-radius: 32px;
    border: 2px dashed var(--gold);
  }

  .connect-prompt-icon {
    font-size: 4rem;
    margin-bottom: 24px;
    animation: float 3s ease-in-out infinite;
  }

  .connect-prompt-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    color: var(--text-medium);
    margin-bottom: 32px;
    letter-spacing: 1px;
  }
`;

// ═══════════════════════════════════════════════════════════════
//                         UTILITIES
// ═══════════════════════════════════════════════════════════════

const formatNumber = (num, decimals = 2) => {
  if (!num || isNaN(num)) return '0';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(num);
};

const formatAddress = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';

const formatTime = (seconds) => {
  if (!seconds || seconds <= 0) return 'Ready';
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
};

// ═══════════════════════════════════════════════════════════════
//                    PARTICLES COMPONENT
// ═══════════════════════════════════════════════════════════════

const Particles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 20,
      size: 2 + Math.random() * 4,
    })), []
  );

  return (
    <div className="particles-container">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
//                         MAIN APP
// ═══════════════════════════════════════════════════════════════

export default function App() {
  // State
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [activeTab, setActiveTab] = useState('stake');
  const [scrolled, setScrolled] = useState(false);

  const [dtgcBalance, setDtgcBalance] = useState('0');
  const [lpBalance, setLpBalance] = useState('0');
  const [selectedTier, setSelectedTier] = useState(null);
  const [stakeAmount, setStakeAmount] = useState('');
  const [isLP, setIsLP] = useState(false);

  const [position, setPosition] = useState(null);
  const [lpPosition, setLpPosition] = useState(null);
  const [rewards, setRewards] = useState({ base: '0', feeShare: '0', bonus: '0' });
  const [contractStats, setContractStats] = useState({ totalStaked: '0', stakers: '0' });

  const [canVote, setCanVote] = useState(false);
  const [selectedVote, setSelectedVote] = useState(null);
  const [proposal, setProposal] = useState(null);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Burn calculations
  const totalUrmomBurned = useMemo(() => 
    BURN_BREAKDOWN.reduce((sum, item) => sum + item.amount, 0), []
  );
  const totalLPBurned = useMemo(() => 
    BURNED_LPS.reduce((sum, lp) => sum + lp.plpBurned, 0), []
  );

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Connect Wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      showToast('Please install MetaMask', 'error');
      return;
    }

    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();

      if (Number(network.chainId) !== CHAIN_ID) {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x171' }],
        });
      }

      setProvider(provider);
      setSigner(signer);
      setAccount(accounts[0]);
      showToast('Wallet connected successfully', 'success');
    } catch (err) {
      console.error(err);
      showToast('Connection failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Load data
  const loadData = useCallback(async () => {
    if (!provider || !account) return;

    try {
      const dtgc = new ethers.Contract(TOKENS.DTGC.address, ERC20_ABI, provider);
      const lp = new ethers.Contract(TOKENS.LP.address, ERC20_ABI, provider);
      const staking = new ethers.Contract(CONTRACTS.STAKING_V2, STAKING_V2_ABI, provider);
      const lpStaking = new ethers.Contract(CONTRACTS.LP_STAKING_V2, LP_STAKING_V2_ABI, provider);

      const [dtgcBal, lpBal, pos, lpPos, stats, canVoteResult] = await Promise.all([
        dtgc.balanceOf(account),
        lp.balanceOf(account),
        staking.getPosition(account),
        lpStaking.getPosition(account),
        staking.getContractStats(),
        staking.canVote(account),
      ]);

      setDtgcBalance(ethers.formatEther(dtgcBal));
      setLpBalance(ethers.formatEther(lpBal));
      setCanVote(canVoteResult);

      setContractStats({
        totalStaked: ethers.formatEther(stats[0]),
        stakers: stats[4].toString(),
      });

      if (pos[6]) {
        setPosition({
          amount: ethers.formatEther(pos[0]),
          unlockTime: Number(pos[2]),
          lockPeriod: Number(pos[3]),
          apr: Number(pos[4]) / 100,
          bonus: Number(pos[5]) / 100,
          timeRemaining: Number(pos[7]),
        });
        const r = await staking.calculateAllRewards(account);
        setRewards({
          base: ethers.formatEther(r[0]),
          feeShare: ethers.formatEther(r[1]),
          bonus: ethers.formatEther(r[2]),
        });
      } else {
        setPosition(null);
      }

      if (lpPos[6]) {
        setLpPosition({
          amount: ethers.formatEther(lpPos[0]),
          unlockTime: Number(lpPos[2]),
          pendingReward: ethers.formatEther(lpPos[3]),
          pendingBonus: ethers.formatEther(lpPos[4]),
          boost: Number(lpPos[5]) / 10000,
          timeRemaining: Number(lpPos[7]),
        });
      } else {
        setLpPosition(null);
      }
    } catch (err) {
      console.error('Load data error:', err);
    }
  }, [provider, account]);

  useEffect(() => {
    if (account) loadData();
  }, [account, loadData]);

  // Staking functions
  const handleStake = async () => {
    if (!signer || !stakeAmount || selectedTier === null) return;
    try {
      setLoading(true);
      const amount = ethers.parseEther(stakeAmount);
      
      if (isLP) {
        const lp = new ethers.Contract(TOKENS.LP.address, ERC20_ABI, signer);
        const staking = new ethers.Contract(CONTRACTS.LP_STAKING_V2, LP_STAKING_V2_ABI, signer);
        const allowance = await lp.allowance(account, CONTRACTS.LP_STAKING_V2);
        if (allowance < amount) {
          showToast('Approving LP tokens...', 'info');
          await (await lp.approve(CONTRACTS.LP_STAKING_V2, ethers.MaxUint256)).wait();
        }
        showToast('Staking LP...', 'info');
        await (await staking.stake(amount)).wait();
      } else {
        const dtgc = new ethers.Contract(TOKENS.DTGC.address, ERC20_ABI, signer);
        const staking = new ethers.Contract(CONTRACTS.STAKING_V2, STAKING_V2_ABI, signer);
        const allowance = await dtgc.allowance(account, CONTRACTS.STAKING_V2);
        if (allowance < amount) {
          showToast('Approving DTGC...', 'info');
          await (await dtgc.approve(CONTRACTS.STAKING_V2, ethers.MaxUint256)).wait();
        }
        showToast('Staking DTGC...', 'info');
        await (await staking.stake(amount, selectedTier)).wait();
      }

      showToast('Staked successfully!', 'success');
      setStakeAmount('');
      await loadData();
    } catch (err) {
      showToast(err.reason || 'Transaction failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async (isLPStaking = false) => {
    if (!signer) return;
    try {
      setLoading(true);
      const staking = new ethers.Contract(
        isLPStaking ? CONTRACTS.LP_STAKING_V2 : CONTRACTS.STAKING_V2,
        isLPStaking ? LP_STAKING_V2_ABI : STAKING_V2_ABI,
        signer
      );
      showToast('Withdrawing...', 'info');
      await (await staking.withdraw()).wait();
      showToast('Withdrawn successfully!', 'success');
      await loadData();
    } catch (err) {
      showToast(err.reason || 'Transaction failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleClaim = async (isLPStaking = false) => {
    if (!signer) return;
    try {
      setLoading(true);
      const staking = new ethers.Contract(
        isLPStaking ? CONTRACTS.LP_STAKING_V2 : CONTRACTS.STAKING_V2,
        isLPStaking ? LP_STAKING_V2_ABI : STAKING_V2_ABI,
        signer
      );
      showToast('Claiming rewards...', 'info');
      await (await staking.claimRewards()).wait();
      showToast('Rewards claimed!', 'success');
      await loadData();
    } catch (err) {
      showToast(err.reason || 'Transaction failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEmergencyWithdraw = async (isLPStaking = false) => {
    if (!signer || !confirm('Emergency Exit: 20% penalty (2% dev + 18% DAO). Proceed?')) return;
    try {
      setLoading(true);
      const staking = new ethers.Contract(
        isLPStaking ? CONTRACTS.LP_STAKING_V2 : CONTRACTS.STAKING_V2,
        isLPStaking ? LP_STAKING_V2_ABI : STAKING_V2_ABI,
        signer
      );
      await (await staking.emergencyWithdraw()).wait();
      showToast('Emergency withdrawal complete', 'success');
      await loadData();
    } catch (err) {
      showToast(err.reason || 'Transaction failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Render
  return (
    <>
      <style>{styles}</style>
      <Particles />
      
      <div className="app-container marble-texture">
        {/* Navigation */}
        <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-content">
            <div className="logo-section">
              <div className="logo-mark">DT</div>
              <div className="logo-text-group">
                <span className="logo-text gold-text">DTGC</span>
                <span className="logo-tagline">dump.tires</span>
              </div>
            </div>

            <nav className="nav-links">
              <button className={`nav-link ${activeTab === 'stake' ? 'active' : ''}`} onClick={() => setActiveTab('stake')}>Stake</button>
              <button className={`nav-link ${activeTab === 'burn' ? 'active' : ''}`} onClick={() => setActiveTab('burn')}>Burn Tracker</button>
              <button className={`nav-link ${activeTab === 'vote' ? 'active' : ''}`} onClick={() => setActiveTab('vote')}>DAO Vote</button>
            </nav>

            <button className={`connect-btn ${account ? 'connected' : ''}`} onClick={connectWallet} disabled={loading}>
              {loading && <span className="spinner" />}
              {account ? formatAddress(account) : 'Connect Wallet'}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-badge">✦ Premium PulseChain Staking ✦</div>
          <h1 className="hero-title gold-text">DTGC STAKING</h1>
          <p className="hero-subtitle">Stake • Earn • Govern • Prosper</p>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value gold-text">{formatNumber(parseFloat(contractStats.totalStaked))}</div>
              <div className="hero-stat-label">Total Staked</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value gold-text">{contractStats.stakers}</div>
              <div className="hero-stat-label">Stakers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value gold-text">12%</div>
              <div className="hero-stat-label">Max APR</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value gold-text">{formatNumber(totalUrmomBurned)}</div>
              <div className="hero-stat-label">URMOM Burned</div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="main-content">
          {/* STAKE TAB */}
          {activeTab === 'stake' && (
            <>
              {/* Active Positions */}
              {position && (
                <section className="section">
                  <div className="position-card">
                    <div className="position-header">
                      <h3 className="position-title gold-text">YOUR DTGC POSITION</h3>
                      <span className="position-tier-badge">
                        {STAKING_TIERS.find(t => t.apr === position.apr)?.icon || '🥇'} {STAKING_TIERS.find(t => t.apr === position.apr)?.name || 'Staked'}
                      </span>
                    </div>

                    <div className="position-stats">
                      <div className="position-stat">
                        <div className="position-stat-value gold-text">{formatNumber(parseFloat(position.amount))}</div>
                        <div className="position-stat-label">Staked DTGC</div>
                      </div>
                      <div className="position-stat">
                        <div className="position-stat-value gold-text">{position.apr}%</div>
                        <div className="position-stat-label">APR</div>
                      </div>
                      <div className="position-stat">
                        <div className="position-stat-value gold-text">{formatNumber(parseFloat(rewards.base) + parseFloat(rewards.feeShare) + parseFloat(rewards.bonus))}</div>
                        <div className="position-stat-label">Rewards</div>
                      </div>
                      <div className="position-stat">
                        <div className="position-stat-value">{formatTime(position.timeRemaining)}</div>
                        <div className="position-stat-label">Remaining</div>
                      </div>
                    </div>

                    <div className="progress-container">
                      <div className="progress-header">
                        <span>Lock Progress</span>
                        <span className="gold-text">{Math.min(100, Math.round((1 - position.timeRemaining / position.lockPeriod) * 100))}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${Math.min(100, Math.round((1 - position.timeRemaining / position.lockPeriod) * 100))}%` }} />
                      </div>
                    </div>

                    <div className="position-actions">
                      <button className="action-btn primary" onClick={() => handleClaim(false)} disabled={loading}>Claim Rewards</button>
                      <button className="action-btn primary" onClick={() => handleWithdraw(false)} disabled={loading || position.timeRemaining > 0}>Withdraw</button>
                      <button className="action-btn danger" onClick={() => handleEmergencyWithdraw(false)} disabled={loading}>EES Exit</button>
                    </div>
                  </div>
                </section>
              )}

              {lpPosition && (
                <section className="section">
                  <div className="position-card" style={{ borderColor: 'var(--diamond-dark)', boxShadow: 'var(--glow-diamond)' }}>
                    <div className="position-header">
                      <h3 className="position-title" style={{ color: 'var(--diamond-dark)' }}>YOUR LP POSITION</h3>
                      <span className="position-tier-badge" style={{ background: 'linear-gradient(135deg, var(--diamond), var(--diamond-dark))' }}>💎 Diamond</span>
                    </div>

                    <div className="position-stats">
                      <div className="position-stat">
                        <div className="position-stat-value" style={{ color: 'var(--diamond-dark)' }}>{formatNumber(parseFloat(lpPosition.amount))}</div>
                        <div className="position-stat-label">Staked LP</div>
                      </div>
                      <div className="position-stat">
                        <div className="position-stat-value" style={{ color: 'var(--diamond-dark)' }}>{lpPosition.boost.toFixed(2)}x</div>
                        <div className="position-stat-label">Boost</div>
                      </div>
                      <div className="position-stat">
                        <div className="position-stat-value" style={{ color: 'var(--diamond-dark)' }}>{formatNumber(parseFloat(lpPosition.pendingReward) + parseFloat(lpPosition.pendingBonus))}</div>
                        <div className="position-stat-label">Pending DTGC</div>
                      </div>
                      <div className="position-stat">
                        <div className="position-stat-value">{formatTime(lpPosition.timeRemaining)}</div>
                        <div className="position-stat-label">Remaining</div>
                      </div>
                    </div>

                    <div className="position-actions">
                      <button className="action-btn primary" onClick={() => handleClaim(true)} disabled={loading}>Claim Rewards</button>
                      <button className="action-btn primary" onClick={() => handleWithdraw(true)} disabled={loading || lpPosition.timeRemaining > 0}>Withdraw</button>
                      <button className="action-btn danger" onClick={() => handleEmergencyWithdraw(true)} disabled={loading}>EES Exit</button>
                    </div>
                  </div>
                </section>
              )}

              {/* Tier Selection */}
              {!position && !lpPosition && (
                <section className="section">
                  <div className="section-header">
                    <h2 className="section-title gold-text">SELECT YOUR TIER</h2>
                    <div className="section-divider" />
                    <p className="section-description">Choose your staking tier based on lock duration and desired APR</p>
                  </div>

                  <div className="tiers-grid">
                    {STAKING_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        className={`tier-card ${selectedTier === tier.id && !isLP ? 'selected' : ''}`}
                        style={{ '--tier-gradient': tier.gradient }}
                        onClick={() => { setSelectedTier(tier.id); setIsLP(false); }}
                      >
                        <div className="tier-icon">{tier.icon}</div>
                        <div className="tier-name" style={{ color: tier.color }}>{tier.name}</div>
                        <div className="tier-apr-container">
                          <div className="tier-apr gold-text">{tier.apr}%</div>
                          <div className="tier-apr-label">APR</div>
                        </div>
                        <div className="tier-features">
                          <div className="tier-feature">
                            <span className="tier-feature-label">Lock</span>
                            <span className="tier-feature-value">{tier.lockDays} Days</span>
                          </div>
                          <div className="tier-feature">
                            <span className="tier-feature-label">Bonus</span>
                            <span className="tier-feature-value">+{tier.bonus}%</span>
                          </div>
                        </div>
                        <span className="tier-badge">DTGC</span>
                      </div>
                    ))}

                    <div
                      className={`tier-card diamond ${isLP ? 'selected' : ''}`}
                      onClick={() => { setSelectedTier(3); setIsLP(true); }}
                    >
                      <div className="tier-icon">{DIAMOND_TIER.icon}</div>
                      <div className="tier-name" style={{ color: DIAMOND_TIER.color }}>{DIAMOND_TIER.name}</div>
                      <div className="tier-apr-container">
                        <div className="tier-apr" style={{ color: 'var(--diamond-dark)' }}>{DIAMOND_TIER.apr}%</div>
                        <div className="tier-apr-label">APR</div>
                      </div>
                      <div className="tier-features">
                        <div className="tier-feature">
                          <span className="tier-feature-label">Lock</span>
                          <span className="tier-feature-value">{DIAMOND_TIER.lockDays} Days</span>
                        </div>
                        <div className="tier-feature">
                          <span className="tier-feature-label">Bonus</span>
                          <span className="tier-feature-value">+{DIAMOND_TIER.bonus}%</span>
                        </div>
                        <div className="tier-feature">
                          <span className="tier-feature-label">Boost</span>
                          <span className="tier-feature-value">1x → 1.5x</span>
                        </div>
                      </div>
                      <span className="tier-badge lp">LP</span>
                    </div>
                  </div>

                  {/* Staking Form */}
                  {selectedTier !== null && account && (
                    <div className="staking-panel">
                      <h3 className="panel-title gold-text">
                        {isLP ? '💎 STAKE LP TOKENS' : `${STAKING_TIERS[selectedTier]?.icon} STAKE DTGC`}
                      </h3>

                      <div className="input-group">
                        <div className="input-header">
                          <span className="input-label">Amount</span>
                          <span className="balance-display" onClick={() => setStakeAmount(isLP ? lpBalance : dtgcBalance)}>
                            Balance: {formatNumber(parseFloat(isLP ? lpBalance : dtgcBalance))} {isLP ? 'LP' : 'DTGC'}
                          </span>
                        </div>
                        <div className="input-container">
                          <input
                            type="number"
                            className="stake-input"
                            placeholder="0.00"
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                          />
                          <div className="input-suffix">
                            <span className="token-badge">{isLP ? 'LP' : 'DTGC'}</span>
                            <button className="max-btn" onClick={() => setStakeAmount(isLP ? lpBalance : dtgcBalance)}>MAX</button>
                          </div>
                        </div>
                      </div>

                      <button
                        className="action-btn primary"
                        onClick={handleStake}
                        disabled={loading || !stakeAmount || parseFloat(stakeAmount) <= 0}
                      >
                        {loading && <span className="spinner" />}
                        {isLP ? 'Stake LP Tokens' : 'Stake DTGC'}
                      </button>

                      <div className="fee-breakdown">
                        <div className="fee-title">FEE STRUCTURE</div>
                        <div className="fee-row"><span>Entry Fee</span><span>5% (1% Dev + 4% DAO)</span></div>
                        <div className="fee-row"><span>Exit Fee</span><span>5% (1% Dev + 4% DAO)</span></div>
                        <div className="fee-row"><span>Emergency Exit (EES)</span><span>20% (2% Dev + 18% DAO Vote)</span></div>
                      </div>
                    </div>
                  )}

                  {!account && (
                    <div className="connect-prompt">
                      <div className="connect-prompt-icon">🔐</div>
                      <p className="connect-prompt-text">Connect your wallet to start staking DTGC</p>
                      <button className="action-btn primary" style={{ maxWidth: '300px', margin: '0 auto' }} onClick={connectWallet}>
                        Connect Wallet
                      </button>
                    </div>
                  )}
                </section>
              )}
            </>
          )}

          {/* BURN TAB */}
          {activeTab === 'burn' && (
            <section className="section">
              <div className="burn-section">
                <div className="burn-header">
                  <span className="burn-icon">🔥</span>
                  <div>
                    <h2 className="burn-title">URMOM BURN TRACKER</h2>
                    <p className="burn-subtitle">LP tokens permanently burned at 0x...369</p>
                  </div>
                </div>

                <div className="burn-stats-grid">
                  <div className="burn-stat-card">
                    <div className="burn-stat-value">{formatNumber(totalUrmomBurned)}</div>
                    <div className="burn-stat-label">URMOM Burned</div>
                  </div>
                  <div className="burn-stat-card">
                    <div className="burn-stat-value">{formatNumber(totalLPBurned)}</div>
                    <div className="burn-stat-label">LP Burned</div>
                  </div>
                  <div className="burn-stat-card">
                    <div className="burn-stat-value">{BURNED_LPS.length}</div>
                    <div className="burn-stat-label">Pools Burned</div>
                  </div>
                  <div className="burn-stat-card">
                    <div className="burn-stat-value">{(totalUrmomBurned / 1000000000 * 100).toFixed(2)}%</div>
                    <div className="burn-stat-label">Supply Burned</div>
                  </div>
                </div>

                <h3 className="burn-pools-title">🔥 BURNED LP POOLS</h3>
                <div className="burn-pools-grid">
                  {BURNED_LPS.filter(lp => lp.plpBurned > 0).map((lp, i) => (
                    <a 
                      key={i} 
                      className="burn-pool-card"
                      href={`${EXPLORER}/address/${lp.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="burn-pool-name">{lp.name}</div>
                      <div className="burn-pool-value">{formatNumber(lp.plpBurned)} PLP</div>
                      <div className="burn-pool-address">{formatAddress(lp.address)}</div>
                    </a>
                  ))}
                </div>

                <h3 className="burn-pools-title">📊 URMOM TOKEN BREAKDOWN</h3>
                <div className="burn-pools-grid">
                  {BURN_BREAKDOWN.map((item, i) => (
                    <div key={i} className="burn-pool-card">
                      <div className="burn-pool-name">{item.pool}</div>
                      <div className="burn-pool-value">{formatNumber(item.amount)}</div>
                    </div>
                  ))}
                </div>

                <div className="burn-address-box">
                  <div>
                    <div className="burn-address-label">PulseChain Burn Address</div>
                    <div className="burn-address-value">{BURN_ADDRESS}</div>
                  </div>
                  <a 
                    href={`${EXPLORER}/address/${BURN_ADDRESS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="burn-view-btn"
                  >
                    View on PulseScan →
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* VOTE TAB */}
          {activeTab === 'vote' && (
            <section className="section">
              <div className="voting-section">
                <div className="voting-header">
                  <span className="voting-icon">🗳️</span>
                  <div>
                    <h2 className="voting-title">DAO GOVERNANCE</h2>
                    <p className="voting-subtitle">Vote on EES penalty fund allocation</p>
                  </div>
                </div>

                <div className="voting-eligibility">
                  <div className="eligibility-title">VOTING ELIGIBILITY</div>
                  <div className="eligibility-items">
                    <div className="eligibility-item">
                      <span className={`eligibility-check ${(position || lpPosition) ? 'active' : 'inactive'}`}>
                        {(position || lpPosition) ? '✓' : '○'}
                      </span>
                      <span>Verified Staker</span>
                    </div>
                    <div className="eligibility-item">
                      <span className={`eligibility-check ${parseFloat(dtgcBalance) >= 1000000 ? 'active' : 'inactive'}`}>
                        {parseFloat(dtgcBalance) >= 1000000 ? '✓' : '○'}
                      </span>
                      <span>Hold 1M+ DTGC</span>
                    </div>
                    <div className="eligibility-item">
                      <span className={`eligibility-check ${canVote ? 'active' : 'inactive'}`}>
                        {canVote ? '✓' : '○'}
                      </span>
                      <span style={{ fontWeight: 600, color: canVote ? 'var(--diamond)' : 'inherit' }}>
                        {canVote ? 'You Can Vote!' : 'Not Eligible'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="voting-options-grid">
                  {VOTING_OPTIONS.map((option) => (
                    <div
                      key={option.id}
                      className={`voting-option ${selectedVote === option.id ? 'selected' : ''}`}
                      onClick={() => setSelectedVote(option.id)}
                    >
                      <div className="voting-option-header">
                        <span className="voting-option-letter">{['A', 'B', 'C', 'D'][option.id]}</span>
                        <span className="voting-option-name">{option.name}</span>
                      </div>
                      <p className="voting-option-desc">{option.description}</p>
                      <div className="voting-option-votes">
                        <div className="votes-bar">
                          <div className="votes-fill" style={{ width: `${(option.id + 1) * 15}%` }} />
                        </div>
                        <span className="votes-count">{(option.id + 1) * 3} votes</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="vote-btn"
                  disabled={!canVote || selectedVote === null || loading}
                  onClick={() => showToast('Voting coming soon!', 'info')}
                >
                  {!account ? 'Connect Wallet to Vote' : !canVote ? 'Not Eligible to Vote' : 'Cast Your Vote'}
                </button>
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo gold-text">DTGC</div>
          <div className="footer-links">
            <a href={`${EXPLORER}/address/${CONTRACTS.STAKING_V2}`} target="_blank" rel="noopener noreferrer" className="footer-link">Staking Contract</a>
            <a href={`${EXPLORER}/address/${CONTRACTS.LP_STAKING_V2}`} target="_blank" rel="noopener noreferrer" className="footer-link">LP Staking</a>
            <a href={`${EXPLORER}/address/${CONTRACTS.DAO_VOTING}`} target="_blank" rel="noopener noreferrer" className="footer-link">DAO Voting</a>
            <a href={`${EXPLORER}/address/${TOKENS.DTGC.address}`} target="_blank" rel="noopener noreferrer" className="footer-link">DTGC Token</a>
          </div>
          <div className="footer-divider" />
          <p className="footer-text">© 2024 DTGC • dump.tires • Premium Staking on PulseChain</p>
        </footer>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.type === 'success' && '✓ '}
          {toast.type === 'error' && '✕ '}
          {toast.type === 'info' && 'ℹ '}
          {toast.message}
        </div>
      )}
    </>
  );
}

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Es={exports:{}},Tl={},Fs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),Kc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.memo"),rd=Symbol.for("react.lazy"),va=Symbol.iterator;function ld(e){return e===null||typeof e!="object"?null:(e=va&&e[va]||e["@@iterator"],typeof e=="function"?e:null)}var zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ts=Object.assign,Ps={};function bn(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||zs}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=bn.prototype;function go(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||zs}var ho=go.prototype=new bs;ho.constructor=go;Ts(ho,bn.prototype);ho.isPureReactComponent=!0;var xa=Array.isArray,_s=Object.prototype.hasOwnProperty,vo={current:null},Ds={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)_s.call(t,r)&&!Ds.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:wr,type:e,key:i,ref:o,props:l,_owner:vo.current}}function id(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ya=/\/+/g;function Ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function Qr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case wr:case Kc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ql(o,0):r,xa(l)?(n="",e!=null&&(n=e.replace(ya,"$&/")+"/"),Qr(l,t,n,"",function(f){return f})):l!=null&&(xo(l)&&(l=id(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ya,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",xa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Ql(i,s);o+=Qr(i,t,n,u,l)}else if(u=ld(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Ql(i,s++),o+=Qr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Fr(e,t,n){if(e==null)return e;var r=[],l=0;return Qr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Kr={transition:null},sd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:vo};function Ms(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Fr,forEach:function(e,t,n){Fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fr(e,function(){t++}),t},toArray:function(e){return Fr(e,function(t){return t})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=bn;L.Fragment=Yc;L.Profiler=Zc;L.PureComponent=go;L.StrictMode=Xc;L.Suspense=td;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd;L.act=Ms;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ts({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=vo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)_s.call(t,u)&&!Ds.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:wr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jc,_context:e},e.Consumer=e};L.createElement=Ls;L.createFactory=function(e){var t=Ls.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ed,render:e}};L.isValidElement=xo;L.lazy=function(e){return{$$typeof:rd,_payload:{_status:-1,_result:e},_init:ad}};L.memo=function(e,t){return{$$typeof:nd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};L.unstable_act=Ms;L.useCallback=function(e,t){return he.current.useCallback(e,t)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,t){return he.current.useEffect(e,t)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return he.current.useMemo(e,t)};L.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return he.current.useTransition()};L.version="18.3.1";Fs.exports=L;var D=Fs.exports;const ud=Qc(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=D,dd=Symbol.for("react.element"),fd=Symbol.for("react.fragment"),pd=Object.prototype.hasOwnProperty,md=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gd={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)pd.call(t,r)&&!gd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:dd,type:e,key:i,ref:o,props:l,_owner:md.current}}Tl.Fragment=fd;Tl.jsx=Rs;Tl.jsxs=Rs;Es.exports=Tl;var a=Es.exports,ki={},Os={exports:{}},Le={},As={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,_){var b=j.length;j.push(_);e:for(;0<b;){var K=b-1>>>1,X=j[K];if(0<l(X,_))j[K]=_,j[b]=X,b=K;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var _=j[0],b=j.pop();if(b!==_){j[0]=b;e:for(var K=0,X=j.length,qt=X>>>1;K<qt;){var Re=2*(K+1)-1,en=j[Re],ye=Re+1,Rt=j[ye];if(0>l(en,b))ye<X&&0>l(Rt,en)?(j[K]=Rt,j[ye]=b,K=ye):(j[K]=en,j[Re]=b,K=Re);else if(ye<X&&0>l(Rt,b))j[K]=Rt,j[ye]=b,K=ye;else break e}}return _}function l(j,_){var b=j.sortIndex-_.sortIndex;return b!==0?b:j.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],f=[],h=1,g=null,d=3,k=!1,w=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var _=n(f);_!==null;){if(_.callback===null)r(f);else if(_.startTime<=j)r(f),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(f)}}function x(j){if(S=!1,m(j),!w)if(n(u)!==null)w=!0,Er(N);else{var _=n(f);_!==null&&Mn(x,_.startTime-j)}}function N(j,_){w=!1,S&&(S=!1,p(F),F=-1),k=!0;var b=d;try{for(m(_),g=n(u);g!==null&&(!(g.expirationTime>_)||j&&!xe());){var K=g.callback;if(typeof K=="function"){g.callback=null,d=g.priorityLevel;var X=K(g.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(u)&&r(u),m(_)}else r(u);g=n(u)}if(g!==null)var qt=!0;else{var Re=n(f);Re!==null&&Mn(x,Re.startTime-_),qt=!1}return qt}finally{g=null,d=b,k=!1}}var E=!1,z=null,F=-1,I=5,T=-1;function xe(){return!(e.unstable_now()-T<I)}function gt(){if(z!==null){var j=e.unstable_now();T=j;var _=!0;try{_=z(!0,j)}finally{_?Jt():(E=!1,z=null)}}else E=!1}var Jt;if(typeof c=="function")Jt=function(){c(gt)};else if(typeof MessageChannel<"u"){var Ln=new MessageChannel,ua=Ln.port2;Ln.port1.onmessage=gt,Jt=function(){ua.postMessage(null)}}else Jt=function(){R(gt,0)};function Er(j){z=j,E||(E=!0,Jt())}function Mn(j,_){F=R(function(){j(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Er(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var _=3;break;default:_=d}var b=d;d=_;try{return j()}finally{d=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,_){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var b=d;d=j;try{return _()}finally{d=b}},e.unstable_scheduleCallback=function(j,_,b){var K=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?K+b:K):b=K,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=b+X,j={id:h++,callback:_,priorityLevel:j,startTime:b,expirationTime:X,sortIndex:-1},b>K?(j.sortIndex=b,t(f,j),n(u)===null&&j===n(f)&&(S?(p(F),F=-1):S=!0,Mn(x,b-K))):(j.sortIndex=X,t(u,j),w||k||(w=!0,Er(N))),j},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(j){var _=d;return function(){var b=d;d=_;try{return j.apply(this,arguments)}finally{d=b}}}})(Is);As.exports=Is;var hd=As.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=D,De=hd;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Us=new Set,lr={};function Xt(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(lr[e]=t,e=0;e<t.length;e++)Us.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=Object.prototype.hasOwnProperty,xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ka={},wa={};function yd(e){return wi.call(wa,e)?!0:wi.call(ka,e)?!1:xd.test(e)?wa[e]=!0:(ka[e]=!0,!1)}function kd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,t,n,r){if(t===null||typeof t>"u"||kd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var yo=/[\-:]([a-z])/g;function ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yo,ko);ue[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yo,ko);ue[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yo,ko);ue[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function wo(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wd(t,n,l,r)&&(n=null),r||l===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),on=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),Bs=Symbol.for("react.provider"),$s=Symbol.for("react.context"),No=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),ji=Symbol.for("react.suspense_list"),jo=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Vs=Symbol.for("react.offscreen"),Sa=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Kl;function Gn(e){if(Kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||""}return`
`+Kl+e}var Yl=!1;function Xl(e,t){if(!e||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gn(e):""}function Sd(e){switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 2:case 15:return e=Xl(e.type,!1),e;case 11:return e=Xl(e.type.render,!1),e;case 1:return e=Xl(e.type,!0),e;default:return""}}function Ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case on:return"Portal";case Si:return"Profiler";case So:return"StrictMode";case Ni:return"Suspense";case ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $s:return(e.displayName||"Context")+".Consumer";case Bs:return(e._context.displayName||"Context")+".Provider";case No:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jo:return t=e.displayName||null,t!==null?t:Ci(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Ci(e(t))}catch{}}return null}function Nd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ci(t);case 8:return t===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e){var t=Ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=jd(e))}function Gs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ei(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Na(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hs(e,t){t=t.checked,t!=null&&wo(e,"checked",t,!1)}function Fi(e,t){Hs(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&zi(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zi(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Hn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Qs(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ea(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,Ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function Xs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function Zs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Xs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ed=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bi(e,t){if(t){if(Ed[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function _i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,yn=null,kn=null;function Fa(e){if(e=jr(e)){if(typeof Li!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Ll(t),Li(e.stateNode,e.type,t))}}function Js(e){yn?kn?kn.push(e):kn=[e]:yn=e}function qs(){if(yn){var e=yn,t=kn;if(kn=yn=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function eu(e,t){return e(t)}function tu(){}var Zl=!1;function nu(e,t,n){if(Zl)return e(t,n);Zl=!0;try{return eu(e,t,n)}finally{Zl=!1,(yn!==null||kn!==null)&&(tu(),qs())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Mi=!1;if(ct)try{var On={};Object.defineProperty(On,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Mi=!1}function Fd(e,t,n,r,l,i,o,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var Xn=!1,ol=null,al=!1,Ri=null,zd={onError:function(e){Xn=!0,ol=e}};function Td(e,t,n,r,l,i,o,s,u){Xn=!1,ol=null,Fd.apply(zd,arguments)}function Pd(e,t,n,r,l,i,o,s,u){if(Td.apply(this,arguments),Xn){if(Xn){var f=ol;Xn=!1,ol=null}else throw Error(y(198));al||(al=!0,Ri=f)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function za(e){if(Zt(e)!==e)throw Error(y(188))}function bd(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return za(l),e;if(i===r)return za(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function lu(e){return e=bd(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var ou=De.unstable_scheduleCallback,Ta=De.unstable_cancelCallback,_d=De.unstable_shouldYield,Dd=De.unstable_requestPaint,J=De.unstable_now,Ld=De.unstable_getCurrentPriorityLevel,Eo=De.unstable_ImmediatePriority,au=De.unstable_UserBlockingPriority,sl=De.unstable_NormalPriority,Md=De.unstable_LowPriority,su=De.unstable_IdlePriority,Pl=null,rt=null;function Rd(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Pl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Id,Od=Math.log,Ad=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Od(e)/Ad|0)|0}var br=64,_r=4194304;function Qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Qn(s):(i&=o,i!==0&&(r=Qn(i)))}else o=n&~l,o!==0?r=Qn(o):i!==0&&(r=Qn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),l=1<<n,r|=e[n],t&=~l;return r}function Ud(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ye(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=Ud(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ye(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Fo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,zo,fu,pu,mu,Ai=!1,Dr=[],Nt=null,jt=null,Ct=null,ar=new Map,sr=new Map,yt=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function An(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=jr(t),t!==null&&zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Wd(e,t,n,r,l){switch(t){case"focusin":return Nt=An(Nt,e,t,n,r,l),!0;case"dragenter":return jt=An(jt,e,t,n,r,l),!0;case"mouseover":return Ct=An(Ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return ar.set(i,An(ar.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,sr.set(i,An(sr.get(i)||null,e,t,n,r,l)),!0}return!1}function gu(e){var t=Ut(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=ru(n),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Di=r,n.target.dispatchEvent(r),Di=null}else return t=jr(n),t!==null&&zo(t),e.blockedOn=n,!1;t.shift()}return!0}function ba(e,t,n){Yr(e)&&n.delete(t)}function Gd(){Ai=!1,Nt!==null&&Yr(Nt)&&(Nt=null),jt!==null&&Yr(jt)&&(jt=null),Ct!==null&&Yr(Ct)&&(Ct=null),ar.forEach(ba),sr.forEach(ba)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Ai||(Ai=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Gd)))}function ur(e){function t(l){return In(l,e)}if(0<Dr.length){In(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&In(Nt,e),jt!==null&&In(jt,e),Ct!==null&&In(Ct,e),ar.forEach(t),sr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)gu(n),n.blockedOn===null&&yt.shift()}var wn=mt.ReactCurrentBatchConfig,cl=!0;function Hd(e,t,n,r){var l=A,i=wn.transition;wn.transition=null;try{A=1,To(e,t,n,r)}finally{A=l,wn.transition=i}}function Qd(e,t,n,r){var l=A,i=wn.transition;wn.transition=null;try{A=4,To(e,t,n,r)}finally{A=l,wn.transition=i}}function To(e,t,n,r){if(cl){var l=Ii(e,t,n,r);if(l===null)si(e,t,r,dl,n),Pa(e,r);else if(Wd(l,e,t,n,r))r.stopPropagation();else if(Pa(e,r),t&4&&-1<Vd.indexOf(e)){for(;l!==null;){var i=jr(l);if(i!==null&&du(i),i=Ii(e,t,n,r),i===null&&si(e,t,r,dl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else si(e,t,r,null,n)}}var dl=null;function Ii(e,t,n,r){if(dl=null,e=Co(r),e=Ut(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ld()){case Eo:return 1;case au:return 4;case sl:case Md:return 16;case su:return 536870912;default:return 16}default:return 16}}var wt=null,Po=null,Xr=null;function vu(){if(Xr)return Xr;var e,t=Po,n=t.length,r,l="value"in wt?wt.value:wt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Xr=l.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function _a(){return!1}function Me(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lr:_a,this.isPropagationStopped=_a,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Me(_n),Nr=Q({},_n,{view:0,detail:0}),Kd=Me(Nr),ql,ei,Un,bl=Q({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(ql=e.screenX-Un.screenX,ei=e.screenY-Un.screenY):ei=ql=0,Un=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),Da=Me(bl),Yd=Q({},bl,{dataTransfer:0}),Xd=Me(Yd),Zd=Q({},Nr,{relatedTarget:0}),ti=Me(Zd),Jd=Q({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=Me(Jd),ef=Q({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=Me(ef),nf=Q({},_n,{data:0}),La=Me(nf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function _o(){return af}var sf=Q({},Nr,{key:function(e){if(e.key){var t=rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_o,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=Me(sf),cf=Q({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=Me(cf),df=Q({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_o}),ff=Me(df),pf=Q({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=Me(pf),gf=Q({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=Me(gf),vf=[9,13,27,32],Do=ct&&"CompositionEvent"in window,Zn=null;ct&&"documentMode"in document&&(Zn=document.documentMode);var xf=ct&&"TextEvent"in window&&!Zn,xu=ct&&(!Do||Zn&&8<Zn&&11>=Zn),Ra=" ",Oa=!1;function yu(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function yf(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(Oa=!0,Ra);case"textInput":return e=t.data,e===Ra&&Oa?null:e;default:return null}}function kf(e,t){if(sn)return e==="compositionend"||!Do&&yu(e,t)?(e=vu(),Xr=Po=wt=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wf[e.type]:t==="textarea"}function wu(e,t,n,r){Js(r),t=fl(t,"onChange"),0<t.length&&(n=new bo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,cr=null;function Sf(e){_u(e,0)}function _l(e){var t=dn(e);if(Gs(t))return e}function Nf(e,t){if(e==="change")return t}var Su=!1;if(ct){var ni;if(ct){var ri="oninput"in document;if(!ri){var Ia=document.createElement("div");Ia.setAttribute("oninput","return;"),ri=typeof Ia.oninput=="function"}ni=ri}else ni=!1;Su=ni&&(!document.documentMode||9<document.documentMode)}function Ua(){Jn&&(Jn.detachEvent("onpropertychange",Nu),cr=Jn=null)}function Nu(e){if(e.propertyName==="value"&&_l(cr)){var t=[];wu(t,cr,e,Co(e)),nu(Sf,t)}}function jf(e,t,n){e==="focusin"?(Ua(),Jn=t,cr=n,Jn.attachEvent("onpropertychange",Nu)):e==="focusout"&&Ua()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(cr)}function Ef(e,t){if(e==="click")return _l(t)}function Ff(e,t){if(e==="input"||e==="change")return _l(t)}function zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:zf;function dr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!wi.call(t,l)||!Ze(e[l],t[l]))return!1}return!0}function Ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $a(e,t){var n=Ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ba(n)}}function ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function Lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=Cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ju(n.ownerDocument.documentElement,n)){if(r!==null&&Lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=$a(n,i);var o=$a(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pf=ct&&"documentMode"in document&&11>=document.documentMode,un=null,Ui=null,qn=null,Bi=!1;function Va(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bi||un==null||un!==il(r)||(r=un,"selectionStart"in r&&Lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&dr(qn,r)||(qn=r,r=fl(Ui,"onSelect"),0<r.length&&(t=new bo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},li={},Eu={};ct&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function Dl(e){if(li[e])return li[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eu)return li[e]=t[n];return e}var Fu=Dl("animationend"),zu=Dl("animationiteration"),Tu=Dl("animationstart"),Pu=Dl("transitionend"),bu=new Map,Wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){bu.set(e,t),Xt(t,[e])}for(var ii=0;ii<Wa.length;ii++){var oi=Wa[ii],bf=oi.toLowerCase(),_f=oi[0].toUpperCase()+oi.slice(1);Dt(bf,"on"+_f)}Dt(Fu,"onAnimationEnd");Dt(zu,"onAnimationIteration");Dt(Tu,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(Pu,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function Ga(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pd(r,t,void 0,e),e.currentTarget=null}function _u(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ga(l,s,f),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,f=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ga(l,s,f),i=u}}}if(al)throw e=Ri,al=!1,Ri=null,e}function B(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function ai(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Rr]){e[Rr]=!0,Us.forEach(function(n){n!=="selectionchange"&&(Df.has(n)||ai(n,!1,e),ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,ai("selectionchange",!1,t))}}function Du(e,t,n,r){switch(hu(t)){case 1:var l=Hd;break;case 4:l=Qd;break;default:l=To}n=l.bind(null,t,n,e),l=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function si(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Ut(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}nu(function(){var f=i,h=Co(n),g=[];e:{var d=bu.get(e);if(d!==void 0){var k=bo,w=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":k=uf;break;case"focusin":w="focus",k=ti;break;case"focusout":w="blur",k=ti;break;case"beforeblur":case"afterblur":k=ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=ff;break;case Fu:case zu:case Tu:k=qd;break;case Pu:k=mf;break;case"scroll":k=Kd;break;case"wheel":k=hf;break;case"copy":case"cut":case"paste":k=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ma}var S=(t&4)!==0,R=!S&&e==="scroll",p=S?d!==null?d+"Capture":null:d;S=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=or(c,p),x!=null&&S.push(pr(c,x,m)))),R)break;c=c.return}0<S.length&&(d=new k(d,w,null,n,h),g.push({event:d,listeners:S}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",d&&n!==Di&&(w=n.relatedTarget||n.fromElement)&&(Ut(w)||w[dt]))break e;if((k||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=f,w=w?Ut(w):null,w!==null&&(R=Zt(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=f),k!==w)){if(S=Da,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ma,x="onPointerLeave",p="onPointerEnter",c="pointer"),R=k==null?d:dn(k),m=w==null?d:dn(w),d=new S(x,c+"leave",k,n,h),d.target=R,d.relatedTarget=m,x=null,Ut(h)===f&&(S=new S(p,c+"enter",w,n,h),S.target=m,S.relatedTarget=R,x=S),R=x,k&&w)t:{for(S=k,p=w,c=0,m=S;m;m=ln(m))c++;for(m=0,x=p;x;x=ln(x))m++;for(;0<c-m;)S=ln(S),c--;for(;0<m-c;)p=ln(p),m--;for(;c--;){if(S===p||p!==null&&S===p.alternate)break t;S=ln(S),p=ln(p)}S=null}else S=null;k!==null&&Ha(g,d,k,S,!1),w!==null&&R!==null&&Ha(g,R,w,S,!0)}}e:{if(d=f?dn(f):window,k=d.nodeName&&d.nodeName.toLowerCase(),k==="select"||k==="input"&&d.type==="file")var N=Nf;else if(Aa(d))if(Su)N=Ff;else{N=Cf;var E=jf}else(k=d.nodeName)&&k.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=Ef);if(N&&(N=N(e,f))){wu(g,N,n,h);break e}E&&E(e,d,f),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&zi(d,"number",d.value)}switch(E=f?dn(f):window,e){case"focusin":(Aa(E)||E.contentEditable==="true")&&(un=E,Ui=f,qn=null);break;case"focusout":qn=Ui=un=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,Va(g,n,h);break;case"selectionchange":if(Pf)break;case"keydown":case"keyup":Va(g,n,h)}var z;if(Do)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else sn?yu(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(xu&&n.locale!=="ko"&&(sn||F!=="onCompositionStart"?F==="onCompositionEnd"&&sn&&(z=vu()):(wt=h,Po="value"in wt?wt.value:wt.textContent,sn=!0)),E=fl(f,F),0<E.length&&(F=new La(F,e,null,n,h),g.push({event:F,listeners:E}),z?F.data=z:(z=ku(n),z!==null&&(F.data=z)))),(z=xf?yf(e,n):kf(e,n))&&(f=fl(f,"onBeforeInput"),0<f.length&&(h=new La("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:f}),h.data=z))}_u(g,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=or(e,n),i!=null&&r.unshift(pr(e,i,l)),i=or(e,t),i!=null&&r.push(pr(e,i,l))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,l?(u=or(n,i),u!=null&&o.unshift(pr(n,u,s))):l||(u=or(n,i),u!=null&&o.push(pr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Lf=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(Mf,"")}function Or(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(y(425))}function pl(){}var $i=null,Vi=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,Ka=typeof Promise=="function"?Promise:void 0,Of=typeof queueMicrotask=="function"?queueMicrotask:typeof Ka<"u"?function(e){return Ka.resolve(null).then(e).catch(Af)}:Gi;function Af(e){setTimeout(function(){throw e})}function ui(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ur(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Dn,mr="__reactProps$"+Dn,dt="__reactContainer$"+Dn,Hi="__reactEvents$"+Dn,If="__reactListeners$"+Dn,Uf="__reactHandles$"+Dn;function Ut(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ya(e);e!==null;){if(n=e[nt])return n;e=Ya(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Ll(e){return e[mr]||null}var Qi=[],fn=-1;function Lt(e){return{current:e}}function $(e){0>fn||(e.current=Qi[fn],Qi[fn]=null,fn--)}function U(e,t){fn++,Qi[fn]=e.current,e.current=t}var _t={},pe=Lt(_t),Ce=Lt(!1),Gt=_t;function Cn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ee(e){return e=e.childContextTypes,e!=null}function ml(){$(Ce),$(pe)}function Xa(e,t,n){if(pe.current!==_t)throw Error(y(168));U(pe,t),U(Ce,n)}function Lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Nd(e)||"Unknown",l));return Q({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Gt=pe.current,U(pe,e),U(Ce,Ce.current),!0}function Za(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Lu(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,$(Ce),$(pe),U(pe,e)):$(Ce),U(Ce,n)}var ot=null,Ml=!1,ci=!1;function Mu(e){ot===null?ot=[e]:ot.push(e)}function Bf(e){Ml=!0,Mu(e)}function Mt(){if(!ci&&ot!==null){ci=!0;var e=0,t=A;try{var n=ot;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Ml=!1}catch(l){throw ot!==null&&(ot=ot.slice(e+1)),ou(Eo,Mt),l}finally{A=t,ci=!1}}return null}var pn=[],mn=0,hl=null,vl=0,Ae=[],Ie=0,Ht=null,at=1,st="";function At(e,t){pn[mn++]=vl,pn[mn++]=hl,hl=e,vl=t}function Ru(e,t,n){Ae[Ie++]=at,Ae[Ie++]=st,Ae[Ie++]=Ht,Ht=e;var r=at;e=st;var l=32-Ye(r)-1;r&=~(1<<l),n+=1;var i=32-Ye(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,at=1<<32-Ye(t)+l|n<<l|r,st=i+e}else at=1<<i|n<<l|r,st=e}function Mo(e){e.return!==null&&(At(e,1),Ru(e,1,0))}function Ro(e){for(;e===hl;)hl=pn[--mn],pn[mn]=null,vl=pn[--mn],pn[mn]=null;for(;e===Ht;)Ht=Ae[--Ie],Ae[Ie]=null,st=Ae[--Ie],Ae[Ie]=null,at=Ae[--Ie],Ae[Ie]=null}var _e=null,be=null,V=!1,Ke=null;function Ou(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,be=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:at,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,be=null,!0):!1;default:return!1}}function Ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yi(e){if(V){var t=be;if(t){var n=t;if(!Ja(e,t)){if(Ki(e))throw Error(y(418));t=Et(n.nextSibling);var r=_e;t&&Ja(e,t)?Ou(r,n):(e.flags=e.flags&-4097|2,V=!1,_e=e)}}else{if(Ki(e))throw Error(y(418));e.flags=e.flags&-4097|2,V=!1,_e=e}}}function qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Ar(e){if(e!==_e)return!1;if(!V)return qa(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=be)){if(Ki(e))throw Au(),Error(y(418));for(;t;)Ou(e,t),t=Et(t.nextSibling)}if(qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=_e?Et(e.stateNode.nextSibling):null;return!0}function Au(){for(var e=be;e;)e=Et(e.nextSibling)}function En(){be=_e=null,V=!1}function Oo(e){Ke===null?Ke=[e]:Ke.push(e)}var $f=mt.ReactCurrentBatchConfig;function Bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){var t=e._init;return t(e._payload)}function Iu(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Pt(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=vi(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function u(p,c,m,x){var N=m.type;return N===an?h(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vt&&es(N)===c.type)?(x=l(c,m.props),x.ref=Bn(p,c,m),x.return=p,x):(x=ll(m.type,m.key,m.props,null,p.mode,x),x.ref=Bn(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=xi(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function h(p,c,m,x,N){return c===null||c.tag!==7?(c=Wt(m,p.mode,x,N),c.return=p,c):(c=l(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vi(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case zr:return m=ll(c.type,c.key,c.props,null,p.mode,m),m.ref=Bn(p,null,c),m.return=p,m;case on:return c=xi(c,p.mode,m),c.return=p,c;case vt:var x=c._init;return g(p,x(c._payload),m)}if(Hn(c)||Rn(c))return c=Wt(c,p.mode,m,null),c.return=p,c;Ir(p,c)}return null}function d(p,c,m,x){var N=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zr:return m.key===N?u(p,c,m,x):null;case on:return m.key===N?f(p,c,m,x):null;case vt:return N=m._init,d(p,c,N(m._payload),x)}if(Hn(m)||Rn(m))return N!==null?null:h(p,c,m,x,null);Ir(p,m)}return null}function k(p,c,m,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case zr:return p=p.get(x.key===null?m:x.key)||null,u(c,p,x,N);case on:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,N);case vt:var E=x._init;return k(p,c,m,E(x._payload),N)}if(Hn(x)||Rn(x))return p=p.get(m)||null,h(c,p,x,N,null);Ir(c,x)}return null}function w(p,c,m,x){for(var N=null,E=null,z=c,F=c=0,I=null;z!==null&&F<m.length;F++){z.index>F?(I=z,z=null):I=z.sibling;var T=d(p,z,m[F],x);if(T===null){z===null&&(z=I);break}e&&z&&T.alternate===null&&t(p,z),c=i(T,c,F),E===null?N=T:E.sibling=T,E=T,z=I}if(F===m.length)return n(p,z),V&&At(p,F),N;if(z===null){for(;F<m.length;F++)z=g(p,m[F],x),z!==null&&(c=i(z,c,F),E===null?N=z:E.sibling=z,E=z);return V&&At(p,F),N}for(z=r(p,z);F<m.length;F++)I=k(z,p,F,m[F],x),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?F:I.key),c=i(I,c,F),E===null?N=I:E.sibling=I,E=I);return e&&z.forEach(function(xe){return t(p,xe)}),V&&At(p,F),N}function S(p,c,m,x){var N=Rn(m);if(typeof N!="function")throw Error(y(150));if(m=N.call(m),m==null)throw Error(y(151));for(var E=N=null,z=c,F=c=0,I=null,T=m.next();z!==null&&!T.done;F++,T=m.next()){z.index>F?(I=z,z=null):I=z.sibling;var xe=d(p,z,T.value,x);if(xe===null){z===null&&(z=I);break}e&&z&&xe.alternate===null&&t(p,z),c=i(xe,c,F),E===null?N=xe:E.sibling=xe,E=xe,z=I}if(T.done)return n(p,z),V&&At(p,F),N;if(z===null){for(;!T.done;F++,T=m.next())T=g(p,T.value,x),T!==null&&(c=i(T,c,F),E===null?N=T:E.sibling=T,E=T);return V&&At(p,F),N}for(z=r(p,z);!T.done;F++,T=m.next())T=k(z,p,F,T.value,x),T!==null&&(e&&T.alternate!==null&&z.delete(T.key===null?F:T.key),c=i(T,c,F),E===null?N=T:E.sibling=T,E=T);return e&&z.forEach(function(gt){return t(p,gt)}),V&&At(p,F),N}function R(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===an&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zr:e:{for(var N=m.key,E=c;E!==null;){if(E.key===N){if(N=m.type,N===an){if(E.tag===7){n(p,E.sibling),c=l(E,m.props.children),c.return=p,p=c;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vt&&es(N)===E.type){n(p,E.sibling),c=l(E,m.props),c.ref=Bn(p,E,m),c.return=p,p=c;break e}n(p,E);break}else t(p,E);E=E.sibling}m.type===an?(c=Wt(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=ll(m.type,m.key,m.props,null,p.mode,x),x.ref=Bn(p,c,m),x.return=p,p=x)}return o(p);case on:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=xi(m,p.mode,x),c.return=p,p=c}return o(p);case vt:return E=m._init,R(p,c,E(m._payload),x)}if(Hn(m))return w(p,c,m,x);if(Rn(m))return S(p,c,m,x);Ir(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=vi(m,p.mode,x),c.return=p,p=c),o(p)):n(p,c)}return R}var Fn=Iu(!0),Uu=Iu(!1),xl=Lt(null),yl=null,gn=null,Ao=null;function Io(){Ao=gn=yl=null}function Uo(e){var t=xl.current;$(xl),e._currentValue=t}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){yl=e,Ao=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Ao!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(yl===null)throw Error(y(308));gn=e,yl.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Bt=null;function Bo(e){Bt===null?Bt=[e]:Bt.push(e)}function Bu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ft(e,n)}return l=r.interleaved,l===null?(t.next=t,Bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,ft(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fo(e,n)}}function ts(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var l=e.updateQueue;xt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=f:s.next=f,h.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,h=f=u=null,s=i;do{var d=s.lane,k=s.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(d=t,k=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){g=w.call(k,g,d);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,d=typeof w=="function"?w.call(k,g,d):w,d==null)break e;g=Q({},g,d);break e;case 2:xt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=l.effects,d===null?l.effects=[s]:d.push(s))}else k={eventTime:k,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(f=h=k,u=g):h=h.next=k,o|=d;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;d=s,s=d.next,d.next=null,l.lastBaseUpdate=d,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Kt|=o,e.lanes=o,e.memoizedState=g}}function ns(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var Cr={},lt=Lt(Cr),gr=Lt(Cr),hr=Lt(Cr);function $t(e){if(e===Cr)throw Error(y(174));return e}function Vo(e,t){switch(U(hr,t),U(gr,e),U(lt,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pi(t,e)}$(lt),U(lt,t)}function zn(){$(lt),$(gr),$(hr)}function Vu(e){$t(hr.current);var t=$t(lt.current),n=Pi(t,e.type);t!==n&&(U(gr,e),U(lt,n))}function Wo(e){gr.current===e&&($(lt),$(gr))}var G=Lt(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var di=[];function Go(){for(var e=0;e<di.length;e++)di[e]._workInProgressVersionPrimary=null;di.length=0}var qr=mt.ReactCurrentDispatcher,fi=mt.ReactCurrentBatchConfig,Qt=0,H=null,ee=null,le=null,Sl=!1,er=!1,vr=0,Vf=0;function ce(){throw Error(y(321))}function Ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,l,i){if(Qt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?Qf:Kf,e=n(r,l),er){i=0;do{if(er=!1,vr=0,25<=i)throw Error(y(301));i+=1,le=ee=null,t.updateQueue=null,qr.current=Yf,e=n(r,l)}while(er)}if(qr.current=Nl,t=ee!==null&&ee.next!==null,Qt=0,le=ee=H=null,Sl=!1,t)throw Error(y(300));return e}function Ko(){var e=vr!==0;return vr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?H.memoizedState=le=e:le=le.next=e,le}function Ve(){if(ee===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=le===null?H.memoizedState:le.next;if(t!==null)le=t,ee=e;else{if(e===null)throw Error(y(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},le===null?H.memoizedState=le=e:le=le.next=e}return le}function xr(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,f=i;do{var h=f.lane;if((Qt&h)===h)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var g={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=g,o=r):u=u.next=g,H.lanes|=h,Kt|=h}f=f.next}while(f!==null&&f!==i);u===null?o=r:u.next=s,Ze(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Kt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ze(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wu(){}function Gu(e,t){var n=H,r=Ve(),l=t(),i=!Ze(r.memoizedState,l);if(i&&(r.memoizedState=l,je=!0),r=r.queue,Yo(Ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,yr(9,Qu.bind(null,n,r,l,t),void 0,null),ie===null)throw Error(y(349));Qt&30||Hu(n,t,l)}return l}function Hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qu(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Xu(e)}function Ku(e,t,n){return n(function(){Yu(t)&&Xu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Xu(e){var t=ft(e,1);t!==null&&Xe(t,e,1,-1)}function rs(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,H,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zu(){return Ve().memoizedState}function el(e,t,n,r){var l=tt();H.flags|=e,l.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var l=Ve();r=r===void 0?null:r;var i=void 0;if(ee!==null){var o=ee.memoizedState;if(i=o.destroy,r!==null&&Ho(r,o.deps)){l.memoizedState=yr(t,n,i,r);return}}H.flags|=e,l.memoizedState=yr(1|t,n,i,r)}function ls(e,t){return el(8390656,8,e,t)}function Yo(e,t){return Rl(2048,8,e,t)}function Ju(e,t){return Rl(4,2,e,t)}function qu(e,t){return Rl(4,4,e,t)}function ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tc(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,ec.bind(null,t,e),n)}function Xo(){}function nc(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lc(e,t,n){return Qt&21?(Ze(n,t)||(n=uu(),H.lanes|=n,Kt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Wf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{A=n,fi.transition=r}}function ic(){return Ve().memoizedState}function Gf(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e))ac(t,n);else if(n=Bu(e,t,n,r),n!==null){var l=ge();Xe(n,e,r,l),sc(n,t,r)}}function Hf(e,t,n){var r=Tt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))ac(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ze(s,o)){var u=t.interleaved;u===null?(l.next=l,Bo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Bu(e,t,l,r),n!==null&&(l=ge(),Xe(n,e,r,l),sc(n,t,r))}}function oc(e){var t=e.alternate;return e===H||t!==null&&t===H}function ac(e,t){er=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fo(e,n)}}var Nl={readContext:$e,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Qf={readContext:$e,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,el(4194308,4,ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:rs,useDebugValue:Xo,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=rs(!1),t=e[0];return e=Wf.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=tt();if(V){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ie===null)throw Error(y(349));Qt&30||Hu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ls(Ku.bind(null,r,i,e),[e]),r.flags|=2048,yr(9,Qu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ie.identifierPrefix;if(V){var n=st,r=at;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kf={readContext:$e,useCallback:nc,useContext:$e,useEffect:Yo,useImperativeHandle:tc,useInsertionEffect:Ju,useLayoutEffect:qu,useMemo:rc,useReducer:pi,useRef:Zu,useState:function(){return pi(xr)},useDebugValue:Xo,useDeferredValue:function(e){var t=Ve();return lc(t,ee.memoizedState,e)},useTransition:function(){var e=pi(xr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Gu,useId:ic,unstable_isNewReconciler:!1},Yf={readContext:$e,useCallback:nc,useContext:$e,useEffect:Yo,useImperativeHandle:tc,useInsertionEffect:Ju,useLayoutEffect:qu,useMemo:rc,useReducer:mi,useRef:Zu,useState:function(){return mi(xr)},useDebugValue:Xo,useDeferredValue:function(e){var t=Ve();return ee===null?t.memoizedState=e:lc(t,ee.memoizedState,e)},useTransition:function(){var e=mi(xr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Gu,useId:ic,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Tt(e),i=ut(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,l),t!==null&&(Xe(t,e,l,r),Jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Tt(e),i=ut(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,l),t!==null&&(Xe(t,e,l,r),Jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Tt(e),l=ut(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ft(e,l,r),t!==null&&(Xe(t,e,r,n),Jr(t,e,r))}};function is(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!dr(n,r)||!dr(l,i):!0}function uc(e,t,n){var r=!1,l=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=$e(i):(l=Ee(t)?Gt:pe.current,r=t.contextTypes,i=(r=r!=null)?Cn(e,l):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},$o(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=$e(i):(i=Ee(t)?Gt:pe.current,l.context=Cn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Zi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ol.enqueueReplaceState(l,l.state,null),kl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=Sd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function cc(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,uo=r),qi(e,t)},n}function dc(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){qi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qi(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function as(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=cp.bind(null,e,t,n),t.then(e,e))}function ss(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function us(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Zf=mt.ReactCurrentOwner,je=!1;function me(e,t,n,r){t.child=e===null?Uu(t,null,n,r):Fn(t,e.child,n,r)}function cs(e,t,n,r,l){n=n.render;var i=t.ref;return Sn(t,l),r=Qo(e,t,n,r,i,l),n=Ko(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(V&&n&&Mo(t),t.flags|=1,me(e,t,r,l),t.child)}function ds(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!la(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,fc(e,t,i,r,l)):(e=ll(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:dr,n(o,r)&&e.ref===t.ref)return pt(e,t,l)}return t.flags|=1,e=Pt(i,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(dr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,pt(e,t,l)}return eo(e,t,n,r,l)}function pc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(vn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(vn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(vn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(vn,Pe),Pe|=r;return me(e,t,l,n),t.child}function mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,n,r,l){var i=Ee(n)?Gt:pe.current;return i=Cn(t,i),Sn(t,l),n=Qo(e,t,n,r,i,l),r=Ko(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(V&&r&&Mo(t),t.flags|=1,me(e,t,n,l),t.child)}function fs(e,t,n,r,l){if(Ee(n)){var i=!0;gl(t)}else i=!1;if(Sn(t,l),t.stateNode===null)tl(e,t),uc(t,n,r),Ji(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=$e(f):(f=Ee(n)?Gt:pe.current,f=Cn(t,f));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==f)&&os(t,o,r,f),xt=!1;var d=t.memoizedState;o.state=d,kl(t,r,o,l),u=t.memoizedState,s!==r||d!==u||Ce.current||xt?(typeof h=="function"&&(Zi(t,n,h,r),u=t.memoizedState),(s=xt||is(t,n,s,r,d,u,f))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,$u(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:He(t.type,s),o.props=f,g=t.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$e(u):(u=Ee(n)?Gt:pe.current,u=Cn(t,u));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||d!==u)&&os(t,o,r,u),xt=!1,d=t.memoizedState,o.state=d,kl(t,r,o,l);var w=t.memoizedState;s!==g||d!==w||Ce.current||xt?(typeof k=="function"&&(Zi(t,n,k,r),w=t.memoizedState),(f=xt||is(t,n,f,r,d,w,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return to(e,t,n,r,i,l)}function to(e,t,n,r,l,i){mc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Za(t,n,!1),pt(e,t,i);r=t.stateNode,Zf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fn(t,e.child,null,i),t.child=Fn(t,null,s,i)):me(e,t,s,i),t.memoizedState=r.state,l&&Za(t,n,!0),t.child}function gc(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),Vo(e,t.containerInfo)}function ps(e,t,n,r,l){return En(),Oo(l),t.flags|=256,me(e,t,n,r),t.child}var no={dehydrated:null,treeContext:null,retryLane:0};function ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,t,n){var r=t.pendingProps,l=G.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(G,l&1),e===null)return Yi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ul(o,r,0,null),e=Wt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ro(n),t.memoizedState=no,e):Zo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Jf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Pt(s,i):(i=Wt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?ro(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=no,r}return i=e.child,e=i.sibling,r=Pt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zo(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&Oo(r),Fn(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=gi(Error(y(422))),Ur(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),i=Wt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fn(t,e.child,null,o),t.child.memoizedState=ro(o),t.memoizedState=no,i);if(!(t.mode&1))return Ur(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=gi(i,r,void 0),Ur(e,t,o,r)}if(s=(o&e.childLanes)!==0,je||s){if(r=ie,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,ft(e,l),Xe(r,e,l,-1))}return ra(),r=gi(Error(y(421))),Ur(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=dp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,be=Et(l.nextSibling),_e=t,V=!0,Ke=null,e!==null&&(Ae[Ie++]=at,Ae[Ie++]=st,Ae[Ie++]=Ht,at=e.id,st=e.overflow,Ht=t),t=Zo(t,r.children),t.flags|=4096,t)}function ms(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function hi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function vc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ms(e,n,t);else if(e.tag===19)ms(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),hi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}hi(t,!0,n,null,i);break;case"together":hi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qf(e,t,n){switch(t.tag){case 3:gc(t),En();break;case 5:Vu(t);break;case 1:Ee(t.type)&&gl(t);break;case 4:Vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(xl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?hc(e,t,n):(U(G,G.current&1),e=pt(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,pc(e,t,n)}return pt(e,t,n)}var xc,lo,yc,kc;xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lo=function(){};yc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,$t(lt.current);var i=null;switch(n){case"input":l=Ei(e,l),r=Ei(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=Ti(e,l),r=Ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}bi(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(lr.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(lr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&B("scroll",e),i||s===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function $n(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ep(e,t,n){var r=t.pendingProps;switch(Ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&ml(),de(t),null;case 3:return r=t.stateNode,zn(),$(Ce),$(pe),Go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(po(Ke),Ke=null))),lo(e,t),de(t),null;case 5:Wo(t);var l=$t(hr.current);if(n=t.type,e!==null&&t.stateNode!=null)yc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return de(t),null}if(e=$t(lt.current),Ar(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[mr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Kn.length;l++)B(Kn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Na(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Ca(r,i),B("invalid",r)}bi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Or(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Or(r.textContent,s,e),l=["children",""+s]):lr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Tr(r),ja(r,i,!0);break;case"textarea":Tr(r),Ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[mr]=r,xc(e,t,!1,!1),t.stateNode=e;e:{switch(o=_i(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Kn.length;l++)B(Kn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":Na(e,r),l=Ei(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ca(e,r),l=Ti(e,r),B("invalid",e);break;default:l=r}bi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Zs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ys(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ir(e,u):typeof u=="number"&&ir(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&B("scroll",e):u!=null&&wo(e,i,u,o))}switch(n){case"input":Tr(e),ja(e,r,!1);break;case"textarea":Tr(e),Ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=$t(hr.current),$t(lt.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Or(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return de(t),null;case 13:if($(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&be!==null&&t.mode&1&&!(t.flags&128))Au(),En(),t.flags|=98560,i=!1;else if(i=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[nt]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ke!==null&&(po(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?te===0&&(te=3):ra())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return zn(),lo(e,t),e===null&&fr(t.stateNode.containerInfo),de(t),null;case 10:return Uo(t.type._context),de(t),null;case 17:return Ee(t.type)&&ml(),de(t),null;case 19:if($(G),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)$n(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wl(e),o!==null){for(t.flags|=128,$n(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Pn&&(t.flags|=128,r=!0,$n(i,!1),t.lanes=4194304)}else{if(!r)if(e=wl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return de(t),null}else 2*J()-i.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,$n(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return na(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function tp(e,t){switch(Ro(t),t.tag){case 1:return Ee(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),$(Ce),$(pe),Go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wo(t),null;case 13:if($(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(G),null;case 4:return zn(),null;case 10:return Uo(t.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}var Br=!1,fe=!1,np=typeof WeakSet=="function"?WeakSet:Set,C=null;function hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function io(e,t,n){try{n()}catch(r){Y(e,t,r)}}var gs=!1;function rp(e,t){if($i=cl,e=Cu(),Lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,f=0,h=0,g=e,d=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)d=g,g=k;for(;;){if(g===e)break t;if(d===n&&++f===l&&(s=o),d===i&&++h===r&&(u=o),(k=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vi={focusedElem:e,selectionRange:n},cl=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,R=w.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:He(t.type,S),R);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=gs,gs=!1,w}function tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&io(t,n,i)}l=l.next}while(l!==r)}}function Al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wc(e){var t=e.alternate;t!==null&&(e.alternate=null,wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[mr],delete t[Hi],delete t[If],delete t[Uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}var ae=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:fe||hn(n,t);case 6:var r=ae,l=Qe;ae=null,ht(e,t,n),ae=r,Qe=l,ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?ui(e.parentNode,n):e.nodeType===1&&ui(e,n),ur(e)):ui(ae,n.stateNode));break;case 4:r=ae,l=Qe,ae=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),ae=r,Qe=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&io(n,t,o),l=l.next}while(l!==r)}ht(e,t,n);break;case 1:if(!fe&&(hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ht(e,t,n),fe=r):ht(e,t,n);break;default:ht(e,t,n)}}function vs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new np),t.forEach(function(r){var l=fp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Qe=!1;break e;case 3:ae=s.stateNode.containerInfo,Qe=!0;break e;case 4:ae=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ae===null)throw Error(y(160));Nc(i,o,l),ae=null,Qe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){Y(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}function jc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{tr(3,e,e.return),Al(3,e)}catch(S){Y(e,e.return,S)}try{tr(5,e,e.return)}catch(S){Y(e,e.return,S)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&hn(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&hn(n,n.return),e.flags&32){var l=e.stateNode;try{ir(l,"")}catch(S){Y(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Hs(l,i),_i(s,o);var f=_i(s,i);for(o=0;o<u.length;o+=2){var h=u[o],g=u[o+1];h==="style"?Zs(l,g):h==="dangerouslySetInnerHTML"?Ys(l,g):h==="children"?ir(l,g):wo(l,h,g,f)}switch(s){case"input":Fi(l,i);break;case"textarea":Qs(l,i);break;case"select":var d=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?xn(l,!!i.multiple,k,!1):d!==!!i.multiple&&(i.defaultValue!=null?xn(l,!!i.multiple,i.defaultValue,!0):xn(l,!!i.multiple,i.multiple?[]:"",!1))}l[mr]=i}catch(S){Y(e,e.return,S)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(S){Y(e,e.return,S)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(S){Y(e,e.return,S)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ea=J())),r&4&&vs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(f=fe)||h,We(t,e),fe=f):We(t,e),et(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(g=C=h;C!==null;){switch(d=C,k=d.child,d.tag){case 0:case 11:case 14:case 15:tr(4,d,d.return);break;case 1:hn(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){Y(r,n,S)}}break;case 5:hn(d,d.return);break;case 22:if(d.memoizedState!==null){ys(g);continue}}k!==null?(k.return=d,C=k):ys(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Xs("display",o))}catch(S){Y(e,e.return,S)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(S){Y(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:We(t,e),et(e),r&4&&vs(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ir(l,""),r.flags&=-33);var i=hs(e);so(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=hs(e);ao(e,s,o);break;default:throw Error(y(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lp(e,t,n){C=e,Cc(e)}function Cc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Br;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||fe;s=Br;var f=fe;if(Br=o,(fe=u)&&!f)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?ks(l):u!==null?(u.return=o,C=u):ks(l);for(;i!==null;)C=i,Cc(i),i=i.sibling;C=l,Br=s,fe=f}xs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):xs(e)}}function xs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ns(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ns(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&ur(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}fe||t.flags&512&&oo(t)}catch(d){Y(t,t.return,d)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ys(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ks(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Al(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Y(t,l,u)}}var i=t.return;try{oo(t)}catch(u){Y(t,i,u)}break;case 5:var o=t.return;try{oo(t)}catch(u){Y(t,o,u)}}}catch(u){Y(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var ip=Math.ceil,jl=mt.ReactCurrentDispatcher,Jo=mt.ReactCurrentOwner,Be=mt.ReactCurrentBatchConfig,M=0,ie=null,q=null,se=0,Pe=0,vn=Lt(0),te=0,kr=null,Kt=0,Il=0,qo=0,nr=null,Ne=null,ea=0,Pn=1/0,it=null,Cl=!1,uo=null,zt=null,$r=!1,St=null,El=0,rr=0,co=null,nl=-1,rl=0;function ge(){return M&6?J():nl!==-1?nl:nl=J()}function Tt(e){return e.mode&1?M&2&&se!==0?se&-se:$f.transition!==null?(rl===0&&(rl=uu()),rl):(e=A,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function Xe(e,t,n,r){if(50<rr)throw rr=0,co=null,Error(y(185));Sr(e,n,r),(!(M&2)||e!==ie)&&(e===ie&&(!(M&2)&&(Il|=n),te===4&&kt(e,se)),Fe(e,r),n===1&&M===0&&!(t.mode&1)&&(Pn=J()+500,Ml&&Mt()))}function Fe(e,t){var n=e.callbackNode;Bd(e,t);var r=ul(e,e===ie?se:0);if(r===0)n!==null&&Ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ta(n),t===1)e.tag===0?Bf(ws.bind(null,e)):Mu(ws.bind(null,e)),Of(function(){!(M&6)&&Mt()}),n=null;else{switch(cu(r)){case 1:n=Eo;break;case 4:n=au;break;case 16:n=sl;break;case 536870912:n=su;break;default:n=sl}n=Dc(n,Ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ec(e,t){if(nl=-1,rl=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=ul(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fl(e,r);else{t=r;var l=M;M|=2;var i=zc();(ie!==e||se!==t)&&(it=null,Pn=J()+500,Vt(e,t));do try{sp();break}catch(s){Fc(e,s)}while(!0);Io(),jl.current=i,M=l,q!==null?t=0:(ie=null,se=0,t=te)}if(t!==0){if(t===2&&(l=Oi(e),l!==0&&(r=l,t=fo(e,l))),t===1)throw n=kr,Vt(e,0),kt(e,r),Fe(e,J()),n;if(t===6)kt(e,r);else{if(l=e.current.alternate,!(r&30)&&!op(l)&&(t=Fl(e,r),t===2&&(i=Oi(e),i!==0&&(r=i,t=fo(e,i))),t===1))throw n=kr,Vt(e,0),kt(e,r),Fe(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:It(e,Ne,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=ea+500-J(),10<t)){if(ul(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Gi(It.bind(null,e,Ne,it),t);break}It(e,Ne,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ye(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ip(r/1960))-r,10<r){e.timeoutHandle=Gi(It.bind(null,e,Ne,it),r);break}It(e,Ne,it);break;case 5:It(e,Ne,it);break;default:throw Error(y(329))}}}return Fe(e,J()),e.callbackNode===n?Ec.bind(null,e):null}function fo(e,t){var n=nr;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&po(t)),e}function po(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ze(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~qo,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function ws(e){if(M&6)throw Error(y(327));Nn();var t=ul(e,0);if(!(t&1))return Fe(e,J()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var r=Oi(e);r!==0&&(t=r,n=fo(e,r))}if(n===1)throw n=kr,Vt(e,0),kt(e,t),Fe(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,Ne,it),Fe(e,J()),null}function ta(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Pn=J()+500,Ml&&Mt())}}function Yt(e){St!==null&&St.tag===0&&!(M&6)&&Nn();var t=M;M|=1;var n=Be.transition,r=A;try{if(Be.transition=null,A=1,e)return e()}finally{A=r,Be.transition=n,M=t,!(M&6)&&Mt()}}function na(){Pe=vn.current,$(vn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:zn(),$(Ce),$(pe),Go();break;case 5:Wo(r);break;case 4:zn();break;case 13:$(G);break;case 19:$(G);break;case 10:Uo(r.type._context);break;case 22:case 23:na()}n=n.return}if(ie=e,q=e=Pt(e.current,null),se=Pe=t,te=0,kr=null,qo=Il=Kt=0,Ne=nr=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Bt=null}return e}function Fc(e,t){do{var n=q;try{if(Io(),qr.current=Nl,Sl){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(Qt=0,le=ee=H=null,er=!1,vr=0,Jo.current=null,n===null||n.return===null){te=1,kr=t,q=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=ss(o);if(k!==null){k.flags&=-257,us(k,o,s,i,t),k.mode&1&&as(i,f,t),t=k,u=f;var w=t.updateQueue;if(w===null){var S=new Set;S.add(u),t.updateQueue=S}else w.add(u);break e}else{if(!(t&1)){as(i,f,t),ra();break e}u=Error(y(426))}}else if(V&&s.mode&1){var R=ss(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),us(R,o,s,i,t),Oo(Tn(u,s));break e}}i=u=Tn(u,s),te!==4&&(te=2),nr===null?nr=[i]:nr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=cc(i,u,t);ts(i,p);break e;case 1:s=u;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=dc(i,s,t);ts(i,x);break e}}i=i.return}while(i!==null)}Pc(n)}catch(N){t=N,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function zc(){var e=jl.current;return jl.current=Nl,e===null?Nl:e}function ra(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Kt&268435455)&&!(Il&268435455)||kt(ie,se)}function Fl(e,t){var n=M;M|=2;var r=zc();(ie!==e||se!==t)&&(it=null,Vt(e,t));do try{ap();break}catch(l){Fc(e,l)}while(!0);if(Io(),M=n,jl.current=r,q!==null)throw Error(y(261));return ie=null,se=0,te}function ap(){for(;q!==null;)Tc(q)}function sp(){for(;q!==null&&!_d();)Tc(q)}function Tc(e){var t=_c(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Pc(e):q=t,Jo.current=null}function Pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=ep(n,t,Pe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function It(e,t,n){var r=A,l=Be.transition;try{Be.transition=null,A=1,up(e,t,n,r)}finally{Be.transition=l,A=r}return null}function up(e,t,n,r){do Nn();while(St!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($d(e,i),e===ie&&(q=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$r||($r=!0,Dc(sl,function(){return Nn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var o=A;A=1;var s=M;M|=4,Jo.current=null,rp(e,n),jc(n,e),Tf(Vi),cl=!!$i,Vi=$i=null,e.current=n,lp(n),Dd(),M=s,A=o,Be.transition=i}else e.current=n;if($r&&($r=!1,St=e,El=l),i=e.pendingLanes,i===0&&(zt=null),Rd(n.stateNode),Fe(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Cl)throw Cl=!1,e=uo,uo=null,e;return El&1&&e.tag!==0&&Nn(),i=e.pendingLanes,i&1?e===co?rr++:(rr=0,co=e):rr=0,Mt(),null}function Nn(){if(St!==null){var e=cu(El),t=Be.transition,n=A;try{if(Be.transition=null,A=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,El=0,M&6)throw Error(y(331));var l=M;for(M|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(C=f;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:tr(8,h,i)}var g=h.child;if(g!==null)g.return=h,C=g;else for(;C!==null;){h=C;var d=h.sibling,k=h.return;if(wc(h),h===f){C=null;break}if(d!==null){d.return=k,C=d;break}C=k}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var R=S.sibling;S.sibling=null,S=R}while(S!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,C=p;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Al(9,s)}}catch(N){Y(s,s.return,N)}if(s===o){C=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,C=x;break e}C=s.return}}if(M=l,Mt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Pl,e)}catch{}r=!0}return r}finally{A=n,Be.transition=t}}return!1}function Ss(e,t,n){t=Tn(n,t),t=cc(e,t,1),e=Ft(e,t,1),t=ge(),e!==null&&(Sr(e,1,t),Fe(e,t))}function Y(e,t,n){if(e.tag===3)Ss(e,e,n);else for(;t!==null;){if(t.tag===3){Ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Tn(n,e),e=dc(t,e,1),t=Ft(t,e,1),e=ge(),t!==null&&(Sr(t,1,e),Fe(t,e));break}}t=t.return}}function cp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>J()-ea?Vt(e,0):qo|=n),Fe(e,t)}function bc(e,t){t===0&&(e.mode&1?(t=_r,_r<<=1,!(_r&130023424)&&(_r=4194304)):t=1);var n=ge();e=ft(e,t),e!==null&&(Sr(e,t,n),Fe(e,n))}function dp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bc(e,n)}function fp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),bc(e,n)}var _c;_c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,qf(e,t,n);je=!!(e.flags&131072)}else je=!1,V&&t.flags&1048576&&Ru(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;tl(e,t),e=t.pendingProps;var l=Cn(t,pe.current);Sn(t,n),l=Qo(null,t,r,e,l,n);var i=Ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,gl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$o(t),l.updater=Ol,t.stateNode=l,l._reactInternals=t,Ji(t,r,e,n),t=to(null,t,r,!0,i,n)):(t.tag=0,V&&i&&Mo(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(tl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=mp(r),e=He(r,e),l){case 0:t=eo(null,t,r,e,n);break e;case 1:t=fs(null,t,r,e,n);break e;case 11:t=cs(null,t,r,e,n);break e;case 14:t=ds(null,t,r,He(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),eo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),fs(e,t,r,l,n);case 3:e:{if(gc(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,$u(e,t),kl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Tn(Error(y(423)),t),t=ps(e,t,r,n,l);break e}else if(r!==l){l=Tn(Error(y(424)),t),t=ps(e,t,r,n,l);break e}else for(be=Et(t.stateNode.containerInfo.firstChild),_e=t,V=!0,Ke=null,n=Uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===l){t=pt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Vu(t),e===null&&Yi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Wi(r,l)?o=null:i!==null&&Wi(r,i)&&(t.flags|=32),mc(e,t),me(e,t,o,n),t.child;case 6:return e===null&&Yi(t),null;case 13:return hc(e,t,n);case 4:return Vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),cs(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,U(xl,r._currentValue),r._currentValue=o,i!==null)if(Ze(i.value,o)){if(i.children===l.children&&!Ce.current){t=pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ut(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?u.next=u:(u.next=h.next,h.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Xi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Xi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Sn(t,n),l=$e(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=He(r,t.pendingProps),l=He(r.type,l),ds(e,t,r,l,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),tl(e,t),t.tag=1,Ee(r)?(e=!0,gl(t)):e=!1,Sn(t,n),uc(t,r,l),Ji(t,r,l,n),to(null,t,r,!0,e,n);case 19:return vc(e,t,n);case 22:return pc(e,t,n)}throw Error(y(156,t.tag))};function Dc(e,t){return ou(e,t)}function pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new pp(e,t,n,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mp(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===No)return 11;if(e===jo)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ll(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")la(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case an:return Wt(n.children,l,i,t);case So:o=8,l|=8;break;case Si:return e=Ue(12,n,t,l|2),e.elementType=Si,e.lanes=i,e;case Ni:return e=Ue(13,n,t,l),e.elementType=Ni,e.lanes=i,e;case ji:return e=Ue(19,n,t,l),e.elementType=ji,e.lanes=i,e;case Vs:return Ul(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bs:o=10;break e;case $s:o=9;break e;case No:o=11;break e;case jo:o=14;break e;case vt:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Wt(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Vs,e.lanes=n,e.stateNode={isHidden:!1},e}function vi(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function xi(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ia(e,t,n,r,l,i,o,s,u){return e=new gp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(i),e}function hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lc(e){if(!e)return _t;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Lu(e,n,t)}return t}function Mc(e,t,n,r,l,i,o,s,u){return e=ia(n,r,!0,e,l,i,o,s,u),e.context=Lc(null),n=e.current,r=ge(),l=Tt(n),i=ut(r,l),i.callback=t??null,Ft(n,i,l),e.current.lanes=l,Sr(e,l,r),Fe(e,r),e}function Bl(e,t,n,r){var l=t.current,i=ge(),o=Tt(l);return n=Lc(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(l,t,o),e!==null&&(Xe(e,l,o,i),Jr(e,l,o)),o}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ns(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){Ns(e,t),(e=e.alternate)&&Ns(e,t)}function vp(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}$l.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Bl(e,t,null,null)};$l.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){Bl(null,e,null,null)}),t[dt]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&gu(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function js(){}function xp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=zl(o);i.call(f)}}var o=Mc(t,r,e,0,null,!1,!1,"",js);return e._reactRootContainer=o,e[dt]=o.current,fr(e.nodeType===8?e.parentNode:e),Yt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=zl(u);s.call(f)}}var u=ia(e,0,!1,null,null,!1,!1,"",js);return e._reactRootContainer=u,e[dt]=u.current,fr(e.nodeType===8?e.parentNode:e),Yt(function(){Bl(t,u,n,r)}),u}function Wl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=zl(o);s.call(u)}}Bl(t,o,e,l)}else o=xp(n,t,e,l,r);return zl(o)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qn(t.pendingLanes);n!==0&&(Fo(t,n|1),Fe(t,J()),!(M&6)&&(Pn=J()+500,Mt()))}break;case 13:Yt(function(){var r=ft(e,1);if(r!==null){var l=ge();Xe(r,e,1,l)}}),oa(e,1)}};zo=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ge();Xe(t,e,134217728,n)}oa(e,134217728)}};fu=function(e){if(e.tag===13){var t=Tt(e),n=ft(e,t);if(n!==null){var r=ge();Xe(n,e,t,r)}oa(e,t)}};pu=function(){return A};mu=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Li=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ll(r);if(!l)throw Error(y(90));Gs(r),Fi(r,l)}}}break;case"textarea":Qs(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};eu=ta;tu=Yt;var yp={usingClientEntryPoint:!1,Events:[jr,dn,Ll,Js,qs,ta]},Vn={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{Pl=Vr.inject(kp),rt=Vr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(y(200));return hp(e,t,null,n)};Le.createRoot=function(e,t){if(!sa(e))throw Error(y(299));var n=!1,r="",l=Rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ia(e,1,!1,null,null,n,!1,r,l),e[dt]=t.current,fr(e.nodeType===8?e.parentNode:e),new aa(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Yt(e)};Le.hydrate=function(e,t,n){if(!Vl(t))throw Error(y(200));return Wl(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!sa(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Rc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,l,!1,i,o),e[dt]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)};Le.render=function(e,t,n){if(!Vl(t))throw Error(y(200));return Wl(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(y(40));return e._reactRootContainer?(Yt(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Le.unstable_batchedUpdates=ta;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Wl(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(e){console.error(e)}}Oc(),Os.exports=Le;var wp=Os.exports,Cs=wp;ki.createRoot=Cs.createRoot,ki.hydrateRoot=Cs.hydrateRoot;const Wr="https://scan.pulsechain.com",Gr=[{id:0,name:"Bronze",icon:"🥉",lockDays:14,apr:2.5,bonus:.5,color:"#CD7F32"},{id:1,name:"Silver",icon:"🥈",lockDays:30,apr:6,bonus:1.5,color:"#C0C0C0"},{id:2,name:"Gold",icon:"🥇",lockDays:90,apr:9,bonus:4,color:"#FFD700"}],Ot={name:"Diamond",icon:"💎",lockDays:90,apr:12,bonus:5,color:"#00BCD4"},Sp=[{id:0,name:"Buy and Burn",description:"Purchase DTGC and send to burn address"},{id:1,name:"Liquidity",description:"Add to DTGC/URMOM liquidity pool"},{id:2,name:"Treasury",description:"Send to DAO Treasury for development"},{id:3,name:"All of Above",description:"Split equally between all options"}],W={urmomPrice:3515e-7,dtgcPrice:1851e-7,urmomMarketCap:159727,urmomTotalSupply:1e9,deadWallets:{"0x0000000000000000000000000000000000000000":0,"0x000000000000000000000000000000000000dEaD":0,"0x0000000000000000000000000000000000000369":54561640314e-2},totalDeadWallet:54561640314e-2,burnedUSD:576170.92,burnPercentage:54.5616,lpBurnPercentages:[{pair:"URMOM/HEX",percentage:99.2237},{pair:"URMOM/INC",percentage:99.5773},{pair:"URMOM/eHEX",percentage:99.6719},{pair:"URMOM/PLS",percentage:99},{pair:"URMOM/PLSX",percentage:98.5},{pair:"URMOM/PTGC",percentage:99.8}],lpUrmomBreakdown:[{pool:"PTGC Pool",tokens:31232571,color:"#FFD700"},{pool:"PLS Pool",tokens:26643051,color:"#00D4AA"},{pool:"HEX Pool",tokens:11919546,color:"#FF6B6B"},{pool:"PLSX Pool",tokens:11093073,color:"#9B59B6"},{pool:"PLS Pool 2",tokens:6117908,color:"#3498DB"},{pool:"INC Pool",tokens:10068493,color:"#E74C3C"},{pool:"pHEX Pool",tokens:5975013,color:"#F39C12"}],lpPools:[{name:"URMOM/DTGC",address:"0x1891bD6A959B32977c438f3022678a8659364A72"},{name:"URMOM/PLS",address:"0x682B82baAC38dDb185D77deAF98D9D246EF9c9E5"},{name:"URMOM/HEX",address:"0x0548656e272fec9534e180d3174cfc57ab6e10c0"},{name:"URMOM/pHEX",address:"0x6Bd31Cdc8c87F3bE93bEaC2E4F58DAeEf1f7905e"},{name:"URMOM/INC",address:"0xc8EC3c754B259fB7503072058A71d00cc20121DF"}]},yi=W.lpUrmomBreakdown.reduce((e,t)=>e+t.tokens,0),Te={xUrmom:"https://x.com/UrmomPulse",xDumpTires:"https://x.com/Dump_Tires",telegram:"https://t.me/urmomPulse",website:"https://dump.tires",dexscreener:"https://dexscreener.com/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0",dexscreenerDTGC:"https://dexscreener.com/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7",coingecko:"https://www.coingecko.com/en/coins/urmom-3"},Se={dtgc:"0xD0676B28a457371D58d47E5247b439114e40Eb0F",urmom:"0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0",lp:"0x1891bD6A959B32977c438f3022678a8659364A72",daoTreasury:"0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC",stakingV2:"0x0c1984e3804Bd74DAaB66c4540bBeac751efB643",lpStakingV2:"0x0b07eD8929884E9bBDEAD6B42465F2A265044f18",daoVoting:"0x91DFFcC31C68Ef0C1F2ad49554E85bB7536fA470",burn:"0x0000000000000000000000000000000000000369"},mo=!1,Ge={startingPLS:1e8,startingDTGC:5e7,startingURMOM:25e6,startingLP:1e6},Np=D.createContext(),jp=e=>`
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
    
    --bg-primary: ${e?"#0D0D0D":"#FEFEFE"};
    --bg-secondary: ${e?"#1A1A1A":"#F5F5F5"};
    --bg-card: ${e?"#1E1E1E":"#FFFFFF"};
    --text-primary: ${e?"#FFFFFF":"#1A1A1A"};
    --text-secondary: ${e?"#B0B0B0":"#4A4A4A"};
    --text-muted: ${e?"#707070":"#7A7A7A"};
    --border-color: ${e?"#333333":"#E8E8E8"};
    
    --glow-gold: 0 0 40px rgba(212, 175, 55, ${e?"0.5":"0.3"});
    --glow-diamond: 0 0 40px rgba(0, 188, 212, ${e?"0.5":"0.3"});
    --shadow-luxury: 0 25px 50px -12px rgba(0, 0, 0, ${e?"0.4":"0.15"});
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--bg-primary);
    min-height: 100vh;
    color: var(--text-primary);
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* Marble Background */
  .marble-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    background: var(--bg-primary);
  }

  .marble-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      ${e?`
        radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
        radial-gradient(ellipse at 80% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 50%, rgba(100, 100, 100, 0.1) 0%, transparent 60%)
      `:`
        radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.06) 0%, transparent 40%),
        radial-gradient(ellipse at 80% 70%, rgba(212, 175, 55, 0.04) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 50%, rgba(200, 200, 200, 0.3) 0%, transparent 60%)
      `};
  }

  .marble-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: ${e?"0.03":"0.04"};
    mix-blend-mode: overlay;
  }

  .marble-veins {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .vein {
    position: absolute;
    background: linear-gradient(90deg, transparent 0%, ${e?"rgba(212, 175, 55, 0.08)":"rgba(180, 180, 180, 0.15)"} 50%, transparent 100%);
    transform-origin: center;
  }

  .vein-1 { top: 10%; left: -10%; width: 60%; height: 1px; transform: rotate(25deg); }
  .vein-2 { top: 30%; right: -10%; width: 50%; height: 1px; transform: rotate(-15deg); }
  .vein-3 { top: 50%; left: -5%; width: 40%; height: 1px; transform: rotate(35deg); }
  .vein-4 { top: 70%; right: -5%; width: 55%; height: 1px; transform: rotate(-25deg); }
  .vein-5 { top: 85%; left: 20%; width: 45%; height: 1px; transform: rotate(10deg); }

  /* Animations */
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

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }

  @keyframes rotate-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes particle-rise {
    0% { transform: translateY(100vh) scale(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
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

  @keyframes glow-pulse {
    0%, 100% { filter: drop-shadow(0 0 10px currentColor); }
    50% { filter: drop-shadow(0 0 25px currentColor); }
  }

  @keyframes modal-in {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes modal-out {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.9); }
  }

  @keyframes backdrop-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Particles */
  .particles-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
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

  .particle:nth-child(odd) { background: var(--diamond); }

  /* Gold Text */
  .gold-text {
    background: linear-gradient(135deg, var(--gold-bright) 0%, var(--gold-light) 25%, var(--gold) 50%, var(--gold-dark) 75%, var(--gold-deep) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  /* App Container */
  .app-container {
    min-height: 100vh;
    position: relative;
    z-index: 2;
  }

  /* Navigation */
  .nav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: ${e?"rgba(13, 13, 13, 0.95)":"rgba(255, 255, 255, 0.95)"};
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  .nav-header.scrolled {
    box-shadow: 0 4px 30px rgba(0, 0, 0, ${e?"0.3":"0.1"});
  }

  .nav-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 14px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .logo-mark {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-weight: 900;
    font-size: 1.1rem;
    color: #1A1A1A;
    box-shadow: var(--glow-gold);
    animation: float 3s ease-in-out infinite;
  }

  .logo-text-group { display: flex; flex-direction: column; }

  .logo-text {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 3px;
  }

  .logo-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.7rem;
    color: var(--text-muted);
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    gap: 6px;
  }

  .nav-link {
    padding: 10px 16px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: transparent;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
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

  .nav-link:hover::before, .nav-link.active::before { width: 80%; }
  .nav-link:hover, .nav-link.active { color: var(--gold); }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    background: var(--gold);
    border-color: var(--gold);
    transform: rotate(180deg);
  }

  .connect-btn {
    padding: 10px 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: #1A1A1A;
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
    background: ${e?"rgba(212, 175, 55, 0.2)":"var(--platinum)"};
    border: 2px solid var(--gold);
    color: var(--text-primary);
  }

  /* Hero Section */
  .hero-section {
    padding: 140px 40px 80px;
    text-align: center;
    position: relative;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: ${e?"rgba(212, 175, 55, 0.15)":"rgba(212, 175, 55, 0.1)"};
    border: 1px solid rgba(212, 175, 55, 0.3);
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--gold);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    animation: slide-in-up 0.6s ease;
  }

  .hero-title {
    font-family: 'Cinzel', serif;
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: 6px;
    margin-bottom: 16px;
    line-height: 1.1;
    animation: slide-in-up 0.6s ease 0.1s both;
  }

  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    color: var(--text-secondary);
    letter-spacing: 3px;
    margin-bottom: 40px;
    font-weight: 400;
    animation: slide-in-up 0.6s ease 0.2s both;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    animation: slide-in-up 0.6s ease 0.3s both;
  }

  .hero-stat {
    text-align: center;
    padding: 24px 30px;
    background: var(--bg-card);
    border-radius: 18px;
    border: 1px solid var(--border-color);
    min-width: 150px;
    transition: all 0.3s ease;
  }

  .hero-stat:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-luxury);
    border-color: var(--gold);
  }

  .hero-stat-value {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 6px;
  }

  .hero-stat-label {
    font-size: 0.65rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  /* Main Content */
  .main-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px 80px;
  }

  .section {
    margin-bottom: 60px;
    animation: slide-in-up 0.6s ease both;
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-title {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 14px;
  }

  .section-divider {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 0 auto;
  }

  .section-description {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: var(--text-secondary);
    margin-top: 14px;
    letter-spacing: 1px;
  }

  /* Tier Cards */
  .tiers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 1200px) { .tiers-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 768px) { 
    .tiers-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.2rem; }
    .nav-content { flex-direction: column; gap: 14px; }
    .nav-links { display: none; }
    .main-content { padding: 0 20px 50px; }
  }

  .tier-card {
    background: var(--bg-card);
    border-radius: 20px;
    padding: 28px 20px;
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
    height: 4px;
    background: var(--tier-gradient);
  }

  .tier-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-luxury);
    border-color: var(--gold);
  }

  .tier-card.selected {
    border-color: var(--gold);
    box-shadow: var(--glow-gold);
  }

  .tier-card.diamond {
    background: ${e?"linear-gradient(180deg, #0A1A1F 0%, #0D2530 100%)":"linear-gradient(180deg, #F0FFFF 0%, #E0F7FA 100%)"};
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
    font-size: 3rem;
    margin-bottom: 12px;
    animation: float 3s ease-in-out infinite;
  }

  .tier-name {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .tier-subtitle {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--diamond-dark);
    margin-top: 6px;
    letter-spacing: 1px;
  }

  .tier-apr-container { margin: 14px 0; }

  .tier-apr {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1;
  }

  .tier-apr-label {
    font-size: 0.85rem;
    color: var(--text-muted);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .tier-features {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--border-color);
    text-align: left;
  }

  .tier-feature {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    font-size: 0.8rem;
  }

  .tier-feature-label { color: var(--text-muted); }
  .tier-feature-value { font-weight: 600; color: var(--text-primary); }

  .tier-badge {
    position: absolute;
    top: 14px;
    right: 14px;
    padding: 4px 8px;
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 20px;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
    color: #1A1A1A;
  }

  .tier-badge.lp {
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
  }

  /* Staking Panel */
  .staking-panel {
    max-width: 550px;
    margin: 40px auto 0;
    background: var(--bg-card);
    border-radius: 24px;
    padding: 36px;
    box-shadow: var(--shadow-luxury);
    border: 1px solid var(--border-color);
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
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 28px;
  }

  .input-group { margin-bottom: 20px; }

  .input-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .input-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 1px;
  }

  .balance-display {
    font-size: 0.8rem;
    color: var(--gold);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .balance-display:hover { text-decoration: underline; }

  .input-container { position: relative; }

  .stake-input {
    width: 100%;
    padding: 16px 100px 16px 18px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    background: var(--bg-secondary);
    transition: all 0.3s ease;
    color: var(--text-primary);
  }

  .stake-input:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
  }

  .stake-input::placeholder { color: var(--text-muted); }

  .input-suffix {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .token-badge {
    padding: 4px 8px;
    background: var(--bg-primary);
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-muted);
  }

  .max-btn {
    padding: 6px 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    color: #1A1A1A;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: 1px;
  }

  .max-btn:hover { transform: scale(1.05); }

  .action-btn {
    width: 100%;
    padding: 16px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: none;
    border-radius: 12px;
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

  .action-btn:hover::before { left: 100%; }

  .action-btn.primary {
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    color: #1A1A1A;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.35);
  }

  .action-btn.primary:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.45);
  }

  .action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  .fee-breakdown {
    margin-top: 20px;
    padding: 18px;
    background: ${e?"rgba(212, 175, 55, 0.08)":"rgba(212, 175, 55, 0.05)"};
    border: 1px solid rgba(212, 175, 55, 0.2);
    border-radius: 12px;
  }

  .fee-title {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 12px;
    color: var(--gold);
  }

  .fee-row {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .fee-row span:last-child { font-weight: 600; }

  /* ═══════════════════════════════════════════════════════════════
                        VIDEO SECTION
     ═══════════════════════════════════════════════════════════════ */

  .video-showcase {
    margin-top: 60px;
    text-align: center;
  }

  .video-container {
    max-width: 600px;
    margin: 0 auto;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--shadow-luxury);
    border: 3px solid var(--gold);
    animation: pulse-gold 3s infinite;
  }

  .video-container video {
    width: 100%;
    height: auto;
    display: block;
  }

  .video-label {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    letter-spacing: 3px;
    margin-bottom: 20px;
    color: var(--gold);
  }

  /* Whitepaper Video Background */
  .wp-video-section {
    margin-top: 40px;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    min-height: 300px;
  }

  .wp-video-bg {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 24px;
  }

  .wp-video-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, ${e?"rgba(13,13,13,0.9)":"rgba(255,255,255,0.85)"} 0%, transparent 100%);
    display: flex;
    align-items: flex-end;
    padding: 40px;
    border-radius: 24px;
  }

  .wp-video-text {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    letter-spacing: 4px;
  }

  /* ═══════════════════════════════════════════════════════════════
                        MODAL / POPUP
     ═══════════════════════════════════════════════════════════════ */

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: backdrop-in 0.3s ease;
  }

  .modal-content {
    background: var(--bg-card);
    border-radius: 28px;
    padding: 0;
    max-width: 500px;
    width: 90%;
    overflow: hidden;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
    border: 3px solid var(--gold);
    animation: modal-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .modal-video {
    width: 100%;
    height: auto;
    display: block;
  }

  .modal-body {
    padding: 30px;
    text-align: center;
  }

  .modal-title {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 12px;
  }

  .modal-subtitle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 24px;
  }

  .modal-close-btn {
    width: 100%;
    padding: 16px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
    color: #1A1A1A;
    transition: all 0.3s ease;
  }

  .modal-close-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }

  /* ═══════════════════════════════════════════════════════════════
                        BURN STATS SECTION
     ═══════════════════════════════════════════════════════════════ */

  .burn-section {
    background: ${e?"linear-gradient(180deg, #1A0808 0%, #0D0505 100%)":"linear-gradient(180deg, #2D1B10 0%, #1A0A00 100%)"};
    border-radius: 24px;
    padding: 45px;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
  }

  .burn-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse at top left, rgba(255, 87, 34, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(255, 152, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .burn-header {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 35px;
    position: relative;
    flex-wrap: wrap;
  }

  .burn-icon {
    font-size: 3rem;
    animation: fire-flicker 1s ease-in-out infinite;
  }

  .burn-header-text h2 {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(135deg, #FF9800 0%, #FF5722 50%, #F44336 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 4px;
  }

  .burn-header-text p {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
  }

  .burn-links {
    display: flex;
    gap: 10px;
    margin-left: auto;
  }

  .burn-link-btn {
    padding: 8px 16px;
    background: rgba(255, 152, 0, 0.2);
    border: 1px solid rgba(255, 152, 0, 0.4);
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    color: #FF9800;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .burn-link-btn:hover {
    background: rgba(255, 152, 0, 0.3);
    transform: translateY(-2px);
  }

  .burn-main-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 35px;
  }

  @media (max-width: 1000px) { .burn-main-stats { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .burn-main-stats { grid-template-columns: 1fr; } }

  .burn-stat-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 152, 0, 0.25);
    border-radius: 16px;
    padding: 22px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .burn-stat-card:hover {
    background: rgba(255, 152, 0, 0.1);
    border-color: #FF9800;
    transform: translateY(-4px);
  }

  .burn-stat-emoji { font-size: 1.8rem; margin-bottom: 10px; }

  .burn-stat-value {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 4px;
    background: linear-gradient(135deg, #FFE082 0%, #FF9800 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .burn-stat-subvalue {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 6px;
  }

  .burn-stat-label {
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .burn-progress-section { margin-bottom: 35px; position: relative; }

  .burn-progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .burn-progress-title {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.8);
  }

  .burn-progress-percent {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: #FF9800;
  }

  .burn-progress-bar {
    height: 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  .burn-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #FF5722, #FF9800, #FFC107);
    border-radius: 12px;
    transition: width 1s ease;
    position: relative;
  }

  .burn-progress-fill::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s linear infinite;
  }

  .burn-progress-blocks {
    display: flex;
    gap: 2px;
    margin-top: 8px;
  }

  .burn-block {
    flex: 1;
    height: 6px;
    background: rgba(255, 152, 0, 0.3);
    border-radius: 3px;
  }

  .burn-block.filled { background: #FF9800; }

  .dead-wallet-section, .lp-burn-section, .lp-urmom-section { margin-bottom: 35px; position: relative; }

  .dead-wallet-title, .lp-burn-title, .lp-urmom-title {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    letter-spacing: 3px;
    margin-bottom: 18px;
    color: rgba(255, 255, 255, 0.8);
  }

  .dead-wallet-grid { display: grid; gap: 10px; }

  .dead-wallet-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: monospace;
    font-size: 0.8rem;
  }

  .dead-wallet-address { color: rgba(255, 255, 255, 0.6); }
  .dead-wallet-amount { color: #FF9800; font-weight: 600; }
  .dead-wallet-amount.zero { color: rgba(255, 255, 255, 0.3); }

  .lp-burn-grid, .lp-urmom-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 700px) { .lp-burn-grid, .lp-urmom-grid { grid-template-columns: 1fr; } }

  .lp-burn-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 152, 0, 0.2);
    border-radius: 12px;
    padding: 16px;
    transition: all 0.3s ease;
  }

  .lp-burn-item:hover {
    background: rgba(255, 152, 0, 0.08);
    border-color: #FF9800;
  }

  .lp-burn-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .lp-burn-name { font-weight: 600; font-size: 0.85rem; }
  .lp-burn-percent { font-family: 'Cinzel', serif; font-weight: 700; color: #FF9800; }

  .lp-burn-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .lp-burn-fill {
    height: 100%;
    background: linear-gradient(90deg, #FF5722, #FF9800);
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .lp-urmom-grid { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 900px) { .lp-urmom-grid { grid-template-columns: repeat(2, 1fr); } }

  .lp-urmom-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 152, 0, 0.2);
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .lp-urmom-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--card-color);
  }

  .lp-urmom-card:hover {
    background: rgba(255, 152, 0, 0.08);
    transform: translateY(-3px);
  }

  .lp-urmom-pool {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .lp-urmom-tokens {
    font-family: 'Cinzel', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 4px;
  }

  .lp-urmom-usd { font-size: 0.75rem; color: #FF9800; }

  .burn-address-box {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 152, 0, 0.3);
    border-radius: 14px;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    position: relative;
  }

  .burn-address-info { display: flex; flex-direction: column; gap: 4px; }

  .burn-address-label {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .burn-address-value {
    font-family: monospace;
    font-size: 0.85rem;
    color: #FF9800;
  }

  .burn-view-btn {
    padding: 10px 20px;
    background: linear-gradient(135deg, #FF9800 0%, #FF5722 100%);
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .burn-view-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.4);
  }

  /* ═══════════════════════════════════════════════════════════════
                        DAO VOTING + OTHER SECTIONS
     ═══════════════════════════════════════════════════════════════ */

  .voting-section {
    background: ${e?"linear-gradient(180deg, #0A1015 0%, #050A0D 100%)":"linear-gradient(180deg, #0D1421 0%, #0A0E14 100%)"};
    border-radius: 24px;
    padding: 45px;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
  }

  .voting-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse at top, rgba(0, 188, 212, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .voting-header {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 35px;
    position: relative;
  }

  .voting-icon {
    font-size: 3rem;
    animation: glow-pulse 2s ease-in-out infinite;
    color: var(--diamond);
  }

  .voting-header-text h2 {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .voting-header-text p {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
    margin-top: 4px;
  }

  .voting-eligibility {
    background: rgba(0, 188, 212, 0.1);
    border: 1px solid rgba(0, 188, 212, 0.3);
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 35px;
  }

  .eligibility-title {
    font-family: 'Cinzel', serif;
    font-size: 0.85rem;
    letter-spacing: 2px;
    margin-bottom: 12px;
    color: var(--diamond);
  }

  .eligibility-items { display: flex; gap: 24px; flex-wrap: wrap; }

  .eligibility-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .eligibility-check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }

  .eligibility-check.active { background: var(--diamond-dark); color: #FFFFFF; }
  .eligibility-check.inactive { background: rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.4); }

  .voting-options-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) { .voting-options-grid { grid-template-columns: 1fr; } }

  .voting-option {
    background: rgba(255, 255, 255, 0.03);
    border: 2px solid rgba(0, 188, 212, 0.2);
    border-radius: 16px;
    padding: 22px;
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

  .voting-option-header { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }

  .voting-option-letter {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-weight: 800;
    font-size: 1rem;
    color: #1A1A1A;
  }

  .voting-option-name {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #FFFFFF;
  }

  .voting-option-desc {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
  }

  .voting-option-votes {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .votes-bar {
    height: 5px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  .votes-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--diamond), var(--diamond-dark));
    border-radius: 3px;
  }

  .votes-count { font-size: 0.7rem; color: var(--diamond); }

  .vote-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, var(--diamond) 0%, var(--diamond-dark) 100%);
    border: none;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #1A1A1A;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .vote-btn:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: var(--glow-diamond);
  }

  .vote-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Links & Whitepaper */
  .links-section { text-align: center; }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    max-width: 700px;
    margin: 0 auto 40px;
  }

  @media (max-width: 600px) { .links-grid { grid-template-columns: 1fr; } }

  .link-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 24px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .link-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-luxury);
    border-color: var(--gold);
  }

  .link-icon { font-size: 2.2rem; }
  .link-info { text-align: left; }

  .link-name {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 1px;
    margin-bottom: 3px;
  }

  .link-url { font-size: 0.7rem; color: var(--gold); }

  .contracts-section {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 28px;
    max-width: 700px;
    margin: 0 auto;
  }

  .contracts-title {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-align: center;
  }

  .contract-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color);
    flex-wrap: wrap;
    gap: 8px;
  }

  .contract-row:last-child { border-bottom: none; }

  .contract-label {
    font-weight: 600;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
  }

  .contract-address {
    font-family: monospace;
    font-size: 0.75rem;
    color: var(--gold);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .contract-address:hover { text-decoration: underline; }

  /* Whitepaper */
  .whitepaper-section { max-width: 800px; margin: 0 auto; }

  .wp-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 20px;
  }

  .wp-card-title {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .wp-card-content {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }

  .wp-card-content p { margin-bottom: 12px; }
  .wp-card-content ul { margin: 12px 0; padding-left: 22px; }
  .wp-card-content li { margin-bottom: 6px; }

  .wp-highlight {
    background: ${e?"rgba(212, 175, 55, 0.12)":"rgba(212, 175, 55, 0.08)"};
    border-left: 4px solid var(--gold);
    padding: 14px 18px;
    border-radius: 0 10px 10px 0;
    margin: 14px 0;
  }

  .tokenomics-table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
  }

  .tokenomics-table th,
  .tokenomics-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.85rem;
  }

  .tokenomics-table th {
    font-family: 'Cinzel', serif;
    font-weight: 600;
    color: var(--gold);
  }

  /* Footer */
  .footer {
    text-align: center;
    padding: 45px 40px;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
  }

  .footer-logo {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 4px;
    margin-bottom: 18px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.2s ease;
    letter-spacing: 1px;
  }

  .footer-link:hover { color: var(--gold); }

  .footer-divider {
    width: 160px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 0 auto 18px;
  }

  .footer-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.8rem;
    color: var(--text-muted);
    letter-spacing: 2px;
  }

  /* Toast & Utilities */
  .toast {
    position: fixed;
    bottom: 24px;
    right: 24px;
    padding: 14px 22px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    animation: slide-in-up 0.4s ease;
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 8px;
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
    width: 14px;
    height: 14px;
    border: 2px solid transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: rotate-slow 0.8s linear infinite;
  }

  .connect-prompt {
    text-align: center;
    padding: 60px 40px;
    background: ${e?"rgba(212, 175, 55, 0.05)":"rgba(212, 175, 55, 0.03)"};
    border-radius: 24px;
    border: 2px dashed var(--gold);
  }

  .connect-prompt-icon {
    font-size: 3rem;
    margin-bottom: 18px;
    animation: float 3s ease-in-out infinite;
  }

  .connect-prompt-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 24px;
    letter-spacing: 1px;
  }
`,Z=(e,t=2)=>!e||isNaN(e)?"0":e>=1e9?(e/1e9).toFixed(2)+"B":e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":new Intl.NumberFormat("en-US",{maximumFractionDigits:t}).format(e),Hr=e=>new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e),Cp=e=>e?`${e.slice(0,6)}...${e.slice(-4)}`:"",Wn=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(e),Ep=()=>{const e=D.useMemo(()=>Array.from({length:12},(t,n)=>({id:n,left:Math.random()*100,delay:Math.random()*20,duration:18+Math.random()*20,size:2+Math.random()*4})),[]);return a.jsx("div",{className:"particles-container",children:e.map(t=>a.jsx("div",{className:"particle",style:{left:`${t.left}%`,width:t.size,height:t.size,animationDelay:`${t.delay}s`,animationDuration:`${t.duration}s`}},t.id))})},Fp=()=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"marble-bg"}),a.jsxs("div",{className:"marble-veins",children:[a.jsx("div",{className:"vein vein-1"}),a.jsx("div",{className:"vein vein-2"}),a.jsx("div",{className:"vein vein-3"}),a.jsx("div",{className:"vein vein-4"}),a.jsx("div",{className:"vein vein-5"})]})]}),zp=({isOpen:e,onClose:t,type:n,amount:r,tier:l})=>e?a.jsx("div",{className:"modal-backdrop",onClick:t,children:a.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[mo,a.jsxs("div",{className:"modal-body",children:[a.jsx("h3",{className:"modal-title gold-text",children:n==="start"?"🎉 STAKE INITIATED!":"✅ STAKE COMPLETE!"}),a.jsx("p",{className:"modal-subtitle",children:n==="start"?`Staking ${r} tokens in ${l} tier...`:`Successfully staked ${r} tokens!`}),a.jsx("button",{className:"modal-close-btn",onClick:t,children:n==="start"?"Confirm":"Close"})]})]})}):null;function Tp(){var ma,ga,ha;const[e,t]=D.useState(()=>typeof window<"u"?localStorage.getItem("dtgc-theme")==="dark":!1),[n,r]=D.useState(null),[l,i]=D.useState(null),[o,s]=D.useState(null),[u,f]=D.useState("stake"),[h,g]=D.useState(!1),[d,k]=D.useState(()=>{if(typeof window<"u"){const v=localStorage.getItem("dtgc-testnet-balances");if(v)return JSON.parse(v)}return null}),[w,S]=D.useState("0"),[R,p]=D.useState("0"),[c,m]=D.useState("0"),[x,N]=D.useState("0"),[E,z]=D.useState(null),[F,I]=D.useState(""),[T,xe]=D.useState(!1),[gt,Jt]=D.useState(null),[Ln,ua]=D.useState(null),[Er,Mn]=D.useState([]),[j,_]=D.useState({totalStaked:"0",stakers:"0"}),[b,K]=D.useState(!1),[X,qt]=D.useState(null),[Re,en]=D.useState(!1),[ye,Rt]=D.useState(null),[Ac,ca]=D.useState(!1),[Ic,da]=D.useState("start"),[O,tn]=D.useState({urmom:W.urmomPrice,dtgc:W.dtgcPrice,lastUpdated:null,loading:!0,error:null}),Je=(v,P)=>{Rt({message:v,type:P}),setTimeout(()=>Rt(null),4e3)},Gl=D.useCallback(async()=>{var v,P,ne,Oe,ke,ze;tn(we=>({...we,loading:!0,error:null}));try{const re=await(await fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0")).json(),oe=await(await fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7")).json(),nn=parseFloat(((v=re==null?void 0:re.pair)==null?void 0:v.priceUsd)||((ne=(P=re==null?void 0:re.pairs)==null?void 0:P[0])==null?void 0:ne.priceUsd)||W.urmomPrice),rn=parseFloat(((Oe=oe==null?void 0:oe.pair)==null?void 0:Oe.priceUsd)||((ze=(ke=oe==null?void 0:oe.pairs)==null?void 0:ke[0])==null?void 0:ze.priceUsd)||W.dtgcPrice);if(isNaN(nn)||isNaN(rn))throw new Error("Invalid price data");tn({urmom:nn,dtgc:rn,lastUpdated:new Date,loading:!1,error:null}),console.log("📊 Live prices updated:",{urmom:nn,dtgc:rn})}catch(we){console.error("Failed to fetch live prices:",we),tn(re=>({...re,loading:!1,error:"Failed to fetch prices - using cached values"}))}},[]);D.useEffect(()=>{Gl();const v=setInterval(Gl,6e4);return()=>clearInterval(v)},[Gl]);const Uc=async()=>{var v,P,ne,Oe,ke,ze;tn(we=>({...we,loading:!0}));try{const[we,re]=await Promise.all([fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0"),fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7")]),qe=await we.json(),oe=await re.json(),nn=parseFloat(((v=qe==null?void 0:qe.pair)==null?void 0:v.priceUsd)||((ne=(P=qe==null?void 0:qe.pairs)==null?void 0:P[0])==null?void 0:ne.priceUsd)||W.urmomPrice),rn=parseFloat(((Oe=oe==null?void 0:oe.pair)==null?void 0:Oe.priceUsd)||((ze=(ke=oe==null?void 0:oe.pairs)==null?void 0:ke[0])==null?void 0:ze.priceUsd)||W.dtgcPrice);tn({urmom:nn,dtgc:rn,lastUpdated:new Date,loading:!1,error:null}),Je(`🟢 Prices updated: URMOM $${nn.toFixed(7)} | DTGC $${rn.toFixed(7)}`,"success")}catch{tn(re=>({...re,loading:!1,error:"Failed"})),Je("⚠️ Price fetch failed","error")}},Bc=(W.totalDeadWallet*O.urmom).toFixed(2);(yi*O.urmom).toFixed(2);const Hl=D.useCallback(()=>{const v={pls:Ge.startingPLS,dtgc:Ge.startingDTGC,urmom:Ge.startingURMOM,lp:Ge.startingLP,stakedDTGC:0,stakedLP:0,rewards:0,positions:[]};return k(v),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(v)),m(v.pls.toString()),S(v.dtgc.toString()),N(v.urmom.toString()),p(v.lp.toString()),v},[]);D.useEffect(()=>{var v;d&&(m(d.pls.toString()),S(d.dtgc.toString()),N(((v=d.urmom)==null?void 0:v.toString())||"0"),p(d.lp.toString()),Mn(d.positions||[]))},[d]);const $c=D.useCallback(()=>{const v={...d,pls:((d==null?void 0:d.pls)||0)+Ge.startingPLS,dtgc:((d==null?void 0:d.dtgc)||0)+Ge.startingDTGC,urmom:((d==null?void 0:d.urmom)||0)+Ge.startingURMOM,lp:((d==null?void 0:d.lp)||0)+Ge.startingLP};k(v),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(v)),Je(`🎉 Received ${Z(Ge.startingPLS)} PLS + ${Z(Ge.startingDTGC)} DTGC + ${Z(Ge.startingLP)} LP!`,"success")},[d]),Vc=D.useCallback(()=>{localStorage.removeItem("dtgc-testnet-balances"),Hl(),Je("🔄 Testnet reset! Fresh 100M PLS added.","info")},[Hl]),fa=()=>{t(!e),localStorage.setItem("dtgc-theme",e?"light":"dark")};D.useEffect(()=>{const v=()=>g(window.scrollY>50);return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const pa=async()=>{{const v="0xTEST"+Math.random().toString(16).slice(2,10).toUpperCase()+"...TEST";s(v),d||Hl(),Je("🧪 TESTNET: Wallet connected with 100M PLS!","success");return}},Wc=async()=>{if(!F||parseFloat(F)<=0)return;const v=parseFloat(F),P=T?Ot:Gr[E];{const ne=parseFloat(T?R:w);if(v>ne){Je(`Insufficient ${T?"LP":"DTGC"} balance!`,"error");return}da("start"),ca(!0),en(!0),await new Promise(re=>setTimeout(re,2e3));const Oe=v*.05,ke=v-Oe,ze={id:Date.now(),tier:P.name,amount:ke,isLP:T,apr:P.apr,lockDays:P.lockDays,startTime:Date.now(),endTime:Date.now()+P.lockDays*24*60*60*1e3,rewards:0},we={...d,dtgc:T?d.dtgc:d.dtgc-v,lp:T?d.lp-v:d.lp,stakedDTGC:T?d.stakedDTGC:d.stakedDTGC+ke,stakedLP:T?d.stakedLP+ke:d.stakedLP,positions:[...d.positions||[],ze]};k(we),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(we)),en(!1),da("end"),I(""),Je(`✅ Staked ${Z(ke)} ${T?"LP":"DTGC"} in ${P.name} tier!`,"success");return}},Gc=async v=>{const P=d.positions.find(oe=>oe.id===v);if(!P)return;const ne=Date.now(),Oe=ne<P.endTime,ke=Oe?P.amount*.2:P.amount*.05,ze=P.amount-ke,we=(ne-P.startTime)/(24*60*60*1e3),re=P.amount*(P.apr/100)/365*we,qe={...d,dtgc:P.isLP?d.dtgc+re:d.dtgc+ze+re,lp:P.isLP?d.lp+ze:d.lp,stakedDTGC:P.isLP?d.stakedDTGC:d.stakedDTGC-P.amount,stakedLP:P.isLP?d.stakedLP-P.amount:d.stakedLP,positions:d.positions.filter(oe=>oe.id!==v)};k(qe),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(qe)),Je(`✅ Unstaked! Received ${Z(ze)} + ${Z(re)} rewards${Oe?" (20% early exit fee)":""}`,"success")},Hc=v=>{navigator.clipboard.writeText(v),Je("Address copied!","success")};return a.jsxs(Np.Provider,{value:{isDark:e,toggleTheme:fa},children:[a.jsx("style",{children:jp(e)}),a.jsx(Fp,{}),a.jsx(Ep,{}),a.jsxs("div",{className:"app-container",children:[a.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:2e3,background:"linear-gradient(90deg, #FF6B6B, #FF8E53, #FF6B6B)",backgroundSize:"200% auto",animation:"shimmer 3s linear infinite",padding:"8px 20px",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontWeight:700,color:"#FFF",fontSize:"0.85rem",letterSpacing:"1px"},children:"🧪 TESTNET MODE - Not Real Money!"}),o&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:$c,style:{padding:"6px 16px",background:"#FFF",border:"none",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FF6B6B",cursor:"pointer"},children:"🚰 Get More Test Tokens"}),a.jsx("button",{onClick:Vc,style:{padding:"6px 16px",background:"rgba(255,255,255,0.2)",border:"1px solid #FFF",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FFF",cursor:"pointer"},children:"🔄 Reset"})]})]}),a.jsx("header",{className:`nav-header ${h?"scrolled":""}`,style:{top:"40px"},children:a.jsxs("div",{className:"nav-content",children:[a.jsxs("div",{className:"logo-section",children:[a.jsx("div",{className:"logo-mark",children:"DT"}),a.jsxs("div",{className:"logo-text-group",children:[a.jsx("span",{className:"logo-text gold-text",children:"DTGC"}),a.jsx("span",{className:"logo-tagline",children:"dump.tires"})]})]}),a.jsxs("nav",{className:"nav-links",children:[a.jsx("button",{className:`nav-link ${u==="stake"?"active":""}`,onClick:()=>f("stake"),children:"Stake"}),a.jsx("button",{className:`nav-link ${u==="burn"?"active":""}`,onClick:()=>f("burn"),children:"Burn Stats"}),a.jsx("button",{className:`nav-link ${u==="vote"?"active":""}`,onClick:()=>f("vote"),children:"DAO"}),a.jsx("button",{className:`nav-link ${u==="whitepaper"?"active":""}`,onClick:()=>f("whitepaper"),children:"Whitepaper"}),a.jsx("button",{className:`nav-link ${u==="links"?"active":""}`,onClick:()=>f("links"),children:"Links"})]}),a.jsxs("div",{className:"nav-right",children:[a.jsx("button",{className:"theme-toggle",onClick:fa,children:e?"☀️":"🌙"}),a.jsxs("button",{className:`connect-btn ${o?"connected":""}`,onClick:pa,disabled:Re,children:[Re&&a.jsx("span",{className:"spinner"}),o?Cp(o):"Connect"]})]})]})}),a.jsxs("section",{className:"hero-section",style:{paddingTop:"180px"},children:[a.jsx("div",{className:"hero-badge",children:"🧪 TESTNET - Public Testing Mode 🧪"}),a.jsx("h1",{className:"hero-title gold-text",children:"DTGC STAKING"}),a.jsx("p",{className:"hero-subtitle",children:"Stake • Earn • Govern • Prosper"}),o&&d&&a.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"15px",flexWrap:"wrap",marginBottom:"30px",padding:"20px",background:e?"rgba(255,107,107,0.1)":"rgba(255,107,107,0.05)",borderRadius:"16px",border:"1px solid rgba(255,107,107,0.3)"},children:[a.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[a.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FF6B6B"},children:Z(d.pls)}),a.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST PLS"})]}),a.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[a.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FFD700"},children:Z(d.dtgc)}),a.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST DTGC"})]}),a.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[a.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FF9800"},children:Z(d.urmom||0)}),a.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST URMOM"})]}),a.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[a.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#00BCD4"},children:Z(d.lp)}),a.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST LP"})]}),a.jsxs("div",{style:{textAlign:"center",padding:"10px 20px",borderLeft:"1px solid rgba(255,255,255,0.2)"},children:[a.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#4CAF50"},children:Z((d.stakedDTGC||0)+(d.stakedLP||0))}),a.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"STAKED"})]})]}),a.jsxs("div",{className:"hero-stats",children:[a.jsxs("div",{className:"hero-stat",children:[a.jsx("div",{className:"hero-stat-value gold-text",children:Z(parseFloat(j.totalStaked))}),a.jsx("div",{className:"hero-stat-label",children:"Total Staked"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsxs("div",{className:"hero-stat-value gold-text",style:{position:"relative"},children:["$",O.urmom.toFixed(7),!O.loading&&a.jsx("span",{style:{position:"absolute",top:"-8px",right:"-20px",fontSize:"0.5rem",background:"#4CAF50",padding:"2px 6px",borderRadius:"10px",color:"#FFF",animation:"pulse 2s infinite"},children:"LIVE"})]}),a.jsxs("div",{className:"hero-stat-label",children:["URMOM ",O.loading?"⏳ Loading...":""]})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsxs("div",{className:"hero-stat-value gold-text",style:{position:"relative"},children:["$",O.dtgc.toFixed(7),!O.loading&&a.jsx("span",{style:{position:"absolute",top:"-8px",right:"-20px",fontSize:"0.5rem",background:"#4CAF50",padding:"2px 6px",borderRadius:"10px",color:"#FFF",animation:"pulse 2s infinite"},children:"LIVE"})]}),a.jsxs("div",{className:"hero-stat-label",children:["DTGC ",O.loading?"⏳ Loading...":""]})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsxs("div",{className:"hero-stat-value gold-text",children:["$",Z(parseFloat(Bc))]}),a.jsx("div",{className:"hero-stat-label",children:"Burned Value"})]})]})]}),a.jsxs("main",{className:"main-content",children:[u==="stake"&&a.jsxs("section",{className:"section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{className:"section-title gold-text",children:"SELECT YOUR TIER"}),a.jsx("div",{className:"section-divider"}),a.jsx("p",{className:"section-description",children:"Choose your staking tier based on lock duration and desired APR"})]}),a.jsxs("div",{className:"tiers-grid",children:[Gr.map(v=>a.jsxs("div",{className:`tier-card ${E===v.id&&!T?"selected":""}`,style:{"--tier-gradient":v.gradient},onClick:()=>{z(v.id),xe(!1)},children:[a.jsx("div",{className:"tier-icon",children:v.icon}),a.jsx("div",{className:"tier-name",style:{color:v.color},children:v.name}),a.jsxs("div",{className:"tier-apr-container",children:[a.jsxs("div",{className:"tier-apr gold-text",children:[v.apr,"%"]}),a.jsx("div",{className:"tier-apr-label",children:"APR"})]}),a.jsxs("div",{className:"tier-features",children:[a.jsxs("div",{className:"tier-feature",children:[a.jsx("span",{className:"tier-feature-label",children:"Lock"}),a.jsxs("span",{className:"tier-feature-value",children:[v.lockDays," Days"]})]}),a.jsxs("div",{className:"tier-feature",children:[a.jsx("span",{className:"tier-feature-label",children:"Bonus"}),a.jsxs("span",{className:"tier-feature-value",children:["+",v.bonus,"%"]})]})]}),a.jsx("span",{className:"tier-badge",children:"DTGC"})]},v.id)),a.jsxs("div",{className:`tier-card diamond ${T?"selected":""}`,onClick:()=>{z(3),xe(!0)},children:[a.jsx("div",{className:"tier-icon",children:Ot.icon}),a.jsx("div",{className:"tier-name",style:{color:Ot.color},children:Ot.name}),a.jsx("div",{className:"tier-subtitle",children:"URMOM/DTGC LP STAKE + DTGC"}),a.jsxs("div",{className:"tier-apr-container",children:[a.jsxs("div",{className:"tier-apr",style:{color:"var(--diamond-dark)"},children:[Ot.apr,"%"]}),a.jsx("div",{className:"tier-apr-label",children:"APR"})]}),a.jsxs("div",{className:"tier-features",children:[a.jsxs("div",{className:"tier-feature",children:[a.jsx("span",{className:"tier-feature-label",children:"Lock"}),a.jsxs("span",{className:"tier-feature-value",children:[Ot.lockDays," Days"]})]}),a.jsxs("div",{className:"tier-feature",children:[a.jsx("span",{className:"tier-feature-label",children:"Bonus"}),a.jsxs("span",{className:"tier-feature-value",children:["+",Ot.bonus,"%"]})]}),a.jsxs("div",{className:"tier-feature",children:[a.jsx("span",{className:"tier-feature-label",children:"Boost"}),a.jsx("span",{className:"tier-feature-value",children:"1x → 1.5x"})]})]}),a.jsx("span",{className:"tier-badge lp",children:"LP"})]})]}),E!==null&&o&&a.jsxs("div",{className:"staking-panel",children:[a.jsx("h3",{className:"panel-title gold-text",children:T?"💎 STAKE LP TOKENS":`${(ma=Gr[E])==null?void 0:ma.icon} STAKE DTGC`}),a.jsxs("div",{className:"input-group",children:[a.jsxs("div",{className:"input-header",children:[a.jsx("span",{className:"input-label",children:"Amount"}),a.jsxs("span",{className:"balance-display",onClick:()=>I(T?R:w),children:["Balance: ",Z(parseFloat(T?R:w))," ",T?"LP":"DTGC"]})]}),a.jsxs("div",{className:"input-container",children:[a.jsx("input",{type:"number",className:"stake-input",placeholder:"0.00",value:F,onChange:v=>I(v.target.value)}),a.jsxs("div",{className:"input-suffix",children:[a.jsx("span",{className:"token-badge",children:T?"LP":"DTGC"}),a.jsx("button",{className:"max-btn",onClick:()=>I(T?R:w),children:"MAX"})]})]})]}),a.jsxs("button",{className:"action-btn primary",onClick:Wc,disabled:Re||!F||parseFloat(F)<=0,children:[Re&&a.jsx("span",{className:"spinner"}),T?"Stake LP Tokens":"Stake DTGC"]}),a.jsxs("div",{className:"fee-breakdown",children:[a.jsx("div",{className:"fee-title",children:"FEE STRUCTURE"}),a.jsxs("div",{className:"fee-row",children:[a.jsx("span",{children:"Entry Fee"}),a.jsx("span",{children:"5% (1% Dev + 4% DAO)"})]}),a.jsxs("div",{className:"fee-row",children:[a.jsx("span",{children:"Exit Fee"}),a.jsx("span",{children:"5% (1% Dev + 4% DAO)"})]}),a.jsxs("div",{className:"fee-row",children:[a.jsx("span",{children:"Emergency Exit (EES)"}),a.jsx("span",{children:"20% (2% Dev + 18% DAO Vote)"})]})]})]}),o&&((ga=d==null?void 0:d.positions)==null?void 0:ga.length)>0&&a.jsxs("div",{style:{maxWidth:"700px",margin:"40px auto 0",background:"var(--bg-card)",borderRadius:"24px",padding:"30px",border:"1px solid var(--border-color)"},children:[a.jsx("h3",{style:{fontFamily:"Cinzel, serif",fontSize:"1.2rem",letterSpacing:"3px",marginBottom:"20px",textAlign:"center",color:"var(--gold)"},children:"📊 YOUR STAKED POSITIONS"}),d.positions.map(v=>{const P=Date.now(),ne=P<v.endTime,Oe=Math.max(0,Math.ceil((v.endTime-P)/(24*60*60*1e3))),ke=(P-v.startTime)/(24*60*60*1e3),ze=v.amount*(v.apr/100)/365*ke;return a.jsx("div",{style:{background:e?"rgba(212,175,55,0.1)":"rgba(212,175,55,0.05)",border:`1px solid ${ne?"rgba(255,107,107,0.3)":"rgba(76,175,80,0.3)"}`,borderRadius:"16px",padding:"20px",marginBottom:"15px"},children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"15px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,fontSize:"1.1rem",color:v.isLP?"var(--diamond)":"var(--gold)"},children:[v.tier," ",v.isLP?"(LP)":"(DTGC)"]}),a.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"4px"},children:["Staked: ",a.jsx("strong",{children:Z(v.amount)})," • APR: ",a.jsxs("strong",{children:[v.apr,"%"]})]}),a.jsx("div",{style:{fontSize:"0.8rem",color:ne?"#FF6B6B":"#4CAF50",marginTop:"4px"},children:ne?`🔒 ${Oe} days remaining`:"✅ Unlocked - Ready to claim!"})]}),a.jsxs("div",{style:{textAlign:"right"},children:[a.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Rewards Earned"}),a.jsxs("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#4CAF50"},children:["+",Z(ze)]}),a.jsx("button",{onClick:()=>Gc(v.id),style:{marginTop:"10px",padding:"8px 20px",background:ne?"linear-gradient(135deg, #FF6B6B, #FF8E53)":"linear-gradient(135deg, #4CAF50, #8BC34A)",border:"none",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FFF",cursor:"pointer"},children:ne?"⚠️ Early Unstake (20% Fee)":"✅ Claim All"})]})]})},v.id)})]}),!o&&a.jsxs("div",{className:"connect-prompt",children:[a.jsx("div",{className:"connect-prompt-icon",children:"🔐"}),a.jsx("p",{className:"connect-prompt-text",children:"Connect your wallet to start staking DTGC"}),a.jsx("button",{className:"action-btn primary",style:{maxWidth:"260px",margin:"0 auto"},onClick:pa,children:"Connect Wallet"})]}),mo]}),u==="burn"&&a.jsx("section",{className:"section",children:a.jsxs("div",{className:"burn-section",children:[a.jsxs("div",{className:"burn-header",children:[a.jsx("span",{className:"burn-icon",children:"🔥"}),a.jsxs("div",{className:"burn-header-text",children:[a.jsx("h2",{children:"🎊 $URMOM SUPER STATS 🎊"}),a.jsxs("p",{children:["Live Price: $",O.urmom.toFixed(7)," ",O.loading?"⏳":"🟢"," • ",a.jsx("a",{href:Te.dexscreener,target:"_blank",rel:"noopener noreferrer",style:{color:"#FF9800"},children:"DexScreener →"})]})]}),a.jsxs("div",{className:"burn-links",children:[a.jsx("a",{href:Te.dexscreener,target:"_blank",rel:"noopener noreferrer",className:"burn-link-btn",children:"📊 DexScreener"}),a.jsx("a",{href:Te.coingecko,target:"_blank",rel:"noopener noreferrer",className:"burn-link-btn",children:"🦎 CoinGecko"}),a.jsx("button",{onClick:Uc,className:"burn-link-btn",style:{cursor:"pointer",border:"none",background:"rgba(76,175,80,0.2)"},disabled:O.loading,children:O.loading?"⏳ Loading...":"🔄 Refresh Prices"})]}),O.lastUpdated&&a.jsxs("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",marginTop:"8px"},children:["Last updated: ",O.lastUpdated.toLocaleTimeString()," • Auto-refreshes every 60s"]})]}),a.jsxs("div",{className:"burn-main-stats",children:[a.jsxs("div",{className:"burn-stat-card",children:[a.jsx("div",{className:"burn-stat-emoji",children:"💵"}),a.jsxs("div",{className:"burn-stat-value",children:["$",O.urmom.toFixed(7)]}),a.jsxs("a",{href:Te.dexscreener,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.6rem",color:"#FF9800",textDecoration:"none"},children:["📊 ",O.loading?"Loading...":"🟢 Live"]}),a.jsx("div",{className:"burn-stat-label",children:"URMOM Price"})]}),a.jsxs("div",{className:"burn-stat-card",children:[a.jsx("div",{className:"burn-stat-emoji",children:"🪙"}),a.jsxs("div",{className:"burn-stat-value",children:["$",O.dtgc.toFixed(7)]}),a.jsxs("a",{href:Te.dexscreenerDTGC,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.6rem",color:"#FFD700",textDecoration:"none"},children:["📊 ",O.loading?"Loading...":"🟢 Live"]}),a.jsx("div",{className:"burn-stat-label",children:"DTGC Price"})]}),a.jsxs("div",{className:"burn-stat-card",children:[a.jsx("div",{className:"burn-stat-emoji",children:"🔥"}),a.jsx("div",{className:"burn-stat-value",children:Z(W.totalDeadWallet)}),a.jsx("div",{className:"burn-stat-subvalue",style:{color:"#FF9800"},children:"545,616,403 URMOM"}),a.jsx("div",{className:"burn-stat-label",children:"Burnt Tokens"})]}),a.jsxs("div",{className:"burn-stat-card",style:{background:"linear-gradient(135deg, rgba(255,152,0,0.15) 0%, rgba(255,87,34,0.1) 100%)"},children:[a.jsx("div",{className:"burn-stat-emoji",children:"💎"}),a.jsx("div",{className:"burn-stat-value",children:Wn(W.totalDeadWallet*O.urmom)}),a.jsxs("div",{className:"burn-stat-subvalue",style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.7)"},children:[Z(W.totalDeadWallet)," × $",O.urmom.toFixed(7)]}),a.jsx("div",{className:"burn-stat-label",children:"LIVE BURNED VALUE"})]})]}),a.jsxs("div",{style:{background:"rgba(255, 152, 0, 0.1)",border:"1px solid rgba(255, 152, 0, 0.3)",borderRadius:"12px",padding:"16px 20px",marginBottom:"35px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontSize:"1.5rem"},children:"🧮"}),a.jsxs("span",{style:{fontFamily:"Cinzel, serif",fontSize:"0.85rem",letterSpacing:"1px",color:"rgba(255,255,255,0.8)"},children:["LIVE CALCULATION ",O.loading?"⏳":"🟢"]})]}),a.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.9rem",color:"#FF9800"},children:[Hr(W.totalDeadWallet)," URMOM × $",O.urmom.toFixed(7)," = ",a.jsx("strong",{style:{color:"#FFD700",fontSize:"1.1rem"},children:Wn(W.totalDeadWallet*O.urmom)})]})]}),a.jsxs("div",{className:"burn-progress-section",children:[a.jsxs("div",{className:"burn-progress-header",children:[a.jsx("span",{className:"burn-progress-title",children:"🏁 TOTAL BURNED / REMOVED"}),a.jsxs("span",{className:"burn-progress-percent",children:[W.burnPercentage,"%"]})]}),a.jsx("div",{className:"burn-progress-bar",children:a.jsx("div",{className:"burn-progress-fill",style:{width:`${W.burnPercentage}%`}})}),a.jsx("div",{className:"burn-progress-blocks",children:Array.from({length:20},(v,P)=>a.jsx("div",{className:`burn-block ${P<Math.floor(W.burnPercentage/5)?"filled":""}`},P))})]}),a.jsxs("div",{className:"dead-wallet-section",children:[a.jsx("h3",{className:"dead-wallet-title",children:"🕳️ DEAD WALLET BREAKDOWN"}),a.jsx("div",{className:"dead-wallet-grid",children:Object.entries(W.deadWallets).map(([v,P],ne)=>a.jsxs("div",{className:"dead-wallet-row",children:[a.jsxs("span",{className:"dead-wallet-address",children:[v.slice(0,10),"...",v.slice(-4)]}),a.jsx("span",{className:`dead-wallet-amount ${P===0?"zero":""}`,children:P===0?"0.00":Hr(P)})]},ne))})]}),a.jsxs("div",{className:"lp-burn-section",children:[a.jsx("h3",{className:"lp-burn-title",children:"🧺 LP TOKENS BURNED"}),a.jsx("div",{className:"lp-burn-grid",children:W.lpBurnPercentages.map((v,P)=>a.jsxs("div",{className:"lp-burn-item",children:[a.jsxs("div",{className:"lp-burn-header",children:[a.jsx("span",{className:"lp-burn-name",children:v.pair}),a.jsxs("span",{className:"lp-burn-percent",children:[v.percentage.toFixed(4),"%"]})]}),a.jsx("div",{className:"lp-burn-bar",children:a.jsx("div",{className:"lp-burn-fill",style:{width:`${v.percentage}%`}})})]},P))})]}),a.jsxs("div",{className:"lp-urmom-section",children:[a.jsx("h3",{className:"lp-urmom-title",children:"📊 LP BURNED BREAKDOWN (URMOM × LIVE PRICE)"}),a.jsx("div",{className:"lp-urmom-grid",children:W.lpUrmomBreakdown.map((v,P)=>a.jsxs("div",{className:"lp-urmom-card",style:{"--card-color":v.color},children:[a.jsx("div",{className:"lp-urmom-pool",children:v.pool}),a.jsx("div",{className:"lp-urmom-tokens",children:Z(v.tokens)}),a.jsx("div",{className:"lp-urmom-usd",children:Wn(v.tokens*O.urmom)}),a.jsxs("div",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",marginTop:"4px"},children:[Z(v.tokens)," × $",O.urmom.toFixed(7)]})]},P))}),a.jsx("div",{style:{textAlign:"center",marginTop:"20px",padding:"12px",background:"rgba(255,152,0,0.1)",borderRadius:"10px"},children:a.jsxs("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.85rem"},children:[a.jsx("strong",{children:"Total LP URMOM:"})," ",Z(yi)," = ",a.jsx("strong",{style:{color:"#FF9800"},children:Wn(yi*O.urmom)})]})})]}),a.jsxs("div",{className:"burn-address-box",children:[a.jsxs("div",{className:"burn-address-info",children:[a.jsx("span",{className:"burn-address-label",children:"PulseChain Burn Address (0x...369)"}),a.jsx("span",{className:"burn-address-value",children:Se.burn})]}),a.jsx("a",{href:`${Wr}/address/${Se.burn}`,target:"_blank",rel:"noopener noreferrer",className:"burn-view-btn",children:"View on PulseScan →"})]})]})}),u==="vote"&&a.jsx("section",{className:"section",children:a.jsxs("div",{className:"voting-section",children:[a.jsxs("div",{className:"voting-header",children:[a.jsx("span",{className:"voting-icon",children:"🗳️"}),a.jsxs("div",{className:"voting-header-text",children:[a.jsx("h2",{children:"DAO GOVERNANCE"}),a.jsx("p",{children:"Vote on EES penalty fund allocation"})]})]}),a.jsxs("div",{className:"voting-eligibility",children:[a.jsx("div",{className:"eligibility-title",children:"VOTING ELIGIBILITY"}),a.jsxs("div",{className:"eligibility-items",children:[a.jsxs("div",{className:"eligibility-item",children:[a.jsx("span",{className:`eligibility-check ${gt||Ln?"active":"inactive"}`,children:gt||Ln?"✓":"○"}),a.jsx("span",{children:"Verified Staker"})]}),a.jsxs("div",{className:"eligibility-item",children:[a.jsx("span",{className:`eligibility-check ${parseFloat(w)>=1e6?"active":"inactive"}`,children:parseFloat(w)>=1e6?"✓":"○"}),a.jsx("span",{children:"Hold 1M+ DTGC"})]}),a.jsxs("div",{className:"eligibility-item",children:[a.jsx("span",{className:`eligibility-check ${b?"active":"inactive"}`,children:b?"✓":"○"}),a.jsx("span",{children:b?"You Can Vote!":"Not Eligible"})]})]})]}),a.jsx("div",{className:"voting-options-grid",children:Sp.map(v=>a.jsxs("div",{className:`voting-option ${X===v.id?"selected":""}`,onClick:()=>qt(v.id),children:[a.jsxs("div",{className:"voting-option-header",children:[a.jsx("span",{className:"voting-option-letter",children:["A","B","C","D"][v.id]}),a.jsx("span",{className:"voting-option-name",children:v.name})]}),a.jsx("p",{className:"voting-option-desc",children:v.description}),a.jsxs("div",{className:"voting-option-votes",children:[a.jsx("div",{className:"votes-bar",children:a.jsx("div",{className:"votes-fill",style:{width:`${(v.id+1)*15}%`}})}),a.jsxs("span",{className:"votes-count",children:[(v.id+1)*3," votes"]})]})]},v.id))}),a.jsx("button",{className:"vote-btn",disabled:!b||X===null,onClick:()=>Je("Voting coming soon!","info"),children:o?b?"Cast Your Vote":"Not Eligible":"Connect Wallet"})]})}),u==="whitepaper"&&a.jsxs("section",{className:"section whitepaper-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{className:"section-title gold-text",children:"WHITEPAPER"}),a.jsx("div",{className:"section-divider"}),a.jsx("p",{className:"section-description",children:"DT Gold Coin • Premium Staking Protocol"})]}),a.jsxs("div",{className:"wp-card",children:[a.jsx("h3",{className:"wp-card-title gold-text",children:"📜 Introduction"}),a.jsxs("div",{className:"wp-card-content",children:[a.jsx("p",{children:"DT Gold Coin (DTGC) is a premium staking protocol built on PulseChain, designed to reward long-term holders while creating sustainable tokenomics through strategic burns and DAO governance."}),a.jsx("p",{children:"Paired with URMOM token, DTGC creates a dual-token ecosystem that benefits both communities through liquidity provision, staking rewards, and deflationary mechanisms."})]})]}),a.jsxs("div",{className:"wp-card",children:[a.jsx("h3",{className:"wp-card-title gold-text",children:"💰 DTGC Tokenomics"}),a.jsxs("div",{className:"wp-card-content",children:[a.jsx("p",{children:a.jsx("strong",{children:"Total Supply: 1,000,000,000 DTGC"})}),a.jsxs("table",{className:"tokenomics-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Allocation"}),a.jsx("th",{children:"Amount"}),a.jsx("th",{children:"Percentage"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Dev Wallet"}),a.jsx("td",{children:"630,000,000"}),a.jsx("td",{children:"63%"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"DAO Rewards"}),a.jsx("td",{children:"200,000,000"}),a.jsx("td",{children:"20%"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Circulating"}),a.jsx("td",{children:"170,000,000"}),a.jsx("td",{children:"17%"})]})]})]}),a.jsxs("div",{className:"wp-highlight",children:[a.jsx("strong",{children:"Fee Structure:"}),a.jsx("br",{}),"• Entry Fee: 5% (1% Dev, 4% DAO)",a.jsx("br",{}),"• Exit Fee: 5% (1% Dev, 4% DAO)",a.jsx("br",{}),"• Emergency Exit: 20% (2% Dev, 18% DAO)"]})]})]}),a.jsxs("div",{className:"wp-card",children:[a.jsx("h3",{className:"wp-card-title gold-text",children:"⭐ Staking Tiers"}),a.jsx("div",{className:"wp-card-content",children:a.jsxs("table",{className:"tokenomics-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Tier"}),a.jsx("th",{children:"Lock"}),a.jsx("th",{children:"APR"}),a.jsx("th",{children:"Bonus"}),a.jsx("th",{children:"Asset"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"🥉 Bronze"}),a.jsx("td",{children:"14 days"}),a.jsx("td",{children:"2.5%"}),a.jsx("td",{children:"+0.5%"}),a.jsx("td",{children:"DTGC"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"🥈 Silver"}),a.jsx("td",{children:"30 days"}),a.jsx("td",{children:"6%"}),a.jsx("td",{children:"+1.5%"}),a.jsx("td",{children:"DTGC"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"🥇 Gold"}),a.jsx("td",{children:"90 days"}),a.jsx("td",{children:"9%"}),a.jsx("td",{children:"+4%"}),a.jsx("td",{children:"DTGC"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"💎 Diamond"}),a.jsx("td",{children:"90 days"}),a.jsx("td",{children:"12%"}),a.jsx("td",{children:"+5%"}),a.jsx("td",{children:"LP"})]})]})]})})]}),a.jsxs("div",{className:"wp-card",children:[a.jsx("h3",{className:"wp-card-title gold-text",children:"🔥 Burn History (Live)"}),a.jsxs("div",{className:"wp-card-content",children:[a.jsxs("p",{children:[a.jsxs("strong",{children:[Hr(W.totalDeadWallet)," URMOM"]})," (",W.burnPercentage,"% of supply) permanently burned."]}),a.jsxs("div",{className:"wp-highlight",children:[a.jsxs("strong",{children:["🧮 Live Value Calculation ",O.loading?"⏳":"🟢",":"]}),a.jsx("br",{}),Hr(W.totalDeadWallet)," URMOM × $",O.urmom.toFixed(7)," = ",a.jsx("strong",{style:{color:"var(--gold)"},children:Wn(W.totalDeadWallet*O.urmom)})]}),a.jsxs("p",{children:["Burn Address: ",a.jsx("code",{style:{color:"var(--gold)"},children:Se.burn})]})]})]}),mo]}),u==="links"&&a.jsxs("section",{className:"section links-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{className:"section-title gold-text",children:"DT & URMOM: GOLD COIN MARBLE"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"links-grid",children:[a.jsxs("a",{href:Te.xUrmom,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"𝕏"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"URMOM Twitter"}),a.jsx("div",{className:"link-url",children:"@UrmomPulse"})]})]}),a.jsxs("a",{href:Te.xDumpTires,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"𝕏"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"Dump Tires Twitter"}),a.jsx("div",{className:"link-url",children:"@Dump_Tires"})]})]}),a.jsxs("a",{href:Te.telegram,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"📱"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"Telegram"}),a.jsx("div",{className:"link-url",children:"t.me/urmomPulse"})]})]}),a.jsxs("a",{href:Te.website,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"🌐"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"Website"}),a.jsx("div",{className:"link-url",children:"dump.tires"})]})]}),a.jsxs("a",{href:Te.dexscreener,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"📊"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"URMOM DexScreener"}),a.jsx("div",{className:"link-url",children:"URMOM/PLS Chart"})]})]}),a.jsxs("a",{href:Te.dexscreenerDTGC,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"📊"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"DTGC DexScreener"}),a.jsx("div",{className:"link-url",children:"DTGC/URMOM Chart"})]})]}),a.jsxs("a",{href:Te.coingecko,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[a.jsx("span",{className:"link-icon",children:"🦎"}),a.jsxs("div",{className:"link-info",children:[a.jsx("div",{className:"link-name",children:"CoinGecko"}),a.jsx("div",{className:"link-url",children:"URMOM Listing"})]})]})]}),a.jsxs("div",{className:"contracts-section",children:[a.jsx("h3",{className:"contracts-title gold-text",children:"CONTRACT ADDRESSES"}),[{label:"🪙 DTGC Token",addr:Se.dtgc},{label:"👩 URMOM Token",addr:Se.urmom},{label:"💧 DTGC/URMOM LP",addr:Se.lp},{label:"✅ DTGC Staking V2",addr:Se.stakingV2},{label:"✅ LP Staking V2",addr:Se.lpStakingV2},{label:"🗳️ DAO Voting",addr:Se.daoVoting},{label:"🏛️ DAO Treasury",addr:Se.daoTreasury},{label:"🔥 Burn Address",addr:Se.burn}].map((v,P)=>a.jsxs("div",{className:"contract-row",children:[a.jsx("span",{className:"contract-label",children:v.label}),a.jsx("span",{className:"contract-address",onClick:()=>Hc(v.addr),children:v.addr})]},P))]})]})]}),a.jsxs("footer",{className:"footer",children:[a.jsx("div",{className:"footer-logo gold-text",children:"DTGC"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:`${Wr}/address/${Se.stakingV2}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Staking Contract"}),a.jsx("a",{href:`${Wr}/address/${Se.lpStakingV2}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"LP Staking"}),a.jsx("a",{href:`${Wr}/address/${Se.daoVoting}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"DAO Voting"}),a.jsx("a",{href:Te.telegram,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Telegram"})]}),a.jsx("div",{className:"footer-divider"}),a.jsx("p",{className:"footer-text",children:"© 2024 DTGC • dump.tires • Premium Staking on PulseChain"})]})]}),a.jsx(zp,{isOpen:Ac,onClose:()=>ca(!1),type:Ic,amount:F,tier:T?"Diamond":(ha=Gr[E])==null?void 0:ha.name}),ye&&a.jsxs("div",{className:`toast ${ye.type}`,children:[ye.type==="success"&&"✓ ",ye.type==="error"&&"✕ ",ye.type==="info"&&"ℹ ",ye.message]})]})}ki.createRoot(document.getElementById("root")).render(a.jsx(ud.StrictMode,{children:a.jsx(Tp,{})}));

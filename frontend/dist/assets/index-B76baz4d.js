(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function uu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $a={exports:{}},Bl={},Wa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),pu=Symbol.for("react.portal"),fu=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),ku=Symbol.for("react.memo"),ju=Symbol.for("react.lazy"),Ps=Symbol.iterator;function Su(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var Va={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,Ha={};function On(e,t,n){this.props=e,this.context=t,this.refs=Ha,this.updater=n||Va}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qa(){}Qa.prototype=On.prototype;function Co(e,t,n){this.props=e,this.context=t,this.refs=Ha,this.updater=n||Va}var No=Co.prototype=new Qa;No.constructor=Co;Ga(No,On.prototype);No.isPureReactComponent=!0;var As=Array.isArray,Ya=Object.prototype.hasOwnProperty,Eo={current:null},Ka={key:!0,ref:!0,__self:!0,__source:!0};function Xa(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ya.call(t,r)&&!Ka.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),f=0;f<a;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Tr,type:e,key:o,ref:s,props:i,_owner:Eo.current}}function wu(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function bu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ds=/\/+/g;function li(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bu(""+e.key):t.toString(36)}function nl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Tr:case pu:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+li(s,0):r,As(i)?(n="",e!=null&&(n=e.replace(Ds,"$&/")+"/"),nl(i,t,n,"",function(f){return f})):i!=null&&(Fo(i)&&(i=wu(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ds,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",As(e))for(var a=0;a<e.length;a++){o=e[a];var d=r+li(o,a);s+=nl(o,t,n,d,i)}else if(d=Su(e),typeof d=="function")for(e=d.call(e),a=0;!(o=e.next()).done;)o=o.value,d=r+li(o,a++),s+=nl(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _r(e,t,n){if(e==null)return e;var r=[],i=0;return nl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Cu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},rl={transition:null},Nu={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Eo};function Za(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!Fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=On;L.Fragment=fu;L.Profiler=gu;L.PureComponent=Co;L.StrictMode=mu;L.Suspense=yu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nu;L.act=Za;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ga({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Eo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in t)Ya.call(t,d)&&!Ka.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&a!==void 0?a[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){a=Array(d);for(var f=0;f<d;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Tr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:xu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hu,_context:e},e.Consumer=e};L.createElement=Xa;L.createFactory=function(e){var t=Xa.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:vu,render:e}};L.isValidElement=Fo;L.lazy=function(e){return{$$typeof:ju,_payload:{_status:-1,_result:e},_init:Cu}};L.memo=function(e,t){return{$$typeof:ku,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=rl.transition;rl.transition={};try{e()}finally{rl.transition=t}};L.unstable_act=Za;L.useCallback=function(e,t){return Ne.current.useCallback(e,t)};L.useContext=function(e){return Ne.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};L.useEffect=function(e,t){return Ne.current.useEffect(e,t)};L.useId=function(){return Ne.current.useId()};L.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ne.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};L.useRef=function(e){return Ne.current.useRef(e)};L.useState=function(e){return Ne.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Ne.current.useTransition()};L.version="18.3.1";Wa.exports=L;var T=Wa.exports;const Cn=uu(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu=T,Fu=Symbol.for("react.element"),zu=Symbol.for("react.fragment"),Tu=Object.prototype.hasOwnProperty,Pu=Eu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Au={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Tu.call(t,r)&&!Au.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fu,type:e,key:o,ref:s,props:i,_owner:Pu.current}}Bl.Fragment=zu;Bl.jsx=Ja;Bl.jsxs=Ja;$a.exports=Bl;var l=$a.exports,Pi={},qa={exports:{}},Be={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,P){var A=b.length;b.push(P);e:for(;0<A;){var V=A-1>>>1,oe=b[V];if(0<i(oe,P))b[V]=P,b[A]=oe,A=V;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],A=b.pop();if(A!==P){b[0]=A;e:for(var V=0,oe=b.length,$n=oe>>>1;V<$n;){var ft=2*(V+1)-1,Nt=b[ft],Et=ft+1,lt=b[Et];if(0>i(Nt,A))Et<oe&&0>i(lt,Nt)?(b[V]=lt,b[Et]=A,V=Et):(b[V]=Nt,b[ft]=A,V=ft);else if(Et<oe&&0>i(lt,A))b[V]=lt,b[Et]=A,V=Et;else break e}}return P}function i(b,P){var A=b.sortIndex-P.sortIndex;return A!==0?A:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var d=[],f=[],x=1,h=null,g=3,k=!1,S=!1,j=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(b){for(var P=n(f);P!==null;){if(P.callback===null)r(f);else if(P.startTime<=b)r(f),P.sortIndex=P.expirationTime,t(d,P);else break;P=n(f)}}function v(b){if(j=!1,c(b),!S)if(n(d)!==null)S=!0,Ct(w);else{var P=n(f);P!==null&&Y(v,P.startTime-b)}}function w(b,P){S=!1,j&&(j=!1,p(z),z=-1),k=!0;var A=g;try{for(c(P),h=n(d);h!==null&&(!(h.expirationTime>P)||b&&!Ie());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var oe=V(h.expirationTime<=P);P=e.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(d)&&r(d),c(P)}else r(d);h=n(d)}if(h!==null)var $n=!0;else{var ft=n(f);ft!==null&&Y(v,ft.startTime-P),$n=!1}return $n}finally{h=null,g=A,k=!1}}var E=!1,N=null,z=-1,q=5,D=-1;function Ie(){return!(e.unstable_now()-D<q)}function bt(){if(N!==null){var b=e.unstable_now();D=b;var P=!0;try{P=N(!0,b)}finally{P?je():(E=!1,N=null)}}else E=!1}var je;if(typeof u=="function")je=function(){u(bt)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,pt=dn.port2;dn.port1.onmessage=bt,je=function(){pt.postMessage(null)}}else je=function(){M(bt,0)};function Ct(b){N=b,E||(E=!0,je())}function Y(b,P){z=M(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Ct(w))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var A=g;g=P;try{return b()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var A=g;g=b;try{return P()}finally{g=A}},e.unstable_scheduleCallback=function(b,P,A){var V=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?V+A:V):A=V,b){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=A+oe,b={id:x++,callback:P,priorityLevel:b,startTime:A,expirationTime:oe,sortIndex:-1},A>V?(b.sortIndex=A,t(f,b),n(d)===null&&b===n(f)&&(j?(p(z),z=-1):j=!0,Y(v,A-V))):(b.sortIndex=oe,t(d,b),S||k||(S=!0,Ct(w))),b},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(b){var P=g;return function(){var A=g;g=P;try{return b.apply(this,arguments)}finally{g=A}}}})(td);ed.exports=td;var Du=ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=T,Me=Du;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nd=new Set,fr={};function sn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(fr[e]=t,e=0;e<t.length;e++)nd.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=Object.prototype.hasOwnProperty,Ru=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ls={},Rs={};function _u(e){return Ai.call(Rs,e)?!0:Ai.call(Ls,e)?!1:Ru.test(e)?Rs[e]=!0:(Ls[e]=!0,!1)}function Mu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bu(e,t,n,r){if(t===null||typeof t>"u"||Mu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var zo=/[\-:]([a-z])/g;function To(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zo,To);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zo,To);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zo,To);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Po(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bu(t,n,i,r)&&(n=null),r||i===null?_u(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),fn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Ao=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),ld=Symbol.for("react.context"),Do=Symbol.for("react.forward_ref"),Li=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),Lo=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),id=Symbol.for("react.offscreen"),_s=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ii;function er(e){if(ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ii=t&&t[1]||""}return`
`+ii+e}var oi=!1;function si(e,t){if(!e||oi)return"";oi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var d=`
`+i[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=a);break}}}finally{oi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function Ou(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function _i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case fn:return"Portal";case Di:return"Profiler";case Ao:return"StrictMode";case Li:return"Suspense";case Ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case rd:return(e._context.displayName||"Context")+".Provider";case Do:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lo:return t=e.displayName||null,t!==null?t:_i(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return _i(e(t))}catch{}}return null}function Iu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _i(t);case 8:return t===Ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uu(e){var t=od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=Uu(e))}function sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ad(e,t){t=t.checked,t!=null&&Po(e,"checked",t,!1)}function Bi(e,t){ad(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oi(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oi(e,t,n){(t!=="number"||ml(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(tr(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function dd(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Or,ud=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$u=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){$u.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function fd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wu=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $i(e,t){if(t){if(Wu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,En=null,Fn=null;function Us(e){if(e=Dr(e)){if(typeof Gi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Wl(t),Gi(e.stateNode,e.type,t))}}function md(e){En?Fn?Fn.push(e):Fn=[e]:En=e}function gd(){if(En){var e=En,t=Fn;if(Fn=En=null,Us(e),t)for(e=0;e<t.length;e++)Us(t[e])}}function hd(e,t){return e(t)}function xd(){}var ai=!1;function vd(e,t,n){if(ai)return e(t,n);ai=!0;try{return hd(e,t,n)}finally{ai=!1,(En!==null||Fn!==null)&&(xd(),gd())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Hi=!1;if(yt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Hi=!1}function Vu(e,t,n,r,i,o,s,a,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(x){this.onError(x)}}var ir=!1,gl=null,hl=!1,Qi=null,Gu={onError:function(e){ir=!0,gl=e}};function Hu(e,t,n,r,i,o,s,a,d){ir=!1,gl=null,Vu.apply(Gu,arguments)}function Qu(e,t,n,r,i,o,s,a,d){if(Hu.apply(this,arguments),ir){if(ir){var f=gl;ir=!1,gl=null}else throw Error(y(198));hl||(hl=!0,Qi=f)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(an(e)!==e)throw Error(y(188))}function Yu(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $s(i),e;if(o===r)return $s(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function kd(e){return e=Yu(e),e!==null?jd(e):null}function jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=Me.unstable_scheduleCallback,Ws=Me.unstable_cancelCallback,Ku=Me.unstable_shouldYield,Xu=Me.unstable_requestPaint,le=Me.unstable_now,Zu=Me.unstable_getCurrentPriorityLevel,_o=Me.unstable_ImmediatePriority,wd=Me.unstable_UserBlockingPriority,xl=Me.unstable_NormalPriority,Ju=Me.unstable_LowPriority,bd=Me.unstable_IdlePriority,Ol=null,ct=null;function qu(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Ol,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var Ir=64,Ur=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=nr(a):(o&=s,o!==0&&(r=nr(o)))}else s=n&~i,s!==0?r=nr(s):o!==0&&(r=nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),a=1<<s,d=i[s];d===-1?(!(a&n)||a&r)&&(i[s]=rp(a,t)):d<=t&&(e.expiredLanes|=a),o&=~a}}function Yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cd(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Mo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ed,Bo,Fd,zd,Td,Ki=!1,$r=[],Rt=null,_t=null,Mt=null,hr=new Map,xr=new Map,Pt=[],op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vs(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Qn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Dr(t),t!==null&&Bo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sp(e,t,n,r,i){switch(t){case"focusin":return Rt=Qn(Rt,e,t,n,r,i),!0;case"dragenter":return _t=Qn(_t,e,t,n,r,i),!0;case"mouseover":return Mt=Qn(Mt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return hr.set(o,Qn(hr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xr.set(o,Qn(xr.get(o)||null,e,t,n,r,i)),!0}return!1}function Pd(e){var t=Xt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=yd(n),t!==null){e.blockedOn=t,Td(e.priority,function(){Fd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vi=r,n.target.dispatchEvent(r),Vi=null}else return t=Dr(n),t!==null&&Bo(t),e.blockedOn=n,!1;t.shift()}return!0}function Gs(e,t,n){ll(e)&&n.delete(t)}function ap(){Ki=!1,Rt!==null&&ll(Rt)&&(Rt=null),_t!==null&&ll(_t)&&(_t=null),Mt!==null&&ll(Mt)&&(Mt=null),hr.forEach(Gs),xr.forEach(Gs)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ki||(Ki=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,ap)))}function vr(e){function t(i){return Yn(i,e)}if(0<$r.length){Yn($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Yn(Rt,e),_t!==null&&Yn(_t,e),Mt!==null&&Yn(Mt,e),hr.forEach(t),xr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Pd(n),n.blockedOn===null&&Pt.shift()}var zn=wt.ReactCurrentBatchConfig,yl=!0;function dp(e,t,n,r){var i=O,o=zn.transition;zn.transition=null;try{O=1,Oo(e,t,n,r)}finally{O=i,zn.transition=o}}function cp(e,t,n,r){var i=O,o=zn.transition;zn.transition=null;try{O=4,Oo(e,t,n,r)}finally{O=i,zn.transition=o}}function Oo(e,t,n,r){if(yl){var i=Xi(e,t,n,r);if(i===null)yi(e,t,r,kl,n),Vs(e,r);else if(sp(i,e,t,n,r))r.stopPropagation();else if(Vs(e,r),t&4&&-1<op.indexOf(e)){for(;i!==null;){var o=Dr(i);if(o!==null&&Ed(o),o=Xi(e,t,n,r),o===null&&yi(e,t,r,kl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else yi(e,t,r,null,n)}}var kl=null;function Xi(e,t,n,r){if(kl=null,e=Ro(r),e=Xt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kl=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zu()){case _o:return 1;case wd:return 4;case xl:case Ju:return 16;case bd:return 536870912;default:return 16}default:return 16}}var Dt=null,Io=null,il=null;function Dd(){if(il)return il;var e,t=Io,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return il=i.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function Hs(){return!1}function Oe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wr:Hs,this.isPropagationStopped=Hs,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=Oe(In),Ar=J({},In,{view:0,detail:0}),up=Oe(Ar),ci,ui,Kn,Il=J({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ci=e.screenX-Kn.screenX,ui=e.screenY-Kn.screenY):ui=ci=0,Kn=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),Qs=Oe(Il),pp=J({},Il,{dataTransfer:0}),fp=Oe(pp),mp=J({},Ar,{relatedTarget:0}),pi=Oe(mp),gp=J({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),hp=Oe(gp),xp=J({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=Oe(xp),yp=J({},In,{data:0}),Ys=Oe(yp),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sp[e])?!!t[e]:!1}function $o(){return wp}var bp=J({},Ar,{key:function(e){if(e.key){var t=kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cp=Oe(bp),Np=J({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Oe(Np),Ep=J({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),Fp=Oe(Ep),zp=J({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=Oe(zp),Pp=J({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=Oe(Pp),Dp=[9,13,27,32],Wo=yt&&"CompositionEvent"in window,or=null;yt&&"documentMode"in document&&(or=document.documentMode);var Lp=yt&&"TextEvent"in window&&!or,Ld=yt&&(!Wo||or&&8<or&&11>=or),Xs=" ",Zs=!1;function Rd(e,t){switch(e){case"keyup":return Dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Rp(e,t){switch(e){case"compositionend":return _d(t);case"keypress":return t.which!==32?null:(Zs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Zs?null:e;default:return null}}function _p(e,t){if(gn)return e==="compositionend"||!Wo&&Rd(e,t)?(e=Dd(),il=Io=Dt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ld&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function Md(e,t,n,r){md(r),t=jl(t,"onChange"),0<t.length&&(n=new Uo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,yr=null;function Bp(e){Yd(e,0)}function Ul(e){var t=vn(e);if(sd(t))return e}function Op(e,t){if(e==="change")return t}var Bd=!1;if(yt){var fi;if(yt){var mi="oninput"in document;if(!mi){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),mi=typeof qs.oninput=="function"}fi=mi}else fi=!1;Bd=fi&&(!document.documentMode||9<document.documentMode)}function ea(){sr&&(sr.detachEvent("onpropertychange",Od),yr=sr=null)}function Od(e){if(e.propertyName==="value"&&Ul(yr)){var t=[];Md(t,yr,e,Ro(e)),vd(Bp,t)}}function Ip(e,t,n){e==="focusin"?(ea(),sr=t,yr=n,sr.attachEvent("onpropertychange",Od)):e==="focusout"&&ea()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(yr)}function $p(e,t){if(e==="click")return Ul(t)}function Wp(e,t){if(e==="input"||e==="change")return Ul(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Vp;function kr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ai.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function na(e,t){var n=ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ta(n)}}function Id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ud(){for(var e=window,t=ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ml(e.document)}return t}function Vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gp(e){var t=Ud(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Id(n.ownerDocument.documentElement,n)){if(r!==null&&Vo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=na(n,o);var s=na(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=yt&&"documentMode"in document&&11>=document.documentMode,hn=null,Zi=null,ar=null,Ji=!1;function ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ji||hn==null||hn!==ml(r)||(r=hn,"selectionStart"in r&&Vo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&kr(ar,r)||(ar=r,r=jl(Zi,"onSelect"),0<r.length&&(t=new Uo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},gi={},$d={};yt&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function $l(e){if(gi[e])return gi[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $d)return gi[e]=t[n];return e}var Wd=$l("animationend"),Vd=$l("animationiteration"),Gd=$l("animationstart"),Hd=$l("transitionend"),Qd=new Map,la="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Qd.set(e,t),sn(t,[e])}for(var hi=0;hi<la.length;hi++){var xi=la[hi],Qp=xi.toLowerCase(),Yp=xi[0].toUpperCase()+xi.slice(1);Gt(Qp,"on"+Yp)}Gt(Wd,"onAnimationEnd");Gt(Vd,"onAnimationIteration");Gt(Gd,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Hd,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function ia(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qu(r,t,void 0,e),e.currentTarget=null}function Yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],d=a.instance,f=a.currentTarget;if(a=a.listener,d!==o&&i.isPropagationStopped())break e;ia(i,a,f),o=d}else for(s=0;s<r.length;s++){if(a=r[s],d=a.instance,f=a.currentTarget,a=a.listener,d!==o&&i.isPropagationStopped())break e;ia(i,a,f),o=d}}}if(hl)throw e=Qi,hl=!1,Qi=null,e}function $(e,t){var n=t[ro];n===void 0&&(n=t[ro]=new Set);var r=e+"__bubble";n.has(r)||(Kd(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),Kd(n,e,r,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Gr]){e[Gr]=!0,nd.forEach(function(n){n!=="selectionchange"&&(Kp.has(n)||vi(n,!1,e),vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,vi("selectionchange",!1,t))}}function Kd(e,t,n,r){switch(Ad(t)){case 1:var i=dp;break;case 4:i=cp;break;default:i=Oo}n=i.bind(null,t,n,e),i=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Xt(a),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}a=a.parentNode}}r=r.return}vd(function(){var f=o,x=Ro(n),h=[];e:{var g=Qd.get(e);if(g!==void 0){var k=Uo,S=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":k=Cp;break;case"focusin":S="focus",k=pi;break;case"focusout":S="blur",k=pi;break;case"beforeblur":case"afterblur":k=pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Fp;break;case Wd:case Vd:case Gd:k=hp;break;case Hd:k=Tp;break;case"scroll":k=up;break;case"wheel":k=Ap;break;case"copy":case"cut":case"paste":k=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ks}var j=(t&4)!==0,M=!j&&e==="scroll",p=j?g!==null?g+"Capture":null:g;j=[];for(var u=f,c;u!==null;){c=u;var v=c.stateNode;if(c.tag===5&&v!==null&&(c=v,p!==null&&(v=gr(u,p),v!=null&&j.push(Sr(u,v,c)))),M)break;u=u.return}0<j.length&&(g=new k(g,S,null,n,x),h.push({event:g,listeners:j}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Vi&&(S=n.relatedTarget||n.fromElement)&&(Xt(S)||S[kt]))break e;if((k||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=f,S=S?Xt(S):null,S!==null&&(M=an(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=f),k!==S)){if(j=Qs,v="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ks,v="onPointerLeave",p="onPointerEnter",u="pointer"),M=k==null?g:vn(k),c=S==null?g:vn(S),g=new j(v,u+"leave",k,n,x),g.target=M,g.relatedTarget=c,v=null,Xt(x)===f&&(j=new j(p,u+"enter",S,n,x),j.target=c,j.relatedTarget=M,v=j),M=v,k&&S)t:{for(j=k,p=S,u=0,c=j;c;c=pn(c))u++;for(c=0,v=p;v;v=pn(v))c++;for(;0<u-c;)j=pn(j),u--;for(;0<c-u;)p=pn(p),c--;for(;u--;){if(j===p||p!==null&&j===p.alternate)break t;j=pn(j),p=pn(p)}j=null}else j=null;k!==null&&oa(h,g,k,j,!1),S!==null&&M!==null&&oa(h,M,S,j,!0)}}e:{if(g=f?vn(f):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var w=Op;else if(Js(g))if(Bd)w=Wp;else{w=Up;var E=Ip}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=$p);if(w&&(w=w(e,f))){Md(h,w,n,x);break e}E&&E(e,g,f),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Oi(g,"number",g.value)}switch(E=f?vn(f):window,e){case"focusin":(Js(E)||E.contentEditable==="true")&&(hn=E,Zi=f,ar=null);break;case"focusout":ar=Zi=hn=null;break;case"mousedown":Ji=!0;break;case"contextmenu":case"mouseup":case"dragend":Ji=!1,ra(h,n,x);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":ra(h,n,x)}var N;if(Wo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else gn?Rd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ld&&n.locale!=="ko"&&(gn||z!=="onCompositionStart"?z==="onCompositionEnd"&&gn&&(N=Dd()):(Dt=x,Io="value"in Dt?Dt.value:Dt.textContent,gn=!0)),E=jl(f,z),0<E.length&&(z=new Ys(z,e,null,n,x),h.push({event:z,listeners:E}),N?z.data=N:(N=_d(n),N!==null&&(z.data=N)))),(N=Lp?Rp(e,n):_p(e,n))&&(f=jl(f,"onBeforeInput"),0<f.length&&(x=new Ys("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:f}),x.data=N))}Yd(h,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gr(e,n),o!=null&&r.unshift(Sr(e,o,i)),o=gr(e,t),o!=null&&r.push(Sr(e,o,i))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oa(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,d=a.alternate,f=a.stateNode;if(d!==null&&d===r)break;a.tag===5&&f!==null&&(a=f,i?(d=gr(n,o),d!=null&&s.unshift(Sr(n,d,a))):i||(d=gr(n,o),d!=null&&s.push(Sr(n,d,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xp=/\r\n?/g,Zp=/\u0000|\uFFFD/g;function sa(e){return(typeof e=="string"?e:""+e).replace(Xp,`
`).replace(Zp,"")}function Hr(e,t,n){if(t=sa(t),sa(e)!==t&&n)throw Error(y(425))}function Sl(){}var qi=null,eo=null;function to(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var no=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,aa=typeof Promise=="function"?Promise:void 0,qp=typeof queueMicrotask=="function"?queueMicrotask:typeof aa<"u"?function(e){return aa.resolve(null).then(e).catch(ef)}:no;function ef(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),at="__reactFiber$"+Un,wr="__reactProps$"+Un,kt="__reactContainer$"+Un,ro="__reactEvents$"+Un,tf="__reactListeners$"+Un,nf="__reactHandles$"+Un;function Xt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=da(e);e!==null;){if(n=e[at])return n;e=da(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[at]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Wl(e){return e[wr]||null}var lo=[],yn=-1;function Ht(e){return{current:e}}function W(e){0>yn||(e.current=lo[yn],lo[yn]=null,yn--)}function I(e,t){yn++,lo[yn]=e.current,e.current=t}var Vt={},ke=Ht(Vt),Te=Ht(!1),tn=Vt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function wl(){W(Te),W(ke)}function ca(e,t,n){if(ke.current!==Vt)throw Error(y(168));I(ke,t),I(Te,n)}function Xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Iu(e)||"Unknown",i));return J({},n,r)}function bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,tn=ke.current,I(ke,e),I(Te,Te.current),!0}function ua(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Xd(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,W(Te),W(ke),I(ke,e)):W(Te),I(Te,n)}var gt=null,Vl=!1,ji=!1;function Zd(e){gt===null?gt=[e]:gt.push(e)}function rf(e){Vl=!0,Zd(e)}function Qt(){if(!ji&&gt!==null){ji=!0;var e=0,t=O;try{var n=gt;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,Vl=!1}catch(i){throw gt!==null&&(gt=gt.slice(e+1)),Sd(_o,Qt),i}finally{O=t,ji=!1}}return null}var kn=[],jn=0,Cl=null,Nl=0,Ve=[],Ge=0,nn=null,ht=1,xt="";function Yt(e,t){kn[jn++]=Nl,kn[jn++]=Cl,Cl=e,Nl=t}function Jd(e,t,n){Ve[Ge++]=ht,Ve[Ge++]=xt,Ve[Ge++]=nn,nn=e;var r=ht;e=xt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ht=1<<32-tt(t)+i|n<<i|r,xt=o+e}else ht=1<<o|n<<i|r,xt=e}function Go(e){e.return!==null&&(Yt(e,1),Jd(e,1,0))}function Ho(e){for(;e===Cl;)Cl=kn[--jn],kn[jn]=null,Nl=kn[--jn],kn[jn]=null;for(;e===nn;)nn=Ve[--Ge],Ve[Ge]=null,xt=Ve[--Ge],Ve[Ge]=null,ht=Ve[--Ge],Ve[Ge]=null}var _e=null,Re=null,Q=!1,et=null;function qd(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Re=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ht,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Re=null,!0):!1;default:return!1}}function io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oo(e){if(Q){var t=Re;if(t){var n=t;if(!pa(e,t)){if(io(e))throw Error(y(418));t=Bt(n.nextSibling);var r=_e;t&&pa(e,t)?qd(r,n):(e.flags=e.flags&-4097|2,Q=!1,_e=e)}}else{if(io(e))throw Error(y(418));e.flags=e.flags&-4097|2,Q=!1,_e=e}}}function fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Qr(e){if(e!==_e)return!1;if(!Q)return fa(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!to(e.type,e.memoizedProps)),t&&(t=Re)){if(io(e))throw ec(),Error(y(418));for(;t;)qd(e,t),t=Bt(t.nextSibling)}if(fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=_e?Bt(e.stateNode.nextSibling):null;return!0}function ec(){for(var e=Re;e;)e=Bt(e.nextSibling)}function Ln(){Re=_e=null,Q=!1}function Qo(e){et===null?et=[e]:et.push(e)}var lf=wt.ReactCurrentBatchConfig;function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Yr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ma(e){var t=e._init;return t(e._payload)}function tc(e){function t(p,u){if(e){var c=p.deletions;c===null?(p.deletions=[u],p.flags|=16):c.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=$t(p,u),p.index=0,p.sibling=null,p}function o(p,u,c){return p.index=c,e?(c=p.alternate,c!==null?(c=c.index,c<u?(p.flags|=2,u):c):(p.flags|=2,u)):(p.flags|=1048576,u)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,u,c,v){return u===null||u.tag!==6?(u=Fi(c,p.mode,v),u.return=p,u):(u=i(u,c),u.return=p,u)}function d(p,u,c,v){var w=c.type;return w===mn?x(p,u,c.props.children,v,c.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===zt&&ma(w)===u.type)?(v=i(u,c.props),v.ref=Xn(p,u,c),v.return=p,v):(v=fl(c.type,c.key,c.props,null,p.mode,v),v.ref=Xn(p,u,c),v.return=p,v)}function f(p,u,c,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=zi(c,p.mode,v),u.return=p,u):(u=i(u,c.children||[]),u.return=p,u)}function x(p,u,c,v,w){return u===null||u.tag!==7?(u=en(c,p.mode,v,w),u.return=p,u):(u=i(u,c),u.return=p,u)}function h(p,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Fi(""+u,p.mode,c),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mr:return c=fl(u.type,u.key,u.props,null,p.mode,c),c.ref=Xn(p,null,u),c.return=p,c;case fn:return u=zi(u,p.mode,c),u.return=p,u;case zt:var v=u._init;return h(p,v(u._payload),c)}if(tr(u)||Gn(u))return u=en(u,p.mode,c,null),u.return=p,u;Yr(p,u)}return null}function g(p,u,c,v){var w=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return w!==null?null:a(p,u,""+c,v);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Mr:return c.key===w?d(p,u,c,v):null;case fn:return c.key===w?f(p,u,c,v):null;case zt:return w=c._init,g(p,u,w(c._payload),v)}if(tr(c)||Gn(c))return w!==null?null:x(p,u,c,v,null);Yr(p,c)}return null}function k(p,u,c,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(c)||null,a(u,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mr:return p=p.get(v.key===null?c:v.key)||null,d(u,p,v,w);case fn:return p=p.get(v.key===null?c:v.key)||null,f(u,p,v,w);case zt:var E=v._init;return k(p,u,c,E(v._payload),w)}if(tr(v)||Gn(v))return p=p.get(c)||null,x(u,p,v,w,null);Yr(u,v)}return null}function S(p,u,c,v){for(var w=null,E=null,N=u,z=u=0,q=null;N!==null&&z<c.length;z++){N.index>z?(q=N,N=null):q=N.sibling;var D=g(p,N,c[z],v);if(D===null){N===null&&(N=q);break}e&&N&&D.alternate===null&&t(p,N),u=o(D,u,z),E===null?w=D:E.sibling=D,E=D,N=q}if(z===c.length)return n(p,N),Q&&Yt(p,z),w;if(N===null){for(;z<c.length;z++)N=h(p,c[z],v),N!==null&&(u=o(N,u,z),E===null?w=N:E.sibling=N,E=N);return Q&&Yt(p,z),w}for(N=r(p,N);z<c.length;z++)q=k(N,p,z,c[z],v),q!==null&&(e&&q.alternate!==null&&N.delete(q.key===null?z:q.key),u=o(q,u,z),E===null?w=q:E.sibling=q,E=q);return e&&N.forEach(function(Ie){return t(p,Ie)}),Q&&Yt(p,z),w}function j(p,u,c,v){var w=Gn(c);if(typeof w!="function")throw Error(y(150));if(c=w.call(c),c==null)throw Error(y(151));for(var E=w=null,N=u,z=u=0,q=null,D=c.next();N!==null&&!D.done;z++,D=c.next()){N.index>z?(q=N,N=null):q=N.sibling;var Ie=g(p,N,D.value,v);if(Ie===null){N===null&&(N=q);break}e&&N&&Ie.alternate===null&&t(p,N),u=o(Ie,u,z),E===null?w=Ie:E.sibling=Ie,E=Ie,N=q}if(D.done)return n(p,N),Q&&Yt(p,z),w;if(N===null){for(;!D.done;z++,D=c.next())D=h(p,D.value,v),D!==null&&(u=o(D,u,z),E===null?w=D:E.sibling=D,E=D);return Q&&Yt(p,z),w}for(N=r(p,N);!D.done;z++,D=c.next())D=k(N,p,z,D.value,v),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?z:D.key),u=o(D,u,z),E===null?w=D:E.sibling=D,E=D);return e&&N.forEach(function(bt){return t(p,bt)}),Q&&Yt(p,z),w}function M(p,u,c,v){if(typeof c=="object"&&c!==null&&c.type===mn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Mr:e:{for(var w=c.key,E=u;E!==null;){if(E.key===w){if(w=c.type,w===mn){if(E.tag===7){n(p,E.sibling),u=i(E,c.props.children),u.return=p,p=u;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===zt&&ma(w)===E.type){n(p,E.sibling),u=i(E,c.props),u.ref=Xn(p,E,c),u.return=p,p=u;break e}n(p,E);break}else t(p,E);E=E.sibling}c.type===mn?(u=en(c.props.children,p.mode,v,c.key),u.return=p,p=u):(v=fl(c.type,c.key,c.props,null,p.mode,v),v.ref=Xn(p,u,c),v.return=p,p=v)}return s(p);case fn:e:{for(E=c.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(p,u.sibling),u=i(u,c.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=zi(c,p.mode,v),u.return=p,p=u}return s(p);case zt:return E=c._init,M(p,u,E(c._payload),v)}if(tr(c))return S(p,u,c,v);if(Gn(c))return j(p,u,c,v);Yr(p,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,c),u.return=p,p=u):(n(p,u),u=Fi(c,p.mode,v),u.return=p,p=u),s(p)):n(p,u)}return M}var Rn=tc(!0),nc=tc(!1),El=Ht(null),Fl=null,Sn=null,Yo=null;function Ko(){Yo=Sn=Fl=null}function Xo(e){var t=El.current;W(El),e._currentValue=t}function so(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){Fl=e,Yo=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Yo!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(Fl===null)throw Error(y(308));Sn=e,Fl.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Zt=null;function Zo(e){Zt===null?Zt=[e]:Zt.push(e)}function rc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,jt(e,n)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mo(e,n)}}function ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zl(e,t,n,r){var i=e.updateQueue;Tt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,f=d.next;d.next=null,s===null?o=f:s.next=f,s=d;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==s&&(a===null?x.firstBaseUpdate=f:a.next=f,x.lastBaseUpdate=d))}if(o!==null){var h=i.baseState;s=0,x=f=d=null,a=o;do{var g=a.lane,k=a.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,j=a;switch(g=t,k=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){h=S.call(k,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,g=typeof S=="function"?S.call(k,h,g):S,g==null)break e;h=J({},h,g);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(f=x=k,d=h):x=x.next=k,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(x===null&&(d=h),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ln|=s,e.lanes=s,e.memoizedState=h}}function ha(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Lr={},ut=Ht(Lr),br=Ht(Lr),Cr=Ht(Lr);function Jt(e){if(e===Lr)throw Error(y(174));return e}function qo(e,t){switch(I(Cr,t),I(br,e),I(ut,Lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ui(t,e)}W(ut),I(ut,t)}function _n(){W(ut),W(br),W(Cr)}function ic(e){Jt(Cr.current);var t=Jt(ut.current),n=Ui(t,e.type);t!==n&&(I(br,e),I(ut,n))}function es(e){br.current===e&&(W(ut),W(br))}var X=Ht(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Si=[];function ts(){for(var e=0;e<Si.length;e++)Si[e]._workInProgressVersionPrimary=null;Si.length=0}var al=wt.ReactCurrentDispatcher,wi=wt.ReactCurrentBatchConfig,rn=0,Z=null,se=null,de=null,Pl=!1,dr=!1,Nr=0,of=0;function xe(){throw Error(y(321))}function ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function rs(e,t,n,r,i,o){if(rn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,al.current=e===null||e.memoizedState===null?cf:uf,e=n(r,i),dr){o=0;do{if(dr=!1,Nr=0,25<=o)throw Error(y(301));o+=1,de=se=null,t.updateQueue=null,al.current=pf,e=n(r,i)}while(dr)}if(al.current=Al,t=se!==null&&se.next!==null,rn=0,de=se=Z=null,Pl=!1,t)throw Error(y(300));return e}function ls(){var e=Nr!==0;return Nr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function Ke(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=de===null?Z.memoizedState:de.next;if(t!==null)de=t,se=e;else{if(e===null)throw Error(y(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function Er(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=Ke(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,d=null,f=o;do{var x=f.lane;if((rn&x)===x)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:x,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(a=d=h,s=r):d=d.next=h,Z.lanes|=x,ln|=x}f=f.next}while(f!==null&&f!==o);d===null?s=r:d.next=a,rt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ci(e){var t=Ke(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function oc(){}function sc(e,t){var n=Z,r=Ke(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,is(cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Fr(9,dc.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(y(349));rn&30||ac(n,t,i)}return i}function ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dc(e,t,n,r){t.value=n,t.getSnapshot=r,uc(t)&&pc(e)}function cc(e,t,n){return n(function(){uc(t)&&pc(e)})}function uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function pc(e){var t=jt(e,1);t!==null&&nt(t,e,1,-1)}function xa(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},t.queue=e,e=e.dispatch=df.bind(null,Z,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fc(){return Ke().memoizedState}function dl(e,t,n,r){var i=st();Z.flags|=e,i.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Gl(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&ns(r,s.deps)){i.memoizedState=Fr(t,n,o,r);return}}Z.flags|=e,i.memoizedState=Fr(1|t,n,o,r)}function va(e,t){return dl(8390656,8,e,t)}function is(e,t){return Gl(2048,8,e,t)}function mc(e,t){return Gl(4,2,e,t)}function gc(e,t){return Gl(4,4,e,t)}function hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xc(e,t,n){return n=n!=null?n.concat([e]):null,Gl(4,4,hc.bind(null,t,e),n)}function os(){}function vc(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yc(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kc(e,t,n){return rn&21?(rt(n,t)||(n=Cd(),Z.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function sf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=wi.transition;wi.transition={};try{e(!1),t()}finally{O=n,wi.transition=r}}function jc(){return Ke().memoizedState}function af(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sc(e))wc(t,n);else if(n=rc(e,t,n,r),n!==null){var i=Ce();nt(n,e,r,i),bc(n,t,r)}}function df(e,t,n){var r=Ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))wc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var d=t.interleaved;d===null?(i.next=i,Zo(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=rc(e,t,i,r),n!==null&&(i=Ce(),nt(n,e,r,i),bc(n,t,r))}}function Sc(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function wc(e,t){dr=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mo(e,n)}}var Al={readContext:Ye,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},cf={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,dl(4194308,4,hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return dl(4194308,4,e,t)},useInsertionEffect:function(e,t){return dl(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:xa,useDebugValue:os,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=xa(!1),t=e[0];return e=sf.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=st();if(Q){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ce===null)throw Error(y(349));rn&30||ac(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,va(cc.bind(null,r,o,e),[e]),r.flags|=2048,Fr(9,dc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ce.identifierPrefix;if(Q){var n=xt,r=ht;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uf={readContext:Ye,useCallback:vc,useContext:Ye,useEffect:is,useImperativeHandle:xc,useInsertionEffect:mc,useLayoutEffect:gc,useMemo:yc,useReducer:bi,useRef:fc,useState:function(){return bi(Er)},useDebugValue:os,useDeferredValue:function(e){var t=Ke();return kc(t,se.memoizedState,e)},useTransition:function(){var e=bi(Er)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:sc,useId:jc,unstable_isNewReconciler:!1},pf={readContext:Ye,useCallback:vc,useContext:Ye,useEffect:is,useImperativeHandle:xc,useInsertionEffect:mc,useLayoutEffect:gc,useMemo:yc,useReducer:Ci,useRef:fc,useState:function(){return Ci(Er)},useDebugValue:os,useDeferredValue:function(e){var t=Ke();return se===null?t.memoizedState=e:kc(t,se.memoizedState,e)},useTransition:function(){var e=Ci(Er)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:sc,useId:jc,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ao(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hl={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Ut(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(nt(t,e,i,r),sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Ut(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(nt(t,e,i,r),sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Ut(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(nt(t,e,r,n),sl(t,e,r))}};function ya(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,o):!0}function Cc(e,t,n){var r=!1,i=Vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Pe(t)?tn:ke.current,r=t.contextTypes,o=(r=r!=null)?Dn(e,i):Vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hl.enqueueReplaceState(t,t.state,null)}function co(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Jo(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Pe(t)?tn:ke.current,i.context=Dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ao(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hl.enqueueReplaceState(i,i.state,null),zl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=Ou(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ff=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ll||(Ll=!0,jo=r),uo(e,t)},n}function Ec(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){uo(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ff;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ef.bind(null,e,t,n),t.then(e,e))}function Sa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var mf=wt.ReactCurrentOwner,ze=!1;function be(e,t,n,r){t.child=e===null?nc(t,null,n,r):Rn(t,e.child,n,r)}function ba(e,t,n,r,i){n=n.render;var o=t.ref;return Tn(t,i),r=rs(e,t,n,r,o,i),n=ls(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(Q&&n&&Go(t),t.flags|=1,be(e,t,r,i),t.child)}function Ca(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ms(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Fc(e,t,o,r,i)):(e=fl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(s,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=$t(o,r),e.ref=t.ref,e.return=t,t.child=e}function Fc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(kr(o,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,St(e,t,i)}return po(e,t,n,r,i)}function zc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(bn,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(bn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(bn,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(bn,Le),Le|=r;return be(e,t,i,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function po(e,t,n,r,i){var o=Pe(n)?tn:ke.current;return o=Dn(t,o),Tn(t,i),n=rs(e,t,n,r,o,i),r=ls(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(Q&&r&&Go(t),t.flags|=1,be(e,t,n,i),t.child)}function Na(e,t,n,r,i){if(Pe(n)){var o=!0;bl(t)}else o=!1;if(Tn(t,i),t.stateNode===null)cl(e,t),Cc(t,n,r),co(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var d=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ye(f):(f=Pe(n)?tn:ke.current,f=Dn(t,f));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||d!==f)&&ka(t,s,r,f),Tt=!1;var g=t.memoizedState;s.state=g,zl(t,r,s,i),d=t.memoizedState,a!==r||g!==d||Te.current||Tt?(typeof x=="function"&&(ao(t,n,x,r),d=t.memoizedState),(a=Tt||ya(t,n,a,r,g,d,f))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),s.props=r,s.state=d,s.context=f,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lc(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Je(t.type,a),s.props=f,h=t.pendingProps,g=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ye(d):(d=Pe(n)?tn:ke.current,d=Dn(t,d));var k=n.getDerivedStateFromProps;(x=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==d)&&ka(t,s,r,d),Tt=!1,g=t.memoizedState,s.state=g,zl(t,r,s,i);var S=t.memoizedState;a!==h||g!==S||Te.current||Tt?(typeof k=="function"&&(ao(t,n,k,r),S=t.memoizedState),(f=Tt||ya(t,n,f,r,g,S,d)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=d,r=f):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return fo(e,t,n,r,o,i)}function fo(e,t,n,r,i,o){Tc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ua(t,n,!1),St(e,t,o);r=t.stateNode,mf.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Rn(t,e.child,null,o),t.child=Rn(t,null,a,o)):be(e,t,a,o),t.memoizedState=r.state,i&&ua(t,n,!0),t.child}function Pc(e){var t=e.stateNode;t.pendingContext?ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ca(e,t.context,!1),qo(e,t.containerInfo)}function Ea(e,t,n,r,i){return Ln(),Qo(i),t.flags|=256,be(e,t,n,r),t.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function go(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,n){var r=t.pendingProps,i=X.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(X,i&1),e===null)return oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Kl(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=go(n),t.memoizedState=mo,e):ss(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gf(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=$t(i,d),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=$t(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?go(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=mo,r}return o=e.child,e=o.sibling,r=$t(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ss(e,t){return t=Kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kr(e,t,n,r){return r!==null&&Qo(r),Rn(t,e.child,null,n),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ni(Error(y(422))),Kr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Kl({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rn(t,e.child,null,s),t.child.memoizedState=go(s),t.memoizedState=mo,o);if(!(t.mode&1))return Kr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=Ni(o,r,void 0),Kr(e,t,s,r)}if(a=(s&e.childLanes)!==0,ze||a){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jt(e,i),nt(r,e,i,-1))}return fs(),r=Ni(Error(y(421))),Kr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=Bt(i.nextSibling),_e=t,Q=!0,et=null,e!==null&&(Ve[Ge++]=ht,Ve[Ge++]=xt,Ve[Ge++]=nn,ht=e.id,xt=e.overflow,nn=t),t=ss(t,r.children),t.flags|=4096,t)}function Fa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),so(e.return,t,n)}function Ei(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fa(e,n,t);else if(e.tag===19)Fa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ei(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Tl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ei(t,!0,n,null,o);break;case"together":Ei(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hf(e,t,n){switch(t.tag){case 3:Pc(t),Ln();break;case 5:ic(t);break;case 1:Pe(t.type)&&bl(t);break;case 4:qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(El,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Ac(e,t,n):(I(X,X.current&1),e=St(e,t,n),e!==null?e.sibling:null);I(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,zc(e,t,n)}return St(e,t,n)}var Lc,ho,Rc,_c;Lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ho=function(){};Rc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(ut.current);var o=null;switch(n){case"input":i=Mi(e,i),r=Mi(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Ii(e,i),r=Ii(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sl)}$i(n,r);var s;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var a=i[f];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(fr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var d=r[f];if(a=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&d!==a&&(d!=null||a!=null))if(f==="style")if(a){for(s in a)!a.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&a[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(fr.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&$("scroll",e),o||a===d||(o=[])):(o=o||[]).push(f,d))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};_c=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(Ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Pe(t.type)&&wl(),ve(t),null;case 3:return r=t.stateNode,_n(),W(Te),W(ke),ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(bo(et),et=null))),ho(e,t),ve(t),null;case 5:es(t);var i=Jt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)Rc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ve(t),null}if(e=Jt(ut.current),Qr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[wr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<rr.length;i++)$(rr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ms(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Os(r,o),$("invalid",r)}$i(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),i=["children",""+a]):fr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":Br(r),Bs(r,o,!0);break;case"textarea":Br(r),Is(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Sl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[wr]=r,Lc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Wi(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<rr.length;i++)$(rr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Ms(e,r),i=Mi(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),$("invalid",e);break;case"textarea":Os(e,r),i=Ii(e,r),$("invalid",e);break;default:i=r}$i(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?fd(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ud(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&mr(e,d):typeof d=="number"&&mr(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fr.hasOwnProperty(o)?d!=null&&o==="onScroll"&&$("scroll",e):d!=null&&Po(e,o,d,s))}switch(n){case"input":Br(e),Bs(e,r,!1);break;case"textarea":Br(e),Is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Jt(Cr.current),Jt(ut.current),Qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(W(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Re!==null&&t.mode&1&&!(t.flags&128))ec(),Ln(),t.flags|=98560,o=!1;else if(o=Qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[at]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else et!==null&&(bo(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ae===0&&(ae=3):fs())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return _n(),ho(e,t),e===null&&jr(t.stateNode.containerInfo),ve(t),null;case 10:return Xo(t.type._context),ve(t),null;case 17:return Pe(t.type)&&wl(),ve(t),null;case 19:if(W(X),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Zn(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Tl(e),s!==null){for(t.flags|=128,Zn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Bn&&(t.flags|=128,r=!0,Zn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Q)return ve(t),null}else 2*le()-o.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,Zn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=X.current,I(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function vf(e,t){switch(Ho(t),t.tag){case 1:return Pe(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),W(Te),W(ke),ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return es(t),null;case 13:if(W(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(X),null;case 4:return _n(),null;case 10:return Xo(t.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var Xr=!1,ye=!1,yf=typeof WeakSet=="function"?WeakSet:Set,C=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function xo(e,t,n){try{n()}catch(r){ne(e,t,r)}}var za=!1;function kf(e,t){if(qi=yl,e=Ud(),Vo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,d=-1,f=0,x=0,h=e,g=null;t:for(;;){for(var k;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(d=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)g=h,h=k;for(;;){if(h===e)break t;if(g===n&&++f===i&&(a=s),g===o&&++x===r&&(d=s),(k=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=k}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(eo={focusedElem:e,selectionRange:n},yl=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,M=S.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:Je(t.type,j),M);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){ne(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return S=za,za=!1,S}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xo(t,n,o)}i=i.next}while(i!==r)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mc(e){var t=e.alternate;t!==null&&(e.alternate=null,Mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[wr],delete t[ro],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Ta(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(r!==4&&(e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}var pe=null,qe=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Oc(e,t,n),n=n.sibling}function Oc(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:ye||wn(n,t);case 6:var r=pe,i=qe;pe=null,Ft(e,t,n),pe=r,qe=i,pe!==null&&(qe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(qe?(e=pe,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),vr(e)):ki(pe,n.stateNode));break;case 4:r=pe,i=qe,pe=n.stateNode.containerInfo,qe=!0,Ft(e,t,n),pe=r,qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xo(n,t,s),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!ye&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Ft(e,t,n),ye=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Pa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yf),t.forEach(function(r){var i=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,qe=!1;break e;case 3:pe=a.stateNode.containerInfo,qe=!0;break e;case 4:pe=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(pe===null)throw Error(y(160));Oc(o,s,i),pe=null,qe=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){ne(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),ot(e),r&4){try{cr(3,e,e.return),Ql(3,e)}catch(j){ne(e,e.return,j)}try{cr(5,e,e.return)}catch(j){ne(e,e.return,j)}}break;case 1:Xe(t,e),ot(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Xe(t,e),ot(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(j){ne(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ad(i,o),Wi(a,s);var f=Wi(a,o);for(s=0;s<d.length;s+=2){var x=d[s],h=d[s+1];x==="style"?fd(i,h):x==="dangerouslySetInnerHTML"?ud(i,h):x==="children"?mr(i,h):Po(i,x,h,f)}switch(a){case"input":Bi(i,o);break;case"textarea":dd(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Nn(i,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?Nn(i,!!o.multiple,o.defaultValue,!0):Nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[wr]=o}catch(j){ne(e,e.return,j)}}break;case 6:if(Xe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){ne(e,e.return,j)}}break;case 3:if(Xe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(j){ne(e,e.return,j)}break;case 4:Xe(t,e),ot(e);break;case 13:Xe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(cs=le())),r&4&&Pa(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(f=ye)||x,Xe(t,e),ye=f):Xe(t,e),ot(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!x&&e.mode&1)for(C=e,x=e.child;x!==null;){for(h=C=x;C!==null;){switch(g=C,k=g.child,g.tag){case 0:case 11:case 14:case 15:cr(4,g,g.return);break;case 1:wn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){ne(r,n,j)}}break;case 5:wn(g,g.return);break;case 22:if(g.memoizedState!==null){Da(h);continue}}k!==null?(k.return=g,C=k):Da(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{i=h.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,d=h.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=pd("display",s))}catch(j){ne(e,e.return,j)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(j){ne(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xe(t,e),ot(e),r&4&&Pa(e);break;case 21:break;default:Xe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mr(i,""),r.flags&=-33);var o=Ta(e);ko(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ta(e);yo(e,a,s);break;default:throw Error(y(161))}}catch(d){ne(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jf(e,t,n){C=e,Uc(e)}function Uc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Xr;if(!s){var a=i.alternate,d=a!==null&&a.memoizedState!==null||ye;a=Xr;var f=ye;if(Xr=s,(ye=d)&&!f)for(C=i;C!==null;)s=C,d=s.child,s.tag===22&&s.memoizedState!==null?La(i):d!==null?(d.return=s,C=d):La(i);for(;o!==null;)C=o,Uc(o),o=o.sibling;C=i,Xr=a,ye=f}Aa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Aa(e)}}function Aa(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ha(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ha(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var x=f.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&vr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ye||t.flags&512&&vo(t)}catch(g){ne(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Da(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function La(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(d){ne(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ne(t,i,d)}}var o=t.return;try{vo(t)}catch(d){ne(t,o,d)}break;case 5:var s=t.return;try{vo(t)}catch(d){ne(t,s,d)}}}catch(d){ne(t,t.return,d)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Sf=Math.ceil,Dl=wt.ReactCurrentDispatcher,as=wt.ReactCurrentOwner,Qe=wt.ReactCurrentBatchConfig,_=0,ce=null,ie=null,fe=0,Le=0,bn=Ht(0),ae=0,zr=null,ln=0,Yl=0,ds=0,ur=null,Fe=null,cs=0,Bn=1/0,mt=null,Ll=!1,jo=null,It=null,Zr=!1,Lt=null,Rl=0,pr=0,So=null,ul=-1,pl=0;function Ce(){return _&6?le():ul!==-1?ul:ul=le()}function Ut(e){return e.mode&1?_&2&&fe!==0?fe&-fe:lf.transition!==null?(pl===0&&(pl=Cd()),pl):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e):1}function nt(e,t,n,r){if(50<pr)throw pr=0,So=null,Error(y(185));Pr(e,n,r),(!(_&2)||e!==ce)&&(e===ce&&(!(_&2)&&(Yl|=n),ae===4&&At(e,fe)),Ae(e,r),n===1&&_===0&&!(t.mode&1)&&(Bn=le()+500,Vl&&Qt()))}function Ae(e,t){var n=e.callbackNode;lp(e,t);var r=vl(e,e===ce?fe:0);if(r===0)n!==null&&Ws(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ws(n),t===1)e.tag===0?rf(Ra.bind(null,e)):Zd(Ra.bind(null,e)),qp(function(){!(_&6)&&Qt()}),n=null;else{switch(Nd(r)){case 1:n=_o;break;case 4:n=wd;break;case 16:n=xl;break;case 536870912:n=bd;break;default:n=xl}n=Kc(n,$c.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $c(e,t){if(ul=-1,pl=0,_&6)throw Error(y(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=vl(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var i=_;_|=2;var o=Vc();(ce!==e||fe!==t)&&(mt=null,Bn=le()+500,qt(e,t));do try{Cf();break}catch(a){Wc(e,a)}while(!0);Ko(),Dl.current=o,_=i,ie!==null?t=0:(ce=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=Yi(e),i!==0&&(r=i,t=wo(e,i))),t===1)throw n=zr,qt(e,0),At(e,r),Ae(e,le()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!wf(i)&&(t=_l(e,r),t===2&&(o=Yi(e),o!==0&&(r=o,t=wo(e,o))),t===1))throw n=zr,qt(e,0),At(e,r),Ae(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Kt(e,Fe,mt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=cs+500-le(),10<t)){if(vl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=no(Kt.bind(null,e,Fe,mt),t);break}Kt(e,Fe,mt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sf(r/1960))-r,10<r){e.timeoutHandle=no(Kt.bind(null,e,Fe,mt),r);break}Kt(e,Fe,mt);break;case 5:Kt(e,Fe,mt);break;default:throw Error(y(329))}}}return Ae(e,le()),e.callbackNode===n?$c.bind(null,e):null}function wo(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=_l(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&bo(t)),e}function bo(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~ds,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Ra(e){if(_&6)throw Error(y(327));Pn();var t=vl(e,0);if(!(t&1))return Ae(e,le()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=Yi(e);r!==0&&(t=r,n=wo(e,r))}if(n===1)throw n=zr,qt(e,0),At(e,t),Ae(e,le()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Fe,mt),Ae(e,le()),null}function us(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(Bn=le()+500,Vl&&Qt())}}function on(e){Lt!==null&&Lt.tag===0&&!(_&6)&&Pn();var t=_;_|=1;var n=Qe.transition,r=O;try{if(Qe.transition=null,O=1,e)return e()}finally{O=r,Qe.transition=n,_=t,!(_&6)&&Qt()}}function ps(){Le=bn.current,W(bn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jp(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:_n(),W(Te),W(ke),ts();break;case 5:es(r);break;case 4:_n();break;case 13:W(X);break;case 19:W(X);break;case 10:Xo(r.type._context);break;case 22:case 23:ps()}n=n.return}if(ce=e,ie=e=$t(e.current,null),fe=Le=t,ae=0,zr=null,ds=Yl=ln=0,Fe=ur=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Zt=null}return e}function Wc(e,t){do{var n=ie;try{if(Ko(),al.current=Al,Pl){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(rn=0,de=se=Z=null,dr=!1,Nr=0,as.current=null,n===null||n.return===null){ae=1,zr=t,ie=null;break}e:{var o=e,s=n.return,a=n,d=t;if(t=fe,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,x=a,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var k=Sa(s);if(k!==null){k.flags&=-257,wa(k,s,a,o,t),k.mode&1&&ja(o,f,t),t=k,d=f;var S=t.updateQueue;if(S===null){var j=new Set;j.add(d),t.updateQueue=j}else S.add(d);break e}else{if(!(t&1)){ja(o,f,t),fs();break e}d=Error(y(426))}}else if(Q&&a.mode&1){var M=Sa(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),wa(M,s,a,o,t),Qo(Mn(d,a));break e}}o=d=Mn(d,a),ae!==4&&(ae=2),ur===null?ur=[o]:ur.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Nc(o,d,t);ga(o,p);break e;case 1:a=d;var u=o.type,c=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(It===null||!It.has(c)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ec(o,a,t);ga(o,v);break e}}o=o.return}while(o!==null)}Hc(n)}catch(w){t=w,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Vc(){var e=Dl.current;return Dl.current=Al,e===null?Al:e}function fs(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(ln&268435455)&&!(Yl&268435455)||At(ce,fe)}function _l(e,t){var n=_;_|=2;var r=Vc();(ce!==e||fe!==t)&&(mt=null,qt(e,t));do try{bf();break}catch(i){Wc(e,i)}while(!0);if(Ko(),_=n,Dl.current=r,ie!==null)throw Error(y(261));return ce=null,fe=0,ae}function bf(){for(;ie!==null;)Gc(ie)}function Cf(){for(;ie!==null&&!Ku();)Gc(ie)}function Gc(e){var t=Yc(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Hc(e):ie=t,as.current=null}function Hc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vf(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=xf(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function Kt(e,t,n){var r=O,i=Qe.transition;try{Qe.transition=null,O=1,Nf(e,t,n,r)}finally{Qe.transition=i,O=r}return null}function Nf(e,t,n,r){do Pn();while(Lt!==null);if(_&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ip(e,o),e===ce&&(ie=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zr||(Zr=!0,Kc(xl,function(){return Pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var s=O;O=1;var a=_;_|=4,as.current=null,kf(e,n),Ic(n,e),Gp(eo),yl=!!qi,eo=qi=null,e.current=n,jf(n),Xu(),_=a,O=s,Qe.transition=o}else e.current=n;if(Zr&&(Zr=!1,Lt=e,Rl=i),o=e.pendingLanes,o===0&&(It=null),qu(n.stateNode),Ae(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,e=jo,jo=null,e;return Rl&1&&e.tag!==0&&Pn(),o=e.pendingLanes,o&1?e===So?pr++:(pr=0,So=e):pr=0,Qt(),null}function Pn(){if(Lt!==null){var e=Nd(Rl),t=Qe.transition,n=O;try{if(Qe.transition=null,O=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,Rl=0,_&6)throw Error(y(331));var i=_;for(_|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var f=a[d];for(C=f;C!==null;){var x=C;switch(x.tag){case 0:case 11:case 15:cr(8,x,o)}var h=x.child;if(h!==null)h.return=x,C=h;else for(;C!==null;){x=C;var g=x.sibling,k=x.return;if(Mc(x),x===f){C=null;break}if(g!==null){g.return=k,C=g;break}C=k}}}var S=o.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var M=j.sibling;j.sibling=null,j=M}while(j!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,C=p;break e}C=o.return}}var u=e.current;for(C=u;C!==null;){s=C;var c=s.child;if(s.subtreeFlags&2064&&c!==null)c.return=s,C=c;else e:for(s=u;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ql(9,a)}}catch(w){ne(a,a.return,w)}if(a===s){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(_=i,Qt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Ol,e)}catch{}r=!0}return r}finally{O=n,Qe.transition=t}}return!1}function _a(e,t,n){t=Mn(n,t),t=Nc(e,t,1),e=Ot(e,t,1),t=Ce(),e!==null&&(Pr(e,1,t),Ae(e,t))}function ne(e,t,n){if(e.tag===3)_a(e,e,n);else for(;t!==null;){if(t.tag===3){_a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Mn(n,e),e=Ec(t,e,1),t=Ot(t,e,1),e=Ce(),t!==null&&(Pr(t,1,e),Ae(t,e));break}}t=t.return}}function Ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>le()-cs?qt(e,0):ds|=n),Ae(e,t)}function Qc(e,t){t===0&&(e.mode&1?(t=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):t=1);var n=Ce();e=jt(e,t),e!==null&&(Pr(e,t,n),Ae(e,n))}function Ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qc(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Qc(e,n)}var Yc;Yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,hf(e,t,n);ze=!!(e.flags&131072)}else ze=!1,Q&&t.flags&1048576&&Jd(t,Nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cl(e,t),e=t.pendingProps;var i=Dn(t,ke.current);Tn(t,n),i=rs(null,t,r,e,i,n);var o=ls();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,bl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jo(t),i.updater=Hl,t.stateNode=i,i._reactInternals=t,co(t,r,e,n),t=fo(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Go(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pf(r),e=Je(r,e),i){case 0:t=po(null,t,r,e,n);break e;case 1:t=Na(null,t,r,e,n);break e;case 11:t=ba(null,t,r,e,n);break e;case 14:t=Ca(null,t,r,Je(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),po(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Na(e,t,r,i,n);case 3:e:{if(Pc(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lc(e,t),zl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mn(Error(y(423)),t),t=Ea(e,t,r,n,i);break e}else if(r!==i){i=Mn(Error(y(424)),t),t=Ea(e,t,r,n,i);break e}else for(Re=Bt(t.stateNode.containerInfo.firstChild),_e=t,Q=!0,et=null,n=nc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=St(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return ic(t),e===null&&oo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,to(r,i)?s=null:o!==null&&to(r,o)&&(t.flags|=32),Tc(e,t),be(e,t,s,n),t.child;case 6:return e===null&&oo(t),null;case 13:return Ac(e,t,n);case 4:return qo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),ba(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,I(El,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Te.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var d=a.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=vt(-1,n&-n),d.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var x=f.pending;x===null?d.next=d:(d.next=x.next,x.next=d),f.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),so(o.return,n,t),a.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),so(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tn(t,n),i=Ye(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Ca(e,t,r,i,n);case 15:return Fc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),cl(e,t),t.tag=1,Pe(r)?(e=!0,bl(t)):e=!1,Tn(t,n),Cc(t,r,i),co(t,r,i,n),fo(null,t,r,!0,e,n);case 19:return Dc(e,t,n);case 22:return zc(e,t,n)}throw Error(y(156,t.tag))};function Kc(e,t){return Sd(e,t)}function Tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Tf(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Do)return 11;if(e===Lo)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fl(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ms(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mn:return en(n.children,i,o,t);case Ao:s=8,i|=8;break;case Di:return e=He(12,n,t,i|2),e.elementType=Di,e.lanes=o,e;case Li:return e=He(13,n,t,i),e.elementType=Li,e.lanes=o,e;case Ri:return e=He(19,n,t,i),e.elementType=Ri,e.lanes=o,e;case id:return Kl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rd:s=10;break e;case ld:s=9;break e;case Do:s=11;break e;case Lo:s=14;break e;case zt:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Kl(e,t,n,r){return e=He(22,e,r,t),e.elementType=id,e.lanes=n,e.stateNode={isHidden:!1},e}function Fi(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function zi(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Af(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=di(0),this.expirationTimes=di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gs(e,t,n,r,i,o,s,a,d){return e=new Af(e,t,n,a,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(o),e}function Df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xc(e){if(!e)return Vt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Xd(e,n,t)}return t}function Zc(e,t,n,r,i,o,s,a,d){return e=gs(n,r,!0,e,i,o,s,a,d),e.context=Xc(null),n=e.current,r=Ce(),i=Ut(n),o=vt(r,i),o.callback=t??null,Ot(n,o,i),e.current.lanes=i,Pr(e,i,r),Ae(e,r),e}function Xl(e,t,n,r){var i=t.current,o=Ce(),s=Ut(i);return n=Xc(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,s),e!==null&&(nt(e,i,s,o),sl(e,i,s)),s}function Ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ma(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hs(e,t){Ma(e,t),(e=e.alternate)&&Ma(e,t)}function Lf(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}Zl.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Xl(e,t,null,null)};Zl.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Xl(null,e,null,null)}),t[kt]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Pd(e)}};function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ba(){}function Rf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Ml(s);o.call(f)}}var s=Zc(t,r,e,0,null,!1,!1,"",Ba);return e._reactRootContainer=s,e[kt]=s.current,jr(e.nodeType===8?e.parentNode:e),on(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var f=Ml(d);a.call(f)}}var d=gs(e,0,!1,null,null,!1,!1,"",Ba);return e._reactRootContainer=d,e[kt]=d.current,jr(e.nodeType===8?e.parentNode:e),on(function(){Xl(t,d,n,r)}),d}function ql(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var d=Ml(s);a.call(d)}}Xl(t,s,e,i)}else s=Rf(n,t,e,i,r);return Ml(s)}Ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(Mo(t,n|1),Ae(t,le()),!(_&6)&&(Bn=le()+500,Qt()))}break;case 13:on(function(){var r=jt(e,1);if(r!==null){var i=Ce();nt(r,e,1,i)}}),hs(e,1)}};Bo=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ce();nt(t,e,134217728,n)}hs(e,134217728)}};Fd=function(e){if(e.tag===13){var t=Ut(e),n=jt(e,t);if(n!==null){var r=Ce();nt(n,e,t,r)}hs(e,t)}};zd=function(){return O};Td=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Gi=function(e,t,n){switch(t){case"input":if(Bi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wl(r);if(!i)throw Error(y(90));sd(r),Bi(r,i)}}}break;case"textarea":dd(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};hd=us;xd=on;var _f={usingClientEntryPoint:!1,Events:[Dr,vn,Wl,md,gd,us]},Jn={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{Ol=Jr.inject(Mf),ct=Jr}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(t))throw Error(y(200));return Df(e,t,null,n)};Be.createRoot=function(e,t){if(!vs(e))throw Error(y(299));var n=!1,r="",i=Jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gs(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,jr(e.nodeType===8?e.parentNode:e),new xs(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return on(e)};Be.hydrate=function(e,t,n){if(!Jl(t))throw Error(y(200));return ql(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!vs(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Jc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Zc(t,null,e,1,n??null,i,!1,o,s),e[kt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zl(t)};Be.render=function(e,t,n){if(!Jl(t))throw Error(y(200));return ql(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(y(40));return e._reactRootContainer?(on(function(){ql(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Be.unstable_batchedUpdates=us;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return ql(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),qa.exports=Be;var Bf=qa.exports,Oa=Bf;Pi.createRoot=Oa.createRoot,Pi.hydrateRoot=Oa.hydrateRoot;const qr="https://scan.pulsechain.com",Of=[{id:0,name:"Buy and Burn",description:"Purchase DTGC and send to burn address"},{id:1,name:"Liquidity",description:"Add to DTGC/URMOM liquidity pool"},{id:2,name:"Treasury",description:"Send to DAO Treasury for development"},{id:3,name:"All of Above",description:"Split equally between all options"}],If={},el=[{id:0,name:"SILVER",icon:"🥈",minInvest:200,lockDays:60,holdDays:60,apr:22,bonus:10,boost:1,asset:"DTGC",color:"#C0C0C0",gradient:"linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A8A8A8 100%)"},{id:1,name:"GOLD",icon:"🥇",minInvest:500,lockDays:90,holdDays:90,apr:24,bonus:10,boost:1,asset:"DTGC",color:"#D4AF37",gradient:"linear-gradient(135deg, #FFF1A8 0%, #D4AF37 50%, #B8860B 100%)"},{id:2,name:"WHALE",icon:"🐋",minInvest:1e4,lockDays:180,holdDays:180,apr:26,bonus:10,boost:1,asset:"DTGC",color:"#4169E1",gradient:"linear-gradient(135deg, #6B8DD6 0%, #4169E1 50%, #2E4FA3 100%)"}],Ue={name:"DIAMOND",icon:"💎",minInvest:1e3,lockDays:90,apr:40,bonus:12,boost:1.5,lpPair:"DTGC/PLS",color:"#00BCD4"},$e={name:"DIAMOND+",icon:"💎✨",minInvest:1e3,lockDays:90,apr:50,bonus:15,boost:2,lpPair:"DTGC/URMOM",color:"#9C27B0"},K={urmomPrice:3515e-7,dtgcPrice:1851e-7,urmomMarketCap:159727,urmomTotalSupply:1e9,deadWallets:{"0x0000000000000000000000000000000000000000":0,"0x000000000000000000000000000000000000dEaD":0,"0x0000000000000000000000000000000000000369":54561640314e-2},totalDeadWallet:54561640314e-2,burnedUSD:576170.92,burnPercentage:54.5616,lpBurnPercentages:[{pair:"URMOM/HEX",percentage:99.2237},{pair:"URMOM/INC",percentage:99.5773},{pair:"URMOM/eHEX",percentage:99.6719},{pair:"URMOM/PLS",percentage:99},{pair:"URMOM/PLSX",percentage:98.5},{pair:"URMOM/PTGC",percentage:99.8}],lpUrmomBreakdown:[{pool:"PTGC Pool",tokens:31232571,color:"#FFD700"},{pool:"PLS Pool",tokens:26643051,color:"#00D4AA"},{pool:"HEX Pool",tokens:11919546,color:"#FF6B6B"},{pool:"PLSX Pool",tokens:11093073,color:"#9B59B6"},{pool:"PLS Pool 2",tokens:6117908,color:"#3498DB"},{pool:"INC Pool",tokens:10068493,color:"#E74C3C"},{pool:"pHEX Pool",tokens:5975013,color:"#F39C12"}],lpPools:[{name:"URMOM/DTGC",address:"0x1891bD6A959B32977c438f3022678a8659364A72"},{name:"URMOM/PLS",address:"0x682B82baAC38dDb185D77deAF98D9D246EF9c9E5"},{name:"URMOM/HEX",address:"0x0548656e272fec9534e180d3174cfc57ab6e10c0"},{name:"URMOM/pHEX",address:"0x6Bd31Cdc8c87F3bE93bEaC2E4F58DAeEf1f7905e"},{name:"URMOM/INC",address:"0xc8EC3c754B259fB7503072058A71d00cc20121DF"}]},Se=1e9,We={dao:{address:"0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC",expected:5e8},dev:{address:"0x777d7f3ad24832975aec259ab7d7b57be4225abf",expected:323e6},lpLocked:{expected:87e6},circulating:{expected:9e7}},Uf="0x146a6F852D2B9a24e1078e6D2f86486D1C09165e",$f={holders:`https://scan.pulsechain.com/api/v2/tokens/${Uf}/holders`,rpc:"https://rpc.pulsechain.com"},Wf=["0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC","0x777d7f3ad24832975aec259ab7d7b57be4225abf","0x0000000000000000000000000000000000000369","0x000000000000000000000000000000000000dEaD","0x0000000000000000000000000000000000000000","0x1891bD6A959B32977c438f3022678a8659364A72","0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7"].map(e=>e.toLowerCase()),Ia=[{address:"0x7a3B...9F2e",balance:25e5,label:"Loading..."},{address:"0x4cD1...8A3b",balance:18e5,label:"Loading..."},{address:"0x9eF2...3C4d",balance:12e5,label:"Loading..."},{address:"0x2aB5...7E8f",balance:95e4,label:"Loading..."},{address:"0x6cD9...1A2b",balance:75e4,label:"Loading..."}],Ti=K.lpUrmomBreakdown.reduce((e,t)=>e+t.tokens,0),De={xUrmom:"https://x.com/UrmomPulse",xDumpTires:"https://x.com/Dump_Tires",telegram:"https://t.me/urmomPulse",website:"https://dump.tires",dexscreener:"https://dexscreener.com/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0",dexscreenerDTGC:"https://dexscreener.com/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7",coingecko:"https://www.coingecko.com/en/coins/urmom-3"},we={dtgc:"0xD0676B28a457371D58d47E5247b439114e40Eb0F",urmom:"0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0",lp:"0x1891bD6A959B32977c438f3022678a8659364A72",daoTreasury:"0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC",stakingV2:"0x0c1984e3804Bd74DAaB66c4540bBeac751efB643",lpStakingV2:"0x0b07eD8929884E9bBDEAD6B42465F2A265044f18",daoVoting:"0x91DFFcC31C68Ef0C1F2ad49554E85bB7536fA470",burn:"0x0000000000000000000000000000000000000369"},Ua=!0,dt={stake:"/videos/stake-video.mov",popup:"/videos/popup-video.mov",whitepaper:"/videos/whitepaper-video.mov"},Ze={startingPLS:1e8,startingDTGC:5e7,startingURMOM:25e6,startingLP:1e6},Vf=T.createContext(),Gf=e=>`
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

  /* Holder Wallet Ticker Animation */
  @keyframes ticker-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .ticker-container {
    overflow: hidden;
    background: rgba(0,0,0,0.4);
    border-radius: 8px;
    padding: 8px 0;
    margin-top: 16px;
    position: relative;
  }

  .ticker-container::before,
  .ticker-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 2;
    pointer-events: none;
  }

  .ticker-container::before {
    left: 0;
    background: linear-gradient(90deg, rgba(26,35,39,1) 0%, transparent 100%);
  }

  .ticker-container::after {
    right: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(26,35,39,1) 100%);
  }

  .ticker-track {
    display: flex;
    animation: ticker-scroll 30s linear infinite;
    width: fit-content;
  }

  .ticker-track:hover {
    animation-play-state: paused;
  }

  .ticker-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 20px;
    border-right: 1px solid rgba(212,175,55,0.2);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .ticker-address {
    font-family: 'Consolas', monospace;
    font-size: 0.75rem;
    color: #888;
    background: rgba(255,255,255,0.05);
    padding: 2px 8px;
    border-radius: 4px;
  }

  .ticker-balance {
    font-size: 0.85rem;
    font-weight: 700;
    color: #D4AF37;
  }

  .ticker-label {
    font-size: 0.65rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
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
`,R=(e,t=2)=>!e||isNaN(e)?"0":e>=1e9?(e/1e9).toFixed(2)+"B":e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":new Intl.NumberFormat("en-US",{maximumFractionDigits:t}).format(e),tl=e=>new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e),Hf=e=>e?`${e.slice(0,6)}...${e.slice(-4)}`:"",qn=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(e),Qf=()=>{const[e,t]=Cn.useState(!1),[n,r]=Cn.useState(!1),[i,o]=Cn.useState("dtgc"),s={dtgc:"https://dexscreener.com/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7?embed=1&theme=dark&trades=0&info=0",urmom:"https://dexscreener.com/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0?embed=1&theme=dark&trades=0&info=0"},a={dtgc:"https://dexscreener.com/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7",urmom:"https://dexscreener.com/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0"};return n?l.jsx("div",{onClick:()=>r(!1),style:{position:"fixed",bottom:"20px",left:"20px",width:"50px",height:"50px",background:"linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",border:"2px solid #D4AF37",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:9998,boxShadow:"0 4px 20px rgba(212,175,55,0.3)",transition:"all 0.3s ease"},onMouseEnter:d=>d.currentTarget.style.transform="scale(1.1)",onMouseLeave:d=>d.currentTarget.style.transform="scale(1)",title:"Open DexScreener Chart",children:l.jsx("span",{style:{fontSize:"1.5rem"},children:"📊"})}):l.jsxs("div",{style:{position:"fixed",bottom:"20px",left:"20px",width:e?"500px":"320px",height:e?"450px":"280px",background:"linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",border:"2px solid #D4AF37",borderRadius:"16px",overflow:"hidden",zIndex:9998,boxShadow:"0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.2)",transition:"all 0.3s ease"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",background:"rgba(212,175,55,0.1)",borderBottom:"1px solid rgba(212,175,55,0.3)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"1rem"},children:"📊"}),l.jsx("span",{style:{color:"#D4AF37",fontWeight:"bold",fontSize:"0.85rem"},children:"LIVE CHART"})]}),l.jsxs("div",{style:{display:"flex",gap:"4px"},children:[l.jsx("button",{onClick:()=>o("dtgc"),style:{padding:"4px 10px",fontSize:"0.7rem",fontWeight:"bold",background:i==="dtgc"?"linear-gradient(135deg, #D4AF37, #F4D03F)":"rgba(255,255,255,0.1)",color:i==="dtgc"?"#000":"#888",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.2s"},children:"DTGC"}),l.jsx("button",{onClick:()=>o("urmom"),style:{padding:"4px 10px",fontSize:"0.7rem",fontWeight:"bold",background:i==="urmom"?"linear-gradient(135deg, #D4AF37, #F4D03F)":"rgba(255,255,255,0.1)",color:i==="urmom"?"#000":"#888",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.2s"},children:"URMOM"})]}),l.jsxs("div",{style:{display:"flex",gap:"6px"},children:[l.jsx("button",{onClick:()=>window.open(a[i],"_blank"),style:{width:"24px",height:"24px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"4px",color:"#888",cursor:"pointer",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center"},title:"Open in DexScreener",children:"↗"}),l.jsx("button",{onClick:()=>t(!e),style:{width:"24px",height:"24px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"4px",color:"#888",cursor:"pointer",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center"},title:e?"Shrink":"Expand",children:e?"⊖":"⊕"}),l.jsx("button",{onClick:()=>r(!0),style:{width:"24px",height:"24px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"4px",color:"#888",cursor:"pointer",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center"},title:"Minimize",children:"_"})]})]}),l.jsx("iframe",{src:s[i],style:{width:"100%",height:"calc(100% - 40px)",border:"none"},title:`${i.toUpperCase()} DexScreener Chart`})]})},Yf=({onComplete:e,isDark:t})=>{const[n,r]=Cn.useState(!1),i=()=>{r(!0),setTimeout(e,500)};return l.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.97)",zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",animation:n?"modal-out 0.5s ease forwards":"backdrop-in 0.5s ease"},children:l.jsxs("div",{style:{position:"relative",maxWidth:"850px",width:"92%",borderRadius:"24px",overflow:"hidden",border:"3px solid var(--gold)",boxShadow:"0 0 80px rgba(212, 175, 55, 0.6), 0 0 120px rgba(212, 175, 55, 0.3)"},children:[l.jsxs("video",{autoPlay:!0,muted:!0,playsInline:!0,onEnded:i,style:{width:"100%",display:"block"},children:[l.jsx("source",{src:dt.popup,type:"video/quicktime"}),l.jsx("source",{src:dt.popup.replace(".mov",".mp4"),type:"video/mp4"})]}),l.jsx("button",{onClick:i,style:{position:"absolute",bottom:"24px",right:"24px",background:"linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%)",border:"none",color:"#1A1A1A",padding:"14px 32px",borderRadius:"50px",fontFamily:"Cinzel, serif",fontWeight:"700",fontSize:"0.85rem",cursor:"pointer",transition:"all 0.3s ease",letterSpacing:"3px",textTransform:"uppercase",boxShadow:"0 4px 20px rgba(212, 175, 55, 0.4)"},onMouseEnter:o=>{o.target.style.transform="translateY(-2px)",o.target.style.boxShadow="0 8px 30px rgba(212, 175, 55, 0.6)"},onMouseLeave:o=>{o.target.style.transform="translateY(0)",o.target.style.boxShadow="0 4px 20px rgba(212, 175, 55, 0.4)"},children:"Enter Site →"})]})})},Kf=({onComplete:e,tierName:t,isDark:n})=>(Cn.useEffect(()=>{const r=setTimeout(e,5e3);return()=>clearTimeout(r)},[e]),l.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:99998,display:"flex",alignItems:"center",justifyContent:"center",animation:"backdrop-in 0.3s ease"},onClick:e,children:l.jsxs("div",{style:{position:"relative",maxWidth:"600px",width:"90%",borderRadius:"20px",overflow:"hidden",border:"2px solid var(--diamond)",boxShadow:"var(--glow-diamond)"},children:[l.jsxs("video",{autoPlay:!0,playsInline:!0,style:{width:"100%",display:"block"},children:[l.jsx("source",{src:dt.stake,type:"video/quicktime"}),l.jsx("source",{src:dt.stake.replace(".mov",".mp4"),type:"video/mp4"})]}),l.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent, rgba(0,0,0,0.95))",padding:"40px 24px 24px",textAlign:"center"},children:[l.jsxs("h3",{style:{fontFamily:"Cinzel, serif",color:"#4CAF50",fontSize:"1.3rem",marginBottom:"6px",letterSpacing:"3px"},children:["🎉 STAKING ",t,"!"]}),l.jsx("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem"},children:"Diamond hands activated 💎"})]})]})})),Xf=()=>{const e=T.useMemo(()=>Array.from({length:12},(t,n)=>({id:n,left:Math.random()*100,delay:Math.random()*20,duration:18+Math.random()*20,size:2+Math.random()*4})),[]);return l.jsx("div",{className:"particles-container",children:e.map(t=>l.jsx("div",{className:"particle",style:{left:`${t.left}%`,width:t.size,height:t.size,animationDelay:`${t.delay}s`,animationDuration:`${t.duration}s`}},t.id))})},Zf=()=>l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"marble-bg"}),l.jsxs("div",{className:"marble-veins",children:[l.jsx("div",{className:"vein vein-1"}),l.jsx("div",{className:"vein vein-2"}),l.jsx("div",{className:"vein vein-3"}),l.jsx("div",{className:"vein vein-4"}),l.jsx("div",{className:"vein vein-5"})]})]}),Jf=({isOpen:e,onClose:t,type:n,amount:r,tier:i})=>e?l.jsx("div",{className:"modal-backdrop",onClick:t,children:l.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[l.jsxs("video",{className:"modal-video",autoPlay:!0,loop:!0,playsInline:!0,children:[l.jsx("source",{src:dt.popup,type:"video/quicktime"}),l.jsx("source",{src:dt.popup.replace(".mov",".mp4"),type:"video/mp4"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsx("h3",{className:"modal-title gold-text",children:n==="start"?"🎉 STAKE INITIATED!":"✅ STAKE COMPLETE!"}),l.jsx("p",{className:"modal-subtitle",children:n==="start"?`Staking ${r} tokens in ${i} tier...`:`Successfully staked ${r} tokens!`}),l.jsx("button",{className:"modal-close-btn",onClick:t,children:n==="start"?"Confirm":"Close"})]})]})}):null;function qf(){var Es,Fs,zs;const[e,t]=T.useState(()=>typeof window<"u"?localStorage.getItem("dtgc-theme")==="dark":!1),[n,r]=T.useState(!1),i=()=>{r(!1),typeof window<"u"&&sessionStorage.setItem("dtgc-intro-seen","true")},[o,s]=T.useState(!1),[a,d]=T.useState(""),[f,x]=T.useState(null),[h,g]=T.useState(null),[k,S]=T.useState(null),[j,M]=T.useState("stake"),[p,u]=T.useState(!1),[c,v]=T.useState(()=>{if(typeof window<"u"){const m=localStorage.getItem("dtgc-testnet-balances");if(m)return JSON.parse(m)}return null}),[w,E]=T.useState("0"),[N,z]=T.useState("0"),[q,D]=T.useState("0"),[Ie,bt]=T.useState("0"),[je,dn]=T.useState(null),[pt,Ct]=T.useState(""),[Y,b]=T.useState(!1),[P,A]=T.useState(null),[V,oe]=T.useState(null),[$n,ft]=T.useState([]),[Nt,Et]=T.useState({totalStaked:"0",stakers:"0"}),[lt,ys]=T.useState({holders:Ia,loading:!0,lastUpdated:null,error:null}),[Wn,e0]=T.useState(!1),[ks,eu]=T.useState(null),[Rr,js]=T.useState(!1),[cn,Ss]=T.useState(null),[tu,ws]=T.useState(!1),[nu,bs]=T.useState("start"),[B,un]=T.useState({urmom:K.urmomPrice,dtgc:K.dtgcPrice,dtgcMarketCap:0,lastUpdated:null,loading:!0,error:null}),[ee,ru]=T.useState({dao:We.dao.expected,dev:We.dev.expected,lpLocked:We.lpLocked.expected,burned:0,staked:0,circulating:We.circulating.expected,lastUpdated:null}),it=(m,F)=>{Ss({message:m,type:F}),setTimeout(()=>Ss(null),4e3)},ei=T.useCallback(async()=>{{const m=Se-We.dao.expected-We.dev.expected-We.lpLocked.expected;ru({dao:We.dao.expected,dev:We.dev.expected,lpLocked:We.lpLocked.expected,burned:0,staked:0,circulating:Math.max(0,m),lastUpdated:new Date}),console.log("📊 Testnet mock supply loaded");return}},[]);T.useEffect(()=>{ei();const m=setInterval(ei,5*60*1e3);return()=>clearInterval(m)},[ei]);const ti=T.useCallback(async()=>{try{const m=await fetch($f.holders);if(!m.ok)throw new Error("API request failed");const G=((await m.json()).items||[]).filter(U=>{var re,H;return!Wf.includes((H=(re=U.address)==null?void 0:re.hash)==null?void 0:H.toLowerCase())}).slice(0,20).map((U,re)=>{var H,ge,te,he,ue;return{address:`${(ge=(H=U.address)==null?void 0:H.hash)==null?void 0:ge.slice(0,6)}...${(he=(te=U.address)==null?void 0:te.hash)==null?void 0:he.slice(-4)}`,fullAddress:(ue=U.address)==null?void 0:ue.hash,balance:parseFloat(U.value)/1e18,label:re<3?`Whale ${re+1}`:re<6?`Diamond ${re-2}`:`Holder ${re-5}`}});if(G.length>0)ys({holders:G,loading:!1,lastUpdated:new Date,error:null}),console.log("📊 Live holders updated:",G.length,"wallets");else throw new Error("No holder data received")}catch(m){console.warn("⚠️ Holder API error, using fallback:",m.message),ys(F=>({...F,holders:F.holders.length>0?F.holders:Ia,loading:!1,error:m.message}))}},[]);T.useEffect(()=>{ti();const m=setInterval(ti,12e4);return()=>clearInterval(m)},[ti]);const ni=T.useCallback(async()=>{var m,F;un(G=>({...G,loading:!0,error:null}));try{const U=await(await fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0")).json(),H=await(await fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7")).json(),ge=(U==null?void 0:U.pair)||((m=U==null?void 0:U.pairs)==null?void 0:m[0]),te=(H==null?void 0:H.pair)||((F=H==null?void 0:H.pairs)==null?void 0:F[0]),he=parseFloat((ge==null?void 0:ge.priceUsd)||K.urmomPrice),ue=parseFloat((te==null?void 0:te.priceUsd)||K.dtgcPrice),Vn=parseFloat((te==null?void 0:te.fdv)||(te==null?void 0:te.marketCap)||0);if(isNaN(he)||isNaN(ue))throw new Error("Invalid price data");un({urmom:he,dtgc:ue,dtgcMarketCap:Vn,lastUpdated:new Date,loading:!1,error:null}),console.log("📊 Live prices updated:",{urmom:he,dtgc:ue,marketCap:Vn})}catch(G){console.error("Failed to fetch live prices:",G),un(U=>({...U,loading:!1,error:"Failed to fetch prices - using cached values"}))}},[]);T.useEffect(()=>{ni();const m=setInterval(ni,6e4);return()=>clearInterval(m)},[ni]);const lu=async()=>{var m,F,G,U,re,H;un(ge=>({...ge,loading:!0}));try{const[ge,te]=await Promise.all([fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0"),fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7")]),he=await ge.json(),ue=await te.json(),Vn=parseFloat(((m=he==null?void 0:he.pair)==null?void 0:m.priceUsd)||((G=(F=he==null?void 0:he.pairs)==null?void 0:F[0])==null?void 0:G.priceUsd)||K.urmomPrice),Ts=parseFloat(((U=ue==null?void 0:ue.pair)==null?void 0:U.priceUsd)||((H=(re=ue==null?void 0:ue.pairs)==null?void 0:re[0])==null?void 0:H.priceUsd)||K.dtgcPrice);un({urmom:Vn,dtgc:Ts,lastUpdated:new Date,loading:!1,error:null}),it(`🟢 Prices updated: URMOM $${Vn.toFixed(7)} | DTGC $${Ts.toFixed(7)}`,"success")}catch{un(te=>({...te,loading:!1,error:"Failed"})),it("⚠️ Price fetch failed","error")}},iu=(K.totalDeadWallet*B.urmom).toFixed(2);(Ti*B.urmom).toFixed(2);const ri=T.useCallback(()=>{const m={pls:Ze.startingPLS,dtgc:Ze.startingDTGC,urmom:Ze.startingURMOM,lp:Ze.startingLP,stakedDTGC:0,stakedLP:0,rewards:0,positions:[]};return v(m),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(m)),D(m.pls.toString()),E(m.dtgc.toString()),bt(m.urmom.toString()),z(m.lp.toString()),m},[]);T.useEffect(()=>{c&&(D((c.pls??0).toString()),E((c.dtgc??0).toString()),bt((c.urmom??0).toString()),z((c.lp??0).toString()),ft(c.positions||[]))},[c]);const ou=T.useCallback(()=>{const m={...c,pls:((c==null?void 0:c.pls)||0)+Ze.startingPLS,dtgc:((c==null?void 0:c.dtgc)||0)+Ze.startingDTGC,urmom:((c==null?void 0:c.urmom)||0)+Ze.startingURMOM,lp:((c==null?void 0:c.lp)||0)+Ze.startingLP};v(m),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(m)),it(`🎉 Received ${R(Ze.startingPLS)} PLS + ${R(Ze.startingDTGC)} DTGC + ${R(Ze.startingLP)} LP!`,"success")},[c]),su=T.useCallback(()=>{localStorage.removeItem("dtgc-testnet-balances"),ri(),it("🔄 Testnet reset! Fresh 100M PLS added.","info")},[ri]),Cs=()=>{t(!e),localStorage.setItem("dtgc-theme",e?"light":"dark")};T.useEffect(()=>{const m=()=>u(window.scrollY>50);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const Ns=async()=>{{const m="0xTEST"+Math.random().toString(16).slice(2,10).toUpperCase()+"...TEST";S(m),c||ri(),it("🧪 TESTNET: Wallet connected with 100M PLS!","success");return}},au=async()=>{if(!pt||parseFloat(pt)<=0)return;const m=parseFloat(pt),F=je===4?$e:je===3?Ue:el[je];{const G=parseFloat(Y?N:w);if(m>G){it(`Insufficient ${Y?"LP":"DTGC"} balance!`,"error");return}d(F.name),s(!0),bs("start"),ws(!0),js(!0),await new Promise(te=>setTimeout(te,2e3));const U=m*(If.entryFee/100),re=m-U,H={id:Date.now(),tier:F.name,amount:re,isLP:Y,apr:F.apr,lockDays:F.lockDays,startTime:Date.now(),endTime:Date.now()+F.lockDays*24*60*60*1e3,rewards:0},ge={...c,dtgc:Y?c.dtgc:c.dtgc-m,lp:Y?c.lp-m:c.lp,stakedDTGC:Y?c.stakedDTGC:c.stakedDTGC+re,stakedLP:Y?c.stakedLP+re:c.stakedLP,positions:[...c.positions||[],H]};v(ge),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(ge)),js(!1),bs("end"),Ct(""),it(`✅ Staked ${R(re)} ${Y?"LP":"DTGC"} in ${F.name} tier!`,"success");return}},du=async m=>{const F=c.positions.find(ue=>ue.id===m);if(!F)return;const G=Date.now(),U=G<F.endTime,re=U?F.amount*.2:F.amount*.05,H=F.amount-re,ge=(G-F.startTime)/(24*60*60*1e3),te=F.amount*(F.apr/100)/365*ge,he={...c,dtgc:F.isLP?c.dtgc+te:c.dtgc+H+te,lp:F.isLP?c.lp+H:c.lp,stakedDTGC:F.isLP?c.stakedDTGC:c.stakedDTGC-F.amount,stakedLP:F.isLP?c.stakedLP-F.amount:c.stakedLP,positions:c.positions.filter(ue=>ue.id!==m)};v(he),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(he)),it(`✅ Unstaked! Received ${R(H)} + ${R(te)} rewards${U?" (12% early exit fee)":""}`,"success")},cu=m=>{navigator.clipboard.writeText(m),it("Address copied!","success")};return l.jsxs(Vf.Provider,{value:{isDark:e,toggleTheme:Cs},children:[l.jsx("style",{children:Gf(e)}),n&&Ua&&l.jsx(Yf,{onComplete:i,isDark:e}),o&&Ua&&l.jsx(Kf,{onComplete:()=>s(!1),tierName:a,isDark:e}),l.jsx(Zf,{}),l.jsx(Xf,{}),l.jsxs("div",{className:"app-container",children:[l.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:2e3,background:"linear-gradient(90deg, #FF6B6B, #FF8E53, #FF6B6B)",backgroundSize:"200% auto",animation:"shimmer 3s linear infinite",padding:"8px 20px",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontWeight:700,color:"#FFF",fontSize:"0.85rem",letterSpacing:"1px"},children:"🧪 TESTNET MODE - Not Real Money!"}),k&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:ou,style:{padding:"6px 16px",background:"#FFF",border:"none",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FF6B6B",cursor:"pointer"},children:"🚰 Get More Test Tokens"}),l.jsx("button",{onClick:su,style:{padding:"6px 16px",background:"rgba(255,255,255,0.2)",border:"1px solid #FFF",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FFF",cursor:"pointer"},children:"🔄 Reset"})]})]}),l.jsx("header",{className:`nav-header ${p?"scrolled":""}`,style:{top:"40px"},children:l.jsxs("div",{className:"nav-content",children:[l.jsxs("div",{className:"logo-section",children:[l.jsx("div",{className:"logo-mark",children:"DT"}),l.jsxs("div",{className:"logo-text-group",children:[l.jsx("span",{className:"logo-text gold-text",children:"DTGC"}),l.jsx("span",{className:"logo-tagline",children:"dump.tires"})]})]}),l.jsxs("nav",{className:"nav-links",children:[l.jsx("button",{className:`nav-link ${j==="stake"?"active":""}`,onClick:()=>M("stake"),children:"Stake"}),l.jsx("button",{className:`nav-link ${j==="burn"?"active":""}`,onClick:()=>M("burn"),children:"Burn Stats"}),l.jsx("button",{className:`nav-link ${j==="vote"?"active":""}`,onClick:()=>M("vote"),children:"DAO"}),l.jsx("button",{className:`nav-link ${j==="whitepaper"?"active":""}`,onClick:()=>M("whitepaper"),children:"Whitepaper"}),l.jsx("button",{className:`nav-link ${j==="links"?"active":""}`,onClick:()=>M("links"),children:"Links"}),l.jsx("button",{className:`nav-link ${j==="analytics"?"active":""}`,onClick:()=>M("analytics"),style:{background:j==="analytics"?"linear-gradient(135deg, #2196F3, #1976D2)":"transparent"},children:"📊 Analytics"})]}),l.jsxs("div",{className:"nav-right",children:[l.jsx("button",{className:"theme-toggle",onClick:Cs,children:e?"☀️":"🌙"}),l.jsxs("button",{className:`connect-btn ${k?"connected":""}`,onClick:Ns,disabled:Rr,children:[Rr&&l.jsx("span",{className:"spinner"}),k?Hf(k):"Connect"]})]})]})}),l.jsxs("section",{className:"hero-section",style:{paddingTop:"180px"},children:[l.jsx("div",{className:"hero-badge",children:"🧪 V18 DIAMOND+ EDITION • TESTNET 🧪"}),l.jsx("h1",{className:"hero-title gold-text",children:"DTGC STAKING"}),l.jsx("p",{className:"hero-subtitle",children:"Stake • Earn • Govern • Prosper"}),l.jsx("p",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginTop:"-10px",marginBottom:"20px",textTransform:"uppercase"},children:"A pump.tires contract, unique decentralized staking mechanism, on PulseChain"}),k&&c&&l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"15px",flexWrap:"wrap",marginBottom:"30px",padding:"20px",background:e?"rgba(255,107,107,0.1)":"rgba(255,107,107,0.05)",borderRadius:"16px",border:"1px solid rgba(255,107,107,0.3)"},children:[l.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[l.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FF6B6B"},children:R(c.pls)}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST PLS"})]}),l.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[l.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FFD700"},children:R(c.dtgc)}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST DTGC"})]}),l.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[l.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FF9800"},children:R(c.urmom||0)}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST URMOM"})]}),l.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[l.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#00BCD4"},children:R(c.lp)}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST LP"})]}),l.jsxs("div",{style:{textAlign:"center",padding:"10px 20px",borderLeft:"1px solid rgba(255,255,255,0.2)"},children:[l.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#4CAF50"},children:R((c.stakedDTGC||0)+(c.stakedLP||0))}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"STAKED"})]})]}),l.jsxs("div",{className:"hero-stats",children:[l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value gold-text",children:R(parseFloat(Nt.totalStaked))}),l.jsx("div",{className:"hero-stat-label",children:"Total Staked"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsxs("div",{className:"hero-stat-value gold-text",style:{position:"relative"},children:["$",B.urmom.toFixed(7),!B.loading&&l.jsx("span",{style:{position:"absolute",top:"-8px",right:"-20px",fontSize:"0.5rem",background:"#4CAF50",padding:"2px 6px",borderRadius:"10px",color:"#FFF",animation:"pulse 2s infinite"},children:"LIVE"})]}),l.jsxs("div",{className:"hero-stat-label",children:["URMOM ",B.loading?"⏳ Loading...":""]})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsxs("div",{className:"hero-stat-value gold-text",style:{position:"relative"},children:["$",B.dtgc.toFixed(7),!B.loading&&l.jsx("span",{style:{position:"absolute",top:"-8px",right:"-20px",fontSize:"0.5rem",background:"#4CAF50",padding:"2px 6px",borderRadius:"10px",color:"#FFF",animation:"pulse 2s infinite"},children:"LIVE"})]}),l.jsxs("div",{className:"hero-stat-label",children:["DTGC ",B.loading?"⏳ Loading...":""]})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsxs("div",{className:"hero-stat-value gold-text",children:["$",R(parseFloat(iu))]}),l.jsx("div",{className:"hero-stat-label",children:"Burned Value"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",style:{color:"#4CAF50"},children:"91%"}),l.jsx("div",{className:"hero-stat-label",children:"Project Supply"})]})]})]}),l.jsx("section",{className:"supply-dynamics-section",style:{margin:"20px auto",maxWidth:"1200px",padding:"0 20px"},children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(26,35,39,0.95) 0%, rgba(18,24,28,0.98) 100%)",border:"2px solid #D4AF37",borderRadius:"16px",padding:"24px",boxShadow:"0 8px 32px rgba(212,175,55,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:"#888",letterSpacing:"2px",marginBottom:"8px",textTransform:"uppercase"},children:"A pump.tires contract, unique decentralized staking mechanism, on PulseChain"}),l.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:800,color:"#D4AF37",margin:0,textShadow:"0 2px 10px rgba(212,175,55,0.3)"},children:"⚡ GOLD SUPPLY DYNAMICS DTGC ⚡"}),l.jsx("div",{style:{fontSize:"0.75rem",color:"#666",marginTop:"4px"},children:"Total Supply: 1,000,000,000 DTGC • Live Transparency"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"12px",marginBottom:"16px"},children:[l.jsx("a",{href:`https://scan.pulsechain.com/address/${We.dao.address}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)",border:"1px solid rgba(76,175,80,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",cursor:"pointer",transition:"transform 0.2s, box-shadow 0.2s"},onMouseOver:m=>{m.currentTarget.style.transform="translateY(-2px)",m.currentTarget.style.boxShadow="0 4px 12px rgba(76,175,80,0.3)"},onMouseOut:m=>{m.currentTarget.style.transform="translateY(0)",m.currentTarget.style.boxShadow="none"},children:[l.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"🏛️"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"DAO TREASURY"}),l.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#4CAF50"},children:R(ee.dao)}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#4CAF50",fontWeight:600},children:[(ee.dao/Se*100).toFixed(1),"%"]}),l.jsx("div",{style:{fontSize:"0.6rem",color:"#666",marginTop:"4px",height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden"},children:l.jsx("div",{style:{width:`${Math.max(.5,ee.dao/Se*100)}%`,height:"100%",background:"#4CAF50",borderRadius:"2px"}})}),l.jsx("div",{style:{fontSize:"0.5rem",color:"#666",marginTop:"6px"},children:"🔗 View on PulseScan"})]})}),l.jsx("a",{href:`https://scan.pulsechain.com/address/${We.dev.address}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.05) 100%)",border:"1px solid rgba(33,150,243,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",cursor:"pointer",transition:"transform 0.2s, box-shadow 0.2s"},onMouseOver:m=>{m.currentTarget.style.transform="translateY(-2px)",m.currentTarget.style.boxShadow="0 4px 12px rgba(33,150,243,0.3)"},onMouseOut:m=>{m.currentTarget.style.transform="translateY(0)",m.currentTarget.style.boxShadow="none"},children:[l.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"👨‍💻"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"DEV WALLET"}),l.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#2196F3"},children:R(ee.dev)}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#2196F3",fontWeight:600},children:[(ee.dev/Se*100).toFixed(1),"%"]}),l.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:l.jsx("div",{style:{width:`${ee.dev/Se*100}%`,height:"100%",background:"#2196F3",borderRadius:"2px"}})}),l.jsx("div",{style:{fontSize:"0.5rem",color:"#666",marginTop:"6px"},children:"🔗 View on PulseScan"})]})}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(156,39,176,0.1) 0%, rgba(156,39,176,0.05) 100%)",border:"1px solid rgba(156,39,176,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"🔒"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"LP LOCKED"}),l.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#9C27B0"},children:R(ee.lpLocked)}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#9C27B0",fontWeight:600},children:[(ee.lpLocked/Se*100).toFixed(1),"%"]}),l.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:l.jsx("div",{style:{width:`${ee.lpLocked/Se*100}%`,height:"100%",background:"#9C27B0",borderRadius:"2px"}})})]}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0.05) 100%)",border:"1px solid rgba(0,188,212,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"💎"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"STAKED"}),l.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#00BCD4"},children:R(parseFloat(Nt.totalStaked)||ee.staked)}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#00BCD4",fontWeight:600},children:[((parseFloat(Nt.totalStaked)||ee.staked)/Se*100).toFixed(2),"%"]}),l.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:l.jsx("div",{style:{width:`${(parseFloat(Nt.totalStaked)||ee.staked)/Se*100}%`,height:"100%",background:"#00BCD4",borderRadius:"2px"}})})]}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(244,67,54,0.05) 100%)",border:"1px solid rgba(244,67,54,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"🔥"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"BURNED FOREVER"}),l.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#F44336"},children:R(ee.burned)}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#F44336",fontWeight:600},children:[(ee.burned/Se*100).toFixed(2),"%"]}),l.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:l.jsx("div",{style:{width:`${Math.min(ee.burned/Se*100,100)}%`,height:"100%",background:"#F44336",borderRadius:"2px"}})})]}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.05) 100%)",border:"1px solid rgba(255,152,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"💱"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"CIRCULATING"}),l.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#FF9800"},children:R(ee.circulating)}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#FF9800",fontWeight:600},children:[(ee.circulating/Se*100).toFixed(1),"%"]}),l.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:l.jsx("div",{style:{width:`${ee.circulating/Se*100}%`,height:"100%",background:"#FF9800",borderRadius:"2px"}})})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"8px",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"#888"},children:"PROJECT SUPPLY:"}),l.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#4CAF50"},children:[((ee.dao+ee.dev+ee.lpLocked)/Se*100).toFixed(1),"%"]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"#888"},children:"PUBLIC FLOAT:"}),l.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#FF9800"},children:[(ee.circulating/Se*100).toFixed(1),"%"]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"#888"},children:"MARKET CAP:"}),l.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#D4AF37"},children:["$",R(B.dtgcMarketCap)]})]}),l.jsxs("div",{style:{fontSize:"0.6rem",color:"#666",display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx("span",{style:{display:"inline-block",width:"6px",height:"6px",borderRadius:"50%",background:"#4CAF50",animation:"pulse 2s infinite"}}),"LIVE DATA"]})]}),l.jsxs("div",{className:"ticker-container",children:[l.jsxs("div",{style:{fontSize:"0.6rem",color:"#666",textAlign:"center",marginBottom:"6px",letterSpacing:"1px",textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:["📊 Top Holder Wallets (Excluding DAO/Dev) • Hover to Pause",lt.loading?l.jsx("span",{style:{color:"#FF9800"},children:"⏳ Loading..."}):l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",color:"#4CAF50"},children:[l.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#4CAF50",animation:"pulse 2s infinite"}}),"LIVE"]})]}),l.jsxs("div",{className:"ticker-track",children:[(lt.holders||[]).map((m,F)=>l.jsxs("div",{className:"ticker-item",children:[l.jsx("span",{className:"ticker-address",children:m.address}),l.jsxs("span",{className:"ticker-balance",children:[R(m.balance)," DTGC"]}),l.jsx("span",{className:"ticker-label",children:m.label})]},`a-${F}`)),(lt.holders||[]).map((m,F)=>l.jsxs("div",{className:"ticker-item",children:[l.jsx("span",{className:"ticker-address",children:m.address}),l.jsxs("span",{className:"ticker-balance",children:[R(m.balance)," DTGC"]}),l.jsx("span",{className:"ticker-label",children:m.label})]},`b-${F}`))]}),l.jsxs("div",{style:{fontSize:"0.55rem",color:"#555",textAlign:"center",marginTop:"6px"},children:["Total Tracked: ",R((lt.holders||[]).reduce((m,F)=>m+F.balance,0))," DTGC • ",(lt.holders||[]).length," Wallets"]})]})]})}),l.jsxs("main",{className:"main-content",children:[j==="stake"&&l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title gold-text",children:"SELECT YOUR TIER"}),l.jsx("div",{className:"section-divider"}),l.jsx("p",{className:"section-description",children:"Choose your staking tier based on lock duration and desired APR"})]}),l.jsxs("div",{className:"tiers-grid",children:[el.map(m=>l.jsxs("div",{className:`tier-card ${je===m.id&&!Y?"selected":""}`,style:{"--tier-gradient":m.gradient},onClick:()=>{dn(m.id),b(!1)},children:[l.jsx("div",{className:"tier-icon",children:m.icon}),l.jsx("div",{className:"tier-name",style:{color:m.color},children:m.name}),l.jsxs("div",{className:"tier-min-invest",style:{fontSize:"0.7rem",color:"var(--text-muted)",marginBottom:"8px"},children:["Min: $",m.minInvest.toLocaleString()]}),l.jsxs("div",{className:"tier-apr-container",children:[l.jsxs("div",{className:"tier-apr gold-text",children:[m.apr,"%"]}),l.jsx("div",{className:"tier-apr-label",children:"APR"})]}),l.jsxs("div",{className:"tier-features",children:[l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Lock"}),l.jsxs("span",{className:"tier-feature-value",children:[m.lockDays," Days"]})]}),l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Bonus"}),l.jsxs("span",{className:"tier-feature-value",children:["+",m.bonus,"%"]})]})]}),l.jsx("span",{className:"tier-badge",children:"DTGC"})]},m.id)),l.jsxs("div",{className:`tier-card diamond ${Y&&je===3?"selected":""}`,onClick:()=>{dn(3),b(!0)},children:[l.jsx("div",{className:"tier-icon",children:Ue.icon}),l.jsx("div",{className:"tier-name",style:{color:Ue.color},children:Ue.name}),l.jsxs("div",{className:"tier-subtitle",children:[Ue.lpPair," LP • ",Ue.boost,"x BOOST!"]}),l.jsxs("div",{className:"tier-min-invest",style:{fontSize:"0.7rem",color:"var(--text-muted)",marginBottom:"8px"},children:["Min: $",Ue.minInvest]}),l.jsxs("div",{className:"tier-apr-container",children:[l.jsxs("div",{className:"tier-apr",style:{color:"var(--diamond-dark)"},children:[Ue.apr*Ue.boost,"%"]}),l.jsx("div",{className:"tier-apr-label",children:"EFFECTIVE APR"})]}),l.jsxs("div",{className:"tier-features",children:[l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Lock"}),l.jsxs("span",{className:"tier-feature-value",children:[Ue.lockDays," Days"]})]}),l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Bonus"}),l.jsxs("span",{className:"tier-feature-value",children:["+",Ue.bonus,"%"]})]}),l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Boost"}),l.jsxs("span",{className:"tier-feature-value",style:{color:"#4CAF50",fontWeight:"700"},children:[Ue.boost,"x!"]})]})]}),l.jsx("span",{className:"tier-badge lp",children:"LP"})]}),l.jsxs("div",{className:`tier-card diamond-plus ${Y&&je===4?"selected":""}`,onClick:()=>{dn(4),b(!0)},style:{background:"linear-gradient(135deg, rgba(156,39,176,0.1) 0%, rgba(123,31,162,0.15) 100%)",border:"2px solid #9C27B0"},children:[l.jsx("div",{className:"tier-icon",style:{fontSize:"2.5rem"},children:$e.icon}),l.jsx("div",{className:"tier-name",style:{color:$e.color},children:$e.name}),l.jsxs("div",{className:"tier-subtitle",style:{color:"#9C27B0"},children:[$e.lpPair," LP • ",$e.boost,"x BOOST!"]}),l.jsxs("div",{className:"tier-min-invest",style:{fontSize:"0.7rem",color:"var(--text-muted)",marginBottom:"8px"},children:["Min: $",$e.minInvest]}),l.jsxs("div",{className:"tier-apr-container",children:[l.jsxs("div",{className:"tier-apr",style:{color:"#9C27B0",fontSize:"2.2rem"},children:[$e.apr*$e.boost,"%"]}),l.jsx("div",{className:"tier-apr-label",children:"EFFECTIVE APR"})]}),l.jsxs("div",{className:"tier-features",children:[l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Lock"}),l.jsxs("span",{className:"tier-feature-value",children:[$e.lockDays," Days"]})]}),l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Bonus"}),l.jsxs("span",{className:"tier-feature-value",children:["+",$e.bonus,"%"]})]}),l.jsxs("div",{className:"tier-feature",children:[l.jsx("span",{className:"tier-feature-label",children:"Boost"}),l.jsxs("span",{className:"tier-feature-value",style:{color:"#9C27B0",fontWeight:"700"},children:[$e.boost,"x!!"]})]})]}),l.jsx("span",{className:"tier-badge lp",style:{background:"linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)"},children:"LP+"})]})]}),je!==null&&k&&l.jsxs("div",{className:"staking-panel",children:[l.jsx("h3",{className:"panel-title gold-text",children:Y?"💎 STAKE LP TOKENS":`${(Es=el[je])==null?void 0:Es.icon} STAKE DTGC`}),l.jsxs("div",{className:"input-group",children:[l.jsxs("div",{className:"input-header",children:[l.jsx("span",{className:"input-label",children:"Amount"}),l.jsxs("span",{className:"balance-display",onClick:()=>Ct(Y?N:w),children:["Balance: ",R(parseFloat(Y?N:w))," ",Y?"LP":"DTGC"]})]}),l.jsxs("div",{className:"input-container",children:[l.jsx("input",{type:"number",className:"stake-input",placeholder:"0.00",value:pt,onChange:m=>Ct(m.target.value)}),l.jsxs("div",{className:"input-suffix",children:[l.jsx("span",{className:"token-badge",children:Y?"LP":"DTGC"}),l.jsx("button",{className:"max-btn",onClick:()=>Ct(Y?N:w),children:"MAX"})]})]})]}),l.jsxs("button",{className:"action-btn primary",onClick:au,disabled:Rr||!pt||parseFloat(pt)<=0,children:[Rr&&l.jsx("span",{className:"spinner"}),Y?"Stake LP Tokens":"Stake DTGC"]}),l.jsxs("div",{className:"fee-breakdown",children:[l.jsxs("div",{className:"fee-title",children:["TAX STRUCTURE ",l.jsx("span",{style:{fontSize:"0.7rem",color:"var(--gold)",cursor:"pointer"},onClick:()=>M("whitepaper"),children:"📄 Details"})]}),l.jsxs("div",{className:"fee-row",children:[l.jsx("span",{children:"Entry Tax"}),l.jsx("span",{style:{color:"#4CAF50"},children:"1.5%"})]}),l.jsxs("div",{className:"fee-row",children:[l.jsx("span",{children:"Exit Tax"}),l.jsx("span",{style:{color:"#4CAF50"},children:"1.5%"})]}),l.jsxs("div",{className:"fee-row",children:[l.jsx("span",{children:"EES (Emergency End Stake)"}),l.jsx("span",{style:{color:"#FF5722"},children:"12%"})]}),l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginTop:"8px",textAlign:"center"},children:"Entry/Exit: 0.75% DAO • 0.25% Dev • 0.25% DTGC/URMOM LP • 0.15% DTGC/PLS LP • 0.1% Burn"}),l.jsx("div",{style:{fontSize:"0.6rem",color:"#4CAF50",marginTop:"4px",textAlign:"center"},children:"✓ All tiers profitable • Only 3% total fees"})]})]}),k&&((Fs=c==null?void 0:c.positions)==null?void 0:Fs.length)>0&&l.jsxs("div",{style:{maxWidth:"700px",margin:"40px auto 0",background:"var(--bg-card)",borderRadius:"24px",padding:"30px",border:"1px solid var(--border-color)"},children:[l.jsx("h3",{style:{fontFamily:"Cinzel, serif",fontSize:"1.2rem",letterSpacing:"3px",marginBottom:"20px",textAlign:"center",color:"var(--gold)"},children:"📊 YOUR STAKED POSITIONS"}),c.positions.map(m=>{const F=Date.now(),G=F<m.endTime,U=Math.max(0,Math.ceil((m.endTime-F)/(24*60*60*1e3))),re=(F-m.startTime)/(24*60*60*1e3),H=m.amount*(m.apr/100)/365*re;return l.jsx("div",{style:{background:e?"rgba(212,175,55,0.1)":"rgba(212,175,55,0.05)",border:`1px solid ${G?"rgba(255,107,107,0.3)":"rgba(76,175,80,0.3)"}`,borderRadius:"16px",padding:"20px",marginBottom:"15px"},children:l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"15px"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,fontSize:"1.1rem",color:m.isLP?"var(--diamond)":"var(--gold)"},children:[m.tier," ",m.isLP?"(LP)":"(DTGC)"]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"4px"},children:["Staked: ",l.jsx("strong",{children:R(m.amount)})," • APR: ",l.jsxs("strong",{children:[m.apr,"%"]})]}),l.jsx("div",{style:{fontSize:"0.8rem",color:G?"#FF6B6B":"#4CAF50",marginTop:"4px"},children:G?`🔒 ${U} days remaining`:"✅ Unlocked - Ready to claim!"})]}),l.jsxs("div",{style:{textAlign:"right"},children:[l.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Rewards Earned"}),l.jsxs("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#4CAF50"},children:["+",R(H)," ",m.isLP?"LP":"DTGC"]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"#4CAF50",opacity:.8},children:["≈ $",R(H*B.dtgc)]}),l.jsx("button",{onClick:()=>du(m.id),style:{marginTop:"10px",padding:"8px 20px",background:G?"linear-gradient(135deg, #FF6B6B, #FF8E53)":"linear-gradient(135deg, #4CAF50, #8BC34A)",border:"none",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FFF",cursor:"pointer"},children:G?"⚠️ Early Unstake (20% Fee)":"✅ Claim All"})]})]})},m.id)})]}),!k&&l.jsxs("div",{className:"connect-prompt",children:[l.jsx("div",{className:"connect-prompt-icon",children:"🔐"}),l.jsx("p",{className:"connect-prompt-text",children:"Connect your wallet to start staking DTGC"}),l.jsx("button",{className:"action-btn primary",style:{maxWidth:"260px",margin:"0 auto"},onClick:Ns,children:"Connect Wallet"})]}),l.jsxs("div",{className:"video-showcase",children:[l.jsx("p",{className:"video-label",children:"✦ DTGC STAKING ✦"}),l.jsx("div",{className:"video-container",children:l.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[l.jsx("source",{src:dt.stake,type:"video/quicktime"}),l.jsx("source",{src:dt.stake.replace(".mov",".mp4"),type:"video/mp4"})]})})]})]}),j==="burn"&&l.jsx("section",{className:"section",children:l.jsxs("div",{className:"burn-section",children:[l.jsxs("div",{className:"burn-header",children:[l.jsx("span",{className:"burn-icon",children:"🔥"}),l.jsxs("div",{className:"burn-header-text",children:[l.jsx("h2",{children:"🎊 $URMOM SUPER STATS 🎊"}),l.jsxs("p",{children:["Live Price: $",B.urmom.toFixed(7)," ",B.loading?"⏳":"🟢"," • ",l.jsx("a",{href:De.dexscreener,target:"_blank",rel:"noopener noreferrer",style:{color:"#FF9800"},children:"DexScreener →"})]})]}),l.jsxs("div",{className:"burn-links",children:[l.jsx("a",{href:De.dexscreener,target:"_blank",rel:"noopener noreferrer",className:"burn-link-btn",children:"📊 DexScreener"}),l.jsx("a",{href:De.coingecko,target:"_blank",rel:"noopener noreferrer",className:"burn-link-btn",children:"🦎 CoinGecko"}),l.jsx("button",{onClick:lu,className:"burn-link-btn",style:{cursor:"pointer",border:"none",background:"rgba(76,175,80,0.2)"},disabled:B.loading,children:B.loading?"⏳ Loading...":"🔄 Refresh Prices"})]}),B.lastUpdated&&l.jsxs("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",marginTop:"8px"},children:["Last updated: ",B.lastUpdated.toLocaleTimeString()," • Auto-refreshes every 60s"]})]}),l.jsxs("div",{className:"burn-main-stats",children:[l.jsxs("div",{className:"burn-stat-card",children:[l.jsx("div",{className:"burn-stat-emoji",children:"💵"}),l.jsxs("div",{className:"burn-stat-value",children:["$",B.urmom.toFixed(7)]}),l.jsxs("a",{href:De.dexscreener,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.6rem",color:"#FF9800",textDecoration:"none"},children:["📊 ",B.loading?"Loading...":"🟢 Live"]}),l.jsx("div",{className:"burn-stat-label",children:"URMOM Price"})]}),l.jsxs("div",{className:"burn-stat-card",children:[l.jsx("div",{className:"burn-stat-emoji",children:"🪙"}),l.jsxs("div",{className:"burn-stat-value",children:["$",B.dtgc.toFixed(7)]}),l.jsxs("a",{href:De.dexscreenerDTGC,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.6rem",color:"#FFD700",textDecoration:"none"},children:["📊 ",B.loading?"Loading...":"🟢 Live"]}),l.jsx("div",{className:"burn-stat-label",children:"DTGC Price"})]}),l.jsxs("div",{className:"burn-stat-card",children:[l.jsx("div",{className:"burn-stat-emoji",children:"🔥"}),l.jsx("div",{className:"burn-stat-value",children:R(K.totalDeadWallet)}),l.jsx("div",{className:"burn-stat-subvalue",style:{color:"#FF9800"},children:"545,616,403 URMOM"}),l.jsx("div",{className:"burn-stat-label",children:"Burnt Tokens"})]}),l.jsxs("div",{className:"burn-stat-card",style:{background:"linear-gradient(135deg, rgba(255,152,0,0.15) 0%, rgba(255,87,34,0.1) 100%)"},children:[l.jsx("div",{className:"burn-stat-emoji",children:"💎"}),l.jsx("div",{className:"burn-stat-value",children:qn(K.totalDeadWallet*B.urmom)}),l.jsxs("div",{className:"burn-stat-subvalue",style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.7)"},children:[R(K.totalDeadWallet)," × $",B.urmom.toFixed(7)]}),l.jsx("div",{className:"burn-stat-label",children:"LIVE BURNED VALUE"})]})]}),l.jsxs("div",{style:{background:"rgba(255, 152, 0, 0.1)",border:"1px solid rgba(255, 152, 0, 0.3)",borderRadius:"12px",padding:"16px 20px",marginBottom:"35px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"1.5rem"},children:"🧮"}),l.jsxs("span",{style:{fontFamily:"Cinzel, serif",fontSize:"0.85rem",letterSpacing:"1px",color:"rgba(255,255,255,0.8)"},children:["LIVE CALCULATION ",B.loading?"⏳":"🟢"]})]}),l.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.9rem",color:"#FF9800"},children:[tl(K.totalDeadWallet)," URMOM × $",B.urmom.toFixed(7)," = ",l.jsx("strong",{style:{color:"#FFD700",fontSize:"1.1rem"},children:qn(K.totalDeadWallet*B.urmom)})]})]}),l.jsxs("div",{className:"burn-progress-section",children:[l.jsxs("div",{className:"burn-progress-header",children:[l.jsx("span",{className:"burn-progress-title",children:"🏁 URMOM TOTAL BURNED / REMOVED"}),l.jsxs("span",{className:"burn-progress-percent",children:[K.burnPercentage,"%"]})]}),l.jsx("div",{className:"burn-progress-bar",children:l.jsx("div",{className:"burn-progress-fill",style:{width:`${K.burnPercentage}%`}})}),l.jsx("div",{className:"burn-progress-blocks",children:Array.from({length:20},(m,F)=>l.jsx("div",{className:`burn-block ${F<Math.floor(K.burnPercentage/5)?"filled":""}`},F))})]}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(184,134,11,0.15) 100%)",border:"2px solid rgba(212,175,55,0.4)",borderRadius:"16px",padding:"24px",marginBottom:"35px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"},children:[l.jsx("span",{style:{fontSize:"2rem"},children:"🪙🔥"}),l.jsxs("div",{children:[l.jsx("h3",{style:{fontFamily:"Cinzel, serif",color:"#D4AF37",margin:0,letterSpacing:"2px"},children:"DTGC BURN TRACKER"}),l.jsx("p",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",margin:"4px 0 0"},children:"0.25% of every Entry/Exit tax is burned forever"})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px"},children:[l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"1px solid rgba(212,175,55,0.3)"},children:[l.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"1px",marginBottom:"8px"},children:"DTGC BURNED"}),l.jsx("div",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#D4AF37"},children:R(0)}),l.jsx("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"},children:"Coming soon..."})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"1px solid rgba(212,175,55,0.3)"},children:[l.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"1px",marginBottom:"8px"},children:"USD VALUE"}),l.jsx("div",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#4CAF50"},children:"$0.00"}),l.jsxs("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"},children:["@ $",B.dtgc.toFixed(7)]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"1px solid rgba(212,175,55,0.3)"},children:[l.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"1px",marginBottom:"8px"},children:"% OF SUPPLY"}),l.jsx("div",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#FF9800"},children:"0.00%"}),l.jsx("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"},children:"of 1B total"})]})]}),l.jsx("div",{style:{marginTop:"16px",padding:"12px",background:"rgba(212,175,55,0.1)",borderRadius:"8px",textAlign:"center"},children:l.jsxs("span",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.7)"},children:["Burn Address: ",l.jsx("code",{style:{color:"#D4AF37"},children:we.burn})]})})]}),l.jsxs("div",{className:"dead-wallet-section",children:[l.jsx("h3",{className:"dead-wallet-title",children:"🕳️ DEAD WALLET BREAKDOWN"}),l.jsx("div",{className:"dead-wallet-grid",children:Object.entries(K.deadWallets).map(([m,F],G)=>l.jsxs("div",{className:"dead-wallet-row",children:[l.jsxs("span",{className:"dead-wallet-address",children:[m.slice(0,10),"...",m.slice(-4)]}),l.jsx("span",{className:`dead-wallet-amount ${F===0?"zero":""}`,children:F===0?"0.00":tl(F)})]},G))})]}),l.jsxs("div",{className:"lp-burn-section",children:[l.jsx("h3",{className:"lp-burn-title",children:"🧺 LP TOKENS BURNED"}),l.jsx("div",{className:"lp-burn-grid",children:K.lpBurnPercentages.map((m,F)=>l.jsxs("div",{className:"lp-burn-item",children:[l.jsxs("div",{className:"lp-burn-header",children:[l.jsx("span",{className:"lp-burn-name",children:m.pair}),l.jsxs("span",{className:"lp-burn-percent",children:[m.percentage.toFixed(4),"%"]})]}),l.jsx("div",{className:"lp-burn-bar",children:l.jsx("div",{className:"lp-burn-fill",style:{width:`${m.percentage}%`}})})]},F))})]}),l.jsxs("div",{className:"lp-urmom-section",children:[l.jsx("h3",{className:"lp-urmom-title",children:"📊 LP BURNED BREAKDOWN (URMOM × LIVE PRICE)"}),l.jsx("div",{className:"lp-urmom-grid",children:K.lpUrmomBreakdown.map((m,F)=>l.jsxs("div",{className:"lp-urmom-card",style:{"--card-color":m.color},children:[l.jsx("div",{className:"lp-urmom-pool",children:m.pool}),l.jsx("div",{className:"lp-urmom-tokens",children:R(m.tokens)}),l.jsx("div",{className:"lp-urmom-usd",children:qn(m.tokens*B.urmom)}),l.jsxs("div",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",marginTop:"4px"},children:[R(m.tokens)," × $",B.urmom.toFixed(7)]})]},F))}),l.jsx("div",{style:{textAlign:"center",marginTop:"20px",padding:"12px",background:"rgba(255,152,0,0.1)",borderRadius:"10px"},children:l.jsxs("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.85rem"},children:[l.jsx("strong",{children:"Total LP URMOM:"})," ",R(Ti)," = ",l.jsx("strong",{style:{color:"#FF9800"},children:qn(Ti*B.urmom)})]})})]}),l.jsxs("div",{className:"burn-address-box",children:[l.jsxs("div",{className:"burn-address-info",children:[l.jsx("span",{className:"burn-address-label",children:"PulseChain Burn Address (0x...369)"}),l.jsx("span",{className:"burn-address-value",children:we.burn})]}),l.jsx("a",{href:`${qr}/address/${we.burn}`,target:"_blank",rel:"noopener noreferrer",className:"burn-view-btn",children:"View on PulseScan →"})]})]})}),j==="vote"&&l.jsx("section",{className:"section",children:l.jsxs("div",{className:"voting-section",children:[l.jsxs("div",{className:"voting-header",children:[l.jsx("span",{className:"voting-icon",children:"🗳️"}),l.jsxs("div",{className:"voting-header-text",children:[l.jsx("h2",{children:"DAO GOVERNANCE"}),l.jsx("p",{children:"Vote on EES penalty fund allocation"})]})]}),l.jsxs("div",{className:"voting-eligibility",children:[l.jsx("div",{className:"eligibility-title",children:"VOTING ELIGIBILITY"}),l.jsxs("div",{className:"eligibility-items",children:[l.jsxs("div",{className:"eligibility-item",children:[l.jsx("span",{className:`eligibility-check ${P||V?"active":"inactive"}`,children:P||V?"✓":"○"}),l.jsx("span",{children:"Verified Staker"})]}),l.jsxs("div",{className:"eligibility-item",children:[l.jsx("span",{className:`eligibility-check ${parseFloat(w)>=1e6?"active":"inactive"}`,children:parseFloat(w)>=1e6?"✓":"○"}),l.jsx("span",{children:"Hold 1M+ DTGC"})]}),l.jsxs("div",{className:"eligibility-item",children:[l.jsx("span",{className:`eligibility-check ${Wn?"active":"inactive"}`,children:Wn?"✓":"○"}),l.jsx("span",{children:Wn?"You Can Vote!":"Not Eligible"})]})]})]}),l.jsx("div",{className:"voting-options-grid",children:Of.map(m=>l.jsxs("div",{className:`voting-option ${ks===m.id?"selected":""}`,onClick:()=>eu(m.id),children:[l.jsxs("div",{className:"voting-option-header",children:[l.jsx("span",{className:"voting-option-letter",children:["A","B","C","D"][m.id]}),l.jsx("span",{className:"voting-option-name",children:m.name})]}),l.jsx("p",{className:"voting-option-desc",children:m.description}),l.jsxs("div",{className:"voting-option-votes",children:[l.jsx("div",{className:"votes-bar",children:l.jsx("div",{className:"votes-fill",style:{width:`${(m.id+1)*15}%`}})}),l.jsxs("span",{className:"votes-count",children:[(m.id+1)*3," votes"]})]})]},m.id))}),l.jsx("button",{className:"vote-btn",disabled:!Wn||ks===null,onClick:()=>it("Voting coming soon!","info"),children:k?Wn?"Cast Your Vote":"Not Eligible":"Connect Wallet"})]})}),j==="whitepaper"&&l.jsxs("section",{className:"section whitepaper-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title gold-text",children:"WHITEPAPER"}),l.jsx("div",{className:"section-divider"}),l.jsx("p",{className:"section-description",children:"DT Gold Coin • Premium Staking Protocol"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px",marginBottom:"40px"},children:[l.jsxs("a",{href:"/docs/DTGC-V18-White-Paper.docx",download:!0,style:{background:"linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(184,134,11,0.15) 100%)",border:"2px solid rgba(212,175,55,0.4)",borderRadius:"16px",padding:"24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"all 0.3s ease"},children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"📄"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,color:"var(--gold)",fontSize:"1.1rem"},children:"WHITE PAPER"}),l.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Public Overview • V18"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:"4px"},children:"📥 Download .docx"})]})]}),l.jsxs("a",{href:"/docs/DTGC-V18-Gold-Paper-DiamondPlus.docx",download:!0,style:{background:"linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(184,134,11,0.2) 100%)",border:"2px solid rgba(212,175,55,0.5)",borderRadius:"16px",padding:"24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"all 0.3s ease"},children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"📜"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,color:"var(--gold)",fontSize:"1.1rem"},children:"GOLD PAPER"}),l.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Full Tokenomics • Diamond+ Edition"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:"4px"},children:"📥 Download .docx"})]})]}),l.jsxs("a",{href:"/docs/DTGC-V18-Gold-Paper-Quant.docx",download:!0,style:{background:"linear-gradient(135deg, rgba(26,35,126,0.1) 0%, rgba(48,63,159,0.15) 100%)",border:"2px solid rgba(26,35,126,0.4)",borderRadius:"16px",padding:"24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"all 0.3s ease"},children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"📊"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,color:"#5C6BC0",fontSize:"1.1rem"},children:"GOLD PAPER QUANT"}),l.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Risk Analysis • ROI Modeling"}),l.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:"4px"},children:"📥 Download .docx"})]})]})]}),l.jsxs("div",{className:"wp-card",children:[l.jsx("h3",{className:"wp-card-title gold-text",children:"📜 Introduction"}),l.jsxs("div",{className:"wp-card-content",children:[l.jsx("p",{children:"DT Gold Coin (DTGC) is a premium staking protocol built on PulseChain, designed to reward long-term holders while creating sustainable tokenomics through strategic burns and DAO governance."}),l.jsx("p",{children:"Paired with URMOM token, DTGC creates a dual-token ecosystem that benefits both communities through liquidity provision, staking rewards, and deflationary mechanisms."})]})]}),l.jsxs("div",{className:"wp-card",children:[l.jsx("h3",{className:"wp-card-title gold-text",children:"💰 V5 GOLD PAPER TOKENOMICS"}),l.jsxs("div",{className:"wp-card-content",children:[l.jsx("p",{children:l.jsx("strong",{children:"Total Supply: 1,000,000,000 DTGC"})}),l.jsx("p",{style:{color:"var(--gold)",fontWeight:"600",marginBottom:"16px"},children:"⚠️ 91% CONTROLLED • ONLY 9% FLOAT!"}),l.jsxs("table",{className:"tokenomics-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Allocation"}),l.jsx("th",{children:"Amount"}),l.jsx("th",{children:"Percentage"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"🏛️ DAO Pool"}),l.jsx("td",{children:"500,000,000"}),l.jsx("td",{style:{color:"#4CAF50",fontWeight:"700"},children:"50%"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"👨‍💻 Dev Wallet"}),l.jsx("td",{children:"323,000,000"}),l.jsx("td",{children:"32.3%"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"💱 Circulating"}),l.jsx("td",{children:"90,000,000"}),l.jsx("td",{style:{color:"#FF9800"},children:"9%"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"🔒 LP Locked"}),l.jsx("td",{children:"87,000,000"}),l.jsx("td",{children:"8.7%"})]})]})]}),l.jsxs("div",{className:"wp-highlight",children:[l.jsx("strong",{children:"V18 Tax Structure (Optimized for Staker Profitability):"}),l.jsx("br",{}),l.jsxs("div",{style:{marginTop:"8px"},children:[l.jsx("strong",{style:{color:"#4CAF50"},children:"Entry Tax (1.5%):"})," 0.75% DAO • 0.25% Dev • 0.25% DTGC/URMOM LP • 0.15% DTGC/PLS LP • 0.1% Burn",l.jsx("br",{}),l.jsx("br",{}),l.jsx("strong",{style:{color:"#4CAF50"},children:"Exit Tax (1.5%):"})," Same breakdown • ",l.jsx("strong",{children:"Only 3% total fees!"}),l.jsx("br",{}),l.jsx("br",{}),l.jsx("strong",{style:{color:"#FF5722"},children:"EES - Emergency End Stake (12%):"})," 7% DAO • 3% Dev • 2% Auto LP"]})]})]})]}),l.jsxs("div",{className:"wp-card",children:[l.jsx("h3",{className:"wp-card-title gold-text",children:"⭐ V18 Staking Tiers (All Profitable!)"}),l.jsxs("div",{className:"wp-card-content",children:[l.jsxs("table",{className:"tokenomics-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Tier"}),l.jsx("th",{children:"Min $"}),l.jsx("th",{children:"Lock"}),l.jsx("th",{children:"APR"}),l.jsx("th",{children:"Boost"}),l.jsx("th",{children:"Asset"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"🥈 Silver"}),l.jsx("td",{children:"$200"}),l.jsx("td",{children:"60 days"}),l.jsx("td",{children:"22%"}),l.jsx("td",{children:"1x"}),l.jsx("td",{children:"DTGC"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"🥇 Gold"}),l.jsx("td",{children:"$500"}),l.jsx("td",{children:"90 days"}),l.jsx("td",{children:"24%"}),l.jsx("td",{children:"1x"}),l.jsx("td",{children:"DTGC"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"🐋 Whale"}),l.jsx("td",{children:"$10k"}),l.jsx("td",{children:"180 days"}),l.jsx("td",{children:"26%"}),l.jsx("td",{children:"1x"}),l.jsx("td",{children:"DTGC"})]}),l.jsxs("tr",{style:{background:"rgba(0, 188, 212, 0.1)"},children:[l.jsx("td",{children:"💎 Diamond"}),l.jsx("td",{children:"$1,000"}),l.jsx("td",{children:"90 days"}),l.jsx("td",{style:{color:"#00BCD4",fontWeight:"700"},children:"40%"}),l.jsx("td",{style:{color:"#4CAF50",fontWeight:"700"},children:"1.5x"}),l.jsx("td",{children:"DTGC/PLS LP"})]}),l.jsxs("tr",{style:{background:"rgba(156, 39, 176, 0.15)"},children:[l.jsx("td",{children:"💎✨ Diamond+"}),l.jsx("td",{children:"$1,000"}),l.jsx("td",{children:"90 days"}),l.jsx("td",{style:{color:"#9C27B0",fontWeight:"700"},children:"50%"}),l.jsx("td",{style:{color:"#9C27B0",fontWeight:"700"},children:"2x!"}),l.jsx("td",{children:"DTGC/URMOM LP"})]})]})]}),l.jsxs("div",{className:"wp-highlight",children:[l.jsx("strong",{children:"✅ All Tiers Profitable!"})," With only 3% total fees:",l.jsx("br",{}),"Silver: ",l.jsx("span",{style:{color:"#4CAF50"},children:"+0.6% net"})," • Gold: ",l.jsx("span",{style:{color:"#4CAF50"},children:"+2.9% net"})," • Whale: ",l.jsx("span",{style:{color:"#4CAF50"},children:"+9.8% net"}),l.jsx("br",{}),"Diamond: ",l.jsx("span",{style:{color:"#00BCD4"},children:"+11.8% net (60% eff)"})," • Diamond+: ",l.jsx("span",{style:{color:"#9C27B0"},children:"+21.7% net (100% eff)"})]})]})]}),l.jsxs("div",{className:"wp-card",children:[l.jsx("h3",{className:"wp-card-title gold-text",children:"📈 Dynamic APR System"}),l.jsxs("div",{className:"wp-card-content",children:[l.jsx("p",{children:"APR reduces as TVL grows to ensure DAO sustainability:"}),l.jsxs("table",{className:"tokenomics-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"TVL Phase"}),l.jsx("th",{children:"Multiplier"}),l.jsx("th",{children:"Gold APR"}),l.jsx("th",{children:"Diamond APR"}),l.jsx("th",{children:"Diamond+ APR"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{style:{color:"#4CAF50"},children:"Genesis (0-50M)"}),l.jsx("td",{children:"100%"}),l.jsx("td",{children:"24%"}),l.jsx("td",{style:{fontWeight:"700"},children:"60%"}),l.jsx("td",{style:{fontWeight:"700",color:"#9C27B0"},children:"100%"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Early (50-100M)"}),l.jsx("td",{children:"85%"}),l.jsx("td",{children:"20.4%"}),l.jsx("td",{children:"51%"}),l.jsx("td",{style:{color:"#9C27B0"},children:"85%"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{color:"#FFC107"},children:"Growth (100-200M)"}),l.jsx("td",{children:"70%"}),l.jsx("td",{children:"16.8%"}),l.jsx("td",{children:"42%"}),l.jsx("td",{style:{color:"#9C27B0"},children:"70%"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Mature (200-350M)"}),l.jsx("td",{children:"50%"}),l.jsx("td",{children:"12%"}),l.jsx("td",{children:"30%"}),l.jsx("td",{style:{color:"#9C27B0"},children:"50%"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{color:"#FF5722"},children:"Saturated (350-500M)"}),l.jsx("td",{children:"35%"}),l.jsx("td",{children:"8.4%"}),l.jsx("td",{children:"21%"}),l.jsx("td",{style:{color:"#9C27B0"},children:"35%"})]})]})]})]})]}),l.jsxs("div",{className:"wp-card",children:[l.jsx("h3",{className:"wp-card-title gold-text",children:"🔥 Burn History (Live)"}),l.jsxs("div",{className:"wp-card-content",children:[l.jsxs("p",{children:[l.jsxs("strong",{children:[tl(K.totalDeadWallet)," URMOM"]})," (",K.burnPercentage,"% of supply) permanently burned."]}),l.jsxs("div",{className:"wp-highlight",children:[l.jsxs("strong",{children:["🧮 Live Value Calculation ",B.loading?"⏳":"🟢",":"]}),l.jsx("br",{}),tl(K.totalDeadWallet)," URMOM × $",B.urmom.toFixed(7)," = ",l.jsx("strong",{style:{color:"var(--gold)"},children:qn(K.totalDeadWallet*B.urmom)})]}),l.jsxs("p",{children:["Burn Address: ",l.jsx("code",{style:{color:"var(--gold)"},children:we.burn})]})]})]}),l.jsxs("div",{className:"wp-video-section",children:[l.jsxs("video",{className:"wp-video-bg",autoPlay:!0,loop:!0,playsInline:!0,children:[l.jsx("source",{src:dt.whitepaper,type:"video/quicktime"}),l.jsx("source",{src:dt.whitepaper.replace(".mov",".mp4"),type:"video/mp4"})]}),l.jsx("div",{className:"wp-video-overlay",children:l.jsx("h3",{className:"wp-video-text gold-text",children:"DTGC • PREMIUM STAKING"})})]})]}),j==="links"&&l.jsxs("section",{className:"section links-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title gold-text",children:"DT & URMOM: GOLD COIN MARBLE"}),l.jsx("div",{className:"section-divider"})]}),l.jsxs("div",{className:"links-grid",children:[l.jsxs("a",{href:De.xUrmom,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"𝕏"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"URMOM Twitter"}),l.jsx("div",{className:"link-url",children:"@UrmomPulse"})]})]}),l.jsxs("a",{href:De.xDumpTires,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"𝕏"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"Dump Tires Twitter"}),l.jsx("div",{className:"link-url",children:"@Dump_Tires"})]})]}),l.jsxs("a",{href:De.telegram,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"📱"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"Telegram"}),l.jsx("div",{className:"link-url",children:"t.me/urmomPulse"})]})]}),l.jsxs("a",{href:De.website,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"🌐"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"Website"}),l.jsx("div",{className:"link-url",children:"dump.tires"})]})]}),l.jsxs("a",{href:De.dexscreener,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"📊"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"URMOM DexScreener"}),l.jsx("div",{className:"link-url",children:"URMOM/PLS Chart"})]})]}),l.jsxs("a",{href:De.dexscreenerDTGC,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"📊"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"DTGC DexScreener"}),l.jsx("div",{className:"link-url",children:"DTGC/URMOM Chart"})]})]}),l.jsxs("a",{href:De.coingecko,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[l.jsx("span",{className:"link-icon",children:"🦎"}),l.jsxs("div",{className:"link-info",children:[l.jsx("div",{className:"link-name",children:"CoinGecko"}),l.jsx("div",{className:"link-url",children:"URMOM Listing"})]})]})]}),l.jsxs("div",{className:"contracts-section",children:[l.jsx("h3",{className:"contracts-title gold-text",children:"CONTRACT ADDRESSES"}),[{label:"🪙 DTGC Token",addr:we.dtgc},{label:"👩 URMOM Token",addr:we.urmom},{label:"💧 DTGC/URMOM LP",addr:we.lp},{label:"✅ DTGC Staking V2",addr:we.stakingV2},{label:"✅ LP Staking V2",addr:we.lpStakingV2},{label:"🗳️ DAO Voting",addr:we.daoVoting},{label:"🏛️ DAO Treasury",addr:we.daoTreasury},{label:"🔥 Burn Address",addr:we.burn}].map((m,F)=>l.jsxs("div",{className:"contract-row",children:[l.jsx("span",{className:"contract-label",children:m.label}),l.jsx("span",{className:"contract-address",onClick:()=>cu(m.addr),children:m.addr})]},F))]})]}),j==="analytics"&&l.jsxs("section",{className:"section analytics-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title",style:{color:"#2196F3"},children:"📊 DYNAMIC PORTFOLIO ANALYTICS"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginTop:"8px"},children:"Institutional-Grade Hedging & Rebalancing Insights"}),l.jsx("div",{className:"section-divider",style:{background:"linear-gradient(90deg, transparent, #2196F3, transparent)"}})]}),l.jsxs("div",{style:{background:"rgba(33,150,243,0.05)",border:"2px solid rgba(33,150,243,0.3)",borderRadius:"16px",padding:"24px",marginBottom:"24px"},children:[l.jsx("h3",{style:{color:"#2196F3",fontSize:"1.2rem",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:"🎯 OPTIMAL ALLOCATION STRATEGIES"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"16px"},children:[l.jsxs("div",{style:{background:"rgba(76,175,80,0.1)",border:"1px solid rgba(76,175,80,0.3)",borderRadius:"12px",padding:"16px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[l.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:"🛡️ Conservative"}),l.jsx("span",{style:{color:"#4CAF50",fontSize:"0.8rem"},children:"Low Risk"})]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginBottom:"8px"},children:[l.jsx("div",{children:"• 70% Single-Stake (Silver/Gold)"}),l.jsx("div",{children:"• 30% Diamond LP"}),l.jsx("div",{children:"• 0% Diamond+ LP"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"12px",paddingTop:"12px",borderTop:"1px solid rgba(76,175,80,0.2)"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"Expected APR:"}),l.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:"~33%"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"Variance Reduction:"}),l.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:"25%"})]})]}),l.jsxs("div",{style:{background:"rgba(33,150,243,0.1)",border:"2px solid rgba(33,150,243,0.5)",borderRadius:"12px",padding:"16px",position:"relative"},children:[l.jsx("div",{style:{position:"absolute",top:"-10px",right:"12px",background:"#2196F3",color:"#fff",fontSize:"0.65rem",padding:"2px 8px",borderRadius:"4px",fontWeight:"bold"},children:"RECOMMENDED"}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[l.jsx("span",{style:{color:"#2196F3",fontWeight:"bold"},children:"⚖️ Balanced"}),l.jsx("span",{style:{color:"#2196F3",fontSize:"0.8rem"},children:"Optimal Risk/Reward"})]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginBottom:"8px"},children:[l.jsx("div",{children:"• 40% Single-Stake (Gold/Whale)"}),l.jsx("div",{children:"• 30% Diamond LP (DTGC/PLS)"}),l.jsx("div",{children:"• 30% Diamond+ LP (DTGC/URMOM)"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"12px",paddingTop:"12px",borderTop:"1px solid rgba(33,150,243,0.2)"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"Expected APR:"}),l.jsx("span",{style:{color:"#2196F3",fontWeight:"bold"},children:"~57%"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"Variance Reduction:"}),l.jsx("span",{style:{color:"#2196F3",fontWeight:"bold"},children:"50%"})]})]}),l.jsxs("div",{style:{background:"rgba(156,39,176,0.1)",border:"1px solid rgba(156,39,176,0.3)",borderRadius:"12px",padding:"16px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[l.jsx("span",{style:{color:"#9C27B0",fontWeight:"bold"},children:"🚀 Aggressive"}),l.jsx("span",{style:{color:"#9C27B0",fontSize:"0.8rem"},children:"High APR"})]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginBottom:"8px"},children:[l.jsx("div",{children:"• 0% Single-Stake"}),l.jsx("div",{children:"• 50% Diamond LP (DTGC/PLS)"}),l.jsx("div",{children:"• 50% Diamond+ LP (DTGC/URMOM)"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"12px",paddingTop:"12px",borderTop:"1px solid rgba(156,39,176,0.2)"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"Expected APR:"}),l.jsx("span",{style:{color:"#9C27B0",fontWeight:"bold"},children:"~80%"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"Variance Reduction:"}),l.jsx("span",{style:{color:"#9C27B0",fontWeight:"bold"},children:"62%"})]})]})]})]}),l.jsxs("div",{style:{background:"rgba(255,152,0,0.05)",border:"2px solid rgba(255,152,0,0.3)",borderRadius:"16px",padding:"24px",marginBottom:"24px"},children:[l.jsx("h3",{style:{color:"#FF9800",fontSize:"1.2rem",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:"🛡️ DYNAMIC HEDGING ANALYSIS"}),l.jsxs("div",{style:{marginBottom:"20px"},children:[l.jsx("h4",{style:{color:"var(--text-primary)",fontSize:"0.95rem",marginBottom:"12px"},children:"Asset Correlation Matrix (ρ)"}),l.jsx("div",{style:{overflowX:"auto"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{background:"rgba(255,152,0,0.2)"},children:[l.jsx("th",{style:{padding:"10px",textAlign:"left",borderBottom:"1px solid rgba(255,152,0,0.3)"},children:"Asset Pair"}),l.jsx("th",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,152,0,0.3)"},children:"Correlation"}),l.jsx("th",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,152,0,0.3)"},children:"Hedge Quality"}),l.jsx("th",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,152,0,0.3)"},children:"Variance Reduction"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"DTGC / PLS"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"0.72"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#FF9800"},children:"Moderate"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"28%"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"DTGC / URMOM"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"0.45"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#4CAF50"},children:"Good"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#4CAF50",fontWeight:"bold"},children:"55%"})]}),l.jsxs("tr",{style:{background:"rgba(76,175,80,0.1)"},children:[l.jsx("td",{style:{padding:"10px",fontWeight:"bold"},children:"Diamond LP vs Diamond+ LP"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:"0.38"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",color:"#4CAF50",fontWeight:"bold"},children:"Excellent"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",color:"#4CAF50",fontWeight:"bold"},children:"62%"})]})]})]})}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.75rem",marginTop:"8px",fontStyle:"italic"},children:"💡 Lower correlation = Better hedge. Diamond + Diamond+ combination provides optimal cross-asset hedging."})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px"},children:[l.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",borderRadius:"8px",padding:"12px",textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Sharpe Ratio (Unhedged)"}),l.jsx("div",{style:{color:"#F44336",fontSize:"1.4rem",fontWeight:"bold"},children:"0.11"})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",borderRadius:"8px",padding:"12px",textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Sharpe Ratio (Hedged)"}),l.jsx("div",{style:{color:"#4CAF50",fontSize:"1.4rem",fontWeight:"bold"},children:"0.76"})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",borderRadius:"8px",padding:"12px",textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Sortino Ratio"}),l.jsx("div",{style:{color:"#2196F3",fontSize:"1.4rem",fontWeight:"bold"},children:"2.18"})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",borderRadius:"8px",padding:"12px",textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Max Drawdown Reduction"}),l.jsx("div",{style:{color:"#4CAF50",fontSize:"1.4rem",fontWeight:"bold"},children:"-52%"})]})]})]}),l.jsxs("div",{style:{background:"rgba(156,39,176,0.05)",border:"2px solid rgba(156,39,176,0.3)",borderRadius:"16px",padding:"24px",marginBottom:"24px"},children:[l.jsx("h3",{style:{color:"#9C27B0",fontSize:"1.2rem",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:"🔄 DYNAMIC REBALANCING TRIGGERS"}),l.jsx("div",{style:{overflowX:"auto"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{background:"rgba(156,39,176,0.2)"},children:[l.jsx("th",{style:{padding:"10px",textAlign:"left",borderBottom:"1px solid rgba(156,39,176,0.3)"},children:"Signal"}),l.jsx("th",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(156,39,176,0.3)"},children:"Threshold"}),l.jsx("th",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(156,39,176,0.3)"},children:"Action"}),l.jsx("th",{style:{padding:"10px",textAlign:"left",borderBottom:"1px solid rgba(156,39,176,0.3)"},children:"Rationale"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"📈 RSI Overbought"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#F44336"},children:"> 70"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"Reduce LP → Single"}),l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"var(--text-muted)"},children:"Lock gains, reduce IL exposure"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"📉 RSI Oversold"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#4CAF50"},children:"< 30"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"Increase LP allocation"}),l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"var(--text-muted)"},children:"Accumulate at discount via LP"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"⚡ Volatility Spike"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#FF9800"},children:"> 2σ daily"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"Pause rebalancing 48h"}),l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"var(--text-muted)"},children:"Avoid panic trades"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"📅 Time-Based"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"Every 30 days"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"Rebalance to target"}),l.jsx("td",{style:{padding:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"var(--text-muted)"},children:"Maintain optimal allocation"})]}),l.jsxs("tr",{style:{background:"rgba(76,175,80,0.1)"},children:[l.jsx("td",{style:{padding:"10px",fontWeight:"bold"},children:"🎯 Drift Threshold"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",fontWeight:"bold"},children:"±10% from target"}),l.jsx("td",{style:{padding:"10px",textAlign:"center",fontWeight:"bold",color:"#4CAF50"},children:"Immediate rebalance"}),l.jsx("td",{style:{padding:"10px",color:"var(--text-muted)"},children:"Control risk exposure"})]})]})]})}),l.jsxs("div",{style:{marginTop:"20px",padding:"16px",background:"rgba(0,0,0,0.2)",borderRadius:"12px"},children:[l.jsx("h4",{style:{color:"var(--text-primary)",fontSize:"0.95rem",marginBottom:"12px"},children:"💰 Rebalancing Cost Analysis"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"12px"},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{color:"#F44336",fontSize:"0.75rem"},children:"Weekly"}),l.jsx("div",{style:{color:"#F44336",fontWeight:"bold"},children:"~156%/yr"}),l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.7rem"},children:"❌ Too costly"})]}),l.jsxs("div",{style:{textAlign:"center",padding:"8px",background:"rgba(76,175,80,0.2)",borderRadius:"8px"},children:[l.jsx("div",{style:{color:"#4CAF50",fontSize:"0.75rem"},children:"Monthly ✓"}),l.jsx("div",{style:{color:"#4CAF50",fontWeight:"bold"},children:"~36%/yr"}),l.jsx("div",{style:{color:"#4CAF50",fontSize:"0.7rem"},children:"✅ Optimal"})]}),l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{color:"#FF9800",fontSize:"0.75rem"},children:"Quarterly"}),l.jsx("div",{style:{color:"#FF9800",fontWeight:"bold"},children:"~12%/yr"}),l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.7rem"},children:"⚠️ Drift risk"})]}),l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Lock Expiry"}),l.jsx("div",{style:{fontWeight:"bold"},children:"~6%/yr"}),l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.7rem"},children:"⚠️ High drift"})]})]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.75rem",marginTop:"12px",textAlign:"center",fontStyle:"italic"},children:"💡 Recommendation: Rebalance monthly OR when drift exceeds ±10%, whichever comes first"})]})]}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(212,175,55,0.1), rgba(33,150,243,0.1))",border:"2px solid rgba(212,175,55,0.3)",borderRadius:"16px",padding:"24px",marginBottom:"24px"},children:[l.jsx("h3",{style:{color:"#D4AF37",fontSize:"1.2rem",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:"📈 PORTFOLIO FORECASTS: $10,000 INVESTMENT"}),l.jsx("div",{style:{overflowX:"auto"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{background:"rgba(212,175,55,0.2)"},children:[l.jsx("th",{style:{padding:"12px",textAlign:"left",borderBottom:"2px solid rgba(212,175,55,0.5)"},children:"Strategy"}),l.jsx("th",{style:{padding:"12px",textAlign:"center",borderBottom:"2px solid rgba(212,175,55,0.5)"},children:"6 Month"}),l.jsx("th",{style:{padding:"12px",textAlign:"center",borderBottom:"2px solid rgba(212,175,55,0.5)"},children:"12 Month"}),l.jsx("th",{style:{padding:"12px",textAlign:"center",borderBottom:"2px solid rgba(212,175,55,0.5)"},children:"24 Month"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"12px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"🛡️ Conservative (Silver 22%)"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"$10,800"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"$11,900"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"$14,161"})]}),l.jsxs("tr",{style:{background:"rgba(33,150,243,0.1)"},children:[l.jsx("td",{style:{padding:"12px",borderBottom:"1px solid rgba(255,255,255,0.05)",fontWeight:"bold"},children:"⚖️ Balanced Hedge (40/30/30)"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#2196F3",fontWeight:"bold"},children:"$12,850"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#2196F3",fontWeight:"bold"},children:"$16,512"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#2196F3",fontWeight:"bold"},children:"$27,286"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"12px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"🐋 Whale Only (26%)"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"$11,300"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"$12,600"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"$15,876"})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"12px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:"💎 Diamond LP (60%)"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#00BCD4"},children:"$13,000"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#00BCD4"},children:"$16,000"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.05)",color:"#00BCD4"},children:"$25,600"})]}),l.jsxs("tr",{style:{background:"rgba(156,39,176,0.1)"},children:[l.jsx("td",{style:{padding:"12px",fontWeight:"bold"},children:"💎✨ Diamond+ LP (100%)"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",color:"#9C27B0",fontWeight:"bold"},children:"$14,850"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",color:"#9C27B0",fontWeight:"bold"},children:"$20,700"}),l.jsx("td",{style:{padding:"12px",textAlign:"center",color:"#9C27B0",fontWeight:"bold"},children:"$42,849"})]})]})]})}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.75rem",marginTop:"12px",textAlign:"center",fontStyle:"italic"},children:"* Returns shown after 3% total fees. Assumes price stability and continuous compounding."})]}),l.jsxs("div",{style:{background:"rgba(244,67,54,0.05)",border:"2px solid rgba(244,67,54,0.3)",borderRadius:"16px",padding:"24px"},children:[l.jsx("h3",{style:{color:"#F44336",fontSize:"1.2rem",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:"⚠️ VALUE AT RISK (VaR) ANALYSIS"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"16px"},children:"Maximum expected loss at 95% confidence level for $10,000 investment over 12 months:"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:[l.jsxs("div",{style:{background:"rgba(244,67,54,0.1)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginBottom:"8px"},children:"Unhedged (Single Only)"}),l.jsx("div",{style:{color:"#F44336",fontSize:"1.8rem",fontWeight:"bold"},children:"-$8,700"}),l.jsx("div",{style:{color:"#F44336",fontSize:"0.85rem"},children:"(-87%)"})]}),l.jsxs("div",{style:{background:"rgba(255,152,0,0.1)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginBottom:"8px"},children:"Partially Hedged (60/40)"}),l.jsx("div",{style:{color:"#FF9800",fontSize:"1.8rem",fontWeight:"bold"},children:"-$5,200"}),l.jsx("div",{style:{color:"#FF9800",fontSize:"0.85rem"},children:"(-52%)"})]}),l.jsxs("div",{style:{background:"rgba(76,175,80,0.1)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"2px solid rgba(76,175,80,0.5)"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginBottom:"8px"},children:"Optimal Hedge (40/30/30)"}),l.jsx("div",{style:{color:"#4CAF50",fontSize:"1.8rem",fontWeight:"bold"},children:"-$3,500"}),l.jsx("div",{style:{color:"#4CAF50",fontSize:"0.85rem"},children:"(-35%) ✓ Best"})]})]}),l.jsx("div",{style:{marginTop:"20px",padding:"12px",background:"rgba(76,175,80,0.1)",borderRadius:"8px",textAlign:"center"},children:l.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:"🛡️ Dynamic hedging reduces worst-case loss by 60% (from -87% to -35%)"})})]})]})]}),l.jsxs("footer",{className:"footer",children:[l.jsx("div",{className:"footer-logo gold-text",children:"DTGC"}),l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:`${qr}/address/${we.stakingV2}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Staking Contract"}),l.jsx("a",{href:`${qr}/address/${we.lpStakingV2}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"LP Staking"}),l.jsx("a",{href:`${qr}/address/${we.daoVoting}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"DAO Voting"}),l.jsx("a",{href:De.telegram,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Telegram"})]}),l.jsx("div",{className:"footer-divider"}),l.jsx("p",{className:"footer-text",children:"© 2025 DTGC V18 DIAMOND+ EDITION • dump.tires • Premium Staking on PulseChain • Diamond & Diamond+ LP Tiers 💎✨"})]})]}),l.jsx(Jf,{isOpen:tu,onClose:()=>ws(!1),type:nu,amount:pt,tier:Y?"Diamond":(zs=el[je])==null?void 0:zs.name}),cn&&l.jsxs("div",{className:`toast ${cn.type}`,children:[cn.type==="success"&&"✓ ",cn.type==="error"&&"✕ ",cn.type==="info"&&"ℹ ",cn.message]}),l.jsx(Qf,{})]})}Pi.createRoot(document.getElementById("root")).render(l.jsx(Cn.StrictMode,{children:l.jsx(qf,{})}));

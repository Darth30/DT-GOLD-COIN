(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},$l={},Xa={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),kc=Symbol.for("react.portal"),wc=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Fc=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Os=Symbol.iterator;function zc(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var Za={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ja=Object.assign,qa={};function Un(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Za}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eu(){}eu.prototype=Un.prototype;function Po(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Za}var Do=Po.prototype=new eu;Do.constructor=Po;Ja(Do,Un.prototype);Do.isPureReactComponent=!0;var Is=Array.isArray,tu=Object.prototype.hasOwnProperty,Lo={current:null},nu={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,n){var r,l={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)tu.call(t,r)&&!nu.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Lr,type:e,key:o,ref:s,props:l,_owner:Lo.current}}function Pc(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Dc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bs=/\/+/g;function di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dc(""+e.key):t.toString(36)}function il(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Lr:case kc:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+di(s,0):r,Is(l)?(n="",e!=null&&(n=e.replace(Bs,"$&/")+"/"),il(l,t,n,"",function(f){return f})):l!=null&&(Ao(l)&&(l=Pc(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Bs,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Is(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+di(o,a);s+=il(o,t,n,u,l)}else if(u=zc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+di(o,a++),s+=il(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ir(e,t,n){if(e==null)return e;var r=[],l=0;return il(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Lc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},ol={transition:null},Ac={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Lo};function lu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Ir,forEach:function(e,t,n){Ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(e,function(t){return t})||[]},only:function(e){if(!Ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Un;A.Fragment=wc;A.Profiler=jc;A.PureComponent=Po;A.StrictMode=Sc;A.Suspense=Ec;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;A.act=lu;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ja({},e.props),l=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Lo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)tu.call(t,u)&&!nu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Lr,type:e.type,key:l,ref:o,props:r,_owner:s}};A.createContext=function(e){return e={$$typeof:Nc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};A.createElement=ru;A.createFactory=function(e){var t=ru.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:bc,render:e}};A.isValidElement=Ao;A.lazy=function(e){return{$$typeof:Tc,_payload:{_status:-1,_result:e},_init:Lc}};A.memo=function(e,t){return{$$typeof:Fc,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=ol.transition;ol.transition={};try{e()}finally{ol.transition=t}};A.unstable_act=lu;A.useCallback=function(e,t){return be.current.useCallback(e,t)};A.useContext=function(e){return be.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return be.current.useDeferredValue(e)};A.useEffect=function(e,t){return be.current.useEffect(e,t)};A.useId=function(){return be.current.useId()};A.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return be.current.useMemo(e,t)};A.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};A.useRef=function(e){return be.current.useRef(e)};A.useState=function(e){return be.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return be.current.useTransition()};A.version="18.3.1";Xa.exports=A;var z=Xa.exports;const _o=yc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=z,Rc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Oc=Object.prototype.hasOwnProperty,Ic=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,l={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Oc.call(t,r)&&!Bc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rc,type:e,key:o,ref:s,props:l,_owner:Ic.current}}$l.Fragment=Mc;$l.jsx=iu;$l.jsxs=iu;Ka.exports=$l;var i=Ka.exports,Mi={},ou={exports:{}},Oe={},su={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var D=C.length;C.push(P);e:for(;0<D;){var Q=D-1>>>1,ue=C[Q];if(0<l(ue,P))C[Q]=P,C[D]=ue,D=Q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],D=C.pop();if(D!==P){C[0]=D;e:for(var Q=0,ue=C.length,Vn=ue>>>1;Q<Vn;){var ft=2*(Q+1)-1,Et=C[ft],Ft=ft+1,lt=C[Ft];if(0>l(Et,D))Ft<ue&&0>l(lt,Et)?(C[Q]=lt,C[Ft]=D,Q=Ft):(C[Q]=Et,C[ft]=D,Q=ft);else if(Ft<ue&&0>l(lt,D))C[Q]=lt,C[Ft]=D,Q=Ft;else break e}}return P}function l(C,P){var D=C.sortIndex-P.sortIndex;return D!==0?D:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],f=[],x=1,h=null,g=3,k=!1,S=!1,w=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var P=n(f);P!==null;){if(P.callback===null)r(f);else if(P.startTime<=C)r(f),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(f)}}function v(C){if(w=!1,d(C),!S)if(n(u)!==null)S=!0,bt(j);else{var P=n(f);P!==null&&K(v,P.startTime-C)}}function j(C,P){S=!1,w&&(w=!1,p(T),T=-1),k=!0;var D=g;try{for(d(P),h=n(u);h!==null&&(!(h.expirationTime>P)||C&&!Be());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,g=h.priorityLevel;var ue=Q(h.expirationTime<=P);P=e.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(u)&&r(u),d(P)}else r(u);h=n(u)}if(h!==null)var Vn=!0;else{var ft=n(f);ft!==null&&K(v,ft.startTime-P),Vn=!1}return Vn}finally{h=null,g=D,k=!1}}var E=!1,b=null,T=-1,te=5,L=-1;function Be(){return!(e.unstable_now()-L<te)}function Nt(){if(b!==null){var C=e.unstable_now();L=C;var P=!0;try{P=b(!0,C)}finally{P?we():(E=!1,b=null)}}else E=!1}var we;if(typeof c=="function")we=function(){c(Nt)};else if(typeof MessageChannel<"u"){var pn=new MessageChannel,pt=pn.port2;pn.port1.onmessage=Nt,we=function(){pt.postMessage(null)}}else we=function(){O(Nt,0)};function bt(C){b=C,E||(E=!0,we())}function K(C,P){T=O(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,bt(j))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var D=g;g=P;try{return C()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=g;g=C;try{return P()}finally{g=D}},e.unstable_scheduleCallback=function(C,P,D){var Q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,C){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=D+ue,C={id:x++,callback:P,priorityLevel:C,startTime:D,expirationTime:ue,sortIndex:-1},D>Q?(C.sortIndex=D,t(f,C),n(u)===null&&C===n(f)&&(w?(p(T),T=-1):w=!0,K(v,D-Q))):(C.sortIndex=ue,t(u,C),S||k||(S=!0,bt(j))),C},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(C){var P=g;return function(){var D=g;g=P;try{return C.apply(this,arguments)}finally{g=D}}}})(au);su.exports=au;var Uc=su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=z,Me=Uc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,hr={};function dn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(hr[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=Object.prototype.hasOwnProperty,Wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},$s={};function Vc(e){return Oi.call($s,e)?!0:Oi.call(Us,e)?!1:Wc.test(e)?$s[e]=!0:(Us[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,l,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ro=/[\-:]([a-z])/g;function Mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ro,Mo);he[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ro,Mo);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ro,Mo);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oo(e,t,n,r){var l=he.hasOwnProperty(t)?he[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hc(t,n,l,r)&&(n=null),r||l===null?Vc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),hn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),cu=Symbol.for("react.context"),Bo=Symbol.for("react.forward_ref"),Bi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Uo=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),Ws=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ci;function rr(e){if(ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ci=t&&t[1]||""}return`
`+ci+e}var pi=!1;function fi(e,t){if(!e||pi)return"";pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,a=o.length-1;1<=s&&0<=a&&l[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==o[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function Qc(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=fi(e.type,!1),e;case 11:return e=fi(e.type.render,!1),e;case 1:return e=fi(e.type,!0),e;default:return""}}function $i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case hn:return"Portal";case Ii:return"Profiler";case Io:return"StrictMode";case Bi:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case Bo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uo:return t=e.displayName||null,t!==null?t:$i(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return $i(e(t))}catch{}}return null}function Yc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $i(t);case 8:return t===Io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kc(e){var t=fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=Kc(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&Oo(e,"checked",t,!1)}function Vi(e,t){gu(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gi(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gi(e,t,n){(t!=="number"||vl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(lr(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function hu(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,vu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Xc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function yu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=yu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Zc=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Tn=null,zn=null;function Ys(e){if(e=Rr(e)){if(typeof Zi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Ql(t),Zi(e.stateNode,e.type,t))}}function wu(e){Tn?zn?zn.push(e):zn=[e]:Tn=e}function Su(){if(Tn){var e=Tn,t=zn;if(zn=Tn=null,Ys(e),t)for(e=0;e<t.length;e++)Ys(t[e])}}function ju(e,t){return e(t)}function Cu(){}var mi=!1;function Nu(e,t,n){if(mi)return e(t,n);mi=!0;try{return ju(e,t,n)}finally{mi=!1,(Tn!==null||zn!==null)&&(Cu(),Su())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ql(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Ji=!1;if(kt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Ji=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Ji=!1}function Jc(e,t,n,r,l,o,s,a,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(x){this.onError(x)}}var ar=!1,yl=null,kl=!1,qi=null,qc={onError:function(e){ar=!0,yl=e}};function ep(e,t,n,r,l,o,s,a,u){ar=!1,yl=null,Jc.apply(qc,arguments)}function tp(e,t,n,r,l,o,s,a,u){if(ep.apply(this,arguments),ar){if(ar){var f=yl;ar=!1,yl=null}else throw Error(y(198));kl||(kl=!0,qi=f)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(cn(e)!==e)throw Error(y(188))}function np(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ks(l),e;if(o===r)return Ks(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Eu(e){return e=np(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Tu=Me.unstable_scheduleCallback,Xs=Me.unstable_cancelCallback,rp=Me.unstable_shouldYield,lp=Me.unstable_requestPaint,ie=Me.unstable_now,ip=Me.unstable_getCurrentPriorityLevel,Wo=Me.unstable_ImmediatePriority,zu=Me.unstable_UserBlockingPriority,wl=Me.unstable_NormalPriority,op=Me.unstable_LowPriority,Pu=Me.unstable_IdlePriority,Wl=null,dt=null;function sp(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:dp,ap=Math.log,up=Math.LN2;function dp(e){return e>>>=0,e===0?32:31-(ap(e)/up|0)|0}var Wr=64,Vr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=ir(a):(o&=s,o!==0&&(r=ir(o)))}else s=n&~l,s!==0?r=ir(s):o!==0&&(r=ir(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),l=1<<n,r|=e[n],t&=~l;return r}function cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),a=1<<s,u=l[s];u===-1?(!(a&n)||a&r)&&(l[s]=cp(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function fp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-tt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,Go,_u,Ru,Mu,to=!1,Gr=[],Ot=null,It=null,Bt=null,yr=new Map,kr=new Map,At=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zs(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Xn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Rr(t),t!==null&&Go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gp(e,t,n,r,l){switch(t){case"focusin":return Ot=Xn(Ot,e,t,n,r,l),!0;case"dragenter":return It=Xn(It,e,t,n,r,l),!0;case"mouseover":return Bt=Xn(Bt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return yr.set(o,Xn(yr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,kr.set(o,Xn(kr.get(o)||null,e,t,n,r,l)),!0}return!1}function Ou(e){var t=qt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,Mu(e.priority,function(){_u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=no(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xi=r,n.target.dispatchEvent(r),Xi=null}else return t=Rr(n),t!==null&&Go(t),e.blockedOn=n,!1;t.shift()}return!0}function Js(e,t,n){sl(e)&&n.delete(t)}function hp(){to=!1,Ot!==null&&sl(Ot)&&(Ot=null),It!==null&&sl(It)&&(It=null),Bt!==null&&sl(Bt)&&(Bt=null),yr.forEach(Js),kr.forEach(Js)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,hp)))}function wr(e){function t(l){return Zn(l,e)}if(0<Gr.length){Zn(Gr[0],e);for(var n=1;n<Gr.length;n++){var r=Gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&Zn(Ot,e),It!==null&&Zn(It,e),Bt!==null&&Zn(Bt,e),yr.forEach(t),kr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Ou(n),n.blockedOn===null&&At.shift()}var Pn=Ct.ReactCurrentBatchConfig,jl=!0;function xp(e,t,n,r){var l=I,o=Pn.transition;Pn.transition=null;try{I=1,Ho(e,t,n,r)}finally{I=l,Pn.transition=o}}function vp(e,t,n,r){var l=I,o=Pn.transition;Pn.transition=null;try{I=4,Ho(e,t,n,r)}finally{I=l,Pn.transition=o}}function Ho(e,t,n,r){if(jl){var l=no(e,t,n,r);if(l===null)Ni(e,t,r,Cl,n),Zs(e,r);else if(gp(l,e,t,n,r))r.stopPropagation();else if(Zs(e,r),t&4&&-1<mp.indexOf(e)){for(;l!==null;){var o=Rr(l);if(o!==null&&Au(o),o=no(e,t,n,r),o===null&&Ni(e,t,r,Cl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ni(e,t,r,null,n)}}var Cl=null;function no(e,t,n,r){if(Cl=null,e=$o(r),e=qt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cl=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ip()){case Wo:return 1;case zu:return 4;case wl:case op:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var Rt=null,Qo=null,al=null;function Bu(){if(al)return al;var e,t=Qo,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[o-r];r++);return al=l.slice(e,1<r?1-r:void 0)}function ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function qs(){return!1}function Ie(e){function t(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hr:qs,this.isPropagationStopped=qs,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Ie($n),_r=ee({},$n,{view:0,detail:0}),yp=Ie(_r),hi,xi,Jn,Vl=ee({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(hi=e.screenX-Jn.screenX,xi=e.screenY-Jn.screenY):xi=hi=0,Jn=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:xi}}),ea=Ie(Vl),kp=ee({},Vl,{dataTransfer:0}),wp=Ie(kp),Sp=ee({},_r,{relatedTarget:0}),vi=Ie(Sp),jp=ee({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Ie(jp),Np=ee({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=Ie(Np),Ep=ee({},$n,{data:0}),ta=Ie(Ep),Fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zp[e])?!!t[e]:!1}function Ko(){return Pp}var Dp=ee({},_r,{key:function(e){if(e.key){var t=Fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ko,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=Ie(Dp),Ap=ee({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=Ie(Ap),_p=ee({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ko}),Rp=Ie(_p),Mp=ee({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=Ie(Mp),Ip=ee({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Ie(Ip),Up=[9,13,27,32],Xo=kt&&"CompositionEvent"in window,ur=null;kt&&"documentMode"in document&&(ur=document.documentMode);var $p=kt&&"TextEvent"in window&&!ur,Uu=kt&&(!Xo||ur&&8<ur&&11>=ur),ra=" ",la=!1;function $u(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Wp(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:(la=!0,ra);case"textInput":return e=t.data,e===ra&&la?null:e;default:return null}}function Vp(e,t){if(vn)return e==="compositionend"||!Xo&&$u(e,t)?(e=Bu(),al=Qo=Rt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uu&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Vu(e,t,n,r){wu(r),t=Nl(t,"onChange"),0<t.length&&(n=new Yo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,Sr=null;function Hp(e){td(e,0)}function Gl(e){var t=wn(e);if(mu(t))return e}function Qp(e,t){if(e==="change")return t}var Gu=!1;if(kt){var yi;if(kt){var ki="oninput"in document;if(!ki){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),ki=typeof oa.oninput=="function"}yi=ki}else yi=!1;Gu=yi&&(!document.documentMode||9<document.documentMode)}function sa(){dr&&(dr.detachEvent("onpropertychange",Hu),Sr=dr=null)}function Hu(e){if(e.propertyName==="value"&&Gl(Sr)){var t=[];Vu(t,Sr,e,$o(e)),Nu(Hp,t)}}function Yp(e,t,n){e==="focusin"?(sa(),dr=t,Sr=n,dr.attachEvent("onpropertychange",Hu)):e==="focusout"&&sa()}function Kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(Sr)}function Xp(e,t){if(e==="click")return Gl(t)}function Zp(e,t){if(e==="input"||e==="change")return Gl(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Jp;function jr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Oi.call(t,l)||!rt(e[l],t[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(){for(var e=window,t=vl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vl(e.document)}return t}function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qp(e){var t=Yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&Zo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ua(n,o);var s=ua(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ef=kt&&"documentMode"in document&&11>=document.documentMode,yn=null,ro=null,cr=null,lo=!1;function da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lo||yn==null||yn!==vl(r)||(r=yn,"selectionStart"in r&&Zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&jr(cr,r)||(cr=r,r=Nl(ro,"onSelect"),0<r.length&&(t=new Yo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},wi={},Ku={};kt&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Hl(e){if(wi[e])return wi[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ku)return wi[e]=t[n];return e}var Xu=Hl("animationend"),Zu=Hl("animationiteration"),Ju=Hl("animationstart"),qu=Hl("transitionend"),ed=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){ed.set(e,t),dn(t,[e])}for(var Si=0;Si<ca.length;Si++){var ji=ca[Si],tf=ji.toLowerCase(),nf=ji[0].toUpperCase()+ji.slice(1);Yt(tf,"on"+nf)}Yt(Xu,"onAnimationEnd");Yt(Zu,"onAnimationIteration");Yt(Ju,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(qu,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tp(r,t,void 0,e),e.currentTarget=null}function td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,f=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;pa(l,a,f),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,f=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;pa(l,a,f),o=u}}}if(kl)throw e=qi,kl=!1,qi=null,e}function G(e,t){var n=t[uo];n===void 0&&(n=t[uo]=new Set);var r=e+"__bubble";n.has(r)||(nd(t,e,2,!1),n.add(r))}function Ci(e,t,n){var r=0;t&&(r|=4),nd(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[Yr]){e[Yr]=!0,uu.forEach(function(n){n!=="selectionchange"&&(rf.has(n)||Ci(n,!1,e),Ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,Ci("selectionchange",!1,t))}}function nd(e,t,n,r){switch(Iu(t)){case 1:var l=xp;break;case 4:l=vp;break;default:l=Ho}n=l.bind(null,t,n,e),l=void 0,!Ji||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ni(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=qt(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Nu(function(){var f=o,x=$o(n),h=[];e:{var g=ed.get(e);if(g!==void 0){var k=Yo,S=e;switch(e){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":k=Lp;break;case"focusin":S="focus",k=vi;break;case"focusout":S="blur",k=vi;break;case"beforeblur":case"afterblur":k=vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Rp;break;case Xu:case Zu:case Ju:k=Cp;break;case qu:k=Op;break;case"scroll":k=yp;break;case"wheel":k=Bp;break;case"copy":case"cut":case"paste":k=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=na}var w=(t&4)!==0,O=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var c=f,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,p!==null&&(v=vr(c,p),v!=null&&w.push(Nr(c,v,d)))),O)break;c=c.return}0<w.length&&(g=new k(g,S,null,n,x),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Xi&&(S=n.relatedTarget||n.fromElement)&&(qt(S)||S[wt]))break e;if((k||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=f,S=S?qt(S):null,S!==null&&(O=cn(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=f),k!==S)){if(w=ea,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=na,v="onPointerLeave",p="onPointerEnter",c="pointer"),O=k==null?g:wn(k),d=S==null?g:wn(S),g=new w(v,c+"leave",k,n,x),g.target=O,g.relatedTarget=d,v=null,qt(x)===f&&(w=new w(p,c+"enter",S,n,x),w.target=d,w.relatedTarget=O,v=w),O=v,k&&S)t:{for(w=k,p=S,c=0,d=w;d;d=gn(d))c++;for(d=0,v=p;v;v=gn(v))d++;for(;0<c-d;)w=gn(w),c--;for(;0<d-c;)p=gn(p),d--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=gn(w),p=gn(p)}w=null}else w=null;k!==null&&fa(h,g,k,w,!1),S!==null&&O!==null&&fa(h,O,S,w,!0)}}e:{if(g=f?wn(f):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var j=Qp;else if(ia(g))if(Gu)j=Zp;else{j=Kp;var E=Yp}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Xp);if(j&&(j=j(e,f))){Vu(h,j,n,x);break e}E&&E(e,g,f),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Gi(g,"number",g.value)}switch(E=f?wn(f):window,e){case"focusin":(ia(E)||E.contentEditable==="true")&&(yn=E,ro=f,cr=null);break;case"focusout":cr=ro=yn=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,da(h,n,x);break;case"selectionchange":if(ef)break;case"keydown":case"keyup":da(h,n,x)}var b;if(Xo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else vn?$u(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Uu&&n.locale!=="ko"&&(vn||T!=="onCompositionStart"?T==="onCompositionEnd"&&vn&&(b=Bu()):(Rt=x,Qo="value"in Rt?Rt.value:Rt.textContent,vn=!0)),E=Nl(f,T),0<E.length&&(T=new ta(T,e,null,n,x),h.push({event:T,listeners:E}),b?T.data=b:(b=Wu(n),b!==null&&(T.data=b)))),(b=$p?Wp(e,n):Vp(e,n))&&(f=Nl(f,"onBeforeInput"),0<f.length&&(x=new ta("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:f}),x.data=b))}td(h,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=vr(e,n),o!=null&&r.unshift(Nr(e,o,l)),o=vr(e,t),o!=null&&r.push(Nr(e,o,l))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,l){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,f=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&f!==null&&(a=f,l?(u=vr(n,o),u!=null&&s.unshift(Nr(n,u,a))):l||(u=vr(n,o),u!=null&&s.push(Nr(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var lf=/\r\n?/g,of=/\u0000|\uFFFD/g;function ma(e){return(typeof e=="string"?e:""+e).replace(lf,`
`).replace(of,"")}function Kr(e,t,n){if(t=ma(t),ma(e)!==t&&n)throw Error(y(425))}function bl(){}var io=null,oo=null;function so(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,af=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(uf)}:ao;function uf(e){setTimeout(function(){throw e})}function bi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);wr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),at="__reactFiber$"+Wn,br="__reactProps$"+Wn,wt="__reactContainer$"+Wn,uo="__reactEvents$"+Wn,df="__reactListeners$"+Wn,cf="__reactHandles$"+Wn;function qt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ha(e);e!==null;){if(n=e[at])return n;e=ha(e)}return t}e=n,n=e.parentNode}return null}function Rr(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Ql(e){return e[br]||null}var co=[],Sn=-1;function Kt(e){return{current:e}}function H(e){0>Sn||(e.current=co[Sn],co[Sn]=null,Sn--)}function V(e,t){Sn++,co[Sn]=e.current,e.current=t}var Qt={},ke=Kt(Qt),ze=Kt(!1),ln=Qt;function _n(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pe(e){return e=e.childContextTypes,e!=null}function El(){H(ze),H(ke)}function xa(e,t,n){if(ke.current!==Qt)throw Error(y(168));V(ke,t),V(ze,n)}function rd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Yc(e)||"Unknown",l));return ee({},n,r)}function Fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,ln=ke.current,V(ke,e),V(ze,ze.current),!0}function va(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=rd(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,H(ze),H(ke),V(ke,e)):H(ze),V(ze,n)}var ht=null,Yl=!1,Ei=!1;function ld(e){ht===null?ht=[e]:ht.push(e)}function pf(e){Yl=!0,ld(e)}function Xt(){if(!Ei&&ht!==null){Ei=!0;var e=0,t=I;try{var n=ht;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Yl=!1}catch(l){throw ht!==null&&(ht=ht.slice(e+1)),Tu(Wo,Xt),l}finally{I=t,Ei=!1}}return null}var jn=[],Cn=0,Tl=null,zl=0,Ve=[],Ge=0,on=null,xt=1,vt="";function Zt(e,t){jn[Cn++]=zl,jn[Cn++]=Tl,Tl=e,zl=t}function id(e,t,n){Ve[Ge++]=xt,Ve[Ge++]=vt,Ve[Ge++]=on,on=e;var r=xt;e=vt;var l=32-tt(r)-1;r&=~(1<<l),n+=1;var o=32-tt(t)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,xt=1<<32-tt(t)+l|n<<l|r,vt=o+e}else xt=1<<o|n<<l|r,vt=e}function Jo(e){e.return!==null&&(Zt(e,1),id(e,1,0))}function qo(e){for(;e===Tl;)Tl=jn[--Cn],jn[Cn]=null,zl=jn[--Cn],jn[Cn]=null;for(;e===on;)on=Ve[--Ge],Ve[Ge]=null,vt=Ve[--Ge],Ve[Ge]=null,xt=Ve[--Ge],Ve[Ge]=null}var Re=null,_e=null,Y=!1,et=null;function od(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,_e=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:xt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,_e=null,!0):!1;default:return!1}}function po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fo(e){if(Y){var t=_e;if(t){var n=t;if(!ya(e,t)){if(po(e))throw Error(y(418));t=Ut(n.nextSibling);var r=Re;t&&ya(e,t)?od(r,n):(e.flags=e.flags&-4097|2,Y=!1,Re=e)}}else{if(po(e))throw Error(y(418));e.flags=e.flags&-4097|2,Y=!1,Re=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Xr(e){if(e!==Re)return!1;if(!Y)return ka(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!so(e.type,e.memoizedProps)),t&&(t=_e)){if(po(e))throw sd(),Error(y(418));for(;t;)od(e,t),t=Ut(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Re?Ut(e.stateNode.nextSibling):null;return!0}function sd(){for(var e=_e;e;)e=Ut(e.nextSibling)}function Rn(){_e=Re=null,Y=!1}function es(e){et===null?et=[e]:et.push(e)}var ff=Ct.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=l.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){var t=e._init;return t(e._payload)}function ad(e){function t(p,c){if(e){var d=p.deletions;d===null?(p.deletions=[c],p.flags|=16):d.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Gt(p,c),p.index=0,p.sibling=null,p}function o(p,c,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<c?(p.flags|=2,c):d):(p.flags|=2,c)):(p.flags|=1048576,c)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,d,v){return c===null||c.tag!==6?(c=Ai(d,p.mode,v),c.return=p,c):(c=l(c,d),c.return=p,c)}function u(p,c,d,v){var j=d.type;return j===xn?x(p,c,d.props.children,v,d.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&wa(j)===c.type)?(v=l(c,d.props),v.ref=qn(p,c,d),v.return=p,v):(v=hl(d.type,d.key,d.props,null,p.mode,v),v.ref=qn(p,c,d),v.return=p,v)}function f(p,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=_i(d,p.mode,v),c.return=p,c):(c=l(c,d.children||[]),c.return=p,c)}function x(p,c,d,v,j){return c===null||c.tag!==7?(c=rn(d,p.mode,v,j),c.return=p,c):(c=l(c,d),c.return=p,c)}function h(p,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ai(""+c,p.mode,d),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Br:return d=hl(c.type,c.key,c.props,null,p.mode,d),d.ref=qn(p,null,c),d.return=p,d;case hn:return c=_i(c,p.mode,d),c.return=p,c;case Dt:var v=c._init;return h(p,v(c._payload),d)}if(lr(c)||Yn(c))return c=rn(c,p.mode,d,null),c.return=p,c;Zr(p,c)}return null}function g(p,c,d,v){var j=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return j!==null?null:a(p,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Br:return d.key===j?u(p,c,d,v):null;case hn:return d.key===j?f(p,c,d,v):null;case Dt:return j=d._init,g(p,c,j(d._payload),v)}if(lr(d)||Yn(d))return j!==null?null:x(p,c,d,v,null);Zr(p,d)}return null}function k(p,c,d,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(d)||null,a(c,p,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Br:return p=p.get(v.key===null?d:v.key)||null,u(c,p,v,j);case hn:return p=p.get(v.key===null?d:v.key)||null,f(c,p,v,j);case Dt:var E=v._init;return k(p,c,d,E(v._payload),j)}if(lr(v)||Yn(v))return p=p.get(d)||null,x(c,p,v,j,null);Zr(c,v)}return null}function S(p,c,d,v){for(var j=null,E=null,b=c,T=c=0,te=null;b!==null&&T<d.length;T++){b.index>T?(te=b,b=null):te=b.sibling;var L=g(p,b,d[T],v);if(L===null){b===null&&(b=te);break}e&&b&&L.alternate===null&&t(p,b),c=o(L,c,T),E===null?j=L:E.sibling=L,E=L,b=te}if(T===d.length)return n(p,b),Y&&Zt(p,T),j;if(b===null){for(;T<d.length;T++)b=h(p,d[T],v),b!==null&&(c=o(b,c,T),E===null?j=b:E.sibling=b,E=b);return Y&&Zt(p,T),j}for(b=r(p,b);T<d.length;T++)te=k(b,p,T,d[T],v),te!==null&&(e&&te.alternate!==null&&b.delete(te.key===null?T:te.key),c=o(te,c,T),E===null?j=te:E.sibling=te,E=te);return e&&b.forEach(function(Be){return t(p,Be)}),Y&&Zt(p,T),j}function w(p,c,d,v){var j=Yn(d);if(typeof j!="function")throw Error(y(150));if(d=j.call(d),d==null)throw Error(y(151));for(var E=j=null,b=c,T=c=0,te=null,L=d.next();b!==null&&!L.done;T++,L=d.next()){b.index>T?(te=b,b=null):te=b.sibling;var Be=g(p,b,L.value,v);if(Be===null){b===null&&(b=te);break}e&&b&&Be.alternate===null&&t(p,b),c=o(Be,c,T),E===null?j=Be:E.sibling=Be,E=Be,b=te}if(L.done)return n(p,b),Y&&Zt(p,T),j;if(b===null){for(;!L.done;T++,L=d.next())L=h(p,L.value,v),L!==null&&(c=o(L,c,T),E===null?j=L:E.sibling=L,E=L);return Y&&Zt(p,T),j}for(b=r(p,b);!L.done;T++,L=d.next())L=k(b,p,T,L.value,v),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?T:L.key),c=o(L,c,T),E===null?j=L:E.sibling=L,E=L);return e&&b.forEach(function(Nt){return t(p,Nt)}),Y&&Zt(p,T),j}function O(p,c,d,v){if(typeof d=="object"&&d!==null&&d.type===xn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Br:e:{for(var j=d.key,E=c;E!==null;){if(E.key===j){if(j=d.type,j===xn){if(E.tag===7){n(p,E.sibling),c=l(E,d.props.children),c.return=p,p=c;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&wa(j)===E.type){n(p,E.sibling),c=l(E,d.props),c.ref=qn(p,E,d),c.return=p,p=c;break e}n(p,E);break}else t(p,E);E=E.sibling}d.type===xn?(c=rn(d.props.children,p.mode,v,d.key),c.return=p,p=c):(v=hl(d.type,d.key,d.props,null,p.mode,v),v.ref=qn(p,c,d),v.return=p,p=v)}return s(p);case hn:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(p,c.sibling),c=l(c,d.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=_i(d,p.mode,v),c.return=p,p=c}return s(p);case Dt:return E=d._init,O(p,c,E(d._payload),v)}if(lr(d))return S(p,c,d,v);if(Yn(d))return w(p,c,d,v);Zr(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,d),c.return=p,p=c):(n(p,c),c=Ai(d,p.mode,v),c.return=p,p=c),s(p)):n(p,c)}return O}var Mn=ad(!0),ud=ad(!1),Pl=Kt(null),Dl=null,Nn=null,ts=null;function ns(){ts=Nn=Dl=null}function rs(e){var t=Pl.current;H(Pl),e._currentValue=t}function mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Dl=e,ts=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(ts!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(Dl===null)throw Error(y(308));Nn=e,Dl.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var en=null;function ls(e){en===null?en=[e]:en.push(e)}function dd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ls(t)):(n.next=l.next,l.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,St(e,n)}return l=r.interleaved,l===null?(t.next=t,ls(r)):(t.next=l.next,l.next=t),r.interleaved=t,St(e,n)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vo(e,n)}}function Sa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ll(e,t,n,r){var l=e.updateQueue;Lt=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,f=u.next;u.next=null,s===null?o=f:s.next=f,s=u;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==s&&(a===null?x.firstBaseUpdate=f:a.next=f,x.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;s=0,x=f=u=null,a=o;do{var g=a.lane,k=a.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(g=t,k=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(k,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,g=typeof S=="function"?S.call(k,h,g):S,g==null)break e;h=ee({},h,g);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(f=x=k,u=h):x=x.next=k,s|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(x===null&&(u=h),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=h}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var Mr={},ct=Kt(Mr),Er=Kt(Mr),Fr=Kt(Mr);function tn(e){if(e===Mr)throw Error(y(174));return e}function os(e,t){switch(V(Fr,t),V(Er,e),V(ct,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qi(t,e)}H(ct),V(ct,t)}function On(){H(ct),H(Er),H(Fr)}function pd(e){tn(Fr.current);var t=tn(ct.current),n=Qi(t,e.type);t!==n&&(V(Er,e),V(ct,n))}function ss(e){Er.current===e&&(H(ct),H(Er))}var J=Kt(0);function Al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function as(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var cl=Ct.ReactCurrentDispatcher,Ti=Ct.ReactCurrentBatchConfig,sn=0,q=null,de=null,pe=null,_l=!1,pr=!1,Tr=0,mf=0;function xe(){throw Error(y(321))}function us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,l,o){if(sn=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cl.current=e===null||e.memoizedState===null?vf:yf,e=n(r,l),pr){o=0;do{if(pr=!1,Tr=0,25<=o)throw Error(y(301));o+=1,pe=de=null,t.updateQueue=null,cl.current=kf,e=n(r,l)}while(pr)}if(cl.current=Rl,t=de!==null&&de.next!==null,sn=0,pe=de=q=null,_l=!1,t)throw Error(y(300));return e}function cs(){var e=Tr!==0;return Tr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?q.memoizedState=pe=e:pe=pe.next=e,pe}function Ke(){if(de===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=pe===null?q.memoizedState:pe.next;if(t!==null)pe=t,de=e;else{if(e===null)throw Error(y(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?q.memoizedState=pe=e:pe=pe.next=e}return pe}function zr(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=Ke(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=de,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=s=null,u=null,f=o;do{var x=f.lane;if((sn&x)===x)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:x,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,q.lanes|=x,an|=x}f=f.next}while(f!==null&&f!==o);u===null?s=r:u.next=a,rt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,q.lanes|=o,an|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pi(e){var t=Ke(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);rt(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fd(){}function md(e,t){var n=q,r=Ke(),l=t(),o=!rt(r.memoizedState,l);if(o&&(r.memoizedState=l,Te=!0),r=r.queue,ps(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Pr(9,hd.bind(null,n,r,l,t),void 0,null),fe===null)throw Error(y(349));sn&30||gd(n,t,l)}return l}function gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hd(e,t,n,r){t.value=n,t.getSnapshot=r,vd(t)&&yd(e)}function xd(e,t,n){return n(function(){vd(t)&&yd(e)})}function vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function yd(e){var t=St(e,1);t!==null&&nt(t,e,1,-1)}function Ca(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=xf.bind(null,q,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kd(){return Ke().memoizedState}function pl(e,t,n,r){var l=st();q.flags|=e,l.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Kl(e,t,n,r){var l=Ke();r=r===void 0?null:r;var o=void 0;if(de!==null){var s=de.memoizedState;if(o=s.destroy,r!==null&&us(r,s.deps)){l.memoizedState=Pr(t,n,o,r);return}}q.flags|=e,l.memoizedState=Pr(1|t,n,o,r)}function Na(e,t){return pl(8390656,8,e,t)}function ps(e,t){return Kl(2048,8,e,t)}function wd(e,t){return Kl(4,2,e,t)}function Sd(e,t){return Kl(4,4,e,t)}function jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,jd.bind(null,t,e),n)}function fs(){}function Nd(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ed(e,t,n){return sn&21?(rt(n,t)||(n=Du(),q.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function gf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ti.transition;Ti.transition={};try{e(!1),t()}finally{I=n,Ti.transition=r}}function Fd(){return Ke().memoizedState}function hf(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Td(e))zd(t,n);else if(n=dd(e,t,n,r),n!==null){var l=Ne();nt(n,e,r,l),Pd(n,t,r)}}function xf(e,t,n){var r=Vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Td(e))zd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(l.hasEagerState=!0,l.eagerState=a,rt(a,s)){var u=t.interleaved;u===null?(l.next=l,ls(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=dd(e,t,l,r),n!==null&&(l=Ne(),nt(n,e,r,l),Pd(n,t,r))}}function Td(e){var t=e.alternate;return e===q||t!==null&&t===q}function zd(e,t){pr=_l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vo(e,n)}}var Rl={readContext:Ye,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},vf={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Na,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pl(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){return pl(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hf.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Ca,useDebugValue:fs,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Ca(!1),t=e[0];return e=gf.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,l=st();if(Y){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),fe===null)throw Error(y(349));sn&30||gd(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Na(xd.bind(null,r,o,e),[e]),r.flags|=2048,Pr(9,hd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=fe.identifierPrefix;if(Y){var n=vt,r=xt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yf={readContext:Ye,useCallback:Nd,useContext:Ye,useEffect:ps,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:Sd,useMemo:bd,useReducer:zi,useRef:kd,useState:function(){return zi(zr)},useDebugValue:fs,useDeferredValue:function(e){var t=Ke();return Ed(t,de.memoizedState,e)},useTransition:function(){var e=zi(zr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:fd,useSyncExternalStore:md,useId:Fd,unstable_isNewReconciler:!1},kf={readContext:Ye,useCallback:Nd,useContext:Ye,useEffect:ps,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:Sd,useMemo:bd,useReducer:Pi,useRef:kd,useState:function(){return Pi(zr)},useDebugValue:fs,useDeferredValue:function(e){var t=Ke();return de===null?t.memoizedState=e:Ed(t,de.memoizedState,e)},useTransition:function(){var e=Pi(zr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:fd,useSyncExternalStore:md,useId:Fd,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xl={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),l=Vt(e),o=yt(r,l);o.payload=t,n!=null&&(o.callback=n),t=$t(e,o,l),t!==null&&(nt(t,e,l,r),dl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),l=Vt(e),o=yt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$t(e,o,l),t!==null&&(nt(t,e,l,r),dl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Vt(e),l=yt(n,r);l.tag=2,t!=null&&(l.callback=t),t=$t(e,l,r),t!==null&&(nt(t,e,r,n),dl(t,e,r))}};function ba(e,t,n,r,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(l,o):!0}function Dd(e,t,n){var r=!1,l=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(l=Pe(t)?ln:ke.current,r=t.contextTypes,o=(r=r!=null)?_n(e,l):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xl.enqueueReplaceState(t,t.state,null)}function ho(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},is(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ye(o):(o=Pe(t)?ln:ke.current,l.context=_n(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(go(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Xl.enqueueReplaceState(l,l.state,null),Ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=Qc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Di(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wf=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,Eo=r),xo(e,t)},n}function Ad(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){xo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xo(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Ta(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var Sf=Ct.ReactCurrentOwner,Te=!1;function Ce(e,t,n,r){t.child=e===null?ud(t,null,n,r):Mn(t,e.child,n,r)}function Pa(e,t,n,r,l){n=n.render;var o=t.ref;return Dn(t,l),r=ds(e,t,n,r,o,l),n=cs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(Y&&n&&Jo(t),t.flags|=1,Ce(e,t,r,l),t.child)}function Da(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_d(e,t,o,r,l)):(e=hl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return jt(e,t,l)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function _d(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,jt(e,t,l)}return vo(e,t,n,r,l)}function Rd(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(En,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(En,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(En,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(En,Ae),Ae|=r;return Ce(e,t,l,n),t.child}function Md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vo(e,t,n,r,l){var o=Pe(n)?ln:ke.current;return o=_n(t,o),Dn(t,l),n=ds(e,t,n,r,o,l),r=cs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(Y&&r&&Jo(t),t.flags|=1,Ce(e,t,n,l),t.child)}function La(e,t,n,r,l){if(Pe(n)){var o=!0;Fl(t)}else o=!1;if(Dn(t,l),t.stateNode===null)fl(e,t),Dd(t,n,r),ho(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ye(f):(f=Pe(n)?ln:ke.current,f=_n(t,f));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==f)&&Ea(t,s,r,f),Lt=!1;var g=t.memoizedState;s.state=g,Ll(t,r,s,l),u=t.memoizedState,a!==r||g!==u||ze.current||Lt?(typeof x=="function"&&(go(t,n,x,r),u=t.memoizedState),(a=Lt||ba(t,n,a,r,g,u,f))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=f,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cd(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Je(t.type,a),s.props=f,h=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ye(u):(u=Pe(n)?ln:ke.current,u=_n(t,u));var k=n.getDerivedStateFromProps;(x=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==u)&&Ea(t,s,r,u),Lt=!1,g=t.memoizedState,s.state=g,Ll(t,r,s,l);var S=t.memoizedState;a!==h||g!==S||ze.current||Lt?(typeof k=="function"&&(go(t,n,k,r),S=t.memoizedState),(f=Lt||ba(t,n,f,r,g,S,u)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=u,r=f):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return yo(e,t,n,r,o,l)}function yo(e,t,n,r,l,o){Md(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&va(t,n,!1),jt(e,t,o);r=t.stateNode,Sf.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Mn(t,e.child,null,o),t.child=Mn(t,null,a,o)):Ce(e,t,a,o),t.memoizedState=r.state,l&&va(t,n,!0),t.child}function Od(e){var t=e.stateNode;t.pendingContext?xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xa(e,t.context,!1),os(e,t.containerInfo)}function Aa(e,t,n,r,l){return Rn(),es(l),t.flags|=256,Ce(e,t,n,r),t.child}var ko={dehydrated:null,treeContext:null,retryLane:0};function wo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,t,n){var r=t.pendingProps,l=J.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(J,l&1),e===null)return fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ql(s,r,0,null),e=rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wo(n),t.memoizedState=ko,e):ms(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return jf(e,t,s,r,a,l,n);if(o){o=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Gt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=Gt(a,o):(o=rn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ko,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ms(e,t){return t=ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&es(r),Mn(t,e.child,null,n),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jf(e,t,n,r,l,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Di(Error(y(422))),Jr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=ql({mode:"visible",children:r.children},l,0,null),o=rn(o,l,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Mn(t,e.child,null,s),t.child.memoizedState=wo(s),t.memoizedState=ko,o);if(!(t.mode&1))return Jr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=Di(o,r,void 0),Jr(e,t,s,r)}if(a=(s&e.childLanes)!==0,Te||a){if(r=fe,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,St(e,l),nt(r,e,l,-1))}return ks(),r=Di(Error(y(421))),Jr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,_e=Ut(l.nextSibling),Re=t,Y=!0,et=null,e!==null&&(Ve[Ge++]=xt,Ve[Ge++]=vt,Ve[Ge++]=on,xt=e.id,vt=e.overflow,on=t),t=ms(t,r.children),t.flags|=4096,t)}function _a(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mo(e.return,t,n)}function Li(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Bd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_a(e,n,t);else if(e.tag===19)_a(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(J,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Al(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Li(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Al(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Li(t,!0,n,null,o);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cf(e,t,n){switch(t.tag){case 3:Od(t),Rn();break;case 5:pd(t);break;case 1:Pe(t.type)&&Fl(t);break;case 4:os(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(Pl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Id(e,t,n):(V(J,J.current&1),e=jt(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Rd(e,t,n)}return jt(e,t,n)}var Ud,So,$d,Wd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};So=function(){};$d=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(ct.current);var o=null;switch(n){case"input":l=Wi(e,l),r=Wi(e,r),o=[];break;case"select":l=ee({},l,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":l=Hi(e,l),r=Hi(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bl)}Yi(n,r);var s;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(hr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==a&&(u!=null||a!=null))if(f==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(hr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&G("scroll",e),o||a===u||(o=[])):(o=o||[]).push(f,u))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nf(e,t,n){var r=t.pendingProps;switch(qo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Pe(t.type)&&El(),ve(t),null;case 3:return r=t.stateNode,On(),H(ze),H(ke),as(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(zo(et),et=null))),So(e,t),ve(t),null;case 5:ss(t);var l=tn(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)$d(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ve(t),null}if(e=tn(ct.current),Xr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[br]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(l=0;l<or.length;l++)G(or[l],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Vs(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Hs(r,o),G("invalid",r)}Yi(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,a,e),l=["children",""+a]):hr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Ur(r),Gs(r,o,!0);break;case"textarea":Ur(r),Qs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[br]=r,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ki(n,r),n){case"dialog":G("cancel",e),G("close",e),l=r;break;case"iframe":case"object":case"embed":G("load",e),l=r;break;case"video":case"audio":for(l=0;l<or.length;l++)G(or[l],e);l=r;break;case"source":G("error",e),l=r;break;case"img":case"image":case"link":G("error",e),G("load",e),l=r;break;case"details":G("toggle",e),l=r;break;case"input":Vs(e,r),l=Wi(e,r),G("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":Hs(e,r),l=Hi(e,r),G("invalid",e);break;default:l=r}Yi(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?ku(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xr(e,u):typeof u=="number"&&xr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&G("scroll",e):u!=null&&Oo(e,o,u,s))}switch(n){case"input":Ur(e),Gs(e,r,!1);break;case"textarea":Ur(e),Qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=tn(Fr.current),tn(ct.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(H(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&_e!==null&&t.mode&1&&!(t.flags&128))sd(),Rn(),t.flags|=98560,o=!1;else if(o=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[at]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else et!==null&&(zo(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):ks())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return On(),So(e,t),e===null&&Cr(t.stateNode.containerInfo),ve(t),null;case 10:return rs(t.type._context),ve(t),null;case 17:return Pe(t.type)&&El(),ve(t),null;case 19:if(H(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)er(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Al(e),s!==null){for(t.flags|=128,er(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Bn&&(t.flags|=128,r=!0,er(o,!1),t.lanes=4194304)}else{if(!r)if(e=Al(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return ve(t),null}else 2*ie()-o.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,er(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=J.current,V(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ys(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function bf(e,t){switch(qo(t),t.tag){case 1:return Pe(t.type)&&El(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),H(ze),H(ke),as(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(H(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(J),null;case 4:return On(),null;case 10:return rs(t.type._context),null;case 22:case 23:return ys(),null;case 24:return null;default:return null}}var qr=!1,ye=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,N=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function jo(e,t,n){try{n()}catch(r){le(e,t,r)}}var Ra=!1;function Ff(e,t){if(io=jl,e=Yu(),Zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,f=0,x=0,h=e,g=null;t:for(;;){for(var k;h!==n||l!==0&&h.nodeType!==3||(a=s+l),h!==o||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)g=h,h=k;for(;;){if(h===e)break t;if(g===n&&++f===l&&(a=s),g===o&&++x===r&&(u=s),(k=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oo={focusedElem:e,selectionRange:n},jl=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,O=S.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Je(t.type,w),O);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){le(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return S=Ra,Ra=!1,S}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&jo(t,n,o)}l=l.next}while(l!==r)}}function Zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[br],delete t[uo],delete t[df],delete t[cf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gd(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bl));else if(r!==4&&(e=e.child,e!==null))for(No(e,t,n),e=e.sibling;e!==null;)No(e,t,n),e=e.sibling}function bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}var me=null,qe=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Hd(e,t,n),n=n.sibling}function Hd(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:ye||bn(n,t);case 6:var r=me,l=qe;me=null,Pt(e,t,n),me=r,qe=l,me!==null&&(qe?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(qe?(e=me,n=n.stateNode,e.nodeType===8?bi(e.parentNode,n):e.nodeType===1&&bi(e,n),wr(e)):bi(me,n.stateNode));break;case 4:r=me,l=qe,me=n.stateNode.containerInfo,qe=!0,Pt(e,t,n),me=r,qe=l;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jo(n,t,s),l=l.next}while(l!==r)}Pt(e,t,n);break;case 1:if(!ye&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Pt(e,t,n),ye=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Oa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ef),t.forEach(function(r){var l=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,qe=!1;break e;case 3:me=a.stateNode.containerInfo,qe=!0;break e;case 4:me=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(me===null)throw Error(y(160));Hd(o,s,l),me=null,qe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){le(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}function Qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),ot(e),r&4){try{fr(3,e,e.return),Zl(3,e)}catch(w){le(e,e.return,w)}try{fr(5,e,e.return)}catch(w){le(e,e.return,w)}}break;case 1:Xe(t,e),ot(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(Xe(t,e),ot(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(w){le(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gu(l,o),Ki(a,s);var f=Ki(a,o);for(s=0;s<u.length;s+=2){var x=u[s],h=u[s+1];x==="style"?ku(l,h):x==="dangerouslySetInnerHTML"?vu(l,h):x==="children"?xr(l,h):Oo(l,x,h,f)}switch(a){case"input":Vi(l,o);break;case"textarea":hu(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Fn(l,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?Fn(l,!!o.multiple,o.defaultValue,!0):Fn(l,!!o.multiple,o.multiple?[]:"",!1))}l[br]=o}catch(w){le(e,e.return,w)}}break;case 6:if(Xe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){le(e,e.return,w)}}break;case 3:if(Xe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(w){le(e,e.return,w)}break;case 4:Xe(t,e),ot(e);break;case 13:Xe(t,e),ot(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(xs=ie())),r&4&&Oa(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(f=ye)||x,Xe(t,e),ye=f):Xe(t,e),ot(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!x&&e.mode&1)for(N=e,x=e.child;x!==null;){for(h=N=x;N!==null;){switch(g=N,k=g.child,g.tag){case 0:case 11:case 14:case 15:fr(4,g,g.return);break;case 1:bn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:bn(g,g.return);break;case 22:if(g.memoizedState!==null){Ba(h);continue}}k!==null?(k.return=g,N=k):Ba(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{l=h.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=yu("display",s))}catch(w){le(e,e.return,w)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(w){le(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xe(t,e),ot(e),r&4&&Oa(e);break;case 21:break;default:Xe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gd(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xr(l,""),r.flags&=-33);var o=Ma(e);bo(e,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ma(e);No(e,a,s);break;default:throw Error(y(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tf(e,t,n){N=e,Yd(e)}function Yd(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||qr;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ye;a=qr;var f=ye;if(qr=s,(ye=u)&&!f)for(N=l;N!==null;)s=N,u=s.child,s.tag===22&&s.memoizedState!==null?Ua(l):u!==null?(u.return=s,N=u):Ua(l);for(;o!==null;)N=o,Yd(o),o=o.sibling;N=l,qr=a,ye=f}Ia(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):Ia(e)}}function Ia(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ja(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var x=f.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&wr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ye||t.flags&512&&Co(t)}catch(g){le(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ba(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ua(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zl(4,t)}catch(u){le(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){le(t,l,u)}}var o=t.return;try{Co(t)}catch(u){le(t,o,u)}break;case 5:var s=t.return;try{Co(t)}catch(u){le(t,s,u)}}}catch(u){le(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var zf=Math.ceil,Ml=Ct.ReactCurrentDispatcher,gs=Ct.ReactCurrentOwner,Qe=Ct.ReactCurrentBatchConfig,R=0,fe=null,ae=null,ge=0,Ae=0,En=Kt(0),ce=0,Dr=null,an=0,Jl=0,hs=0,mr=null,Fe=null,xs=0,Bn=1/0,gt=null,Ol=!1,Eo=null,Wt=null,el=!1,Mt=null,Il=0,gr=0,Fo=null,ml=-1,gl=0;function Ne(){return R&6?ie():ml!==-1?ml:ml=ie()}function Vt(e){return e.mode&1?R&2&&ge!==0?ge&-ge:ff.transition!==null?(gl===0&&(gl=Du()),gl):(e=I,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function nt(e,t,n,r){if(50<gr)throw gr=0,Fo=null,Error(y(185));Ar(e,n,r),(!(R&2)||e!==fe)&&(e===fe&&(!(R&2)&&(Jl|=n),ce===4&&_t(e,ge)),De(e,r),n===1&&R===0&&!(t.mode&1)&&(Bn=ie()+500,Yl&&Xt()))}function De(e,t){var n=e.callbackNode;pp(e,t);var r=Sl(e,e===fe?ge:0);if(r===0)n!==null&&Xs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xs(n),t===1)e.tag===0?pf($a.bind(null,e)):ld($a.bind(null,e)),af(function(){!(R&6)&&Xt()}),n=null;else{switch(Lu(r)){case 1:n=Wo;break;case 4:n=zu;break;case 16:n=wl;break;case 536870912:n=Pu;break;default:n=wl}n=nc(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(ml=-1,gl=0,R&6)throw Error(y(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Sl(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bl(e,r);else{t=r;var l=R;R|=2;var o=Zd();(fe!==e||ge!==t)&&(gt=null,Bn=ie()+500,nn(e,t));do try{Lf();break}catch(a){Xd(e,a)}while(!0);ns(),Ml.current=o,R=l,ae!==null?t=0:(fe=null,ge=0,t=ce)}if(t!==0){if(t===2&&(l=eo(e),l!==0&&(r=l,t=To(e,l))),t===1)throw n=Dr,nn(e,0),_t(e,r),De(e,ie()),n;if(t===6)_t(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pf(l)&&(t=Bl(e,r),t===2&&(o=eo(e),o!==0&&(r=o,t=To(e,o))),t===1))throw n=Dr,nn(e,0),_t(e,r),De(e,ie()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Jt(e,Fe,gt);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=xs+500-ie(),10<t)){if(Sl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ao(Jt.bind(null,e,Fe,gt),t);break}Jt(e,Fe,gt);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>l&&(l=s),r&=~o}if(r=l,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zf(r/1960))-r,10<r){e.timeoutHandle=ao(Jt.bind(null,e,Fe,gt),r);break}Jt(e,Fe,gt);break;case 5:Jt(e,Fe,gt);break;default:throw Error(y(329))}}}return De(e,ie()),e.callbackNode===n?Kd.bind(null,e):null}function To(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=Bl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&zo(t)),e}function zo(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!rt(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~hs,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function $a(e){if(R&6)throw Error(y(327));Ln();var t=Sl(e,0);if(!(t&1))return De(e,ie()),null;var n=Bl(e,t);if(e.tag!==0&&n===2){var r=eo(e);r!==0&&(t=r,n=To(e,r))}if(n===1)throw n=Dr,nn(e,0),_t(e,t),De(e,ie()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Fe,gt),De(e,ie()),null}function vs(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Bn=ie()+500,Yl&&Xt())}}function un(e){Mt!==null&&Mt.tag===0&&!(R&6)&&Ln();var t=R;R|=1;var n=Qe.transition,r=I;try{if(Qe.transition=null,I=1,e)return e()}finally{I=r,Qe.transition=n,R=t,!(R&6)&&Xt()}}function ys(){Ae=En.current,H(En)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(qo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:On(),H(ze),H(ke),as();break;case 5:ss(r);break;case 4:On();break;case 13:H(J);break;case 19:H(J);break;case 10:rs(r.type._context);break;case 22:case 23:ys()}n=n.return}if(fe=e,ae=e=Gt(e.current,null),ge=Ae=t,ce=0,Dr=null,hs=Jl=an=0,Fe=mr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}en=null}return e}function Xd(e,t){do{var n=ae;try{if(ns(),cl.current=Rl,_l){for(var r=q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}_l=!1}if(sn=0,pe=de=q=null,pr=!1,Tr=0,gs.current=null,n===null||n.return===null){ce=1,Dr=t,ae=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=ge,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,x=a,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var k=Ta(s);if(k!==null){k.flags&=-257,za(k,s,a,o,t),k.mode&1&&Fa(o,f,t),t=k,u=f;var S=t.updateQueue;if(S===null){var w=new Set;w.add(u),t.updateQueue=w}else S.add(u);break e}else{if(!(t&1)){Fa(o,f,t),ks();break e}u=Error(y(426))}}else if(Y&&a.mode&1){var O=Ta(s);if(O!==null){!(O.flags&65536)&&(O.flags|=256),za(O,s,a,o,t),es(In(u,a));break e}}o=u=In(u,a),ce!==4&&(ce=2),mr===null?mr=[o]:mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ld(o,u,t);Sa(o,p);break e;case 1:a=u;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wt===null||!Wt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ad(o,a,t);Sa(o,v);break e}}o=o.return}while(o!==null)}qd(n)}catch(j){t=j,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Zd(){var e=Ml.current;return Ml.current=Rl,e===null?Rl:e}function ks(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(an&268435455)&&!(Jl&268435455)||_t(fe,ge)}function Bl(e,t){var n=R;R|=2;var r=Zd();(fe!==e||ge!==t)&&(gt=null,nn(e,t));do try{Df();break}catch(l){Xd(e,l)}while(!0);if(ns(),R=n,Ml.current=r,ae!==null)throw Error(y(261));return fe=null,ge=0,ce}function Df(){for(;ae!==null;)Jd(ae)}function Lf(){for(;ae!==null&&!rp();)Jd(ae)}function Jd(e){var t=tc(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?qd(e):ae=t,gs.current=null}function qd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bf(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=Nf(n,t,Ae),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function Jt(e,t,n){var r=I,l=Qe.transition;try{Qe.transition=null,I=1,Af(e,t,n,r)}finally{Qe.transition=l,I=r}return null}function Af(e,t,n,r){do Ln();while(Mt!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fp(e,o),e===fe&&(ae=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,nc(wl,function(){return Ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var s=I;I=1;var a=R;R|=4,gs.current=null,Ff(e,n),Qd(n,e),qp(oo),jl=!!io,oo=io=null,e.current=n,Tf(n),lp(),R=a,I=s,Qe.transition=o}else e.current=n;if(el&&(el=!1,Mt=e,Il=l),o=e.pendingLanes,o===0&&(Wt=null),sp(n.stateNode),De(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ol)throw Ol=!1,e=Eo,Eo=null,e;return Il&1&&e.tag!==0&&Ln(),o=e.pendingLanes,o&1?e===Fo?gr++:(gr=0,Fo=e):gr=0,Xt(),null}function Ln(){if(Mt!==null){var e=Lu(Il),t=Qe.transition,n=I;try{if(Qe.transition=null,I=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Il=0,R&6)throw Error(y(331));var l=R;for(R|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var f=a[u];for(N=f;N!==null;){var x=N;switch(x.tag){case 0:case 11:case 15:fr(8,x,o)}var h=x.child;if(h!==null)h.return=x,N=h;else for(;N!==null;){x=N;var g=x.sibling,k=x.return;if(Vd(x),x===f){N=null;break}if(g!==null){g.return=k,N=g;break}N=k}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var O=w.sibling;w.sibling=null,w=O}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var c=e.current;for(N=c;N!==null;){s=N;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,N=d;else e:for(s=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zl(9,a)}}catch(j){le(a,a.return,j)}if(a===s){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(R=l,Xt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Wl,e)}catch{}r=!0}return r}finally{I=n,Qe.transition=t}}return!1}function Wa(e,t,n){t=In(n,t),t=Ld(e,t,1),e=$t(e,t,1),t=Ne(),e!==null&&(Ar(e,1,t),De(e,t))}function le(e,t,n){if(e.tag===3)Wa(e,e,n);else for(;t!==null;){if(t.tag===3){Wa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=In(n,e),e=Ad(t,e,1),t=$t(t,e,1),e=Ne(),t!==null&&(Ar(t,1,e),De(t,e));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(ce===4||ce===3&&(ge&130023424)===ge&&500>ie()-xs?nn(e,0):hs|=n),De(e,t)}function ec(e,t){t===0&&(e.mode&1?(t=Vr,Vr<<=1,!(Vr&130023424)&&(Vr=4194304)):t=1);var n=Ne();e=St(e,t),e!==null&&(Ar(e,t,n),De(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ec(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),ec(e,n)}var tc;tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Cf(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Y&&t.flags&1048576&&id(t,zl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fl(e,t),e=t.pendingProps;var l=_n(t,ke.current);Dn(t,n),l=ds(null,t,r,e,l,n);var o=cs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,Fl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,is(t),l.updater=Xl,t.stateNode=l,l._reactInternals=t,ho(t,r,e,n),t=yo(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Jo(t),Ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=Je(r,e),l){case 0:t=vo(null,t,r,e,n);break e;case 1:t=La(null,t,r,e,n);break e;case 11:t=Pa(null,t,r,e,n);break e;case 14:t=Da(null,t,r,Je(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Je(r,l),vo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Je(r,l),La(e,t,r,l,n);case 3:e:{if(Od(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,cd(e,t),Ll(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=In(Error(y(423)),t),t=Aa(e,t,r,n,l);break e}else if(r!==l){l=In(Error(y(424)),t),t=Aa(e,t,r,n,l);break e}else for(_e=Ut(t.stateNode.containerInfo.firstChild),Re=t,Y=!0,et=null,n=ud(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===l){t=jt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return pd(t),e===null&&fo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,so(r,l)?s=null:o!==null&&so(r,o)&&(t.flags|=32),Md(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&fo(t),null;case 13:return Id(e,t,n);case 4:return os(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Je(r,l),Pa(e,t,r,l,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,s=l.value,V(Pl,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===l.children&&!ze.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=yt(-1,n&-n),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var x=f.pending;x===null?u.next=u:(u.next=x.next,x.next=u),f.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),mo(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mo(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Dn(t,n),l=Ye(l),r=r(l),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,l=Je(r,t.pendingProps),l=Je(r.type,l),Da(e,t,r,l,n);case 15:return _d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Je(r,l),fl(e,t),t.tag=1,Pe(r)?(e=!0,Fl(t)):e=!1,Dn(t,n),Dd(t,r,l),ho(t,r,l,n),yo(null,t,r,!0,e,n);case 19:return Bd(e,t,n);case 22:return Rd(e,t,n)}throw Error(y(156,t.tag))};function nc(e,t){return Tu(e,t)}function Of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Of(e,t,n,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bo)return 11;if(e===Uo)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hl(e,t,n,r,l,o){var s=2;if(r=e,typeof e=="function")ws(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xn:return rn(n.children,l,o,t);case Io:s=8,l|=8;break;case Ii:return e=He(12,n,t,l|2),e.elementType=Ii,e.lanes=o,e;case Bi:return e=He(13,n,t,l),e.elementType=Bi,e.lanes=o,e;case Ui:return e=He(19,n,t,l),e.elementType=Ui,e.lanes=o,e;case pu:return ql(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:s=10;break e;case cu:s=9;break e;case Bo:s=11;break e;case Uo:s=14;break e;case Dt:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=He(s,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function rn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function ql(e,t,n,r){return e=He(22,e,r,t),e.elementType=pu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ai(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function _i(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gi(0),this.expirationTimes=gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ss(e,t,n,r,l,o,s,a,u){return e=new Bf(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},is(o),e}function Uf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return Qt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Pe(n))return rd(e,n,t)}return t}function lc(e,t,n,r,l,o,s,a,u){return e=Ss(n,r,!0,e,l,o,s,a,u),e.context=rc(null),n=e.current,r=Ne(),l=Vt(n),o=yt(r,l),o.callback=t??null,$t(n,o,l),e.current.lanes=l,Ar(e,l,r),De(e,r),e}function ei(e,t,n,r){var l=t.current,o=Ne(),s=Vt(l);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(l,t,s),e!==null&&(nt(e,l,s,o),dl(e,l,s)),s}function Ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){Va(e,t),(e=e.alternate)&&Va(e,t)}function $f(){return null}var ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cs(e){this._internalRoot=e}ti.prototype.render=Cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ei(e,t,null,null)};ti.prototype.unmount=Cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){ei(null,e,null,null)}),t[wt]=null}};function ti(e){this._internalRoot=e}ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ru();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Ou(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ga(){}function Wf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=Ul(s);o.call(f)}}var s=lc(t,r,e,0,null,!1,!1,"",Ga);return e._reactRootContainer=s,e[wt]=s.current,Cr(e.nodeType===8?e.parentNode:e),un(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=Ul(u);a.call(f)}}var u=Ss(e,0,!1,null,null,!1,!1,"",Ga);return e._reactRootContainer=u,e[wt]=u.current,Cr(e.nodeType===8?e.parentNode:e),un(function(){ei(t,u,n,r)}),u}function ri(e,t,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var a=l;l=function(){var u=Ul(s);a.call(u)}}ei(t,s,e,l)}else s=Wf(n,t,e,l,r);return Ul(s)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(Vo(t,n|1),De(t,ie()),!(R&6)&&(Bn=ie()+500,Xt()))}break;case 13:un(function(){var r=St(e,1);if(r!==null){var l=Ne();nt(r,e,1,l)}}),js(e,1)}};Go=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Ne();nt(t,e,134217728,n)}js(e,134217728)}};_u=function(e){if(e.tag===13){var t=Vt(e),n=St(e,t);if(n!==null){var r=Ne();nt(n,e,t,r)}js(e,t)}};Ru=function(){return I};Mu=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Zi=function(e,t,n){switch(t){case"input":if(Vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ql(r);if(!l)throw Error(y(90));mu(r),Vi(r,l)}}}break;case"textarea":hu(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};ju=vs;Cu=un;var Vf={usingClientEntryPoint:!1,Events:[Rr,wn,Ql,wu,Su,vs]},tr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eu(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||$f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Wl=tl.inject(Gf),dt=tl}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(y(200));return Uf(e,t,null,n)};Oe.createRoot=function(e,t){if(!Ns(e))throw Error(y(299));var n=!1,r="",l=ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ss(e,1,!1,null,null,n,!1,r,l),e[wt]=t.current,Cr(e.nodeType===8?e.parentNode:e),new Cs(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Eu(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return un(e)};Oe.hydrate=function(e,t,n){if(!ni(t))throw Error(y(200));return ri(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=ic;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=lc(t,null,e,1,n??null,l,!1,o,s),e[wt]=t.current,Cr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ti(t)};Oe.render=function(e,t,n){if(!ni(t))throw Error(y(200));return ri(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ni(e))throw Error(y(40));return e._reactRootContainer?(un(function(){ri(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Oe.unstable_batchedUpdates=vs;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ni(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return ri(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),ou.exports=Oe;var Hf=ou.exports,Ha=Hf;Mi.createRoot=Ha.createRoot,Mi.hydrateRoot=Ha.hydrateRoot;const nl="https://scan.pulsechain.com",Qf=[{id:0,name:"Buy and Burn",description:"Purchase DTGC and send to burn address"},{id:1,name:"Liquidity",description:"Add to DTGC/URMOM liquidity pool"},{id:2,name:"Treasury",description:"Send to DAO Treasury for development"},{id:3,name:"All of Above",description:"Split equally between all options"}],Yf={},rl=[{id:0,name:"SILVER",icon:"🥈",minInvest:200,lockDays:60,holdDays:60,apr:22,bonus:10,boost:1,asset:"DTGC",color:"#C0C0C0",gradient:"linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A8A8A8 100%)"},{id:1,name:"GOLD",icon:"🥇",minInvest:500,lockDays:90,holdDays:90,apr:24,bonus:10,boost:1,asset:"DTGC",color:"#D4AF37",gradient:"linear-gradient(135deg, #FFF1A8 0%, #D4AF37 50%, #B8860B 100%)"},{id:2,name:"WHALE",icon:"🐋",minInvest:1e4,lockDays:180,holdDays:180,apr:26,bonus:10,boost:1,asset:"DTGC",color:"#4169E1",gradient:"linear-gradient(135deg, #6B8DD6 0%, #4169E1 50%, #2E4FA3 100%)"}],Ue={name:"DIAMOND",icon:"💎",minInvest:1e3,lockDays:90,apr:40,bonus:12,boost:1.5,lpPair:"DTGC/PLS",color:"#00BCD4"},$e={name:"DIAMOND+",icon:"💎✨",minInvest:1e3,lockDays:90,apr:50,bonus:15,boost:2,lpPair:"DTGC/URMOM",color:"#9C27B0"},Z={urmomPrice:3515e-7,dtgcPrice:1851e-7,urmomMarketCap:159727,urmomTotalSupply:1e9,deadWallets:{"0x0000000000000000000000000000000000000000":0,"0x000000000000000000000000000000000000dEaD":0,"0x0000000000000000000000000000000000000369":54561640314e-2},totalDeadWallet:54561640314e-2,burnedUSD:576170.92,burnPercentage:54.5616,lpBurnPercentages:[{pair:"URMOM/HEX",percentage:99.2237},{pair:"URMOM/INC",percentage:99.5773},{pair:"URMOM/eHEX",percentage:99.6719},{pair:"URMOM/PLS",percentage:99},{pair:"URMOM/PLSX",percentage:98.5},{pair:"URMOM/PTGC",percentage:99.8}],lpUrmomBreakdown:[{pool:"PTGC Pool",tokens:31232571,color:"#FFD700"},{pool:"PLS Pool",tokens:26643051,color:"#00D4AA"},{pool:"HEX Pool",tokens:11919546,color:"#FF6B6B"},{pool:"PLSX Pool",tokens:11093073,color:"#9B59B6"},{pool:"PLS Pool 2",tokens:6117908,color:"#3498DB"},{pool:"INC Pool",tokens:10068493,color:"#E74C3C"},{pool:"pHEX Pool",tokens:5975013,color:"#F39C12"}],lpPools:[{name:"URMOM/DTGC",address:"0x1891bD6A959B32977c438f3022678a8659364A72"},{name:"URMOM/PLS",address:"0x682B82baAC38dDb185D77deAF98D9D246EF9c9E5"},{name:"URMOM/HEX",address:"0x0548656e272fec9534e180d3174cfc57ab6e10c0"},{name:"URMOM/pHEX",address:"0x6Bd31Cdc8c87F3bE93bEaC2E4F58DAeEf1f7905e"},{name:"URMOM/INC",address:"0xc8EC3c754B259fB7503072058A71d00cc20121DF"}]},Se=1e9,We={dao:{name:"DAO Treasury",address:"0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC",icon:"🏛️",description:"Staking rewards & governance",expected:0,color:"#4CAF50"},dev:{name:"Dev Wallet",address:"0x777d7f3ad24832975aec259ab7d7b57be4225abf",icon:"👨‍💻",description:"Development & operations",expected:820829080,color:"#2196F3"},lpLocked:{name:"LP Locked",address:"0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7",icon:"🔒",description:"Liquidity pool locked",expected:87e6,color:"#9C27B0"},burn:{name:"Burned Forever",address:"0x0000000000000000000000000000000000000369",icon:"🔥",description:"Permanently destroyed",expected:0,color:"#F44336"},circulating:{name:"Circulating Supply",address:null,icon:"💱",description:"Available for trading",expected:9e7,color:"#FF9800"}},xl="0x146a6F852D2B9a24e1078e6D2f86486D1C09165e",Kf={holders:`https://scan.pulsechain.com/api/v2/tokens/${xl}/holders`,rpc:"https://rpc.pulsechain.com"},Xf=["0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC","0x777d7f3ad24832975aec259ab7d7b57be4225abf","0x0000000000000000000000000000000000000369","0x000000000000000000000000000000000000dEaD","0x0000000000000000000000000000000000000000","0x1891bD6A959B32977c438f3022678a8659364A72","0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7"].map(e=>e.toLowerCase()),Qa=[{address:"0x7a3B...9F2e",balance:25e5,label:"Loading..."},{address:"0x4cD1...8A3b",balance:18e5,label:"Loading..."},{address:"0x9eF2...3C4d",balance:12e5,label:"Loading..."},{address:"0x2aB5...7E8f",balance:95e4,label:"Loading..."},{address:"0x6cD9...1A2b",balance:75e4,label:"Loading..."}],Ri=Z.lpUrmomBreakdown.reduce((e,t)=>e+t.tokens,0),Le={xUrmom:"https://x.com/UrmomPulse",xDumpTires:"https://x.com/Dump_Tires",telegram:"https://t.me/urmomPulse",website:"https://dump.tires",dexscreener:"https://dexscreener.com/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0",dexscreenerDTGC:"https://dexscreener.com/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7",coingecko:"https://www.coingecko.com/en/coins/urmom-3"},je={dtgc:"0xD0676B28a457371D58d47E5247b439114e40Eb0F",urmom:"0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0",lp:"0x1891bD6A959B32977c438f3022678a8659364A72",daoTreasury:"0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC",stakingV2:"0x0c1984e3804Bd74DAaB66c4540bBeac751efB643",lpStakingV2:"0x0b07eD8929884E9bBDEAD6B42465F2A265044f18",daoVoting:"0x91DFFcC31C68Ef0C1F2ad49554E85bB7536fA470",burn:"0x0000000000000000000000000000000000000369"},Ya=!0,ut={stake:"/videos/stake-video.mov",popup:"/videos/popup-video.mov",whitepaper:"/videos/whitepaper-video.mov"},Ze={startingPLS:1e8,startingDTGC:5e7,startingURMOM:25e6,startingLP:1e6},Zf=z.createContext(),Jf=e=>`
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
`,_=(e,t=2)=>!e||isNaN(e)?"0":e>=1e9?(e/1e9).toFixed(2)+"B":e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":new Intl.NumberFormat("en-US",{maximumFractionDigits:t}).format(e),ll=e=>new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e),qf=e=>e?`${e.slice(0,6)}...${e.slice(-4)}`:"",nr=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(e),e0=({onComplete:e,isDark:t})=>{const[n,r]=_o.useState(!1),l=()=>{r(!0),setTimeout(e,500)};return i.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.97)",zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",animation:n?"modal-out 0.5s ease forwards":"backdrop-in 0.5s ease"},children:i.jsxs("div",{style:{position:"relative",maxWidth:"850px",width:"92%",borderRadius:"24px",overflow:"hidden",border:"3px solid var(--gold)",boxShadow:"0 0 80px rgba(212, 175, 55, 0.6), 0 0 120px rgba(212, 175, 55, 0.3)"},children:[i.jsxs("video",{autoPlay:!0,muted:!0,playsInline:!0,onEnded:l,style:{width:"100%",display:"block"},children:[i.jsx("source",{src:ut.popup,type:"video/quicktime"}),i.jsx("source",{src:ut.popup.replace(".mov",".mp4"),type:"video/mp4"})]}),i.jsx("button",{onClick:l,style:{position:"absolute",bottom:"24px",right:"24px",background:"linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%)",border:"none",color:"#1A1A1A",padding:"14px 32px",borderRadius:"50px",fontFamily:"Cinzel, serif",fontWeight:"700",fontSize:"0.85rem",cursor:"pointer",transition:"all 0.3s ease",letterSpacing:"3px",textTransform:"uppercase",boxShadow:"0 4px 20px rgba(212, 175, 55, 0.4)"},onMouseEnter:o=>{o.target.style.transform="translateY(-2px)",o.target.style.boxShadow="0 8px 30px rgba(212, 175, 55, 0.6)"},onMouseLeave:o=>{o.target.style.transform="translateY(0)",o.target.style.boxShadow="0 4px 20px rgba(212, 175, 55, 0.4)"},children:"Enter Site →"})]})})},t0=({onComplete:e,tierName:t,isDark:n})=>(_o.useEffect(()=>{const r=setTimeout(e,5e3);return()=>clearTimeout(r)},[e]),i.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:99998,display:"flex",alignItems:"center",justifyContent:"center",animation:"backdrop-in 0.3s ease"},onClick:e,children:i.jsxs("div",{style:{position:"relative",maxWidth:"600px",width:"90%",borderRadius:"20px",overflow:"hidden",border:"2px solid var(--diamond)",boxShadow:"var(--glow-diamond)"},children:[i.jsxs("video",{autoPlay:!0,playsInline:!0,style:{width:"100%",display:"block"},children:[i.jsx("source",{src:ut.stake,type:"video/quicktime"}),i.jsx("source",{src:ut.stake.replace(".mov",".mp4"),type:"video/mp4"})]}),i.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent, rgba(0,0,0,0.95))",padding:"40px 24px 24px",textAlign:"center"},children:[i.jsxs("h3",{style:{fontFamily:"Cinzel, serif",color:"#4CAF50",fontSize:"1.3rem",marginBottom:"6px",letterSpacing:"3px"},children:["🎉 STAKING ",t,"!"]}),i.jsx("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem"},children:"Diamond hands activated 💎"})]})]})})),n0=()=>{const e=z.useMemo(()=>Array.from({length:12},(t,n)=>({id:n,left:Math.random()*100,delay:Math.random()*20,duration:18+Math.random()*20,size:2+Math.random()*4})),[]);return i.jsx("div",{className:"particles-container",children:e.map(t=>i.jsx("div",{className:"particle",style:{left:`${t.left}%`,width:t.size,height:t.size,animationDelay:`${t.delay}s`,animationDuration:`${t.duration}s`}},t.id))})},r0=()=>i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"marble-bg"}),i.jsxs("div",{className:"marble-veins",children:[i.jsx("div",{className:"vein vein-1"}),i.jsx("div",{className:"vein vein-2"}),i.jsx("div",{className:"vein vein-3"}),i.jsx("div",{className:"vein vein-4"}),i.jsx("div",{className:"vein vein-5"})]})]}),l0=({isOpen:e,onClose:t,type:n,amount:r,tier:l})=>e?i.jsx("div",{className:"modal-backdrop",onClick:t,children:i.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[i.jsxs("video",{className:"modal-video",autoPlay:!0,loop:!0,playsInline:!0,children:[i.jsx("source",{src:ut.popup,type:"video/quicktime"}),i.jsx("source",{src:ut.popup.replace(".mov",".mp4"),type:"video/mp4"})]}),i.jsxs("div",{className:"modal-body",children:[i.jsx("h3",{className:"modal-title gold-text",children:n==="start"?"🎉 STAKE INITIATED!":"✅ STAKE COMPLETE!"}),i.jsx("p",{className:"modal-subtitle",children:n==="start"?`Staking ${r} tokens in ${l} tier...`:`Successfully staked ${r} tokens!`}),i.jsx("button",{className:"modal-close-btn",onClick:t,children:n==="start"?"Confirm":"Close"})]})]})}):null;function i0(){var As,_s,Rs;const[e,t]=z.useState(()=>typeof window<"u"?localStorage.getItem("dtgc-theme")==="dark":!1),[n,r]=z.useState(!1),l=()=>{r(!1),typeof window<"u"&&sessionStorage.setItem("dtgc-intro-seen","true")},[o,s]=z.useState(!1),[a,u]=z.useState(""),[f,x]=z.useState(null),[h,g]=z.useState(null),[k,S]=z.useState(null),[w,O]=z.useState("stake"),[p,c]=z.useState(!1),[d,v]=z.useState(()=>{if(typeof window<"u"){const m=localStorage.getItem("dtgc-testnet-balances");if(m)return JSON.parse(m)}return null}),[j,E]=z.useState("0"),[b,T]=z.useState("0"),[te,L]=z.useState("0"),[Be,Nt]=z.useState("0"),[we,pn]=z.useState(null),[pt,bt]=z.useState(""),[K,C]=z.useState(!1),[P,D]=z.useState(null),[Q,ue]=z.useState(null),[Vn,ft]=z.useState([]),[Et,Ft]=z.useState({totalStaked:"0",stakers:"0"}),[lt,bs]=z.useState({holders:Qa,loading:!0,lastUpdated:null,error:null}),[Gn,o0]=z.useState(!1),[Es,sc]=z.useState(null),[Or,Fs]=z.useState(!1),[fn,Ts]=z.useState(null),[ac,zs]=z.useState(!1),[uc,Ps]=z.useState("start"),[M,mn]=z.useState({urmom:Z.urmomPrice,dtgc:Z.dtgcPrice,dtgcMarketCap:0,lastUpdated:null,loading:!0,error:null}),[ne,dc]=z.useState({dao:We.dao.expected,dev:We.dev.expected,lpLocked:We.lpLocked.expected,burned:0,staked:0,circulating:We.circulating.expected,lastUpdated:null}),it=(m,F)=>{Ts({message:m,type:F}),setTimeout(()=>Ts(null),4e3)},li=z.useCallback(async()=>{var m,F,U;try{const $=await(await fetch(`https://api.scan.pulsechain.com/api/v2/addresses/${We.dao.address}/token-balances`)).json(),W=(m=$==null?void 0:$.find)==null?void 0:m.call($,Qn=>{var Tt,zt;return((zt=(Tt=Qn.token)==null?void 0:Tt.address)==null?void 0:zt.toLowerCase())===xl.toLowerCase()}),oe=W?parseFloat(W.value)/1e18:0,re=await(await fetch(`https://api.scan.pulsechain.com/api/v2/addresses/${We.dev.address}/token-balances`)).json(),se=(F=re==null?void 0:re.find)==null?void 0:F.call(re,Qn=>{var Tt,zt;return((zt=(Tt=Qn.token)==null?void 0:Tt.address)==null?void 0:zt.toLowerCase())===xl.toLowerCase()}),mt=se?parseFloat(se.value)/1e18:We.dev.expected,Hn=await(await fetch(`https://api.scan.pulsechain.com/api/v2/addresses/${We.burn.address}/token-balances`)).json(),Ms=(U=Hn==null?void 0:Hn.find)==null?void 0:U.call(Hn,Qn=>{var Tt,zt;return((zt=(Tt=Qn.token)==null?void 0:Tt.address)==null?void 0:zt.toLowerCase())===xl.toLowerCase()}),ui=Ms?parseFloat(Ms.value)/1e18:0,vc=Se-oe-mt-We.lpLocked.expected-ui;dc({dao:oe,dev:mt,lpLocked:We.lpLocked.expected,burned:ui,staked:0,circulating:Math.max(0,vc),lastUpdated:new Date}),console.log("📊 Supply dynamics updated:",{dao:oe,dev:mt,burned:ui})}catch(B){console.warn("⚠️ Failed to fetch supply dynamics:",B.message)}},[]);z.useEffect(()=>{li();const m=setInterval(li,5*60*1e3);return()=>clearInterval(m)},[li]);const ii=z.useCallback(async()=>{try{const m=await fetch(Kf.holders);if(!m.ok)throw new Error("API request failed");const U=((await m.json()).items||[]).filter(B=>{var $,W;return!Xf.includes((W=($=B.address)==null?void 0:$.hash)==null?void 0:W.toLowerCase())}).slice(0,20).map((B,$)=>{var W,oe,X,re,se;return{address:`${(oe=(W=B.address)==null?void 0:W.hash)==null?void 0:oe.slice(0,6)}...${(re=(X=B.address)==null?void 0:X.hash)==null?void 0:re.slice(-4)}`,fullAddress:(se=B.address)==null?void 0:se.hash,balance:parseFloat(B.value)/1e18,label:$<3?`Whale ${$+1}`:$<6?`Diamond ${$-2}`:`Holder ${$-5}`}});if(U.length>0)bs({holders:U,loading:!1,lastUpdated:new Date,error:null}),console.log("📊 Live holders updated:",U.length,"wallets");else throw new Error("No holder data received")}catch(m){console.warn("⚠️ Holder API error, using fallback:",m.message),bs(F=>({...F,holders:F.holders.length>0?F.holders:Qa,loading:!1,error:m.message}))}},[]);z.useEffect(()=>{ii();const m=setInterval(ii,12e4);return()=>clearInterval(m)},[ii]);const oi=z.useCallback(async()=>{var m,F;mn(U=>({...U,loading:!0,error:null}));try{const B=await(await fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0")).json(),W=await(await fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7")).json(),oe=(B==null?void 0:B.pair)||((m=B==null?void 0:B.pairs)==null?void 0:m[0]),X=(W==null?void 0:W.pair)||((F=W==null?void 0:W.pairs)==null?void 0:F[0]),re=parseFloat((oe==null?void 0:oe.priceUsd)||Z.urmomPrice),se=parseFloat((X==null?void 0:X.priceUsd)||Z.dtgcPrice),mt=parseFloat((X==null?void 0:X.fdv)||(X==null?void 0:X.marketCap)||0);if(isNaN(re)||isNaN(se))throw new Error("Invalid price data");mn({urmom:re,dtgc:se,dtgcMarketCap:mt,lastUpdated:new Date,loading:!1,error:null}),console.log("📊 Live prices updated:",{urmom:re,dtgc:se,marketCap:mt})}catch(U){console.error("Failed to fetch live prices:",U),mn(B=>({...B,loading:!1,error:"Failed to fetch prices - using cached values"}))}},[]);z.useEffect(()=>{oi();const m=setInterval(oi,6e4);return()=>clearInterval(m)},[oi]);const cc=async()=>{var m,F,U,B,$,W;mn(oe=>({...oe,loading:!0}));try{const[oe,X]=await Promise.all([fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0548656e272fec9534e180d3174cfc57ab6e10c0"),fetch("https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0b0a8a0b7546ff180328aa155d2405882c7ac8c7")]),re=await oe.json(),se=await X.json(),mt=parseFloat(((m=re==null?void 0:re.pair)==null?void 0:m.priceUsd)||((U=(F=re==null?void 0:re.pairs)==null?void 0:F[0])==null?void 0:U.priceUsd)||Z.urmomPrice),ai=parseFloat(((B=se==null?void 0:se.pair)==null?void 0:B.priceUsd)||((W=($=se==null?void 0:se.pairs)==null?void 0:$[0])==null?void 0:W.priceUsd)||Z.dtgcPrice);mn({urmom:mt,dtgc:ai,lastUpdated:new Date,loading:!1,error:null}),it(`🟢 Prices updated: URMOM $${mt.toFixed(7)} | DTGC $${ai.toFixed(7)}`,"success")}catch{mn(X=>({...X,loading:!1,error:"Failed"})),it("⚠️ Price fetch failed","error")}},pc=(Z.totalDeadWallet*M.urmom).toFixed(2);(Ri*M.urmom).toFixed(2);const si=z.useCallback(()=>{const m={pls:Ze.startingPLS,dtgc:Ze.startingDTGC,urmom:Ze.startingURMOM,lp:Ze.startingLP,stakedDTGC:0,stakedLP:0,rewards:0,positions:[]};return v(m),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(m)),L(m.pls.toString()),E(m.dtgc.toString()),Nt(m.urmom.toString()),T(m.lp.toString()),m},[]);z.useEffect(()=>{d&&(L((d.pls??0).toString()),E((d.dtgc??0).toString()),Nt((d.urmom??0).toString()),T((d.lp??0).toString()),ft(d.positions||[]))},[d]);const fc=z.useCallback(()=>{const m={...d,pls:((d==null?void 0:d.pls)||0)+Ze.startingPLS,dtgc:((d==null?void 0:d.dtgc)||0)+Ze.startingDTGC,urmom:((d==null?void 0:d.urmom)||0)+Ze.startingURMOM,lp:((d==null?void 0:d.lp)||0)+Ze.startingLP};v(m),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(m)),it(`🎉 Received ${_(Ze.startingPLS)} PLS + ${_(Ze.startingDTGC)} DTGC + ${_(Ze.startingLP)} LP!`,"success")},[d]),mc=z.useCallback(()=>{localStorage.removeItem("dtgc-testnet-balances"),si(),it("🔄 Testnet reset! Fresh 100M PLS added.","info")},[si]),Ds=()=>{t(!e),localStorage.setItem("dtgc-theme",e?"light":"dark")};z.useEffect(()=>{const m=()=>c(window.scrollY>50);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const Ls=async()=>{{const m="0xTEST"+Math.random().toString(16).slice(2,10).toUpperCase()+"...TEST";S(m),d||si(),it("🧪 TESTNET: Wallet connected with 100M PLS!","success");return}},gc=async()=>{if(!pt||parseFloat(pt)<=0)return;const m=parseFloat(pt),F=we===4?$e:we===3?Ue:rl[we];{const U=parseFloat(K?b:j);if(m>U){it(`Insufficient ${K?"LP":"DTGC"} balance!`,"error");return}u(F.name),s(!0),Ps("start"),zs(!0),Fs(!0),await new Promise(X=>setTimeout(X,2e3));const B=m*(Yf.entryFee/100),$=m-B,W={id:Date.now(),tier:F.name,amount:$,isLP:K,apr:F.apr,lockDays:F.lockDays,startTime:Date.now(),endTime:Date.now()+F.lockDays*24*60*60*1e3,rewards:0},oe={...d,dtgc:K?d.dtgc:d.dtgc-m,lp:K?d.lp-m:d.lp,stakedDTGC:K?d.stakedDTGC:d.stakedDTGC+$,stakedLP:K?d.stakedLP+$:d.stakedLP,positions:[...d.positions||[],W]};v(oe),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(oe)),Fs(!1),Ps("end"),bt(""),it(`✅ Staked ${_($)} ${K?"LP":"DTGC"} in ${F.name} tier!`,"success");return}},hc=async m=>{const F=d.positions.find(se=>se.id===m);if(!F)return;const U=Date.now(),B=U<F.endTime,$=B?F.amount*.2:F.amount*.05,W=F.amount-$,oe=(U-F.startTime)/(24*60*60*1e3),X=F.amount*(F.apr/100)/365*oe,re={...d,dtgc:F.isLP?d.dtgc+X:d.dtgc+W+X,lp:F.isLP?d.lp+W:d.lp,stakedDTGC:F.isLP?d.stakedDTGC:d.stakedDTGC-F.amount,stakedLP:F.isLP?d.stakedLP-F.amount:d.stakedLP,positions:d.positions.filter(se=>se.id!==m)};v(re),localStorage.setItem("dtgc-testnet-balances",JSON.stringify(re)),it(`✅ Unstaked! Received ${_(W)} + ${_(X)} rewards${B?" (20% early exit fee)":""}`,"success")},xc=m=>{navigator.clipboard.writeText(m),it("Address copied!","success")};return i.jsxs(Zf.Provider,{value:{isDark:e,toggleTheme:Ds},children:[i.jsx("style",{children:Jf(e)}),n&&Ya&&i.jsx(e0,{onComplete:l,isDark:e}),o&&Ya&&i.jsx(t0,{onComplete:()=>s(!1),tierName:a,isDark:e}),i.jsx(r0,{}),i.jsx(n0,{}),i.jsxs("div",{className:"app-container",children:[i.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:2e3,background:"linear-gradient(90deg, #FF6B6B, #FF8E53, #FF6B6B)",backgroundSize:"200% auto",animation:"shimmer 3s linear infinite",padding:"8px 20px",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"},children:[i.jsx("span",{style:{fontWeight:700,color:"#FFF",fontSize:"0.85rem",letterSpacing:"1px"},children:"🧪 TESTNET MODE - Not Real Money!"}),k&&i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:fc,style:{padding:"6px 16px",background:"#FFF",border:"none",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FF6B6B",cursor:"pointer"},children:"🚰 Get More Test Tokens"}),i.jsx("button",{onClick:mc,style:{padding:"6px 16px",background:"rgba(255,255,255,0.2)",border:"1px solid #FFF",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FFF",cursor:"pointer"},children:"🔄 Reset"})]})]}),i.jsx("header",{className:`nav-header ${p?"scrolled":""}`,style:{top:"40px"},children:i.jsxs("div",{className:"nav-content",children:[i.jsxs("div",{className:"logo-section",children:[i.jsx("div",{className:"logo-mark",children:"DT"}),i.jsxs("div",{className:"logo-text-group",children:[i.jsx("span",{className:"logo-text gold-text",children:"DTGC"}),i.jsx("span",{className:"logo-tagline",children:"dump.tires"})]})]}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("button",{className:`nav-link ${w==="stake"?"active":""}`,onClick:()=>O("stake"),children:"Stake"}),i.jsx("button",{className:`nav-link ${w==="burn"?"active":""}`,onClick:()=>O("burn"),children:"Burn Stats"}),i.jsx("button",{className:`nav-link ${w==="vote"?"active":""}`,onClick:()=>O("vote"),children:"DAO"}),i.jsx("button",{className:`nav-link ${w==="whitepaper"?"active":""}`,onClick:()=>O("whitepaper"),children:"Whitepaper"}),i.jsx("button",{className:`nav-link ${w==="links"?"active":""}`,onClick:()=>O("links"),children:"Links"})]}),i.jsxs("div",{className:"nav-right",children:[i.jsx("button",{className:"theme-toggle",onClick:Ds,children:e?"☀️":"🌙"}),i.jsxs("button",{className:`connect-btn ${k?"connected":""}`,onClick:Ls,disabled:Or,children:[Or&&i.jsx("span",{className:"spinner"}),k?qf(k):"Connect"]})]})]})}),i.jsxs("section",{className:"hero-section",style:{paddingTop:"180px"},children:[i.jsx("div",{className:"hero-badge",children:"🧪 V18 DIAMOND+ EDITION • TESTNET 🧪"}),i.jsx("h1",{className:"hero-title gold-text",children:"DTGC STAKING"}),i.jsx("p",{className:"hero-subtitle",children:"Stake • Earn • Govern • Prosper"}),i.jsx("p",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginTop:"-10px",marginBottom:"20px",textTransform:"uppercase"},children:"A pump.tires contract, unique decentralized staking mechanism, on PulseChain"}),k&&d&&i.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"15px",flexWrap:"wrap",marginBottom:"30px",padding:"20px",background:e?"rgba(255,107,107,0.1)":"rgba(255,107,107,0.05)",borderRadius:"16px",border:"1px solid rgba(255,107,107,0.3)"},children:[i.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[i.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FF6B6B"},children:_(d.pls)}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST PLS"})]}),i.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[i.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FFD700"},children:_(d.dtgc)}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST DTGC"})]}),i.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[i.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#FF9800"},children:_(d.urmom||0)}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST URMOM"})]}),i.jsxs("div",{style:{textAlign:"center",padding:"10px 20px"},children:[i.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#00BCD4"},children:_(d.lp)}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"TEST LP"})]}),i.jsxs("div",{style:{textAlign:"center",padding:"10px 20px",borderLeft:"1px solid rgba(255,255,255,0.2)"},children:[i.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#4CAF50"},children:_((d.stakedDTGC||0)+(d.stakedLP||0))}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",letterSpacing:"1px"},children:"STAKED"})]})]}),i.jsxs("div",{className:"hero-stats",children:[i.jsxs("div",{className:"hero-stat",children:[i.jsx("div",{className:"hero-stat-value gold-text",children:_(parseFloat(Et.totalStaked))}),i.jsx("div",{className:"hero-stat-label",children:"Total Staked"})]}),i.jsxs("div",{className:"hero-stat",children:[i.jsxs("div",{className:"hero-stat-value gold-text",style:{position:"relative"},children:["$",M.urmom.toFixed(7),!M.loading&&i.jsx("span",{style:{position:"absolute",top:"-8px",right:"-20px",fontSize:"0.5rem",background:"#4CAF50",padding:"2px 6px",borderRadius:"10px",color:"#FFF",animation:"pulse 2s infinite"},children:"LIVE"})]}),i.jsxs("div",{className:"hero-stat-label",children:["URMOM ",M.loading?"⏳ Loading...":""]})]}),i.jsxs("div",{className:"hero-stat",children:[i.jsxs("div",{className:"hero-stat-value gold-text",style:{position:"relative"},children:["$",M.dtgc.toFixed(7),!M.loading&&i.jsx("span",{style:{position:"absolute",top:"-8px",right:"-20px",fontSize:"0.5rem",background:"#4CAF50",padding:"2px 6px",borderRadius:"10px",color:"#FFF",animation:"pulse 2s infinite"},children:"LIVE"})]}),i.jsxs("div",{className:"hero-stat-label",children:["DTGC ",M.loading?"⏳ Loading...":""]})]}),i.jsxs("div",{className:"hero-stat",children:[i.jsxs("div",{className:"hero-stat-value gold-text",children:["$",_(parseFloat(pc))]}),i.jsx("div",{className:"hero-stat-label",children:"Burned Value"})]}),i.jsxs("div",{className:"hero-stat",children:[i.jsx("div",{className:"hero-stat-value",style:{color:"#4CAF50"},children:"91%"}),i.jsx("div",{className:"hero-stat-label",children:"Controlled Supply"})]})]})]}),i.jsx("section",{className:"supply-dynamics-section",style:{margin:"20px auto",maxWidth:"1200px",padding:"0 20px"},children:i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(26,35,39,0.95) 0%, rgba(18,24,28,0.98) 100%)",border:"2px solid #D4AF37",borderRadius:"16px",padding:"24px",boxShadow:"0 8px 32px rgba(212,175,55,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[i.jsx("div",{style:{fontSize:"0.65rem",color:"#888",letterSpacing:"2px",marginBottom:"8px",textTransform:"uppercase"},children:"A pump.tires contract, unique decentralized staking mechanism, on PulseChain"}),i.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:800,color:"#D4AF37",margin:0,textShadow:"0 2px 10px rgba(212,175,55,0.3)"},children:"⚡ GOLD SUPPLY DYNAMICS DTGC ⚡"}),i.jsx("div",{style:{fontSize:"0.75rem",color:"#666",marginTop:"4px"},children:"Total Supply: 1,000,000,000 DTGC • Live Transparency"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"12px",marginBottom:"16px"},children:[i.jsx("a",{href:`https://scan.pulsechain.com/address/${We.dao.address}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)",border:"1px solid rgba(76,175,80,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",cursor:"pointer",transition:"transform 0.2s, box-shadow 0.2s"},onMouseOver:m=>{m.currentTarget.style.transform="translateY(-2px)",m.currentTarget.style.boxShadow="0 4px 12px rgba(76,175,80,0.3)"},onMouseOut:m=>{m.currentTarget.style.transform="translateY(0)",m.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"🏛️"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"DAO TREASURY"}),i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#4CAF50"},children:_(ne.dao)}),i.jsxs("div",{style:{fontSize:"0.75rem",color:"#4CAF50",fontWeight:600},children:[(ne.dao/Se*100).toFixed(1),"%"]}),i.jsx("div",{style:{fontSize:"0.6rem",color:"#666",marginTop:"4px",height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden"},children:i.jsx("div",{style:{width:`${Math.max(.5,ne.dao/Se*100)}%`,height:"100%",background:"#4CAF50",borderRadius:"2px"}})}),i.jsx("div",{style:{fontSize:"0.5rem",color:"#666",marginTop:"6px"},children:"🔗 View on PulseScan"})]})}),i.jsx("a",{href:`https://scan.pulsechain.com/address/${We.dev.address}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.05) 100%)",border:"1px solid rgba(33,150,243,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",cursor:"pointer",transition:"transform 0.2s, box-shadow 0.2s"},onMouseOver:m=>{m.currentTarget.style.transform="translateY(-2px)",m.currentTarget.style.boxShadow="0 4px 12px rgba(33,150,243,0.3)"},onMouseOut:m=>{m.currentTarget.style.transform="translateY(0)",m.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"👨‍💻"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"DEV WALLET"}),i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#2196F3"},children:_(ne.dev)}),i.jsxs("div",{style:{fontSize:"0.75rem",color:"#2196F3",fontWeight:600},children:[(ne.dev/Se*100).toFixed(1),"%"]}),i.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:i.jsx("div",{style:{width:`${ne.dev/Se*100}%`,height:"100%",background:"#2196F3",borderRadius:"2px"}})}),i.jsx("div",{style:{fontSize:"0.5rem",color:"#666",marginTop:"6px"},children:"🔗 View on PulseScan"})]})}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(156,39,176,0.1) 0%, rgba(156,39,176,0.05) 100%)",border:"1px solid rgba(156,39,176,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"🔒"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"LP LOCKED"}),i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#9C27B0"},children:_(ne.lpLocked)}),i.jsxs("div",{style:{fontSize:"0.75rem",color:"#9C27B0",fontWeight:600},children:[(ne.lpLocked/Se*100).toFixed(1),"%"]}),i.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:i.jsx("div",{style:{width:`${ne.lpLocked/Se*100}%`,height:"100%",background:"#9C27B0",borderRadius:"2px"}})})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0.05) 100%)",border:"1px solid rgba(0,188,212,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"💎"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"STAKED"}),i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#00BCD4"},children:_(parseFloat(Et.totalStaked)||ne.staked)}),i.jsxs("div",{style:{fontSize:"0.75rem",color:"#00BCD4",fontWeight:600},children:[((parseFloat(Et.totalStaked)||ne.staked)/Se*100).toFixed(2),"%"]}),i.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:i.jsx("div",{style:{width:`${(parseFloat(Et.totalStaked)||ne.staked)/Se*100}%`,height:"100%",background:"#00BCD4",borderRadius:"2px"}})})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(244,67,54,0.05) 100%)",border:"1px solid rgba(244,67,54,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"🔥"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"BURNED FOREVER"}),i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#F44336"},children:_(ne.burned)}),i.jsxs("div",{style:{fontSize:"0.75rem",color:"#F44336",fontWeight:600},children:[(ne.burned/Se*100).toFixed(2),"%"]}),i.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:i.jsx("div",{style:{width:`${Math.min(ne.burned/Se*100,100)}%`,height:"100%",background:"#F44336",borderRadius:"2px"}})})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.05) 100%)",border:"1px solid rgba(255,152,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"1.8rem",marginBottom:"4px"},children:"💱"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",letterSpacing:"1px",marginBottom:"4px"},children:"CIRCULATING"}),i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#FF9800"},children:_(ne.circulating)}),i.jsxs("div",{style:{fontSize:"0.75rem",color:"#FF9800",fontWeight:600},children:[(ne.circulating/Se*100).toFixed(1),"%"]}),i.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginTop:"4px"},children:i.jsx("div",{style:{width:`${ne.circulating/Se*100}%`,height:"100%",background:"#FF9800",borderRadius:"2px"}})})]})]}),i.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"8px",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx("span",{style:{fontSize:"0.75rem",color:"#888"},children:"CONTROLLED:"}),i.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#4CAF50"},children:[((ne.dao+ne.dev+ne.lpLocked)/Se*100).toFixed(1),"%"]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx("span",{style:{fontSize:"0.75rem",color:"#888"},children:"PUBLIC FLOAT:"}),i.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#FF9800"},children:[(ne.circulating/Se*100).toFixed(1),"%"]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx("span",{style:{fontSize:"0.75rem",color:"#888"},children:"MARKET CAP:"}),i.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#D4AF37"},children:["$",_(M.dtgcMarketCap)]})]}),i.jsxs("div",{style:{fontSize:"0.6rem",color:"#666",display:"flex",alignItems:"center",gap:"4px"},children:[i.jsx("span",{style:{display:"inline-block",width:"6px",height:"6px",borderRadius:"50%",background:"#4CAF50",animation:"pulse 2s infinite"}}),"LIVE DATA"]})]}),i.jsxs("div",{className:"ticker-container",children:[i.jsxs("div",{style:{fontSize:"0.6rem",color:"#666",textAlign:"center",marginBottom:"6px",letterSpacing:"1px",textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:["📊 Top Holder Wallets (Excluding DAO/Dev) • Hover to Pause",lt.loading?i.jsx("span",{style:{color:"#FF9800"},children:"⏳ Loading..."}):i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",color:"#4CAF50"},children:[i.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#4CAF50",animation:"pulse 2s infinite"}}),"LIVE"]})]}),i.jsxs("div",{className:"ticker-track",children:[(lt.holders||[]).map((m,F)=>i.jsxs("div",{className:"ticker-item",children:[i.jsx("span",{className:"ticker-address",children:m.address}),i.jsxs("span",{className:"ticker-balance",children:[_(m.balance)," DTGC"]}),i.jsx("span",{className:"ticker-label",children:m.label})]},`a-${F}`)),(lt.holders||[]).map((m,F)=>i.jsxs("div",{className:"ticker-item",children:[i.jsx("span",{className:"ticker-address",children:m.address}),i.jsxs("span",{className:"ticker-balance",children:[_(m.balance)," DTGC"]}),i.jsx("span",{className:"ticker-label",children:m.label})]},`b-${F}`))]}),i.jsxs("div",{style:{fontSize:"0.55rem",color:"#555",textAlign:"center",marginTop:"6px"},children:["Total Tracked: ",_((lt.holders||[]).reduce((m,F)=>m+F.balance,0))," DTGC • ",(lt.holders||[]).length," Wallets"]})]})]})}),i.jsxs("main",{className:"main-content",children:[w==="stake"&&i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title gold-text",children:"SELECT YOUR TIER"}),i.jsx("div",{className:"section-divider"}),i.jsx("p",{className:"section-description",children:"Choose your staking tier based on lock duration and desired APR"})]}),i.jsxs("div",{className:"tiers-grid",children:[rl.map(m=>i.jsxs("div",{className:`tier-card ${we===m.id&&!K?"selected":""}`,style:{"--tier-gradient":m.gradient},onClick:()=>{pn(m.id),C(!1)},children:[i.jsx("div",{className:"tier-icon",children:m.icon}),i.jsx("div",{className:"tier-name",style:{color:m.color},children:m.name}),i.jsxs("div",{className:"tier-min-invest",style:{fontSize:"0.7rem",color:"var(--text-muted)",marginBottom:"8px"},children:["Min: $",m.minInvest.toLocaleString()]}),i.jsxs("div",{className:"tier-apr-container",children:[i.jsxs("div",{className:"tier-apr gold-text",children:[m.apr,"%"]}),i.jsx("div",{className:"tier-apr-label",children:"APR"})]}),i.jsxs("div",{className:"tier-features",children:[i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Lock"}),i.jsxs("span",{className:"tier-feature-value",children:[m.lockDays," Days"]})]}),i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Bonus"}),i.jsxs("span",{className:"tier-feature-value",children:["+",m.bonus,"%"]})]})]}),i.jsx("span",{className:"tier-badge",children:"DTGC"})]},m.id)),i.jsxs("div",{className:`tier-card diamond ${K&&we===3?"selected":""}`,onClick:()=>{pn(3),C(!0)},children:[i.jsx("div",{className:"tier-icon",children:Ue.icon}),i.jsx("div",{className:"tier-name",style:{color:Ue.color},children:Ue.name}),i.jsxs("div",{className:"tier-subtitle",children:[Ue.lpPair," LP • ",Ue.boost,"x BOOST!"]}),i.jsxs("div",{className:"tier-min-invest",style:{fontSize:"0.7rem",color:"var(--text-muted)",marginBottom:"8px"},children:["Min: $",Ue.minInvest]}),i.jsxs("div",{className:"tier-apr-container",children:[i.jsxs("div",{className:"tier-apr",style:{color:"var(--diamond-dark)"},children:[Ue.apr*Ue.boost,"%"]}),i.jsx("div",{className:"tier-apr-label",children:"EFFECTIVE APR"})]}),i.jsxs("div",{className:"tier-features",children:[i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Lock"}),i.jsxs("span",{className:"tier-feature-value",children:[Ue.lockDays," Days"]})]}),i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Bonus"}),i.jsxs("span",{className:"tier-feature-value",children:["+",Ue.bonus,"%"]})]}),i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Boost"}),i.jsxs("span",{className:"tier-feature-value",style:{color:"#4CAF50",fontWeight:"700"},children:[Ue.boost,"x!"]})]})]}),i.jsx("span",{className:"tier-badge lp",children:"LP"})]}),i.jsxs("div",{className:`tier-card diamond-plus ${K&&we===4?"selected":""}`,onClick:()=>{pn(4),C(!0)},style:{background:"linear-gradient(135deg, rgba(156,39,176,0.1) 0%, rgba(123,31,162,0.15) 100%)",border:"2px solid #9C27B0"},children:[i.jsx("div",{className:"tier-icon",style:{fontSize:"2.5rem"},children:$e.icon}),i.jsx("div",{className:"tier-name",style:{color:$e.color},children:$e.name}),i.jsxs("div",{className:"tier-subtitle",style:{color:"#9C27B0"},children:[$e.lpPair," LP • ",$e.boost,"x BOOST!"]}),i.jsxs("div",{className:"tier-min-invest",style:{fontSize:"0.7rem",color:"var(--text-muted)",marginBottom:"8px"},children:["Min: $",$e.minInvest]}),i.jsxs("div",{className:"tier-apr-container",children:[i.jsxs("div",{className:"tier-apr",style:{color:"#9C27B0",fontSize:"2.2rem"},children:[$e.apr*$e.boost,"%"]}),i.jsx("div",{className:"tier-apr-label",children:"EFFECTIVE APR"})]}),i.jsxs("div",{className:"tier-features",children:[i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Lock"}),i.jsxs("span",{className:"tier-feature-value",children:[$e.lockDays," Days"]})]}),i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Bonus"}),i.jsxs("span",{className:"tier-feature-value",children:["+",$e.bonus,"%"]})]}),i.jsxs("div",{className:"tier-feature",children:[i.jsx("span",{className:"tier-feature-label",children:"Boost"}),i.jsxs("span",{className:"tier-feature-value",style:{color:"#9C27B0",fontWeight:"700"},children:[$e.boost,"x!!"]})]})]}),i.jsx("span",{className:"tier-badge lp",style:{background:"linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)"},children:"LP+"})]})]}),we!==null&&k&&i.jsxs("div",{className:"staking-panel",children:[i.jsx("h3",{className:"panel-title gold-text",children:K?"💎 STAKE LP TOKENS":`${(As=rl[we])==null?void 0:As.icon} STAKE DTGC`}),i.jsxs("div",{className:"input-group",children:[i.jsxs("div",{className:"input-header",children:[i.jsx("span",{className:"input-label",children:"Amount"}),i.jsxs("span",{className:"balance-display",onClick:()=>bt(K?b:j),children:["Balance: ",_(parseFloat(K?b:j))," ",K?"LP":"DTGC"]})]}),i.jsxs("div",{className:"input-container",children:[i.jsx("input",{type:"number",className:"stake-input",placeholder:"0.00",value:pt,onChange:m=>bt(m.target.value)}),i.jsxs("div",{className:"input-suffix",children:[i.jsx("span",{className:"token-badge",children:K?"LP":"DTGC"}),i.jsx("button",{className:"max-btn",onClick:()=>bt(K?b:j),children:"MAX"})]})]})]}),i.jsxs("button",{className:"action-btn primary",onClick:gc,disabled:Or||!pt||parseFloat(pt)<=0,children:[Or&&i.jsx("span",{className:"spinner"}),K?"Stake LP Tokens":"Stake DTGC"]}),i.jsxs("div",{className:"fee-breakdown",children:[i.jsxs("div",{className:"fee-title",children:["TAX STRUCTURE ",i.jsx("span",{style:{fontSize:"0.7rem",color:"var(--gold)",cursor:"pointer"},onClick:()=>O("whitepaper"),children:"📄 Details"})]}),i.jsxs("div",{className:"fee-row",children:[i.jsx("span",{children:"Entry Tax"}),i.jsx("span",{style:{color:"#4CAF50"},children:"1.5%"})]}),i.jsxs("div",{className:"fee-row",children:[i.jsx("span",{children:"Exit Tax"}),i.jsx("span",{style:{color:"#4CAF50"},children:"1.5%"})]}),i.jsxs("div",{className:"fee-row",children:[i.jsx("span",{children:"EES (Emergency End Stake)"}),i.jsx("span",{style:{color:"#FF5722"},children:"12%"})]}),i.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginTop:"8px",textAlign:"center"},children:"Entry/Exit: 0.75% DAO • 0.25% Dev • 0.25% DTGC/URMOM LP • 0.15% DTGC/PLS LP • 0.1% Burn"}),i.jsx("div",{style:{fontSize:"0.6rem",color:"#4CAF50",marginTop:"4px",textAlign:"center"},children:"✓ All tiers profitable • Only 3% total fees"})]})]}),k&&((_s=d==null?void 0:d.positions)==null?void 0:_s.length)>0&&i.jsxs("div",{style:{maxWidth:"700px",margin:"40px auto 0",background:"var(--bg-card)",borderRadius:"24px",padding:"30px",border:"1px solid var(--border-color)"},children:[i.jsx("h3",{style:{fontFamily:"Cinzel, serif",fontSize:"1.2rem",letterSpacing:"3px",marginBottom:"20px",textAlign:"center",color:"var(--gold)"},children:"📊 YOUR STAKED POSITIONS"}),d.positions.map(m=>{const F=Date.now(),U=F<m.endTime,B=Math.max(0,Math.ceil((m.endTime-F)/(24*60*60*1e3))),$=(F-m.startTime)/(24*60*60*1e3),W=m.amount*(m.apr/100)/365*$;return i.jsx("div",{style:{background:e?"rgba(212,175,55,0.1)":"rgba(212,175,55,0.05)",border:`1px solid ${U?"rgba(255,107,107,0.3)":"rgba(76,175,80,0.3)"}`,borderRadius:"16px",padding:"20px",marginBottom:"15px"},children:i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"15px"},children:[i.jsxs("div",{children:[i.jsxs("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,fontSize:"1.1rem",color:m.isLP?"var(--diamond)":"var(--gold)"},children:[m.tier," ",m.isLP?"(LP)":"(DTGC)"]}),i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"4px"},children:["Staked: ",i.jsx("strong",{children:_(m.amount)})," • APR: ",i.jsxs("strong",{children:[m.apr,"%"]})]}),i.jsx("div",{style:{fontSize:"0.8rem",color:U?"#FF6B6B":"#4CAF50",marginTop:"4px"},children:U?`🔒 ${B} days remaining`:"✅ Unlocked - Ready to claim!"})]}),i.jsxs("div",{style:{textAlign:"right"},children:[i.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Rewards Earned"}),i.jsxs("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#4CAF50"},children:["+",_(W)," ",m.isLP?"LP":"DTGC"]}),i.jsxs("div",{style:{fontSize:"0.85rem",color:"#4CAF50",opacity:.8},children:["≈ $",_(W*M.dtgc)]}),i.jsx("button",{onClick:()=>hc(m.id),style:{marginTop:"10px",padding:"8px 20px",background:U?"linear-gradient(135deg, #FF6B6B, #FF8E53)":"linear-gradient(135deg, #4CAF50, #8BC34A)",border:"none",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",color:"#FFF",cursor:"pointer"},children:U?"⚠️ Early Unstake (20% Fee)":"✅ Claim All"})]})]})},m.id)})]}),!k&&i.jsxs("div",{className:"connect-prompt",children:[i.jsx("div",{className:"connect-prompt-icon",children:"🔐"}),i.jsx("p",{className:"connect-prompt-text",children:"Connect your wallet to start staking DTGC"}),i.jsx("button",{className:"action-btn primary",style:{maxWidth:"260px",margin:"0 auto"},onClick:Ls,children:"Connect Wallet"})]}),i.jsxs("div",{className:"video-showcase",children:[i.jsx("p",{className:"video-label",children:"✦ DTGC STAKING ✦"}),i.jsx("div",{className:"video-container",children:i.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[i.jsx("source",{src:ut.stake,type:"video/quicktime"}),i.jsx("source",{src:ut.stake.replace(".mov",".mp4"),type:"video/mp4"})]})})]})]}),w==="burn"&&i.jsx("section",{className:"section",children:i.jsxs("div",{className:"burn-section",children:[i.jsxs("div",{className:"burn-header",children:[i.jsx("span",{className:"burn-icon",children:"🔥"}),i.jsxs("div",{className:"burn-header-text",children:[i.jsx("h2",{children:"🎊 $URMOM SUPER STATS 🎊"}),i.jsxs("p",{children:["Live Price: $",M.urmom.toFixed(7)," ",M.loading?"⏳":"🟢"," • ",i.jsx("a",{href:Le.dexscreener,target:"_blank",rel:"noopener noreferrer",style:{color:"#FF9800"},children:"DexScreener →"})]})]}),i.jsxs("div",{className:"burn-links",children:[i.jsx("a",{href:Le.dexscreener,target:"_blank",rel:"noopener noreferrer",className:"burn-link-btn",children:"📊 DexScreener"}),i.jsx("a",{href:Le.coingecko,target:"_blank",rel:"noopener noreferrer",className:"burn-link-btn",children:"🦎 CoinGecko"}),i.jsx("button",{onClick:cc,className:"burn-link-btn",style:{cursor:"pointer",border:"none",background:"rgba(76,175,80,0.2)"},disabled:M.loading,children:M.loading?"⏳ Loading...":"🔄 Refresh Prices"})]}),M.lastUpdated&&i.jsxs("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",marginTop:"8px"},children:["Last updated: ",M.lastUpdated.toLocaleTimeString()," • Auto-refreshes every 60s"]})]}),i.jsxs("div",{className:"burn-main-stats",children:[i.jsxs("div",{className:"burn-stat-card",children:[i.jsx("div",{className:"burn-stat-emoji",children:"💵"}),i.jsxs("div",{className:"burn-stat-value",children:["$",M.urmom.toFixed(7)]}),i.jsxs("a",{href:Le.dexscreener,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.6rem",color:"#FF9800",textDecoration:"none"},children:["📊 ",M.loading?"Loading...":"🟢 Live"]}),i.jsx("div",{className:"burn-stat-label",children:"URMOM Price"})]}),i.jsxs("div",{className:"burn-stat-card",children:[i.jsx("div",{className:"burn-stat-emoji",children:"🪙"}),i.jsxs("div",{className:"burn-stat-value",children:["$",M.dtgc.toFixed(7)]}),i.jsxs("a",{href:Le.dexscreenerDTGC,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.6rem",color:"#FFD700",textDecoration:"none"},children:["📊 ",M.loading?"Loading...":"🟢 Live"]}),i.jsx("div",{className:"burn-stat-label",children:"DTGC Price"})]}),i.jsxs("div",{className:"burn-stat-card",children:[i.jsx("div",{className:"burn-stat-emoji",children:"🔥"}),i.jsx("div",{className:"burn-stat-value",children:_(Z.totalDeadWallet)}),i.jsx("div",{className:"burn-stat-subvalue",style:{color:"#FF9800"},children:"545,616,403 URMOM"}),i.jsx("div",{className:"burn-stat-label",children:"Burnt Tokens"})]}),i.jsxs("div",{className:"burn-stat-card",style:{background:"linear-gradient(135deg, rgba(255,152,0,0.15) 0%, rgba(255,87,34,0.1) 100%)"},children:[i.jsx("div",{className:"burn-stat-emoji",children:"💎"}),i.jsx("div",{className:"burn-stat-value",children:nr(Z.totalDeadWallet*M.urmom)}),i.jsxs("div",{className:"burn-stat-subvalue",style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.7)"},children:[_(Z.totalDeadWallet)," × $",M.urmom.toFixed(7)]}),i.jsx("div",{className:"burn-stat-label",children:"LIVE BURNED VALUE"})]})]}),i.jsxs("div",{style:{background:"rgba(255, 152, 0, 0.1)",border:"1px solid rgba(255, 152, 0, 0.3)",borderRadius:"12px",padding:"16px 20px",marginBottom:"35px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx("span",{style:{fontSize:"1.5rem"},children:"🧮"}),i.jsxs("span",{style:{fontFamily:"Cinzel, serif",fontSize:"0.85rem",letterSpacing:"1px",color:"rgba(255,255,255,0.8)"},children:["LIVE CALCULATION ",M.loading?"⏳":"🟢"]})]}),i.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.9rem",color:"#FF9800"},children:[ll(Z.totalDeadWallet)," URMOM × $",M.urmom.toFixed(7)," = ",i.jsx("strong",{style:{color:"#FFD700",fontSize:"1.1rem"},children:nr(Z.totalDeadWallet*M.urmom)})]})]}),i.jsxs("div",{className:"burn-progress-section",children:[i.jsxs("div",{className:"burn-progress-header",children:[i.jsx("span",{className:"burn-progress-title",children:"🏁 URMOM TOTAL BURNED / REMOVED"}),i.jsxs("span",{className:"burn-progress-percent",children:[Z.burnPercentage,"%"]})]}),i.jsx("div",{className:"burn-progress-bar",children:i.jsx("div",{className:"burn-progress-fill",style:{width:`${Z.burnPercentage}%`}})}),i.jsx("div",{className:"burn-progress-blocks",children:Array.from({length:20},(m,F)=>i.jsx("div",{className:`burn-block ${F<Math.floor(Z.burnPercentage/5)?"filled":""}`},F))})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(184,134,11,0.15) 100%)",border:"2px solid rgba(212,175,55,0.4)",borderRadius:"16px",padding:"24px",marginBottom:"35px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"},children:[i.jsx("span",{style:{fontSize:"2rem"},children:"🪙🔥"}),i.jsxs("div",{children:[i.jsx("h3",{style:{fontFamily:"Cinzel, serif",color:"#D4AF37",margin:0,letterSpacing:"2px"},children:"DTGC BURN TRACKER"}),i.jsx("p",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",margin:"4px 0 0"},children:"0.25% of every Entry/Exit tax is burned forever"})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px"},children:[i.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"1px solid rgba(212,175,55,0.3)"},children:[i.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"1px",marginBottom:"8px"},children:"DTGC BURNED"}),i.jsx("div",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#D4AF37"},children:_(0)}),i.jsx("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"},children:"Coming soon..."})]}),i.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"1px solid rgba(212,175,55,0.3)"},children:[i.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"1px",marginBottom:"8px"},children:"USD VALUE"}),i.jsx("div",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#4CAF50"},children:"$0.00"}),i.jsxs("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"},children:["@ $",M.dtgc.toFixed(7)]})]}),i.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"16px",textAlign:"center",border:"1px solid rgba(212,175,55,0.3)"},children:[i.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"1px",marginBottom:"8px"},children:"% OF SUPPLY"}),i.jsx("div",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#FF9800"},children:"0.00%"}),i.jsx("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"},children:"of 1B total"})]})]}),i.jsx("div",{style:{marginTop:"16px",padding:"12px",background:"rgba(212,175,55,0.1)",borderRadius:"8px",textAlign:"center"},children:i.jsxs("span",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.7)"},children:["Burn Address: ",i.jsx("code",{style:{color:"#D4AF37"},children:je.burn})]})})]}),i.jsxs("div",{className:"dead-wallet-section",children:[i.jsx("h3",{className:"dead-wallet-title",children:"🕳️ DEAD WALLET BREAKDOWN"}),i.jsx("div",{className:"dead-wallet-grid",children:Object.entries(Z.deadWallets).map(([m,F],U)=>i.jsxs("div",{className:"dead-wallet-row",children:[i.jsxs("span",{className:"dead-wallet-address",children:[m.slice(0,10),"...",m.slice(-4)]}),i.jsx("span",{className:`dead-wallet-amount ${F===0?"zero":""}`,children:F===0?"0.00":ll(F)})]},U))})]}),i.jsxs("div",{className:"lp-burn-section",children:[i.jsx("h3",{className:"lp-burn-title",children:"🧺 LP TOKENS BURNED"}),i.jsx("div",{className:"lp-burn-grid",children:Z.lpBurnPercentages.map((m,F)=>i.jsxs("div",{className:"lp-burn-item",children:[i.jsxs("div",{className:"lp-burn-header",children:[i.jsx("span",{className:"lp-burn-name",children:m.pair}),i.jsxs("span",{className:"lp-burn-percent",children:[m.percentage.toFixed(4),"%"]})]}),i.jsx("div",{className:"lp-burn-bar",children:i.jsx("div",{className:"lp-burn-fill",style:{width:`${m.percentage}%`}})})]},F))})]}),i.jsxs("div",{className:"lp-urmom-section",children:[i.jsx("h3",{className:"lp-urmom-title",children:"📊 LP BURNED BREAKDOWN (URMOM × LIVE PRICE)"}),i.jsx("div",{className:"lp-urmom-grid",children:Z.lpUrmomBreakdown.map((m,F)=>i.jsxs("div",{className:"lp-urmom-card",style:{"--card-color":m.color},children:[i.jsx("div",{className:"lp-urmom-pool",children:m.pool}),i.jsx("div",{className:"lp-urmom-tokens",children:_(m.tokens)}),i.jsx("div",{className:"lp-urmom-usd",children:nr(m.tokens*M.urmom)}),i.jsxs("div",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",marginTop:"4px"},children:[_(m.tokens)," × $",M.urmom.toFixed(7)]})]},F))}),i.jsx("div",{style:{textAlign:"center",marginTop:"20px",padding:"12px",background:"rgba(255,152,0,0.1)",borderRadius:"10px"},children:i.jsxs("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.85rem"},children:[i.jsx("strong",{children:"Total LP URMOM:"})," ",_(Ri)," = ",i.jsx("strong",{style:{color:"#FF9800"},children:nr(Ri*M.urmom)})]})})]}),i.jsxs("div",{className:"burn-address-box",children:[i.jsxs("div",{className:"burn-address-info",children:[i.jsx("span",{className:"burn-address-label",children:"PulseChain Burn Address (0x...369)"}),i.jsx("span",{className:"burn-address-value",children:je.burn})]}),i.jsx("a",{href:`${nl}/address/${je.burn}`,target:"_blank",rel:"noopener noreferrer",className:"burn-view-btn",children:"View on PulseScan →"})]})]})}),w==="vote"&&i.jsx("section",{className:"section",children:i.jsxs("div",{className:"voting-section",children:[i.jsxs("div",{className:"voting-header",children:[i.jsx("span",{className:"voting-icon",children:"🗳️"}),i.jsxs("div",{className:"voting-header-text",children:[i.jsx("h2",{children:"DAO GOVERNANCE"}),i.jsx("p",{children:"Vote on EES penalty fund allocation"})]})]}),i.jsxs("div",{className:"voting-eligibility",children:[i.jsx("div",{className:"eligibility-title",children:"VOTING ELIGIBILITY"}),i.jsxs("div",{className:"eligibility-items",children:[i.jsxs("div",{className:"eligibility-item",children:[i.jsx("span",{className:`eligibility-check ${P||Q?"active":"inactive"}`,children:P||Q?"✓":"○"}),i.jsx("span",{children:"Verified Staker"})]}),i.jsxs("div",{className:"eligibility-item",children:[i.jsx("span",{className:`eligibility-check ${parseFloat(j)>=1e6?"active":"inactive"}`,children:parseFloat(j)>=1e6?"✓":"○"}),i.jsx("span",{children:"Hold 1M+ DTGC"})]}),i.jsxs("div",{className:"eligibility-item",children:[i.jsx("span",{className:`eligibility-check ${Gn?"active":"inactive"}`,children:Gn?"✓":"○"}),i.jsx("span",{children:Gn?"You Can Vote!":"Not Eligible"})]})]})]}),i.jsx("div",{className:"voting-options-grid",children:Qf.map(m=>i.jsxs("div",{className:`voting-option ${Es===m.id?"selected":""}`,onClick:()=>sc(m.id),children:[i.jsxs("div",{className:"voting-option-header",children:[i.jsx("span",{className:"voting-option-letter",children:["A","B","C","D"][m.id]}),i.jsx("span",{className:"voting-option-name",children:m.name})]}),i.jsx("p",{className:"voting-option-desc",children:m.description}),i.jsxs("div",{className:"voting-option-votes",children:[i.jsx("div",{className:"votes-bar",children:i.jsx("div",{className:"votes-fill",style:{width:`${(m.id+1)*15}%`}})}),i.jsxs("span",{className:"votes-count",children:[(m.id+1)*3," votes"]})]})]},m.id))}),i.jsx("button",{className:"vote-btn",disabled:!Gn||Es===null,onClick:()=>it("Voting coming soon!","info"),children:k?Gn?"Cast Your Vote":"Not Eligible":"Connect Wallet"})]})}),w==="whitepaper"&&i.jsxs("section",{className:"section whitepaper-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title gold-text",children:"WHITEPAPER"}),i.jsx("div",{className:"section-divider"}),i.jsx("p",{className:"section-description",children:"DT Gold Coin • Premium Staking Protocol"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px",marginBottom:"40px"},children:[i.jsxs("a",{href:"/docs/DTGC-V18-White-Paper.docx",download:!0,style:{background:"linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(184,134,11,0.15) 100%)",border:"2px solid rgba(212,175,55,0.4)",borderRadius:"16px",padding:"24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"all 0.3s ease"},children:[i.jsx("span",{style:{fontSize:"2.5rem"},children:"📄"}),i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,color:"var(--gold)",fontSize:"1.1rem"},children:"WHITE PAPER"}),i.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Public Overview • V18"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:"4px"},children:"📥 Download .docx"})]})]}),i.jsxs("a",{href:"/docs/DTGC-V18-Gold-Paper-DiamondPlus.docx",download:!0,style:{background:"linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(184,134,11,0.2) 100%)",border:"2px solid rgba(212,175,55,0.5)",borderRadius:"16px",padding:"24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"all 0.3s ease"},children:[i.jsx("span",{style:{fontSize:"2.5rem"},children:"📜"}),i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,color:"var(--gold)",fontSize:"1.1rem"},children:"GOLD PAPER"}),i.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Full Tokenomics • Diamond+ Edition"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:"4px"},children:"📥 Download .docx"})]})]}),i.jsxs("a",{href:"/docs/DTGC-V18-Gold-Paper-Quant.docx",download:!0,style:{background:"linear-gradient(135deg, rgba(26,35,126,0.1) 0%, rgba(48,63,159,0.15) 100%)",border:"2px solid rgba(26,35,126,0.4)",borderRadius:"16px",padding:"24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"all 0.3s ease"},children:[i.jsx("span",{style:{fontSize:"2.5rem"},children:"📊"}),i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"Cinzel, serif",fontWeight:700,color:"#5C6BC0",fontSize:"1.1rem"},children:"GOLD PAPER QUANT"}),i.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Risk Analysis • ROI Modeling"}),i.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:"4px"},children:"📥 Download .docx"})]})]})]}),i.jsxs("div",{className:"wp-card",children:[i.jsx("h3",{className:"wp-card-title gold-text",children:"📜 Introduction"}),i.jsxs("div",{className:"wp-card-content",children:[i.jsx("p",{children:"DT Gold Coin (DTGC) is a premium staking protocol built on PulseChain, designed to reward long-term holders while creating sustainable tokenomics through strategic burns and DAO governance."}),i.jsx("p",{children:"Paired with URMOM token, DTGC creates a dual-token ecosystem that benefits both communities through liquidity provision, staking rewards, and deflationary mechanisms."})]})]}),i.jsxs("div",{className:"wp-card",children:[i.jsx("h3",{className:"wp-card-title gold-text",children:"💰 V5 GOLD PAPER TOKENOMICS"}),i.jsxs("div",{className:"wp-card-content",children:[i.jsx("p",{children:i.jsx("strong",{children:"Total Supply: 1,000,000,000 DTGC"})}),i.jsx("p",{style:{color:"var(--gold)",fontWeight:"600",marginBottom:"16px"},children:"⚠️ 91% CONTROLLED • ONLY 9% FLOAT!"}),i.jsxs("table",{className:"tokenomics-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Allocation"}),i.jsx("th",{children:"Amount"}),i.jsx("th",{children:"Percentage"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"🏛️ DAO Pool"}),i.jsx("td",{children:"500,000,000"}),i.jsx("td",{style:{color:"#4CAF50",fontWeight:"700"},children:"50%"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"👨‍💻 Dev Wallet"}),i.jsx("td",{children:"323,000,000"}),i.jsx("td",{children:"32.3%"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"💱 Circulating"}),i.jsx("td",{children:"90,000,000"}),i.jsx("td",{style:{color:"#FF9800"},children:"9%"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"🔒 LP Locked"}),i.jsx("td",{children:"87,000,000"}),i.jsx("td",{children:"8.7%"})]})]})]}),i.jsxs("div",{className:"wp-highlight",children:[i.jsx("strong",{children:"V18 Tax Structure (Optimized for Staker Profitability):"}),i.jsx("br",{}),i.jsxs("div",{style:{marginTop:"8px"},children:[i.jsx("strong",{style:{color:"#4CAF50"},children:"Entry Tax (1.5%):"})," 0.75% DAO • 0.25% Dev • 0.25% DTGC/URMOM LP • 0.15% DTGC/PLS LP • 0.1% Burn",i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{style:{color:"#4CAF50"},children:"Exit Tax (1.5%):"})," Same breakdown • ",i.jsx("strong",{children:"Only 3% total fees!"}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{style:{color:"#FF5722"},children:"EES - Emergency End Stake (12%):"})," 7% DAO • 3% Dev • 2% Auto LP"]})]})]})]}),i.jsxs("div",{className:"wp-card",children:[i.jsx("h3",{className:"wp-card-title gold-text",children:"⭐ V18 Staking Tiers (All Profitable!)"}),i.jsxs("div",{className:"wp-card-content",children:[i.jsxs("table",{className:"tokenomics-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Tier"}),i.jsx("th",{children:"Min $"}),i.jsx("th",{children:"Lock"}),i.jsx("th",{children:"APR"}),i.jsx("th",{children:"Boost"}),i.jsx("th",{children:"Asset"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"🥈 Silver"}),i.jsx("td",{children:"$200"}),i.jsx("td",{children:"60 days"}),i.jsx("td",{children:"22%"}),i.jsx("td",{children:"1x"}),i.jsx("td",{children:"DTGC"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"🥇 Gold"}),i.jsx("td",{children:"$500"}),i.jsx("td",{children:"90 days"}),i.jsx("td",{children:"24%"}),i.jsx("td",{children:"1x"}),i.jsx("td",{children:"DTGC"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"🐋 Whale"}),i.jsx("td",{children:"$10k"}),i.jsx("td",{children:"180 days"}),i.jsx("td",{children:"26%"}),i.jsx("td",{children:"1x"}),i.jsx("td",{children:"DTGC"})]}),i.jsxs("tr",{style:{background:"rgba(0, 188, 212, 0.1)"},children:[i.jsx("td",{children:"💎 Diamond"}),i.jsx("td",{children:"$1,000"}),i.jsx("td",{children:"90 days"}),i.jsx("td",{style:{color:"#00BCD4",fontWeight:"700"},children:"40%"}),i.jsx("td",{style:{color:"#4CAF50",fontWeight:"700"},children:"1.5x"}),i.jsx("td",{children:"DTGC/PLS LP"})]}),i.jsxs("tr",{style:{background:"rgba(156, 39, 176, 0.15)"},children:[i.jsx("td",{children:"💎✨ Diamond+"}),i.jsx("td",{children:"$1,000"}),i.jsx("td",{children:"90 days"}),i.jsx("td",{style:{color:"#9C27B0",fontWeight:"700"},children:"50%"}),i.jsx("td",{style:{color:"#9C27B0",fontWeight:"700"},children:"2x!"}),i.jsx("td",{children:"DTGC/URMOM LP"})]})]})]}),i.jsxs("div",{className:"wp-highlight",children:[i.jsx("strong",{children:"✅ All Tiers Profitable!"})," With only 3% total fees:",i.jsx("br",{}),"Silver: ",i.jsx("span",{style:{color:"#4CAF50"},children:"+0.6% net"})," • Gold: ",i.jsx("span",{style:{color:"#4CAF50"},children:"+2.9% net"})," • Whale: ",i.jsx("span",{style:{color:"#4CAF50"},children:"+9.8% net"}),i.jsx("br",{}),"Diamond: ",i.jsx("span",{style:{color:"#00BCD4"},children:"+11.8% net (60% eff)"})," • Diamond+: ",i.jsx("span",{style:{color:"#9C27B0"},children:"+21.7% net (100% eff)"})]})]})]}),i.jsxs("div",{className:"wp-card",children:[i.jsx("h3",{className:"wp-card-title gold-text",children:"📈 Dynamic APR System"}),i.jsxs("div",{className:"wp-card-content",children:[i.jsx("p",{children:"APR reduces as TVL grows to ensure DAO sustainability:"}),i.jsxs("table",{className:"tokenomics-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"TVL Phase"}),i.jsx("th",{children:"Multiplier"}),i.jsx("th",{children:"Gold APR"}),i.jsx("th",{children:"Diamond APR"}),i.jsx("th",{children:"Diamond+ APR"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{style:{color:"#4CAF50"},children:"Genesis (0-50M)"}),i.jsx("td",{children:"100%"}),i.jsx("td",{children:"24%"}),i.jsx("td",{style:{fontWeight:"700"},children:"60%"}),i.jsx("td",{style:{fontWeight:"700",color:"#9C27B0"},children:"100%"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"Early (50-100M)"}),i.jsx("td",{children:"85%"}),i.jsx("td",{children:"20.4%"}),i.jsx("td",{children:"51%"}),i.jsx("td",{style:{color:"#9C27B0"},children:"85%"})]}),i.jsxs("tr",{children:[i.jsx("td",{style:{color:"#FFC107"},children:"Growth (100-200M)"}),i.jsx("td",{children:"70%"}),i.jsx("td",{children:"16.8%"}),i.jsx("td",{children:"42%"}),i.jsx("td",{style:{color:"#9C27B0"},children:"70%"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"Mature (200-350M)"}),i.jsx("td",{children:"50%"}),i.jsx("td",{children:"12%"}),i.jsx("td",{children:"30%"}),i.jsx("td",{style:{color:"#9C27B0"},children:"50%"})]}),i.jsxs("tr",{children:[i.jsx("td",{style:{color:"#FF5722"},children:"Saturated (350-500M)"}),i.jsx("td",{children:"35%"}),i.jsx("td",{children:"8.4%"}),i.jsx("td",{children:"21%"}),i.jsx("td",{style:{color:"#9C27B0"},children:"35%"})]})]})]})]})]}),i.jsxs("div",{className:"wp-card",children:[i.jsx("h3",{className:"wp-card-title gold-text",children:"🔥 Burn History (Live)"}),i.jsxs("div",{className:"wp-card-content",children:[i.jsxs("p",{children:[i.jsxs("strong",{children:[ll(Z.totalDeadWallet)," URMOM"]})," (",Z.burnPercentage,"% of supply) permanently burned."]}),i.jsxs("div",{className:"wp-highlight",children:[i.jsxs("strong",{children:["🧮 Live Value Calculation ",M.loading?"⏳":"🟢",":"]}),i.jsx("br",{}),ll(Z.totalDeadWallet)," URMOM × $",M.urmom.toFixed(7)," = ",i.jsx("strong",{style:{color:"var(--gold)"},children:nr(Z.totalDeadWallet*M.urmom)})]}),i.jsxs("p",{children:["Burn Address: ",i.jsx("code",{style:{color:"var(--gold)"},children:je.burn})]})]})]}),i.jsxs("div",{className:"wp-video-section",children:[i.jsxs("video",{className:"wp-video-bg",autoPlay:!0,loop:!0,playsInline:!0,children:[i.jsx("source",{src:ut.whitepaper,type:"video/quicktime"}),i.jsx("source",{src:ut.whitepaper.replace(".mov",".mp4"),type:"video/mp4"})]}),i.jsx("div",{className:"wp-video-overlay",children:i.jsx("h3",{className:"wp-video-text gold-text",children:"DTGC • PREMIUM STAKING"})})]})]}),w==="links"&&i.jsxs("section",{className:"section links-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title gold-text",children:"DT & URMOM: GOLD COIN MARBLE"}),i.jsx("div",{className:"section-divider"})]}),i.jsxs("div",{className:"links-grid",children:[i.jsxs("a",{href:Le.xUrmom,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"𝕏"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"URMOM Twitter"}),i.jsx("div",{className:"link-url",children:"@UrmomPulse"})]})]}),i.jsxs("a",{href:Le.xDumpTires,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"𝕏"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"Dump Tires Twitter"}),i.jsx("div",{className:"link-url",children:"@Dump_Tires"})]})]}),i.jsxs("a",{href:Le.telegram,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"📱"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"Telegram"}),i.jsx("div",{className:"link-url",children:"t.me/urmomPulse"})]})]}),i.jsxs("a",{href:Le.website,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"🌐"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"Website"}),i.jsx("div",{className:"link-url",children:"dump.tires"})]})]}),i.jsxs("a",{href:Le.dexscreener,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"📊"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"URMOM DexScreener"}),i.jsx("div",{className:"link-url",children:"URMOM/PLS Chart"})]})]}),i.jsxs("a",{href:Le.dexscreenerDTGC,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"📊"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"DTGC DexScreener"}),i.jsx("div",{className:"link-url",children:"DTGC/URMOM Chart"})]})]}),i.jsxs("a",{href:Le.coingecko,target:"_blank",rel:"noopener noreferrer",className:"link-card",children:[i.jsx("span",{className:"link-icon",children:"🦎"}),i.jsxs("div",{className:"link-info",children:[i.jsx("div",{className:"link-name",children:"CoinGecko"}),i.jsx("div",{className:"link-url",children:"URMOM Listing"})]})]})]}),i.jsxs("div",{className:"contracts-section",children:[i.jsx("h3",{className:"contracts-title gold-text",children:"CONTRACT ADDRESSES"}),[{label:"🪙 DTGC Token",addr:je.dtgc},{label:"👩 URMOM Token",addr:je.urmom},{label:"💧 DTGC/URMOM LP",addr:je.lp},{label:"✅ DTGC Staking V2",addr:je.stakingV2},{label:"✅ LP Staking V2",addr:je.lpStakingV2},{label:"🗳️ DAO Voting",addr:je.daoVoting},{label:"🏛️ DAO Treasury",addr:je.daoTreasury},{label:"🔥 Burn Address",addr:je.burn}].map((m,F)=>i.jsxs("div",{className:"contract-row",children:[i.jsx("span",{className:"contract-label",children:m.label}),i.jsx("span",{className:"contract-address",onClick:()=>xc(m.addr),children:m.addr})]},F))]})]})]}),i.jsxs("footer",{className:"footer",children:[i.jsx("div",{className:"footer-logo gold-text",children:"DTGC"}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:`${nl}/address/${je.stakingV2}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Staking Contract"}),i.jsx("a",{href:`${nl}/address/${je.lpStakingV2}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"LP Staking"}),i.jsx("a",{href:`${nl}/address/${je.daoVoting}`,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"DAO Voting"}),i.jsx("a",{href:Le.telegram,target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"Telegram"})]}),i.jsx("div",{className:"footer-divider"}),i.jsx("p",{className:"footer-text",children:"© 2025 DTGC V18 DIAMOND+ EDITION • dump.tires • Premium Staking on PulseChain • Diamond & Diamond+ LP Tiers 💎✨"})]})]}),i.jsx(l0,{isOpen:ac,onClose:()=>zs(!1),type:uc,amount:pt,tier:K?"Diamond":(Rs=rl[we])==null?void 0:Rs.name}),fn&&i.jsxs("div",{className:`toast ${fn.type}`,children:[fn.type==="success"&&"✓ ",fn.type==="error"&&"✕ ",fn.type==="info"&&"ℹ ",fn.message]})]})}Mi.createRoot(document.getElementById("root")).render(i.jsx(_o.StrictMode,{children:i.jsx(i0,{})}));

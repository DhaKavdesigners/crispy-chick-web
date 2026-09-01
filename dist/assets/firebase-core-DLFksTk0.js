var Au={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ef=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,c=s+2<r.length,d=c?r[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let y=(u&15)<<2|d>>6,R=d&63;c||(R=64,a||(y=64)),n.push(e[f],e[p],e[y],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Gc(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):ef(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const p=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||p==null)throw new nf;const y=i<<2|u>>4;if(n.push(y),d!==64){const R=u<<4&240|d>>2;if(n.push(R),p!==64){const C=d<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rf=function(r){const t=Gc(r);return zc.encodeByteArray(t,!0)},Ds=function(r){return rf(r).replace(/\./g,"")},sf=function(r){try{return zc.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function of(r,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!af(e)||(r[e]=of(r[e],t[e]));return r}function af(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=()=>uf().__FIREBASE_DEFAULTS__,lf=()=>{if(typeof process>"u"||typeof Au>"u")return;const r=Au.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hf=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&sf(r[1]);return t&&JSON.parse(t)},Eo=()=>{try{return cf()||lf()||hf()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kc=()=>{var r;return(r=Eo())===null||r===void 0?void 0:r.config},ny=r=>{var t;return(t=Eo())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ds(JSON.stringify(e)),Ds(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ry(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function mf(){var r;const t=(r=Eo())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pf(){return typeof window<"u"||$c()}function $c(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function sy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ay(){const r=yn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Qc(){return!mf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wc(){try{return typeof indexedDB=="object"}catch{return!1}}function gf(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="FirebaseError";class Je extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_f,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hc.prototype.create)}}class Hc{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?yf(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Je(s,u,n)}}function yf(r,t){return r.replace(If,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const If=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function cy(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Tr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(bu(i)&&bu(a)){if(!Tr(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function bu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(r){const t=[];for(const[e,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function hy(r){const t={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function dy(r){const t=r.indexOf("?");if(!t)return"";const e=r.indexOf("#",t);return r.substring(t,e>0?e:void 0)}function fy(r,t){const e=new Ef(r,t);return e.subscribe.bind(e)}class Ef{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let s;if(t===void 0&&e===void 0&&n===void 0)throw new Error("Missing Observer.");Tf(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:n},s.next===void 0&&(s.next=Mi),s.error===void 0&&(s.error=Mi),s.complete===void 0&&(s.complete=Mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tf(r,t){if(typeof r!="object"||r===null)return!1;for(const e of t)if(e in r&&typeof r[e]=="function")return!0;return!1}function Mi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r){return r&&r._delegate?r._delegate:r}class vr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new df;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Af(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:wf(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wf(r){return r===Ce?void 0:r}function Af(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=[];var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const Yc={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},bf=Q.INFO,Rf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Sf=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Rf[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xc{constructor(t){this.name=t,this._logLevel=bf,this._logHandler=Sf,this._userLogHandler=null,To.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}function Pf(r){To.forEach(t=>{t.setLogLevel(r)})}function Vf(r,t){for(const e of To){let n=null;t&&t.level&&(n=Yc[t.level]),r===null?e.userLogHandler=null:e.userLogHandler=(s,i,...a)=>{const u=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(n??s.logLevel)&&r({level:Q[i].toLowerCase(),message:u,args:a,type:s.name})}}}const Df=(r,t)=>t.some(e=>r instanceof e);let Ru,Su;function Cf(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xf(){return Su||(Su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zc=new WeakMap,Qi=new WeakMap,tl=new WeakMap,Fi=new WeakMap,vo=new WeakMap;function Nf(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(pe(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Zc.set(e,r)}).catch(()=>{}),vo.set(t,r),t}function kf(r){if(Qi.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Qi.set(r,t)}let Wi={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Qi.get(r);if(t==="objectStoreNames")return r.objectStoreNames||tl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return pe(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Of(r){Wi=r(Wi)}function Mf(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Li(this),t,...e);return tl.set(n,t.sort?t.sort():[t]),pe(n)}:xf().includes(r)?function(...t){return r.apply(Li(this),t),pe(Zc.get(this))}:function(...t){return pe(r.apply(Li(this),t))}}function Ff(r){return typeof r=="function"?Mf(r):(r instanceof IDBTransaction&&kf(r),Df(r,Cf())?new Proxy(r,Wi):r)}function pe(r){if(r instanceof IDBRequest)return Nf(r);if(Fi.has(r))return Fi.get(r);const t=Ff(r);return t!==r&&(Fi.set(r,t),vo.set(t,r)),t}const Li=r=>vo.get(r);function Lf(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=pe(a);return n&&a.addEventListener("upgradeneeded",c=>{n(pe(a.result),c.oldVersion,c.newVersion,pe(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Bf=["get","getKey","getAll","getAllKeys","count"],Uf=["put","add","delete","clear"],Bi=new Map;function Pu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Bi.get(t))return Bi.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Uf.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Bf.includes(e)))return;const i=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&c.done]))[0]};return Bi.set(t,i),i}Of(r=>({...r,get:(t,e,n)=>Pu(t,e)||r.get(t,e,n),has:(t,e)=>!!Pu(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(jf(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function jf(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Cs="@firebase/app",Hi="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Xc("@firebase/app"),Gf="@firebase/app-compat",zf="@firebase/analytics-compat",Kf="@firebase/analytics",$f="@firebase/app-check-compat",Qf="@firebase/app-check",Wf="@firebase/auth",Hf="@firebase/auth-compat",Jf="@firebase/database",Yf="@firebase/data-connect",Xf="@firebase/database-compat",Zf="@firebase/functions",tm="@firebase/functions-compat",em="@firebase/installations",nm="@firebase/installations-compat",rm="@firebase/messaging",sm="@firebase/messaging-compat",im="@firebase/performance",om="@firebase/performance-compat",am="@firebase/remote-config",um="@firebase/remote-config-compat",cm="@firebase/storage",lm="@firebase/storage-compat",hm="@firebase/firestore",dm="@firebase/vertexai-preview",fm="@firebase/firestore-compat",mm="firebase",pm="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]",gm={[Cs]:"fire-core",[Gf]:"fire-core-compat",[Kf]:"fire-analytics",[zf]:"fire-analytics-compat",[Qf]:"fire-app-check",[$f]:"fire-app-check-compat",[Wf]:"fire-auth",[Hf]:"fire-auth-compat",[Jf]:"fire-rtdb",[Yf]:"fire-data-connect",[Xf]:"fire-rtdb-compat",[Zf]:"fire-fn",[tm]:"fire-fn-compat",[em]:"fire-iid",[nm]:"fire-iid-compat",[rm]:"fire-fcm",[sm]:"fire-fcm-compat",[im]:"fire-perf",[om]:"fire-perf-compat",[am]:"fire-rc",[um]:"fire-rc-compat",[cm]:"fire-gcs",[lm]:"fire-gcs-compat",[hm]:"fire-fst",[fm]:"fire-fst-compat",[dm]:"fire-vertex","fire-js":"fire-js",[mm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new Map,In=new Map,En=new Map;function Ji(r,t){try{r.container.addComponent(t)}catch(e){te.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function _m(r,t){r.container.addOrOverwriteComponent(t)}function Ar(r){const t=r.name;if(En.has(t))return te.debug(`There were multiple attempts to register component ${t}.`),!1;En.set(t,r);for(const e of ge.values())Ji(e,r);for(const e of In.values())Ji(e,r);return!0}function el(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function ym(r,t,e=wr){el(r,t).clearInstance(e)}function nl(r){return r.options!==void 0}function Im(r){return r.settings!==void 0}function Em(){En.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Hc("app","Firebase",Tm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends rl{constructor(t,e,n,s){const i=e.automaticDataCollectionEnabled!==void 0?e.automaticDataCollectionEnabled:!1,a={name:n,automaticDataCollectionEnabled:i};if(t.apiKey!==void 0)super(t,a,s);else{const u=t;super(u.options,a,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},e),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,e.releaseOnDeref=void 0,Le(Cs,Hi,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(t){this.isDeleted||(this._refCount++,t!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(t,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ol(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw jt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=pm;function il(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:wr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(e||(e=Kc()),!e)throw jt.create("no-options");const i=ge.get(s);if(i){if(Tr(e,i.options)&&Tr(n,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const a=new Jc(s);for(const c of En.values())a.addComponent(c);const u=new rl(e,n,a);return ge.set(s,u),u}function wm(r,t){if(pf()&&!$c())throw jt.create("invalid-server-app-environment");t.automaticDataCollectionEnabled===void 0&&(t.automaticDataCollectionEnabled=!1);let e;nl(r)?e=r.options:e=r;const n=Object.assign(Object.assign({},t),e);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const s=d=>[...d].reduce((f,p)=>Math.imul(31,f)+p.charCodeAt(0)|0,0);if(t.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw jt.create("finalization-registry-not-supported",{});const i=""+s(JSON.stringify(n)),a=In.get(i);if(a)return a.incRefCount(t.releaseOnDeref),a;const u=new Jc(i);for(const d of En.values())u.addComponent(d);const c=new vm(e,t,i,u);return In.set(i,c),c}function Am(r=wr){const t=ge.get(r);if(!t&&r===wr&&Kc())return il();if(!t)throw jt.create("no-app",{appName:r});return t}function bm(){return Array.from(ge.values())}async function ol(r){let t=!1;const e=r.name;ge.has(e)?(t=!0,ge.delete(e)):In.has(e)&&r.decRefCount()<=0&&(In.delete(e),t=!0),t&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Le(r,t,e){var n;let s=(n=gm[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(u.join(" "));return}Ar(new vr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}function Rm(r,t){if(r!==null&&typeof r!="function")throw jt.create("invalid-log-argument");Vf(r,t)}function Sm(r){Pf(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebase-heartbeat-database",Vm=1,br="firebase-heartbeat-store";let Ui=null;function al(){return Ui||(Ui=Lf(Pm,Vm,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(br)}catch(e){console.warn(e)}}}}).catch(r=>{throw jt.create("idb-open",{originalErrorMessage:r.message})})),Ui}async function Dm(r){try{const e=(await al()).transaction(br),n=await e.objectStore(br).get(ul(r));return await e.done,n}catch(t){if(t instanceof Je)te.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});te.warn(e.message)}}}async function Vu(r,t){try{const n=(await al()).transaction(br,"readwrite");await n.objectStore(br).put(t,ul(r)),await n.done}catch(e){if(e instanceof Je)te.warn(e.message);else{const n=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});te.warn(n.message)}}}function ul(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=1024,xm=30*24*60*60*1e3;class Nm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Om(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Du();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=xm}),this._storage.overwrite(this._heartbeatsCache))}catch(n){te.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Du(),{heartbeatsToSend:n,unsentEntries:s}=km(this._heartbeatsCache.heartbeats),i=Ds(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return te.warn(e),""}}}function Du(){return new Date().toISOString().substring(0,10)}function km(r,t=Cm){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Cu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Cu(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Om{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wc()?gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Dm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Cu(r){return Ds(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(r){Ar(new vr("platform-logger",t=>new qf(t),"PRIVATE")),Ar(new vr("heartbeat",t=>new Nm(t),"PRIVATE")),Le(Cs,Hi,r),Le(Cs,Hi,"esm2017"),Le("fire-js","")}Mm("");const my=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Je,SDK_VERSION:sl,_DEFAULT_ENTRY_NAME:wr,_addComponent:Ji,_addOrOverwriteComponent:_m,_apps:ge,_clearComponents:Em,_components:En,_getProvider:el,_isFirebaseApp:nl,_isFirebaseServerApp:Im,_registerComponent:Ar,_removeServiceInstance:ym,_serverApps:In,deleteApp:ol,getApp:Am,getApps:bm,initializeApp:il,initializeServerApp:wm,onLog:Rm,registerVersion:Le,setLogLevel:Sm},Symbol.toStringTag,{value:"Module"}));var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Be,cl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function I(){}I.prototype=g.prototype,E.D=g.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,v,b){for(var _=Array(arguments.length-2),Jt=2;Jt<arguments.length;Jt++)_[Jt-2]=arguments[Jt];return g.prototype[v].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,I){I||(I=0);var T=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)T[v]=g.charCodeAt(I++)|g.charCodeAt(I++)<<8|g.charCodeAt(I++)<<16|g.charCodeAt(I++)<<24;else for(v=0;16>v;++v)T[v]=g[I++]|g[I++]<<8|g[I++]<<16|g[I++]<<24;g=E.g[0],I=E.g[1],v=E.g[2];var b=E.g[3],_=g+(b^I&(v^b))+T[0]+3614090360&4294967295;g=I+(_<<7&4294967295|_>>>25),_=b+(v^g&(I^v))+T[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=v+(I^b&(g^I))+T[2]+606105819&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(g^v&(b^g))+T[3]+3250441966&4294967295,I=v+(_<<22&4294967295|_>>>10),_=g+(b^I&(v^b))+T[4]+4118548399&4294967295,g=I+(_<<7&4294967295|_>>>25),_=b+(v^g&(I^v))+T[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=v+(I^b&(g^I))+T[6]+2821735955&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(g^v&(b^g))+T[7]+4249261313&4294967295,I=v+(_<<22&4294967295|_>>>10),_=g+(b^I&(v^b))+T[8]+1770035416&4294967295,g=I+(_<<7&4294967295|_>>>25),_=b+(v^g&(I^v))+T[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=v+(I^b&(g^I))+T[10]+4294925233&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(g^v&(b^g))+T[11]+2304563134&4294967295,I=v+(_<<22&4294967295|_>>>10),_=g+(b^I&(v^b))+T[12]+1804603682&4294967295,g=I+(_<<7&4294967295|_>>>25),_=b+(v^g&(I^v))+T[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=v+(I^b&(g^I))+T[14]+2792965006&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(g^v&(b^g))+T[15]+1236535329&4294967295,I=v+(_<<22&4294967295|_>>>10),_=g+(v^b&(I^v))+T[1]+4129170786&4294967295,g=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(g^I))+T[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=v+(g^I&(b^g))+T[11]+643717713&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^g&(v^b))+T[0]+3921069994&4294967295,I=v+(_<<20&4294967295|_>>>12),_=g+(v^b&(I^v))+T[5]+3593408605&4294967295,g=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(g^I))+T[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=v+(g^I&(b^g))+T[15]+3634488961&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^g&(v^b))+T[4]+3889429448&4294967295,I=v+(_<<20&4294967295|_>>>12),_=g+(v^b&(I^v))+T[9]+568446438&4294967295,g=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(g^I))+T[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=v+(g^I&(b^g))+T[3]+4107603335&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^g&(v^b))+T[8]+1163531501&4294967295,I=v+(_<<20&4294967295|_>>>12),_=g+(v^b&(I^v))+T[13]+2850285829&4294967295,g=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(g^I))+T[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=v+(g^I&(b^g))+T[7]+1735328473&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^g&(v^b))+T[12]+2368359562&4294967295,I=v+(_<<20&4294967295|_>>>12),_=g+(I^v^b)+T[5]+4294588738&4294967295,g=I+(_<<4&4294967295|_>>>28),_=b+(g^I^v)+T[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=v+(b^g^I)+T[11]+1839030562&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^g)+T[14]+4259657740&4294967295,I=v+(_<<23&4294967295|_>>>9),_=g+(I^v^b)+T[1]+2763975236&4294967295,g=I+(_<<4&4294967295|_>>>28),_=b+(g^I^v)+T[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=v+(b^g^I)+T[7]+4139469664&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^g)+T[10]+3200236656&4294967295,I=v+(_<<23&4294967295|_>>>9),_=g+(I^v^b)+T[13]+681279174&4294967295,g=I+(_<<4&4294967295|_>>>28),_=b+(g^I^v)+T[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=v+(b^g^I)+T[3]+3572445317&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^g)+T[6]+76029189&4294967295,I=v+(_<<23&4294967295|_>>>9),_=g+(I^v^b)+T[9]+3654602809&4294967295,g=I+(_<<4&4294967295|_>>>28),_=b+(g^I^v)+T[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=v+(b^g^I)+T[15]+530742520&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^g)+T[2]+3299628645&4294967295,I=v+(_<<23&4294967295|_>>>9),_=g+(v^(I|~b))+T[0]+4096336452&4294967295,g=I+(_<<6&4294967295|_>>>26),_=b+(I^(g|~v))+T[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=v+(g^(b|~I))+T[14]+2878612391&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~g))+T[5]+4237533241&4294967295,I=v+(_<<21&4294967295|_>>>11),_=g+(v^(I|~b))+T[12]+1700485571&4294967295,g=I+(_<<6&4294967295|_>>>26),_=b+(I^(g|~v))+T[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=v+(g^(b|~I))+T[10]+4293915773&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~g))+T[1]+2240044497&4294967295,I=v+(_<<21&4294967295|_>>>11),_=g+(v^(I|~b))+T[8]+1873313359&4294967295,g=I+(_<<6&4294967295|_>>>26),_=b+(I^(g|~v))+T[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=v+(g^(b|~I))+T[6]+2734768916&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~g))+T[13]+1309151649&4294967295,I=v+(_<<21&4294967295|_>>>11),_=g+(v^(I|~b))+T[4]+4149444226&4294967295,g=I+(_<<6&4294967295|_>>>26),_=b+(I^(g|~v))+T[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=v+(g^(b|~I))+T[2]+718787259&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var I=g-this.blockSize,T=this.B,v=this.h,b=0;b<g;){if(v==0)for(;b<=I;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(T[v++]=E.charCodeAt(b++),v==this.blockSize){s(this,T),v=0;break}}else for(;b<g;)if(T[v++]=E[b++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var I=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=I&255,I/=256;for(this.u(E),E=Array(16),g=I=0;4>g;++g)for(var T=0;32>T;T+=8)E[I++]=this.g[g]>>>T&255;return E};function i(E,g){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=g(E)}function a(E,g){this.h=g;for(var I=[],T=!0,v=E.length-1;0<=v;v--){var b=E[v]|0;T&&b==g||(I[v]=b,T=!1)}this.g=I}var u={};function c(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(d(-E));for(var g=[],I=1,T=0;E>=I;T++)g[T]=E/I|0,I*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return x(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(g,8)),T=p,v=0;v<E.length;v+=8){var b=Math.min(8,E.length-v),_=parseInt(E.substring(v,v+b),g);8>b?(b=d(Math.pow(g,b)),T=T.j(b).add(d(_))):(T=T.j(I),T=T.add(d(_)))}return T}var p=c(0),y=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();for(var E=0,g=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+x(this).toString(E);for(var g=d(Math.pow(E,6)),I=this,T="";;){var v=Y(I,g).g;I=q(I,v.j(g));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,C(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=q(this,E),N(E)?-1:C(E)?0:1};function x(E){for(var g=E.g.length,I=[],T=0;T<g;T++)I[T]=~E.g[T];return new a(I,~E.h).add(y)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0,v=0;v<=g;v++){var b=T+(this.i(v)&65535)+(E.i(v)&65535),_=(b>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=_>>>16,b&=65535,_&=65535,I[v]=_<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function q(E,g){return E.add(x(g))}r.j=function(E){if(C(this)||C(E))return p;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,I=[],T=0;T<2*g;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var b=this.i(T)>>>16,_=this.i(T)&65535,Jt=E.i(v)>>>16,zn=E.i(v)&65535;I[2*T+2*v]+=_*zn,G(I,2*T+2*v),I[2*T+2*v+1]+=b*zn,G(I,2*T+2*v+1),I[2*T+2*v+1]+=_*Jt,G(I,2*T+2*v+1),I[2*T+2*v+2]+=b*Jt,G(I,2*T+2*v+2)}for(T=0;T<g;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=g;T<2*g;T++)I[T]=0;return new a(I,0)};function G(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function U(E,g){this.g=E,this.h=g}function Y(E,g){if(C(g))throw Error("division by zero");if(C(E))return new U(p,p);if(N(E))return g=Y(x(E),g),new U(x(g.g),x(g.h));if(N(g))return g=Y(E,x(g)),new U(x(g.g),g.h);if(30<E.g.length){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var I=y,T=g;0>=T.l(E);)I=nt(I),T=nt(T);var v=H(I,1),b=H(T,1);for(T=H(T,2),I=H(I,2);!C(T);){var _=b.add(T);0>=_.l(E)&&(v=v.add(I),b=_),T=H(T,1),I=H(I,1)}return g=q(E,v.j(g)),new U(v,g)}for(v=p;0<=E.l(g);){for(I=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=d(I),_=b.j(g);N(_)||0<_.l(E);)I-=T,b=d(I),_=b.j(g);C(b)&&(b=y),v=v.add(b),E=q(E,_)}return new U(v,E)}r.A=function(E){return Y(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function nt(E){for(var g=E.g.length+1,I=[],T=0;T<g;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function H(E,g){var I=g>>5;g%=32;for(var T=E.g.length-I,v=[],b=0;b<T;b++)v[b]=0<g?E.i(b+I)>>>g|E.i(b+I+1)<<32-g:E.i(b+I);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,cl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Be=a}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ll,dr,hl,Ts,Yi,dl,fl,ml;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var w=o[m];if(!(w in h))break t;h=h[w]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,m=!1,w={next:function(){if(!m&&h<o.length){var P=h++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function p(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,m),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function y(o,l,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,w,P){for(var k=Array(arguments.length-2),et=2;et<arguments.length;et++)k[et-2]=arguments[et];return l.prototype[w].apply(m,k)}}function N(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function x(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const w=o.length||0,P=m.length||0;o.length=w+P;for(let k=0;k<P;k++)o[w+k]=m[k]}else o.push(m)}}class q{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var nt=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let h,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(h in m)o[h]=m[h];for(let P=0;P<I.length;P++)h=I[P],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function v(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){u.setTimeout(()=>{throw o},0)}function _(){var o=di;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Jt{constructor(){this.h=this.g=null}add(l,h){const m=zn.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var zn=new q(()=>new Ed,o=>o.reset());class Ed{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Kn,$n=!1,di=new Jt,Aa=()=>{const o=u.Promise.resolve(void 0);Kn=()=>{o.then(Td)}};var Td=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){b(h)}var l=zn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}$n=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Rt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var vd=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function Qn(o,l){if(Rt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(nt){t:{try{Y(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:wd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}C(Qn,Rt);var wd={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Jr="closure_listenable_"+(1e6*Math.random()|0),Ad=0;function bd(o,l,h,m,w){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=w,this.key=++Ad,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xr(o){this.src=o,this.g={},this.h=0}Xr.prototype.add=function(o,l,h,m,w){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=mi(o,l,m,w);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new bd(l,this.src,P,!!m,w),l.fa=h,o.push(l)),l};function fi(o,l){var h=l.type;if(h in o.g){var m=o.g[h],w=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=w)&&Array.prototype.splice.call(m,w,1),P&&(Yr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function mi(o,l,h,m){for(var w=0;w<o.length;++w){var P=o[w];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==m)return w}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),gi={};function ba(o,l,h,m,w){if(Array.isArray(l)){for(var P=0;P<l.length;P++)ba(o,l[P],h,m,w);return null}return h=Pa(h),o&&o[Jr]?o.K(l,h,d(m)?!!m.capture:!1,w):Rd(o,l,h,!1,m,w)}function Rd(o,l,h,m,w,P){if(!l)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,et=yi(o);if(et||(o[pi]=et=new Xr(o)),h=et.add(l,h,m,k,P),h.proxy)return h;if(m=Sd(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)vd||(w=k),w===void 0&&(w=!1),o.addEventListener(l.toString(),m,w);else if(o.attachEvent)o.attachEvent(Sa(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Sd(){function o(h){return l.call(o.src,o.listener,h)}const l=Pd;return o}function Ra(o,l,h,m,w){if(Array.isArray(l))for(var P=0;P<l.length;P++)Ra(o,l[P],h,m,w);else m=d(m)?!!m.capture:!!m,h=Pa(h),o&&o[Jr]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],h=mi(P,h,m,w),-1<h&&(Yr(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=yi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=mi(l,h,m,w)),(h=-1<o?l[o]:null)&&_i(h))}function _i(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Jr])fi(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(Sa(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=yi(l))?(fi(h,o),h.h==0&&(h.src=null,l[pi]=null)):Yr(o)}}}function Sa(o){return o in gi?gi[o]:gi[o]="on"+o}function Pd(o,l){if(o.da)o=!0;else{l=new Qn(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&_i(o),o=h.call(m,l)}return o}function yi(o){return o=o[pi],o instanceof Xr?o:null}var Ii="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(o){return typeof o=="function"?o:(o[Ii]||(o[Ii]=function(l){return o.handleEvent(l)}),o[Ii])}function St(){oe.call(this),this.i=new Xr(this),this.M=this,this.F=null}C(St,oe),St.prototype[Jr]=!0,St.prototype.removeEventListener=function(o,l,h,m){Ra(this,o,l,h,m)};function Ct(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Rt(l,o);else if(l instanceof Rt)l.target=l.target||o;else{var w=l;l=new Rt(m,o),T(l,w)}if(w=!0,h)for(var P=h.length-1;0<=P;P--){var k=l.g=h[P];w=Zr(k,m,!0,l)&&w}if(k=l.g=o,w=Zr(k,m,!0,l)&&w,w=Zr(k,m,!1,l)&&w,h)for(P=0;P<h.length;P++)k=l.g=h[P],w=Zr(k,m,!1,l)&&w}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)Yr(h[m]);delete o.g[l],o.h--}}this.F=null},St.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},St.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function Zr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==h){var et=k.listener,Tt=k.ha||k.src;k.fa&&fi(o.i,k),w=et.call(Tt,m)!==!1&&w}}return w&&!m.defaultPrevented}function Va(o,l,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Da(o){o.g=Va(()=>{o.g=null,o.i&&(o.i=!1,Da(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Vd extends oe{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Da(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(o){oe.call(this),this.h=o,this.g={}}C(Wn,oe);var Ca=[];function xa(o){H(o.g,function(l,h){this.g.hasOwnProperty(h)&&_i(l)},o),o.g={}}Wn.prototype.N=function(){Wn.aa.N.call(this),xa(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ei=u.JSON.stringify,Dd=u.JSON.parse,Cd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ti(){}Ti.prototype.h=null;function Na(o){return o.h||(o.h=o.i())}function ka(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vi(){Rt.call(this,"d")}C(vi,Rt);function wi(){Rt.call(this,"c")}C(wi,Rt);var Re={},Oa=null;function ts(){return Oa=Oa||new St}Re.La="serverreachability";function Ma(o){Rt.call(this,Re.La,o)}C(Ma,Rt);function Jn(o){const l=ts();Ct(l,new Ma(l))}Re.STAT_EVENT="statevent";function Fa(o,l){Rt.call(this,Re.STAT_EVENT,o),this.stat=l}C(Fa,Rt);function xt(o){const l=ts();Ct(l,new Fa(l,o))}Re.Ma="timingevent";function La(o,l){Rt.call(this,Re.Ma,o),this.size=l}C(La,Rt);function Yn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function xd(o,l,h,m,w,P){o.info(function(){if(o.g)if(P)for(var k="",et=P.split("&"),Tt=0;Tt<et.length;Tt++){var J=et[Tt].split("=");if(1<J.length){var Pt=J[0];J=J[1];var Vt=Pt.split("_");k=2<=Vt.length&&Vt[1]=="type"?k+(Pt+"="+J+"&"):k+(Pt+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+l+`
`+h+`
`+k})}function Nd(o,l,h,m,w,P,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+l+`
`+h+`
`+P+" "+k})}function nn(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Od(o,h)+(m?" "+m:"")})}function kd(o,l){o.info(function(){return"TIMEOUT: "+l})}Xn.prototype.info=function(){};function Od(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var w=m[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Ei(h)}catch{return l}}var es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ai;function ns(){}C(ns,Ti),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Ai=new ns;function ae(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new Wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var qa={},bi={};function Ri(o,l,h){o.L=1,o.v=os(Yt(l)),o.m=h,o.P=!0,ja(o,null)}function ja(o,l){o.F=Date.now(),rs(o),o.A=Yt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),nu(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Ua,o.g=Eu(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Vd(y(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ca[0]=w.toString()),w=Ca);for(var P=0;P<w.length;P++){var k=ba(h,w[P],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Jn(),xd(o.i,o.u,o.A,o.l,o.R,o.m)}ae.prototype.ca=function(o){o=o.target;const l=this.M;l&&Xt(o)==3?l.j():this.Y(o)},ae.prototype.Y=function(o){try{if(o==this.g)t:{const Vt=Xt(this.g);var l=this.g.Ba();const on=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||cu(this.g)))){this.J||Vt!=4||l==7||(l==8||0>=on?Jn(3):Jn(2)),Si(this);var h=this.g.Z();this.X=h;e:if(Ga(this)){var m=cu(this.g);o="";var w=m.length,P=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),Zn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==w-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Nd(this.i,this.u,this.A,this.l,this.R,Vt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,Tt=this.g;if((et=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(et)){var J=et;break e}}J=null}if(h=J)nn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pi(this,h);else{this.o=!1,this.s=3,xt(12),Se(this),Zn(this);break t}}if(this.P){h=!0;let Gt;for(;!this.J&&this.C<k.length;)if(Gt=Md(this,k),Gt==bi){Vt==4&&(this.s=4,xt(14),h=!1),nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==qa){this.s=4,xt(15),nn(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else nn(this.i,this.l,Gt,null),Pi(this,Gt);if(Ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||k.length!=0||this.h.h||(this.s=1,xt(16),h=!1),this.o=this.o&&h,!h)nn(this.i,this.l,k,"[Invalid Chunked Response]"),Se(this),Zn(this);else if(0<k.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ki(Pt),Pt.M=!0,xt(11))}}else nn(this.i,this.l,k,null),Pi(this,k);Vt==4&&Se(this),this.o&&!this.J&&(Vt==4?gu(this.j,this):(this.o=!1,rs(this)))}else Zd(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Se(this),Zn(this)}}}catch{}finally{}};function Ga(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Md(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?bi:(h=Number(l.substring(h,m)),isNaN(h)?qa:(m+=1,m+h>l.length?bi:(l=l.slice(m,m+h),o.C=m+h,l)))}ae.prototype.cancel=function(){this.J=!0,Se(this)};function rs(o){o.S=Date.now()+o.I,za(o,o.I)}function za(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yn(y(o.ba,o),l)}function Si(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ae.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(kd(this.i,this.A),this.L!=2&&(Jn(),xt(17)),Se(this),this.s=2,Zn(this)):za(this,this.S-o)};function Zn(o){o.j.G==0||o.J||gu(o.j,o)}function Se(o){Si(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,xa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Pi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Vi(h.h,o))){if(!o.K&&Vi(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ds(h),ls(h);else break t;Ni(h),xt(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Yn(y(h.Za,h),6e3));if(1>=Qa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ve(h,11)}else if((o.K||h.g==o)&&ds(h),!G(l))for(w=h.Da.g.parse(l),l=0;l<w.length;l++){let J=w[l];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const Pt=J[3];Pt!=null&&(h.la=Pt,h.j.info("VER="+h.la));const Vt=J[4];Vt!=null&&(h.Aa=Vt,h.j.info("SVER="+h.Aa));const on=J[5];on!=null&&typeof on=="number"&&0<on&&(m=1.5*on,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Gt=o.g;if(Gt){const ms=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var P=m.h;P.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Di(P,P.h),P.h=null))}if(m.D){const Oi=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oi&&(m.ya=Oi,st(m.I,m.D,Oi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var k=o;if(m.qa=Iu(m,m.J?m.ia:null,m.W),k.K){Wa(m.h,k);var et=k,Tt=m.L;Tt&&(et.I=Tt),et.B&&(Si(et),rs(et)),m.g=k}else mu(m);0<h.i.length&&hs(h)}else J[0]!="stop"&&J[0]!="close"||Ve(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Ve(h,7):xi(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}Jn(4)}catch{}}var Fd=class{constructor(o,l){this.g=o,this.map=l}};function Ka(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $a(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qa(o){return o.h?1:o.g?o.g.size:0}function Vi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Di(o,l){o.g?o.g.add(l):o.h=l}function Wa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ka.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ha(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return N(o.i)}function Ld(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function Bd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function Ja(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Bd(o),m=Ld(o),w=m.length,P=0;P<w;P++)l.call(void 0,m[P],h&&h[P],o)}var Ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ud(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),w=null;if(0<=m){var P=o[h].substring(0,m);w=o[h].substring(m+1)}else P=o[h];l(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Pe(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pe){this.h=o.h,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var l=o.i,h=new nr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Xa(this,h),this.m=o.m}else o&&(l=String(o).match(Ya))?(this.h=!1,ss(this,l[1]||"",!0),this.o=tr(l[2]||""),this.g=tr(l[3]||"",!0),is(this,l[4]),this.l=tr(l[5]||"",!0),Xa(this,l[6]||"",!0),this.m=tr(l[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Pe.prototype.toString=function(){var o=[],l=this.j;l&&o.push(er(l,Za,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(er(l,Za,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?Gd:jd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,Kd)),o.join("")};function Yt(o){return new Pe(o)}function ss(o,l,h){o.j=h?tr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Xa(o,l,h){l instanceof nr?(o.i=l,$d(o.i,o.h)):(h||(l=er(l,zd)),o.i=new nr(l,o.h))}function st(o,l,h){o.i.set(l,h)}function os(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,qd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Za=/[#\/\?@]/g,jd=/[#\?:]/g,Gd=/[#\?]/g,zd=/[#\?@]/g,Kd=/#/g;function nr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ue(o){o.g||(o.g=new Map,o.h=0,o.i&&Ud(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=nr.prototype,r.add=function(o,l){ue(this),this.i=null,o=rn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function tu(o,l){ue(o),l=rn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function eu(o,l){return ue(o),l=rn(o,l),o.g.has(l)}r.forEach=function(o,l){ue(this),this.g.forEach(function(h,m){h.forEach(function(w){o.call(l,w,m,this)},this)},this)},r.na=function(){ue(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const w=o[m];for(let P=0;P<w.length;P++)h.push(l[m])}return h},r.V=function(o){ue(this);let l=[];if(typeof o=="string")eu(this,o)&&(l=l.concat(this.g.get(rn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return ue(this),this.i=null,o=rn(this,o),eu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function nu(o,l,h){tu(o,l),0<h.length&&(o.i=null,o.g.set(rn(o,l),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const P=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var w=P;k[m]!==""&&(w+="="+encodeURIComponent(String(k[m]))),o.push(w)}}return this.i=o.join("&")};function rn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function $d(o,l){l&&!o.j&&(ue(o),o.i=null,o.g.forEach(function(h,m){var w=m.toLowerCase();m!=w&&(tu(this,m),nu(this,w,h))},o)),o.j=l}function Qd(o,l){const h=new Xn;if(u.Image){const m=new Image;m.onload=R(ce,h,"TestLoadImage: loaded",!0,l,m),m.onerror=R(ce,h,"TestLoadImage: error",!1,l,m),m.onabort=R(ce,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=R(ce,h,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Wd(o,l){const h=new Xn,m=new AbortController,w=setTimeout(()=>{m.abort(),ce(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(w),P.ok?ce(h,"TestPingServer: ok",!0,l):ce(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),ce(h,"TestPingServer: error",!1,l)})}function ce(o,l,h,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(h)}catch{}}function Hd(){this.g=new Cd}function Jd(o,l,h){const m=h||"";try{Ja(o,function(w,P){let k=w;d(w)&&(k=Ei(w)),l.push(m+P+"="+encodeURIComponent(k))})}catch(w){throw l.push(m+"type="+encodeURIComponent("_badmap")),w}}function as(o){this.l=o.Ub||null,this.j=o.eb||!1}C(as,Ti),as.prototype.g=function(){return new us(this.l,this.j)},as.prototype.i=function(o){return function(){return o}}({});function us(o,l){St.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(us,St),r=us.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,sr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ru(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ru(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?rr(this):sr(this),this.readyState==3&&ru(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},r.Qa=function(o){this.g&&(this.response=o,rr(this))},r.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function su(o){let l="";return H(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Ci(o,l,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=su(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):st(o,l,h))}function lt(o){St.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(lt,St);var Yd=/^https?$/i,Xd=["POST","PUT"];r=lt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ai.g(),this.v=this.o?Na(this.o):Na(Ai),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){iu(this,P);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)h.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())h.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Xd,l,void 0))||m||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of h)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){iu(this,P)}};function iu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ou(o),cs(o)}function ou(o){o.A||(o.A=!0,Ct(o,"complete"),Ct(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ct(this,"complete"),Ct(this,"abort"),cs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),lt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?au(this):this.bb())},r.bb=function(){au(this)};function au(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)Va(o.Ea,0,o);else if(Ct(o,"readystatechange"),Xt(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var m;if(m=k===0){var w=String(o.D).match(Ya)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),m=!Yd.test(w?w.toLowerCase():"")}h=m}if(h)Ct(o,"complete"),Ct(o,"success");else{o.m=6;try{var P=2<Xt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",ou(o)}}finally{cs(o)}}}}function cs(o,l){if(o.g){uu(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ct(o,"ready");try{h.onreadystatechange=m}catch{}}}function uu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Dd(l)}};function cu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zd(o){const l={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(G(o[m]))continue;var h=v(o[m]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[w]||[];l[w]=P,P.push(h)}E(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function lu(o){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,o),this.cb=ir("retryDelaySeedMs",1e4,o),this.Wa=ir("forwardChannelMaxRetries",2,o),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ka(o&&o.concurrentRequestLimit),this.Da=new Hd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=lu.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,m){xt(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Iu(this,null,this.W),hs(this)};function xi(o){if(hu(o),o.G==3){var l=o.U++,h=Yt(o.I);if(st(h,"SID",o.K),st(h,"RID",l),st(h,"TYPE","terminate"),or(o,h),l=new ae(o,o.j,l),l.L=2,l.v=os(Yt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=Eu(l.j,null),l.g.ea(l.v)),l.F=Date.now(),rs(l)}yu(o)}function ls(o){o.g&&(ki(o),o.g.cancel(),o.g=null)}function hu(o){ls(o),o.u&&(u.clearTimeout(o.u),o.u=null),ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function hs(o){if(!$a(o.h)&&!o.s){o.s=!0;var l=o.Ga;Kn||Aa(),$n||(Kn(),$n=!0),di.add(l,o),o.B=0}}function tf(o,l){return Qa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yn(y(o.Ga,o,l),_u(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new ae(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=fu(this,w,l),h=Yt(this.I),st(h,"RID",o),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),or(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(su(P)))+"&"+l:this.m&&Ci(h,this.m,P)),Di(this.h,w),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",l),st(h,"SID","null"),w.T=!0,Ri(w,h,null)):Ri(w,h,l),this.G=2}}else this.G==3&&(o?du(this,o):this.i.length==0||$a(this.h)||du(this))};function du(o,l){var h;l?h=l.l:h=o.U++;const m=Yt(o.I);st(m,"SID",o.K),st(m,"RID",h),st(m,"AID",o.T),or(o,m),o.m&&o.o&&Ci(m,o.m,o.o),h=new ae(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=fu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Di(o.h,h),Ri(h,m,l)}function or(o,l){o.H&&H(o.H,function(h,m){st(l,m,h)}),o.l&&Ja({},function(h,m){st(l,m,h)})}function fu(o,l,h){h=Math.min(o.i.length,h);var m=o.l?y(o.l.Na,o.l,o):null;t:{var w=o.i;let P=-1;for(;;){const k=["count="+h];P==-1?0<h?(P=w[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let et=!0;for(let Tt=0;Tt<h;Tt++){let J=w[Tt].g;const Pt=w[Tt].map;if(J-=P,0>J)P=Math.max(0,w[Tt].g-100),et=!1;else try{Jd(Pt,k,"req"+J+"_")}catch{m&&m(Pt)}}if(et){m=k.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,m}function mu(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Kn||Aa(),$n||(Kn(),$n=!0),di.add(l,o),o.v=0}}function Ni(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yn(y(o.Fa,o),_u(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yn(y(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),ls(this),pu(this))};function ki(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function pu(o){o.g=new ae(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Yt(o.qa);st(l,"RID","rpc"),st(l,"SID",o.K),st(l,"AID",o.T),st(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(l,"TO",o.ja),st(l,"TYPE","xmlhttp"),or(o,l),o.m&&o.o&&Ci(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=os(Yt(l)),h.m=null,h.P=!0,ja(h,o)}r.Za=function(){this.C!=null&&(this.C=null,ls(this),Ni(this),xt(19))};function ds(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function gu(o,l){var h=null;if(o.g==l){ds(o),ki(o),o.g=null;var m=2}else if(Vi(o.h,l))h=l.D,Wa(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;m=ts(),Ct(m,new La(m,h)),hs(o)}else mu(o);else if(w=l.s,w==3||w==0&&0<l.X||!(m==1&&tf(o,l)||m==2&&Ni(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),w){case 1:Ve(o,5);break;case 4:Ve(o,10);break;case 3:Ve(o,6);break;default:Ve(o,2)}}}function _u(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ve(o,l){if(o.j.info("Error code "+l),l==2){var h=y(o.fb,o),m=o.Xa;const w=!m;m=new Pe(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ss(m,"https"),os(m),w?Qd(m.toString(),h):Wd(m.toString(),h)}else xt(2);o.G=0,o.l&&o.l.sa(l),yu(o),hu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function yu(o){if(o.G=0,o.ka=[],o.l){const l=Ha(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Iu(o,l,h){var m=h instanceof Pe?Yt(h):new Pe(h);if(m.g!="")l&&(m.g=l+"."+m.g),is(m,m.s);else{var w=u.location;m=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var P=new Pe(null);m&&ss(P,m),l&&(P.g=l),w&&is(P,w),h&&(P.l=h),m=P}return h=o.D,l=o.ya,h&&l&&st(m,h,l),st(m,"VER",o.la),or(o,m),m}function Eu(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new lt(new as({eb:h})):new lt(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tu(){}r=Tu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function fs(){}fs.prototype.g=function(o,l){return new Ut(o,l)};function Ut(o,l){St.call(this),this.g=new lu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!G(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new sn(this)}C(Ut,St),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){xi(this.g)},Ut.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ei(o),o=h);l.i.push(new Fd(l.Ya++,o)),l.G==3&&hs(l)},Ut.prototype.N=function(){this.g.l=null,delete this.j,xi(this.g),delete this.g,Ut.aa.N.call(this)};function vu(o){vi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(vu,vi);function wu(){wi.call(this),this.status=1}C(wu,wi);function sn(o){this.g=o}C(sn,Tu),sn.prototype.ua=function(){Ct(this.g,"a")},sn.prototype.ta=function(o){Ct(this.g,new vu(o))},sn.prototype.sa=function(o){Ct(this.g,new wu)},sn.prototype.ra=function(){Ct(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,ml=function(){return new fs},fl=function(){return ts()},dl=Re,Yi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,Ts=es,Ba.COMPLETE="complete",hl=Ba,ka.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",St.prototype.listen=St.prototype.K,dr=ka,lt.prototype.listenOnce=lt.prototype.L,lt.prototype.getLastError=lt.prototype.Ka,lt.prototype.getLastErrorCode=lt.prototype.Ba,lt.prototype.getStatus=lt.prototype.Z,lt.prototype.getResponseJson=lt.prototype.Oa,lt.prototype.getResponseText=lt.prototype.oa,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Ha,ll=lt}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});const Nu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new Xc("@firebase/firestore");function hn(){return _e.logLevel}function py(r){_e.setLogLevel(r)}function V(r,...t){if(_e.logLevel<=Q.DEBUG){const e=t.map(wo);_e.debug(`Firestore (${On}): ${r}`,...e)}}function dt(r,...t){if(_e.logLevel<=Q.ERROR){const e=t.map(wo);_e.error(`Firestore (${On}): ${r}`,...e)}}function ee(r,...t){if(_e.logLevel<=Q.WARN){const e=t.map(wo);_e.warn(`Firestore (${On}): ${r}`,...e)}}function wo(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const t=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+r;throw dt(t),new Error(t)}function L(r,t){r||F()}function gy(r,t){r||F()}function M(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Je{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Lm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bm{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new pl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new It(t)}}class Um{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qm{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Um(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new jm(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=zm(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function j(r,t){return r<t?-1:r>t?1:0}function Tn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function _l(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ct(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new ct(0,0))}static max(){return new B(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(),n===void 0?n=t.length-e:n>t.length-e&&F(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Rr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rr?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class K extends Rr{construct(t,e,n){return new K(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new K(e)}static emptyPath(){return new K([])}}const Km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Rr{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return Km.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(K.fromString(t))}static fromName(t){return new O(K.fromString(t).popFirst(5))}static empty(){return new O(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&K.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return K.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new K(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Xi(r){return r.fields.find(t=>t.kind===2)}function xe(r){return r.fields.filter(t=>t.kind!==2)}xs.UNKNOWN_ID=-1;class vs{constructor(t,e){this.fieldPath=t,this.kind=e}}class Sr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Sr(0,qt.min())}}function yl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ct(e+1,0):new ct(e,n));return new qt(s,O.empty(),t)}function Il(r){return new qt(r.readTime,r.key,-1)}class qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new qt(B.min(),O.empty(),-1)}static max(){return new qt(B.max(),O.empty(),-1)}}function Ao(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==El)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):A.reject(e)}static resolve(t){return new A((e,n)=>{e(t)})}static reject(t){return new A((e,n)=>{n(t)})}static waitFor(t){return new A((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},c=>n(c))}),a=!0,i===s&&e()})}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next(s=>s?A.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new A((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const d=c;e(t[d]).next(f=>{a[d]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new A((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new At,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new gr(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=bo(n.target.error);this.V.reject(new gr(t,s))}}static open(t,e,n,s){try{return new zs(e,t.transaction(s,n))}catch(i){throw new gr(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(V("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Qm(e)}}class $t{constructor(t,e,n){this.name=t,this.version=e,this.p=n,$t.S(yn())===12.2&&dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return V("SimpleDb","Removing database:",t),Ne(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Wc())return!1;if($t.v())return!0;const t=yn(),e=$t.S(t),n=0<e&&e<10,s=vl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.C)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new gr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new D(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new D(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new gr(t,a))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.p.O(a,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=zs.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),A.reject(d))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(V("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function vl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class $m{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return Ne(this.B.delete())}}class gr extends D{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function we(r){return r.name==="IndexedDbTransactionError"}class Qm{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(V("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ne(n)}add(t){return V("SimpleDb","ADD",this.store.name,t,t),Ne(this.store.add(t))}get(t){return Ne(this.store.get(t)).next(e=>(e===void 0&&(e=null),V("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return V("SimpleDb","DELETE",this.store.name,t),Ne(this.store.delete(t))}count(){return V("SimpleDb","COUNT",this.store.name),Ne(this.store.count())}U(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.W(i,(u,c)=>{a.push(c)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}j(t,e){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const s=this.cursor(n);return this.W(s,(i,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.W(s,e)}Y(t){const e=this.cursor({});return new A((n,s)=>{e.onerror=i=>{const a=bo(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new A((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new $m(u),d=e(u.primaryKey,u.value,c);if(d instanceof A){const f=d.catch(p=>(c.done(),A.reject(p)));n.push(f)}c.isDone?s():c.K===null?u.continue():u.continue(c.K)}}).next(()=>A.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ne(r){return new A((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=bo(n.target.error);e(s)}})}let ku=!1;function bo(r){const t=$t.S(yn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ku||(ku=!0,setTimeout(()=>{throw n},0)),n}}return r}class Wm{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){V("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){we(e)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await ve(e)}await this.X(6e4)})}}class Hm{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let s=e,i=!0;return A.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return V("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(s,i)).next(u=>(V("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Il(i);Ao(a,n)>0&&(n=a)}),new qt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ft.oe=-1;function Lr(r){return r==null}function Pr(r){return r===0&&1/r==-1/0}function wl(r){return typeof r=="number"&&Number.isInteger(r)&&!Pr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ou(t)),t=Jm(r.get(e),t);return Ou(t)}function Jm(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function Ou(r){return r+""}function zt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===""&&r.charAt(1)===""),K.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf("",i);switch((a<0||a>e)&&F(),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:F()}i=a+2}return new K(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(r,t){return[r,Nt(t)]}function Al(r,t,e){return[r,Nt(t),e]}const Ym={},Xm=["prefixPath","collectionGroup","readTime","documentId"],Zm=["prefixPath","collectionGroup","documentId"],tp=["collectionGroup","readTime","prefixPath","documentId"],ep=["canonicalId","targetId"],np=["targetId","path"],rp=["path","targetId"],sp=["collectionId","parent"],ip=["indexId","uid"],op=["uid","sequenceNumber"],ap=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],up=["indexId","uid","orderedDocumentKey"],cp=["userId","collectionPath","documentId"],lp=["userId","collectionPath","largestBatchId"],hp=["userId","collectionGroup","largestBatchId"],bl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dp=[...bl,"documentOverlays"],Rl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Sl=Rl,Ro=[...Sl,"indexConfiguration","indexState","indexEntries"],fp=Ro,mp=[...Ro,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Tl{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function _t(r,t){const e=M(r);return $t.F(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ye(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Pl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gs(this.root,t,this.comparator,!1)}getReverseIterator(){return new gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gs(this.root,t,this.comparator,!0)}}class gs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new vt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Lu(this.data.getIterator())}getIteratorFrom(t){return new Lu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class Lu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function an(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new tt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vl("Invalid base64 string: "+i):i}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const pp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(r){if(L(!!r),typeof r=="string"){let t=0;const e=pp.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ye(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function So(r){const t=r.mapValue.fields.__previous_value__;return Ks(t)?So(t):t}function Vr(r){const t=ne(r.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,e,n,s,i,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class Ue{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},As={nullValue:"NULL_VALUE"};function qe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ks(r)?4:Dl(r)?9007199254740991:$s(r)?10:11:F()}function Ht(r,t){if(r===t)return!0;const e=qe(r);if(e!==qe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Vr(r).isEqual(Vr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ne(s.timestampValue),u=ne(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ye(s.bytesValue).isEqual(ye(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ot(s.doubleValue),u=ot(i.doubleValue);return a===u?Pr(a)===Pr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return Tn(r.arrayValue.values||[],t.arrayValue.values||[],Ht);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Fu(a)!==Fu(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Ht(a[c],u[c])))return!1;return!0}(r,t);default:return F()}}function Dr(r,t){return(r.values||[]).find(e=>Ht(e,t))!==void 0}function Ie(r,t){if(r===t)return 0;const e=qe(r),n=qe(t);if(e!==n)return j(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=ot(i.integerValue||i.doubleValue),c=ot(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return Bu(r.timestampValue,t.timestampValue);case 4:return Bu(Vr(r),Vr(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ye(i),c=ye(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const f=j(u[d],c[d]);if(f!==0)return f}return j(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=j(ot(i.latitude),ot(a.latitude));return u!==0?u:j(ot(i.longitude),ot(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Uu(r.arrayValue,t.arrayValue);case 10:return function(i,a){var u,c,d,f;const p=i.fields||{},y=a.fields||{},R=(u=p.value)===null||u===void 0?void 0:u.arrayValue,C=(c=y.value)===null||c===void 0?void 0:c.arrayValue,N=j(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Uu(R,C)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===me.mapValue&&a===me.mapValue)return 0;if(i===me.mapValue)return 1;if(a===me.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const y=j(c[p],f[p]);if(y!==0)return y;const R=Ie(u[c[p]],d[f[p]]);if(R!==0)return R}return j(c.length,f.length)}(r.mapValue,t.mapValue);default:throw F()}}function Bu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=ne(r),n=ne(t),s=j(e.seconds,n.seconds);return s!==0?s:j(e.nanos,n.nanos)}function Uu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Ie(e[s],n[s]);if(i)return i}return j(e.length,n.length)}function vn(r){return to(r)}function to(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ne(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ye(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=to(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${to(e.fields[a])}`;return s+"}"}(r.mapValue):F()}function je(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function eo(r){return!!r&&"integerValue"in r}function Cr(r){return!!r&&"arrayValue"in r}function qu(r){return!!r&&"nullValue"in r}function ju(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bs(r){return!!r&&"mapValue"in r}function $s(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function _r(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ye(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=_r(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_r(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Dl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Cl={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function _p(r){return"nullValue"in r?As:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?je(Ue.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?$s(r)?Cl:{mapValue:{}}:F()}function yp(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?je(Ue.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Cl:"mapValue"in r?$s(r)?{mapValue:{}}:me:F()}function Gu(r,t){const e=Ie(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function zu(r,t){const e=Ie(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!bs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_r(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=_r(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());bs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];bs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ye(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new wt(_r(this.value))}}function xl(r){const t=[];return Ye(r.fields,(e,n)=>{const s=new ut([e]);if(bs(n)){const i=xl(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new it(t,0,B.min(),B.min(),B.min(),wt.empty(),0)}static newFoundDocument(t,e,n,s){return new it(t,1,e,B.min(),n,s,0)}static newNoDocument(t,e){return new it(t,2,e,B.min(),B.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new it(t,3,e,B.min(),B.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this.position=t,this.inclusive=e}}function Ku(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Ie(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function $u(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ht(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ip(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{}class $ extends Nl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Ep(t,e,n):e==="array-contains"?new wp(t,n):e==="in"?new Bl(t,n):e==="not-in"?new Ap(t,n):e==="array-contains-any"?new bp(t,n):new $(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Tp(t,n):new vp(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ie(e,this.value)):e!==null&&qe(this.value)===qe(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Nl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Z(t,e)}matches(t){return wn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wn(r){return r.op==="and"}function no(r){return r.op==="or"}function Po(r){return kl(r)&&wn(r)}function kl(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function ro(r){if(r instanceof $)return r.field.canonicalString()+r.op.toString()+vn(r.value);if(Po(r))return r.filters.map(t=>ro(t)).join(",");{const t=r.filters.map(e=>ro(e)).join(",");return`${r.op}(${t})`}}function Ol(r,t){return r instanceof $?function(n,s){return s instanceof $&&n.op===s.op&&n.field.isEqual(s.field)&&Ht(n.value,s.value)}(r,t):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Ol(a,s.filters[u]),!0):!1}(r,t):void F()}function Ml(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function Fl(r){return r instanceof $?function(e){return`${e.field.canonicalString()} ${e.op} ${vn(e.value)}`}(r):r instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(Fl).join(" ,")+"}"}(r):"Filter"}class Ep extends ${constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tp extends ${constructor(t,e){super(t,"in",e),this.keys=Ll("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vp extends ${constructor(t,e){super(t,"not-in",e),this.keys=Ll("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ll(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class wp extends ${constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Cr(e)&&Dr(e.arrayValue,this.value)}}class Bl extends ${constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Dr(this.value.arrayValue,e)}}class Ap extends ${constructor(t,e){super(t,"not-in",e)}matches(t){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Dr(this.value.arrayValue,e)}}class bp extends ${constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Cr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Dr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function so(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Rp(r,t,e,n,s,i,a)}function Ge(r){const t=M(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ro(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>vn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>vn(n)).join(",")),t.ue=e}return t.ue}function Br(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ip(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ol(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!$u(r.startAt,t.startAt)&&$u(r.endAt,t.endAt)}function Ns(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ks(r,t){return r.filters.filter(e=>e instanceof $&&e.field.isEqual(t))}function Qu(r,t,e){let n=As,s=!0;for(const i of ks(r,t)){let a=As,u=!0;switch(i.op){case"<":case"<=":a=_p(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=As}Gu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Gu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Wu(r,t,e){let n=me,s=!0;for(const i of ks(r,t)){let a=me,u=!0;switch(i.op){case">=":case">":a=yp(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=me}zu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];zu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ul(r,t,e,n,s,i,a,u){return new re(r,t,e,n,s,i,a,u)}function Mn(r){return new re(r)}function Hu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Vo(r){return r.collectionGroup!==null}function gn(r){const t=M(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(ut.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new xr(i,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new xr(ut.keyField(),n))}return t.ce}function kt(r){const t=M(r);return t.le||(t.le=Sp(t,gn(r))),t.le}function Sp(r,t){if(r.limitType==="F")return so(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xr(s.field,i)});const e=r.endAt?new Ee(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ee(r.startAt.position,r.startAt.inclusive):null;return so(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function io(r,t){const e=r.filters.concat([t]);return new re(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Os(r,t,e){return new re(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ur(r,t){return Br(kt(r),kt(t))&&r.limitType===t.limitType}function ql(r){return`${Ge(kt(r))}|lt:${r.limitType}`}function dn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Fl(s)).join(", ")}]`),Lr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vn(s)).join(",")),`Target(${n})`}(kt(r))}; limitType=${r.limitType})`}function qr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of gn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,c){const d=Ku(a,u,c);return a.inclusive?d<=0:d<0}(n.startAt,gn(n),s)||n.endAt&&!function(a,u,c){const d=Ku(a,u,c);return a.inclusive?d>=0:d>0}(n.endAt,gn(n),s))}(r,t)}function jl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Gl(r){return(t,e)=>{let n=!1;for(const s of gn(r)){const i=Pp(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Pp(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(i,a,u){const c=a.data.field(i),d=u.data.field(i);return c!==null&&d!==null?Ie(c,d):F()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ye(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Pl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new rt(O.comparator);function Bt(){return Vp}const zl=new rt(O.comparator);function fr(...r){let t=zl;for(const e of r)t=t.insert(e.key,e);return t}function Kl(r){let t=zl;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Kt(){return yr()}function $l(){return yr()}function yr(){return new Ae(r=>r.toString(),(r,t)=>r.isEqual(t))}const Dp=new rt(O.comparator),Cp=new tt(O.comparator);function z(...r){let t=Cp;for(const e of r)t=t.add(e);return t}const xp=new tt(j);function Do(){return xp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pr(t)?"-0":t}}function Ql(r){return{integerValue:""+r}}function Wl(r,t){return wl(t)?Ql(t):Co(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this._=void 0}}function Np(r,t,e){return r instanceof An?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ks(i)&&(i=So(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):r instanceof ze?Jl(r,t):r instanceof Ke?Yl(r,t):function(s,i){const a=Hl(s,i),u=Ju(a)+Ju(s.Pe);return eo(a)&&eo(s.Pe)?Ql(u):Co(s.serializer,u)}(r,t)}function kp(r,t,e){return r instanceof ze?Jl(r,t):r instanceof Ke?Yl(r,t):e}function Hl(r,t){return r instanceof bn?function(n){return eo(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class An extends Qs{}class ze extends Qs{constructor(t){super(),this.elements=t}}function Jl(r,t){const e=Xl(t);for(const n of r.elements)e.some(s=>Ht(s,n))||e.push(n);return{arrayValue:{values:e}}}class Ke extends Qs{constructor(t){super(),this.elements=t}}function Yl(r,t){let e=Xl(t);for(const n of r.elements)e=e.filter(s=>!Ht(s,n));return{arrayValue:{values:e}}}class bn extends Qs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ju(r){return ot(r.integerValue||r.doubleValue)}function Xl(r){return Cr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e){this.field=t,this.transform=e}}function Op(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof ze&&s instanceof ze||n instanceof Ke&&s instanceof Ke?Tn(n.elements,s.elements,Ht):n instanceof bn&&s instanceof bn?Ht(n.Pe,s.Pe):n instanceof An&&s instanceof An}(r.transform,t.transform)}class Mp{constructor(t,e){this.version=t,this.transformResults=e}}class at{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ws{}function Zl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ln(r.key,at.none()):new Fn(r.key,r.data,at.none());{const e=r.data,n=wt.empty();let s=new tt(ut.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new se(r.key,n,new Lt(s.toArray()),at.none())}}function Fp(r,t,e){r instanceof Fn?function(s,i,a){const u=s.value.clone(),c=Xu(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof se?function(s,i,a){if(!Rs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Xu(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(th(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ir(r,t,e,n){return r instanceof Fn?function(i,a,u,c){if(!Rs(i.precondition,a))return u;const d=i.value.clone(),f=Zu(i.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(i,a,u,c){if(!Rs(i.precondition,a))return u;const d=Zu(i.fieldTransforms,c,a),f=a.data;return f.setAll(th(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,t,e,n):function(i,a,u){return Rs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Lp(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Hl(n.transform,s||null);i!=null&&(e===null&&(e=wt.empty()),e.set(n.field,i))}return e||null}function Yu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Tn(n,s,(i,a)=>Op(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Fn extends Ws{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends Ws{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function th(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Xu(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,kp(a,u,e[s]))}return n}function Zu(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Np(i,a,t))}return n}class Ln extends Ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xo extends Ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Fp(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ir(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ir(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=$l();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=Zl(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Tn(this.mutations,t.mutations,(e,n)=>Yu(e,n))&&Tn(this.baseMutations,t.baseMutations,(e,n)=>Yu(e,n))}}class ko{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=function(){return Dp}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ko(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,W;function eh(r){switch(r){default:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function nh(r){if(r===void 0)return dt("GRPC error has no .code"),S.UNKNOWN;switch(r){case pt.OK:return S.OK;case pt.CANCELLED:return S.CANCELLED;case pt.UNKNOWN:return S.UNKNOWN;case pt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case pt.INTERNAL:return S.INTERNAL;case pt.UNAVAILABLE:return S.UNAVAILABLE;case pt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case pt.NOT_FOUND:return S.NOT_FOUND;case pt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case pt.ABORTED:return S.ABORTED;case pt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case pt.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(W=pt||(pt={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Be([4294967295,4294967295],0);function tc(r){const t=rh().encode(r),e=new cl;return e.update(t),new Uint8Array(e.digest())}function ec(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Be([e,n],0),new Be([s,i],0)]}class Mo{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new mr(`Invalid padding: ${e}`);if(n<0)throw new mr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new mr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Be.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Be.fromNumber(n)));return s.compare(Up)===1&&(s=new Be([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=tc(t),[n,s]=ec(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Mo(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=tc(t),[n,s]=ec(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,zr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Gr(B.min(),s,new rt(j),Bt(),z())}}class zr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new zr(n,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class sh{constructor(t,e){this.targetId=t,this.me=e}}class ih{constructor(t,e,n=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class nc{constructor(){this.fe=0,this.ge=sc(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=z(),e=z(),n=z();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:F()}}),new zr(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=sc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qp{constructor(t){this.Le=t,this.Be=new Map,this.ke=Bt(),this.qe=rc(),this.Qe=new rt(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:F()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(Ns(i))if(n===0){const a=new O(i.path);this.Ue(e,a,it.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),c=u?this.Xe(u,t,a):1;if(c!==0){this.je(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ye(n).toUint8Array()}catch(c){if(c instanceof Vl)return ee("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Mo(a,s,i)}catch(c){return ee(c instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const u=this.Je(a);if(u){if(i.current&&Ns(u.target)){const c=new O(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,it.newNoDocument(c,t))}i.be&&(e.set(a,i.ve()),i.Ce())}});let n=z();this.qe.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new Gr(t,e,this.Qe,this.ke,n);return this.ke=Bt(),this.qe=rc(),this.Qe=new rt(j),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new nc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new tt(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new nc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function rc(){return new rt(O.comparator)}function sc(){return new rt(O.comparator)}const jp={asc:"ASCENDING",desc:"DESCENDING"},Gp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zp={and:"AND",or:"OR"};class Kp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function oo(r,t){return r.useProto3Json||Lr(t)?t:{value:t}}function Rn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function $p(r,t){return Rn(r,t.toTimestamp())}function ft(r){return L(!!r),B.fromTimestamp(function(e){const n=ne(e);return new ct(n.seconds,n.nanos)}(r))}function Fo(r,t){return ao(r,t).canonicalString()}function ao(r,t){const e=function(s){return new K(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ah(r){const t=K.fromString(r);return L(_h(t)),t}function Nr(r,t){return Fo(r.databaseId,t.path)}function Qt(r,t){const e=ah(t);if(e.get(1)!==r.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(lh(e))}function uh(r,t){return Fo(r.databaseId,t)}function ch(r){const t=ah(r);return t.length===4?K.emptyPath():lh(t)}function uo(r){return new K(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function lh(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ic(r,t,e){return{name:Nr(r,t),fields:e.value.mapValue.fields}}function hh(r,t,e){const n=Qt(r,t.name),s=ft(t.updateTime),i=t.createTime?ft(t.createTime):B.min(),a=new wt({mapValue:{fields:t.fields}}),u=it.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Qp(r,t){return"found"in t?function(n,s){L(!!s.found),s.found.name,s.found.updateTime;const i=Qt(n,s.found.name),a=ft(s.found.updateTime),u=s.found.createTime?ft(s.found.createTime):B.min(),c=new wt({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,a,u,c)}(r,t):"missing"in t?function(n,s){L(!!s.missing),L(!!s.readTime);const i=Qt(n,s.missing),a=ft(s.readTime);return it.newNoDocument(i,a)}(r,t):F()}function Wp(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?S.UNKNOWN:nh(d.code);return new D(f,d.message||"")}(a);e=new ih(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Qt(r,n.document.name),i=ft(n.document.updateTime),a=n.document.createTime?ft(n.document.createTime):B.min(),u=new wt({mapValue:{fields:n.document.fields}}),c=it.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Ss(d,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Qt(r,n.document),i=n.readTime?ft(n.readTime):B.min(),a=it.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Ss([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Qt(r,n.document),i=n.removedTargetIds||[];e=new Ss([],i,s,null)}else{if(!("filter"in t))return F();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Bp(s,i),u=n.targetId;e=new sh(u,a)}}return e}function kr(r,t){let e;if(t instanceof Fn)e={update:ic(r,t.key,t.value)};else if(t instanceof Ln)e={delete:Nr(r,t.key)};else if(t instanceof se)e={update:ic(r,t.key,t.data),updateMask:tg(t.fieldMask)};else{if(!(t instanceof xo))return F();e={verify:Nr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof An)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ze)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ke)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof bn)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw F()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$p(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(r,t.precondition)),e}function co(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?at.updateTime(ft(i.updateTime)):i.exists!==void 0?at.exists(i.exists):at.none()}(t.currentDocument):at.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new An;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new ze(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new Ke(f)}else"increment"in u?c=new bn(a,u.increment):F();const d=ut.fromServerFormat(u.fieldPath);return new jr(d,c)}(r,s)):[];if(t.update){t.update.name;const s=Qt(r,t.update.name),i=new wt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const d=c.fieldPaths||[];return new Lt(d.map(f=>ut.fromServerFormat(f)))}(t.updateMask);return new se(s,i,a,e,n)}return new Fn(s,i,e,n)}if(t.delete){const s=Qt(r,t.delete);return new Ln(s,e)}if(t.verify){const s=Qt(r,t.verify);return new xo(s,e)}return F()}function Hp(r,t){return r&&r.length>0?(L(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?ft(s.updateTime):ft(i);return a.isEqual(B.min())&&(a=ft(i)),new Mp(a,s.transformResults||[])}(e,t))):[]}function dh(r,t){return{documents:[uh(r,t.path)]}}function fh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=uh(r,s);const i=function(d){if(d.length!==0)return gh(Z.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(y){return{field:fn(y.field),direction:Yp(y.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=oo(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function mh(r){let t=ch(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(p){const y=ph(p);return y instanceof Z&&Po(y)?y.getFilters():[y]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(y=>function(C){return new xr(mn(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(e.orderBy));let u=null;e.limit&&(u=function(p){let y;return y=typeof p=="object"?p.value:p,Lr(y)?null:y}(e.limit));let c=null;e.startAt&&(c=function(p){const y=!!p.before,R=p.values||[];return new Ee(R,y)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const y=!p.before,R=p.values||[];return new Ee(R,y)}(e.endAt)),Ul(t,s,a,i,u,"F",c,d)}function Jp(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ph(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=mn(e.unaryFilter.field);return $.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=mn(e.unaryFilter.field);return $.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mn(e.unaryFilter.field);return $.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(e.unaryFilter.field);return $.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(e){return $.create(mn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>ph(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(r):F()}function Yp(r){return jp[r]}function Xp(r){return Gp[r]}function Zp(r){return zp[r]}function fn(r){return{fieldPath:r.canonicalString()}}function mn(r){return ut.fromServerFormat(r.fieldPath)}function gh(r){return r instanceof $?function(e){if(e.op==="=="){if(ju(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NAN"}};if(qu(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ju(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NAN"}};if(qu(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(e.field),op:Xp(e.op),value:e.value}}}(r):r instanceof Z?function(e){const n=e.getFilters().map(s=>gh(s));return n.length===1?n[0]:{compositeFilter:{op:Zp(e.op),filters:n}}}(r):F()}function tg(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function _h(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e,n,s,i=B.min(),a=B.min(),u=ht.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.ct=t}}function eg(r,t){let e;if(t.document)e=hh(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=O.fromSegments(t.noDocument.path),s=Qe(t.noDocument.readTime);e=it.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return F();{const n=O.fromSegments(t.unknownDocument.path),s=Qe(t.unknownDocument.version);e=it.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ct(s[0],s[1]);return B.fromTimestamp(i)}(t.readTime)),e}function oc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ms(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Nr(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Rn(i,a.version.toTimestamp()),createTime:Rn(i,a.createTime.toTimestamp())}}(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:$e(t.version)};else{if(!t.isUnknownDocument())return F();n.unknownDocument={path:e.path.toArray(),version:$e(t.version)}}return n}function Ms(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function $e(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Qe(r){const t=new ct(r.seconds,r.nanoseconds);return B.fromTimestamp(t)}function ke(r,t){const e=(t.baseMutations||[]).map(i=>co(r.ct,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>co(r.ct,i)),s=ct.fromMillis(t.localWriteTimeMs);return new No(t.batchId,s,e,n)}function pr(r){const t=Qe(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Qe(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),kt(Mn(ch(i.documents[0])))}(r.query):function(i){return kt(mh(i))}(r.query),new Zt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ht.fromBase64String(r.resumeToken))}function Ih(r,t){const e=$e(t.snapshotVersion),n=$e(t.lastLimboFreeSnapshotVersion);let s;s=Ns(t.target)?dh(r.ct,t.target):fh(r.ct,t.target)._t;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ge(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Lo(r){const t=mh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Os(t,t.limit,"L"):t}function qi(r,t){return new Oo(t.largestBatchId,co(r.ct,t.overlayMutation))}function ac(r,t){const e=t.path.lastSegment();return[r,Nt(t.path.popLast()),e]}function uc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:$e(n.readTime),documentKey:Nt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{getBundleMetadata(t,e){return cc(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Qe(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return cc(t).put(function(s){return{bundleId:s.id,createTime:$e(ft(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return lc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Lo(i.bundledQuery),readTime:Qe(i.readTime)}}(n)})}saveNamedQuery(t,e){return lc(t).put(function(s){return{name:s.name,readTime:$e(ft(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function cc(r){return _t(r,"bundles")}function lc(r){return _t(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new Hs(t,n)}getOverlay(t,e){return ar(t).get(ac(this.userId,e)).next(n=>n?qi(this.serializer,n):null)}getOverlays(t,e){const n=Kt();return A.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new Oo(e,a);s.push(this.ht(t,u))}),A.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Nt(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ar(t).j("collectionPathOverlayIndex",u))}),A.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Kt(),i=Nt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ar(t).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const d=qi(this.serializer,c);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=Kt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ar(t).J({index:"collectionGroupOverlayIndex",range:u},(c,d,f)=>{const p=qi(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>i)}ht(t,e){return ar(t).put(function(s,i,a){const[u,c,d]=ac(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:kr(s.ct,a.mutation)}}(this.serializer,this.userId,e))}}function ar(r){return _t(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{Pt(t){return _t(t,"globals")}getSessionToken(t){return this.Pt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?ht.fromUint8Array(n):ht.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Pt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(ot(t.integerValue));else if("doubleValue"in t){const n=ot(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),Pr(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),typeof n=="string"&&(n=ne(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(ye(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?Dl(t)?this.dt(e,Number.MAX_SAFE_INTEGER):$s(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):F()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const s of Object.keys(n))this.Vt(s,e),this.Tt(n[s],e)}wt(t,e){var n,s;const i=t.fields||{};this.dt(e,53);const a="value",u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(e,15),e.At(ot(u)),this.Vt(a,e),this.Tt(i[a],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const s of n)this.Tt(s,e)}yt(t,e){this.dt(e,37),O.fromName(t).path.forEach(n=>{this.dt(e,60),this.Dt(n,e)})}dt(t,e){t.At(e)}ft(t){t.At(2)}}Oe.vt=new Oe;function sg(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function hc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=sg(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class ig{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ft(n.value),n=e.next();this.Mt()}xt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ot(n.value),n=e.next();this.Nt()}Lt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=e.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=e.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(t){const e=this.qt(t),n=hc(e);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Kt(t){const e=this.qt(t),n=hc(e);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(t){this.Qt(t.length),this.buffer.set(t,this.position),this.position+=t.length}zt(){return this.buffer.slice(0,this.position)}qt(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Ft(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ot(t){const e=255&t;e===0?(this.Gt(0),this.Gt(255)):e===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(t){this.Qt(1),this.buffer[this.position++]=t}Gt(t){this.Qt(1),this.buffer[this.position++]=~t}Qt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class og{constructor(t){this.jt=t}gt(t){this.jt.Ct(t)}Rt(t){this.jt.Lt(t)}At(t){this.jt.kt(t)}Et(){this.jt.$t()}}class ag{constructor(t){this.jt=t}gt(t){this.jt.xt(t)}Rt(t){this.jt.Bt(t)}At(t){this.jt.Kt(t)}Et(){this.jt.Wt()}}class ur{constructor(){this.jt=new ig,this.Ht=new og(this.jt),this.Jt=new ag(this.jt)}seed(t){this.jt.seed(t)}Yt(t){return t===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}Zt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Me(this.indexId,this.documentKey,this.arrayValue,n)}}function le(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=dc(r.arrayValue,t.arrayValue),e!==0?e:(e=dc(r.directionalValue,t.directionalValue),e!==0?e:O.comparator(r.documentKey,t.documentKey)))}function dc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t){this.Xt=new tt((e,n)=>ut.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.en=t.orderBy,this.tn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(t){if(L(t.collectionGroup===this.collectionId),this.nn)return!1;const e=Xi(t);if(e!==void 0&&!this.sn(e))return!1;const n=xe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const u=this.Xt.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.on(u,c)||!this._n(this.en[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.en.length||!this._n(this.en[a++],u))return!1}return!0}an(){if(this.nn)return null;let t=new tt(ut.comparator);const e=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new vs(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new vs(n.field,0))}for(const n of this.en)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new vs(n.field,n.dir==="asc"?0:1)));return new xs(xs.UNKNOWN_ID,this.collectionId,e,Sr.empty())}sn(t){for(const e of this.tn)if(this.on(e,t))return!0;return!1}on(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}_n(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(r){var t,e;if(L(r instanceof $||r instanceof Z),r instanceof $){if(r instanceof Bl){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>$.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Eh(s));return Z.create(n,r.op)}function ug(r){if(r.getFilters().length===0)return[];const t=fo(Eh(r));return L(Th(t)),lo(t)||ho(t)?[t]:t.getFilters()}function lo(r){return r instanceof $}function ho(r){return r instanceof Z&&Po(r)}function Th(r){return lo(r)||ho(r)||function(e){if(e instanceof Z&&no(e)){for(const n of e.getFilters())if(!lo(n)&&!ho(n))return!1;return!0}return!1}(r)}function fo(r){if(L(r instanceof $||r instanceof Z),r instanceof $)return r;if(r.filters.length===1)return fo(r.filters[0]);const t=r.filters.map(n=>fo(n));let e=Z.create(t,r.op);return e=Fs(e),Th(e)?e:(L(e instanceof Z),L(wn(e)),L(e.filters.length>1),e.filters.reduce((n,s)=>Bo(n,s)))}function Bo(r,t){let e;return L(r instanceof $||r instanceof Z),L(t instanceof $||t instanceof Z),e=r instanceof $?t instanceof $?function(s,i){return Z.create([s,i],"and")}(r,t):mc(r,t):t instanceof $?mc(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),wn(s)&&wn(i))return Ml(s,i.getFilters());const a=no(s)?s:i,u=no(s)?i:s,c=a.filters.map(d=>Bo(d,u));return Z.create(c,"or")}(r,t),Fs(e)}function mc(r,t){if(wn(t))return Ml(t,r.getFilters());{const e=t.filters.map(n=>Bo(r,n));return Z.create(e,"or")}}function Fs(r){if(L(r instanceof $||r instanceof Z),r instanceof $)return r;const t=r.getFilters();if(t.length===1)return Fs(t[0]);if(kl(r))return r;const e=t.map(s=>Fs(s)),n=[];return e.forEach(s=>{s instanceof $?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.un=new Uo}addToCollectionParentIndex(t,e){return this.un.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve(qt.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class Uo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(K.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Uint8Array(0);class lg{constructor(t,e){this.databaseId=e,this.cn=new Uo,this.ln=new Ae(n=>Ge(n),(n,s)=>Br(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.cn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.cn.add(e)});const i={collectionId:n,parent:Nt(s)};return pc(t).put(i)}return A.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[_l(e),""],!1,!0);return pc(t).U(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n})}addFieldIndex(t,e){const n=cr(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=cn(t);return i.next(u=>{a.put(uc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=cr(t),s=cn(t),i=un(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=cr(t),n=un(t),s=cn(t);return e.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(t,e){return A.forEach(this.hn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new fc(n).an();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=un(t);let s=!0;const i=new Map;return A.forEach(this.hn(e),a=>this.Pn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=z();const u=[];return A.forEach(i,(c,d)=>{V("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(Y=>`${Y.fieldPath}:${Y.kind}`).join(",")}`}(c)} to execute ${Ge(e)}`);const f=function(U,Y){const nt=Xi(Y);if(nt===void 0)return null;for(const H of ks(U,nt.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(d,c),p=function(U,Y){const nt=new Map;for(const H of xe(Y))for(const E of ks(U,H.fieldPath))switch(E.op){case"==":case"in":nt.set(H.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return nt.set(H.fieldPath.canonicalString(),E.value),Array.from(nt.values())}return null}(d,c),y=function(U,Y){const nt=[];let H=!0;for(const E of xe(Y)){const g=E.kind===0?Qu(U,E.fieldPath,U.startAt):Wu(U,E.fieldPath,U.startAt);nt.push(g.value),H&&(H=g.inclusive)}return new Ee(nt,H)}(d,c),R=function(U,Y){const nt=[];let H=!0;for(const E of xe(Y)){const g=E.kind===0?Wu(U,E.fieldPath,U.endAt):Qu(U,E.fieldPath,U.endAt);nt.push(g.value),H&&(H=g.inclusive)}return new Ee(nt,H)}(d,c),C=this.In(c,d,y),N=this.In(c,d,R),x=this.Tn(c,d,p),q=this.En(c.indexId,f,C,y.inclusive,N,R.inclusive,x);return A.forEach(q,G=>n.G(G,e.limit).next(U=>{U.forEach(Y=>{const nt=O.fromSegments(Y.documentKey);a.has(nt)||(a=a.add(nt),u.push(nt))})}))}).next(()=>u)}return A.resolve(null)})}hn(t){let e=this.ln.get(t);return e||(t.filters.length===0?e=[t]:e=ug(Z.create(t.filters,"and")).map(n=>so(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.ln.set(t,e),e)}En(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),d=c/(e!=null?e.length:1),f=[];for(let p=0;p<c;++p){const y=e?this.dn(e[p/d]):_s,R=this.An(t,y,n[p%d],s),C=this.Rn(t,y,i[p%d],a),N=u.map(x=>this.An(t,y,x,!0));f.push(...this.createRange(R,C,N))}return f}An(t,e,n,s){const i=new Me(t,O.empty(),e,n);return s?i:i.Zt()}Rn(t,e,n,s){const i=new Me(t,O.empty(),e,n);return s?i.Zt():i}Pn(t,e){const n=new fc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.rn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.hn(e);return A.forEach(s,i=>this.Pn(t,i).next(a=>{a?n!==0&&a.fields.length<function(c){let d=new tt(ut.comparator),f=!1;for(const p of c.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:d=d.add(y.field));for(const p of c.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Vn(t,e){const n=new ur;for(const s of xe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Yt(s.kind);Oe.vt.It(i,a)}return n.zt()}dn(t){const e=new ur;return Oe.vt.It(t,e.Yt(0)),e.zt()}mn(t,e){const n=new ur;return Oe.vt.It(je(this.databaseId,e),n.Yt(function(i){const a=xe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.zt()}Tn(t,e,n){if(n===null)return[];let s=[];s.push(new ur);let i=0;for(const a of xe(t)){const u=n[i++];for(const c of s)if(this.fn(e,a.fieldPath)&&Cr(u))s=this.gn(s,a,u);else{const d=c.Yt(a.kind);Oe.vt.It(u,d)}}return this.pn(s)}In(t,e,n){return this.Tn(t,e,n.position)}pn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].zt();return e}gn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new ur;c.seed(u.zt()),Oe.vt.It(a,c.Yt(e.kind)),i.push(c)}return i}fn(t,e){return!!t.filters.find(n=>n instanceof $&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=cr(t),s=cn(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(i=>{const a=[];return A.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,p){const y=p?new Sr(p.sequenceNumber,new qt(Qe(p.readTime),new O(zt(p.documentKey)),p.largestBatchId)):Sr.empty(),R=f.fields.map(([C,N])=>new vs(ut.fromServerFormat(C),N));return new xs(f.indexId,f.collectionGroup,R,y)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:j(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=cr(t),i=cn(t);return this.yn(t).next(a=>s.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>A.forEach(u,c=>i.put(uc(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),A.forEach(u,c=>this.wn(t,s,c).next(d=>{const f=this.Sn(i,c);return d.isEqual(f)?A.resolve():this.bn(t,i,c,d,f)}))))})}Dn(t,e,n,s){return un(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,e.key),documentKey:e.key.path.toArray()})}vn(t,e,n,s){return un(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const s=un(t);let i=new tt(le);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,e)])},(a,u)=>{i=i.add(new Me(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}Sn(t,e){let n=new tt(le);const s=this.Vn(e,t);if(s==null)return n;const i=Xi(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Cr(a))for(const u of a.arrayValue.values||[])n=n.add(new Me(e.indexId,t.key,this.dn(u),s))}else n=n.add(new Me(e.indexId,t.key,_s,s));return n}bn(t,e,n,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(c,d,f,p,y){const R=c.getIterator(),C=d.getIterator();let N=an(R),x=an(C);for(;N||x;){let q=!1,G=!1;if(N&&x){const U=f(N,x);U<0?G=!0:U>0&&(q=!0)}else N!=null?G=!0:q=!0;q?(p(x),x=an(C)):G?(y(N),N=an(R)):(N=an(R),x=an(C))}}(s,i,le,u=>{a.push(this.Dn(t,e,n,u))},u=>{a.push(this.vn(t,e,n,u))}),A.waitFor(a)}yn(t){let e=1;return cn(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>le(a,u)).filter((a,u,c)=>!u||le(a,c[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=le(a,t),c=le(a,e);if(u===0)s[0]=t.Zt();else if(u>0&&c<0)s.push(a),s.push(a.Zt());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Cn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,_s,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,_s,[]];i.push(IDBKeyRange.bound(u,c))}return i}Cn(t,e){return le(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(gc)}getMinOffset(t,e){return A.mapArray(this.hn(e),n=>this.Pn(t,n).next(s=>s||F())).next(gc)}}function pc(r){return _t(r,"collectionParents")}function un(r){return _t(r,"indexEntries")}function cr(r){return _t(r,"indexConfiguration")}function cn(r){return _t(r,"indexState")}function gc(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ao(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new qt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Mt(t,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(r,t,e){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.J({range:a},(f,p,y)=>(u++,y.delete()));i.push(c.next(()=>{L(u===1)}));const d=[];for(const f of e.mutations){const p=Al(t,f.key.path,e.batchId);i.push(s.delete(p)),d.push(f.key)}return A.waitFor(i).next(()=>d)}function Ls(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw F();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);class Js{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new Js(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return he(t).J({index:"userMutationsIndex",range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=pn(t),a=he(t);return a.add({}).next(u=>{L(typeof u=="number");const c=new No(u,e,n,s),d=function(R,C,N){const x=N.baseMutations.map(G=>kr(R.ct,G)),q=N.mutations.map(G=>kr(R.ct,G));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:q}}(this.serializer,this.userId,c),f=[];let p=new tt((y,R)=>j(y.canonicalString(),R.canonicalString()));for(const y of s){const R=Al(this.userId,y.key.path,u);p=p.add(y.key.path.popLast()),f.push(a.put(d)),f.push(i.put(R,Ym))}return p.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(t,y))}),t.addOnCommittedListener(()=>{this.Fn[u]=c.keys()}),A.waitFor(f).next(()=>c)})}lookupMutationBatch(t,e){return he(t).get(e).next(n=>n?(L(n.userId===this.userId),ke(this.serializer,n)):null)}Mn(t,e){return this.Fn[e]?A.resolve(this.Fn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Fn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return he(t).J({index:"userMutationsIndex",range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),i=ke(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return he(t).J({index:"userMutationsIndex",range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return he(t).U("userMutationsIndex",e).next(n=>n.map(s=>ke(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ws(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return pn(t).J({range:s},(a,u,c)=>{const[d,f,p]=a,y=zt(f);if(d===this.userId&&e.path.isEqual(y))return he(t).get(p).next(R=>{if(!R)throw F();L(R.userId===this.userId),i.push(ke(this.serializer,R))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(j);const s=[];return e.forEach(i=>{const a=ws(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=pn(t).J({range:u},(d,f,p)=>{const[y,R,C]=d,N=zt(R);y===this.userId&&i.path.isEqual(N)?n=n.add(C):p.done()});s.push(c)}),A.waitFor(s).next(()=>this.xn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=ws(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt(j);return pn(t).J({range:a},(c,d,f)=>{const[p,y,R]=c,C=zt(y);p===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(R)):f.done()}).next(()=>this.xn(t,u))}xn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(he(t).get(i).next(a=>{if(a===null)throw F();L(a.userId===this.userId),n.push(ke(this.serializer,a))}))}),A.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return vh(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.On(e.batchId)}),A.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}On(t){delete this.Fn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return pn(t).J({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=zt(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(t,e){return wh(t,this.userId,e)}Nn(t){return Ah(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function wh(r,t,e){const n=ws(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return pn(r).J({range:i,H:!0},(u,c,d)=>{const[f,p,y]=u;f===t&&p===s&&(a=!0),d.done()}).next(()=>a)}function he(r){return _t(r,"mutations")}function pn(r){return _t(r,"documentMutations")}function Ah(r){return _t(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new We(0)}static kn(){return new We(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.qn(t).next(e=>{const n=new We(e.highestTargetId);return e.highestTargetId=n.next(),this.Qn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.qn(t).next(e=>B.fromTimestamp(new ct(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.qn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.qn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Qn(t,s)))}addTargetData(t,e){return this.Kn(t,e).next(()=>this.qn(t).next(n=>(n.targetCount+=1,this.$n(e,n),this.Qn(t,n))))}updateTargetData(t,e){return this.Kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>ln(t).delete(e.targetId)).next(()=>this.qn(t)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.Qn(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return ln(t).J((a,u)=>{const c=pr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))}).next(()=>A.waitFor(i)).next(()=>s)}forEachTarget(t,e){return ln(t).J((n,s)=>{const i=pr(s);e(i)})}qn(t){return yc(t).get("targetGlobalKey").next(e=>(L(e!==null),e))}Qn(t,e){return yc(t).put("targetGlobalKey",e)}Kn(t,e){return ln(t).put(Ih(this.serializer,e))}$n(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.qn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ge(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return ln(t).J({range:s,index:"queryTargetsIndex"},(a,u,c)=>{const d=pr(u);Br(e,d.target)&&(i=d,c.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=de(t);return e.forEach(a=>{const u=Nt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),A.waitFor(s)}removeMatchingKeys(t,e,n){const s=de(t);return A.forEach(e,i=>{const a=Nt(i.path);return A.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=de(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=de(t);let i=z();return s.J({range:n,H:!0},(a,u,c)=>{const d=zt(a[1]),f=new O(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Nt(e.path),s=IDBKeyRange.bound([n],[_l(n)],!1,!0);let i=0;return de(t).J({index:"documentTargetsIndex",H:!0,range:s},([a,u],c,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}ot(t,e){return ln(t).get(e).next(n=>n?pr(n):null)}}function ln(r){return _t(r,"targets")}function yc(r){return _t(r,"targetGlobal")}function de(r){return _t(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic([r,t],[e,n]){const s=j(r,e);return s===0?j(t,n):s}class dg{constructor(t){this.Un=t,this.buffer=new tt(Ic),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ic(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class fg{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){V("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){we(e)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ve(e)}await this.Hn(3e5)})}}class mg{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Ft.oe);const n=new dg(e);return this.Jn.forEachTarget(t,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(t,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(_c)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_c):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,s,i,a,u,c,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(n=p,u=Date.now(),this.removeTargets(t,n,e))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(p=>(d=Date.now(),hn()<=Q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function pg(r,t){return new mg(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,e){this.db=t,this.garbageCollector=pg(this,e)}Yn(t){const e=this.er(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}er(t){let e=0;return this.Zn(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Zn(t,e){return this.tr(t,(n,s)=>e(s))}addReference(t,e,n){return ys(t,n)}removeReference(t,e,n){return ys(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ys(t,e)}nr(t,e){return function(s,i){let a=!1;return Ah(s).Y(u=>wh(s,u,i).next(c=>(c&&(a=!0),A.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(t,(a,u)=>{if(u<=e){const c=this.nr(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,B.min()),de(t).delete(function(p){return[0,Nt(p.path)]}(a))))});s.push(c)}}).next(()=>A.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ys(t,e)}tr(t,e){const n=de(t);let s,i=Ft.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:d})=>{a===0?(i!==Ft.oe&&e(new O(zt(s)),i),i=d,s=c):i=Ft.oe}).next(()=>{i!==Ft.oe&&e(new O(zt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ys(r,t){return de(r).put(function(n,s){return{targetId:0,path:Nt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return De(t).put(n)}removeEntry(t,e,n){return De(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ms(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.rr(t,n)))}getEntry(t,e){let n=it.newInvalidDocument(e);return De(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(lr(e))},(s,i)=>{n=this.ir(e,i)}).next(()=>n)}sr(t,e){let n={size:0,document:it.newInvalidDocument(e)};return De(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(lr(e))},(s,i)=>{n={document:this.ir(e,i),size:Ls(i)}}).next(()=>n)}getEntries(t,e){let n=Bt();return this._r(t,e,(s,i)=>{const a=this.ir(s,i);n=n.insert(s,a)}).next(()=>n)}ar(t,e){let n=Bt(),s=new rt(O.comparator);return this._r(t,e,(i,a)=>{const u=this.ir(i,a);n=n.insert(i,u),s=s.insert(i,Ls(a))}).next(()=>({documents:n,ur:s}))}_r(t,e,n){if(e.isEmpty())return A.resolve();let s=new tt(vc);e.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(lr(s.first()),lr(s.last())),a=s.getIterator();let u=a.getNext();return De(t).J({index:"documentKeyIndex",range:i},(c,d,f)=>{const p=O.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&vc(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(lr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Ms(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return De(t).U(IDBKeyRange.bound(u,c,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Bt();for(const p of d){const y=this.ir(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(qr(e,y)||s.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Bt();const a=Tc(e,n),u=Tc(e,qt.max());return De(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,d,f)=>{const p=this.ir(O.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new yg(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Ec(t).get("remoteDocumentGlobalKey").next(e=>(L(!!e),e))}rr(t,e){return Ec(t).put("remoteDocumentGlobalKey",e)}ir(t,e){if(e){const n=eg(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return it.newInvalidDocument(t)}}function Rh(r){return new _g(r)}class yg extends bh{constructor(t,e){super(),this.cr=t,this.trackRemovals=e,this.lr=new Ae(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new tt((i,a)=>j(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.lr.get(i);if(e.push(this.cr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=oc(this.cr.serializer,a);s=s.add(i.path.popLast());const d=Ls(c);n+=d-u.size,e.push(this.cr.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=oc(this.cr.serializer,a.convertToNoDocument(B.min()));e.push(this.cr.addEntry(t,i,c))}}),s.forEach(i=>{e.push(this.cr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.cr.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.cr.sr(t,e).next(n=>(this.lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.cr.ar(t,e).next(({documents:n,ur:s})=>(s.forEach((i,a)=>{this.lr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Ec(r){return _t(r,"remoteDocumentGlobal")}function De(r){return _t(r,"remoteDocumentsV14")}function lr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Tc(r,t){const e=t.documentKey.path.toArray();return[r,Ms(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function vc(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=j(e[i],n[i]),s)return s;return s=j(e.length,n.length),s||(s=j(e[e.length-2],n[n.length-2]),s||j(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Ir(n.mutation,s,Lt.empty(),ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,z()).next(()=>n))}getLocalViewOfDocuments(t,e,n=z()){const s=Kt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=fr();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Kt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,z()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Bt();const a=yr(),u=function(){return yr()}();return e.forEach((c,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof se)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Ir(f.mutation,d,f.mutation.getFieldMask(),ct.now())):a.set(d.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var p;return u.set(d,new Ig(f,(p=a.get(d))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(t,e){const n=yr();let s=new rt((a,u)=>a-u),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let f=n.get(c)||Lt.empty();f=u.applyToLocalView(d,f),n.set(c,f);const p=(s.get(u.batchId)||z()).add(c);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,f=c.value,p=$l();f.forEach(y=>{if(!i.has(y)){const R=Zl(e.get(y),n.get(y));R!==null&&p.set(y,R),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return A.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):A.resolve(Kt());let u=-1,c=i;return a.next(d=>A.forEach(d,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(t,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,c,d,z())).next(f=>({batchId:u,changes:Kl(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=fr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=fr();return this.indexManager.getCollectionParents(t,i).next(u=>A.forEach(u,c=>{const d=function(p,y){return new re(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((p,y)=>{a=a.insert(p,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let u=fr();return a.forEach((c,d)=>{const f=i.get(c);f!==void 0&&Ir(f.mutation,d,Lt.empty(),ct.now()),qr(e,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return A.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Lo(s.bundledQuery),readTime:ft(s.readTime)}}(e)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.overlays=new rt(O.comparator),this.Ir=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Kt();return A.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.ht(t,e,i)}),A.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const s=Kt(),i=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=Kt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Kt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return A.resolve(u)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Oo(e,n));let i=this.Ir.get(e);i===void 0&&(i=z(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.Tr=new tt(yt.Er),this.dr=new tt(yt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new yt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new yt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new O(new K([])),n=new yt(e,t),s=new yt(e,t+1),i=[];return this.dr.forEachInRange([n,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new K([])),n=new yt(e,t),s=new yt(e,t+1);let i=z();return this.dr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new yt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class yt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new tt(yt.Er)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new No(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new yt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return A.resolve(a)}lookupMutationBatch(t,e){return A.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],a=>{const u=this.Dr(a.wr);i.push(u)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(j);return e.forEach(s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],u=>{n=n.add(u.wr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new yt(new O(i),0);let u=new tt(j);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.wr)),!0)},a),A.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return A.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new yt(e,0),s=this.br.firstAfterOrEqual(n);return A.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t){this.Mr=t,this.docs=function(){return new rt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():it.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Bt();const a=e.path,u=new O(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ao(Il(f),n)<=0||(s.has(f.key)||qr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(t,e,n,s){F()}Or(t,e){return A.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new bg(this)}getSize(t){return A.resolve(this.size)}}class bg extends bh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),A.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t){this.persistence=t,this.Nr=new Ae(e=>Ge(e),Br),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qo,this.targetCount=0,this.kr=We.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),A.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new We(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.Kn(e),A.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),A.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ft(0),this.Kr=!1,this.Kr=!0,this.$r=new vg,this.referenceDelegate=t(this),this.Ur=new Rg(this),this.indexManager=new cg,this.remoteDocumentCache=function(s){return new Ag(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new yh(e),this.Gr=new Eg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Tg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new wg(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const s=new Sg(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(t,e){return A.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Sg extends Tl{constructor(t){super(),this.currentSequenceNumber=t}}class Ys{constructor(t){this.persistence=t,this.Jr=new qo,this.Yr=null}static Zr(t){return new Ys(t)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),A.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xr,n=>{const s=O.fromPath(n);return this.ei(t,s).next(i=>{i||e.removeEntry(s,B.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return A.or([()=>A.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t){this.serializer=t}O(t,e,n,s){const i=new zs("createOrUpgrade",e);n<1&&s>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Mu,{unique:!0}),c.createObjectStore("documentMutations")}(t),wc(t),function(c){c.createObjectStore("remoteDocuments")}(t));let a=A.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),wc(t)),a=a.next(()=>function(c){const d=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,d){return d.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Mu,{unique:!0});const p=d.store("mutations"),y=f.map(R=>p.put(R));return A.waitFor(y)})}(t,i))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.ni(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.ri(i)))),n<7&&s>=7&&(a=a.next(()=>this.ii(i))),n<8&&s>=8&&(a=a.next(()=>this.si(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.oi(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:cp});d.createIndex("collectionPathOverlayIndex",lp,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",hp,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:Xm});d.createIndex("documentKeyIndex",Zm),d.createIndex("collectionGroupIndex",tp)}(t)).next(()=>this._i(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(a=a.next(()=>this.ai(t,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:ip}).createIndex("sequenceNumberIndex",op,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:ap}).createIndex("documentKeyIndex",up,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(t)})),a}ri(t){let e=0;return t.store("remoteDocuments").J((n,s)=>{e+=Ls(s)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(s=>A.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>A.forEach(u,c=>{L(c.userId===i.userId);const d=ke(this.serializer,c);return vh(t,i.userId,d).next(()=>{})}))}))}ii(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((a,u)=>{const c=new K(a),d=function(p){return[0,Nt(p)]}(c);i.push(e.get(d).next(f=>f?A.resolve():(p=>e.put({targetId:0,path:Nt(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(i))})}si(t,e){t.createObjectStore("collectionParents",{keyPath:sp});const n=e.store("collectionParents"),s=new Uo,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Nt(c)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new K(a);return i(c.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,c],d)=>{const f=zt(u);return i(f.popLast())}))}oi(t){const e=t.store("targets");return e.J((n,s)=>{const i=pr(s),a=Ih(this.serializer,i);return e.put(a)})}_i(t,e){const n=e.store("remoteDocuments"),s=[];return n.J((i,a)=>{const u=e.store("remoteDocumentsV14"),c=function(p){return p.document?new O(K.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):F()}(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>A.waitFor(s))}ai(t,e){const n=e.store("mutations"),s=Rh(this.serializer),i=new Ph(Ys.Zr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var d;let f=(d=u.get(c.userId))!==null&&d!==void 0?d:z();ke(this.serializer,c).keys().forEach(p=>f=f.add(p)),u.set(c.userId,f)}),A.forEach(u,(c,d)=>{const f=new It(d),p=Hs.lt(this.serializer,f),y=i.getIndexManager(f),R=Js.lt(f,this.serializer,y,i.referenceDelegate);return new Sh(s,R,p,y).recalculateAndSaveOverlaysForDocumentKeys(new Zi(e,Ft.oe),c).next()})})}}function wc(r){r.createObjectStore("targetDocuments",{keyPath:np}).createIndex("documentTargetsIndex",rp,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ep,{unique:!0}),r.createObjectStore("targetGlobal")}const ji="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class jo{constructor(t,e,n,s,i,a,u,c,d,f,p=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.ui=i,this.window=a,this.document=u,this.ci=d,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=y=>Promise.resolve(),!jo.D())throw new D(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new gg(this,s),this.Ai=e+"main",this.serializer=new yh(c),this.Ri=new $t(this.Ai,this.hi,new Pg(this.serializer)),this.$r=new rg,this.Ur=new hg(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Rh(this.serializer),this.Gr=new ng,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&dt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,ji);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ur.getHighestSequenceNumber(t))}).then(t=>{this.Qr=new Ft(t,this.ci)}).then(()=>{this.Kr=!0}).catch(t=>(this.Ri&&this.Ri.close(),Promise.reject(t)))}yi(t){return this.di=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ri.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Is(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(t).next(e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(t)).next(e=>this.isPrimary&&!e?this.bi(t).next(()=>!1):!!e&&this.Di(t).next(()=>!0))).catch(t=>{if(we(t))return V("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ui.enqueueRetryable(()=>this.di(t)),this.isPrimary=t})}wi(t){return hr(t).get("owner").next(e=>A.resolve(this.vi(e)))}Ci(t){return Is(t).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=_t(e,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),a=s.filter(u=>i.indexOf(u)===-1);return A.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(const e of t)this.Vi.removeItem(this.Oi(e.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(t){return!!t&&t.ownerId===this.clientId}Si(t){return this.li?A.resolve(!0):hr(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)){if(this.vi(e)&&this.networkEnabled)return!0;if(!this.vi(e)){if(!e.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,ji);return!1}}return!(!this.networkEnabled||!this.inForeground)||Is(t).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&V("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new Zi(t,Ft.oe);return this.bi(e).next(()=>this.Ci(e))}),this.Ri.close(),this.qi()}xi(t,e){return t.filter(n=>this.Mi(n.updateTimeMs,e)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",t=>Is(t).U().next(e=>this.xi(e,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(t,e){return Js.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new lg(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Hs.lt(this.serializer,t)}getBundleCache(){return this.Gr}runTransaction(t,e,n){V("IndexedDbPersistence","Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(c){return c===17?mp:c===16?fp:c===15?Ro:c===14?Sl:c===13?Rl:c===12?dp:c===11?bl:void F()}(this.hi);let a;return this.Ri.runTransaction(t,s,i,u=>(a=new Zi(u,this.Qr?this.Qr.next():Ft.oe),e==="readwrite-primary"?this.wi(a).next(c=>!!c||this.Si(a)).next(c=>{if(!c)throw dt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new D(S.FAILED_PRECONDITION,El);return n(a)}).next(c=>this.Di(a).next(()=>c)):this.Ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ki(t){return hr(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(S.FAILED_PRECONDITION,ji)})}Di(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hr(t).put("owner",e)}static D(){return $t.D()}bi(t){const e=hr(t);return e.get("owner").next(n=>this.vi(n)?(V("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):A.resolve())}Mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(dt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;Qc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(t){var e;try{const n=((e=this.Vi)===null||e===void 0?void 0:e.getItem(this.Oi(t)))!==null;return V("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return dt("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(t){dt("Failed to set zombie client id.",t)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function hr(r){return _t(r,"owner")}function Is(r){return _t(r,"clientMetadata")}function Go(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=z(),s=z();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Qc()?8:vl(yn())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Yi(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Vg;return this.Xi(t,e,a).next(u=>{if(i.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>i.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(hn()<=Q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",dn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),A.resolve()):(hn()<=Q.DEBUG&&V("QueryEngine","Query:",dn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(hn()<=Q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",dn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):A.resolve())}Yi(t,e){if(Hu(e))return A.resolve(null);let n=kt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Os(e,null,"F"),n=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=z(...i);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.ts(e,u);return this.ns(e,d,a,c.readTime)?this.Yi(t,Os(e,null,"F")):this.rs(t,d,e,c)}))})))}Zi(t,e,n,s){return Hu(e)||s.isEqual(B.min())?A.resolve(null):this.Ji.getDocuments(t,n).next(i=>{const a=this.ts(e,i);return this.ns(e,a,n,s)?A.resolve(null):(hn()<=Q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dn(e)),this.rs(t,a,e,yl(s,-1)).next(u=>u))})}ts(t,e){let n=new tt(Gl(t));return e.forEach((s,i)=>{qr(t,i)&&(n=n.add(i))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,e,n){return hn()<=Q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dn(e)),this.Ji.getDocumentsMatchingQuery(t,e,qt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new rt(j),this._s=new Ae(i=>Ge(i),Br),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Dh(r,t,e,n){return new Dg(r,t,e,n)}async function Ch(r,t){const e=M(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=z();for(const d of s){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Cg(r,t){const e=M(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,f){const p=d.batch,y=p.keys();let R=A.resolve();return y.forEach(C=>{R=R.next(()=>f.getEntry(c,C)).next(N=>{const x=d.docVersions.get(C);L(x!==null),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function xh(r){const t=M(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function xg(r,t){const e=M(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;u.push(e.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>e.Ur.addMatchingKeys(i,f.addedDocuments,p)));let R=y.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?R=R.withResumeToken(ht.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(p,R),function(N,x,q){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(y,R,f)&&u.push(e.Ur.updateTargetData(i,R))});let c=Bt(),d=z();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Nh(i,a,t.documentUpdates).next(f=>{c=f.Ps,d=f.Is})),!n.isEqual(B.min())){const f=e.Ur.getLastRemoteSnapshotVersion(i).next(p=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return A.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(e.os=s,i))}function Nh(r,t,e){let n=z(),s=z();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Bt();return e.forEach((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):V("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Ng(r,t){const e=M(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Sn(r,t){const e=M(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(i=>i?(s=i,A.resolve(s)):e.Ur.allocateTargetId(n).next(a=>(s=new Zt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Pn(r,t,e){const n=M(r),s=n.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!we(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function Bs(r,t,e){const n=M(r);let s=B.min(),i=z();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const p=M(c),y=p._s.get(f);return y!==void 0?A.resolve(p.os.get(y)):p.Ur.getTargetData(d,f)}(n,a,kt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?s:B.min(),e?i:z())).next(u=>(Mh(n,jl(t),u),{documents:u,Ts:i})))}function kh(r,t){const e=M(r),n=M(e.Ur),s=e.os.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,t).next(a=>a?a.target:null))}function Oh(r,t){const e=M(r),n=e.us.get(t)||B.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.cs.getAllFromCollectionGroup(s,t,yl(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Mh(e,t,s),s))}function Mh(r,t,e){let n=r.us.get(t)||B.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(t,n)}async function kg(r,t,e,n){const s=M(r);let i=z(),a=Bt();for(const d of e){const f=t.Es(d.metadata.name);d.document&&(i=i.add(f));const p=t.ds(d);p.setReadTime(t.As(d.metadata.readTime)),a=a.insert(f,p)}const u=s.cs.newChangeBuffer({trackRemovals:!0}),c=await Sn(s,function(f){return kt(Mn(K.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",d=>Nh(d,u,a).next(f=>(u.apply(d),f)).next(f=>s.Ur.removeMatchingKeysForTargetId(d,c.targetId).next(()=>s.Ur.addMatchingKeys(d,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(d,f.Ps,f.Is)).next(()=>f.Ps)))}async function Og(r,t,e=z()){const n=await Sn(r,kt(Lo(t.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=ft(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.Gr.saveNamedQuery(i,t);const u=n.withResumeToken(ht.EMPTY_BYTE_STRING,a);return s.os=s.os.insert(u.targetId,u),s.Ur.updateTargetData(i,u).next(()=>s.Ur.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Ur.addMatchingKeys(i,e,n.targetId)).next(()=>s.Gr.saveNamedQuery(i,t))})}function Ac(r,t){return`firestore_clients_${r}_${t}`}function bc(r,t,e){let n=`firestore_mutations_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function Gi(r,t){return`firestore_targets_${r}_${t}`}class Us{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Rs(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new D(s.error.code,s.error.message))),a?new Us(t,e,s.state,i):(dt("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Vs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Er{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Rs(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new Er(t,n.state,s):(dt("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Vs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class qs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Rs(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Do();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=wl(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new qs(t,i):(dt("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Ko{constructor(t,e){this.clientId=t,this.onlineState=e}static Rs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Ko(e.clientId,e.onlineState):(dt("SharedClientState",`Failed to parse online state: ${t}`),null)}}class mo{constructor(){this.activeTargetIds=Do()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zi{constructor(t,e,n,s,i){this.window=t,this.ui=e,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new rt(j),this.started=!1,this.bs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Ac(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new mo),this.Cs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Qi();for(const n of t){if(n===this.ps)continue;const s=this.getItem(Ac(this.persistenceKey,n));if(s){const i=qs.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const e=this.storage.getItem(this.xs);if(e){const n=this.Ls(e);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.vs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(t){let e=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.qs(t,"pending")}updateMutationState(t,e,n){this.qs(t,e,n),this.Qs(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(Gi(this.persistenceKey,t));if(s){const i=Er.Rs(t,s);i&&(n=i.state)}}return e&&this.Ks.fs(t),this.Ns(),n}removeLocalQueryTarget(t){this.Ks.gs(t),this.Ns()}isLocalQueryTarget(t){return this.Ks.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Gi(this.persistenceKey,t))}updateQueryState(t,e,n){this.$s(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.Qs(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Us(t)}notifyBundleLoaded(t){this.Ws(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return V("SharedClientState","READ",t,e),e}setItem(t,e){V("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){V("SharedClientState","REMOVE",t),this.storage.removeItem(t)}ws(t){const e=t;if(e.storageArea===this.storage){if(V("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Ds)return void dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Cs.test(e.key)){if(e.newValue==null){const n=this.Gs(e.key);return this.zs(n,null)}{const n=this.js(e.key,e.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(e.key)){if(e.newValue!==null){const n=this.Hs(e.key,e.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(e.key)){if(e.newValue!==null){const n=this.Ys(e.key,e.newValue);if(n)return this.Zs(n)}}else if(e.key===this.xs){if(e.newValue!==null){const n=this.Ls(e.newValue);if(n)return this.Bs(n)}}else if(e.key===this.vs){const n=function(i){let a=Ft.oe;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){dt("SharedClientState","Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Ft.oe&&this.sequenceNumberHandler(n)}else if(e.key===this.Os){const n=this.Xs(e.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(e)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(t,e,n){const s=new Us(this.currentUser,t,e,n),i=bc(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Vs())}Qs(t){const e=bc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Us(t){const e={clientId:this.ps,onlineState:t};this.storage.setItem(this.xs,JSON.stringify(e))}$s(t,e,n){const s=Gi(this.persistenceKey,t),i=new Er(t,e,n);this.setItem(s,i.Vs())}Ws(t){const e=JSON.stringify(Array.from(t));this.setItem(this.Os,e)}Gs(t){const e=this.Cs.exec(t);return e?e[1]:null}js(t,e){const n=this.Gs(t);return qs.Rs(n,e)}Hs(t,e){const n=this.Fs.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Us.Rs(new It(i),s,e)}Ys(t,e){const n=this.Ms.exec(t),s=Number(n[1]);return Er.Rs(s,e)}Ls(t){return Ko.Rs(t)}Xs(t){return JSON.parse(t)}async Js(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.no(t.batchId,t.state,t.error);V("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Zs(t){return this.syncEngine.ro(t.targetId,t.state,t.error)}zs(t,e){const n=e?this.Ss.insert(t,e):this.Ss.remove(t),s=this.ks(this.Ss),i=this.ks(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.io(a,u).then(()=>{this.Ss=n})}Bs(t){this.Ss.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ks(t){let e=Do();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class Fh{constructor(){this.so=new mo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new mo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es=null;function Ki(){return Es===null?Es=function(){return 268435456+Math.round(2147483648*Math.random())}():Es++,"0x"+Es.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class Bg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(e,n,s,i,a){const u=Ki(),c=this.xo(e,n.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${u}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(e,c,d,s).then(f=>(V("RestConnection",`Received RPC '${e}' ${u}: `,f),f),f=>{throw ee("RestConnection",`RPC '${e}' ${u} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(e,n,s,i,a,u){return this.Mo(e,n,s,i,a)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+On}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}xo(e,n){const s=Fg[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const i=Ki();return new Promise((a,u)=>{const c=new ll;c.setWithCredentials(!0),c.listenOnce(hl.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ts.NO_ERROR:const f=c.getResponseJson();V(Dt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ts.TIMEOUT:V(Dt,`RPC '${t}' ${i} timed out`),u(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const p=c.getStatus();if(V(Dt,`RPC '${t}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const C=function(x){const q=x.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(R.status);u(new D(C,R.message))}else u(new D(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new D(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{V(Dt,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);V(Dt,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",d,n,15)})}Bo(t,e,n){const s=Ki(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ml(),u=fl(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=i.join("");V(Dt,`Creating RPC '${t}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let y=!1,R=!1;const C=new Lg({Io:x=>{R?V(Dt,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(y||(V(Dt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),y=!0),V(Dt,`RPC '${t}' stream ${s} sending:`,x),p.send(x))},To:()=>p.close()}),N=(x,q,G)=>{x.listen(q,U=>{try{G(U)}catch(Y){setTimeout(()=>{throw Y},0)}})};return N(p,dr.EventType.OPEN,()=>{R||(V(Dt,`RPC '${t}' stream ${s} transport opened.`),C.yo())}),N(p,dr.EventType.CLOSE,()=>{R||(R=!0,V(Dt,`RPC '${t}' stream ${s} transport closed`),C.So())}),N(p,dr.EventType.ERROR,x=>{R||(R=!0,ee(Dt,`RPC '${t}' stream ${s} transport errored:`,x),C.So(new D(S.UNAVAILABLE,"The operation could not be completed")))}),N(p,dr.EventType.MESSAGE,x=>{var q;if(!R){const G=x.data[0];L(!!G);const U=G,Y=U.error||((q=U[0])===null||q===void 0?void 0:q.error);if(Y){V(Dt,`RPC '${t}' stream ${s} received error:`,Y);const nt=Y.status;let H=function(I){const T=pt[I];if(T!==void 0)return nh(T)}(nt),E=Y.message;H===void 0&&(H=S.INTERNAL,E="Unknown error status: "+nt+" with message "+Y.message),R=!0,C.So(new D(H,E)),p.close()}else V(Dt,`RPC '${t}' stream ${s} received:`,G),C.bo(G)}}),N(u,dl.STAT_EVENT,x=>{x.stat===Yi.PROXY?V(Dt,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===Yi.NOPROXY&&V(Dt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){return typeof window<"u"?window:null}function Ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(r){return new Kp(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,n,s,i,a,u,c){this.ui=t,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $o(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(dt(e.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ug extends Bh{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Wp(this.serializer,t),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ft(a.readTime):B.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=uo(this.serializer),e.addTarget=function(i,a){let u;const c=a.target;if(u=Ns(c)?{documents:dh(i,c)}:{query:fh(i,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=oh(i,a.resumeToken);const d=oo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Rn(i,a.snapshotVersion.toTimestamp());const d=oo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=Jp(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=uo(this.serializer),e.removeTarget=t,this.a_(e)}}class qg extends Bh{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Hp(t.writeResults,t.commitTime),n=ft(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=uo(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>kr(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(t,ao(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())})}Lo(t,e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,ao(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Gg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(dt(e),this.D_=!1):V("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{n.enqueueAndForget(async()=>{be(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=M(c);d.L_.add(4),await Bn(d),d.q_.set("Unknown"),d.L_.delete(4),await $r(d)}(this))})}),this.q_=new Gg(n,s)}}async function $r(r){if(be(r))for(const t of r.B_)await t(!0)}async function Bn(r){for(const t of r.B_)await t(!1)}function Xs(r,t){const e=M(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ho(e)?Wo(e):qn(e).r_()&&Qo(e,t))}function Vn(r,t){const e=M(r),n=qn(e);e.N_.delete(t),n.r_()&&Uh(e,t),e.N_.size===0&&(n.r_()?n.o_():be(e)&&e.q_.set("Unknown"))}function Qo(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qn(r).A_(t)}function Uh(r,t){r.Q_.xe(t),qn(r).R_(t)}function Wo(r){r.Q_=new qp({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),qn(r).start(),r.q_.v_()}function Ho(r){return be(r)&&!qn(r).n_()&&r.N_.size>0}function be(r){return M(r).L_.size===0}function qh(r){r.Q_=void 0}async function Kg(r){r.q_.set("Online")}async function $g(r){r.N_.forEach((t,e)=>{Qo(r,t)})}async function Qg(r,t){qh(r),Ho(r)?(r.q_.M_(t),Wo(r)):r.q_.set("Unknown")}async function Wg(r,t,e){if(r.q_.set("Online"),t instanceof ih&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(r,t)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await js(r,n)}else if(t instanceof Ss?r.Q_.Ke(t):t instanceof sh?r.Q_.He(t):r.Q_.We(t),!e.isEqual(B.min()))try{const n=await xh(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.Q_.rt(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),Uh(i,c);const p=new Zt(f.target,c,d,f.sequenceNumber);Qo(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await js(r,n)}}async function js(r,t,e){if(!we(t))throw t;r.L_.add(1),await Bn(r),r.q_.set("Offline"),e||(e=()=>xh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await $r(r)})}function jh(r,t){return t().catch(e=>js(r,e,t))}async function Un(r){const t=M(r),e=Te(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Hg(t);)try{const s=await Ng(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,Jg(t,s)}catch(s){await js(t,s)}Gh(t)&&zh(t)}function Hg(r){return be(r)&&r.O_.length<10}function Jg(r,t){r.O_.push(t);const e=Te(r);e.r_()&&e.V_&&e.m_(t.mutations)}function Gh(r){return be(r)&&!Te(r).n_()&&r.O_.length>0}function zh(r){Te(r).start()}async function Yg(r){Te(r).p_()}async function Xg(r){const t=Te(r);for(const e of r.O_)t.m_(e.mutations)}async function Zg(r,t,e){const n=r.O_.shift(),s=ko.from(n,t,e);await jh(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Un(r)}async function t_(r,t){t&&Te(r).V_&&await async function(n,s){if(function(a){return eh(a)&&a!==S.ABORTED}(s.code)){const i=n.O_.shift();Te(n).s_(),await jh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Un(n)}}(r,t),Gh(r)&&zh(r)}async function Sc(r,t){const e=M(r);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=be(e);e.L_.add(3),await Bn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await $r(e)}async function po(r,t){const e=M(r);t?(e.L_.delete(2),await $r(e)):t||(e.L_.add(2),await Bn(e),e.q_.set("Unknown"))}function qn(r){return r.K_||(r.K_=function(e,n,s){const i=M(e);return i.w_(),new Ug(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Kg.bind(null,r),Ro:$g.bind(null,r),mo:Qg.bind(null,r),d_:Wg.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),Ho(r)?Wo(r):r.q_.set("Unknown")):(await r.K_.stop(),qh(r))})),r.K_}function Te(r){return r.U_||(r.U_=function(e,n,s){const i=M(e);return i.w_(),new qg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Yg.bind(null,r),mo:t_.bind(null,r),f_:Xg.bind(null,r),g_:Zg.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await Un(r)):(await r.U_.stop(),r.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Jo(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jn(r,t){if(dt("AsyncQueue",`${t}: ${r}`),we(r))return new D(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=fr(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new _n(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new _n;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.W_=new rt(O.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):F():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Dn{constructor(t,e,n,s,i,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Dn(t,e,_n.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ur(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class n_{constructor(){this.queries=Vc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=M(e),i=s.queries;s.queries=Vc(),i.forEach((a,u)=>{for(const c of u.j_)c.onError(n)})})(this,new D(S.ABORTED,"Firestore shutting down"))}}function Vc(){return new Ae(r=>ql(r),Ur)}async function Yo(r,t){const e=M(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.H_()&&t.J_()&&(n=2):(i=new e_,n=t.J_()?0:1);try{switch(n){case 0:i.z_=await e.onListen(s,!0);break;case 1:i.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=jn(a,`Initialization of query '${dn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&Zo(e)}async function Xo(r,t){const e=M(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.j_.indexOf(t);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function r_(r,t){const e=M(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.j_)u.X_(s)&&(n=!0);a.z_=s}}n&&Zo(e)}function s_(r,t,e){const n=M(r),s=n.queries.get(t);if(s)for(const i of s.j_)i.onError(e);n.queries.delete(t)}function Zo(r){r.Y_.forEach(t=>{t.next()})}var go,Dc;(Dc=go||(go={})).ea="default",Dc.Cache="cache";class ta{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Dn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Dn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==go.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,e){this.aa=t,this.byteLength=e}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t){this.serializer=t}Es(t){return Qt(this.serializer,t)}ds(t){return t.metadata.exists?hh(this.serializer,t.document,!1):it.newNoDocument(this.Es(t.metadata.name),this.As(t.metadata.readTime))}As(t){return ft(t)}}class o_{constructor(t,e,n){this.ca=t,this.localStore=e,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Kh(t)}la(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.aa.namedQuery)this.queries.push(t.aa.namedQuery);else if(t.aa.documentMetadata){this.documents.push({metadata:t.aa.documentMetadata}),t.aa.documentMetadata.exists||++e;const n=K.fromString(t.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.aa.document&&(this.documents[this.documents.length-1].document=t.aa.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ha(t){const e=new Map,n=new Cc(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.Es(s.metadata.name);for(const a of s.metadata.queries){const u=(e.get(a)||z()).add(i);e.set(a,u)}}return e}async complete(){const t=await kg(this.localStore,new Cc(this.serializer),this.documents,this.ca.id),e=this.ha(this.documents);for(const n of this.queries)await Og(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:t}}}function Kh(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t){this.key=t}}class Qh{constructor(t){this.key=t}}class Wh{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=z(),this.mutatedKeys=z(),this.Aa=Gl(t),this.Ra=new _n(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Pc,s=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,p)=>{const y=s.get(f),R=qr(this.query,p)?p:null,C=!!y&&this.mutatedKeys.has(y.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;y&&R?y.data.isEqual(R.data)?C!==N&&(n.track({type:3,doc:R}),x=!0):this.ga(y,R)||(n.track({type:2,doc:R}),x=!0,(c&&this.Aa(R,c)>0||d&&this.Aa(R,d)<0)&&(u=!0)):!y&&R?(n.track({type:0,doc:R}),x=!0):y&&!R&&(n.track({type:1,doc:y}),x=!0,(c||d)&&(u=!0)),x&&(R?(a=a.add(R),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:a,fa:n,ns:u,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,p)=>function(R,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return N(R)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),s=s!=null&&s;const u=e&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,a.length!==0||d?{snapshot:new Dn(this.query,t.Ra,i,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=z(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new Qh(n))}),this.da.forEach(n=>{t.has(n)||e.push(new $h(n))}),e}ba(t){this.Ta=t.Ts,this.da=z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Dn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class a_{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class u_{constructor(t){this.key=t,this.va=!1}}class c_{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ae(u=>ql(u),Ur),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(O.comparator),this.Na=new Map,this.La=new qo,this.Ba={},this.ka=new Map,this.qa=We.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function l_(r,t,e=!0){const n=Zs(r);let s;const i=n.Fa.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Hh(n,t,e,!0),s}async function h_(r,t){const e=Zs(r);await Hh(e,t,!0,!1)}async function Hh(r,t,e,n){const s=await Sn(r.localStore,kt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await ea(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Xs(r.remoteStore,s),u}async function ea(r,t,e,n,s){r.Ka=(p,y,R)=>async function(N,x,q,G){let U=x.view.ma(q);U.ns&&(U=await Bs(N.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,U)));const Y=G&&G.targetChanges.get(x.targetId),nt=G&&G.targetMismatches.get(x.targetId)!=null,H=x.view.applyChanges(U,N.isPrimaryClient,Y,nt);return _o(N,x.targetId,H.wa),H.snapshot}(r,p,y,R);const i=await Bs(r.localStore,t,!0),a=new Wh(t,i.Ts),u=a.ma(i.documents),c=zr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,c);_o(r,e,d.wa);const f=new a_(t,e,a);return r.Fa.set(t,f),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function d_(r,t,e){const n=M(r),s=n.Fa.get(t),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(a=>!Ur(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pn(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Vn(n.remoteStore,s.targetId),Cn(n,s.targetId)}).catch(ve)):(Cn(n,s.targetId),await Pn(n.localStore,s.targetId,!0))}async function f_(r,t){const e=M(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Vn(e.remoteStore,n.targetId))}async function m_(r,t,e){const n=ia(r);try{const s=await function(a,u){const c=M(a),d=ct.now(),f=u.reduce((R,C)=>R.add(C.key),z());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Bt(),N=z();return c.cs.getEntries(R,f).next(x=>{C=x,C.forEach((q,G)=>{G.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,C)).next(x=>{p=x;const q=[];for(const G of u){const U=Lp(G,p.get(G.key).overlayedDocument);U!=null&&q.push(new se(G.key,U,xl(U.value.mapValue),at.exists(!0)))}return c.mutationQueue.addMutationBatch(R,d,q,u)}).next(x=>{y=x;const q=x.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(R,x.batchId,q)})}).then(()=>({batchId:y.batchId,changes:Kl(p)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new rt(j)),d=d.insert(u,c),a.Ba[a.currentUser.toKey()]=d}(n,s.batchId,e),await ie(n,s.changes),await Un(n.remoteStore)}catch(s){const i=jn(s,"Failed to persist write");e.reject(i)}}async function Jh(r,t){const e=M(r);try{const n=await xg(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Na.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?L(a.va):s.removedDocuments.size>0&&(L(a.va),a.va=!1))}),await ie(e,n,t)}catch(n){await ve(n)}}function xc(r,t,e){const n=M(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((i,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=M(a);c.onlineState=u;let d=!1;c.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(u)&&(d=!0)}),d&&Zo(c)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function p_(r,t,e){const n=M(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),i=s&&s.key;if(i){let a=new rt(O.comparator);a=a.insert(i,it.newNoDocument(i,B.min()));const u=z().add(i),c=new Gr(B.min(),new Map,new rt(j),a,u);await Jh(n,c),n.Oa=n.Oa.remove(i),n.Na.delete(t),sa(n)}else await Pn(n.localStore,t,!1).then(()=>Cn(n,t,e)).catch(ve)}async function g_(r,t){const e=M(r),n=t.batch.batchId;try{const s=await Cg(e.localStore,t);ra(e,n,null),na(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ie(e,s)}catch(s){await ve(s)}}async function __(r,t,e){const n=M(r);try{const s=await function(a,u){const c=M(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,u).next(p=>(L(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(n.localStore,t);ra(n,t,e),na(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ie(n,s)}catch(s){await ve(s)}}async function y_(r,t){const e=M(r);be(e.remoteStore)||V("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=M(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(n===-1)return void t.resolve();const s=e.ka.get(n)||[];s.push(t),e.ka.set(n,s)}catch(n){const s=jn(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function na(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function ra(r,t,e){const n=M(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function Cn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||Yh(r,n)})}function Yh(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(Vn(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),sa(r))}function _o(r,t,e){for(const n of e)n instanceof $h?(r.La.addReference(n.key,t),I_(r,n)):n instanceof Qh?(V("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||Yh(r,n.key)):F()}function I_(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(V("SyncEngine","New document in limbo: "+e),r.xa.add(n),sa(r))}function sa(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new O(K.fromString(t)),n=r.qa.next();r.Na.set(n,new u_(e)),r.Oa=r.Oa.insert(e,n),Xs(r.remoteStore,new Zt(kt(Mn(e.path)),n,"TargetPurposeLimboResolution",Ft.oe))}}async function ie(r,t,e){const n=M(r),s=[],i=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,c)=>{a.push(n.Ka(c,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){s.push(d);const p=zo.Wi(c.targetId,d);i.push(p)}}))}),await Promise.all(a),n.Ca.d_(s),await async function(c,d){const f=M(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>A.forEach(d,y=>A.forEach(y.$i,R=>f.persistence.referenceDelegate.addReference(p,y.targetId,R)).next(()=>A.forEach(y.Ui,R=>f.persistence.referenceDelegate.removeReference(p,y.targetId,R)))))}catch(p){if(!we(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const y=p.targetId;if(!p.fromCache){const R=f.os.get(y),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(y,N)}}}(n.localStore,i))}async function E_(r,t){const e=M(r);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const n=await Ch(e.localStore,t);e.currentUser=t,function(i,a){i.ka.forEach(u=>{u.forEach(c=>{c.reject(new D(S.CANCELLED,a))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ie(e,n.hs)}}function T_(r,t){const e=M(r),n=e.Na.get(t);if(n&&n.va)return z().add(n.key);{let s=z();const i=e.Ma.get(t);if(!i)return s;for(const a of i){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}async function v_(r,t){const e=M(r),n=await Bs(e.localStore,t.query,!0),s=t.view.ba(n);return e.isPrimaryClient&&_o(e,t.targetId,s.wa),s}async function w_(r,t){const e=M(r);return Oh(e.localStore,t).then(n=>ie(e,n))}async function A_(r,t,e,n){const s=M(r),i=await function(u,c){const d=M(u),f=M(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,c).next(y=>y?d.localDocuments.getDocuments(p,y):A.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await Un(s.remoteStore):e==="acknowledged"||e==="rejected"?(ra(s,t,n||null),na(s,t),function(u,c){M(M(u).mutationQueue).On(c)}(s.localStore,t)):F(),await ie(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+t)}async function b_(r,t){const e=M(r);if(Zs(e),ia(e),t===!0&&e.Qa!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await Nc(e,n.toArray());e.Qa=!0,await po(e.remoteStore,!0);for(const i of s)Xs(e.remoteStore,i)}else if(t===!1&&e.Qa!==!1){const n=[];let s=Promise.resolve();e.Ma.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(Cn(e,a),Pn(e.localStore,a,!0))),Vn(e.remoteStore,a)}),await s,await Nc(e,n),function(a){const u=M(a);u.Na.forEach((c,d)=>{Vn(u.remoteStore,d)}),u.La.pr(),u.Na=new Map,u.Oa=new rt(O.comparator)}(e),e.Qa=!1,await po(e.remoteStore,!1)}}async function Nc(r,t,e){const n=M(r),s=[],i=[];for(const a of t){let u;const c=n.Ma.get(a);if(c&&c.length!==0){u=await Sn(n.localStore,kt(c[0]));for(const d of c){const f=n.Fa.get(d),p=await v_(n,f);p.snapshot&&i.push(p.snapshot)}}else{const d=await kh(n.localStore,a);u=await Sn(n.localStore,d),await ea(n,Xh(d),a,!1,u.resumeToken)}s.push(u)}return n.Ca.d_(i),s}function Xh(r){return Ul(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function R_(r){return function(e){return M(M(e).persistence).Qi()}(M(r).localStore)}async function S_(r,t,e,n){const s=M(r);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Oh(s.localStore,jl(i[0])),u=Gr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",ht.EMPTY_BYTE_STRING);await ie(s,a,u);break}case"rejected":await Pn(s.localStore,t,!0),Cn(s,t,n);break;default:F()}}async function P_(r,t,e){const n=Zs(r);if(n.Qa){for(const s of t){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await kh(n.localStore,s),a=await Sn(n.localStore,i);await ea(n,Xh(i),a.targetId,!1,a.resumeToken),Xs(n.remoteStore,a)}for(const s of e)n.Ma.has(s)&&await Pn(n.localStore,s,!1).then(()=>{Vn(n.remoteStore,s),Cn(n,s)}).catch(ve)}}function Zs(r){const t=M(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=T_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=p_.bind(null,t),t.Ca.d_=r_.bind(null,t.eventManager),t.Ca.$a=s_.bind(null,t.eventManager),t}function ia(r){const t=M(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=g_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=__.bind(null,t),t}function V_(r,t,e){const n=M(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(R,C){const N=M(R),x=ft(C.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",q=>N.Gr.getBundleMetadata(q,C.id)).then(q=>!!q&&q.createTime.compareTo(x)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(Kh(c));const d=new o_(c,i.localStore,a.serializer);let f=await a.Ua();for(;f;){const y=await d.la(f);y&&u._updateProgress(y),f=await a.Ua()}const p=await d.complete();return await ie(i,p.Ia,void 0),await function(R,C){const N=M(R);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.Gr.saveBundleMetadata(x,C))}(i.localStore,c),u._completeWith(p.progress),Promise.resolve(p.Pa)}catch(c){return ee("SyncEngine",`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,t,e).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Kr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Dh(this.persistence,new Vh,t.initialUser,this.serializer)}Ga(t){return new Ph(Ys.Zr,this.serializer)}Wa(t){return new Fh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Or.provider={build:()=>new Or};class Zh extends Or{constructor(t,e,n){super(),this.Ja=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ja.initialize(this,t),await ia(this.Ja.syncEngine),await Un(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(t){return Dh(this.persistence,new Vh,t.initialUser,this.serializer)}ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new fg(n,t.asyncQueue,e)}Ha(t,e){const n=new Hm(e,this.persistence);return new Wm(t.asyncQueue,n)}Ga(t){const e=Go(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new jo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Lh(),Ps(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(t){return new Fh}}class D_ extends Zh{constructor(t,e){super(t,e,!1),this.Ja=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Ja.syncEngine;this.sharedClientState instanceof zi&&(this.sharedClientState.syncEngine={no:A_.bind(null,e),ro:S_.bind(null,e),io:P_.bind(null,e),Qi:R_.bind(null,e),eo:w_.bind(null,e)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await b_(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(t){const e=Lh();if(!zi.D(e))throw new D(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Go(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new zi(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Mr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>xc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=E_.bind(null,this.syncEngine),await po(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new n_}()}createDatastore(t){const e=Kr(t.databaseInfo.databaseId),n=function(i){return new Bg(i)}(t.databaseInfo);return function(i,a,u,c){return new jg(i,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new zg(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>xc(this.syncEngine,e,0),function(){return Rc.D()?new Rc:new Mg}())}createSyncEngine(t,e){return function(s,i,a,u,c,d,f){const p=new c_(s,i,a,u,c,d);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=M(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Bn(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Mr.provider={build:()=>new Mr};function kc(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):dt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t,e){this.Xa=t,this.serializer=e,this.metadata=new At,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(n=>{n&&n.ua()?this.metadata.resolve(n.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.aa)}`))},n=>this.metadata.reject(n))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const t=await this.nu();if(t===null)return null;const e=this.eu.decode(t),n=Number(e);isNaN(n)&&this.ru(`length string (${e}) is not valid number`);const s=await this.iu(n);return new i_(JSON.parse(s),t.length+n)}su(){return this.buffer.findIndex(t=>t===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const t=this.su();t<0&&this.ru("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async iu(t){for(;this.buffer.length<t;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const e=this.eu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}ru(t){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${t}`)}async ou(){const t=await this.Xa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const a=M(s),u={documents:i.map(p=>Nr(a.serializer,p))},c=await a.Lo("BatchGetDocuments",a.serializer.databaseId,K.emptyPath(),u,i.length),d=new Map;c.forEach(p=>{const y=Qp(a.serializer,p);d.set(y.key.toString(),y)});const f=[];return i.forEach(p=>{const y=d.get(p.toString());L(!!y),f.push(y)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ln(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=O.fromPath(n);this.mutations.push(new xo(s,this.precondition(s)))}),await async function(n,s){const i=M(n),a={writes:s.map(u=>kr(i.serializer,u))};await i.Mo("Commit",i.serializer.databaseId,K.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw F();e=B.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new D(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(B.min())?at.exists(!1):at.updateTime(e):at.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(B.min()))throw new D(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return at.updateTime(e)}return at.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this._u=n.maxAttempts,this.t_=new $o(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new x_(this.datastore),e=this.cu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.lu(s)}))}).catch(n=>{this.lu(n)})})}cu(t){try{const e=this.updateFunction(t);return!Lr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!eh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=jn(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function $i(r,t){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Ch(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Oc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await oa(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Sc(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Sc(t.remoteStore,s)),r._onlineComponents=t}async function oa(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await $i(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ee("Error using user provided cache. Falling back to memory cache: "+e),await $i(r,new Or)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await $i(r,new Or);return r._offlineComponents}async function ei(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Oc(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Oc(r,new Mr))),r._onlineComponents}function td(r){return oa(r).then(t=>t.persistence)}function aa(r){return oa(r).then(t=>t.localStore)}function ed(r){return ei(r).then(t=>t.remoteStore)}function ua(r){return ei(r).then(t=>t.syncEngine)}function O_(r){return ei(r).then(t=>t.datastore)}async function xn(r){const t=await ei(r),e=t.eventManager;return e.onListen=l_.bind(null,t.syncEngine),e.onUnlisten=d_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=h_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=f_.bind(null,t.syncEngine),e}function M_(r){return r.asyncQueue.enqueue(async()=>{const t=await td(r),e=await ed(r);return t.setNetworkEnabled(!0),function(s){const i=M(s);return i.L_.delete(0),$r(i)}(e)})}function F_(r){return r.asyncQueue.enqueue(async()=>{const t=await td(r),e=await ed(r);return t.setNetworkEnabled(!1),async function(s){const i=M(s);i.L_.add(0),await Bn(i),i.q_.set("Offline")}(e)})}function L_(r,t){const e=new At;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(d,f){const p=M(d);return p.persistence.runTransaction("read document","readonly",y=>p.localDocuments.getDocument(y,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new D(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=jn(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await aa(r),t,e)),e.promise}function nd(r,t,e={}){const n=new At;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,d){const f=new ti({next:y=>{f.Za(),a.enqueueAndForget(()=>Xo(i,p));const R=y.docs.has(u);!R&&y.fromCache?d.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&y.fromCache&&c&&c.source==="server"?d.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),p=new ta(Mn(u.path),f,{includeMetadataChanges:!0,_a:!0});return Yo(i,p)}(await xn(r),r.asyncQueue,t,e,n)),n.promise}function B_(r,t){const e=new At;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await Bs(s,i,!0),c=new Wh(i,u.Ts),d=c.ma(u.documents),f=c.applyChanges(d,!1);a.resolve(f.snapshot)}catch(u){const c=jn(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await aa(r),t,e)),e.promise}function rd(r,t,e={}){const n=new At;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,d){const f=new ti({next:y=>{f.Za(),a.enqueueAndForget(()=>Xo(i,p)),y.fromCache&&c.source==="server"?d.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),p=new ta(u,f,{includeMetadataChanges:!0,_a:!0});return Yo(i,p)}(await xn(r),r.asyncQueue,t,e,n)),n.promise}function U_(r,t){const e=new ti(t);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).Y_.add(i),i.next()}(await xn(r),e)),()=>{e.Za(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).Y_.delete(i)}(await xn(r),e))}}function q_(r,t,e,n){const s=function(a,u){let c;return c=typeof a=="string"?rh().encode(a):a,function(f,p){return new C_(f,p)}(function(f,p){if(f instanceof Uint8Array)return kc(f,p);if(f instanceof ArrayBuffer)return kc(new Uint8Array(f),p);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(e,Kr(t));r.asyncQueue.enqueueAndForget(async()=>{V_(await ua(r),s,n)})}function j_(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.Gr.getNamedQuery(a,s))}(await aa(r),t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(r,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function G_(r,t,e,n){if(t===!0&&n===!0)throw new D(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Fc(r){if(!O.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lc(r){if(O.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ni(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F()}function X(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ni(r);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function id(r,t){if(t<=0)throw new D(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}G_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sd((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fm;switch(n.type){case"firstParty":return new qm(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Mc.get(e);n&&(V("ComponentProvider","Removing Datastore"),Mc.delete(e),n.terminate())}(this),Promise.resolve()}}function Ty(r,t,e,n={}){var s;const i=(r=X(r,Qr))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let u,c;if(typeof n.mockUserToken=="string")u=n.mockUserToken,c=It.MOCK_USER;else{u=ff(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(d)}r._authCredentials=new Lm(new pl(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new bt(this.firestore,t,this._query)}}let gt=class od{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new od(this.firestore,t,this._key)}};class Wt extends bt{constructor(t,e,n){super(t,e,Mn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new O(t))}withConverter(t){return new Wt(this.firestore,t,this._path)}}function vy(r,t,...e){if(r=Et(r),ca("collection","path",t),r instanceof Qr){const n=K.fromString(t,...e);return Lc(n),new Wt(r,null,n)}{if(!(r instanceof gt||r instanceof Wt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Lc(n),new Wt(r.firestore,null,n)}}function wy(r,t){if(r=X(r,Qr),ca("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new bt(r,null,function(n){return new re(K.emptyPath(),n)}(t))}function z_(r,t,...e){if(r=Et(r),arguments.length===1&&(t=gl.newId()),ca("doc","path",t),r instanceof Qr){const n=K.fromString(t,...e);return Fc(n),new gt(r,null,new O(n))}{if(!(r instanceof gt||r instanceof Wt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Fc(n),new gt(r.firestore,r instanceof Wt?r.converter:null,new O(n))}}function Ay(r,t){return r=Et(r),t=Et(t),(r instanceof gt||r instanceof Wt)&&(t instanceof gt||t instanceof Wt)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function K_(r,t){return r=Et(r),t=Et(t),r instanceof bt&&t instanceof bt&&r.firestore===t.firestore&&Ur(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $o(this,"async_queue_retry"),this.Vu=()=>{const n=Ps();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new At;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!we(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw dt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Jo.createAndSchedule(this,t,e,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function yo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class $_{constructor(){this._progressObserver={},this._taskCompletionResolver=new At,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=-1;class mt extends Qr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Uc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Uc(t),this._firestoreClient=void 0,await t}}}function Ot(r){if(r._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ad(r),r._firestoreClient}function ad(r){var t,e,n;const s=r._freezeSettings(),i=function(u,c,d,f){return new gp(u,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sd(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new k_(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function Ry(r,t){ee("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return ud(r,Mr.provider,{build:n=>new Zh(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function Sy(r){ee("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();ud(r,Mr.provider,{build:e=>new D_(e,t.cacheSizeBytes)})}function ud(r,t,e){if((r=X(r,mt))._firestoreClient||r._terminated)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new D(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},ad(r)}function Py(r){if(r._initialized&&!r._terminated)throw new D(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new At;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!$t.D())return Promise.resolve();const s=n+"main";await $t.delete(s)}(Go(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Vy(r){return function(e){const n=new At;return e.asyncQueue.enqueueAndForget(async()=>y_(await ua(e),n)),n.promise}(Ot(r=X(r,mt)))}function Dy(r){return M_(Ot(r=X(r,mt)))}function Cy(r){return F_(Ot(r=X(r,mt)))}function xy(r,t){const e=Ot(r=X(r,mt)),n=new $_;return q_(e,r._databaseId,t,n),n}function Ny(r,t){return j_(Ot(r=X(r,mt)),t).then(e=>e?new bt(r,null,e.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this._byteString=t}static fromBase64String(t){try{return new He(ht.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new He(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=class{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=/^__.*__$/;class W_{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fn(t,this.data,e,this.fieldTransforms)}}class cd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ld(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ri{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ri(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Gs(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ld(this.Cu)&&Q_.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class H_{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Kr(t)}Qu(t,e,n,s=!1){return new ri({Cu:t,methodName:e,qu:n,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ze(r){const t=r._freezeSettings(),e=Kr(r._databaseId);return new H_(r._databaseId,!!t.ignoreUndefinedProperties,e)}function si(r,t,e,n,s,i={}){const a=r.Qu(i.merge||i.mergeFields?2:0,t,e,s);ya("Data must be an object, but it was:",a,n);const u=fd(n,a);let c,d;if(i.merge)c=new Lt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=Io(t,p,e);if(!a.contains(y))throw new D(S.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);pd(f,y)||f.push(y)}c=new Lt(f),d=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,d=a.fieldTransforms;return new W_(new wt(u),c,d)}class Wr extends Xe{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Wr}}function hd(r,t,e){return new ri({Cu:3,qu:t.settings.qu,methodName:r._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class da extends Xe{_toFieldTransform(t){return new jr(t.path,new An)}isEqual(t){return t instanceof da}}class fa extends Xe{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=hd(this,t,!0),n=this.Ku.map(i=>tn(i,e)),s=new ze(n);return new jr(t.path,s)}isEqual(t){return t instanceof fa&&Tr(this.Ku,t.Ku)}}class ma extends Xe{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=hd(this,t,!0),n=this.Ku.map(i=>tn(i,e)),s=new Ke(n);return new jr(t.path,s)}isEqual(t){return t instanceof ma&&Tr(this.Ku,t.Ku)}}class pa extends Xe{constructor(t,e){super(t),this.$u=e}_toFieldTransform(t){const e=new bn(t.serializer,Wl(t.serializer,this.$u));return new jr(t.path,e)}isEqual(t){return t instanceof pa&&this.$u===t.$u}}function ga(r,t,e,n){const s=r.Qu(1,t,e);ya("Data must be an object, but it was:",s,n);const i=[],a=wt.empty();Ye(n,(c,d)=>{const f=Ia(t,c,e);d=Et(d);const p=s.Nu(f);if(d instanceof Wr)i.push(f);else{const y=tn(d,p);y!=null&&(i.push(f),a.set(f,y))}});const u=new Lt(i);return new cd(a,u,s.fieldTransforms)}function _a(r,t,e,n,s,i){const a=r.Qu(1,t,e),u=[Io(t,n,e)],c=[s];if(i.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)u.push(Io(t,i[y])),c.push(i[y+1]);const d=[],f=wt.empty();for(let y=u.length-1;y>=0;--y)if(!pd(d,u[y])){const R=u[y];let C=c[y];C=Et(C);const N=a.Nu(R);if(C instanceof Wr)d.push(R);else{const x=tn(C,N);x!=null&&(d.push(R),f.set(R,x))}}const p=new Lt(d);return new cd(f,p,a.fieldTransforms)}function dd(r,t,e,n=!1){return tn(e,r.Qu(n?4:3,t))}function tn(r,t){if(md(r=Et(r)))return ya("Unsupported field value:",t,r),fd(r,t);if(r instanceof Xe)return function(n,s){if(!ld(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=tn(u,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:Rn(s.serializer,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rn(s.serializer,i)}}if(n instanceof la)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof He)return{bytesValue:oh(s.serializer,n._byteString)};if(n instanceof gt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ha)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return Co(u.serializer,c)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${ni(n)}`)}(r,t)}function fd(r,t){const e={};return Pl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ye(r,(n,s)=>{const i=tn(s,t.Mu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function md(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ct||r instanceof la||r instanceof He||r instanceof gt||r instanceof Xe||r instanceof ha)}function ya(r,t,e){if(!md(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=ni(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Io(r,t,e){if((t=Et(t))instanceof Gn)return t._internalPath;if(typeof t=="string")return Ia(r,t);throw Gs("Field path arguments must be of type string or ",r,!1,void 0,e)}const J_=new RegExp("[~\\*/\\[\\]]");function Ia(r,t,e){if(t.search(J_)>=0)throw Gs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Gn(...t.split("."))._internalPath}catch{throw Gs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Gs(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new D(S.INVALID_ARGUMENT,u+r+c)}function pd(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Y_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ii("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Y_ extends Fr{data(){return super.data()}}function ii(r,t){return typeof t=="string"?Ia(r,t):t instanceof Gn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ea{}class Hr extends Ea{}function Oy(r,t,...e){let n=[];t instanceof Ea&&n.push(t),n=n.concat(e),function(i){const a=i.filter(c=>c instanceof Ta).length,u=i.filter(c=>c instanceof oi).length;if(a>1||a>0&&u>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class oi extends Hr{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new oi(t,e,n)}_apply(t){const e=this._parse(t);return yd(t._query,e),new bt(t.firestore,t.converter,io(t._query,e))}_parse(t){const e=Ze(t.firestore);return function(i,a,u,c,d,f,p){let y;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){jc(p,f);const R=[];for(const C of p)R.push(qc(c,i,C));y={arrayValue:{values:R}}}else y=qc(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||jc(p,f),y=dd(u,a,p,f==="in"||f==="not-in");return $.create(d,f,y)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function My(r,t,e){const n=t,s=ii("where",r);return oi._create(s,n,e)}class Ta extends Ea{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ta(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)yd(a,c),a=io(a,c)}(t._query,e),new bt(t.firestore,t.converter,io(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class va extends Hr{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new va(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xr(i,a)}(t._query,this._field,this._direction);return new bt(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new re(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Fy(r,t="asc"){const e=t,n=ii("orderBy",r);return va._create(n,e)}class ai extends Hr{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new ai(t,e,n)}_apply(t){return new bt(t.firestore,t.converter,Os(t._query,this._limit,this._limitType))}}function Ly(r){return id("limit",r),ai._create("limit",r,"F")}function By(r){return id("limitToLast",r),ai._create("limitToLast",r,"L")}class ui extends Hr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ui(t,e,n)}_apply(t){const e=_d(t,this.type,this._docOrFields,this._inclusive);return new bt(t.firestore,t.converter,function(s,i){return new re(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,e))}}function Uy(...r){return ui._create("startAt",r,!0)}function qy(...r){return ui._create("startAfter",r,!1)}class ci extends Hr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ci(t,e,n)}_apply(t){const e=_d(t,this.type,this._docOrFields,this._inclusive);return new bt(t.firestore,t.converter,function(s,i){return new re(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(t._query,e))}}function jy(...r){return ci._create("endBefore",r,!1)}function Gy(...r){return ci._create("endAt",r,!0)}function _d(r,t,e,n){if(e[0]=Et(e[0]),e[0]instanceof Fr)return function(i,a,u,c,d){if(!c)throw new D(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const p of gn(i))if(p.field.isKeyField())f.push(je(a,c.key));else{const y=c.data.field(p.field);if(Ks(y))throw new D(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(y===null){const R=p.field.canonicalString();throw new D(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}f.push(y)}return new Ee(f,d)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=Ze(r.firestore);return function(a,u,c,d,f,p){const y=a.explicitOrderBy;if(f.length>y.length)throw new D(S.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let C=0;C<f.length;C++){const N=f[C];if(y[C].field.isKeyField()){if(typeof N!="string")throw new D(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof N}`);if(!Vo(a)&&N.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${N}' contains a slash.`);const x=a.path.child(K.fromString(N));if(!O.isDocumentKey(x))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const q=new O(x);R.push(je(u,q))}else{const x=dd(c,d,N);R.push(x)}}return new Ee(R,p)}(r._query,r.firestore._databaseId,s,t,e,n)}}function qc(r,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vo(t)&&e.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(K.fromString(e));if(!O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return je(r,new O(n))}if(e instanceof gt)return je(r,e._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ni(e)}.`)}function jc(r,t){if(!Array.isArray(r)||r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function yd(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Id{convertValue(t,e="none"){switch(qe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ye(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>ot(a.doubleValue));return new ha(i)}convertGeoPoint(t){return new la(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=So(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vr(t));default:return null}}convertTimestamp(t){const e=ne(t);return new ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=K.fromString(t);L(_h(n));const s=new Ue(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(e)||dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class X_ extends Id{constructor(t){super(),this.firestore=t}convertBytes(t){return new He(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Nn extends Fr{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ii("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Vs extends Nn{data(t={}){return super.data(t)}}class kn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fe(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Vs(this._firestore,this._userDataWriter,n.key,n,new Fe(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new Vs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Fe(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new Vs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Fe(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Z_(u.type),doc:c,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Z_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function zy(r,t){return r instanceof Nn&&t instanceof Nn?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof kn&&t instanceof kn&&r._firestore===t._firestore&&K_(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(r){r=X(r,gt);const t=X(r.firestore,mt);return nd(Ot(t),r._key).then(e=>wa(t,r,e))}class en extends Id{constructor(t){super(),this.firestore=t}convertBytes(t){return new He(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}function $y(r){r=X(r,gt);const t=X(r.firestore,mt),e=Ot(t),n=new en(t);return L_(e,r._key).then(s=>new Nn(t,n,r._key,s,new Fe(s!==null&&s.hasLocalMutations,!0),r.converter))}function Qy(r){r=X(r,gt);const t=X(r.firestore,mt);return nd(Ot(t),r._key,{source:"server"}).then(e=>wa(t,r,e))}function Wy(r){r=X(r,bt);const t=X(r.firestore,mt),e=Ot(t),n=new en(t);return gd(r._query),rd(e,r._query).then(s=>new kn(t,n,r,s))}function Hy(r){r=X(r,bt);const t=X(r.firestore,mt),e=Ot(t),n=new en(t);return B_(e,r._query).then(s=>new kn(t,n,r,s))}function Jy(r){r=X(r,bt);const t=X(r.firestore,mt),e=Ot(t),n=new en(t);return rd(e,r._query,{source:"server"}).then(s=>new kn(t,n,r,s))}function Yy(r,t,e){r=X(r,gt);const n=X(r.firestore,mt),s=li(r.converter,t,e);return hi(n,[si(Ze(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,at.none())])}function Xy(r,t,e,...n){r=X(r,gt);const s=X(r.firestore,mt),i=Ze(s);let a;return a=typeof(t=Et(t))=="string"||t instanceof Gn?_a(i,"updateDoc",r._key,t,e,n):ga(i,"updateDoc",r._key,t),hi(s,[a.toMutation(r._key,at.exists(!0))])}function Zy(r){return hi(X(r.firestore,mt),[new Ln(r._key,at.none())])}function tI(r,t){const e=X(r.firestore,mt),n=z_(r),s=li(r.converter,t);return hi(e,[si(Ze(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,at.exists(!1))]).then(()=>n)}function eI(r,...t){var e,n,s;r=Et(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||yo(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(yo(t[a])){const p=t[a];t[a]=(e=p.next)===null||e===void 0?void 0:e.bind(p),t[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),t[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,d,f;if(r instanceof gt)d=X(r.firestore,mt),f=Mn(r._key.path),c={next:p=>{t[a]&&t[a](wa(d,r,p))},error:t[a+1],complete:t[a+2]};else{const p=X(r,bt);d=X(p.firestore,mt),f=p._query;const y=new en(d);c={next:R=>{t[a]&&t[a](new kn(d,y,p,R))},error:t[a+1],complete:t[a+2]},gd(r._query)}return function(y,R,C,N){const x=new ti(N),q=new ta(R,x,C);return y.asyncQueue.enqueueAndForget(async()=>Yo(await xn(y),q)),()=>{x.Za(),y.asyncQueue.enqueueAndForget(async()=>Xo(await xn(y),q))}}(Ot(d),f,u,c)}function nI(r,t){return U_(Ot(r=X(r,mt)),yo(t)?t:{next:t})}function hi(r,t){return function(n,s){const i=new At;return n.asyncQueue.enqueueAndForget(async()=>m_(await ua(n),s,i)),i.promise}(Ot(r),t)}function wa(r,t,e){const n=e.docs.get(t._key),s=new en(r);return new Nn(r,s,t._key,n,new Fe(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Ze(t)}set(t,e,n){this._verifyNotCommitted();const s=fe(t,this._firestore),i=li(s.converter,e,n),a=si(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,at.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=fe(t,this._firestore);let a;return a=typeof(e=Et(e))=="string"||e instanceof Gn?_a(this._dataReader,"WriteBatch.update",i._key,e,n,s):ga(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,at.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=fe(t,this._firestore);return this._mutations=this._mutations.concat(new Ln(e._key,at.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fe(r,t){if((r=Et(r)).firestore!==t)throw new D(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ze(e)}get(e){const n=fe(e,this._firestore),s=new X_(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return F();const a=i[0];if(a.isFoundDocument())return new Fr(this._firestore,s,a.key,a,n.converter);if(a.isNoDocument())return new Fr(this._firestore,s,n._key,null,n.converter);throw F()})}set(e,n,s){const i=fe(e,this._firestore),a=li(i.converter,n,s),u=si(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,s);return this._transaction.set(i._key,u),this}update(e,n,s,...i){const a=fe(e,this._firestore);let u;return u=typeof(n=Et(n))=="string"||n instanceof Gn?_a(this._dataReader,"Transaction.update",a._key,n,s,i):ga(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,u),this}delete(e){const n=fe(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=fe(t,this._firestore),n=new en(this._firestore);return super.get(t).then(s=>new Nn(this._firestore,n,e._key,s._document,new Fe(!1,!1),e.converter))}}function iI(r,t,e){r=X(r,mt);const n=Object.assign(Object.assign({},ty),e);return function(i){if(i.maxAttempts<1)throw new D(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new At;return i.asyncQueue.enqueueAndForget(async()=>{const d=await O_(i);new N_(i.asyncQueue,d,u,a,c).au()}),c.promise}(Ot(r),s=>t(new ey(r,s)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){return new Wr("deleteField")}function aI(){return new da("serverTimestamp")}function uI(...r){return new fa("arrayUnion",r)}function cI(...r){return new ma("arrayRemove",r)}function lI(r){return new pa("increment",r)}(function(t,e=!0){(function(s){On=s})(sl),Ar(new vr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new mt(new Bm(n.getProvider("auth-internal")),new Gm(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Le(Nu,"4.7.3",t),Le(Nu,"4.7.3","esm2017")})();function hI(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(e[n[s]]=r[n[s]]);return e}export{Xy as $,Fy as A,Ly as B,vr as C,wr as D,Hc as E,Gn as F,la as G,By as H,Uy as I,qy as J,jy as K,Xc as L,Gy as M,K_ as N,Hy as O,Jy as P,Wy as Q,kn as R,sl as S,ct as T,eI as U,D as V,gt as W,O as X,vy as Y,Yy as Z,Ar as _,uy as a,Zy as a0,$y as a1,Qy as a2,Ky as a3,Nn as a4,He as a5,Ue as a6,ee as a7,Ty as a8,Dy as a9,Q as aA,yn as aB,Je as aC,sf as aD,ly as aE,hy as aF,dy as aG,ay as aH,cy as aI,sy as aJ,mf as aK,Wc as aL,Cy as aa,G_ as ab,Vy as ac,nI as ad,wy as ae,iI as af,Ot as ag,rI as ah,hi as ai,xy as aj,Ny as ak,aI as al,oI as am,Vs as an,Id as ao,X as ap,yy as aq,Ry as ar,Sy as as,Py as at,ny as au,ry as av,oy as aw,iy as ax,Im as ay,hI as az,Ji as b,fy as c,of as d,ol as e,_m as f,uf as g,by as h,il as i,py as j,uI as k,cI as l,my as m,lI as n,Rm as o,ut as p,Et as q,Le as r,Sm as s,z_ as t,tI as u,Ay as v,zy as w,gy as x,Oy as y,My as z};

import{r as u,a as Ji,R as Or}from"./vendor-nf7bT_Uh.js";import{L as Ps,g as Yi,d as an,E as lr,c as As,r as Tr,m as Qi,S as Mt,o as Xi,s as Zi,a as Zn,i as ea,_ as on,D as ln,b as es,C as Zt,e as ta,f as ra,h as na,T as sa,G as ia,j as aa,k as oa,l as la,n as ca,F as ts,p as da,q as F,t as cn,u as ua,v as Rs,w as Os,x as ha,y as st,z as pa,A as ma,B as fa,H as ga,I as xa,J as ba,K as va,M as ya,N as wa,O as _a,P as Na,Q as ka,R as rs,U as Ds,V as cr,W as _r,X as Ia,Y as Ls,Z as ns,$ as ss,a0 as ja,a1 as Ta,a2 as Sa,a3 as Ea,a4 as dn,a5 as un,a6 as Ca,a7 as Pa,a8 as Aa,a9 as Ra,aa as Oa,ab as Da,ac as La,ad as Ma,ae as Fa,af as Ua,ag as $a,ah as Va,ai as Wa,aj as qa,ak as Ba,al as za,am as Ha,an as Ga,ao as Ka,ap as Ja,aq as Ya,ar as Qa,as as Xa,at as Za,au as eo,av as to,aw as kn,ax as Ms,ay as Q,az as In,aA as Fs,aB as ae,aC as ot,aD as ro,aE as Ft,aF as St,aG as Kt,aH as Us,aI as no,aJ as so,aK as $s,aL as hn}from"./firebase-core-DLFksTk0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var Vs={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=u,ao=Symbol.for("react.element"),oo=Symbol.for("react.fragment"),lo=Object.prototype.hasOwnProperty,co=io.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uo={key:!0,ref:!0,__self:!0,__source:!0};function Ws(r,e,t){var n,i={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)lo.call(e,n)&&!uo.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:ao,type:r,key:a,ref:o,props:i,_owner:co.current}}Dr.Fragment=oo;Dr.jsx=Ws;Dr.jsxs=Ws;Vs.exports=Dr;var s=Vs.exports,pn={},is=Ji;pn.createRoot=is.createRoot,pn.hydrateRoot=is.hydrateRoot;/**
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
 */class ho{constructor(e,t){this._delegate=e,this.firebase=t,es(e,new Zt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ta(this._delegate)))}_getService(e,t=ln){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ln){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){es(this._delegate,e)}_addOrOverwriteComponent(e){ra(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const po={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},as=new lr("app-compat","Firebase",po);/**
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
 */function mo(r){const e={},t={__esModule:!0,initializeApp:a,app:i,registerVersion:Tr,setLogLevel:Zi,onLog:Xi,apps:null,SDK_VERSION:Mt,INTERNAL:{registerComponent:c,removeApp:n,useAsService:l,modularAPIs:Qi}};t.default=t,Object.defineProperty(t,"apps",{get:o});function n(h){delete e[h]}function i(h){if(h=h||ln,!Zn(e,h))throw as.create("no-app",{appName:h});return e[h]}i.App=r;function a(h,g={}){const m=ea(h,g);if(Zn(e,m.name))return e[m.name];const y=new r(m,t);return e[m.name]=y,y}function o(){return Object.keys(e).map(h=>e[h])}function c(h){const g=h.name,m=g.replace("-compat","");if(on(h)&&h.type==="PUBLIC"){const y=(L=i())=>{if(typeof L[m]!="function")throw as.create("invalid-app-argument",{appName:g});return L[m]()};h.serviceProps!==void 0&&an(y,h.serviceProps),t[m]=y,r.prototype[m]=function(...L){return this._getService.bind(this,g).apply(this,h.multipleInstances?L:[])}}return h.type==="PUBLIC"?t[m]:null}function l(h,g){return g==="serverAuth"?null:g}return t}/**
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
 */function qs(){const r=mo(ho);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:qs,extendNamespace:e,createSubscribe:As,ErrorFactory:lr,deepExtend:an});function e(t){an(r,t)}return r}const fo=qs();/**
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
 */const os=new Ps("@firebase/app-compat"),go="@firebase/app-compat",xo="0.2.43";/**
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
 */function bo(r){Tr(go,xo,r)}/**
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
 */try{const r=Yi();if(r.firebase!==void 0){os.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&os.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const et=fo;bo();var vo="firebase",yo="10.14.1";/**
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
 */et.registerVersion(vo,yo,"app-compat");const wo="@firebase/firestore-compat",_o="0.3.38";/**
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
 */function jn(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new cr("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function ls(){if(typeof Uint8Array>"u")throw new cr("unimplemented","Uint8Arrays are not available in this environment.")}function cs(){if(!Ya())throw new cr("unimplemented","Blobs are unavailable in Firestore in this environment.")}class er{constructor(e){this._delegate=e}static fromBase64String(e){return cs(),new er(un.fromBase64String(e))}static fromUint8Array(e){return ls(),new er(un.fromUint8Array(e))}toBase64(){return cs(),this._delegate.toBase64()}toUint8Array(){return ls(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function mn(r){return No(r,["next","error","complete"])}function No(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class ko{enableIndexedDbPersistence(e,t){return Qa(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Xa(e._delegate)}clearIndexedDbPersistence(e){return Za(e._delegate)}}class Bs{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ca||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Pa("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Aa(this._delegate,e,t,n)}enableNetwork(){return Ra(this._delegate)}disableNetwork(){return Oa(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Da("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return La(this._delegate)}onSnapshotsInSync(e){return Ma(this._delegate,e)}get app(){if(!this._appCompat)throw new cr("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ot(this,Ls(this._delegate,e))}catch(t){throw be(t,"collection()","Firestore.collection()")}}doc(e){try{return new Pe(this,cn(this._delegate,e))}catch(t){throw be(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xe(this,Fa(this._delegate,e))}catch(t){throw be(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Ua(this._delegate,t=>e(new zs(this,t)))}batch(){return $a(this._delegate),new Hs(new Va(this._delegate,e=>Wa(this._delegate,e)))}loadBundle(e){return qa(this._delegate,e)}namedQuery(e){return Ba(this._delegate,e).then(t=>t?new xe(this,t):null)}}class Lr extends Ka{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(new un(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Pe.forKey(t,this.firestore,null)}}function Io(r){aa(r)}class zs{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Lr(e)}get(e){const t=xt(e);return this._delegate.get(t).then(n=>new tr(this._firestore,new dn(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=xt(e);return n?(jn("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const a=xt(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,n,...i),this}delete(e){const t=xt(e);return this._delegate.delete(t),this}}class Hs{constructor(e){this._delegate=e}set(e,t,n){const i=xt(e);return n?(jn("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const a=xt(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,n,...i),this}delete(e){const t=xt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class wt{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Ga(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new rr(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=wt.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let a=i.get(t);return a||(a=new wt(e,new Lr(e),t),i.set(t,a)),a}}wt.INSTANCES=new WeakMap;class Pe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lr(e)}static forPath(e,t,n){if(e.length%2!==0)throw new cr("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Pe(t,new _r(t._delegate,n,new Ia(e)))}static forKey(e,t,n){return new Pe(t,new _r(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Ot(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ot(this.firestore,Ls(this._delegate,e))}catch(t){throw be(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=F(e),e instanceof _r?Rs(this._delegate,e):!1}set(e,t){t=jn("DocumentReference.set",t);try{return t?ns(this._delegate,e,t):ns(this._delegate,e)}catch(n){throw be(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?ss(this._delegate,e):ss(this._delegate,e,t,...n)}catch(i){throw be(i,"updateDoc()","DocumentReference.update()")}}delete(){return ja(this._delegate)}onSnapshot(...e){const t=Gs(e),n=Ks(e,i=>new tr(this.firestore,new dn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Ds(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Ta(this._delegate):(e==null?void 0:e.source)==="server"?t=Sa(this._delegate):t=Ea(this._delegate),t.then(n=>new tr(this.firestore,new dn(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new Pe(this.firestore,e?this._delegate.withConverter(wt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function be(r,e,t){return r.message=r.message.replace(e,t),r}function Gs(r){for(const e of r)if(typeof e=="object"&&!mn(e))return e;return{}}function Ks(r,e){var t,n;let i;return mn(r[0])?i=r[0]:mn(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:a=>{i.next&&i.next(e(a))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class tr{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Pe(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Os(this._delegate,e._delegate)}}class rr extends tr{data(e){const t=this._delegate.data(e);return this._delegate._converter||ha(t!==void 0),t}}class xe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lr(e)}where(e,t,n){try{return new xe(this.firestore,st(this._delegate,pa(e,t,n)))}catch(i){throw be(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new xe(this.firestore,st(this._delegate,ma(e,t)))}catch(n){throw be(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xe(this.firestore,st(this._delegate,fa(e)))}catch(t){throw be(t,"limit()","Query.limit()")}}limitToLast(e){try{return new xe(this.firestore,st(this._delegate,ga(e)))}catch(t){throw be(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xe(this.firestore,st(this._delegate,xa(...e)))}catch(t){throw be(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xe(this.firestore,st(this._delegate,ba(...e)))}catch(t){throw be(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xe(this.firestore,st(this._delegate,va(...e)))}catch(t){throw be(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xe(this.firestore,st(this._delegate,ya(...e)))}catch(t){throw be(t,"endAt()","Query.endAt()")}}isEqual(e){return wa(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=_a(this._delegate):(e==null?void 0:e.source)==="server"?t=Na(this._delegate):t=ka(this._delegate),t.then(n=>new fn(this.firestore,new rs(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=Gs(e),n=Ks(e,i=>new fn(this.firestore,new rs(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Ds(this._delegate,t,n)}withConverter(e){return new xe(this.firestore,e?this._delegate.withConverter(wt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class jo{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new rr(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class fn{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new xe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new rr(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new jo(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new rr(this._firestore,n))})}isEqual(e){return Os(this._delegate,e._delegate)}}class Ot extends xe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Pe(this.firestore,e):null}doc(e){try{return e===void 0?new Pe(this.firestore,cn(this._delegate)):new Pe(this.firestore,cn(this._delegate,e))}catch(t){throw be(t,"doc()","CollectionReference.doc()")}}add(e){return ua(this._delegate,e).then(t=>new Pe(this.firestore,t))}isEqual(e){return Rs(this._delegate,e._delegate)}withConverter(e){return new Ot(this.firestore,e?this._delegate.withConverter(wt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xt(r){return Ja(r,_r)}/**
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
 */class Tn{constructor(...e){this._delegate=new ts(...e)}static documentId(){return new Tn(da.keyField().canonicalString())}isEqual(e){return e=F(e),e instanceof ts?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class gt{constructor(e){this._delegate=e}static serverTimestamp(){const e=za();return e._methodName="FieldValue.serverTimestamp",new gt(e)}static delete(){const e=Ha();return e._methodName="FieldValue.delete",new gt(e)}static arrayUnion(...e){const t=oa(...e);return t._methodName="FieldValue.arrayUnion",new gt(t)}static arrayRemove(...e){const t=la(...e);return t._methodName="FieldValue.arrayRemove",new gt(t)}static increment(e){const t=ca(e);return t._methodName="FieldValue.increment",new gt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const To={Firestore:Bs,GeoPoint:ia,Timestamp:sa,Blob:er,Transaction:zs,WriteBatch:Hs,DocumentReference:Pe,DocumentSnapshot:tr,Query:xe,QueryDocumentSnapshot:rr,QuerySnapshot:fn,CollectionReference:Ot,FieldPath:Tn,FieldValue:gt,setLogLevel:Io,CACHE_SIZE_UNLIMITED:na};function So(r,e){r.INTERNAL.registerComponent(new Zt("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},To)))}/**
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
 */function Eo(r){So(r,(e,t)=>new Bs(e,t,new ko)),r.registerVersion(wo,_o)}Eo(et);const Bt={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Tt={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Co(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Js(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Po=Co,Ao=Js,Ys=new lr("auth","Firebase",Js());/**
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
 */const Sr=new Ps("@firebase/auth");function Ro(r,...e){Sr.logLevel<=Fs.WARN&&Sr.warn(`Auth (${Mt}): ${r}`,...e)}function Nr(r,...e){Sr.logLevel<=Fs.ERROR&&Sr.error(`Auth (${Mt}): ${r}`,...e)}/**
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
 */function oe(r,...e){throw En(r,...e)}function re(r,...e){return En(r,...e)}function Sn(r,e,t){const n=Object.assign(Object.assign({},Ao()),{[e]:t});return new lr("auth","Firebase",n).create(e,{appName:r.name})}function se(r){return Sn(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ut(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&oe(r,"argument-error"),Sn(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function En(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ys.create(r,...e)}function b(r,e,...t){if(!r)throw En(e,...t)}function ze(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nr(e),new Error(e)}function Me(r,e){r||ze(e)}/**
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
 */function nr(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Cn(){return ds()==="http:"||ds()==="https:"}function ds(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Oo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cn()||Ms()||"connection"in navigator)?navigator.onLine:!0}function Do(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Me(t>e,"Short delay should be less than long delay!"),this.isMobile=to()||kn()}get(){return Oo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pn(r,e){Me(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qs{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mo=new dr(3e4,6e4);function G(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function K(r,e,t,n,i={}){return Xs(r,i,async()=>{let a={},o={};n&&(e==="GET"?o=n:a={body:JSON.stringify(n)});const c=Ft(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},a);return so()||(h.referrerPolicy="no-referrer"),Qs.fetch()(Zs(r,r.config.apiHost,t,c),h)})}async function Xs(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Lo),e);try{const i=new Uo(r),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Jt(r,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const c=a.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jt(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jt(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jt(r,"user-disabled",o);const g=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sn(r,g,h);oe(r,g)}}catch(i){if(i instanceof ot)throw i;oe(r,"network-request-failed",{message:String(i)})}}async function rt(r,e,t,n,i={}){const a=await K(r,e,t,n,i);return"mfaPendingCredential"in a&&oe(r,"multi-factor-auth-required",{_serverResponse:a}),a}function Zs(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Pn(r.config,i):`${r.config.apiScheme}://${i}`}function Fo(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Uo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(re(this.auth,"network-request-failed")),Mo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jt(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=re(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */function us(r){return r!==void 0&&r.getResponse!==void 0}function hs(r){return r!==void 0&&r.enterprise!==void 0}class $o{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Fo(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function Vo(r){return(await K(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Wo(r,e){return K(r,"GET","/v2/recaptchaConfig",G(r,e))}/**
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
 */async function qo(r,e){return K(r,"POST","/v1/accounts:delete",e)}async function Bo(r,e){return K(r,"POST","/v1/accounts:update",e)}async function ei(r,e){return K(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zo(r,e=!1){const t=F(r),n=await t.getIdToken(e),i=Mr(n);b(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:Yt(en(i.auth_time)),issuedAtTime:Yt(en(i.iat)),expirationTime:Yt(en(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function en(r){return Number(r)*1e3}function Mr(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ro(t);return i?JSON.parse(i):(Nr("Failed to decode base64 JWT payload"),null)}catch(i){return Nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ps(r){const e=Mr(r);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tt(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ot&&Ho(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Ho({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Go{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yt(this.lastLoginAt),this.creationTime=Yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sr(r){var e;const t=r.auth,n=await r.getIdToken(),i=await tt(r,ei(t,{idToken:n}));b(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];r._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?ti(a.providerUserInfo):[],c=Jo(r.providerData,o),l=r.isAnonymous,h=!(r.email&&a.passwordHash)&&!(c!=null&&c.length),g=l?h:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new gn(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(r,m)}async function Ko(r){const e=F(r);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jo(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ti(r){return r.map(e=>{var{providerId:t}=e,n=In(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Yo(r,e){const t=await Xs(r,{},async()=>{const n=Ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=r.config,o=Zs(r,i,"/v1/token",`key=${a}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Qs.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qo(r,e){return K(r,"POST","/v2/accounts:revokeToken",G(r,e))}/**
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
 */class Et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ps(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(e.length!==0,"internal-error");const t=ps(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:a}=await Yo(e,t);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:a}=t,o=new Et;return n&&(b(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&(b(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Et,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
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
 */function it(r,e){b(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,a=In(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Go(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new gn(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await tt(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zo(this,e)}reload(){return Ko(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(se(this.auth));const e=await this.getIdToken();return await tt(this,qo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,a,o,c,l,h,g;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,L=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(o=t.photoURL)!==null&&o!==void 0?o:void 0,B=(c=t.tenantId)!==null&&c!==void 0?c:void 0,R=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,S=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:ue,emailVerified:U,isAnonymous:he,providerData:te,stsTokenManager:pe}=t;b(ue&&pe,e,"internal-error");const ie=Et.fromJSON(this.name,pe);b(typeof ue=="string",e,"internal-error"),it(m,e.name),it(y,e.name),b(typeof U=="boolean",e,"internal-error"),b(typeof he=="boolean",e,"internal-error"),it(L,e.name),it(M,e.name),it(B,e.name),it(R,e.name),it(z,e.name),it(S,e.name);const we=new Ye({uid:ue,auth:e,email:y,emailVerified:U,displayName:m,isAnonymous:he,photoURL:M,phoneNumber:L,tenantId:B,stsTokenManager:ie,createdAt:z,lastLoginAt:S});return te&&Array.isArray(te)&&(we.providerData=te.map(ne=>Object.assign({},ne))),R&&(we._redirectEventId=R),we}static async _fromIdTokenResponse(e,t,n=!1){const i=new Et;i.updateFromServerResponse(t);const a=new Ye({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await sr(a),a}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];b(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ti(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new Et;c.updateFromIdToken(n);const l=new Ye({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,h),l}}/**
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
 */const ms=new Map;function je(r){Me(r instanceof Function,"Expected a class definition");let e=ms.get(r);return e?(Me(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ms.set(r,e),e)}/**
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
 */class ri{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ri.type="NONE";const Dt=ri;/**
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
 */function vt(r,e,t){return`firebase:${r}:${e}:${t}`}class Ct{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=vt(this.userKey,i.apiKey,a),this.fullPersistenceKey=vt("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ct(je(Dt),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let a=i[0]||je(Dt);const o=vt(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const g=await h._get(o);if(g){const m=Ye._fromJSON(e,g);h!==a&&(c=m),a=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new Ct(a,e,n):(a=l[0],c&&await a._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==a)try{await h._remove(o)}catch{}})),new Ct(a,e,n))}}/**
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
 */function fs(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ai(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ni(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oi(e))return"Blackberry";if(li(e))return"Webos";if(si(e))return"Safari";if((e.includes("chrome/")||ii(e))&&!e.includes("edge/"))return"Chrome";if(ur(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ni(r=ae()){return/firefox\//i.test(r)}function si(r=ae()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ii(r=ae()){return/crios\//i.test(r)}function ai(r=ae()){return/iemobile/i.test(r)}function ur(r=ae()){return/android/i.test(r)}function oi(r=ae()){return/blackberry/i.test(r)}function li(r=ae()){return/webos/i.test(r)}function hr(r=ae()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Xo(r=ae()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function Zo(r=ae()){var e;return hr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function el(){return Us()&&document.documentMode===10}function ci(r=ae()){return hr(r)||ur(r)||li(r)||oi(r)||/windows phone/i.test(r)||ai(r)}/**
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
 */function di(r,e=[]){let t;switch(r){case"Browser":t=fs(ae());break;case"Worker":t=`${fs(ae())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${n}`}/**
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
 */class tl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((o,c)=>{try{const l=e(a);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function rl(r,e={}){return K(r,"GET","/v2/passwordPolicy",G(r,e))}/**
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
 */const nl=6;class sl{constructor(e){var t,n,i,a;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:nl,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,a,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class il{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gs(this),this.idTokenSubscription=new gs(this),this.beforeStateQueue=new tl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ys,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=je(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ct.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ei(this,{idToken:e}),n=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Q(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Do()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(se(this));const t=e?F(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rl(this),t=new sl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Qo(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&je(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await Ct.create(this,[je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(c,this,"internal-error"),c.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=di(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ro(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function H(r){return F(r)}class gs{constructor(e){this.auth=e,this.observer=null,this.addObserver=As(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function al(r){pr=r}function An(r){return pr.loadJS(r)}function ol(){return pr.recaptchaV2Script}function ll(){return pr.recaptchaEnterpriseScript}function cl(){return pr.gapiScript}function ui(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const dl="recaptcha-enterprise",ul="NO_RECAPTCHA";class hl{constructor(e){this.type=dl,this.auth=H(e)}async verify(e="verify",t=!1){async function n(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,c)=>{Wo(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new $o(l);return a.tenantId==null?a._agentRecaptchaConfig=h:a._tenantRecaptchaConfigs[a.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function i(a,o,c){const l=window.grecaptcha;hs(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:e}).then(h=>{o(h)}).catch(()=>{o(ul)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{n(this.auth).then(c=>{if(!t&&hs(window.grecaptcha))i(c,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ll();l.length!==0&&(l+=c),An(l).then(()=>{i(c,a,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function xs(r,e,t,n=!1){const i=new hl(r);let a;try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ir(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await xs(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xs(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(a)})}function pl(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(je);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ml(r,e,t){const n=H(r);b(n._canInitEmulator,n,"emulator-config-failed"),b(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),a=hi(e),{host:o,port:c}=fl(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${a}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gl()}function hi(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function fl(r){const e=hi(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:bs(n.substr(a.length+1))}}else{const[a,o]=n.split(":");return{host:a,port:bs(o)}}}function bs(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gl(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class $t{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,t){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}/**
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
 */async function pi(r,e){return K(r,"POST","/v1/accounts:resetPassword",G(r,e))}async function xl(r,e){return K(r,"POST","/v1/accounts:update",e)}async function bl(r,e){return K(r,"POST","/v1/accounts:signUp",e)}async function vl(r,e){return K(r,"POST","/v1/accounts:update",G(r,e))}/**
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
 */async function yl(r,e){return rt(r,"POST","/v1/accounts:signInWithPassword",G(r,e))}async function Fr(r,e){return K(r,"POST","/v1/accounts:sendOobCode",G(r,e))}async function wl(r,e){return Fr(r,e)}async function _l(r,e){return Fr(r,e)}async function Nl(r,e){return Fr(r,e)}async function kl(r,e){return Fr(r,e)}/**
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
 */async function Il(r,e){return rt(r,"POST","/v1/accounts:signInWithEmailLink",G(r,e))}async function jl(r,e){return rt(r,"POST","/v1/accounts:signInWithEmailLink",G(r,e))}/**
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
 */class ar extends $t{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ar(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ar(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ir(e,t,"signInWithPassword",yl);case"emailLink":return Il(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ir(e,n,"signUpPassword",bl);case"emailLink":return jl(e,{idToken:t,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ze(r,e){return rt(r,"POST","/v1/accounts:signInWithIdp",G(r,e))}/**
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
 */const Tl="http://localhost";class He extends $t{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new He(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,a=In(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new He(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:Tl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ft(t)}return e}}/**
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
 */async function Sl(r,e){return K(r,"POST","/v1/accounts:sendVerificationCode",G(r,e))}async function El(r,e){return rt(r,"POST","/v1/accounts:signInWithPhoneNumber",G(r,e))}async function Cl(r,e){const t=await rt(r,"POST","/v1/accounts:signInWithPhoneNumber",G(r,e));if(t.temporaryProof)throw Jt(r,"account-exists-with-different-credential",t);return t}const Pl={USER_NOT_FOUND:"user-not-found"};async function Al(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return rt(r,"POST","/v1/accounts:signInWithPhoneNumber",G(r,t),Pl)}/**
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
 */class yt extends $t{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new yt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return El(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Cl(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Al(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}=e;return!n&&!t&&!i&&!a?null:new yt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a})}}/**
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
 */function Rl(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ol(r){const e=St(Kt(r)).link,t=e?St(Kt(e)).deep_link_id:null,n=St(Kt(r)).deep_link_id;return(n?St(Kt(n)).link:null)||n||t||e||r}class Ur{constructor(e){var t,n,i,a,o,c;const l=St(Kt(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,g=(n=l.oobCode)!==null&&n!==void 0?n:null,m=Rl((i=l.mode)!==null&&i!==void 0?i:null);b(h&&g&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=g,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ol(e);try{return new Ur(t)}catch{return null}}}/**
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
 */class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return ar._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ur.parseLink(t);return b(n,"argument-error"),ar._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password";lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vt extends nt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Pt extends Vt{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return b("providerId"in t&&"signInMethod"in t,"argument-error"),He._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),He._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!a||!c)return null;try{return new Pt(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:a})}catch{return null}}}/**
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
 */class Ve extends Vt{constructor(){super("facebook.com")}static credential(e){return He._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
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
 */class We extends Vt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return He._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return We.credential(t,n)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
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
 */class qe extends Vt{constructor(){super("github.com")}static credential(e){return He._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com";qe.PROVIDER_ID="github.com";/**
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
 */const Dl="http://localhost";class Lt extends $t{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:a}=t;return!n||!i||!a||n!==i?null:new Lt(n,a)}static _create(e,t){return new Lt(e,t)}buildRequest(){return{requestUri:Dl,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Ll="saml.";class Er extends nt{constructor(e){b(e.startsWith(Ll),"argument-error"),super(e)}static credentialFromResult(e){return Er.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Er.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Lt.fromJSON(e);return b(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Lt._create(n,t)}catch{return null}}}/**
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
 */class Be extends Vt{constructor(){super("twitter.com")}static credential(e,t){return He._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Be.credential(t,n)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
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
 */async function mi(r,e){return rt(r,"POST","/v1/accounts:signUp",G(r,e))}/**
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
 */class Ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const a=await Ye._fromIdTokenResponse(e,n,i),o=vs(n);return new Ae({user:a,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=vs(n);return new Ae({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function vs(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function Ml(r){var e;if(Q(r.app))return Promise.reject(se(r));const t=H(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ae({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await mi(t,{returnSecureToken:!0}),i=await Ae._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Cr extends ot{constructor(e,t,n,i){var a;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Cr(e,t,n,i)}}function fi(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(r,a,e,n):a})}/**
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
 */function gi(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Fl(r,e){const t=F(r);await $r(!0,t,e);const{providerUserInfo:n}=await Bo(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=gi(n||[]);return t.providerData=t.providerData.filter(a=>i.has(a.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Rn(r,e,t=!1){const n=await tt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ae._forOperation(r,"link",n)}async function $r(r,e,t){await sr(e);const n=gi(e.providerData),i=r===!1?"provider-already-linked":"no-such-provider";b(n.has(t)===r,e.auth,i)}/**
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
 */async function xi(r,e,t=!1){const{auth:n}=r;if(Q(n.app))return Promise.reject(se(n));const i="reauthenticate";try{const a=await tt(r,fi(n,i,e,r),t);b(a.idToken,n,"internal-error");const o=Mr(a.idToken);b(o,n,"internal-error");const{sub:c}=o;return b(r.uid===c,n,"user-mismatch"),Ae._forOperation(r,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&oe(n,"user-mismatch"),a}}/**
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
 */async function bi(r,e,t=!1){if(Q(r.app))return Promise.reject(se(r));const n="signIn",i=await fi(r,n,e),a=await Ae._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(a.user),a}async function Vr(r,e){return bi(H(r),e)}async function vi(r,e){const t=F(r);return await $r(!1,t,e.providerId),Rn(t,e)}async function yi(r,e){return xi(F(r),e)}/**
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
 */async function Ul(r,e){return rt(r,"POST","/v1/accounts:signInWithCustomToken",G(r,e))}/**
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
 */async function $l(r,e){if(Q(r.app))return Promise.reject(se(r));const t=H(r),n=await Ul(t,{token:e,returnSecureToken:!0}),i=await Ae._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}/**
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
 */class mr{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?On._fromServerResponse(e,t):"totpInfo"in t?Dn._fromServerResponse(e,t):oe(e,"internal-error")}}class On extends mr{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new On(t)}}class Dn extends mr{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Dn(t)}}/**
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
 */function Wr(r,e,t){var n;b(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),b(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(b(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(b(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Ln(r){const e=H(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vl(r,e,t){const n=H(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Wr(n,i,t),await ir(n,i,"getOobCode",_l)}async function Wl(r,e,t){await pi(F(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ln(r),n})}async function ql(r,e){await vl(F(r),{oobCode:e})}async function wi(r,e){const t=F(r),n=await pi(t,{oobCode:e}),i=n.requestType;switch(b(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(n.mfaInfo,t,"internal-error");default:b(n.email,t,"internal-error")}let a=null;return n.mfaInfo&&(a=mr._fromServerResponse(H(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:a},operation:i}}async function Bl(r,e){const{data:t}=await wi(F(r),e);return t.email}async function zl(r,e,t){if(Q(r.app))return Promise.reject(se(r));const n=H(r),o=await ir(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mi).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ln(r),l}),c=await Ae._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function Hl(r,e,t){return Q(r.app)?Promise.reject(se(r)):Vr(F(r),lt.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ln(r),n})}/**
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
 */async function Gl(r,e,t){const n=H(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function a(o,c){b(c.handleCodeInApp,n,"argument-error"),c&&Wr(n,o,c)}a(i,t),await ir(n,i,"getOobCode",Nl)}function Kl(r,e){const t=Ur.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Jl(r,e,t){if(Q(r.app))return Promise.reject(se(r));const n=F(r),i=lt.credentialWithLink(e,t||nr());return b(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Vr(n,i)}/**
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
 */async function Yl(r,e){return K(r,"POST","/v1/accounts:createAuthUri",G(r,e))}/**
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
 */async function Ql(r,e){const t=Cn()?nr():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:i}=await Yl(F(r),n);return i||[]}async function Xl(r,e){const t=F(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Wr(t.auth,i,e);const{email:a}=await wl(t.auth,i);a!==r.email&&await r.reload()}async function Zl(r,e,t){const n=F(r),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Wr(n.auth,a,t);const{email:o}=await kl(n.auth,a);o!==r.email&&await r.reload()}/**
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
 */async function ec(r,e){return K(r,"POST","/v1/accounts:update",e)}/**
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
 */async function tc(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=F(r),a={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await tt(n,ec(n.auth,a));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function rc(r,e){const t=F(r);return Q(t.auth.app)?Promise.reject(se(t.auth)):_i(t,e,null)}function nc(r,e){return _i(F(r),null,e)}async function _i(r,e,t){const{auth:n}=r,a={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(a.email=e),t&&(a.password=t);const o=await tt(r,xl(n,a));await r._updateTokensIfNecessary(o,!0)}/**
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
 */function sc(r){var e,t;if(!r)return null;const{providerId:n}=r,i=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},a=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(r!=null&&r.idToken)){const o=(t=(e=Mr(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new At(a,c)}}if(!n)return null;switch(n){case"facebook.com":return new ic(a,i);case"github.com":return new ac(a,i);case"google.com":return new oc(a,i);case"twitter.com":return new lc(a,i,r.screenName||null);case"custom":case"anonymous":return new At(a,null);default:return new At(a,n,i)}}class At{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Ni extends At{constructor(e,t,n,i){super(e,t,n),this.username=i}}class ic extends At{constructor(e,t){super(e,"facebook.com",t)}}class ac extends Ni{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class oc extends At{constructor(e,t){super(e,"google.com",t)}}class lc extends Ni{constructor(e,t,n){super(e,"twitter.com",t,n)}}function cc(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:sc(t)}/**
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
 */class bt{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new bt("enroll",e,t)}static _fromMfaPendingCredential(e){return new bt("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return bt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return bt._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Mn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=H(e),i=t.customData._serverResponse,a=(i.mfaInfo||[]).map(c=>mr._fromServerResponse(n,c));b(i.mfaPendingCredential,n,"internal-error");const o=bt._fromMfaPendingCredential(i.mfaPendingCredential);return new Mn(o,a,async c=>{const l=await c._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const h=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const g=await Ae._fromIdTokenResponse(n,t.operationType,h);return await n._updateCurrentUser(g.user),g;case"reauthenticate":return b(t.user,n,"internal-error"),Ae._forOperation(t.user,t.operationType,h);default:oe(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function dc(r,e){var t;const n=F(r),i=e;return b(e.customData.operationType,n,"argument-error"),b((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),Mn._fromError(n,i)}/**
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
 */function uc(r,e){return K(r,"POST","/v2/accounts/mfaEnrollment:start",G(r,e))}function hc(r,e){return K(r,"POST","/v2/accounts/mfaEnrollment:finalize",G(r,e))}function pc(r,e){return K(r,"POST","/v2/accounts/mfaEnrollment:withdraw",G(r,e))}class Fn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>mr._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Fn(e)}async getSession(){return bt._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),a=await tt(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(a),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await tt(this.user,pc(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const tn=new WeakMap;function mc(r){const e=F(r);return tn.has(e)||tn.set(e,Fn._fromUser(e)),tn.get(e)}const Pr="__sak";/**
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
 */class ki{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pr,"1"),this.storage.removeItem(Pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fc=1e3,gc=10;class Ii extends ki{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ci(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},a=this.storage.getItem(n);el()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gc):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},fc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ii.type="LOCAL";const Un=Ii;/**
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
 */class ji extends ki{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ji.type="SESSION";const _t=ji;/**
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
 */function xc(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new qr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:a}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,a)),l=await xc(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qr.receivers=[];/**
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
 */function fr(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class bc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((c,l)=>{const h=fr("",20);i.port1.start();const g=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(y.data.response);break;default:clearTimeout(g),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ee(){return window}function vc(r){ee().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function $n(){return typeof ee().WorkerGlobalScope<"u"&&typeof ee().importScripts=="function"}async function yc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wc(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function _c(){return $n()?self:null}/**
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
 */const Ti="firebaseLocalStorageDb",Nc=1,Ar="firebaseLocalStorage",Si="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Br(r,e){return r.transaction([Ar],e?"readwrite":"readonly").objectStore(Ar)}function kc(){const r=indexedDB.deleteDatabase(Ti);return new gr(r).toPromise()}function xn(){const r=indexedDB.open(Ti,Nc);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ar,{keyPath:Si})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ar)?e(n):(n.close(),await kc(),e(await xn()))})})}async function ys(r,e,t){const n=Br(r,!0).put({[Si]:e,value:t});return new gr(n).toPromise()}async function Ic(r,e){const t=Br(r,!1).get(e),n=await new gr(t).toPromise();return n===void 0?null:n.value}function ws(r,e){const t=Br(r,!0).delete(e);return new gr(t).toPromise()}const jc=800,Tc=3;class Ei{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Tc)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $n()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qr._getInstance(_c()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yc(),!this.activeServiceWorker)return;this.sender=new bc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xn();return await ys(e,Pr,"1"),await ws(e,Pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ys(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ic(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ws(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Br(i,!1).getAll();return new gr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ei.type="LOCAL";const or=Ei;/**
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
 */function Sc(r,e){return K(r,"POST","/v2/accounts/mfaSignIn:start",G(r,e))}function Ec(r,e){return K(r,"POST","/v2/accounts/mfaSignIn:finalize",G(r,e))}/**
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
 */const Cc=500,Pc=6e4,wr=1e12;class Ac{constructor(e){this.auth=e,this.counter=wr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Rc(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||wr;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||wr;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||wr;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class Rc{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;b(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Oc(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Pc)},Cc))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Oc(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const rn=ui("rcb"),Dc=new dr(3e4,6e4);class Lc{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ee().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return b(Mc(t),e,"argument-error"),this.shouldResolveImmediately(t)&&us(ee().grecaptcha)?Promise.resolve(ee().grecaptcha):new Promise((n,i)=>{const a=ee().setTimeout(()=>{i(re(e,"network-request-failed"))},Dc.get());ee()[rn]=()=>{ee().clearTimeout(a),delete ee()[rn];const c=ee().grecaptcha;if(!c||!us(c)){i(re(e,"internal-error"));return}const l=c.render;c.render=(h,g)=>{const m=l(h,g);return this.counter++,m},this.hostLanguage=t,n(c)};const o=`${ol()}?${Ft({onload:rn,render:"explicit",hl:t})}`;An(o).catch(()=>{clearTimeout(a),i(re(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ee().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mc(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class Fc{async load(e){return new Ac(e)}clearedOneInstance(){}}/**
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
 */const Ci="recaptcha",Uc={theme:"light",type:"image"};let $c=class{constructor(e,t,n=Object.assign({},Uc)){this.parameters=n,this.type=Ci,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=H(e),this.isInvisible=this.parameters.size==="invisible",b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;b(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fc:new Lc,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(i=>{const a=o=>{o&&(this.tokenChangeListeners.delete(a),i(o))};this.tokenChangeListeners.add(a),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=ee()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(Cn()&&!$n(),this.auth,"internal-error"),await Vc(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Vo(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Vc(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class Vn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=yt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Wc(r,e,t){if(Q(r.app))return Promise.reject(se(r));const n=H(r),i=await zr(n,e,F(t));return new Vn(i,a=>Vr(n,a))}async function qc(r,e,t){const n=F(r);await $r(!1,n,"phone");const i=await zr(n.auth,e,F(t));return new Vn(i,a=>vi(n,a))}async function Bc(r,e,t){const n=F(r);if(Q(n.auth.app))return Promise.reject(se(n.auth));const i=await zr(n.auth,e,F(t));return new Vn(i,a=>yi(n,a))}async function zr(r,e,t){var n;const i=await t.verify();try{b(typeof i=="string",r,"argument-error"),b(t.type===Ci,r,"argument-error");let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a)return b(o.type==="enroll",r,"internal-error"),(await uc(r,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{b(o.type==="signin",r,"internal-error");const c=((n=a.multiFactorHint)===null||n===void 0?void 0:n.uid)||a.multiFactorUid;return b(c,r,"missing-multi-factor-info"),(await Sc(r,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Sl(r,{phoneNumber:a.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function zc(r,e){const t=F(r);if(Q(t.auth.app))return Promise.reject(se(t.auth));await Rn(t,e)}/**
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
 */let Nt=class kr{constructor(e){this.providerId=kr.PROVIDER_ID,this.auth=H(e)}verifyPhoneNumber(e,t){return zr(this.auth,e,F(t))}static credential(e,t){return yt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return kr.credentialFromTaggedObject(t)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?yt._fromTokenResponse(t,n):null}};Nt.PROVIDER_ID="phone";Nt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function It(r,e){return e?je(e):(b(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Wn extends $t{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hc(r){return bi(r.auth,new Wn(r),r.bypassAuthState)}function Gc(r){const{auth:e,user:t}=r;return b(t,e,"internal-error"),xi(t,new Wn(r),r.bypassAuthState)}async function Kc(r){const{auth:e,user:t}=r;return b(t,e,"internal-error"),Rn(t,new Wn(r),r.bypassAuthState)}/**
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
 */class Pi{constructor(e,t,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:a,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hc;case"linkViaPopup":case"linkViaRedirect":return Kc;case"reauthViaPopup":case"reauthViaRedirect":return Gc;default:oe(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jc=new dr(2e3,1e4);async function Yc(r,e,t){if(Q(r.app))return Promise.reject(re(r,"operation-not-supported-in-this-environment"));const n=H(r);Ut(r,e,nt);const i=It(n,t);return new Qe(n,"signInViaPopup",e,i).executeNotNull()}async function Qc(r,e,t){const n=F(r);if(Q(n.auth.app))return Promise.reject(re(n.auth,"operation-not-supported-in-this-environment"));Ut(n.auth,e,nt);const i=It(n.auth,t);return new Qe(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function Xc(r,e,t){const n=F(r);Ut(n.auth,e,nt);const i=It(n.auth,t);return new Qe(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class Qe extends Pi{constructor(e,t,n,i,a){super(e,t,i,a),this.provider=n,this.authWindow=null,this.pollId=null,Qe.currentPopupAction&&Qe.currentPopupAction.cancel(),Qe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=fr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jc.get())};e()}}Qe.currentPopupAction=null;/**
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
 */const Zc="pendingRedirect",Qt=new Map;class ed extends Pi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Qt.get(this.auth._key());if(!e){try{const n=await td(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Qt.set(this.auth._key(),e)}return this.bypassAuthState||Qt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function td(r,e){const t=Ri(e),n=Ai(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function qn(r,e){return Ai(r)._set(Ri(e),"true")}function rd(){Qt.clear()}function Bn(r,e){Qt.set(r._key(),e)}function Ai(r){return je(r._redirectPersistence)}function Ri(r){return vt(Zc,r.config.apiKey,r.name)}/**
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
 */function nd(r,e,t){return sd(r,e,t)}async function sd(r,e,t){if(Q(r.app))return Promise.reject(se(r));const n=H(r);Ut(r,e,nt),await n._initializationPromise;const i=It(n,t);return await qn(i,n),i._openRedirect(n,e,"signInViaRedirect")}function id(r,e,t){return ad(r,e,t)}async function ad(r,e,t){const n=F(r);if(Ut(n.auth,e,nt),Q(n.auth.app))return Promise.reject(se(n.auth));await n.auth._initializationPromise;const i=It(n.auth,t);await qn(i,n.auth);const a=await Oi(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",a)}function od(r,e,t){return ld(r,e,t)}async function ld(r,e,t){const n=F(r);Ut(n.auth,e,nt),await n.auth._initializationPromise;const i=It(n.auth,t);await $r(!1,n,e.providerId),await qn(i,n.auth);const a=await Oi(n);return i._openRedirect(n.auth,e,"linkViaRedirect",a)}async function cd(r,e){return await H(r)._initializationPromise,Hr(r,e,!1)}async function Hr(r,e,t=!1){if(Q(r.app))return Promise.reject(se(r));const n=H(r),i=It(n,e),o=await new ed(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function Oi(r){const e=fr(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const dd=10*60*1e3;class Di{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ud(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Li(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(re(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dd&&this.cachedEventUids.clear(),this.cachedEventUids.has(_s(e))}saveEventToCache(e){this.cachedEventUids.add(_s(e)),this.lastProcessedEventTime=Date.now()}}function _s(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Li({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ud(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Li(r);default:return!1}}/**
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
 */async function Mi(r,e={}){return K(r,"GET","/v1/projects",e)}/**
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
 */const hd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pd=/^https?/;async function md(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Mi(r);for(const t of e)try{if(fd(t))return}catch{}oe(r,"unauthorized-domain")}function fd(r){const e=nr(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!pd.test(t))return!1;if(hd.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const gd=new dr(3e4,6e4);function Ns(){const r=ee().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function xd(r){return new Promise((e,t)=>{var n,i,a;function o(){Ns(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ns(),t(re(r,"network-request-failed"))},timeout:gd.get()})}if(!((i=(n=ee().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=ee().gapi)===null||a===void 0)&&a.load)o();else{const c=ui("iframefcb");return ee()[c]=()=>{gapi.load?o():t(re(r,"network-request-failed"))},An(`${cl()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function bd(r){return Ir=Ir||xd(r),Ir}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vd=new dr(5e3,15e3),yd="__/auth/iframe",wd="emulator/auth/iframe",_d={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kd(r){const e=r.config;b(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Pn(e,wd):`https://${r.config.authDomain}/${yd}`,n={apiKey:e.apiKey,appName:r.name,v:Mt},i=Nd.get(r.config.apiHost);i&&(n.eid=i);const a=r._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${Ft(n).slice(1)}`}async function Id(r){const e=await bd(r),t=ee().gapi;return b(t,r,"internal-error"),e.open({where:document.body,url:kd(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_d,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const o=re(r,"network-request-failed"),c=ee().setTimeout(()=>{a(o)},vd.get());function l(){ee().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Td=500,Sd=600,Ed="_blank",Cd="http://localhost";class ks{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pd(r,e,t,n=Td,i=Sd){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jd),{width:n.toString(),height:i.toString(),top:a,left:o}),h=ae().toLowerCase();t&&(c=ii(h)?Ed:t),ni(h)&&(e=e||Cd,l.scrollbars="yes");const g=Object.entries(l).reduce((y,[L,M])=>`${y}${L}=${M},`,"");if(Zo(h)&&c!=="_self")return Ad(e||"",c),new ks(null);const m=window.open(e||"",c,g);b(m,r,"popup-blocked");try{m.focus()}catch{}return new ks(m)}function Ad(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Rd="__/auth/handler",Od="emulator/auth/handler",Dd=encodeURIComponent("fac");async function bn(r,e,t,n,i,a){b(r.config.authDomain,r,"auth-domain-config-required"),b(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Mt,eventId:i};if(e instanceof nt){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",no(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,m]of Object.entries(a||{}))o[g]=m}if(e instanceof Vt){const g=e.getScopes().filter(m=>m!=="");g.length>0&&(o.scopes=g.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const l=await r._getAppCheckToken(),h=l?`#${Dd}=${encodeURIComponent(l)}`:"";return`${Ld(r)}?${Ft(c).slice(1)}${h}`}function Ld({config:r}){return r.emulator?Pn(r,Od):`https://${r.authDomain}/${Rd}`}/**
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
 */const nn="webStorageSupport";class Md{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_t,this._completeRedirectFn=Hr,this._overrideRedirectResult=Bn}async _openPopup(e,t,n,i){var a;Me((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await bn(e,t,n,nr(),i);return Pd(e,o,fr())}async _openRedirect(e,t,n,i){await this._originValidation(e);const a=await bn(e,t,n,nr(),i);return vc(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Me(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Id(e),n=new Di(e);return t.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nn,{type:nn},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[nn];o!==void 0&&t(!!o),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=md(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ci()||si()||hr()}}const Fd=Md;class Ud{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return ze("unexpected MultiFactorSessionType")}}}class zn extends Ud{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zn(e)}_finalizeEnroll(e,t,n){return hc(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ec(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fi{constructor(){}static assertion(e){return zn._fromCredential(e)}}Fi.FACTOR_ID="phone";var Is="@firebase/auth",js="1.7.9";/**
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
 */class $d{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vd(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wd(r){on(new Zt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:di(r)},h=new il(n,i,a,l);return pl(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),on(new Zt("auth-internal",e=>{const t=H(e.getProvider("auth").getImmediate());return(n=>new $d(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(Is,js,Vd(r)),Tr(Is,js,"esm2017")}/**
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
 */const qd=5*60;eo("authIdTokenMaxAge");function Bd(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}al({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const a=re("internal-error");a.customData=i,t(a)},n.type="text/javascript",n.charset="UTF-8",Bd().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wd("Browser");/**
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
 */function kt(){return window}/**
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
 */const zd=2e3;async function Hd(r,e,t){var n;const{BuildInfo:i}=kt();Me(e.sessionId,"AuthEvent did not contain a session ID");const a=await Qd(e.sessionId),o={};return hr()?o.ibi=i.packageName:ur()?o.apn=i.packageName:oe(r,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=a,bn(r,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function Gd(r){const{BuildInfo:e}=kt(),t={};hr()?t.iosBundleId=e.packageName:ur()?t.androidPackageName=e.packageName:oe(r,"operation-not-supported-in-this-environment"),await Mi(r,t)}function Kd(r){const{cordova:e}=kt();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(r):i=e.InAppBrowser.open(r,Xo()?"_blank":"_system","location=yes"),t(i)})})}async function Jd(r,e,t){const{cordova:n}=kt();let i=()=>{};try{await new Promise((a,o)=>{let c=null;function l(){var m;a();const y=(m=n.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof y=="function"&&y(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function h(){c||(c=window.setTimeout(()=>{o(re(r,"redirect-cancelled-by-user"))},zd))}function g(){(document==null?void 0:document.visibilityState)==="visible"&&h()}e.addPassiveListener(l),document.addEventListener("resume",h,!1),ur()&&document.addEventListener("visibilitychange",g,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",g,!1),c&&window.clearTimeout(c)}})}finally{i()}}function Yd(r){var e,t,n,i,a,o,c,l,h,g;const m=kt();b(typeof((e=m==null?void 0:m.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),b(typeof((t=m==null?void 0:m.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),b(typeof((a=(i=(n=m==null?void 0:m.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||a===void 0?void 0:a.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((l=(c=(o=m==null?void 0:m.cordova)===null||o===void 0?void 0:o.plugins)===null||c===void 0?void 0:c.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((g=(h=m==null?void 0:m.cordova)===null||h===void 0?void 0:h.InAppBrowser)===null||g===void 0?void 0:g.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Qd(r){const e=Xd(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Xd(r){if(Me(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}/**
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
 */const Zd=20;class eu extends Di{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function tu(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:su(),postBody:null,tenantId:r.tenantId,error:re(r,"no-auth-event")}}function ru(r,e){return vn()._set(yn(r),e)}async function Ts(r){const e=await vn()._get(yn(r));return e&&await vn()._remove(yn(r)),e}function nu(r,e){var t,n;const i=au(e);if(i.includes("/__/auth/callback")){const a=jr(i),o=a.firebaseError?iu(decodeURIComponent(a.firebaseError)):null,c=(n=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],l=c?re(c):null;return l?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:i,postBody:null}}return null}function su(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Zd;t++){const n=Math.floor(Math.random()*e.length);r.push(e.charAt(n))}return r.join("")}function vn(){return je(Un)}function yn(r){return vt("authEvent",r.config.apiKey,r.name)}function iu(r){try{return JSON.parse(r)}catch{return null}}function au(r){const e=jr(r),t=e.link?decodeURIComponent(e.link):void 0,n=jr(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jr(i).link||i||n||t||r}function jr(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return St(t.join("?"))}/**
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
 */const ou=500;class lu{constructor(){this._redirectPersistence=_t,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Hr,this._overrideRedirectResult=Bn}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new eu(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){oe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){Yd(e);const a=await this._initialize(e);await a.initialized(),a.resetRedirect(),rd(),await this._originValidation(e);const o=tu(e,n,i);await ru(e,o);const c=await Hd(e,o,t),l=await Kd(c);return Jd(e,a,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gd(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:a}=kt(),o=setTimeout(async()=>{await Ts(e),t.onEvent(Ss())},ou),c=async g=>{clearTimeout(o);const m=await Ts(e);let y=null;m&&(g!=null&&g.url)&&(y=nu(m,g.url)),t.onEvent(y||Ss())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,c);const l=i,h=`${a.packageName.toLowerCase()}://`;kt().handleOpenURL=async g=>{if(g.toLowerCase().startsWith(h)&&c({url:g}),typeof l=="function")try{l(g)}catch(m){console.error(m)}}}}const cu=lu;function Ss(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:re("no-auth-event")}}/**
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
 */function du(r,e){H(r)._logFramework(e)}var uu="@firebase/auth-compat",hu="0.5.14";/**
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
 */const pu=1e3;function Xt(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function mu(){return Xt()==="http:"||Xt()==="https:"}function Ui(r=ae()){return!!((Xt()==="file:"||Xt()==="ionic:"||Xt()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function fu(){return kn()||$s()}function gu(){return Us()&&(document==null?void 0:document.documentMode)===11}function xu(r=ae()){return/Edge\/\d+/.test(r)}function bu(r=ae()){return gu()||xu(r)}function $i(){try{const r=self.localStorage,e=fr();if(r)return r.setItem(e,"1"),r.removeItem(e),bu()?hn():!0}catch{return Hn()&&hn()}return!1}function Hn(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function sn(){return(mu()||Ms()||Ui())&&!fu()&&$i()&&!Hn()}function Vi(){return Ui()&&typeof document<"u"}async function vu(){return Vi()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},pu);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function yu(){return typeof window<"u"?window:null}/**
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
 */const Ie={LOCAL:"local",NONE:"none",SESSION:"session"},zt=b,Wi="persistence";function wu(r,e){if(zt(Object.values(Ie).includes(e),r,"invalid-persistence-type"),kn()){zt(e!==Ie.SESSION,r,"unsupported-persistence-type");return}if($s()){zt(e===Ie.NONE,r,"unsupported-persistence-type");return}if(Hn()){zt(e===Ie.NONE||e===Ie.LOCAL&&hn(),r,"unsupported-persistence-type");return}zt(e===Ie.NONE||$i(),r,"unsupported-persistence-type")}async function wn(r){await r._initializationPromise;const e=qi(),t=vt(Wi,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function _u(r,e){const t=qi();if(!t)return[];const n=vt(Wi,r,e);switch(t.getItem(n)){case Ie.NONE:return[Dt];case Ie.LOCAL:return[or,_t];case Ie.SESSION:return[_t];default:return[]}}function qi(){var r;try{return((r=yu())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
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
 */const Nu=b;class at{constructor(){this.browserResolver=je(Fd),this.cordovaResolver=je(cu),this.underlyingResolver=null,this._redirectPersistence=_t,this._completeRedirectFn=Hr,this._overrideRedirectResult=Bn}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vi()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Nu(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await vu();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Bi(r){return r.unwrap()}function ku(r){return r.wrapped()}/**
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
 */function Iu(r){return zi(r)}function ju(r,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Tu(r,dc(r,e))}else if(n){const i=zi(e),a=e;i&&(a.credential=i,a.tenantId=n.tenantId||void 0,a.email=n.email||void 0,a.phoneNumber=n.phoneNumber||void 0)}}function zi(r){const{_tokenResponse:e}=r instanceof ot?r.customData:r;if(!e)return null;if(!(r instanceof ot)&&"temporaryProof"in e&&"phoneNumber"in e)return Nt.credentialFromResult(r);const t=e.providerId;if(!t||t===Bt.PASSWORD)return null;let n;switch(t){case Bt.GOOGLE:n=We;break;case Bt.FACEBOOK:n=Ve;break;case Bt.GITHUB:n=qe;break;case Bt.TWITTER:n=Be;break;default:const{oauthIdToken:i,oauthAccessToken:a,oauthTokenSecret:o,pendingToken:c,nonce:l}=e;return!a&&!o&&!i&&!c?null:c?t.startsWith("saml.")?Lt._create(t,c):He._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:a}):new Pt(t).credential({idToken:i,accessToken:a,rawNonce:l})}return r instanceof ot?n.credentialFromError(r):n.credentialFromResult(r)}function ye(r,e){return e.catch(t=>{throw t instanceof ot&&ju(r,t),t}).then(t=>{const n=t.operationType,i=t.user;return{operationType:n,credential:Iu(t),additionalUserInfo:cc(t),user:Xe.getOrCreate(i)}})}async function _n(r,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>ye(r,t.confirm(n))}}class Tu{constructor(e,t){this.resolver=t,this.auth=ku(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ye(Bi(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Xe{constructor(e){this._delegate=e,this.multiFactor=mc(e)}static getOrCreate(e){return Xe.USER_MAP.has(e)||Xe.USER_MAP.set(e,new Xe(e)),Xe.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ye(this.auth,vi(this._delegate,e))}async linkWithPhoneNumber(e,t){return _n(this.auth,qc(this._delegate,e,t))}async linkWithPopup(e){return ye(this.auth,Xc(this._delegate,e,at))}async linkWithRedirect(e){return await wn(H(this.auth)),od(this._delegate,e,at)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ye(this.auth,yi(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return _n(this.auth,Bc(this._delegate,e,t))}reauthenticateWithPopup(e){return ye(this.auth,Qc(this._delegate,e,at))}async reauthenticateWithRedirect(e){return await wn(H(this.auth)),id(this._delegate,e,at)}sendEmailVerification(e){return Xl(this._delegate,e)}async unlink(e){return await Fl(this._delegate,e),this}updateEmail(e){return rc(this._delegate,e)}updatePassword(e){return nc(this._delegate,e)}updatePhoneNumber(e){return zc(this._delegate,e)}updateProfile(e){return tc(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Zl(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Xe.USER_MAP=new WeakMap;/**
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
 */const Ht=b;class Nn{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Ht(n,"invalid-api-key",{appName:e.name}),Ht(n,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?at:void 0;this._delegate=t.initialize({options:{persistence:Su(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Po),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Xe.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){ml(this._delegate,e,t)}applyActionCode(e){return ql(this._delegate,e)}checkActionCode(e){return wi(this._delegate,e)}confirmPasswordReset(e,t){return Wl(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ye(this._delegate,zl(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Ql(this._delegate,e)}isSignInWithEmailLink(e){return Kl(this._delegate,e)}async getRedirectResult(){Ht(sn(),this._delegate,"operation-not-supported-in-this-environment");const e=await cd(this._delegate,at);return e?ye(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){du(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:a,complete:o}=Es(e,t,n);return this._delegate.onAuthStateChanged(i,a,o)}onIdTokenChanged(e,t,n){const{next:i,error:a,complete:o}=Es(e,t,n);return this._delegate.onIdTokenChanged(i,a,o)}sendSignInLinkToEmail(e,t){return Gl(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Vl(this._delegate,e,t||void 0)}async setPersistence(e){wu(this._delegate,e);let t;switch(e){case Ie.SESSION:t=_t;break;case Ie.LOCAL:t=await je(or)._isAvailable()?or:Un;break;case Ie.NONE:t=Dt;break;default:return oe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ye(this._delegate,Ml(this._delegate))}signInWithCredential(e){return ye(this._delegate,Vr(this._delegate,e))}signInWithCustomToken(e){return ye(this._delegate,$l(this._delegate,e))}signInWithEmailAndPassword(e,t){return ye(this._delegate,Hl(this._delegate,e,t))}signInWithEmailLink(e,t){return ye(this._delegate,Jl(this._delegate,e,t))}signInWithPhoneNumber(e,t){return _n(this._delegate,Wc(this._delegate,e,t))}async signInWithPopup(e){return Ht(sn(),this._delegate,"operation-not-supported-in-this-environment"),ye(this._delegate,Yc(this._delegate,e,at))}async signInWithRedirect(e){return Ht(sn(),this._delegate,"operation-not-supported-in-this-environment"),await wn(this._delegate),nd(this._delegate,e,at)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Bl(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Nn.Persistence=Ie;function Es(r,e,t){let n=r;typeof r!="function"&&({next:n,error:e,complete:t}=r);const i=n;return{next:o=>i(o&&Xe.getOrCreate(o)),error:e,complete:t}}function Su(r,e){const t=_u(r,e);if(typeof self<"u"&&!t.includes(or)&&t.push(or),typeof window<"u")for(const n of[Un,_t])t.includes(n)||t.push(n);return t.includes(Dt)||t.push(Dt),t}/**
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
 */class Gn{constructor(){this.providerId="phone",this._delegate=new Nt(Bi(et.auth()))}static credential(e,t){return Nt.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Gn.PHONE_SIGN_IN_METHOD=Nt.PHONE_SIGN_IN_METHOD;Gn.PROVIDER_ID=Nt.PROVIDER_ID;/**
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
 */const Eu=b;class Cu{constructor(e,t,n=et.app()){var i;Eu((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new $c(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Pu="auth-compat";function Au(r){r.INTERNAL.registerComponent(new Zt(Pu,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Nn(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Tt.EMAIL_SIGNIN,PASSWORD_RESET:Tt.PASSWORD_RESET,RECOVER_EMAIL:Tt.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Tt.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Tt.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Tt.VERIFY_EMAIL}},EmailAuthProvider:lt,FacebookAuthProvider:Ve,GithubAuthProvider:qe,GoogleAuthProvider:We,OAuthProvider:Pt,SAMLAuthProvider:Er,PhoneAuthProvider:Gn,PhoneMultiFactorGenerator:Fi,RecaptchaVerifier:Cu,TwitterAuthProvider:Be,Auth:Nn,AuthCredential:$t,Error:ot}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(uu,hu)}Au(et);class Ru extends Or.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("React Component Crash caught:",e,t),this.setState({errorInfo:t});const n=document.getElementById("error-boundary");if(n){n.classList.remove("hidden");const i=document.getElementById("error-message");i&&(i.textContent+=(i.textContent?`
`:"")+"React Crash: "+e.message+`
`+e.stack)}}render(){return this.state.hasError?null:this.props.children}}const Ou={apiKey:"AIzaSyAtyWN_UDd6Ld4O16cnc8lwmRJ4Gj_Tnbs",authDomain:"crispy-chick-kgf.firebaseapp.com",projectId:"crispy-chick-kgf",storageBucket:"crispy-chick-kgf.firebasestorage.app",messagingSenderId:"814260005387",appId:"1:814260005387:web:178c90ae92714ac955750e"};et.apps.length||et.initializeApp(Ou);const V=et.firestore(),Kn=r=>V.collection("orders").onSnapshot(e=>{const t=[];e.forEach(n=>{t.push({id:n.id,...n.data()})}),t.sort((n,i)=>(i.createdAt||0)-(n.createdAt||0)),r(t)},e=>{console.error("Orders listener error:",e)}),Du=async r=>{const e=Math.floor(1e3+Math.random()*9e3).toString(),t={...r,createdAt:Date.now(),placementTime:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),displayId:e,status:"pending",timestamp:et.firestore.FieldValue.serverTimestamp()},n=await V.collection("orders").add(t);try{qu(t,n.id)}catch(i){console.error("Telegram notification failed (non-fatal):",i)}return{...t,id:n.id}},Rt=async(r,e,t={})=>{await V.collection("orders").doc(r).update({status:e,...t})},Lu=r=>V.collection("settings").doc("global").onSnapshot(e=>{e.exists?r(e.data()):r({onlineOrderingWindow:!0})},e=>{console.error("Settings listener error:",e)}),Mu=async r=>{await V.collection("settings").doc("global").set(r,{merge:!0})},Fu=r=>/^\d{10}$/.test(String(r||"").trim()),Uu=r=>Fu(r)?!0:(window.alert("Please enter a valid 10-digit phone number"),!1),$u=r=>/^[A-Za-z\s]+$/.test(String(r||"").trim()),Vu=r=>$u(r)?!0:(window.alert("Please enter a valid name using only letters"),!1),Wu=r=>r&&r.gpsLat!=null&&r.gpsLng!=null?`https://www.google.com/maps/search/?api=1&query=${r.gpsLat},${r.gpsLng}`:`https://www.google.com/maps/dir/?api=1&origin=Crispy+Chick+KGF&destination=${encodeURIComponent(r&&r.landmarks||"")}`,qu=(r,e)=>{const t=localStorage.getItem("telegram_bot_token"),n=localStorage.getItem("telegram_chat_id");if(!t||!n)return;const i=r.items.map(o=>`${o.name} (x${o.quantity})`).join(", "),a=`*New Order Placed!*
• Order ID: \`${e}\`
• Customer: ${r.customerName}
• Phone: ${r.customerPhone}
• Landmarks: ${r.landmarks}
• Items: ${i}
• Total: ₹${r.totalAmount}
• Delivery OTP: *${r.otp}*`;fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:n,text:a,parse_mode:"Markdown"})}).catch(o=>console.error("Telegram notify fail",o))};let Gt=null,$e=null;const Cs=r=>{if(!r){Gt&&(clearInterval(Gt),Gt=null);return}if(Gt)return;$e||($e=new(window.AudioContext||window.webkitAudioContext));const e=()=>{if(!$e)return;$e.state==="suspended"&&$e.resume();const t=$e.currentTime;for(let n=0;n<3;n++){const i=t+n*.85,a=$e.createOscillator(),o=$e.createOscillator(),c=$e.createGain();a.type="square",a.frequency.setValueAtTime(880,i),a.frequency.exponentialRampToValueAtTime(660,i+.35),o.type="sine",o.frequency.setValueAtTime(1320,i),o.frequency.exponentialRampToValueAtTime(990,i+.35),c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.85,i+.02),c.gain.setValueAtTime(.85,i+.25),c.gain.exponentialRampToValueAtTime(.001,i+.55),a.connect(c),o.connect(c),c.connect($e.destination),a.start(i),a.stop(i+.6),o.start(i),o.stop(i+.6)}};e(),Gt=setInterval(e,3200)},Rr={"Fried Chicken":[{name:"Crispy Fried Chicken (1pc)",price:55,image:"fried_chicken.png",isVeg:!1,desc:"Crisp golden skin, juicy tender chicken inside",badge:"Bestseller"},{name:"Crunchy Masala Fried Chicken (1Leg pc)",price:50,image:"fried_chicken.png",isVeg:!1,desc:"Marinated with aromatic spicy Indian masalas",badge:"Chef's Special"},{name:"Chicken Lolly Pop (3pcs)",price:55,image:"fried_chicken.png",isVeg:!1,desc:"Classic fried chicken drumettes with spicy tang"},{name:"Mini Bucket Fried Chicken (4pcs)",price:200,image:"fried_chicken.png",isVeg:!1,desc:"4 crispy pieces perfect for quick sharing",badge:"Hot Deal"},{name:"Bucket Fried Chicken (8pcs)",price:400,image:"fried_chicken.png",isVeg:!1,desc:"8 juicy jumbo crispy chicken pieces bucket",badge:"Family Feast"},{name:"Hot Chicken Wings (3pcs)",price:55,image:"fried_chicken.png",isVeg:!1,desc:"Tossed in fiery hot crispy glaze"},{name:"Chicken Nuggets (6pcs)",price:60,image:"fried_chicken.png",isVeg:!1,desc:"Bite-sized minced chicken crunch nuggets"},{name:"Chicken Strips (3pcs)",price:60,image:"fried_chicken.png",isVeg:!1,desc:"100% boneless breast chicken fillets"},{name:"Spicy Peri-Peri Wings (4pcs)",price:65,image:"fried_chicken.png",isVeg:!1,desc:"Extra crunchy seasoned wings"}],"Fresh Pizzas":[{name:"Crispy Chicken Tikka Pizza",price:160,image:"burger.png",isVeg:!1,desc:"Spiced chicken tikka, onions, capsicum & mozzarella",badge:"Bestseller"},{name:"Classic Margherita Pizza",price:120,image:"burger.png",isVeg:!0,desc:"Rich tomato sauce with 100% molten mozzarella cheese"},{name:"BBQ Smoked Chicken Pizza",price:175,image:"burger.png",isVeg:!1,desc:"Smokey BBQ shredded chicken with melted cheese blend",badge:"Must Try"},{name:"Cheesy Paneer Delight Pizza",price:145,image:"burger.png",isVeg:!0,desc:"Marinated spiced paneer cubes with sweet corn & paprika"},{name:"Farmhouse Veggie Supreme Pizza",price:135,image:"burger.png",isVeg:!0,desc:"Loaded with capsicum, onion, tomato & mushrooms"},{name:"Spicy Peri-Peri Chicken Pizza",price:165,image:"burger.png",isVeg:!1,desc:"Peri-peri seasoned chicken chunks with spicy kick"}],"Veg Burgers":[{name:"Paneer Tikka Burger",price:75,image:"burger.png",isVeg:!0,desc:"Crispy fried paneer patty with creamy mayo & lettuce",badge:"Bestseller"},{name:"Deluxe Veggie Burger",price:40,image:"burger.png",isVeg:!0,desc:"Herbed vegetable patty with tomato slices & sauces"},{name:"Crispy Corn & Cheese Burger",price:55,image:"burger.png",isVeg:!0,desc:"Sweet corn and molten cheese crunch patty",badge:"Chef Pick"},{name:"Spicy Aloo Crunch Burger",price:35,image:"burger.png",isVeg:!0,desc:"Golden spiced potato patty with mint mayo"},{name:"Mushroom Melt Burger",price:65,image:"burger.png",isVeg:!0,desc:"Sauteed mushrooms with melted cheese slice"}],"Non-Veg Burgers":[{name:"Crispy Chicken Burger",price:40,image:"burger.png",isVeg:!1,desc:"Juicy chicken patty with house sauce in toasted bun"},{name:"Crunchy Zinger Burger",price:50,image:"burger.png",isVeg:!1,desc:"Crispy fried whole chicken fillet burger",badge:"Bestseller"},{name:"Double Chicken Patty Burger",price:70,image:"burger.png",isVeg:!1,desc:"Double patty overloaded with melted cheese"},{name:"Smokey BBQ Chicken Burger",price:65,image:"burger.png",isVeg:!1,desc:"Grilled patty glazed with hickory BBQ sauce"},{name:"Pizza Herb Chicken Burger",price:70,image:"burger.png",isVeg:!1,desc:"Infused with pizza herbs, marinara & cheese melt"},{name:"Mutton Royal Burger",price:85,image:"burger.png",isVeg:!1,desc:"Juicy minced mutton patty with grilled onions",badge:"Premium"}],"Side Orders":[{name:"French Fries (Salted)",price:40,image:"fries.png",isVeg:!0,desc:"Classic salted golden crispy potato fries",badge:"Popular"},{name:"Peri-Peri Spicy Fries",price:50,image:"fries.png",isVeg:!0,desc:"Tossed in fiery African peri-peri spice dust"},{name:"Cheese Loaded Fries",price:65,image:"fries.png",isVeg:!0,desc:"Crispy fries smothered in warm cheese sauce",badge:"Hot"},{name:"Smiley Potato Bites (5pcs)",price:40,image:"fries.png",isVeg:!0,desc:"Golden fried smiley potato treats"},{name:"Veg Nuggets (6pcs)",price:40,image:"fried_chicken.png",isVeg:!0,desc:"Crispy seasoned vegetable bites"},{name:"Chicky Sticks (4pcs)",price:40,image:"fried_chicken.png",isVeg:!1,desc:"Fried chicken sticks with savory dipping spices"},{name:"Chicken Popcorn Crunch",price:75,image:"fried_chicken.png",isVeg:!1,desc:"Bite-sized crunchy popping chicken rocks",badge:"Favorite"}],"Add-ons":[{name:"Smoothies (Mango/Berry)",price:40,image:"drink.png",isVeg:!0,desc:"Chilled rich blended fruit smoothie",badge:"Refreshing"},{name:"Cokefloat Classic",price:30,image:"drink.png",isVeg:!0,desc:"Chilled Coca-Cola with vanilla scoop float"},{name:"Chilled Soft Drink (Can)",price:35,image:"drink.png",isVeg:!0,desc:"300ml chilled beverage can"},{name:"Extra Cheddar Cheese Slice",price:10,image:"drink.png",isVeg:!0,desc:"Extra melted cheddar cheese slice"},{name:"Creamy Garlic Mayo Dip",price:10,image:"drink.png",isVeg:!0,desc:"Creamy garlic mayonnaise dip cup"},{name:"Spicy Tandoori Dip",price:10,image:"drink.png",isVeg:!0,desc:"Tangy smoky tandoori sauce dip"}]},Bu={"Fried Chicken":{icon:"🍗",label:"Fried Chicken"},"Fresh Pizzas":{icon:"🍕",label:"Fresh Pizzas"},"Non-Veg Burgers":{icon:"🍔",label:"Non-Veg Burgers"},"Veg Burgers":{icon:"🌱",label:"Veg Burgers"},"Side Orders":{icon:"🍟",label:"Sides & Fries"},"Add-ons":{icon:"🥤",label:"Drinks & Dips"}},zu=[{email:"owner@crispychick.com",password:"OwnerPassKGFcode77",role:"OWNER_COUNTER"},{email:"rider@crispychick.com",password:"RiderPassKGFcode88",role:"DELIVERY_RIDER"}],Hu=["./assets/banner1.jpg","./assets/banner2.jpg","./assets/banner3.jpg"],ve=new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");ve.loop=!0;const Jn=()=>{try{new Audio("https://assets.mixkit.co/active_storage/sfx/911/911-preview.mp3").play().catch(e=>console.warn("Audio playback blocked or failed:",e))}catch{}},Fe=u.createContext(),xr=u.createContext(),Gu=({children:r})=>{const[e,t]=u.useState(null),[n,i]=u.useState(null),[a,o]=u.useState(!0);u.useEffect(()=>{(()=>{const g=localStorage.getItem("cc_operator_auth_token"),m=localStorage.getItem("cc_logistics_auth_token");t(g?JSON.parse(g):null),i(m?JSON.parse(m):null),o(!1)})()},[]);const c=async(h,g)=>{const m=zu.find(y=>y.email.toLowerCase()===h.toLowerCase()&&y.password===g);if(m){const y={email:m.email,role:m.role};return m.role==="OWNER_COUNTER"?(localStorage.setItem("cc_operator_auth_token",JSON.stringify(y)),t(y)):m.role==="DELIVERY_RIDER"&&(localStorage.setItem("cc_logistics_auth_token",JSON.stringify(y)),i(y)),y}else throw new Error("Invalid authorized email or password.")},l=async()=>{const h=window.location.hash;h==="#/shop-counter"?(localStorage.removeItem("cc_operator_auth_token"),t(null)):h==="#/delivery-dashboard"&&(localStorage.removeItem("cc_logistics_auth_token"),i(null)),setTimeout(()=>{window.location.hash="#/login"},100)};return s.jsx(xr.Provider,{value:{ownerUser:e,riderUser:n,loadingAuth:a,login:c,signOut:l},children:r})},Ku=({children:r})=>{const[e,t]=u.useState([]),[n,i]=u.useState(!0),[a,o]=u.useState([]),[c,l]=u.useState(()=>localStorage.getItem("crispy_theme_settings")||"dark"),[h,g]=u.useState(()=>{const N=localStorage.getItem("cc_customer_name"),j=localStorage.getItem("cc_customer_phone");return N&&j?{name:N,phone:j}:null}),[m,y]=u.useState(()=>{try{const N=localStorage.getItem("cc_customer_active_order_ids");return N?JSON.parse(N):[]}catch{return[]}}),L=N=>{const j=Array.isArray(N)?N:[];y(j),j.length>0?localStorage.setItem("cc_customer_active_order_ids",JSON.stringify(j)):localStorage.removeItem("cc_customer_active_order_ids"),window.dispatchEvent(new Event("storage"))},M=N=>{N&&y(j=>{const C=j.includes(N)?j:[...j,N];return localStorage.setItem("cc_customer_active_order_ids",JSON.stringify(C)),C}),window.dispatchEvent(new Event("storage"))},[B,R]=u.useState(()=>{const N=localStorage.getItem("crispy_menu_settings");return N?JSON.parse(N):{gstRate:5,deliveryFee:30,items:{}}}),[z,S]=u.useState(()=>localStorage.getItem("crispy_carousel_banner_url")||"");u.useEffect(()=>{const N=Lu(T=>{i(T.onlineOrderingWindow!==!1)}),j=()=>{const T=localStorage.getItem("crispy_menu_settings");T&&R(JSON.parse(T));const $=localStorage.getItem("crispy_carousel_banner_url");$!==null&&S($);const le=localStorage.getItem("crispy_theme_settings");le&&l(le);const Oe=localStorage.getItem("cc_customer_active_order_ids");try{y(Oe?JSON.parse(Oe):[])}catch{y([])}const De=localStorage.getItem("cc_customer_name"),Te=localStorage.getItem("cc_customer_phone");g(De&&Te?{name:De,phone:Te}:null)};window.addEventListener("storage",j);const C=V.collection("settings").doc("menuConfig").onSnapshot(T=>{if(T.exists){const $=T.data();R(le=>JSON.stringify(le)!==JSON.stringify($)?(localStorage.setItem("crispy_menu_settings",JSON.stringify($)),$):le)}},T=>console.error("menuConfig listener error:",T));return()=>{typeof N=="function"&&N(),typeof C=="function"&&C(),window.removeEventListener("storage",j)}},[]);const ue=N=>{R(N),localStorage.setItem("crispy_menu_settings",JSON.stringify(N)),window.dispatchEvent(new Event("storage")),V.collection("settings").doc("menuConfig").set(N,{merge:!0}).catch(j=>console.error("menuConfig push failed:",j))},U=N=>{S(N),localStorage.setItem("crispy_carousel_banner_url",N),window.dispatchEvent(new Event("storage"))},he=()=>{const N=c==="dark"?"light":"dark";l(N),localStorage.setItem("crispy_theme_settings",N),window.dispatchEvent(new Event("storage"))},te=N=>{t(j=>j.find(T=>T.name===N.name)?j.map(T=>T.name===N.name?{...T,quantity:T.quantity+1}:T):[...j,{...N,quantity:1}])},pe=N=>{t(j=>j.filter(C=>C.name!==N))},ie=(N,j)=>{t(C=>C.map(T=>{if(T.name===N){const $=T.quantity+j;return $>0?{...T,quantity:$}:T}return T}).filter(T=>T.quantity>0))},we=()=>t([]),[ne,Re]=u.useState({lat:null,lng:null}),_e=(N,j)=>{const C=B.items[N];return C&&C.price!==void 0?Number(C.price):j},me=N=>{const j=B.items[N];return j&&j.available!==void 0?j.available:!0},fe=e.reduce((N,j)=>N+j.quantity,0),J=e.reduce((N,j)=>{const C=_e(j.name,j.price);return N+C*j.quantity},0),_=Math.round(J*(B.gstRate/100)),E=Number(B.deliveryFee||0),q=J>0?J+_+E:0;return s.jsx(Fe.Provider,{value:{tray:e,addToTray:te,removeFromTray:pe,changeQty:ie,clearTray:we,isOpenOrdering:n,setIsOpenOrdering:i,trayCount:fe,traySubtotal:J,gstAmount:_,trayTotal:q,floatingItems:a,setFloatingItems:o,theme:c,toggleTheme:he,menuSettings:B,updateMenuSettings:ue,getActivePrice:_e,getActiveAvailability:me,carouselBannerUrl:z,updateCarouselBannerUrl:U,activeOrderIds:m,updateActiveOrderIds:L,updateActiveOrderId:M,currentUser:h,setCurrentUser:g,customerGps:ne,setCustomerGps:Re,deliveryFee:E},children:r})},Ju=({onSignInClick:r,onProfileClick:e})=>{const{theme:t,toggleTheme:n,currentUser:i}=u.useContext(Fe);return u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[t,i]),s.jsxs("header",{className:`flex items-center justify-between px-4 sm:px-6 py-3 sticky top-0 z-30 transition-colors duration-300 backdrop-blur-md ${t==="light"?"bg-white/95 border-b border-red-100 shadow-sm":"bg-cafe-card/95 border-b border-neutral-800 shadow-md"}`,children:[s.jsxs("div",{className:"flex items-center space-x-2.5 sm:space-x-3 min-w-0",children:[s.jsx("img",{src:"./logo_rm_bg.png",className:"h-10 sm:h-11 w-auto object-contain flex-shrink-0 drop-shadow-sm",alt:"Crispy Chick Logo"}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h1",{className:`font-sans font-black text-base sm:text-lg tracking-tight flex items-center whitespace-nowrap leading-none transition-colors duration-300 ${t==="light"?"text-red-600":"text-white"}`,children:"Crispy Chick"}),s.jsx("span",{className:`text-[9.5px] font-bold uppercase tracking-wider block mt-0.5 ${t==="light"?"text-slate-400":"text-neutral-400"}`,children:"Taste The Real Crunch"})]})]}),s.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0",children:[s.jsxs("button",{onClick:n,className:`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 ${t==="dark"?"bg-neutral-850 border-neutral-800 text-amber-400 hover:text-white":"bg-red-50/80 border-red-100 text-red-600 hover:bg-red-100 shadow-sm"}`,title:"Toggle theme",children:[s.jsx("i",{"data-lucide":"sun",className:t==="dark"?"w-4 h-4 block":"hidden"}),s.jsx("i",{"data-lucide":"moon",className:t==="light"?"w-4 h-4 block":"hidden"})]}),s.jsxs("button",{onClick:i?e:r,className:`text-xs font-black px-3.5 py-2 rounded-xl border transition-all duration-300 flex items-center space-x-1.5 shadow-sm active:scale-95 ${t==="dark"?"bg-neutral-850 border-neutral-800 text-red-400 hover:text-white":"bg-gradient-to-r from-red-600 to-rose-600 text-white border-transparent hover:brightness-110 shadow-red-500/20"}`,title:i?`Profile: ${i.name}`:"Sign In",children:[s.jsx("i",{"data-lucide":i?"user-circle":"log-in",className:"w-3.5 h-3.5"}),s.jsx("span",{children:i?"Hi, "+(i.name?i.name.split(" ")[0]:i.phone):"Sign In"})]})]})]})},Yu=()=>{const{theme:r}=u.useContext(Fe),e=Hu.map(i=>({type:"image",url:i})),[t,n]=u.useState(0);return u.useEffect(()=>{const i=setInterval(()=>{n(a=>(a+1)%e.length)},4e3);return()=>clearInterval(i)},[e.length]),s.jsx("div",{className:"px-3.5 sm:px-4 pt-2 pb-1",children:s.jsxs("div",{className:`rounded-xl border transition-all duration-300 relative overflow-hidden aspect-[16/4.5] max-h-[92px] flex items-center justify-center shadow-xs ${r==="light"?"bg-slate-100 border-slate-200 shadow-slate-200/40":"bg-neutral-900 border-neutral-800 shadow-black/40"}`,children:[e.map((i,a)=>s.jsx("img",{src:i.url,className:`w-full h-full object-cover aspect-[16/4.5] absolute inset-0 transition-opacity duration-500 ${a===t?"opacity-100 block":"opacity-0 hidden"}`,alt:`Promo Banner ${a+1}`,onError:o=>{o.target.style.display="none"}},i.url)),s.jsx("div",{className:"absolute bottom-1.5 left-0 right-0 flex justify-center space-x-1.5 z-10",children:e.map((i,a)=>s.jsx("span",{className:`h-1 rounded-full transition-all duration-300 ${a===t?"bg-red-600 w-3.5 shadow-xs":"bg-white/70 w-1"}`},a))})]})})},Qu=({activeCategory:r,setActiveCategory:e})=>{const{theme:t}=u.useContext(Fe),n=Object.keys(Rr);return s.jsx("div",{className:`flex overflow-x-auto py-2 px-3.5 sm:px-4 space-x-2 no-scrollbar scroll-smooth sticky top-[53px] z-20 backdrop-blur-md transition-colors duration-300 ${t==="light"?"border-b border-red-50 bg-white/95 shadow-xs":"border-b border-neutral-900/80 bg-cafe-black/95 shadow-xs"}`,children:n.map(i=>{const a=r===i,o=Bu[i]||{icon:"🍽️",label:i};return s.jsxs("button",{onClick:()=>e(i),className:`px-3 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 select-none ${a?"bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-xs scale-102 ring-1 ring-red-500/20":t==="light"?"bg-slate-100/80 text-slate-700 hover:text-red-600 hover:bg-red-50 border border-slate-200/80":"bg-cafe-card text-neutral-400 hover:text-white border border-neutral-800"}`,children:[s.jsx("span",{className:"text-xs",children:o.icon}),s.jsx("span",{children:o.label})]},i)})})},Xu=({product:r,onAdd:e,categoryName:t})=>{const{theme:n,getActivePrice:i,getActiveAvailability:a,tray:o,changeQty:c}=u.useContext(Fe),l=i(r.name,r.price),h=a(r.name),g=(o||[]).find(L=>L.name===r.name),m=g?g.quantity:0,y=r.isVeg===!0;return s.jsxs("div",{className:`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl p-3.5 sm:p-4 relative ${h?"hover:-translate-y-0.5":"opacity-55 grayscale"} ${n==="light"?"bg-white border-slate-100 hover:border-red-200 hover:shadow-red-500/10":"bg-neutral-900 border-neutral-800/90 hover:border-red-900/50"}`,children:[s.jsxs("div",{className:"flex items-center justify-between w-full mb-1 z-10",children:[s.jsx("div",{className:"flex items-center bg-white/95 dark:bg-black/90 backdrop-blur-sm p-1 rounded-md shadow-xs border border-slate-200/80 dark:border-neutral-700",children:s.jsx("span",{className:`w-2.5 h-2.5 rounded-xs border flex items-center justify-center ${y?"border-emerald-600":"border-red-600"}`,children:s.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${y?"bg-emerald-600":"bg-red-600"}`})})}),r.badge?s.jsx("span",{className:"bg-gradient-to-r from-red-600 to-rose-600 text-white text-[8.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs",children:r.badge}):s.jsx("span",{})]}),s.jsx("div",{className:"relative w-full h-24 sm:h-28 flex items-center justify-center my-1.5",children:s.jsx("img",{src:r.image,className:"w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-400 ease-out",alt:r.name,onError:L=>{L.target.src=y?"burger.png":"fried_chicken.png"}})}),s.jsxs("div",{className:"flex flex-col flex-1 justify-between mt-1",children:[s.jsxs("div",{children:[s.jsx("h3",{className:`font-bold text-[13px] sm:text-sm leading-snug group-hover:text-red-600 transition-colors line-clamp-1 ${n==="light"?"text-slate-900":"text-white"}`,title:r.name,children:r.name}),r.desc&&s.jsx("p",{className:`text-[11px] font-normal leading-tight mt-0.5 line-clamp-1 ${n==="light"?"text-slate-500":"text-neutral-400"}`,children:r.desc})]}),s.jsxs("div",{className:"flex items-center justify-between pt-3 mt-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:`text-[9px] block font-bold uppercase tracking-wider ${n==="light"?"text-slate-400":"text-neutral-500"}`,children:"Price"}),s.jsxs("span",{className:`text-sm sm:text-base font-extrabold ${n==="light"?"text-slate-900":"text-white"}`,children:["₹",l]})]}),h?m>0?s.jsxs("div",{className:"flex items-center space-x-1.5 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800/50 rounded-xl p-1 shadow-xs",children:[s.jsx("button",{onClick:()=>c(r.name,-1),className:"w-6 h-6 rounded-lg bg-white dark:bg-neutral-800 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs transition shadow-xs",children:"-"}),s.jsx("span",{className:"font-sans font-bold text-xs text-red-600 px-1 min-w-[12px] text-center",children:m}),s.jsx("button",{onClick:()=>c(r.name,1),className:"w-6 h-6 rounded-lg bg-red-600 text-white hover:bg-red-700 flex items-center justify-center font-black text-xs transition shadow-xs",children:"+"})]}):s.jsx("button",{onClick:L=>e(L,r),className:"px-3.5 py-1.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1 font-bold text-xs bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-red-500/20 active:scale-95",children:s.jsx("span",{children:"+ ADD"})}):s.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 px-2 py-1 rounded-lg",children:"Sold Out"})]})]})]})},Zu=({onCheckoutTrigger:r})=>{const{tray:e,changeQty:t,trayCount:n,traySubtotal:i,gstAmount:a,trayTotal:o,removeFromTray:c,theme:l,getActivePrice:h,menuSettings:g,deliveryFee:m}=u.useContext(Fe),[y,L]=u.useState(!1);return u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[y,e,l]),s.jsxs("div",{className:e.length>0?"block":"hidden",children:[s.jsx("div",{className:y?"fixed inset-0 bg-black/75 z-40 transition-opacity duration-300 backdrop-blur-sm block":"hidden",onClick:()=>L(!1)}),s.jsxs("div",{className:`fixed bottom-0 left-0 right-0 max-w-md mx-auto rounded-t-3xl border-t z-50 p-4 transition-all duration-500 transform shadow-2xl ${l==="light"?"bg-gradient-to-b from-red-600 via-red-700 to-red-800 border-red-500 text-white":"bg-gradient-to-b from-red-800 via-red-900 to-neutral-950 border-red-700 text-white"} ${y?"translate-y-0":"translate-y-[calc(100%-74px)]"}`,children:[s.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-red-500/40 cursor-pointer select-none",onClick:()=>L(!y),children:[s.jsxs("div",{className:"flex items-center space-x-2.5",children:[s.jsx("span",{className:"text-2xl animate-bounce-slow",children:"🍗"}),s.jsxs("div",{children:[s.jsxs("h3",{className:"font-black text-white tracking-wide text-xs sm:text-sm flex items-center",children:["YOUR FOOD TRAY",s.jsxs("span",{className:"ml-2 bg-white text-red-600 rounded-full px-2 py-0.5 text-[11px] font-black shadow-md",children:[n," ",n===1?"item":"items"]})]}),s.jsx("p",{className:"text-[10px] text-red-100 font-semibold",children:y?"Tap to close tray":"Tap to review items & bill details"})]})]}),s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsxs("span",{className:"text-lg sm:text-xl font-black text-white font-sans",children:["₹",o]}),s.jsx("i",{"data-lucide":y?"chevron-down":"chevron-up",className:"w-5 h-5 text-white"})]})]}),s.jsx("div",{className:y?"max-h-[220px] overflow-y-auto py-3 space-y-2.5 no-scrollbar border-b border-red-500/40 block":"hidden",children:e.map(M=>{const B=h(M.name,M.price);return s.jsxs("div",{className:"flex items-center justify-between bg-red-950/40 p-2.5 rounded-xl border border-red-500/25",children:[s.jsxs("div",{className:"flex-1 flex items-center space-x-2.5 min-w-0 pr-2",children:[s.jsx("img",{src:M.image,className:"w-9 h-9 object-cover rounded-lg border border-red-400/30 flex-shrink-0",alt:""}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h4",{className:"font-bold text-white text-xs leading-tight truncate",children:M.name}),s.jsxs("span",{className:"text-[11px] text-red-200 font-medium",children:["₹",B," each"]})]})]}),s.jsxs("div",{className:"flex items-center space-x-2 flex-shrink-0",children:[s.jsx("button",{onClick:()=>t(M.name,-1),className:"w-6 h-6 rounded-lg bg-red-800/80 hover:bg-red-600 flex items-center justify-center font-black text-white transition text-xs",children:"-"}),s.jsx("span",{className:"text-white font-black font-sans text-xs min-w-[12px] text-center",children:M.quantity}),s.jsx("button",{onClick:()=>t(M.name,1),className:"w-6 h-6 rounded-lg bg-red-800/80 hover:bg-red-600 flex items-center justify-center font-black text-white transition text-xs",children:"+"}),s.jsx("button",{onClick:()=>c(M.name),className:"ml-1 text-red-300 hover:text-white transition",title:"Remove item",children:s.jsx("i",{"data-lucide":"trash-2",className:"w-4 h-4"})})]})]},M.name)})}),s.jsxs("div",{className:y?"py-2.5 text-[11px] text-red-100 font-medium space-y-1 block":"hidden",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Subtotal:"}),s.jsxs("span",{className:"font-bold text-white",children:["₹",i]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("span",{children:["GST Surcharge (",g.gstRate,"%):"]}),s.jsxs("span",{className:"font-bold text-white",children:["₹",a]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Delivery Fee:"}),s.jsxs("span",{className:"font-bold text-white",children:["₹",m]})]})]}),s.jsx("div",{className:"pt-2",children:s.jsxs("button",{onClick:r,className:"w-full py-3.5 bg-white hover:bg-slate-100 text-red-600 font-black text-center rounded-xl shadow-lg hover:shadow-xl active:scale-98 transition-all tracking-wider text-xs sm:text-sm flex items-center justify-center space-x-2",children:[s.jsxs("span",{children:["PROCEED TO CHECKOUT (₹",o,")"]}),s.jsx("i",{"data-lucide":"arrow-right",className:"w-4 h-4 text-red-600 stroke-[3]"})]})})]})]})},eh=({isOpen:r,onClose:e,onOrderSuccess:t})=>{const{trayTotal:n,traySubtotal:i,gstAmount:a,tray:o,clearTray:c,theme:l,menuSettings:h,updateActiveOrderId:g,currentUser:m,setCurrentUser:y,customerGps:L,setCustomerGps:M,deliveryFee:B}=u.useContext(Fe),[R,z]=u.useState(()=>(m==null?void 0:m.name)||localStorage.getItem("cc_customer_name")||""),[S,ue]=u.useState(()=>(m==null?void 0:m.phone)||localStorage.getItem("cc_customer_phone")||""),[U,he]=u.useState(()=>localStorage.getItem("cc_customer_landmarks")||""),[te,pe]=u.useState(""),[ie,we]=u.useState(""),[ne,Re]=u.useState(""),[_e,me]=u.useState([]),[fe,J]=u.useState(""),[_,E]=u.useState(!1),[q,N]=u.useState(""),[j,C]=u.useState(""),[T,$]=u.useState(""),[le,Oe]=u.useState(""),[De,Te]=u.useState(!1),[Ge,jt]=u.useState(!1),[ge,Y]=u.useState(!1),[Se,Ue]=u.useState("info"),[d,x]=u.useState(""),[w,I]=u.useState(!1),[O,Ee]=u.useState(!1),[ce,Ke]=u.useState(!1),[P,X]=u.useState(""),[Ne,Le]=u.useState(""),[Ce,Je]=u.useState(""),[ct,Z]=u.useState(""),[Yn,Gr]=u.useState(""),[Qn,dt]=u.useState(""),[ut,ht]=u.useState(!1),[pt,br]=u.useState(""),[Xn,Kr]=u.useState(""),[Jr,Yr]=u.useState("KGF"),[Qr,mt]=u.useState(!1),vr=["563122","563113","563120","563115","563117","563116"],yr=k=>/^[6-9]\d{9}$/.test(k),p=k=>new Set(k.split("")).size===1||k==="1234567890"||k==="9876543210",f=!!(m||localStorage.getItem("cc_customer_name")&&localStorage.getItem("cc_customer_phone"));u.useEffect(()=>{if(!r)z((m==null?void 0:m.name)||localStorage.getItem("cc_customer_name")||""),ue((m==null?void 0:m.phone)||localStorage.getItem("cc_customer_phone")||""),he(localStorage.getItem("cc_customer_landmarks")||""),pe(""),we(""),Re(""),M({lat:null,lng:null}),Te(!1),jt(!1),x(""),Ue("info"),Y(!1),Ee(!1),I(!1),Ke(!1),Le(""),Je(""),Z(""),X(""),Gr(""),dt(""),ht(!1),br(""),Kr(""),Yr("KGF"),mt(!1),me([]),J(""),E(!1),N(""),C(""),$(""),Oe("");else{setTimeout(()=>I(!0),50);const k=(m==null?void 0:m.phone)||localStorage.getItem("cc_customer_phone");k&&V.collection("users").doc(k).get().then(D=>{if(D.exists){const A=D.data();if(A.addresses&&Array.isArray(A.addresses)&&A.addresses.length>0)me(A.addresses),J(A.addresses[0].id);else if(A.addressDetails||A.pinCode){const de=[{id:"default",title:"Registered Address",addressDetails:A.addressDetails||"",landmark:A.landmark||"",pinCode:A.pinCode||""}];me(de),J("default")}}}).catch(()=>{})}window.lucide&&window.lucide.createIcons()},[r,m]);const v=()=>{Ee(!0),setTimeout(()=>{e()},280)};u.useEffect(()=>{if(!r||!navigator.geolocation)return;Te(!0);const k=navigator.geolocation.watchPosition(D=>{M({lat:D.coords.latitude,lng:D.coords.longitude}),jt(!0),Te(!1)},D=>{Te(!1),console.warn("GPS watchPosition error:",D.message)},{enableHighAccuracy:!0,maximumAge:0,timeout:1e4});return()=>{navigator.geolocation.clearWatch(k)}},[r]);const W=()=>{try{new Audio("https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3").play().catch(()=>{})}catch{}},ke=()=>{const k=Math.floor(1e5+Math.random()*9e5).toString();Je(k),Le(""),Z(""),ht(!1),Y(!1),W(),mt(!0)},ft=()=>{Le(""),Z(""),Y(!0),setTimeout(ke,2500)},Xr=async k=>{if(k.preventDefault(),Ce&&!f){if(!Ne||Ne.length!==6){Z("Enter the full 6-digit code.");return}if(Ne.trim()!==Ce){Z("Incorrect code. Please check and try again.");return}Z(""),Y(!0);try{const D=await V.collection("users").doc(S).get();if(D.exists){const A=D.data(),de=A.name||R;localStorage.setItem("cc_customer_name",de),localStorage.setItem("cc_customer_phone",S),y&&y({name:de,phone:S});let qt=null;A.addresses&&Array.isArray(A.addresses)&&A.addresses.length>0?qt=A.addresses[0]:(A.addressDetails||A.pinCode)&&(qt={addressDetails:A.addressDetails,landmark:A.landmark,pinCode:A.pinCode}),await Wt(de,S,qt)}else Ue("name")}catch(D){console.error("User lookup error:",D),Ue("name")}finally{Y(!1)}return}if(f){if(_e.length===0){Z("Please add a delivery address first.");return}const D=_e.find(A=>A.id===fe);if(!D){Z("Please select a delivery address.");return}if(te&&!Uu(te))return;await Wt((m==null?void 0:m.name)||R,(m==null?void 0:m.phone)||S,D);return}if(!R||!S||!P||!pt||!U||!ne){Z("Please fill in all required fields.");return}if(Vu(R)){if(!yr(S)){Z("Invalid number. Must be 10 digits starting with 6–9.");return}if(p(S)){Z("Looks like a fake number. Please use your real mobile number.");return}if(S!==P){Z("Phone numbers do not match. Please re-enter.");return}if(!vr.includes(ne.trim())){alert("Sorry, this PIN code is currently out of our delivery range!");return}Z(""),Y(!0),setTimeout(ke,2500)}},Wt=async(k,D,A=null)=>{if(localStorage.setItem("cc_customer_landmarks",U),o.length===0){Ue("success"),Y(!1);return}Y(!0);try{const de=D||((m==null?void 0:m.phone)||"").trim(),qt=A?A.addressDetails:pt,Hi=A?A.landmark:U,Gi=A?A.pinCode:ne,Ki={customerName:k||(m==null?void 0:m.name),customerPhone:de+(te?" / Alt: "+te.trim():""),addressDetails:qt,landmarks:Hi,deliveryArea:ie,deliveryPin:Gi,items:o,totalAmount:n,...L.lat!=null&&L.lng!=null?{gpsLat:L.lat,gpsLng:L.lng}:{}},Zr=await Du(Ki);x(Zr.otp),Ke(!0),c(),g(Zr.id),Jn(),Ue("success"),t&&t(Zr)}catch(de){console.error("Checkout error:",de),alert("Order failed: "+de.message)}finally{Y(!1)}};return s.jsxs("div",{className:`fixed inset-0 z-50 flex items-end justify-center p-4 transition-all duration-300 ${r?"block":"hidden"}`,children:[s.jsx("div",{className:`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 backdrop-blur-sm ${w&&!O?"opacity-100":"opacity-0"}`,onClick:v}),Qr&&s.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4",children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-center space-y-5",children:[s.jsx("button",{type:"button",onClick:()=>{mt(!1),Je(""),Le(""),Z("")},className:"absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition font-bold text-base leading-none","aria-label":"Close",children:"×"}),s.jsxs("div",{className:"space-y-1 pt-1",children:[s.jsx("div",{className:"text-3xl",children:"📦"}),s.jsx("h2",{className:"text-lg font-black text-slate-900 font-serif",children:"Delivery Verification Code"}),s.jsx("p",{className:"text-xs text-slate-500",children:"Enter the code below to confirm your identity"})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-amber-50 border-amber-200",children:[s.jsx("span",{className:"text-2xl font-black tracking-[0.35em] text-amber-600 select-all font-mono flex-1 text-center",children:Ce}),s.jsx("button",{type:"button",onClick:()=>{try{navigator.clipboard.writeText(Ce).then(()=>{ht(!0),setTimeout(()=>ht(!1),1500)}).catch(()=>{})}catch{}},className:`shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all border ${ut?"bg-emerald-50 text-emerald-600 border-emerald-300":"bg-white border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:ut?"Copied ✓":"Copy"})]}),ct&&s.jsx("div",{className:"text-[11px] text-red-500 font-bold bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-left",children:ct}),s.jsxs("div",{className:"text-left",children:[s.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-500",children:"Enter Code to Confirm"}),s.jsx("input",{type:"text",inputMode:"numeric",maxLength:"6",autoFocus:!0,placeholder:"• • • • • •",value:Ne,onChange:k=>Le(k.target.value.replace(/\D/g,"").slice(0,6)),className:"w-full border border-slate-300 rounded-xl px-4 py-4 text-2xl text-center tracking-[0.6em] font-black focus:outline-none focus:border-amber-500 bg-white text-slate-900"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{type:"button",disabled:ge,onClick:()=>{if(!Ne||Ne.length!==6){Z("Enter the full 6-digit code.");return}if(Ne.trim()!==Ce){Z("Incorrect code. Please try again.");return}Z(""),mt(!1),Y(!0),V.collection("users").doc(S).get().then(k=>{if(k.exists){const D=k.data(),A=D.name||R;localStorage.setItem("cc_customer_name",A),localStorage.setItem("cc_customer_phone",S),y&&y({name:A,phone:S});let de=null;D.addresses&&Array.isArray(D.addresses)&&D.addresses.length>0?de=D.addresses[0]:(D.addressDetails||D.pinCode)&&(de={addressDetails:D.addressDetails,landmark:D.landmark,pinCode:D.pinCode}),Wt(A,S,de)}else V.collection("users").doc(S).set({name:R,phone:S,addressDetails:pt,landmark:U,pinCode:ne,addresses:[{id:"default",title:"Home",addressDetails:pt,landmark:U,pinCode:ne}],verified:!1,createdAt:new Date}).then(()=>{localStorage.setItem("cc_customer_name",R),localStorage.setItem("cc_customer_phone",S),y&&y({name:R,phone:S}),Wt(R,S)}).catch(()=>{alert("Failed to register profile. Please try again."),Y(!1)})}).catch(()=>{alert("Network error."),Y(!1)})},className:"flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-sm",children:ge?s.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):"CONFIRM CODE →"}),s.jsx("button",{type:"button",disabled:ge,onClick:ft,className:"px-4 py-3.5 rounded-xl border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 font-extrabold text-xs transition-all disabled:opacity-60",children:ge?s.jsx("div",{className:"w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"}):"RESEND"})]}),s.jsx("button",{type:"button",onClick:()=>{mt(!1),Je(""),Le(""),Z("")},className:"w-full text-[11px] text-slate-400 hover:text-slate-600 font-semibold transition",children:"← Change Number"})]})}),s.jsxs("div",{className:`w-full max-w-md rounded-t-3xl border p-6 space-y-6 shadow-2xl z-50 max-h-[90vh] overflow-y-auto no-scrollbar transition-all duration-300 transform ${l==="light"?"bg-white border-slate-205 text-slate-900":"bg-cafe-card border-neutral-805 text-white"} ${w&&!O?"translate-y-0 opacity-100":"translate-y-full opacity-0"}`,children:[s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:Se==="success"?ce?"🎉 Order Placed!":"🎉 Profile Registered!":o.length===0?"👤 Profile Registration":"📋 Delivery Checkout"}),s.jsx("button",{onClick:v,className:`text-neutral-505 hover:text-white transition ${Se!=="success"?"block":"hidden"}`,children:s.jsx("i",{"data-lucide":"x",className:"w-5 h-5"})})]}),s.jsx("div",{className:Se==="info"?"block":"hidden",children:s.jsxs("form",{onSubmit:Xr,className:"space-y-4",children:[s.jsxs("div",{className:f?`p-3.5 rounded-xl border flex items-center justify-between text-xs ${l==="light"?"bg-slate-105 border-slate-200 text-slate-900":"bg-neutral-900 border-neutral-800 text-white"}`:"hidden",children:[s.jsxs("div",{children:[s.jsx("span",{className:"block text-[10px] text-neutral-450 font-bold uppercase tracking-wider",children:"Signed In User"}),s.jsx("span",{className:"font-bold text-sm text-cafe-amber",children:R}),s.jsxs("span",{className:"block text-[10.5px] text-neutral-400 mt-0.5",children:["Primary Phone: ",S]})]}),s.jsx("span",{className:"text-xl",children:"✅"})]}),s.jsxs("div",{className:f?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Customer Name ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"text",required:!f,placeholder:"Enter your full name",pattern:"[A-Za-z\\s]+",title:"Letters and spaces only",value:R,onChange:k=>z(k.target.value.replace(/[^A-Za-z\s]/g,"")),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:f?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"tel",required:!f,placeholder:"10-digit mobile (starts with 6–9)",maxLength:10,minLength:10,pattern:"[6-9][0-9]{9}",inputMode:"numeric",value:S,onChange:k=>ue(k.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:f?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Confirm Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"tel",required:!f,placeholder:"Re-enter mobile number",maxLength:10,minLength:10,pattern:"[6-9][0-9]{9}",inputMode:"numeric",value:P,onChange:k=>X(k.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"} ${P&&P!==S?"border-red-500":""}`}),P&&P!==S&&s.jsx("p",{className:"text-[10px] text-red-400 font-semibold mt-1",children:"⚠ Numbers don't match"})]}),s.jsxs("div",{className:f?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Address Details (House No, Building Name) ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"text",required:!f,placeholder:"E.g., #12, Mahalakshmi Towers",value:pt,onChange:k=>br(k.target.value),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:f?"block":"hidden",children:[s.jsx("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:"Alternate Phone Number (Optional)"}),s.jsx("input",{type:"tel",placeholder:"Enter 10-digit alternate number",maxLength:10,minLength:10,pattern:"[0-9]*",inputMode:"numeric",value:te,onChange:k=>pe(k.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:f?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Landmark ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("textarea",{required:!f,placeholder:"E.g., Near Geetha Canteen, 3rd Cross Road",value:U,onChange:k=>he(k.target.value),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber h-20 resize-none ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:f?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["PIN Code ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"text",required:!f,inputMode:"numeric",maxLength:"6",placeholder:"E.g., 563122",value:ne,onChange:k=>Re(k.target.value.replace(/\D/g,"").slice(0,6)),className:`w-full border rounded-xl px-4 py-3 text-sm text-center tracking-widest font-black focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-800 text-white"}`})]}),s.jsxs("div",{className:f?"block space-y-4":"hidden",children:[s.jsx("h4",{className:`text-sm font-bold ${l==="light"?"text-slate-800":"text-white"}`,children:"Select Delivery Address"}),_e.map(k=>s.jsxs("div",{onClick:()=>J(k.id),className:`relative p-4 rounded-xl border cursor-pointer transition-all ${fe===k.id?l==="light"?"bg-amber-50 border-amber-500 shadow-sm":"bg-cafe-amber/10 border-cafe-amber":l==="light"?"bg-white border-slate-200 hover:border-slate-300":"bg-cafe-black border-neutral-800 hover:border-neutral-700"}`,children:[s.jsx("button",{type:"button",onClick:D=>{D.stopPropagation();const A=_e.filter(de=>de.id!==k.id);me(A),fe===k.id&&J(A.length>0?A[0].id:""),V.collection("users").doc(S).update({addresses:A}).catch(()=>{})},className:`absolute top-3 right-3 p-1 rounded-full ${l==="light"?"hover:bg-slate-200 text-slate-400 hover:text-red-500":"hover:bg-neutral-800 text-neutral-500 hover:text-red-400"} transition`,children:s.jsx("i",{"data-lucide":"x",className:"w-4 h-4"})}),s.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[s.jsx("i",{"data-lucide":k.title.toLowerCase().includes("home")?"home":k.title.toLowerCase().includes("work")||k.title.toLowerCase().includes("office")?"briefcase":"map-pin",className:`w-4 h-4 ${fe===k.id?"text-cafe-amber":l==="light"?"text-slate-500":"text-neutral-400"}`}),s.jsx("span",{className:`font-bold text-xs uppercase tracking-wider ${fe===k.id?"text-cafe-amber":l==="light"?"text-slate-700":"text-neutral-300"}`,children:k.title})]}),s.jsx("p",{className:`text-xs mt-2 ${l==="light"?"text-slate-600":"text-neutral-400"}`,children:k.addressDetails}),s.jsxs("p",{className:`text-[11px] mt-1 ${l==="light"?"text-slate-500":"text-neutral-500"}`,children:["Landmark: ",k.landmark]}),s.jsxs("p",{className:`text-[11px] font-bold mt-1 ${l==="light"?"text-slate-700":"text-neutral-300"}`,children:["PIN: ",k.pinCode]})]},k.id)),_?s.jsxs("div",{className:`p-4 rounded-xl border space-y-3 ${l==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900 border-neutral-800"}`,children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("h5",{className:`text-xs font-bold uppercase tracking-wider ${l==="light"?"text-slate-700":"text-white"}`,children:"New Address"}),s.jsx("button",{type:"button",onClick:()=>E(!1),className:"text-neutral-500 hover:text-red-400",children:s.jsx("i",{"data-lucide":"x",className:"w-4 h-4"})})]}),s.jsx("input",{type:"text",placeholder:"Title (e.g. Home, Office)",value:q,onChange:k=>N(k.target.value),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("input",{type:"text",placeholder:"House No, Building Name",value:j,onChange:k=>C(k.target.value),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("input",{type:"text",placeholder:"Landmark",value:T,onChange:k=>$(k.target.value),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("input",{type:"text",inputMode:"numeric",maxLength:"6",placeholder:"PIN Code *",value:le,onChange:k=>Oe(k.target.value.replace(/\D/g,"").slice(0,6)),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber tracking-widest font-bold ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("button",{type:"button",onClick:()=>{if(!q||!j||!T||!le){alert("Please fill all fields");return}if(!vr.includes(le.trim())){alert("Sorry, this PIN code is out of our KGF delivery range.");return}const k={id:Date.now().toString(),title:q,addressDetails:j,landmark:T,pinCode:le},D=[..._e,k];me(D),J(k.id),V.collection("users").doc(S).update({addresses:D}).catch(()=>{}),E(!1),N(""),C(""),$(""),Oe("")},className:"w-full py-2.5 bg-cafe-amber text-cafe-black font-extrabold rounded-lg text-xs hover:bg-cafe-crispy transition",children:"Save Address"})]}):s.jsxs("button",{type:"button",onClick:()=>E(!0),className:`w-full py-3 rounded-xl border border-dashed text-xs font-bold transition flex items-center justify-center gap-2 ${l==="light"?"border-slate-300 text-slate-500 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-400":"border-neutral-700 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-600"}`,children:[s.jsx("i",{"data-lucide":"plus",className:"w-4 h-4"}),"Add New Address"]})]}),s.jsx("div",{className:`w-full py-2 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 ${Ge?"bg-emerald-500/15 border-emerald-500/30 text-emerald-400":De?"bg-cafe-amber/10 border-cafe-amber/30 text-cafe-amber":"bg-neutral-900/40 border-neutral-800 text-neutral-500"}`,children:De?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"}),s.jsx("span",{children:"Acquiring GPS signal..."})]}):Ge?s.jsx("span",{children:"✅ Live GPS Locked"}):s.jsx("span",{children:"📍 GPS unavailable — landmarks used"})}),s.jsx("div",{className:o.length>0?"block":"hidden",children:s.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-1.5 ${l==="light"?"bg-slate-105/60 border-slate-200/80 text-slate-600":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400"}`,children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Subtotal:"}),s.jsxs("span",{className:`font-bold ${l==="light"?"text-slate-900":"text-white"}`,children:["₹",i]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("span",{children:["GST Surcharge (",h.gstRate,"%):"]}),s.jsxs("span",{className:`font-bold ${l==="light"?"text-slate-900":"text-white"}`,children:["₹",a]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Delivery Fee:"}),s.jsxs("span",{className:`font-bold ${l==="light"?"text-slate-900":"text-white"}`,children:["₹",B]})]}),s.jsx("hr",{className:`my-1.5 ${l==="light"?"border-slate-205":"border-neutral-805"}`}),s.jsxs("div",{className:"flex justify-between text-sm font-black",children:[s.jsx("span",{className:l==="light"?"text-slate-800":"text-white",children:"Total Due:"}),s.jsxs("span",{className:"text-cafe-amber",children:["₹",n]})]})]})}),s.jsx("div",{className:o.length===0?"block":"hidden",children:s.jsxs("div",{className:`p-4 rounded-xl border text-xs text-center ${l==="light"?"bg-slate-105/60 border-slate-200/80 text-slate-600":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400"}`,children:[s.jsx("p",{className:"font-semibold text-cafe-amber",children:"No active items in food tray."}),s.jsx("p",{className:"text-[10px] mt-1",children:"Submit your details to register and verify your profile for instant future orders."})]})}),ct&&Se==="info"&&s.jsx("div",{className:"text-[11px] text-red-400 font-bold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2",children:ct}),s.jsx("div",{className:!f&&Ce?"hidden":"block",children:s.jsxs("button",{type:"submit",disabled:ge,className:"w-full py-4 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-60",children:[s.jsx("div",{className:`w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin ${ge?"block":"hidden"}`}),s.jsx("span",{className:ge?"hidden":"inline-block",children:o.length===0?f?"UPDATE PROFILE DETAILS":"GET VERIFICATION CODE":f?"CONFIRM ORDER DETAILS":"CONFIRM & SEND CODE ›"}),s.jsx("i",{"data-lucide":"arrow-right",className:`w-4 h-4 stroke-[3] ${ge?"hidden":"inline-block"}`})]})})]})}),s.jsx("div",{className:Se==="success"?"block":"hidden",children:s.jsxs("div",{className:"text-center space-y-5 py-4",children:[s.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30",children:s.jsx("i",{"data-lucide":"check-circle",className:"w-10 h-10"})}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"text-base font-bold",children:ce?"✅ Order Placed Successfully!":"Profile Registered! 🎉"}),s.jsx("p",{className:"text-xs text-neutral-400 max-w-xs mx-auto",children:ce?"The kitchen has received your ticket. Provide this OTP code to the delivery driver on arrival.":"Your profile details are verified and saved. You can now build your tray and checkout instantly."})]}),s.jsx("div",{className:ce?"block":"hidden",children:s.jsxs("div",{className:`border p-5 rounded-2xl space-y-2 ${l==="light"?"bg-slate-50 border-slate-205":"bg-neutral-900 border-neutral-805"}`,children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-widest",children:"Delivery Handshake Verification OTP"}),s.jsx("div",{className:"text-3xl font-black tracking-widest text-cafe-amber font-sans select-all",children:d})]})}),s.jsx("div",{className:ce?"hidden":"block",children:s.jsxs("div",{className:`border p-5 rounded-2xl space-y-2 ${l==="light"?"bg-slate-50 border-slate-205":"bg-neutral-900 border-neutral-805"}`,children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-widest",children:"Registered Phone"}),s.jsx("div",{className:"text-xl font-black text-cafe-amber font-sans select-all",children:S}),s.jsx("span",{className:"text-[9px] text-emerald-500 font-bold uppercase tracking-wider block mt-1",children:"Status: Verified ✅"})]})}),s.jsx("button",{onClick:v,className:`w-full py-3.5 font-semibold rounded-xl border transition-all text-sm ${l==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-250":"bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"}`,children:"Back to Menu"})]})})]})]})},th=({isOpen:r,onClose:e})=>{const{theme:t,currentUser:n,setCurrentUser:i}=u.useContext(Fe),[a,o]=u.useState([]);u.useEffect(()=>{if(!r||!n){o([]);return}const l=Kn(h=>{const g=n.phone,m=h.filter(y=>["successfully_delivered","delivered","completed"].includes(y.status)&&y.customerPhone&&y.customerPhone.includes(g));o(m)});return()=>{typeof l=="function"&&l()}},[r,n==null?void 0:n.phone]),u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[r,a,t]);const c=()=>{localStorage.removeItem("cc_customer_name"),localStorage.removeItem("cc_customer_phone"),i(null),window.dispatchEvent(new Event("storage")),e()};return s.jsxs("div",{className:`fixed inset-0 z-50 flex items-end justify-center p-4 transition-all duration-300 ${r?"block":"hidden"}`,children:[s.jsx("div",{className:"fixed inset-0 bg-black/70 z-40 backdrop-blur-sm",onClick:e}),s.jsxs("div",{className:`w-full max-w-md rounded-t-3xl border p-6 space-y-5 shadow-2xl z-50 max-h-[85vh] overflow-y-auto no-scrollbar ${t==="light"?"bg-white border-slate-205 text-slate-900":"bg-cafe-card border-neutral-805 text-white"}`,children:[s.jsxs("div",{className:`flex items-center justify-between pb-3 border-b ${t==="light"?"border-neutral-200":"border-neutral-900"}`,children:[s.jsxs("h3",{className:"text-base font-bold font-serif flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"user-circle",className:"w-5 h-5 text-cafe-amber"}),s.jsx("span",{children:"My Profile"})]}),s.jsx("button",{onClick:e,className:"text-neutral-500 hover:text-white transition",children:s.jsx("i",{"data-lucide":"x",className:"w-5 h-5"})})]}),s.jsxs("div",{className:`p-4 rounded-xl border space-y-2 ${t==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900 border-neutral-800"}`,children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-wider",children:"Name"}),s.jsx("p",{className:"font-bold text-sm text-cafe-amber",children:(n==null?void 0:n.name)||"—"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-wider",children:"Phone"}),s.jsx("p",{className:"font-bold text-sm font-sans",children:(n==null?void 0:n.phone)||"—"})]})]}),s.jsxs("button",{onClick:c,className:"w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-xs rounded-xl border border-red-500/20 transition flex items-center justify-center space-x-2",children:[s.jsx("i",{"data-lucide":"log-out",className:"w-4 h-4"}),s.jsx("span",{children:"Sign Out"})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"history",className:"w-4 h-4"}),s.jsx("span",{children:"Order History"})]}),s.jsxs("div",{className:`max-h-48 overflow-y-auto space-y-2 rounded-xl border p-2 no-scrollbar ${t==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/60 border-neutral-800"}`,children:[s.jsx("div",{className:a.length===0?"p-6 text-center text-neutral-500 text-xs block":"hidden",children:"No completed orders yet."}),a.map(l=>s.jsxs("div",{className:`p-3 rounded-lg border text-xs space-y-1 ${t==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("span",{className:"font-bold text-cafe-amber",children:["#",l.id.slice(-6)]}),s.jsx("span",{className:"text-[10px] text-neutral-500",children:l.placementTime||"—"})]}),s.jsx("p",{className:`text-[11px] truncate ${t==="light"?"text-slate-600":"text-neutral-400"}`,children:l.items.map(h=>`${h.quantity}x ${h.name}`).join(", ")}),s.jsxs("div",{className:"flex justify-between items-center pt-1",children:[s.jsxs("span",{className:"font-bold",children:["₹",l.totalAmount]}),s.jsx("span",{className:"text-[9px] font-bold uppercase text-emerald-500",children:"Delivered ✓"})]})]},l.displayId||l.id.slice(0,4)))]})]})]})]})},rh=({onCheckoutSuccess:r})=>{const{isOpenOrdering:e,addToTray:t,floatingItems:n,setFloatingItems:i,theme:a,activeOrderIds:o,updateActiveOrderIds:c,updateActiveOrderId:l,currentUser:h}=u.useContext(Fe),[g,m]=u.useState("Fried Chicken"),[y,L]=u.useState(!1),[M,B]=u.useState(!1),[R,z]=u.useState([]),[S,ue]=u.useState(!1),[U,he]=u.useState(null),[te,pe]=u.useState(!1),ie=(_,E)=>{const q=_.clientX,N=_.clientY,j={id:Date.now()+Math.random(),x:q,y:N,image:E.image};i(C=>[...C,j]),t(E),setTimeout(()=>{i(C=>C.filter(T=>T.id!==j.id))},800)},we=()=>{L(!0)},ne=_=>(_||"").split(" / Alt:")[0].trim();u.useEffect(()=>{if(!h||!h.phone){z([]);return}const _=new Set(["pending","preparing","prepared","out_for_delivery"]),E=Kn(q=>{const N=h.phone,j=q.filter(C=>{const T=(C.status||"").toLowerCase();return _.has(T)&&ne(C.customerPhone)===N}).sort((C,T)=>(T.createdAt||0)-(C.createdAt||0));z(j)});return()=>{typeof E=="function"&&E()}},[h==null?void 0:h.phone]);const Re=u.useRef({});u.useEffect(()=>{if(R.length>0){let _=!1;R.forEach(E=>{const q=Re.current[E.id];q&&q!==E.status&&(_=!0,E.status==="out_for_delivery"&&(he(E),pe(!0))),Re.current[E.id]=E.status}),_&&Jn()}},[R]);const _e=_=>{_&&z(E=>{if(E.some(N=>N.id===_.id))return E;const q=(h==null?void 0:h.phone)||ne(_.customerPhone);return ne(_.customerPhone)!==q?E:[...E,_]})},me=_=>{const E=(o||[]).filter(q=>q!==_);c(E)};u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[y,M,a,R,S,g,te]);const fe=Rr[g]||[],J=_=>{switch(_){case"pending":return"Awaiting shop acceptance ⏳";case"preparing":return"Preparing 🍳";case"prepared":return"Ready for rider pickup 🐣";case"out_for_delivery":return"Out for delivery 🛵";case"successfully_delivered":case"delivered":case"completed":return"Delivered! Enjoy your meal! 🎉";case"rejected":return"Order Cancelled by Shop ❌";default:return"Processing..."}};return s.jsxs("div",{className:`min-h-screen relative flex flex-col pb-24 max-w-md mx-auto shadow-2xl transition-colors duration-305 overflow-hidden ${a==="light"?"bg-white text-slate-800 border-x border-slate-200":"bg-cafe-black text-white border-x border-neutral-900/60"}`,children:[s.jsx("div",{className:`fixed inset-0 pointer-events-none z-0 transition-opacity duration-300 ${a==="light"?"bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-100/10 via-white to-white":"bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950"}`}),s.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[s.jsx(Ju,{onSignInClick:we,onProfileClick:()=>B(!0)}),s.jsx("div",{className:R.length>0?"max-h-[300px] overflow-y-auto space-y-0 no-scrollbar block":"hidden",children:R.map(_=>s.jsxs("div",{className:"px-4 py-3 bg-neutral-900/90 border-b border-amber-600/20 text-white space-y-2",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"bike",className:"w-4 h-4 text-cafe-amber flex-shrink-0"}),s.jsxs("span",{className:"font-bold text-xs text-cafe-amber",children:["Order #",_.displayId||_.id.slice(-4).toUpperCase()]})]}),s.jsx("span",{className:"font-semibold text-[10px] text-neutral-450 uppercase",children:_.placementTime})]}),s.jsx("div",{className:_.status!=="rejected"?"w-full block mb-3":"hidden",children:s.jsxs("div",{className:"flex items-center justify-between relative mt-2 px-1",children:[s.jsx("div",{className:"absolute top-3 left-0 right-0 h-0.5 bg-neutral-800 z-0 rounded-full",children:s.jsx("div",{className:"bg-gradient-to-r from-cafe-amber to-cafe-crispy h-0.5 rounded-full transition-all duration-500",style:{width:`${_.status==="pending"?"0%":_.status==="preparing"||_.status==="prepared"?"33.33%":_.status==="out_for_delivery"?"66.66%":["successfully_delivered","delivered","completed"].includes(_.status)?"100%":"0%"}`}})}),["Pending","Preparing","Out For Delivery","Delivered"].map((E,q)=>{const N=_.status,j=N==="pending"?0:N==="preparing"||N==="prepared"?1:N==="out_for_delivery"?2:["successfully_delivered","delivered","completed"].includes(N)?3:-1,C=q<j,T=q===j,$=q<=j;return s.jsxs("div",{className:"flex flex-col items-center z-10 relative",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-300 ${T?"bg-cafe-amber text-cafe-black ring-2 ring-cafe-amber/30 scale-110":C?"bg-cafe-crispy text-cafe-black":"bg-neutral-800 text-neutral-500 border border-neutral-700"}`,children:C?"✓":q+1}),s.jsx("span",{className:`text-[9px] font-bold mt-1 text-center whitespace-nowrap ${$?"text-cafe-amber":"text-neutral-555"}`,children:E})]},E)})]})}),_.status==="out_for_delivery"&&s.jsxs("div",{className:"rounded-xl px-4 py-3 border border-amber-500/30 bg-amber-500/10 mb-3 flex items-center justify-between shadow-sm",children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"w-10 h-10 bg-cafe-amber/20 text-cafe-amber rounded-full flex items-center justify-center shadow-inner",children:s.jsx("i",{"data-lucide":"bike",className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-serif font-bold text-sm text-cafe-amber mb-0.5",children:"🛵 Out for Delivery!"}),s.jsxs("p",{className:"text-[10px] text-neutral-300 uppercase tracking-wider",children:["Rider: ",s.jsx("span",{className:"font-bold text-white",children:_.riderName||_.assignedRider||"Delivery Rider"})]})]})]}),s.jsxs("a",{href:_.riderPhone?`tel:${_.riderPhone}`:"#",className:`px-3 py-2 bg-cafe-amber text-cafe-black font-extrabold rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors ${_.riderPhone?"hover:bg-amber-400":"pointer-events-none opacity-50"}`,children:[s.jsx("i",{"data-lucide":"phone",className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Call Rider"})]})]}),s.jsxs("div",{className:"rounded-lg px-3 py-2 border border-neutral-700/50 bg-neutral-800/40",children:[s.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-cafe-amber block text-center mb-1",children:"Your Order"}),s.jsx("p",{className:"text-[11px] font-semibold leading-relaxed text-center text-neutral-100",children:(_.items||[]).map(E=>`${E.quantity}x ${E.name}`).join(", ")}),s.jsx("p",{className:"text-[10px] font-medium text-center text-neutral-450 pt-1 border-t border-neutral-700/40 mt-1.5",children:J(_.status)})]}),(_.status==="pending"||_.status==="preparing")&&s.jsx("div",{className:"flex justify-center mt-3",children:s.jsx("button",{onClick:()=>{window.alert("Store Contact: +91 90357 33573");const E=_.createdAt&&Date.now()-(_.createdAt.toDate?_.createdAt.toDate().getTime():_.createdAt)<3e5;_.status==="pending"&&E&&V.collection("orders").doc(_.id).update({cancellationRequested:!0}).catch(()=>{})},className:"text-[10px] text-red-405 hover:text-red-305 font-bold underline transition",children:"Need Help?"})}),s.jsx("div",{className:["successfully_delivered","delivered","completed","rejected","cancelled"].includes(_.status)?"flex justify-end pt-1 block":"hidden",children:s.jsx("button",{onClick:()=>me(_.id),className:"px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-[10px] font-bold rounded-lg border border-neutral-700 transition",children:"Dismiss"})})]},_.id))}),s.jsxs("div",{className:e?"hidden":"flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 my-auto block",children:[s.jsx("h2",{className:"text-xl font-bold font-serif mt-4",children:"Online Ordering Paused"}),s.jsx("p",{className:`text-sm max-w-xs leading-relaxed ${a==="light"?"text-slate-505":"text-neutral-455"}`,children:"We are currently experiencing high walk-in traffic at Robertsonpet shop. Online orders are temporarily closed."}),s.jsx("div",{className:`p-3 rounded-xl border text-xs text-cafe-amber ${a==="light"?"bg-slate-50 border-slate-200":"bg-cafe-card border-neutral-850"}`,children:"⏱️ Check back soon!"})]}),s.jsxs("div",{className:e?"flex-1 flex flex-col block":"hidden",children:[s.jsx(Yu,{}),s.jsx(Qu,{activeCategory:g,setActiveCategory:m}),s.jsx("main",{className:"flex-1 p-3.5 sm:p-4 grid grid-cols-2 gap-3 sm:gap-3.5 auto-rows-max items-start content-start overflow-y-auto no-scrollbar font-sans pb-28",children:fe.map(_=>s.jsx(Xu,{product:_,onAdd:ie,categoryName:g},_.name))}),s.jsx(Zu,{onCheckoutTrigger:()=>L(!0)})]})]}),n.map(_=>s.jsx("img",{src:_.image,className:"floating-food w-12 h-12 object-cover rounded-full shadow-2xl border-2 border-cafe-amber",style:{left:_.x,top:_.y},alt:""},_.id)),s.jsx("div",{className:y?"block fixed inset-0 z-50":"hidden",children:s.jsx(eh,{onClose:()=>L(!1),onOrderSuccess:_=>{l(_.id),_e(_),r&&r(_.id,_.otp)},isOpen:y})}),s.jsx(th,{isOpen:M,onClose:()=>B(!1)})]})},nh=()=>{const{login:r}=u.useContext(xr),[e,t]=u.useState(""),[n,i]=u.useState(""),[a,o]=u.useState(!1),[c,l]=u.useState(""),h=async g=>{if(g.preventDefault(),!(!e||!n)){o(!0),l("");try{const m=await r(e,n);setTimeout(()=>{m.role==="OWNER_COUNTER"?window.location.hash="#/shop-counter":m.role==="DELIVERY_RIDER"&&(window.location.hash="#/delivery-dashboard")},100)}catch(m){l(m.message||"Invalid credentials."),o(!1)}}};return u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[c]),s.jsxs("div",{className:"min-h-screen bg-cafe-black flex items-center justify-center p-6 relative font-sans",children:[s.jsx("div",{className:"fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950 pointer-events-none z-0"}),s.jsxs("div",{className:"w-full max-w-sm bg-cafe-card rounded-3xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative z-10 text-center",children:[s.jsx("img",{src:"./logo_rm_bg.png",className:"h-16 mx-auto object-contain mb-2 drop-shadow-sm",alt:"Crispy Chick Logo"}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("h2",{className:"text-xl font-bold font-serif text-white",children:"Central Verification Gate"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Log in using your workspace credentials"})]}),s.jsxs("div",{className:c?"bg-red-500/10 border border-red-500 text-red-400 p-3.5 rounded-xl text-xs text-left font-semibold block":"hidden",children:["⚠️ ",c]}),s.jsxs("form",{onSubmit:h,className:"space-y-4 text-left",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Email Address"}),s.jsx("input",{type:"email",required:!0,placeholder:"name@crispychick.com",value:e,onChange:g=>t(g.target.value),className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Password"}),s.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:n,onChange:g=>i(g.target.value),className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber"})]}),s.jsxs("button",{type:"submit",disabled:a,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg hover:shadow-orange-500/10 transition flex items-center justify-center space-x-2 text-sm",children:[s.jsx("div",{className:`w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin ${a?"block":"hidden"}`}),s.jsx("span",{className:a?"hidden":"inline-block",children:"UNLOCK DASHBOARD"}),s.jsx("i",{"data-lucide":"unlock",className:`w-4 h-4 stroke-[3] ${a?"hidden":"inline-block"}`})]})]})]})]})},sh=()=>{const{isOpenOrdering:r,menuSettings:e,updateMenuSettings:t,theme:n,toggleTheme:i}=u.useContext(Fe),{signOut:a}=u.useContext(xr),[o,c]=u.useState([]),[l,h]=u.useState([]),[g,m]=u.useState({}),[y,L]=u.useState([]),M=u.useRef([]),[B,R]=u.useState(!1),[z,S]=u.useState(""),[ue,U]=u.useState(""),[he,te]=u.useState(""),[pe,ie]=u.useState(""),[we,ne]=u.useState(!1);u.useEffect(()=>{const d=V.collection("riders").onSnapshot(x=>{const w=[];x.forEach(I=>{const O=I.data();O.name&&w.push({id:I.id,pin:O.pin||I.id,name:O.name,phone:O.phone,isActive:O.isActive!==!1,isOnline:O.isOnline===!0,dutyStartTime:O.dutyStartTime||null,verified:O.verified!==!1,createdAt:O.createdAt||0})}),L(w)},x=>console.warn("Riders fetch error:",x));return()=>d()},[]);const Re=()=>{const d=Math.floor(1e5+Math.random()*9e5).toString();te(d)},_e=async d=>{d.preventDefault();const x=z.trim(),w=ue.trim(),I=he.trim();if(!x){ie("Please enter rider full name.");return}if(!/^[6-9]\d{9}$/.test(w)){ie("Enter a valid 10-digit mobile number starting 6-9.");return}if(!/^\d{6}$/.test(I)){ie("Rider PIN must be exactly 6 digits.");return}if(y.some(O=>O.pin===I||O.id===I)){ie("This 6-digit PIN is already assigned to another rider.");return}ne(!0),ie("");try{await V.collection("riders").doc(I).set({name:x,phone:w,pin:I,verified:!0,isActive:!0,isOnline:!1,createdAt:Date.now()}),S(""),U(""),te(""),R(!1)}catch(O){console.error("Failed to add rider:",O),ie("Database error. Please try again.")}finally{ne(!1)}},me=async d=>{const x=d.pin||d.id;if(!(!window.confirm(`Remove rider "${d.name}" from the delivery fleet?`)||!window.confirm(`⚠️ FINAL CONFIRMATION:
Are you absolutely sure you want to permanently delete "${d.name}" (PIN: ${x})?
This will revoke their login access immediately.`)))try{await V.collection("riders").doc(x).delete()}catch(O){console.error("Failed to delete rider:",O),alert("Error deleting rider. Please try again.")}};u.useEffect(()=>{const d=Kn(x=>{M.current.length===0&&(M.current=x),c(x)});return()=>{typeof d=="function"&&d()}},[]),u.useEffect(()=>{o.length>0&&M.current.length>0&&o.forEach(d=>{const x=M.current.find(O=>O.id===d.id),w=["successfully_delivered","delivered","completed"].includes(d.status),I=x?["successfully_delivered","delivered","completed"].includes(x.status):!1;if(w&&x&&!I){const O=Date.now()+Math.random(),Ee={id:O,orderId:d.id,customerName:d.customerName,totalAmount:d.totalAmount};h(ce=>[...ce,Ee]),Jn(),setTimeout(()=>{h(ce=>ce.filter(Ke=>Ke.id!==O))},5e3)}}),M.current=o},[o]);const fe=o.some(d=>d.status==="pending");u.useEffect(()=>{if(window.location.hash!=="#/shop-counter"){Cs(!1);return}Cs(fe)},[fe]);const J=async d=>{await Rt(d,"preparing")},_=async d=>{await Rt(d,"rejected")},E=async d=>{await Rt(d,"prepared")},q=async d=>{const x=y.filter(O=>O.isOnline===!0);if(x.length===0){window.alert("⚠️ Cannot assign order: No delivery riders are currently online. Ask a rider to turn on duty in their app first.");return}const w=g[d]||(x[0]?x[0].name:""),I=x.find(O=>O.name===w);if(!I){window.alert("⚠️ Cannot assign order: The selected rider is currently offline. Please choose a rider who is online.");return}await V.collection("orders").doc(d).update({status:"prepared",assignedRider:I.name,dispatchedAt:Date.now()})},N=(d,x)=>{m(w=>({...w,[d]:x}))},j=y.filter(d=>d.isOnline===!0),C=o.filter(d=>["pending","preparing","prepared","out_for_delivery"].includes(d.status)),T=o.filter(d=>["successfully_delivered","delivered","completed","rejected"].includes(d.status)),$=d=>{const x=C.find(w=>(w.assignedRider===d.name||w.pickedUpBy===d.name)&&["prepared","out_for_delivery"].includes(w.status));if(x){if(x.status==="out_for_delivery")return{status:"delivering",label:`🛵 Delivering #${x.displayId||x.id.slice(-4).toUpperCase()}`,sublabel:`To: ${x.customerName}`,orderId:x.id,badgeClass:"bg-blue-500/10 text-blue-400 border border-blue-500/30"};if(x.status==="prepared")return{status:"prepared",label:`📦 Pickup Pending #${x.displayId||x.id.slice(-4).toUpperCase()}`,sublabel:"Waiting at counter",orderId:x.id,badgeClass:"bg-purple-500/10 text-purple-400 border border-purple-500/30"}}return d.isOnline!==!0?{status:"offline",label:"⚪ Offline",sublabel:"Rider off duty",badgeClass:"bg-neutral-800/80 text-neutral-400 border border-neutral-700"}:{status:"available",label:"🟢 Online (Ready)",sublabel:le(d.dutyStartTime),badgeClass:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold"}},le=d=>{if(!d)return"Ready for orders";const x=Math.floor(Math.max(0,Date.now()-d)/6e4);if(x<60)return`${x}m on duty`;const w=Math.floor(x/60),I=x%60;return`${w}h ${I}m on duty`},Oe=d=>{const x=new Date;return T.filter(w=>{if(!["successfully_delivered","delivered","completed"].includes(w.status)||w.assignedRider!==d&&w.pickedUpBy!==d)return!1;const I=w.deliveredAt||w.createdAt;return(I&&I.toDate?I.toDate():new Date(I||0)).toDateString()===x.toDateString()}).length},De=d=>{const x=new Date;return T.filter(w=>{if(!["successfully_delivered","delivered","completed"].includes(w.status)||w.assignedRider!==d&&w.pickedUpBy!==d)return!1;const I=w.deliveredAt||w.createdAt;return(I&&I.toDate?I.toDate():new Date(I||0)).toDateString()===x.toDateString()}).reduce((w,I)=>w+Number(I.totalAmount||0),0)},Te=d=>{if(!d)return"unknown date";const x=new Date(d),w=new Date,I=String(x.getDate()).padStart(2,"0"),Ee=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][x.getMonth()],ce=x.getFullYear(),P=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][x.getDay()],X=`${I}-${Ee}-${ce} ${P}`;return x.toDateString()===w.toDateString()?`todays : ${X}`:X},Ge=T.reduce((d,x)=>{const w=Te(x.createdAt);return d[w]||(d[w]=[]),d[w].push(x),d},{}),jt=d=>{t({...e,gstRate:Math.max(0,Number(d))})},ge=d=>{t({...e,deliveryFee:Math.max(0,Number(d))})},Y=(d,x)=>{const w={...e.items},I=w[d]?w[d].available!==!1:!0;w[d]={price:Math.max(0,Number(x)),available:I},t({...e,items:w})},Se=d=>{const x={...e.items},w=x[d]?x[d].price:void 0,I=x[d]?x[d].available!==!1:!0;x[d]={price:w,available:!I},t({...e,items:x})};u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[o,e,n,y,B]);const Ue=[];return Object.keys(Rr).forEach(d=>{Rr[d].forEach(x=>{const w=e.items[x.name];Ue.push({name:x.name,category:d,defaultPrice:x.price,currentPrice:w&&w.price!==void 0?w.price:x.price,isAvailable:w&&w.available!==void 0?w.available:!0})})}),s.jsxs("div",{className:`min-h-screen p-6 md:p-10 relative space-y-8 transition-colors duration-300 ${n==="light"?"bg-slate-50 text-slate-800":"bg-cafe-black text-white"}`,children:[s.jsxs("div",{className:`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b ${n==="light"?"border-slate-200":"border-neutral-800"}`,children:[s.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 min-w-0",children:[s.jsx("img",{src:"./logo_rm_bg.png",className:"h-10 w-auto object-contain flex-shrink-0 drop-shadow-sm",alt:"Crispy Chick Logo"}),s.jsx("h1",{className:`font-sans font-black text-base sm:text-lg md:text-xl tracking-tight flex items-center whitespace-nowrap transition-colors duration-300 ${n==="light"?"text-slate-900":"text-white"}`,children:"Crispy Chick"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("button",{onClick:i,className:`p-2.5 rounded-xl border transition-all duration-300 ${n==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white":"bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm"}`,children:[s.jsx("i",{"data-lucide":"sun",className:n==="dark"?"w-4 h-4 block":"hidden"}),s.jsx("i",{"data-lucide":"moon",className:n==="light"?"w-4 h-4 block":"hidden"})]}),s.jsxs("button",{onClick:a,className:"bg-neutral-805 hover:bg-neutral-700 text-xs font-bold px-4 py-2.5 rounded-lg border border-neutral-700 transition flex items-center gap-2 text-neutral-300",children:[s.jsx("i",{"data-lucide":"log-out",className:"w-4 h-4 text-red-400"}),s.jsx("span",{children:"Sign Out"})]}),s.jsxs("div",{className:`p-3 rounded-xl border flex items-center space-x-3 shadow-inner ${n==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsx("span",{className:"text-xs text-neutral-450 font-semibold tracking-wide",children:"Ordering Window"}),s.jsx("button",{onClick:()=>Mu({onlineOrderingWindow:!r}),className:`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${r?"bg-emerald-600":"bg-red-800"}`,children:s.jsx("span",{className:`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${r?"translate-x-5":"translate-x-0"}`})}),s.jsx("span",{className:`text-xs font-bold ${r?"text-emerald-400":"text-red-400"}`,children:r?"ONLINE":"OFFLINE"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[s.jsxs("div",{className:`rounded-2xl border shadow-xl overflow-hidden ${n==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:`px-6 py-4 border-b flex justify-between items-center ${n==="light"?"bg-slate-100/50 border-slate-200":"bg-neutral-900/40 border-neutral-800"}`,children:[s.jsx("h3",{className:"font-serif font-bold text-lg",children:"Live Orders Processing Queue"}),s.jsx("span",{className:"text-[10px] text-neutral-450 font-bold uppercase tracking-wider",children:"Reactive Feed"})]}),s.jsxs("div",{className:C.length===0?"p-16 text-center text-neutral-500 space-y-3 block":"hidden",children:[s.jsx("span",{className:"text-4xl",children:"📭"}),s.jsx("p",{className:"text-sm font-medium",children:"No active order files loaded currently in the database."})]}),s.jsx("div",{className:C.length>0?"overflow-x-auto block":"hidden",children:s.jsxs("table",{className:"w-full text-left border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:`border-b text-[10px] text-neutral-455 font-bold uppercase tracking-wider ${n==="light"?"bg-slate-100/30":"bg-neutral-900/20"}`,children:[s.jsx("th",{className:"w-2/5 px-3 py-2",children:"Order Details"}),s.jsx("th",{className:"w-1/6 px-3 py-2",children:"Billing Summary"}),s.jsx("th",{className:"w-1/6 px-3 py-2",children:"Delivery Node"}),s.jsx("th",{className:"w-auto px-3 py-2 text-center",children:"Status"}),s.jsx("th",{className:"w-auto px-3 py-2 text-right",children:"Actions"})]})}),s.jsx("tbody",{className:`divide-y ${n==="light"?"divide-slate-200":"divide-neutral-900/60"}`,children:C.map(d=>{const x=d.placementTime||new Date(d.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return s.jsxs("tr",{className:`hover:bg-neutral-900/5 transition-colors ${d.status==="pending"?"bg-cafe-amber/5 animate-pulse-slow":""}`,children:[s.jsxs("td",{className:"px-6 py-4 space-y-1",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsxs("span",{className:`font-bold text-sm ${n==="light"?"text-slate-900":"text-white"}`,children:["#",d.displayId||d.id.slice(-4).toUpperCase()]}),s.jsx("span",{className:"text-[10px] text-neutral-550 font-medium",children:x})]}),s.jsx("div",{className:"mt-2 space-y-1",children:d.items.map((w,I)=>s.jsxs("div",{className:`text-lg font-bold tracking-wide block ${n==="light"?"text-slate-900":"text-white"}`,children:[s.jsxs("span",{className:"text-cafe-amber mr-1",children:[I+1,"."]}),w.quantity,"x ",w.name]},I))})]}),s.jsxs("td",{className:"px-6 py-4",children:[s.jsxs("span",{className:`text-sm font-bold ${n==="light"?"text-slate-900":"text-white"}`,children:["₹",d.totalAmount]}),s.jsx("span",{className:"block text-[10px] text-neutral-505 font-bold uppercase",children:"COD / UPI"})]}),s.jsxs("td",{className:"px-6 py-4 space-y-1",children:[s.jsxs("div",{className:`text-xs font-semibold ${n==="light"?"text-slate-800":"text-slate-300"}`,children:[d.customerName," (",d.customerPhone,")"]}),s.jsx("div",{className:"text-[11px] text-neutral-450 italic max-w-xs truncate",children:d.landmarks})]}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${d.status==="pending"?"bg-amber-500/10 text-amber-500 border border-amber-500/20":d.status==="preparing"?"bg-blue-500/10 text-blue-400 border border-blue-500/20":d.status==="prepared"?"bg-teal-500/10 text-teal-400 border border-teal-500/20":d.status==="out_for_delivery"?"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20":["successfully_delivered","delivered","completed"].includes(d.status)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-red-500/10 text-red-400 border border-red-500/20"}`,children:d.status.replace(/_/g," ")})}),s.jsxs("td",{className:"px-6 py-4 text-right space-x-2 whitespace-nowrap",children:[s.jsxs("span",{className:d.status==="pending"?"inline-flex gap-2":"hidden",children:[s.jsx("button",{onClick:()=>_(d.id),className:"bg-red-500/10 hover:bg-red-500 hover:text-white text-red-455 text-xs px-3 py-1.5 rounded-lg border border-red-500/20 transition",children:"Reject"}),s.jsx("button",{onClick:()=>J(d.id),className:"bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-400 text-xs px-3 py-1.5 rounded-lg border border-emerald-500/20 transition font-bold",children:"Accept"})]}),s.jsx("button",{onClick:()=>E(d.id),className:`bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-400 text-xs px-3.5 py-1.5 rounded-lg border border-indigo-500/20 transition font-bold ${d.status==="preparing"?"inline-block":"hidden"}`,children:"Mark Prepared"}),s.jsx("span",{className:d.status==="prepared"?"inline-flex items-center gap-2":"hidden",children:j.length===0?s.jsx("span",{className:"text-[11px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg",children:"⚠️ No riders online"}):s.jsxs(s.Fragment,{children:[s.jsx("select",{value:g[d.id]||(j[0]?j[0].name:""),onChange:w=>N(d.id,w.target.value),className:`border rounded-lg text-xs px-2 py-1 focus:outline-none focus:border-cafe-amber font-bold ${n==="light"?"bg-white border-slate-200 text-slate-800":"bg-neutral-850 border-neutral-750 text-white"}`,children:j.map(w=>{const I=$(w);return s.jsxs("option",{value:w.name,children:[w.name," (",I.status==="available"?"🟢 Ready":I.status==="delivering"?"🛵 Delivering":"📦 Assigned",")"]},w.id)})}),s.jsx("button",{onClick:()=>q(d.id),className:"bg-teal-500/10 hover:bg-teal-500 hover:text-white text-teal-400 text-[11px] px-2 py-1 rounded-lg border border-teal-500/20 transition font-bold",children:"Assign & Dispatch"})]})}),d.status==="pending"&&d.cancellationRequested===!0&&s.jsx("button",{onClick:async()=>{window.confirm("Cancel this order per customer request?")&&await V.collection("orders").doc(d.id).update({status:"cancelled"})},className:"text-xs px-2 py-1 bg-red-100 text-red-700 border border-red-400 hover:bg-red-600 hover:text-white rounded-lg transition font-bold inline-block ml-1",children:"✕ Cancel (Customer)"}),s.jsx("span",{className:d.status==="out_for_delivery"?"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800":"hidden",children:d.status==="out_for_delivery"?`Out with Rider: ${d.pickedUpBy||d.assignedRider||"Rider"}`:""}),s.jsx("span",{className:`text-xs text-emerald-555 font-bold font-sans ${["successfully_delivered","delivered","completed"].includes(d.status)?"inline":"hidden"}`,children:"Delivered ✅"}),s.jsx("span",{className:`text-xs text-red-555 font-bold font-sans ${d.status==="rejected"?"inline":"hidden"}`,children:"Cancelled ❌"})]})]},d.displayId||d.id.slice(0,4))})})]})})]}),s.jsxs("div",{className:`rounded-2xl border shadow-xl overflow-hidden ${n==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:`px-6 py-4 border-b flex justify-between items-center ${n==="light"?"bg-slate-100/50 border-slate-200":"bg-neutral-900/40 border-neutral-800"}`,children:[s.jsx("h3",{className:"font-serif font-bold text-lg",children:"Archived Transaction History Log"}),s.jsx("span",{className:"text-[10px] text-neutral-450 font-bold uppercase tracking-wider",children:"Historical records"})]}),s.jsx("div",{className:T.length===0?"p-8 text-center text-neutral-500 block":"hidden",children:s.jsx("p",{className:"text-xs font-semibold",children:"No historical orders in archive."})}),s.jsx("div",{className:T.length>0?"overflow-x-auto block max-h-[300px] no-scrollbar":"hidden",children:s.jsxs("table",{className:"min-w-full table-fixed divide-y divide-gray-200 text-left",children:[s.jsxs("colgroup",{children:[s.jsx("col",{className:"w-1/6"}),s.jsx("col",{className:"w-2/5"}),s.jsx("col",{className:"w-2/5"}),s.jsx("col",{className:"w-24"})]}),s.jsx("thead",{children:s.jsxs("tr",{className:`border-b text-[10px] text-neutral-455 font-bold uppercase tracking-wider ${n==="light"?"bg-slate-100/30":"bg-neutral-900/20"}`,children:[s.jsx("th",{className:"px-3 py-3",children:"Time"}),s.jsx("th",{className:"px-3 py-3",children:"Order Details"}),s.jsx("th",{className:"px-3 py-3",children:"Billing Address"}),s.jsx("th",{className:"px-3 py-3 text-center",children:"Status"})]})}),s.jsx("tbody",{className:`divide-y ${n==="light"?"divide-slate-200":"divide-neutral-900/60"}`,children:Object.entries(Ge).map(([d,x])=>{const w=x.filter(P=>["successfully_delivered","delivered","completed"].includes(P.status)),I=x.filter(P=>["cancelled","rejected"].includes(P.status)),O=w.length,Ee=w.reduce((P,X)=>P+Number(X.totalAmount||0),0),ce=I.length,Ke=I.reduce((P,X)=>P+Number(X.totalAmount||0),0);return s.jsxs(Or.Fragment,{children:[s.jsx("tr",{className:"bg-transparent",children:s.jsx("td",{colSpan:"4",className:"p-2 border-0",children:s.jsxs("div",{className:"w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 my-4",children:[s.jsx("span",{className:"font-extrabold text-slate-800 dark:text-slate-100",children:d}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs("div",{className:"px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-400",children:["✅ Orders: ",O," | Collected: ₹",Ee]}),s.jsxs("div",{className:"px-3 py-1 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-lg text-xs font-bold text-rose-700 dark:text-rose-400",children:["❌ Rejected: ",ce," | Lost: ₹",Ke]})]})]})})}),x.map(P=>{const X=P.createdAt?new Date(P.createdAt).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}):P.placementTime||"--:--";return s.jsxs("tr",{className:"hover:bg-neutral-900/5 transition-colors",children:[s.jsx("td",{className:"px-3 py-3 text-xs font-semibold font-sans",children:X}),s.jsxs("td",{className:"px-3 py-3 font-bold text-xs leading-relaxed whitespace-normal break-words",children:["#",P.displayId||P.id.slice(-4).toUpperCase(),s.jsx("div",{className:"text-[10px] font-normal text-neutral-455 mt-0.5 whitespace-normal leading-normal",children:P.items.map(Ne=>`${Ne.name} (x${Ne.quantity})`).join(", ")}),s.jsxs("div",{className:`text-[10px] mt-0.5 ${["successfully_delivered","delivered","completed"].includes(P.status)?"text-green-600 font-bold":"text-red-600 font-bold"}`,children:["₹",P.totalAmount]})]}),s.jsxs("td",{className:"px-3 py-3 text-[11px] text-neutral-400 leading-normal whitespace-normal break-words",children:[s.jsxs("div",{className:"font-bold text-neutral-505",children:[P.customerName," (",P.customerPhone,")"]}),s.jsx("div",{className:"mt-0.5 italic text-neutral-455",children:P.landmarks||P.address||P.customerAddress})]}),s.jsx("td",{className:"px-3 py-3 text-center",children:s.jsx("span",{className:`inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wide ${["successfully_delivered","delivered","completed"].includes(P.status)?"bg-emerald-500/10 text-green-600 font-bold border border-emerald-500/20":"bg-red-500/10 text-red-600 font-bold border border-red-500/20"}`,children:["successfully_delivered","delivered","completed"].includes(P.status)?"Delivered":"Cancelled"})})]},P.displayId||P.id)})]},d)})})]})})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:`rounded-2xl border shadow-xl p-6 space-y-5 ${n==="light"?"bg-white border-slate-205":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-900/10",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("span",{className:"text-xl",children:"🛵"}),s.jsxs("div",{children:[s.jsx("h3",{className:`font-serif font-bold text-base ${n==="light"?"text-slate-900":"text-white"}`,children:"Delivery Fleet Management"}),s.jsx("p",{className:"text-[10px] text-neutral-450 font-semibold",children:"Live Rider Profiles & Operational Status"})]})]}),s.jsx("button",{onClick:()=>{Re(),R(!0),ie("")},className:"px-3 py-1.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold text-xs rounded-xl shadow hover:opacity-95 transition flex items-center space-x-1",children:s.jsx("span",{children:"+ Add Rider"})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-[10px] font-bold",children:[s.jsxs("div",{className:`p-2 rounded-xl border ${n==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/60 border-neutral-800"}`,children:[s.jsx("span",{className:"text-neutral-450 block",children:"Fleet"}),s.jsx("span",{className:"text-base font-black text-amber-500 font-mono",children:y.length})]}),s.jsxs("div",{className:`p-2 rounded-xl border ${n==="light"?"bg-emerald-50/50 border-emerald-200":"bg-emerald-950/20 border-emerald-800/40"}`,children:[s.jsx("span",{className:"text-emerald-500 block",children:"Available"}),s.jsx("span",{className:"text-base font-black text-emerald-500 font-mono",children:y.filter(d=>$(d).status==="available").length})]}),s.jsxs("div",{className:`p-2 rounded-xl border ${n==="light"?"bg-blue-50/50 border-blue-200":"bg-blue-950/20 border-blue-800/40"}`,children:[s.jsx("span",{className:"text-blue-400 block",children:"Delivering"}),s.jsx("span",{className:"text-base font-black text-blue-400 font-mono",children:y.filter(d=>["delivering","prepared"].includes($(d).status)).length})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("span",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider",children:"Roster & Real-Time Tracking"}),y.length===0?s.jsxs("div",{className:"text-center py-8 text-neutral-500 text-xs",children:["No riders registered yet. Click ",s.jsx("strong",{children:"+ Add Rider"})," to create one."]}):s.jsx("div",{className:`max-h-[360px] overflow-y-auto border rounded-xl no-scrollbar divide-y ${n==="light"?"bg-slate-50 border-slate-200 divide-slate-200":"bg-cafe-black/40 border-neutral-805 divide-neutral-900/60"}`,children:y.map(d=>{const x=$(d),w=Oe(d.name),I=De(d.name);return s.jsxs("div",{className:"p-3.5 space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("h4",{className:`font-bold text-xs ${n==="light"?"text-slate-900":"text-white"}`,children:d.name}),s.jsxs("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-amber-400 font-bold border border-neutral-700",children:["PIN: ",d.pin||d.id]})]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-450 mt-1",children:[s.jsxs("a",{href:`tel:${d.phone}`,className:"hover:text-amber-500 font-medium",children:["📞 ",d.phone||"No phone"]}),s.jsx("span",{children:"•"}),s.jsxs("span",{className:"text-emerald-500 font-bold",children:["₹",I," collected"]}),s.jsx("span",{children:"•"}),s.jsxs("span",{className:"text-neutral-400 font-semibold",children:[w," orders"]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("span",{className:`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${x.badgeClass}`,children:x.label}),x.sublabel&&s.jsx("span",{className:"block text-[9px] text-neutral-450 font-medium mt-0.5",children:x.sublabel})]})]}),s.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-900/10 dark:border-neutral-800/60 text-[10px]",children:[s.jsxs("div",{className:"text-[10px] text-neutral-400 font-medium flex items-center gap-1.5",children:[s.jsx("span",{className:`w-2 h-2 rounded-full ${d.isOnline?"bg-emerald-500 animate-pulse":"bg-neutral-500"}`}),s.jsx("span",{children:d.isOnline?"Active on shift":"Currently offline"})]}),s.jsx("button",{onClick:()=>me(d),className:"text-red-500 hover:text-red-400 font-bold uppercase px-2 py-1 transition flex items-center gap-1",title:"Safely remove rider from fleet",children:"✕ Delete"})]})]},d.id)})})]})]}),B&&s.jsx("div",{className:"fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm",children:s.jsxs("div",{className:`w-full max-w-sm rounded-2xl border shadow-2xl p-6 space-y-4 ${n==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-card border-neutral-800 text-white"}`,children:[s.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-neutral-800/40",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("span",{className:"text-xl",children:"🛵"}),s.jsx("h3",{className:"font-serif font-bold text-base",children:"Register New Delivery Rider"})]}),s.jsx("button",{onClick:()=>R(!1),className:"text-neutral-400 hover:text-white p-1",children:"✕"})]}),pe&&s.jsx("div",{className:"p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold",children:pe}),s.jsxs("form",{onSubmit:_e,className:"space-y-3.5",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-1",children:"Rider Full Name"}),s.jsx("input",{type:"text",required:!0,value:z,onChange:d=>S(d.target.value),placeholder:"e.g. Ramesh Kumar",className:`w-full border rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:border-cafe-amber ${n==="light"?"bg-slate-50 border-slate-200 text-slate-900":"bg-neutral-900 border-neutral-800 text-white"}`})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-1",children:"10-Digit Mobile Number"}),s.jsx("input",{type:"tel",required:!0,maxLength:10,value:ue,onChange:d=>U(d.target.value.replace(/\D/g,"")),placeholder:"e.g. 9876543210",className:`w-full border rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:border-cafe-amber ${n==="light"?"bg-slate-50 border-slate-200 text-slate-900":"bg-neutral-900 border-neutral-800 text-white"}`})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider",children:"6-Digit Login PIN"}),s.jsx("button",{type:"button",onClick:Re,className:"text-[10px] text-cafe-amber hover:underline font-bold",children:"🎲 Auto-Generate"})]}),s.jsx("input",{type:"text",required:!0,maxLength:6,value:he,onChange:d=>te(d.target.value.replace(/\D/g,"")),placeholder:"6-digit PIN (e.g. 456789)",className:`w-full border rounded-xl px-3.5 py-2 text-xs font-mono font-bold tracking-widest text-center focus:outline-none focus:border-cafe-amber ${n==="light"?"bg-slate-50 border-slate-200 text-slate-900":"bg-neutral-900 border-neutral-800 text-white"}`}),s.jsx("span",{className:"block text-[9px] text-neutral-500 mt-1",children:"The rider will use this 6-digit PIN to sign in to the Delivery Portal."})]}),s.jsxs("div",{className:"flex gap-2 pt-2",children:[s.jsx("button",{type:"button",onClick:()=>R(!1),className:"flex-1 py-2.5 rounded-xl border border-neutral-700 hover:bg-neutral-800 text-xs font-bold text-neutral-300 transition",children:"Cancel"}),s.jsx("button",{type:"submit",disabled:we,className:"flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black text-xs font-extrabold shadow hover:opacity-95 transition disabled:opacity-50",children:we?"Registering...":"Register Rider"})]})]})]})}),s.jsxs("div",{className:`rounded-2xl border shadow-xl p-6 space-y-6 ${n==="light"?"bg-white border-slate-205":"bg-cafe-card border-neutral-800"}`,children:[s.jsx("div",{className:"pb-3 border-b border-neutral-900/10",children:s.jsx("h3",{className:`font-serif font-bold text-base ${n==="light"?"text-slate-900":"text-white"}`,children:"⚙️ Live Menu Manager"})}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 items-center",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2",children:"GST Rate (%)"}),s.jsx("input",{type:"number",min:"0",value:e.gstRate,onChange:d=>jt(d.target.value),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber font-sans font-bold ${n==="light"?"bg-neutral-50 border-slate-200 text-slate-900":"bg-cafe-black border-neutral-800 text-white"}`})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2",children:"Fixed Delivery Fee (₹)"}),s.jsx("input",{type:"number",min:"0",value:e.deliveryFee,onChange:d=>ge(d.target.value),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber font-sans font-bold ${n==="light"?"bg-neutral-50 border-slate-200 text-slate-900":"bg-cafe-black border-neutral-800 text-white"}`})]})]}),s.jsx("hr",{className:n==="light"?"border-slate-200":"border-neutral-800"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("span",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider",children:"Spreadsheet Inventory Matrix"}),s.jsx("div",{className:`max-h-[280px] overflow-y-auto border rounded-xl no-scrollbar divide-y ${n==="light"?"bg-slate-50 border-slate-200 divide-slate-200":"bg-cafe-black/40 border-neutral-805 divide-neutral-900/60"}`,children:Ue.map(d=>s.jsxs("div",{className:"p-3 flex items-center justify-between text-xs gap-3",children:[s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("span",{className:`font-bold block truncate leading-normal ${n==="light"?"text-slate-900":"text-white"}`,children:d.name}),s.jsx("span",{className:"text-[9px] text-neutral-500 font-bold uppercase tracking-wider",children:d.category})]}),s.jsx("div",{className:"w-16",children:s.jsx("input",{type:"number",min:"0",value:d.currentPrice,onChange:x=>Y(d.name,x.target.value),className:`w-full border rounded-lg p-1.5 text-center focus:outline-none focus:border-cafe-amber font-sans font-bold ${n==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-800 text-white"}`})}),s.jsx("button",{onClick:()=>Se(d.name),className:`px-3 py-2 rounded-lg font-bold text-[9px] uppercase tracking-wider transition ${d.isAvailable?"bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20":"bg-red-650/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"}`,children:d.isAvailable?"Available":"Sold Out"})]},d.name))})]})]})]}),s.jsx("div",{className:"fixed top-6 right-6 z-[100] space-y-3 w-80 pointer-events-none",children:l.map(d=>s.jsxs("div",{className:"pointer-events-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl shadow-2xl border border-emerald-500/30 flex items-start justify-between space-x-3 animate-bounce-slow",children:[s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("span",{className:"text-lg",children:"🎉"}),s.jsx("span",{className:"font-extrabold text-sm tracking-wide text-white",children:"Delivery Complete!"})]}),s.jsxs("p",{className:"text-[11px] text-emerald-100 font-medium",children:["Order ",s.jsxs("strong",{children:["#",d.orderId.slice(-6)]})," delivered to ",s.jsx("strong",{children:d.customerName}),"."]}),s.jsxs("p",{className:"text-[10px] text-emerald-250 font-bold",children:["Collected: ",s.jsxs("strong",{children:["₹",d.totalAmount]})]})]}),s.jsx("button",{onClick:()=>h(x=>x.filter(w=>w.id!==d.id)),className:"text-emerald-200 hover:text-white transition-colors",children:"✕"})]},d.id))})]})]})},ih=({activeRoute:r})=>{const{ownerUser:e,loadingAuth:t}=u.useContext(xr);return u.useEffect(()=>{r==="#/shop-counter"&&!t&&!e&&setTimeout(()=>{window.location.hash="#/login"},100)},[e,t,r]),t?s.jsx("div",{className:"min-h-screen bg-cafe-black flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-4 border-cafe-amber border-t-transparent rounded-full animate-spin"})}):r==="#/shop-counter"&&!e?s.jsxs("div",{className:"min-h-screen bg-cafe-black flex flex-col items-center justify-center space-y-4",children:[s.jsx("div",{className:"w-8 h-8 border-4 border-cafe-amber border-t-transparent rounded-full animate-spin"}),s.jsx("p",{className:"text-sm text-neutral-400 font-semibold",children:"Redirecting to login..."})]}):s.jsx(sh,{})},ah=()=>{var yr;const{theme:r,toggleTheme:e}=u.useContext(Fe),{signOut:t}=u.useContext(xr),[n,i]=u.useState([]),[a,o]=u.useState({}),[c,l]=u.useState(()=>localStorage.getItem("cc_rider_id")||""),[h,g]=u.useState(!1),[m,y]=u.useState(null),[L,M]=u.useState(!1),[B,R]=u.useState("pin"),[z,S]=u.useState(!1),[ue,U]=u.useState(""),[he,te]=u.useState(""),[pe,ie]=u.useState(""),[we,ne]=u.useState(""),[Re,_e]=u.useState(null),[me,fe]=u.useState(""),[J,_]=u.useState(()=>localStorage.getItem("cc_rider_profile_name")||""),[E,q]=u.useState(()=>localStorage.getItem("cc_rider_profile_phone")||""),[N,j]=u.useState(()=>localStorage.getItem("cc_login_time")||""),[C,T]=u.useState(!1),[$,le]=u.useState(""),[Oe,De]=u.useState(""),[Te,Ge]=u.useState(""),[jt,ge]=u.useState(""),[Y,Se]=u.useState(!1),[Ue,d]=u.useState(!1),[x,w]=u.useState(null),[I,O]=u.useState(!1),[Ee,ce]=u.useState(null),[Ke,P]=u.useState("");u.useEffect(()=>{if(!c)return;const p=V.collection("riders").doc(c).onSnapshot(f=>{if(f.exists){const v=f.data();O(v.isOnline===!0),ce(v.dutyStartTime||null)}},f=>console.warn("Rider duty sync error:",f));return()=>p()},[c]),u.useEffect(()=>{if(!I||!Ee){P("");return}const p=()=>{const v=Math.max(0,Date.now()-Ee),W=Math.floor(v/6e4),ke=Math.floor(W/60),ft=W%60;ke>0?P(`${ke}h ${ft}m`):P(`${ft}m`)};p();const f=setInterval(p,3e4);return()=>clearInterval(f)},[I,Ee]),u.useEffect(()=>{if(c&&!N){const p=new Date().toLocaleTimeString();localStorage.setItem("cc_login_time",p),j(p)}},[c,N]);const X=J,Ne=u.useRef(new Set),Le=u.useRef(new Set),Ce=u.useRef(null);u.useEffect(()=>{const p=()=>{try{ve.play().then(()=>{ve.pause()}).catch(f=>console.warn("Autoplay unlock failed:",f))}catch{}g(!0),window.removeEventListener("click",p)};return h||window.addEventListener("click",p),()=>window.removeEventListener("click",p)},[h]);const[Je,ct]=u.useState("active"),Z=p=>{if(!p)return"unknown date";const f=new Date(p),v=new Date,W=String(f.getDate()).padStart(2,"0"),ft=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][f.getMonth()],Xr=f.getFullYear(),k=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][f.getDay()],D=`${W}-${ft}-${Xr} ${k}`;return f.toDateString()===v.toDateString()?`todays : ${D}`:D};u.useEffect(()=>{const p=V.collection("orders").where("assignedRider","==",X).onSnapshot(f=>{const v=f.docs.map(W=>({id:W.id,...W.data()}));v.sort((W,ke)=>(ke.createdAt||0)-(W.createdAt||0)),i(v)},f=>console.error("Rider orders query error:",f));return()=>{p()}},[X]),u.useEffect(()=>{if(window.location.hash!=="#/delivery-dashboard"||!h)return;const p=n.filter(v=>v.assignedRider===X&&v.status==="prepared");p.some(v=>!Ne.current.has(v.id))?(p.forEach(v=>Ne.current.add(v.id)),ve.play().catch(v=>console.warn("Rider alarm play blocked:",v))):p.length===0&&(ve.pause(),ve.currentTime=0)},[n,h,X]),u.useEffect(()=>()=>{Ce.current&&clearTimeout(Ce.current)},[]);const Yn=async p=>{const f=p.displayId||p.id.slice(-4).toUpperCase();if(!window.confirm(`Confirm payment received (₹${p.totalAmount}) and mark Order #${f} as delivered?`))return;ve.pause(),ve.currentTime=0,await Rt(p.id,"delivered",{deliveredAt:Date.now(),paymentConfirmedByRider:!0});const v=(p.customerPhone||"").split(" / ")[0].trim();v&&V.collection("users").doc(v).update({phoneStatus:"verified",trustedUser:!0,verified:!0}).catch(W=>console.log("Trust upgrade failed:",W))},Gr=p=>{if(Le.current.has(p))return;Le.current.add(p);const f=Date.now();y({id:f,orderId:p}),Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>{y(null)},4500)},Qn=async p=>{c&&(Le.current.has(p)||(Le.current.add(p),ve.pause(),ve.currentTime=0,await Rt(p,"out_for_delivery",{riderName:J,riderPhone:E,pickedUpBy:J,dispatchedAt:Date.now()}),Gr(p)))};u.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[n,a,r,m,L]);const dt=n.filter(p=>(p.assignedRider===X||p.pickedUpBy===X)&&["preparing","prepared","out_for_delivery"].includes(p.status)),ut=n.filter(p=>(p.assignedRider===X||p.pickedUpBy===X)&&["successfully_delivered","delivered","completed","rejected","cancelled"].includes(p.status)),ht=ut.filter(p=>{if(!["delivered","successfully_delivered","completed"].includes(p.status))return!1;const f=p.deliveredAt||p.createdAt,v=f&&typeof f.toDate=="function"?f.toDate():new Date(f||0),W=new Date;return v.getDate()===W.getDate()&&v.getMonth()===W.getMonth()&&v.getFullYear()===W.getFullYear()}),pt=ht.length,br=ht.reduce((p,f)=>p+Number(f.totalAmount||0),0),Xn=async()=>{if(!c)return;const p=!I;if(!p&&dt.some(v=>v.status==="out_for_delivery")){alert("⚠️ You cannot go offline while delivering an active order! Please complete the delivery handshake first.");return}try{if(p){const f=Date.now();await V.collection("riders").doc(c).update({isOnline:!0,dutyStartTime:f}),O(!0),ce(f)}else await V.collection("riders").doc(c).update({isOnline:!1,dutyEndTime:Date.now()}),O(!1)}catch(f){console.error("Failed to toggle duty status:",f),alert("Could not update duty status. Please check your internet connection.")}},Kr=ut.reduce((p,f)=>{const v=Z(f.deliveredAt||f.createdAt);return p[v]||(p[v]=[]),p[v].push(f),p},{}),Jr=(p,f,v)=>{try{ve.play().then(()=>ve.pause()).catch(()=>{})}catch{}g(!0);const W=new Date().toLocaleTimeString();localStorage.setItem("cc_rider_id",p),localStorage.setItem("cc_rider_profile_name",f),localStorage.setItem("cc_rider_profile_phone",v),localStorage.setItem("cc_login_time",W),_(f),q(v),j(W),l(p)},Yr=async p=>{p.preventDefault();const f=p.target.riderIdInput.value.trim();if(!f||f.length!==6){U("Enter a valid 6-digit ID.");return}S(!0),U("");try{const v=await V.collection("riders").doc(f).get();if(v.exists&&v.data().verified===!0){const W=v.data();Jr(f,W.name,W.phone)}else te(f),R("phone")}catch(v){U("Connection error. Try again."),console.error(v)}finally{S(!1)}},Qr=p=>{p.preventDefault();const f=p.target.riderPhoneInput.value.trim(),v=p.target.confirmRiderPhone.value.trim();if(!(ke=>/^[6-9]\d{9}$/.test(ke))(f)){U("Invalid number. Must be 10 digits starting with 6–9.");return}if(f!==v){U("Phone numbers do not match. Please re-enter both fields.");return}S(!0),U(""),setTimeout(()=>{const ke=Math.floor(1e5+Math.random()*9e5).toString();window._riderMockOtp=ke,S(!1),ie(f);try{new Audio("https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3").play().catch(()=>{})}catch{}R("otp")},2500)},mt=async p=>{if(p.preventDefault(),!me||me.trim()!==window._riderMockOtp){U("Incorrect code. Please try again.");return}S(!0),U(""),setTimeout(()=>{S(!1),R("name")},600)},vr=async p=>{p.preventDefault();const f=p.target.riderNameInput.value.trim();if(!f){U("Enter your name.");return}S(!0),U("");try{await V.collection("riders").doc(he).set({name:f,phone:pe,verified:!0,registeredAt:Date.now()}),Jr(he,f,pe)}catch(v){U("Failed to save profile: "+(v.message||"Try again.")),console.error(v)}finally{S(!1)}};return c?s.jsxs("div",{className:`min-h-screen p-6 max-w-md mx-auto shadow-2xl border-x transition-colors duration-300 font-sans ${r==="light"?"bg-slate-50 border-slate-200 text-slate-800":"bg-cafe-black border-neutral-900/60 text-white"}`,children:[s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:`flex items-center gap-3 justify-between w-full px-4 py-3 sticky top-0 z-50 border-b -mx-6 mb-2 ${r==="light"?"bg-white border-slate-200 shadow-sm":"bg-cafe-black border-neutral-800 shadow-md"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0 overflow-hidden",children:[s.jsx("img",{src:"./logo_rm_bg.png",className:"h-9 w-auto object-contain flex-shrink-0 drop-shadow-sm",alt:"Crispy Chick Logo"}),s.jsx("h1",{className:`font-sans font-black text-sm sm:text-base tracking-tight flex items-center truncate transition-colors duration-300 ${r==="light"?"text-slate-900":"text-white"}`,children:"Crispy Chick"})]}),s.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 pl-2",children:[s.jsxs("button",{onClick:e,className:`p-2 rounded-xl border transition-all duration-300 ${r==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber":"bg-white border-slate-200 text-cafe-crispy shadow-sm"}`,children:[s.jsx("i",{"data-lucide":"sun",className:r==="dark"?"w-4 h-4 block":"hidden"}),s.jsx("i",{"data-lucide":"moon",className:r==="light"?"w-4 h-4 block":"hidden"})]}),s.jsxs("button",{onClick:()=>M(!0),className:`text-xs font-bold px-3 py-2 rounded-xl border flex items-center space-x-1.5 transition-all ${r==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white":"bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm"}`,title:"View Profile",children:[s.jsx("i",{"data-lucide":"user-circle",className:"w-3.5 h-3.5"}),s.jsxs("span",{children:["👤 Profile (",J,")"]})]})]})]}),s.jsxs("div",{className:`p-4 rounded-2xl border shadow-md space-y-3 transition-all ${I?r==="light"?"bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-300 shadow-emerald-500/10":"bg-gradient-to-r from-emerald-950/40 to-teal-950/30 border-emerald-700/60":r==="light"?"bg-slate-100 border-slate-200":"bg-neutral-900/60 border-neutral-800"}`,children:[s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsxs("div",{className:"flex items-center space-x-2.5 min-w-0",children:[s.jsx("div",{className:`w-3.5 h-3.5 rounded-full flex-shrink-0 ${I?"bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20":"bg-neutral-500"}`}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("span",{className:`text-xs font-black uppercase tracking-wider block truncate ${I?r==="light"?"text-emerald-700":"text-emerald-400":r==="light"?"text-slate-600":"text-neutral-400"}`,children:I?"🟢 DUTY ACTIVE (ONLINE)":"⚪ DUTY INACTIVE (OFFLINE)"}),s.jsx("span",{className:`text-[10px] block truncate ${r==="light"?"text-slate-500":"text-neutral-400"}`,children:I?"Ready to accept incoming delivery rides":"You are currently offline"})]})]}),s.jsx("button",{onClick:Xn,className:`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95 flex-shrink-0 flex items-center gap-1.5 ${I?"bg-red-600 hover:bg-red-700 text-white shadow-red-600/30":"bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30"}`,children:I?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"🔴"}),s.jsx("span",{children:"GO OFFLINE"})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"🟢"}),s.jsx("span",{children:"GO ONLINE 🚀"})]})})]}),I&&s.jsxs("div",{className:`pt-2 border-t flex items-center justify-between text-[11px] font-semibold ${r==="light"?"border-emerald-200/80 text-emerald-700":"border-emerald-800/40 text-emerald-400"}`,children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx("span",{children:"⏱️ Duty Time:"}),s.jsx("span",{className:"font-mono font-black",children:Ke||"Just started"})]}),s.jsx("span",{className:"text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full font-bold uppercase",children:"Monitoring Rides"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsxs("div",{className:`p-3.5 rounded-2xl border shadow-sm ${r==="light"?"bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200":"bg-gradient-to-r from-emerald-950/40 to-teal-900/30 border-emerald-800/60"}`,children:[s.jsxs("div",{className:"flex items-center space-x-1.5 mb-1",children:[s.jsx("span",{className:"text-base",children:"🏆"}),s.jsx("p",{className:`text-[10px] font-extrabold uppercase tracking-wider ${r==="light"?"text-emerald-800":"text-emerald-400"}`,children:"Deliveries"})]}),s.jsxs("div",{className:`text-2xl font-black tabular-nums ${r==="light"?"text-emerald-700":"text-emerald-300"}`,children:[pt," ",s.jsx("span",{className:"text-[11px] font-semibold text-neutral-400",children:"orders"})]})]}),s.jsxs("div",{className:`p-3.5 rounded-2xl border shadow-sm ${r==="light"?"bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200":"bg-gradient-to-r from-amber-950/40 to-orange-900/30 border-amber-800/60"}`,children:[s.jsxs("div",{className:"flex items-center space-x-1.5 mb-1",children:[s.jsx("span",{className:"text-base",children:"💰"}),s.jsx("p",{className:`text-[10px] font-extrabold uppercase tracking-wider ${r==="light"?"text-amber-800":"text-amber-400"}`,children:"Collected"})]}),s.jsxs("div",{className:`text-2xl font-black tabular-nums ${r==="light"?"text-amber-700":"text-amber-300"}`,children:["₹",br]})]})]}),s.jsxs("div",{className:`flex rounded-xl p-1 border ${r==="light"?"bg-slate-100 border-slate-200":"bg-neutral-900/50 border-neutral-800"}`,children:[s.jsxs("button",{onClick:()=>ct("active"),className:`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 ${Je==="active"?"bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-md":"text-neutral-400 hover:text-white"}`,children:["🛵 Active (",dt.length,")"]}),s.jsxs("button",{onClick:()=>ct("history"),className:`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 ${Je==="history"?"bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-md":"text-neutral-400 hover:text-white"}`,children:["📜 History (",ut.length,")"]})]}),Je==="active"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:dt.length===0?"p-16 text-center text-neutral-500 space-y-3 block":"hidden",children:[s.jsx("span",{className:"text-5xl animate-pulse",children:"🥚"}),s.jsx("p",{className:"text-sm font-medium",children:"No active order allocations assigned."})]}),s.jsx("div",{className:dt.length>0?"space-y-6 block":"hidden",children:dt.map(p=>{const f=p.status!=="preparing",v=["successfully_delivered","delivered","completed"].includes(p.status);return s.jsxs("div",{className:`relative rounded-3xl p-5 border overflow-hidden transition-all duration-550 ${v?"border-emerald-500/30 bg-emerald-950/5":f?"border-cafe-amber/30 shadow-[0_0_20px_rgba(217,119,6,0.1)]":"border-neutral-805/80"} ${r==="light"?"bg-white text-slate-855":"bg-cafe-card text-white"}`,children:[s.jsxs("div",{className:!f&&!v?"absolute inset-0 bg-neutral-950/95 z-20 flex flex-col items-center justify-center p-4 text-center block":"hidden",children:[s.jsx("div",{className:"w-20 h-28 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-[50%_50%_50%_50%/_60%_60%_40%_40%] shadow-[0_0_25px_rgba(245,158,11,0.5)] border border-amber-300 animate-pulse flex items-center justify-center",children:s.jsx("span",{className:"text-3xl text-cafe-black font-bold",children:"🐣"})}),s.jsxs("div",{className:"mt-4 space-y-1",children:[s.jsxs("h4",{className:"font-bold text-white text-sm",children:["Order #",p.displayId||p.id.slice(-4).toUpperCase()," is Incubating"]}),s.jsx("p",{className:"text-[10px] text-neutral-455 max-w-[200px] leading-normal",children:"Shop counter is preparing this order. Egg cracks open once dispatched."})]})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:`flex justify-between items-center pb-2.5 border-b ${r==="light"?"border-slate-100":"border-neutral-900"}`,children:[s.jsxs("span",{className:`font-bold text-sm ${r==="light"?"text-slate-800":"text-neutral-300"}`,children:["Job #",p.displayId||p.id.slice(-4).toUpperCase()]}),s.jsxs("div",{className:"flex flex-col items-end space-y-0.5",children:[s.jsx("span",{className:`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${v?"bg-emerald-500/10 text-emerald-400":"bg-indigo-500/10 text-indigo-400"}`,children:p.status.replace(/_/g," ")}),s.jsxs("span",{className:"text-[9px] font-semibold text-cafe-amber tracking-wide",children:["Ordered at: ",p.placementTime||(p.createdAt?new Date(p.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--")]})]})]}),s.jsxs("div",{className:"space-y-2 text-xs",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"user",className:"w-4 h-4 text-neutral-550"}),s.jsx("span",{className:`font-bold ${r==="light"?"text-slate-900":"text-white"}`,children:p.customerName})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"phone",className:"w-4 h-4 text-neutral-550"}),s.jsx("a",{href:`tel:${p.customerPhone}`,className:"text-cafe-amber hover:underline font-semibold font-sans",children:p.customerPhone})]}),s.jsxs("div",{className:"flex items-start space-x-2",children:[s.jsx("i",{"data-lucide":"map-pin",className:"w-4 h-4 text-neutral-550 mt-0.5"}),s.jsx("span",{className:`${r==="light"?"text-slate-600":"text-neutral-300"} leading-normal`,children:p.landmarks})]})]}),s.jsxs("div",{className:p.status==="out_for_delivery"?"w-full my-3 p-3 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500/40 rounded-xl text-center block":"hidden",children:[s.jsx("span",{className:"block text-xs font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider",children:"COLLECT CASH / UPI PAYMENT"}),s.jsxs("span",{className:"text-3xl font-black text-emerald-600 dark:text-emerald-400",children:["₹",p.totalAmount]})]}),s.jsx("div",{className:p.status==="out_for_delivery"?"block":"hidden",children:s.jsxs("a",{href:Wu(p),target:"_blank",rel:"noopener noreferrer",className:`w-full py-3 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition border shadow-md block text-center text-white ${r==="light"?"bg-neutral-900 hover:bg-neutral-800 border-neutral-700":"bg-neutral-800 hover:bg-neutral-700 border-neutral-700"}`,children:[s.jsx("i",{"data-lucide":"navigation",className:"w-4 h-4 text-cafe-amber"}),s.jsx("span",{children:p.gpsLat!=null&&p.gpsLng!=null?"LAUNCH GPS PINPOINT NAVIGATION":"LAUNCH GOOGLE MAPS NAVIGATION"})]})}),s.jsx("div",{className:p.status==="prepared"?"pt-2 block":"hidden",children:s.jsx("button",{onClick:()=>Qn(p.id),className:"w-full py-3 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold text-sm rounded-xl shadow-lg transition-all hover:brightness-110 active:scale-98",children:"Mark as Picked Up & Start Delivery"})}),s.jsxs("div",{className:p.status==="out_for_delivery"?"block space-y-2.5 pt-2":"hidden",children:[s.jsx("button",{onClick:()=>w(p),className:"w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98",children:s.jsxs("span",{children:["📲 SHOW UPI PAYMENT QR (₹",p.totalAmount,")"]})}),s.jsx("button",{onClick:()=>Yn(p),className:"w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2",children:s.jsx("span",{children:"✅ CONFIRM PAYMENT & COMPLETE DELIVERY"})})]}),s.jsxs("div",{className:v?"bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 text-center space-y-1 block":"hidden",children:[s.jsx("span",{className:"text-emerald-400 font-extrabold text-xs block",children:"✅ Handshake Verification Complete"}),s.jsx("span",{className:"text-[10px] text-neutral-455 font-medium",children:"Order successfully completed and verified."})]})]})]},p.displayId||p.id.slice(0,4))})}),x&&s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:s.jsxs("div",{className:`w-full max-w-sm rounded-3xl border p-6 space-y-3 shadow-2xl relative ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-card border-neutral-800 text-white"}`,children:[s.jsx("button",{onClick:()=>w(null),className:`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${r==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-600":"bg-neutral-800 hover:bg-neutral-700 text-neutral-350"}`,children:s.jsx("i",{"data-lucide":"x",className:"w-4 h-4"})}),s.jsxs("div",{className:"text-center space-y-1 pt-1",children:[s.jsx("div",{className:"w-12 h-12 bg-indigo-500/15 text-indigo-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-indigo-500/20",children:s.jsx("i",{"data-lucide":"qr-code",className:"w-6 h-6"})}),s.jsx("h3",{className:"font-serif font-bold text-base",children:"Collect Payment via UPI"}),s.jsxs("p",{className:"text-sm font-extrabold text-emerald-600 dark:text-emerald-400",children:["Scan & Pay ₹",x.totalAmount]})]}),s.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9035733573@upi%26pn=Crispy%20Chick%20KGF%26am=${x.totalAmount}`,alt:"UPI Payment QR",className:"mx-auto rounded-xl border p-2 bg-white shadow-inner my-3",style:{width:"240px",height:"240px"}}),s.jsx("p",{className:`text-center text-[11px] font-medium ${r==="light"?"text-slate-500":"text-neutral-450"}`,children:"Ask customer to scan with Google Pay, PhonePe, or Paytm."}),s.jsx("button",{onClick:async()=>{const p=x.displayId||x.id.slice(-4).toUpperCase();if(!window.confirm(`Confirm payment received (₹${x.totalAmount}) and mark Order #${p} as delivered?`))return;ve.pause(),ve.currentTime=0,await Rt(x.id,"delivered",{deliveredAt:Date.now(),paymentConfirmedByRider:!0});const f=(x.customerPhone||"").split(" / ")[0].trim();f&&V.collection("users").doc(f).update({phoneStatus:"verified",trustedUser:!0,verified:!0}).catch(v=>console.log("Trust upgrade failed:",v)),w(null)},className:"w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2",children:"✅ PAYMENT RECEIVED & DELIVER ORDER"})]})})]}),Je==="history"&&s.jsx("div",{className:"space-y-6",children:ut.length===0?s.jsxs("div",{className:`p-16 text-center rounded-3xl border ${r==="light"?"bg-white border-slate-200 text-slate-500":"bg-cafe-card border-neutral-800 text-neutral-500"}`,children:[s.jsx("span",{className:"text-5xl block mb-2",children:"📜"}),s.jsx("p",{className:"text-sm font-semibold",children:"No completed deliveries found in the last 7 days."})]}):s.jsx("div",{className:`overflow-x-auto rounded-2xl border ${r==="light"?"bg-white border-slate-200 text-slate-800":"bg-cafe-card border-neutral-800 text-white"}`,children:s.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[s.jsx("thead",{children:s.jsxs("tr",{className:`border-b text-[10px] font-bold uppercase tracking-wider ${r==="light"?"bg-slate-100 text-slate-600":"bg-neutral-900 text-neutral-400"}`,children:[s.jsx("th",{className:"px-3 py-3",children:"Order Details"}),s.jsx("th",{className:"px-3 py-3",children:"Billing Address"}),s.jsx("th",{className:"px-3 py-3",children:"Status"})]})}),s.jsx("tbody",{className:`divide-y ${r==="light"?"divide-slate-200":"divide-neutral-900/60"}`,children:Object.entries(Kr).map(([p,f])=>s.jsxs(Or.Fragment,{children:[s.jsx("tr",{className:"bg-gray-100/50 text-left",children:s.jsx("td",{colSpan:"3",className:"py-2 px-3 font-bold text-sm text-gray-700",children:p})}),f.map(v=>s.jsxs("tr",{className:"hover:bg-neutral-900/5 transition-colors border-b border-neutral-800/10",children:[s.jsxs("td",{className:"px-3 py-2 leading-relaxed",children:[s.jsxs("div",{className:`font-bold ${r==="light"?"text-slate-900":"text-white"}`,children:[v.displayId," ",typeof v.items=="string"?v.items:(v.items||[]).map(W=>`${W.quantity}x ${W.name}`).join(", ")]}),s.jsxs("div",{className:"text-neutral-450 text-[10px] mt-0.5",children:["Delivered At: ",v.deliveredAt?v.deliveredAt.toDate?v.deliveredAt.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(v.deliveredAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):v.placementTime||(v.createdAt?new Date(v.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--")," | ₹",v.total??v.totalAmount]}),s.jsx("small",{className:"text-gray-500 block mt-0.5",children:v.customerName})]}),s.jsx("td",{className:"max-w-[150px] truncate px-3 py-2",title:v.address||v.customerAddress||v.landmarks,children:v.landmarks||v.address||v.customerAddress}),s.jsx("td",{className:"whitespace-nowrap px-3 py-2",children:s.jsx("span",{className:`inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${["successfully_delivered","delivered","completed"].includes(v.status)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-red-500/10 text-red-400 border border-red-500/20"}`,children:["successfully_delivered","delivered","completed"].includes(v.status)?"Delivered":v.status.replace(/_/g," ")})})]},v.id))]},p))})]})})})]}),s.jsx("div",{className:`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-xs pointer-events-none ${m?"block":"hidden"}`,children:s.jsxs("div",{className:"pointer-events-auto bg-gradient-to-r from-indigo-600 to-cafe-amber text-white p-4 rounded-xl shadow-2xl border border-indigo-400/30 flex items-center space-x-3 animate-bounce-slow",children:[s.jsx("span",{className:"text-2xl",children:"🛵"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("span",{className:"font-extrabold text-sm tracking-wide block",children:"Ride Safe!"}),s.jsxs("p",{className:"text-[11px] text-indigo-100 font-medium",children:["Job #",(yr=m==null?void 0:m.orderId)==null?void 0:yr.slice(-6)," accepted. Drive carefully!"]})]})]})}),s.jsx("div",{className:L?"block fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs":"hidden",children:s.jsxs("div",{className:`w-full max-w-sm rounded-3xl border p-6 space-y-4 shadow-2xl relative ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-card border-neutral-800 text-white"}`,children:[s.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-neutral-800/10",children:[s.jsxs("h3",{className:"font-serif font-bold text-base flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"user",className:"w-5 h-5 text-cafe-amber"}),s.jsx("span",{children:"👤 Rider Profile"})]}),s.jsx("button",{onClick:()=>M(!1),className:"text-neutral-500 hover:text-neutral-300 transition",children:s.jsx("i",{"data-lucide":"x",className:"w-5 h-5"})})]}),s.jsxs("form",{onSubmit:p=>{p.preventDefault();const f=p.target.riderNameInput.value.trim();f&&(V.collection("riders").doc(c).update({name:f}).catch(()=>{}),localStorage.setItem("cc_rider_profile_name",f),_(f),M(!1))},className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2",children:"Rider Name"}),s.jsx("input",{name:"riderNameInput",required:!0,type:"text",defaultValue:J,className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-slate-50 border-slate-200 text-slate-900":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:`p-3 rounded-xl border text-xs flex justify-between items-center ${r==="light"?"bg-slate-50 border-slate-200 text-slate-600":"bg-neutral-900/60 border-neutral-800 text-neutral-400"}`,children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-bold text-[10px] uppercase tracking-widest text-cafe-amber mb-1",children:"Current Phone"}),s.jsx("p",{className:"font-mono font-bold text-sm",children:E||"Not set"})]}),!C&&s.jsx("button",{type:"button",onClick:()=>T(!0),className:`px-3 py-1.5 rounded-lg border text-[10px] font-extrabold transition-colors ${r==="light"?"bg-white border-slate-300 text-slate-700 hover:bg-slate-100":"bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700"}`,children:"✏️ Change"})]}),C&&s.jsxs("div",{className:`p-4 rounded-xl border space-y-4 shadow-inner ${r==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/40 border-neutral-800"}`,children:[s.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-cafe-amber border-b border-neutral-200 dark:border-neutral-800 pb-2",children:"Secure Phone Update"}),Ue?s.jsxs("div",{className:"space-y-4 animate-in fade-in slide-in-from-top-2 duration-300",children:[s.jsxs("div",{className:`p-3 rounded-xl border text-center ${r==="light"?"bg-amber-50 border-amber-200":"bg-cafe-amber/10 border-cafe-amber/30"}`,children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest text-cafe-amber",children:"Verification Code"}),s.jsxs("p",{className:`text-[11px] mt-0.5 ${r==="light"?"text-slate-500":"text-neutral-400"}`,children:["Enter code sent to ",$]})]}),s.jsx("div",{children:s.jsx("input",{type:"text",inputMode:"numeric",maxLength:"6",placeholder:"• • • • • •",value:Te,onChange:p=>Ge(p.target.value.replace(/\D/g,"").slice(0,6)),className:`w-full border rounded-xl px-4 py-3 text-xl text-center tracking-[0.5em] font-black focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{type:"button",disabled:Y,onClick:()=>{if(Te!==jt){alert("Incorrect code. Please try again.");return}Se(!0),V.collection("riders").doc(c).update({phone:$}).then(()=>{localStorage.setItem("cc_rider_profile_phone",$),q($),T(!1),le(""),De(""),d(!1),ge(""),Ge(""),alert("✅ Phone Number Updated Successfully")}).catch(p=>{alert("Failed to update: "+p.message)}).finally(()=>Se(!1))},className:"flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-extrabold rounded-lg text-[11px] shadow-sm disabled:opacity-60 flex items-center justify-center",children:Y?s.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):"VERIFY & UPDATE"}),s.jsx("button",{type:"button",disabled:Y,onClick:()=>{d(!1),ge(""),Ge("")},className:`px-3 py-2.5 rounded-lg border font-extrabold text-[11px] disabled:opacity-60 ${r==="light"?"bg-white border-slate-300 text-slate-600 hover:bg-slate-100":"bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700"}`,children:"BACK"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-455 uppercase tracking-wider mb-2",children:"New Phone Number"}),s.jsx("input",{type:"tel",placeholder:"E.g., 9876543210",maxLength:"10",inputMode:"numeric",value:$,onChange:p=>le(p.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-455 uppercase tracking-wider mb-2",children:"Confirm New Phone"}),s.jsx("input",{type:"tel",placeholder:"Re-enter new number",maxLength:"10",inputMode:"numeric",value:Oe,onChange:p=>De(p.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`})]})]}),s.jsxs("div",{className:"flex gap-2 pt-1",children:[s.jsx("button",{type:"button",disabled:Y,onClick:()=>{if(!(f=>/^[6-9]\d{9}$/.test(f))($)){alert("Invalid phone. Must be 10 digits starting with 6–9.");return}if($!==Oe){alert("Phone numbers do not match.");return}if(/^(\d)\1+$/.test($)){alert("Invalid phone format.");return}Se(!0),setTimeout(()=>{try{new Audio("https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3").play().catch(()=>{})}catch{}const f=Math.floor(1e5+Math.random()*9e5).toString();ge(f),Se(!1),d(!0),alert("🔔 Rider Security Code: "+f)},2500)},className:"flex-1 py-2.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-lg text-[11px] disabled:opacity-60 flex items-center justify-center",children:Y?s.jsx("div",{className:"w-4 h-4 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):"SEND SECURITY CODE"}),s.jsx("button",{type:"button",disabled:Y,onClick:()=>{T(!1),le(""),De(""),d(!1),ge(""),Ge("")},className:`px-3 py-2.5 rounded-lg border font-extrabold text-[11px] disabled:opacity-60 ${r==="light"?"bg-white border-slate-300 text-slate-600 hover:bg-slate-100":"bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700"}`,children:"CANCEL"})]})]})]}),s.jsxs("div",{className:`p-4 rounded-xl border space-y-1 text-xs ${r==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/60 border-neutral-800"}`,children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-wider block",children:"Session Details"}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{className:"text-neutral-450 font-medium",children:"Login Time:"}),s.jsx("span",{className:"font-bold text-cafe-amber",children:N||"Not recorded"})]})]}),s.jsxs("div",{className:"flex gap-3 pt-2",children:[s.jsx("button",{type:"submit",className:"flex-1 py-3 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg text-xs",children:"SAVE CHANGES"}),s.jsx("button",{type:"button",onClick:()=>{localStorage.removeItem("cc_rider_id"),localStorage.removeItem("cc_rider_profile_name"),localStorage.removeItem("cc_rider_profile_phone"),localStorage.removeItem("cc_login_time"),l(""),M(!1)},className:"px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-lg text-xs",children:"LOGOUT"})]})]})]})})]}):s.jsxs("div",{className:"min-h-screen bg-cafe-black flex items-center justify-center p-6 relative font-sans text-white",children:[s.jsx("div",{className:"fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950 pointer-events-none z-0"}),s.jsxs("div",{className:"w-full max-w-sm bg-cafe-card rounded-3xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative z-10 text-center",children:[s.jsx("img",{src:"./logo_rm_bg.png",className:"h-16 mx-auto object-contain mb-2 drop-shadow-sm",alt:"Crispy Chick Logo"}),s.jsx("div",{className:"flex justify-center gap-2",children:["pin","phone","otp","name"].map((p,f)=>s.jsx("div",{className:`h-1.5 rounded-full transition-all duration-300 ${["pin","phone","otp","name"].indexOf(B)>=f?"bg-cafe-amber w-6":"bg-neutral-700 w-3"}`},p))}),ue&&s.jsx("p",{className:"text-[11px] text-red-400 font-bold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2",children:ue}),B==="pin"&&s.jsxs("form",{onSubmit:Yr,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"Rider Gate"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Enter your 6-Digit Rider ID"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"6-Digit Rider ID"}),s.jsx("input",{name:"riderIdInput",required:!0,type:"text",pattern:"\\d{6}",maxLength:"6",placeholder:"E.g., 123456",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center tracking-widest font-black"})]}),s.jsx("button",{type:"submit",disabled:z,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-sm disabled:opacity-60",children:z?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"VERIFY ID"})})]}),B==="phone"&&s.jsxs("form",{onSubmit:Qr,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"First-Time Setup"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Enter your mobile number twice to confirm."})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:["Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{name:"riderPhoneInput",required:!0,type:"tel",placeholder:"E.g., 9876543210",maxLength:"10",pattern:"[6-9][0-9]{9}",inputMode:"numeric",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold tracking-widest"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:["Confirm Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{name:"confirmRiderPhone",required:!0,type:"tel",placeholder:"Re-enter number",maxLength:"10",pattern:"[6-9][0-9]{9}",inputMode:"numeric",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold tracking-widest"})]}),s.jsx("button",{type:"submit",disabled:z,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60",children:z?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"SEND SECURE CODE ›"})}),s.jsx("button",{type:"button",onClick:()=>{R("pin"),U("")},className:"w-full text-[11px] text-neutral-500 hover:text-neutral-300 transition",children:"← Back"})]}),B==="otp"&&s.jsxs("form",{onSubmit:mt,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"Enter Security Code"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Use the code generated below to continue."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-neutral-900 border-neutral-700",children:[s.jsx("span",{className:"text-2xl font-black tracking-[0.35em] text-cafe-amber select-all font-mono flex-1 text-center",id:"rider-otp-display",children:window._riderMockOtp||"——————"}),s.jsx("button",{type:"button",id:"rider-otp-copy-btn",onClick:()=>{const p=window._riderMockOtp||"";try{navigator.clipboard.writeText(p).then(()=>{const f=document.getElementById("rider-otp-copy-btn");f&&(f.textContent="Copied ✓",setTimeout(()=>{f.textContent="Copy"},1500))}).catch(()=>{})}catch{}},className:"shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 transition-all",children:"Copy"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Enter Code to Verify"}),s.jsx("input",{required:!0,type:"text",pattern:"\\d{6}",maxLength:"6",placeholder:"••••••",value:me,onChange:p=>fe(p.target.value),className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center tracking-[0.5em] font-black"})]}),s.jsx("button",{type:"submit",disabled:z,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60",children:z?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"VERIFY CODE →"})}),s.jsx("button",{type:"button",onClick:()=>{R("phone"),U(""),fe("")},className:"w-full text-[11px] text-neutral-500 hover:text-neutral-300 transition",children:"← Back"})]}),B==="name"&&s.jsxs("form",{onSubmit:vr,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"Almost There!"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Phone verified ✅ — Enter your display name."})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Your Name"}),s.jsx("input",{name:"riderNameInput",required:!0,type:"text",placeholder:"E.g., Salman",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold"})]}),s.jsx("button",{type:"submit",disabled:z,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60",children:z?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"START DELIVERING 🛵"})})]})]})]})},oh=()=>s.jsx(ah,{}),lh=()=>{const[r,e]=u.useState(window.location.hash||"#/"),[t,n]=u.useState(null);u.useEffect(()=>{const a=()=>{e(window.location.hash||"#/")};return window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[]);const i=(a,o)=>{n({id:a,otp:o})};return s.jsx("div",{className:"min-h-screen flex flex-col bg-cafe-black font-sans",children:s.jsxs("div",{className:"flex-1 flex flex-col",children:[s.jsx("div",{className:r==="#/"||r===""?"block":"hidden",children:s.jsx(rh,{onCheckoutSuccess:i})}),s.jsx("div",{className:r==="#/login"?"block":"hidden",children:s.jsx(nh,{})}),s.jsx("div",{className:r==="#/shop-counter"?"block":"hidden",children:s.jsx(ih,{activeRoute:r})}),s.jsx("div",{className:r==="#/delivery-dashboard"?"block":"hidden",children:s.jsx(oh,{})})]})})};function ch(){return s.jsx(Ru,{children:s.jsx(Gu,{children:s.jsx(Ku,{children:s.jsx(lh,{})})})})}pn.createRoot(document.getElementById("root")).render(s.jsx(Or.StrictMode,{children:s.jsx(ch,{})}));

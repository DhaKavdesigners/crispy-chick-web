import{r as d,a as Ji,R as Ar}from"./vendor-nf7bT_Uh.js";import{L as Es,g as Yi,d as rn,E as sr,c as js,r as kr,m as Xi,S as At,o as Qi,s as Zi,a as Yn,i as ea,_ as nn,D as sn,b as Xn,C as Jt,e as ta,f as ra,h as na,T as sa,G as ia,j as aa,k as oa,l as la,n as ca,F as Qn,p as da,q as R,t as an,u as ua,v as Ps,w as Cs,x as ha,y as Qe,z as pa,A as ma,B as fa,H as ga,I as ba,J as xa,K as va,M as wa,N as ya,O as _a,P as Ia,Q as Na,R as Zn,U as As,V as ir,W as wr,X as ka,Y as Rs,Z as es,$ as ts,a0 as Sa,a1 as Ta,a2 as Ea,a3 as ja,a4 as on,a5 as ln,a6 as Pa,a7 as Ca,a8 as Aa,a9 as Ra,aa as Oa,ab as Da,ac as La,ad as Ma,ae as Ua,af as Fa,ag as $a,ah as Va,ai as Wa,aj as qa,ak as Ha,al as Ba,am as za,an as Ga,ao as Ka,ap as Ja,aq as Ya,ar as Xa,as as Qa,at as Za,au as eo,av as to,aw as yn,ax as Os,ay as G,az as _n,aA as Ds,aB as te,aC as tt,aD as ro,aE as Rt,aF as It,aG as Ht,aH as Ls,aI as no,aJ as so,aK as Ms,aL as cn}from"./firebase-core-DLFksTk0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var Us={exports:{}},Rr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=d,ao=Symbol.for("react.element"),oo=Symbol.for("react.fragment"),lo=Object.prototype.hasOwnProperty,co=io.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uo={key:!0,ref:!0,__self:!0,__source:!0};function Fs(r,e,t){var n,i={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)lo.call(e,n)&&!uo.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:ao,type:r,key:a,ref:o,props:i,_owner:co.current}}Rr.Fragment=oo;Rr.jsx=Fs;Rr.jsxs=Fs;Us.exports=Rr;var s=Us.exports,dn={},rs=Ji;dn.createRoot=rs.createRoot,dn.hydrateRoot=rs.hydrateRoot;/**
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
 */class ho{constructor(e,t){this._delegate=e,this.firebase=t,Xn(e,new Jt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ta(this._delegate)))}_getService(e,t=sn){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=sn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Xn(this._delegate,e)}_addOrOverwriteComponent(e){ra(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const po={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ns=new sr("app-compat","Firebase",po);/**
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
 */function mo(r){const e={},t={__esModule:!0,initializeApp:a,app:i,registerVersion:kr,setLogLevel:Zi,onLog:Qi,apps:null,SDK_VERSION:At,INTERNAL:{registerComponent:c,removeApp:n,useAsService:l,modularAPIs:Xi}};t.default=t,Object.defineProperty(t,"apps",{get:o});function n(u){delete e[u]}function i(u){if(u=u||sn,!Yn(e,u))throw ns.create("no-app",{appName:u});return e[u]}i.App=r;function a(u,b={}){const p=ea(u,b);if(Yn(e,p.name))return e[p.name];const y=new r(p,t);return e[p.name]=y,y}function o(){return Object.keys(e).map(u=>e[u])}function c(u){const b=u.name,p=b.replace("-compat","");if(nn(u)&&u.type==="PUBLIC"){const y=(M=i())=>{if(typeof M[p]!="function")throw ns.create("invalid-app-argument",{appName:b});return M[p]()};u.serviceProps!==void 0&&rn(y,u.serviceProps),t[p]=y,r.prototype[p]=function(...M){return this._getService.bind(this,b).apply(this,u.multipleInstances?M:[])}}return u.type==="PUBLIC"?t[p]:null}function l(u,b){return b==="serverAuth"?null:b}return t}/**
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
 */function $s(){const r=mo(ho);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:$s,extendNamespace:e,createSubscribe:js,ErrorFactory:sr,deepExtend:rn});function e(t){rn(r,t)}return r}const fo=$s();/**
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
 */const ss=new Es("@firebase/app-compat"),go="@firebase/app-compat",bo="0.2.43";/**
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
 */function xo(r){kr(go,bo,r)}/**
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
 */try{const r=Yi();if(r.firebase!==void 0){ss.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ss.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ze=fo;xo();var vo="firebase",wo="10.14.1";/**
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
 */ze.registerVersion(vo,wo,"app-compat");const yo="@firebase/firestore-compat",_o="0.3.38";/**
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
 */function In(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ir("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function is(){if(typeof Uint8Array>"u")throw new ir("unimplemented","Uint8Arrays are not available in this environment.")}function as(){if(!Ya())throw new ir("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Yt{constructor(e){this._delegate=e}static fromBase64String(e){return as(),new Yt(ln.fromBase64String(e))}static fromUint8Array(e){return is(),new Yt(ln.fromUint8Array(e))}toBase64(){return as(),this._delegate.toBase64()}toUint8Array(){return is(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function un(r){return Io(r,["next","error","complete"])}function Io(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class No{enableIndexedDbPersistence(e,t){return Xa(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Qa(e._delegate)}clearIndexedDbPersistence(e){return Za(e._delegate)}}class Vs{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Pa||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ca("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Aa(this._delegate,e,t,n)}enableNetwork(){return Ra(this._delegate)}disableNetwork(){return Oa(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Da("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return La(this._delegate)}onSnapshotsInSync(e){return Ma(this._delegate,e)}get app(){if(!this._appCompat)throw new ir("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new jt(this,Rs(this._delegate,e))}catch(t){throw oe(t,"collection()","Firestore.collection()")}}doc(e){try{return new xe(this,an(this._delegate,e))}catch(t){throw oe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ae(this,Ua(this._delegate,e))}catch(t){throw oe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Fa(this._delegate,t=>e(new Ws(this,t)))}batch(){return $a(this._delegate),new qs(new Va(this._delegate,e=>Wa(this._delegate,e)))}loadBundle(e){return qa(this._delegate,e)}namedQuery(e){return Ha(this._delegate,e).then(t=>t?new ae(this,t):null)}}class Or extends Ka{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(new ln(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return xe.forKey(t,this.firestore,null)}}function ko(r){aa(r)}class Ws{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Or(e)}get(e){const t=dt(e);return this._delegate.get(t).then(n=>new Xt(this._firestore,new on(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=dt(e);return n?(In("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const a=dt(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,n,...i),this}delete(e){const t=dt(e);return this._delegate.delete(t),this}}class qs{constructor(e){this._delegate=e}set(e,t,n){const i=dt(e);return n?(In("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const a=dt(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,n,...i),this}delete(e){const t=dt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class mt{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Ga(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Qt(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=mt.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let a=i.get(t);return a||(a=new mt(e,new Or(e),t),i.set(t,a)),a}}mt.INSTANCES=new WeakMap;class xe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Or(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ir("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new xe(t,new wr(t._delegate,n,new ka(e)))}static forKey(e,t,n){return new xe(t,new wr(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new jt(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new jt(this.firestore,Rs(this._delegate,e))}catch(t){throw oe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=R(e),e instanceof wr?Ps(this._delegate,e):!1}set(e,t){t=In("DocumentReference.set",t);try{return t?es(this._delegate,e,t):es(this._delegate,e)}catch(n){throw oe(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?ts(this._delegate,e):ts(this._delegate,e,t,...n)}catch(i){throw oe(i,"updateDoc()","DocumentReference.update()")}}delete(){return Sa(this._delegate)}onSnapshot(...e){const t=Hs(e),n=Bs(e,i=>new Xt(this.firestore,new on(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return As(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Ta(this._delegate):(e==null?void 0:e.source)==="server"?t=Ea(this._delegate):t=ja(this._delegate),t.then(n=>new Xt(this.firestore,new on(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new xe(this.firestore,e?this._delegate.withConverter(mt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function oe(r,e,t){return r.message=r.message.replace(e,t),r}function Hs(r){for(const e of r)if(typeof e=="object"&&!un(e))return e;return{}}function Bs(r,e){var t,n;let i;return un(r[0])?i=r[0]:un(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:a=>{i.next&&i.next(e(a))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class Xt{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new xe(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Cs(this._delegate,e._delegate)}}class Qt extends Xt{data(e){const t=this._delegate.data(e);return this._delegate._converter||ha(t!==void 0),t}}class ae{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Or(e)}where(e,t,n){try{return new ae(this.firestore,Qe(this._delegate,pa(e,t,n)))}catch(i){throw oe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ae(this.firestore,Qe(this._delegate,ma(e,t)))}catch(n){throw oe(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ae(this.firestore,Qe(this._delegate,fa(e)))}catch(t){throw oe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ae(this.firestore,Qe(this._delegate,ga(e)))}catch(t){throw oe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ae(this.firestore,Qe(this._delegate,ba(...e)))}catch(t){throw oe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ae(this.firestore,Qe(this._delegate,xa(...e)))}catch(t){throw oe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ae(this.firestore,Qe(this._delegate,va(...e)))}catch(t){throw oe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ae(this.firestore,Qe(this._delegate,wa(...e)))}catch(t){throw oe(t,"endAt()","Query.endAt()")}}isEqual(e){return ya(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=_a(this._delegate):(e==null?void 0:e.source)==="server"?t=Ia(this._delegate):t=Na(this._delegate),t.then(n=>new hn(this.firestore,new Zn(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=Hs(e),n=Bs(e,i=>new hn(this.firestore,new Zn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return As(this._delegate,t,n)}withConverter(e){return new ae(this.firestore,e?this._delegate.withConverter(mt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class So{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Qt(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class hn{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ae(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Qt(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new So(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Qt(this._firestore,n))})}isEqual(e){return Cs(this._delegate,e._delegate)}}class jt extends ae{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new xe(this.firestore,e):null}doc(e){try{return e===void 0?new xe(this.firestore,an(this._delegate)):new xe(this.firestore,an(this._delegate,e))}catch(t){throw oe(t,"doc()","CollectionReference.doc()")}}add(e){return ua(this._delegate,e).then(t=>new xe(this.firestore,t))}isEqual(e){return Ps(this._delegate,e._delegate)}withConverter(e){return new jt(this.firestore,e?this._delegate.withConverter(mt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function dt(r){return Ja(r,wr)}/**
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
 */class Nn{constructor(...e){this._delegate=new Qn(...e)}static documentId(){return new Nn(da.keyField().canonicalString())}isEqual(e){return e=R(e),e instanceof Qn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ct{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ba();return e._methodName="FieldValue.serverTimestamp",new ct(e)}static delete(){const e=za();return e._methodName="FieldValue.delete",new ct(e)}static arrayUnion(...e){const t=oa(...e);return t._methodName="FieldValue.arrayUnion",new ct(t)}static arrayRemove(...e){const t=la(...e);return t._methodName="FieldValue.arrayRemove",new ct(t)}static increment(e){const t=ca(e);return t._methodName="FieldValue.increment",new ct(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const To={Firestore:Vs,GeoPoint:ia,Timestamp:sa,Blob:Yt,Transaction:Ws,WriteBatch:qs,DocumentReference:xe,DocumentSnapshot:Xt,Query:ae,QueryDocumentSnapshot:Qt,QuerySnapshot:hn,CollectionReference:jt,FieldPath:Nn,FieldValue:ct,setLogLevel:ko,CACHE_SIZE_UNLIMITED:na};function Eo(r,e){r.INTERNAL.registerComponent(new Jt("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},To)))}/**
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
 */function jo(r){Eo(r,(e,t)=>new Vs(e,t,new No)),r.registerVersion(yo,_o)}jo(ze);const $t={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},_t={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Po(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function zs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Co=Po,Ao=zs,Gs=new sr("auth","Firebase",zs());/**
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
 */const Sr=new Es("@firebase/auth");function Ro(r,...e){Sr.logLevel<=Ds.WARN&&Sr.warn(`Auth (${At}): ${r}`,...e)}function yr(r,...e){Sr.logLevel<=Ds.ERROR&&Sr.error(`Auth (${At}): ${r}`,...e)}/**
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
 */function re(r,...e){throw Sn(r,...e)}function X(r,...e){return Sn(r,...e)}function kn(r,e,t){const n=Object.assign(Object.assign({},Ao()),{[e]:t});return new sr("auth","Firebase",n).create(e,{appName:r.name})}function Q(r){return kn(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ot(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&re(r,"argument-error"),kn(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sn(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Gs.create(r,...e)}function g(r,e,...t){if(!r)throw Sn(e,...t)}function De(r){const e="INTERNAL ASSERTION FAILED: "+r;throw yr(e),new Error(e)}function _e(r,e){r||De(e)}/**
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
 */function Zt(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Tn(){return os()==="http:"||os()==="https:"}function os(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Oo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tn()||Os()||"connection"in navigator)?navigator.onLine:!0}function Do(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ar{constructor(e,t){this.shortDelay=e,this.longDelay=t,_e(t>e,"Short delay should be less than long delay!"),this.isMobile=to()||yn()}get(){return Oo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function En(r,e){_e(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ks{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mo=new ar(3e4,6e4);function B(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function z(r,e,t,n,i={}){return Js(r,i,async()=>{let a={},o={};n&&(e==="GET"?o=n:a={body:JSON.stringify(n)});const c=Rt(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u=Object.assign({method:e,headers:l},a);return so()||(u.referrerPolicy="no-referrer"),Ks.fetch()(Ys(r,r.config.apiHost,t,c),u)})}async function Js(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Lo),e);try{const i=new Fo(r),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Bt(r,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const c=a.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bt(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bt(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bt(r,"user-disabled",o);const b=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kn(r,b,u);re(r,b)}}catch(i){if(i instanceof tt)throw i;re(r,"network-request-failed",{message:String(i)})}}async function Ke(r,e,t,n,i={}){const a=await z(r,e,t,n,i);return"mfaPendingCredential"in a&&re(r,"multi-factor-auth-required",{_serverResponse:a}),a}function Ys(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?En(r.config,i):`${r.config.apiScheme}://${i}`}function Uo(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(X(this.auth,"network-request-failed")),Mo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bt(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=X(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */function ls(r){return r!==void 0&&r.getResponse!==void 0}function cs(r){return r!==void 0&&r.enterprise!==void 0}class $o{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Uo(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function Vo(r){return(await z(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Wo(r,e){return z(r,"GET","/v2/recaptchaConfig",B(r,e))}/**
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
 */async function qo(r,e){return z(r,"POST","/v1/accounts:delete",e)}async function Ho(r,e){return z(r,"POST","/v1/accounts:update",e)}async function Xs(r,e){return z(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function zt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bo(r,e=!1){const t=R(r),n=await t.getIdToken(e),i=Dr(n);g(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:zt(Xr(i.auth_time)),issuedAtTime:zt(Xr(i.iat)),expirationTime:zt(Xr(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Xr(r){return Number(r)*1e3}function Dr(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return yr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ro(t);return i?JSON.parse(i):(yr("Failed to decode base64 JWT payload"),null)}catch(i){return yr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ds(r){const e=Dr(r);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ge(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof tt&&zo(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function zo({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class pn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zt(this.lastLoginAt),this.creationTime=zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function er(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Ge(r,Xs(t,{idToken:n}));g(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];r._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Qs(a.providerUserInfo):[],c=Jo(r.providerData,o),l=r.isAnonymous,u=!(r.email&&a.passwordHash)&&!(c!=null&&c.length),b=l?u:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new pn(a.createdAt,a.lastLoginAt),isAnonymous:b};Object.assign(r,p)}async function Ko(r){const e=R(r);await er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jo(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Qs(r){return r.map(e=>{var{providerId:t}=e,n=_n(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Yo(r,e){const t=await Js(r,{},async()=>{const n=Rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=r.config,o=Ys(r,i,"/v1/token",`key=${a}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ks.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xo(r,e){return z(r,"POST","/v2/accounts:revokeToken",B(r,e))}/**
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
 */class Nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ds(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){g(e.length!==0,"internal-error");const t=ds(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:a}=await Yo(e,t);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:a}=t,o=new Nt;return n&&(g(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(g(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&(g(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nt,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
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
 */function Ze(r,e){g(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class We{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,a=_n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Go(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new pn(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ge(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bo(this,e)}reload(){return Ko(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new We(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await er(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(G(this.auth.app))return Promise.reject(Q(this.auth));const e=await this.getIdToken();return await Ge(this,qo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,a,o,c,l,u,b;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,M=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,F=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,q=(u=t.createdAt)!==null&&u!==void 0?u:void 0,T=(b=t.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:le,emailVerified:U,isAnonymous:ne,providerData:J,stsTokenManager:ce}=t;g(le&&ce,e,"internal-error");const we=Nt.fromJSON(this.name,ce);g(typeof le=="string",e,"internal-error"),Ze(p,e.name),Ze(y,e.name),g(typeof U=="boolean",e,"internal-error"),g(typeof ne=="boolean",e,"internal-error"),Ze(M,e.name),Ze(C,e.name),Ze(F,e.name),Ze(A,e.name),Ze(q,e.name),Ze(T,e.name);const ge=new We({uid:le,auth:e,email:y,emailVerified:U,displayName:p,isAnonymous:ne,photoURL:C,phoneNumber:M,tenantId:F,stsTokenManager:we,createdAt:q,lastLoginAt:T});return J&&Array.isArray(J)&&(ge.providerData=J.map(Z=>Object.assign({},Z))),A&&(ge._redirectEventId=A),ge}static async _fromIdTokenResponse(e,t,n=!1){const i=new Nt;i.updateFromServerResponse(t);const a=new We({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await er(a),a}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];g(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Qs(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new Nt;c.updateFromIdToken(n);const l=new We({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,u),l}}/**
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
 */const us=new Map;function fe(r){_e(r instanceof Function,"Expected a class definition");let e=us.get(r);return e?(_e(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,us.set(r,e),e)}/**
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
 */class Zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zs.type="NONE";const Pt=Zs;/**
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
 */function ht(r,e,t){return`firebase:${r}:${e}:${t}`}class kt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=ht(this.userKey,i.apiKey,a),this.fullPersistenceKey=ht("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?We._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new kt(fe(Pt),e,n);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||fe(Pt);const o=ht(n,e.config.apiKey,e.name);let c=null;for(const u of t)try{const b=await u._get(o);if(b){const p=We._fromJSON(e,b);u!==a&&(c=p),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new kt(a,e,n):(a=l[0],c&&await a._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new kt(a,e,n))}}/**
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
 */function hs(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ni(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ei(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(si(e))return"Blackberry";if(ii(e))return"Webos";if(ti(e))return"Safari";if((e.includes("chrome/")||ri(e))&&!e.includes("edge/"))return"Chrome";if(or(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ei(r=te()){return/firefox\//i.test(r)}function ti(r=te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ri(r=te()){return/crios\//i.test(r)}function ni(r=te()){return/iemobile/i.test(r)}function or(r=te()){return/android/i.test(r)}function si(r=te()){return/blackberry/i.test(r)}function ii(r=te()){return/webos/i.test(r)}function lr(r=te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Qo(r=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function Zo(r=te()){var e;return lr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function el(){return Ls()&&document.documentMode===10}function ai(r=te()){return lr(r)||or(r)||ii(r)||si(r)||/windows phone/i.test(r)||ni(r)}/**
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
 */function oi(r,e=[]){let t;switch(r){case"Browser":t=hs(te());break;case"Worker":t=`${hs(te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${At}/${n}`}/**
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
 */async function rl(r,e={}){return z(r,"GET","/v2/passwordPolicy",B(r,e))}/**
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
 */class il{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ps(this),this.idTokenSubscription=new ps(this),this.beforeStateQueue=new tl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fe(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await kt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xs(this,{idToken:e}),n=await We._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(G(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await er(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Do()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(G(this.app))return Promise.reject(Q(this));const t=e?R(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return G(this.app)?Promise.reject(Q(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return G(this.app)?Promise.reject(Q(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rl(this),t=new sl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Xo(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fe(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await kt.create(this,[fe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(c,this,"internal-error"),c.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ro(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function H(r){return R(r)}class ps{constructor(e){this.auth=e,this.observer=null,this.addObserver=js(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function al(r){cr=r}function jn(r){return cr.loadJS(r)}function ol(){return cr.recaptchaV2Script}function ll(){return cr.recaptchaEnterpriseScript}function cl(){return cr.gapiScript}function li(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const dl="recaptcha-enterprise",ul="NO_RECAPTCHA";class hl{constructor(e){this.type=dl,this.auth=H(e)}async verify(e="verify",t=!1){async function n(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,c)=>{Wo(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new $o(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function i(a,o,c){const l=window.grecaptcha;cs(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:e}).then(u=>{o(u)}).catch(()=>{o(ul)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{n(this.auth).then(c=>{if(!t&&cs(window.grecaptcha))i(c,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ll();l.length!==0&&(l+=c),jn(l).then(()=>{i(c,a,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function ms(r,e,t,n=!1){const i=new hl(r);let a;try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tr(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ms(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ms(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(a)})}function pl(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(fe);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ml(r,e,t){const n=H(r);g(n._canInitEmulator,n,"emulator-config-failed"),g(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),a=ci(e),{host:o,port:c}=fl(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${a}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gl()}function ci(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function fl(r){const e=ci(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:fs(n.substr(a.length+1))}}else{const[a,o]=n.split(":");return{host:a,port:fs(o)}}}function fs(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gl(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Dt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,t){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}/**
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
 */async function di(r,e){return z(r,"POST","/v1/accounts:resetPassword",B(r,e))}async function bl(r,e){return z(r,"POST","/v1/accounts:update",e)}async function xl(r,e){return z(r,"POST","/v1/accounts:signUp",e)}async function vl(r,e){return z(r,"POST","/v1/accounts:update",B(r,e))}/**
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
 */async function wl(r,e){return Ke(r,"POST","/v1/accounts:signInWithPassword",B(r,e))}async function Lr(r,e){return z(r,"POST","/v1/accounts:sendOobCode",B(r,e))}async function yl(r,e){return Lr(r,e)}async function _l(r,e){return Lr(r,e)}async function Il(r,e){return Lr(r,e)}async function Nl(r,e){return Lr(r,e)}/**
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
 */async function kl(r,e){return Ke(r,"POST","/v1/accounts:signInWithEmailLink",B(r,e))}async function Sl(r,e){return Ke(r,"POST","/v1/accounts:signInWithEmailLink",B(r,e))}/**
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
 */class rr extends Dt{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new rr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new rr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tr(e,t,"signInWithPassword",wl);case"emailLink":return kl(e,{email:this._email,oobCode:this._password});default:re(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tr(e,n,"signUpPassword",xl);case"emailLink":return Sl(e,{idToken:t,email:this._email,oobCode:this._password});default:re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Be(r,e){return Ke(r,"POST","/v1/accounts:signInWithIdp",B(r,e))}/**
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
 */const Tl="http://localhost";class Le extends Dt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,a=_n(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Le(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Be(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}buildRequest(){const e={requestUri:Tl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rt(t)}return e}}/**
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
 */async function El(r,e){return z(r,"POST","/v1/accounts:sendVerificationCode",B(r,e))}async function jl(r,e){return Ke(r,"POST","/v1/accounts:signInWithPhoneNumber",B(r,e))}async function Pl(r,e){const t=await Ke(r,"POST","/v1/accounts:signInWithPhoneNumber",B(r,e));if(t.temporaryProof)throw Bt(r,"account-exists-with-different-credential",t);return t}const Cl={USER_NOT_FOUND:"user-not-found"};async function Al(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ke(r,"POST","/v1/accounts:signInWithPhoneNumber",B(r,t),Cl)}/**
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
 */class pt extends Dt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return jl(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Pl(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Al(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}=e;return!n&&!t&&!i&&!a?null:new pt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a})}}/**
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
 */function Rl(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ol(r){const e=It(Ht(r)).link,t=e?It(Ht(e)).deep_link_id:null,n=It(Ht(r)).deep_link_id;return(n?It(Ht(n)).link:null)||n||t||e||r}class Mr{constructor(e){var t,n,i,a,o,c;const l=It(Ht(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,b=(n=l.oobCode)!==null&&n!==void 0?n:null,p=Rl((i=l.mode)!==null&&i!==void 0?i:null);g(u&&b&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=b,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ol(e);try{return new Mr(t)}catch{return null}}}/**
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
 */class rt{constructor(){this.providerId=rt.PROVIDER_ID}static credential(e,t){return rr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mr.parseLink(t);return g(n,"argument-error"),rr._fromEmailAndCode(e,n.code,n.tenantId)}}rt.PROVIDER_ID="password";rt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Je{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lt extends Je{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class St extends Lt{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return g("providerId"in t&&"signInMethod"in t,"argument-error"),Le._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return g(e.idToken||e.accessToken,"argument-error"),Le._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return St.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return St.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!a||!c)return null;try{return new St(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:a})}catch{return null}}}/**
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
 */class Ce extends Lt{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ce.PROVIDER_ID="facebook.com";/**
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
 */class Ae extends Lt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ae.credential(t,n)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
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
 */class Re extends Lt{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
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
 */const Dl="http://localhost";class Ct extends Dt{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Be(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:a}=t;return!n||!i||!a||n!==i?null:new Ct(n,a)}static _create(e,t){return new Ct(e,t)}buildRequest(){return{requestUri:Dl,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Ll="saml.";class Tr extends Je{constructor(e){g(e.startsWith(Ll),"argument-error"),super(e)}static credentialFromResult(e){return Tr.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Tr.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ct.fromJSON(e);return g(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ct._create(n,t)}catch{return null}}}/**
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
 */class Oe extends Lt{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Oe.credential(t,n)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */async function ui(r,e){return Ke(r,"POST","/v1/accounts:signUp",B(r,e))}/**
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
 */class ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const a=await We._fromIdTokenResponse(e,n,i),o=gs(n);return new ve({user:a,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=gs(n);return new ve({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function gs(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function Ml(r){var e;if(G(r.app))return Promise.reject(Q(r));const t=H(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ve({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await ui(t,{returnSecureToken:!0}),i=await ve._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Er extends tt{constructor(e,t,n,i){var a;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Er(e,t,n,i)}}function hi(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(r,a,e,n):a})}/**
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
 */function pi(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Ul(r,e){const t=R(r);await Ur(!0,t,e);const{providerUserInfo:n}=await Ho(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=pi(n||[]);return t.providerData=t.providerData.filter(a=>i.has(a.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Pn(r,e,t=!1){const n=await Ge(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ve._forOperation(r,"link",n)}async function Ur(r,e,t){await er(e);const n=pi(e.providerData),i=r===!1?"provider-already-linked":"no-such-provider";g(n.has(t)===r,e.auth,i)}/**
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
 */async function mi(r,e,t=!1){const{auth:n}=r;if(G(n.app))return Promise.reject(Q(n));const i="reauthenticate";try{const a=await Ge(r,hi(n,i,e,r),t);g(a.idToken,n,"internal-error");const o=Dr(a.idToken);g(o,n,"internal-error");const{sub:c}=o;return g(r.uid===c,n,"user-mismatch"),ve._forOperation(r,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&re(n,"user-mismatch"),a}}/**
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
 */async function fi(r,e,t=!1){if(G(r.app))return Promise.reject(Q(r));const n="signIn",i=await hi(r,n,e),a=await ve._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(a.user),a}async function Fr(r,e){return fi(H(r),e)}async function gi(r,e){const t=R(r);return await Ur(!1,t,e.providerId),Pn(t,e)}async function bi(r,e){return mi(R(r),e)}/**
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
 */async function Fl(r,e){return Ke(r,"POST","/v1/accounts:signInWithCustomToken",B(r,e))}/**
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
 */async function $l(r,e){if(G(r.app))return Promise.reject(Q(r));const t=H(r),n=await Fl(t,{token:e,returnSecureToken:!0}),i=await ve._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}/**
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
 */class dr{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Cn._fromServerResponse(e,t):"totpInfo"in t?An._fromServerResponse(e,t):re(e,"internal-error")}}class Cn extends dr{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Cn(t)}}class An extends dr{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new An(t)}}/**
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
 */function $r(r,e,t){var n;g(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),g(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(g(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(g(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Rn(r){const e=H(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vl(r,e,t){const n=H(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&$r(n,i,t),await tr(n,i,"getOobCode",_l)}async function Wl(r,e,t){await di(R(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Rn(r),n})}async function ql(r,e){await vl(R(r),{oobCode:e})}async function xi(r,e){const t=R(r),n=await di(t,{oobCode:e}),i=n.requestType;switch(g(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":g(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":g(n.mfaInfo,t,"internal-error");default:g(n.email,t,"internal-error")}let a=null;return n.mfaInfo&&(a=dr._fromServerResponse(H(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:a},operation:i}}async function Hl(r,e){const{data:t}=await xi(R(r),e);return t.email}async function Bl(r,e,t){if(G(r.app))return Promise.reject(Q(r));const n=H(r),o=await tr(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ui).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Rn(r),l}),c=await ve._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function zl(r,e,t){return G(r.app)?Promise.reject(Q(r)):Fr(R(r),rt.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Rn(r),n})}/**
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
 */async function Gl(r,e,t){const n=H(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function a(o,c){g(c.handleCodeInApp,n,"argument-error"),c&&$r(n,o,c)}a(i,t),await tr(n,i,"getOobCode",Il)}function Kl(r,e){const t=Mr.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Jl(r,e,t){if(G(r.app))return Promise.reject(Q(r));const n=R(r),i=rt.credentialWithLink(e,t||Zt());return g(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Fr(n,i)}/**
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
 */async function Yl(r,e){return z(r,"POST","/v1/accounts:createAuthUri",B(r,e))}/**
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
 */async function Xl(r,e){const t=Tn()?Zt():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:i}=await Yl(R(r),n);return i||[]}async function Ql(r,e){const t=R(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&$r(t.auth,i,e);const{email:a}=await yl(t.auth,i);a!==r.email&&await r.reload()}async function Zl(r,e,t){const n=R(r),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&$r(n.auth,a,t);const{email:o}=await Nl(n.auth,a);o!==r.email&&await r.reload()}/**
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
 */async function ec(r,e){return z(r,"POST","/v1/accounts:update",e)}/**
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
 */async function tc(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=R(r),a={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ge(n,ec(n.auth,a));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function rc(r,e){const t=R(r);return G(t.auth.app)?Promise.reject(Q(t.auth)):vi(t,e,null)}function nc(r,e){return vi(R(r),null,e)}async function vi(r,e,t){const{auth:n}=r,a={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(a.email=e),t&&(a.password=t);const o=await Ge(r,bl(n,a));await r._updateTokensIfNecessary(o,!0)}/**
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
 */function sc(r){var e,t;if(!r)return null;const{providerId:n}=r,i=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},a=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(r!=null&&r.idToken)){const o=(t=(e=Dr(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Tt(a,c)}}if(!n)return null;switch(n){case"facebook.com":return new ic(a,i);case"github.com":return new ac(a,i);case"google.com":return new oc(a,i);case"twitter.com":return new lc(a,i,r.screenName||null);case"custom":case"anonymous":return new Tt(a,null);default:return new Tt(a,n,i)}}class Tt{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class wi extends Tt{constructor(e,t,n,i){super(e,t,n),this.username=i}}class ic extends Tt{constructor(e,t){super(e,"facebook.com",t)}}class ac extends wi{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class oc extends Tt{constructor(e,t){super(e,"google.com",t)}}class lc extends wi{constructor(e,t,n){super(e,"twitter.com",t,n)}}function cc(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:sc(t)}/**
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
 */class ut{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new ut("enroll",e,t)}static _fromMfaPendingCredential(e){return new ut("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ut._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return ut._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class On{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=H(e),i=t.customData._serverResponse,a=(i.mfaInfo||[]).map(c=>dr._fromServerResponse(n,c));g(i.mfaPendingCredential,n,"internal-error");const o=ut._fromMfaPendingCredential(i.mfaPendingCredential);return new On(o,a,async c=>{const l=await c._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const b=await ve._fromIdTokenResponse(n,t.operationType,u);return await n._updateCurrentUser(b.user),b;case"reauthenticate":return g(t.user,n,"internal-error"),ve._forOperation(t.user,t.operationType,u);default:re(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function dc(r,e){var t;const n=R(r),i=e;return g(e.customData.operationType,n,"argument-error"),g((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),On._fromError(n,i)}/**
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
 */function uc(r,e){return z(r,"POST","/v2/accounts/mfaEnrollment:start",B(r,e))}function hc(r,e){return z(r,"POST","/v2/accounts/mfaEnrollment:finalize",B(r,e))}function pc(r,e){return z(r,"POST","/v2/accounts/mfaEnrollment:withdraw",B(r,e))}class Dn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>dr._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Dn(e)}async getSession(){return ut._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),a=await Ge(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(a),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await Ge(this.user,pc(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Qr=new WeakMap;function mc(r){const e=R(r);return Qr.has(e)||Qr.set(e,Dn._fromUser(e)),Qr.get(e)}const jr="__sak";/**
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
 */class yi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fc=1e3,gc=10;class _i extends yi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ai(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},a=this.storage.getItem(n);el()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gc):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},fc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_i.type="LOCAL";const Ln=_i;/**
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
 */class Ii extends yi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ii.type="SESSION";const ft=Ii;/**
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
 */function bc(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Vr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:a}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async u=>u(t.origin,a)),l=await bc(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
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
 */function ur(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class xc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((c,l)=>{const u=ur("",20);i.port1.start();const b=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(b),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(y.data.response);break;default:clearTimeout(b),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function K(){return window}function vc(r){K().location.href=r}/**
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
 */function Mn(){return typeof K().WorkerGlobalScope<"u"&&typeof K().importScripts=="function"}async function wc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yc(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function _c(){return Mn()?self:null}/**
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
 */const Ni="firebaseLocalStorageDb",Ic=1,Pr="firebaseLocalStorage",ki="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wr(r,e){return r.transaction([Pr],e?"readwrite":"readonly").objectStore(Pr)}function Nc(){const r=indexedDB.deleteDatabase(Ni);return new hr(r).toPromise()}function mn(){const r=indexedDB.open(Ni,Ic);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Pr,{keyPath:ki})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Pr)?e(n):(n.close(),await Nc(),e(await mn()))})})}async function bs(r,e,t){const n=Wr(r,!0).put({[ki]:e,value:t});return new hr(n).toPromise()}async function kc(r,e){const t=Wr(r,!1).get(e),n=await new hr(t).toPromise();return n===void 0?null:n.value}function xs(r,e){const t=Wr(r,!0).delete(e);return new hr(t).toPromise()}const Sc=800,Tc=3;class Si{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Tc)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(_c()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wc(),!this.activeServiceWorker)return;this.sender=new xc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mn();return await bs(e,jr,"1"),await xs(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bs(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>kc(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Wr(i,!1).getAll();return new hr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Si.type="LOCAL";const nr=Si;/**
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
 */function Ec(r,e){return z(r,"POST","/v2/accounts/mfaSignIn:start",B(r,e))}function jc(r,e){return z(r,"POST","/v2/accounts/mfaSignIn:finalize",B(r,e))}/**
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
 */const Pc=500,Cc=6e4,vr=1e12;class Ac{constructor(e){this.auth=e,this.counter=vr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Rc(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||vr;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||vr;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||vr;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class Rc{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;g(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Oc(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Cc)},Pc))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Oc(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Zr=li("rcb"),Dc=new ar(3e4,6e4);class Lc{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=K().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return g(Mc(t),e,"argument-error"),this.shouldResolveImmediately(t)&&ls(K().grecaptcha)?Promise.resolve(K().grecaptcha):new Promise((n,i)=>{const a=K().setTimeout(()=>{i(X(e,"network-request-failed"))},Dc.get());K()[Zr]=()=>{K().clearTimeout(a),delete K()[Zr];const c=K().grecaptcha;if(!c||!ls(c)){i(X(e,"internal-error"));return}const l=c.render;c.render=(u,b)=>{const p=l(u,b);return this.counter++,p},this.hostLanguage=t,n(c)};const o=`${ol()}?${Rt({onload:Zr,render:"explicit",hl:t})}`;jn(o).catch(()=>{clearTimeout(a),i(X(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=K().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mc(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class Uc{async load(e){return new Ac(e)}clearedOneInstance(){}}/**
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
 */const Ti="recaptcha",Fc={theme:"light",type:"image"};let $c=class{constructor(e,t,n=Object.assign({},Fc)){this.parameters=n,this.type=Ti,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=H(e),this.isInvisible=this.parameters.size==="invisible",g(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;g(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Uc:new Lc,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(i=>{const a=o=>{o&&(this.tokenChangeListeners.delete(a),i(o))};this.tokenChangeListeners.add(a),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){g(!this.parameters.sitekey,this.auth,"argument-error"),g(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),g(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=K()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){g(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){g(Tn()&&!Mn(),this.auth,"internal-error"),await Vc(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Vo(this.auth);g(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return g(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Vc(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class Un{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=pt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Wc(r,e,t){if(G(r.app))return Promise.reject(Q(r));const n=H(r),i=await qr(n,e,R(t));return new Un(i,a=>Fr(n,a))}async function qc(r,e,t){const n=R(r);await Ur(!1,n,"phone");const i=await qr(n.auth,e,R(t));return new Un(i,a=>gi(n,a))}async function Hc(r,e,t){const n=R(r);if(G(n.auth.app))return Promise.reject(Q(n.auth));const i=await qr(n.auth,e,R(t));return new Un(i,a=>bi(n,a))}async function qr(r,e,t){var n;const i=await t.verify();try{g(typeof i=="string",r,"argument-error"),g(t.type===Ti,r,"argument-error");let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a)return g(o.type==="enroll",r,"internal-error"),(await uc(r,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{g(o.type==="signin",r,"internal-error");const c=((n=a.multiFactorHint)===null||n===void 0?void 0:n.uid)||a.multiFactorUid;return g(c,r,"missing-multi-factor-info"),(await Ec(r,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await El(r,{phoneNumber:a.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Bc(r,e){const t=R(r);if(G(t.auth.app))return Promise.reject(Q(t.auth));await Pn(t,e)}/**
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
 */let gt=class _r{constructor(e){this.providerId=_r.PROVIDER_ID,this.auth=H(e)}verifyPhoneNumber(e,t){return qr(this.auth,e,R(t))}static credential(e,t){return pt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return _r.credentialFromTaggedObject(t)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pt._fromTokenResponse(t,n):null}};gt.PROVIDER_ID="phone";gt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function xt(r,e){return e?fe(e):(g(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Fn extends Dt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zc(r){return fi(r.auth,new Fn(r),r.bypassAuthState)}function Gc(r){const{auth:e,user:t}=r;return g(t,e,"internal-error"),mi(t,new Fn(r),r.bypassAuthState)}async function Kc(r){const{auth:e,user:t}=r;return g(t,e,"internal-error"),Pn(t,new Fn(r),r.bypassAuthState)}/**
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
 */class Ei{constructor(e,t,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:a,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zc;case"linkViaPopup":case"linkViaRedirect":return Kc;case"reauthViaPopup":case"reauthViaRedirect":return Gc;default:re(this.auth,"internal-error")}}resolve(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jc=new ar(2e3,1e4);async function Yc(r,e,t){if(G(r.app))return Promise.reject(X(r,"operation-not-supported-in-this-environment"));const n=H(r);Ot(r,e,Je);const i=xt(n,t);return new qe(n,"signInViaPopup",e,i).executeNotNull()}async function Xc(r,e,t){const n=R(r);if(G(n.auth.app))return Promise.reject(X(n.auth,"operation-not-supported-in-this-environment"));Ot(n.auth,e,Je);const i=xt(n.auth,t);return new qe(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function Qc(r,e,t){const n=R(r);Ot(n.auth,e,Je);const i=xt(n.auth,t);return new qe(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class qe extends Ei{constructor(e,t,n,i,a){super(e,t,i,a),this.provider=n,this.authWindow=null,this.pollId=null,qe.currentPopupAction&&qe.currentPopupAction.cancel(),qe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const e=ur();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(X(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(X(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(X(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jc.get())};e()}}qe.currentPopupAction=null;/**
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
 */const Zc="pendingRedirect",Gt=new Map;class ed extends Ei{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gt.get(this.auth._key());if(!e){try{const n=await td(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gt.set(this.auth._key(),e)}return this.bypassAuthState||Gt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function td(r,e){const t=Pi(e),n=ji(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function $n(r,e){return ji(r)._set(Pi(e),"true")}function rd(){Gt.clear()}function Vn(r,e){Gt.set(r._key(),e)}function ji(r){return fe(r._redirectPersistence)}function Pi(r){return ht(Zc,r.config.apiKey,r.name)}/**
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
 */function nd(r,e,t){return sd(r,e,t)}async function sd(r,e,t){if(G(r.app))return Promise.reject(Q(r));const n=H(r);Ot(r,e,Je),await n._initializationPromise;const i=xt(n,t);return await $n(i,n),i._openRedirect(n,e,"signInViaRedirect")}function id(r,e,t){return ad(r,e,t)}async function ad(r,e,t){const n=R(r);if(Ot(n.auth,e,Je),G(n.auth.app))return Promise.reject(Q(n.auth));await n.auth._initializationPromise;const i=xt(n.auth,t);await $n(i,n.auth);const a=await Ci(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",a)}function od(r,e,t){return ld(r,e,t)}async function ld(r,e,t){const n=R(r);Ot(n.auth,e,Je),await n.auth._initializationPromise;const i=xt(n.auth,t);await Ur(!1,n,e.providerId),await $n(i,n.auth);const a=await Ci(n);return i._openRedirect(n.auth,e,"linkViaRedirect",a)}async function cd(r,e){return await H(r)._initializationPromise,Hr(r,e,!1)}async function Hr(r,e,t=!1){if(G(r.app))return Promise.reject(Q(r));const n=H(r),i=xt(n,e),o=await new ed(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function Ci(r){const e=ur(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const dd=10*60*1e3;class Ai{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ud(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ri(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(X(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dd&&this.cachedEventUids.clear(),this.cachedEventUids.has(vs(e))}saveEventToCache(e){this.cachedEventUids.add(vs(e)),this.lastProcessedEventTime=Date.now()}}function vs(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ri({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ud(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ri(r);default:return!1}}/**
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
 */async function Oi(r,e={}){return z(r,"GET","/v1/projects",e)}/**
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
 */const hd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pd=/^https?/;async function md(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Oi(r);for(const t of e)try{if(fd(t))return}catch{}re(r,"unauthorized-domain")}function fd(r){const e=Zt(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!pd.test(t))return!1;if(hd.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const gd=new ar(3e4,6e4);function ws(){const r=K().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function bd(r){return new Promise((e,t)=>{var n,i,a;function o(){ws(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ws(),t(X(r,"network-request-failed"))},timeout:gd.get()})}if(!((i=(n=K().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=K().gapi)===null||a===void 0)&&a.load)o();else{const c=li("iframefcb");return K()[c]=()=>{gapi.load?o():t(X(r,"network-request-failed"))},jn(`${cl()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function xd(r){return Ir=Ir||bd(r),Ir}/**
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
 */const vd=new ar(5e3,15e3),wd="__/auth/iframe",yd="emulator/auth/iframe",_d={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Id=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nd(r){const e=r.config;g(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?En(e,yd):`https://${r.config.authDomain}/${wd}`,n={apiKey:e.apiKey,appName:r.name,v:At},i=Id.get(r.config.apiHost);i&&(n.eid=i);const a=r._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${Rt(n).slice(1)}`}async function kd(r){const e=await xd(r),t=K().gapi;return g(t,r,"internal-error"),e.open({where:document.body,url:Nd(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_d,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const o=X(r,"network-request-failed"),c=K().setTimeout(()=>{a(o)},vd.get());function l(){K().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const Sd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Td=500,Ed=600,jd="_blank",Pd="http://localhost";class ys{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cd(r,e,t,n=Td,i=Ed){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Sd),{width:n.toString(),height:i.toString(),top:a,left:o}),u=te().toLowerCase();t&&(c=ri(u)?jd:t),ei(u)&&(e=e||Pd,l.scrollbars="yes");const b=Object.entries(l).reduce((y,[M,C])=>`${y}${M}=${C},`,"");if(Zo(u)&&c!=="_self")return Ad(e||"",c),new ys(null);const p=window.open(e||"",c,b);g(p,r,"popup-blocked");try{p.focus()}catch{}return new ys(p)}function Ad(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Rd="__/auth/handler",Od="emulator/auth/handler",Dd=encodeURIComponent("fac");async function fn(r,e,t,n,i,a){g(r.config.authDomain,r,"auth-domain-config-required"),g(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:At,eventId:i};if(e instanceof Je){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",no(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,p]of Object.entries(a||{}))o[b]=p}if(e instanceof Lt){const b=e.getScopes().filter(p=>p!=="");b.length>0&&(o.scopes=b.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const b of Object.keys(c))c[b]===void 0&&delete c[b];const l=await r._getAppCheckToken(),u=l?`#${Dd}=${encodeURIComponent(l)}`:"";return`${Ld(r)}?${Rt(c).slice(1)}${u}`}function Ld({config:r}){return r.emulator?En(r,Od):`https://${r.authDomain}/${Rd}`}/**
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
 */const en="webStorageSupport";class Md{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ft,this._completeRedirectFn=Hr,this._overrideRedirectResult=Vn}async _openPopup(e,t,n,i){var a;_e((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await fn(e,t,n,Zt(),i);return Cd(e,o,ur())}async _openRedirect(e,t,n,i){await this._originValidation(e);const a=await fn(e,t,n,Zt(),i);return vc(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(_e(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await kd(e),n=new Ai(e);return t.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(en,{type:en},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[en];o!==void 0&&t(!!o),re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=md(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ai()||ti()||lr()}}const Ud=Md;class Fd{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return De("unexpected MultiFactorSessionType")}}}class Wn extends Fd{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wn(e)}_finalizeEnroll(e,t,n){return hc(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return jc(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Di{constructor(){}static assertion(e){return Wn._fromCredential(e)}}Di.FACTOR_ID="phone";var _s="@firebase/auth",Is="1.7.9";/**
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
 */class $d{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vd(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wd(r){nn(new Jt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oi(r)},u=new il(n,i,a,l);return pl(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),nn(new Jt("auth-internal",e=>{const t=H(e.getProvider("auth").getImmediate());return(n=>new $d(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(_s,Is,Vd(r)),kr(_s,Is,"esm2017")}/**
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
 */const qd=5*60;eo("authIdTokenMaxAge");function Hd(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}al({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const a=X("internal-error");a.customData=i,t(a)},n.type="text/javascript",n.charset="UTF-8",Hd().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wd("Browser");/**
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
 */function bt(){return window}/**
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
 */const Bd=2e3;async function zd(r,e,t){var n;const{BuildInfo:i}=bt();_e(e.sessionId,"AuthEvent did not contain a session ID");const a=await Xd(e.sessionId),o={};return lr()?o.ibi=i.packageName:or()?o.apn=i.packageName:re(r,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=a,fn(r,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function Gd(r){const{BuildInfo:e}=bt(),t={};lr()?t.iosBundleId=e.packageName:or()?t.androidPackageName=e.packageName:re(r,"operation-not-supported-in-this-environment"),await Oi(r,t)}function Kd(r){const{cordova:e}=bt();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(r):i=e.InAppBrowser.open(r,Qo()?"_blank":"_system","location=yes"),t(i)})})}async function Jd(r,e,t){const{cordova:n}=bt();let i=()=>{};try{await new Promise((a,o)=>{let c=null;function l(){var p;a();const y=(p=n.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof y=="function"&&y(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){c||(c=window.setTimeout(()=>{o(X(r,"redirect-cancelled-by-user"))},Bd))}function b(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),or()&&document.addEventListener("visibilitychange",b,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",b,!1),c&&window.clearTimeout(c)}})}finally{i()}}function Yd(r){var e,t,n,i,a,o,c,l,u,b;const p=bt();g(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),g(typeof((t=p==null?void 0:p.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),g(typeof((a=(i=(n=p==null?void 0:p.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||a===void 0?void 0:a.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),g(typeof((l=(c=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||c===void 0?void 0:c.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),g(typeof((b=(u=p==null?void 0:p.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||b===void 0?void 0:b.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Xd(r){const e=Qd(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Qd(r){if(_e(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}/**
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
 */const Zd=20;class eu extends Ai{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function tu(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:su(),postBody:null,tenantId:r.tenantId,error:X(r,"no-auth-event")}}function ru(r,e){return gn()._set(bn(r),e)}async function Ns(r){const e=await gn()._get(bn(r));return e&&await gn()._remove(bn(r)),e}function nu(r,e){var t,n;const i=au(e);if(i.includes("/__/auth/callback")){const a=Nr(i),o=a.firebaseError?iu(decodeURIComponent(a.firebaseError)):null,c=(n=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],l=c?X(c):null;return l?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:i,postBody:null}}return null}function su(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Zd;t++){const n=Math.floor(Math.random()*e.length);r.push(e.charAt(n))}return r.join("")}function gn(){return fe(Ln)}function bn(r){return ht("authEvent",r.config.apiKey,r.name)}function iu(r){try{return JSON.parse(r)}catch{return null}}function au(r){const e=Nr(r),t=e.link?decodeURIComponent(e.link):void 0,n=Nr(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Nr(i).link||i||n||t||r}function Nr(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return It(t.join("?"))}/**
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
 */const ou=500;class lu{constructor(){this._redirectPersistence=ft,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Hr,this._overrideRedirectResult=Vn}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new eu(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){re(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){Yd(e);const a=await this._initialize(e);await a.initialized(),a.resetRedirect(),rd(),await this._originValidation(e);const o=tu(e,n,i);await ru(e,o);const c=await zd(e,o,t),l=await Kd(c);return Jd(e,a,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gd(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:a}=bt(),o=setTimeout(async()=>{await Ns(e),t.onEvent(ks())},ou),c=async b=>{clearTimeout(o);const p=await Ns(e);let y=null;p&&(b!=null&&b.url)&&(y=nu(p,b.url)),t.onEvent(y||ks())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,c);const l=i,u=`${a.packageName.toLowerCase()}://`;bt().handleOpenURL=async b=>{if(b.toLowerCase().startsWith(u)&&c({url:b}),typeof l=="function")try{l(b)}catch(p){console.error(p)}}}}const cu=lu;function ks(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:X("no-auth-event")}}/**
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
 */const pu=1e3;function Kt(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function mu(){return Kt()==="http:"||Kt()==="https:"}function Li(r=te()){return!!((Kt()==="file:"||Kt()==="ionic:"||Kt()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function fu(){return yn()||Ms()}function gu(){return Ls()&&(document==null?void 0:document.documentMode)===11}function bu(r=te()){return/Edge\/\d+/.test(r)}function xu(r=te()){return gu()||bu(r)}function Mi(){try{const r=self.localStorage,e=ur();if(r)return r.setItem(e,"1"),r.removeItem(e),xu()?cn():!0}catch{return qn()&&cn()}return!1}function qn(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function tn(){return(mu()||Os()||Li())&&!fu()&&Mi()&&!qn()}function Ui(){return Li()&&typeof document<"u"}async function vu(){return Ui()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},pu);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function wu(){return typeof window<"u"?window:null}/**
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
 */const me={LOCAL:"local",NONE:"none",SESSION:"session"},Vt=g,Fi="persistence";function yu(r,e){if(Vt(Object.values(me).includes(e),r,"invalid-persistence-type"),yn()){Vt(e!==me.SESSION,r,"unsupported-persistence-type");return}if(Ms()){Vt(e===me.NONE,r,"unsupported-persistence-type");return}if(qn()){Vt(e===me.NONE||e===me.LOCAL&&cn(),r,"unsupported-persistence-type");return}Vt(e===me.NONE||Mi(),r,"unsupported-persistence-type")}async function xn(r){await r._initializationPromise;const e=$i(),t=ht(Fi,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function _u(r,e){const t=$i();if(!t)return[];const n=ht(Fi,r,e);switch(t.getItem(n)){case me.NONE:return[Pt];case me.LOCAL:return[nr,ft];case me.SESSION:return[ft];default:return[]}}function $i(){var r;try{return((r=wu())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
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
 */const Iu=g;class et{constructor(){this.browserResolver=fe(Ud),this.cordovaResolver=fe(cu),this.underlyingResolver=null,this._redirectPersistence=ft,this._completeRedirectFn=Hr,this._overrideRedirectResult=Vn}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ui()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Iu(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await vu();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Vi(r){return r.unwrap()}function Nu(r){return r.wrapped()}/**
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
 */function ku(r){return Wi(r)}function Su(r,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Tu(r,dc(r,e))}else if(n){const i=Wi(e),a=e;i&&(a.credential=i,a.tenantId=n.tenantId||void 0,a.email=n.email||void 0,a.phoneNumber=n.phoneNumber||void 0)}}function Wi(r){const{_tokenResponse:e}=r instanceof tt?r.customData:r;if(!e)return null;if(!(r instanceof tt)&&"temporaryProof"in e&&"phoneNumber"in e)return gt.credentialFromResult(r);const t=e.providerId;if(!t||t===$t.PASSWORD)return null;let n;switch(t){case $t.GOOGLE:n=Ae;break;case $t.FACEBOOK:n=Ce;break;case $t.GITHUB:n=Re;break;case $t.TWITTER:n=Oe;break;default:const{oauthIdToken:i,oauthAccessToken:a,oauthTokenSecret:o,pendingToken:c,nonce:l}=e;return!a&&!o&&!i&&!c?null:c?t.startsWith("saml.")?Ct._create(t,c):Le._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:a}):new St(t).credential({idToken:i,accessToken:a,rawNonce:l})}return r instanceof tt?n.credentialFromError(r):n.credentialFromResult(r)}function ue(r,e){return e.catch(t=>{throw t instanceof tt&&Su(r,t),t}).then(t=>{const n=t.operationType,i=t.user;return{operationType:n,credential:ku(t),additionalUserInfo:cc(t),user:He.getOrCreate(i)}})}async function vn(r,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>ue(r,t.confirm(n))}}class Tu{constructor(e,t){this.resolver=t,this.auth=Nu(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ue(Vi(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class He{constructor(e){this._delegate=e,this.multiFactor=mc(e)}static getOrCreate(e){return He.USER_MAP.has(e)||He.USER_MAP.set(e,new He(e)),He.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ue(this.auth,gi(this._delegate,e))}async linkWithPhoneNumber(e,t){return vn(this.auth,qc(this._delegate,e,t))}async linkWithPopup(e){return ue(this.auth,Qc(this._delegate,e,et))}async linkWithRedirect(e){return await xn(H(this.auth)),od(this._delegate,e,et)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ue(this.auth,bi(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return vn(this.auth,Hc(this._delegate,e,t))}reauthenticateWithPopup(e){return ue(this.auth,Xc(this._delegate,e,et))}async reauthenticateWithRedirect(e){return await xn(H(this.auth)),id(this._delegate,e,et)}sendEmailVerification(e){return Ql(this._delegate,e)}async unlink(e){return await Ul(this._delegate,e),this}updateEmail(e){return rc(this._delegate,e)}updatePassword(e){return nc(this._delegate,e)}updatePhoneNumber(e){return Bc(this._delegate,e)}updateProfile(e){return tc(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Zl(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}He.USER_MAP=new WeakMap;/**
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
 */const Wt=g;class wn{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Wt(n,"invalid-api-key",{appName:e.name}),Wt(n,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?et:void 0;this._delegate=t.initialize({options:{persistence:Eu(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Co),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?He.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){ml(this._delegate,e,t)}applyActionCode(e){return ql(this._delegate,e)}checkActionCode(e){return xi(this._delegate,e)}confirmPasswordReset(e,t){return Wl(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ue(this._delegate,Bl(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Xl(this._delegate,e)}isSignInWithEmailLink(e){return Kl(this._delegate,e)}async getRedirectResult(){Wt(tn(),this._delegate,"operation-not-supported-in-this-environment");const e=await cd(this._delegate,et);return e?ue(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){du(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:a,complete:o}=Ss(e,t,n);return this._delegate.onAuthStateChanged(i,a,o)}onIdTokenChanged(e,t,n){const{next:i,error:a,complete:o}=Ss(e,t,n);return this._delegate.onIdTokenChanged(i,a,o)}sendSignInLinkToEmail(e,t){return Gl(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Vl(this._delegate,e,t||void 0)}async setPersistence(e){yu(this._delegate,e);let t;switch(e){case me.SESSION:t=ft;break;case me.LOCAL:t=await fe(nr)._isAvailable()?nr:Ln;break;case me.NONE:t=Pt;break;default:return re("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ue(this._delegate,Ml(this._delegate))}signInWithCredential(e){return ue(this._delegate,Fr(this._delegate,e))}signInWithCustomToken(e){return ue(this._delegate,$l(this._delegate,e))}signInWithEmailAndPassword(e,t){return ue(this._delegate,zl(this._delegate,e,t))}signInWithEmailLink(e,t){return ue(this._delegate,Jl(this._delegate,e,t))}signInWithPhoneNumber(e,t){return vn(this._delegate,Wc(this._delegate,e,t))}async signInWithPopup(e){return Wt(tn(),this._delegate,"operation-not-supported-in-this-environment"),ue(this._delegate,Yc(this._delegate,e,et))}async signInWithRedirect(e){return Wt(tn(),this._delegate,"operation-not-supported-in-this-environment"),await xn(this._delegate),nd(this._delegate,e,et)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Hl(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wn.Persistence=me;function Ss(r,e,t){let n=r;typeof r!="function"&&({next:n,error:e,complete:t}=r);const i=n;return{next:o=>i(o&&He.getOrCreate(o)),error:e,complete:t}}function Eu(r,e){const t=_u(r,e);if(typeof self<"u"&&!t.includes(nr)&&t.push(nr),typeof window<"u")for(const n of[Ln,ft])t.includes(n)||t.push(n);return t.includes(Pt)||t.push(Pt),t}/**
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
 */class Hn{constructor(){this.providerId="phone",this._delegate=new gt(Vi(ze.auth()))}static credential(e,t){return gt.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Hn.PHONE_SIGN_IN_METHOD=gt.PHONE_SIGN_IN_METHOD;Hn.PROVIDER_ID=gt.PROVIDER_ID;/**
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
 */const ju=g;class Pu{constructor(e,t,n=ze.app()){var i;ju((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new $c(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Cu="auth-compat";function Au(r){r.INTERNAL.registerComponent(new Jt(Cu,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new wn(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:_t.EMAIL_SIGNIN,PASSWORD_RESET:_t.PASSWORD_RESET,RECOVER_EMAIL:_t.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:_t.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:_t.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:_t.VERIFY_EMAIL}},EmailAuthProvider:rt,FacebookAuthProvider:Ce,GithubAuthProvider:Re,GoogleAuthProvider:Ae,OAuthProvider:St,SAMLAuthProvider:Tr,PhoneAuthProvider:Hn,PhoneMultiFactorGenerator:Di,RecaptchaVerifier:Pu,TwitterAuthProvider:Oe,Auth:wn,AuthCredential:Dt,Error:tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(uu,hu)}Au(ze);class Ru extends Ar.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("React Component Crash caught:",e,t),this.setState({errorInfo:t});const n=document.getElementById("error-boundary");if(n){n.classList.remove("hidden");const i=document.getElementById("error-message");i&&(i.textContent+=(i.textContent?`
`:"")+"React Crash: "+e.message+`
`+e.stack)}}render(){return this.state.hasError?null:this.props.children}}const Ou={apiKey:"AIzaSyAtyWN_UDd6Ld4O16cnc8lwmRJ4Gj_Tnbs",authDomain:"crispy-chick-kgf.firebaseapp.com",projectId:"crispy-chick-kgf",storageBucket:"crispy-chick-kgf.firebasestorage.app",messagingSenderId:"814260005387",appId:"1:814260005387:web:178c90ae92714ac955750e"};ze.apps.length||ze.initializeApp(Ou);const $=ze.firestore(),Bn=r=>$.collection("orders").onSnapshot(e=>{const t=[];e.forEach(n=>{t.push({id:n.id,...n.data()})}),t.sort((n,i)=>(i.createdAt||0)-(n.createdAt||0)),r(t)},e=>{console.error("Orders listener error:",e)}),Du=async r=>{const e=Math.floor(1e3+Math.random()*9e3).toString(),t={...r,createdAt:Date.now(),placementTime:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),displayId:e,status:"pending",timestamp:ze.firestore.FieldValue.serverTimestamp()},n=await $.collection("orders").add(t);try{qu(t,n.id)}catch(i){console.error("Telegram notification failed (non-fatal):",i)}return{...t,id:n.id}},Et=async(r,e,t={})=>{await $.collection("orders").doc(r).update({status:e,...t})},Lu=r=>$.collection("settings").doc("global").onSnapshot(e=>{e.exists?r(e.data()):r({onlineOrderingWindow:!0})},e=>{console.error("Settings listener error:",e)}),Mu=async r=>{await $.collection("settings").doc("global").set(r,{merge:!0})},Uu=r=>/^\d{10}$/.test(String(r||"").trim()),Fu=r=>Uu(r)?!0:(window.alert("Please enter a valid 10-digit phone number"),!1),$u=r=>/^[A-Za-z\s]+$/.test(String(r||"").trim()),Vu=r=>$u(r)?!0:(window.alert("Please enter a valid name using only letters"),!1),Wu=r=>r&&r.gpsLat!=null&&r.gpsLng!=null?`https://www.google.com/maps/search/?api=1&query=${r.gpsLat},${r.gpsLng}`:`https://www.google.com/maps/dir/?api=1&origin=Crispy+Chick+KGF&destination=${encodeURIComponent(r&&r.landmarks||"")}`,qu=(r,e)=>{const t=localStorage.getItem("telegram_bot_token"),n=localStorage.getItem("telegram_chat_id");if(!t||!n)return;const i=r.items.map(o=>`${o.name} (x${o.quantity})`).join(", "),a=`*New Order Placed!*
• Order ID: \`${e}\`
• Customer: ${r.customerName}
• Phone: ${r.customerPhone}
• Landmarks: ${r.landmarks}
• Items: ${i}
• Total: ₹${r.totalAmount}
• Delivery OTP: *${r.otp}*`;fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:n,text:a,parse_mode:"Markdown"})}).catch(o=>console.error("Telegram notify fail",o))};let qt=null,Pe=null;const Ts=r=>{if(!r){qt&&(clearInterval(qt),qt=null);return}if(qt)return;Pe||(Pe=new(window.AudioContext||window.webkitAudioContext));const e=()=>{if(!Pe)return;Pe.state==="suspended"&&Pe.resume();const t=Pe.currentTime;for(let n=0;n<3;n++){const i=t+n*.85,a=Pe.createOscillator(),o=Pe.createOscillator(),c=Pe.createGain();a.type="square",a.frequency.setValueAtTime(880,i),a.frequency.exponentialRampToValueAtTime(660,i+.35),o.type="sine",o.frequency.setValueAtTime(1320,i),o.frequency.exponentialRampToValueAtTime(990,i+.35),c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.85,i+.02),c.gain.setValueAtTime(.85,i+.25),c.gain.exponentialRampToValueAtTime(.001,i+.55),a.connect(c),o.connect(c),c.connect(Pe.destination),a.start(i),a.stop(i+.6),o.start(i),o.stop(i+.6)}};e(),qt=setInterval(e,3200)},Cr={"Fried Chicken":[{name:"Crispy Fried Chicken (1pc)",price:55,image:"fried_chicken.png"},{name:"Crunchy Masala Fried Chicken (1Leg pc)",price:50,image:"fried_chicken.png"},{name:"Chicken Lolly Pop (3pcs)",price:55,image:"fried_chicken.png"},{name:"Mini Bucket Fried Chicken (4pcs)",price:200,image:"fried_chicken.png"},{name:"Bucket Fried Chicken (8pcs)",price:400,image:"fried_chicken.png"},{name:"Hot Chicken Wings (3pcs)",price:55,image:"fried_chicken.png"},{name:"Chicken Nuggets (3 pc)",price:30,image:"fried_chicken.png"},{name:"Chicken Strips (3pcs)",price:60,image:"fried_chicken.png"},{name:"Spicy Wings (4 pcs)",price:65,image:"fried_chicken.png"}],"Veg Burgers":[{name:"Paneer Burger",price:75,image:"burger.png"},{name:"Deluxe Veg Burger",price:40,image:"burger.png"}],"Non-Veg Burgers":[{name:"Chicken Burger",price:40,image:"burger.png"},{name:"Crunchy Burger",price:50,image:"burger.png"},{name:"Double Chicken Burger",price:70,image:"burger.png"},{name:"Pizza Burger",price:70,image:"burger.png"},{name:"Mutton Burger",price:85,image:"burger.png"}],"Side Orders":[{name:"French Fries",price:40,image:"fries.png"},{name:"Smiley",price:40,image:"fries.png"},{name:"Veg Nuggets",price:40,image:"fried_chicken.png"},{name:"Chicky Stick",price:40,image:"fried_chicken.png"},{name:"Chicken Pizza",price:140,image:"burger.png"},{name:"Chicken Popcorn",price:75,image:"fried_chicken.png"}],"Add-ons":[{name:"Cheese Slice",price:10,image:"drink.png"},{name:"Mayo Dips",price:10,image:"drink.png"},{name:"Smoothies",price:40,image:"drink.png"},{name:"Cokefloat",price:30,image:"drink.png"}]},Hu=[{email:"owner@crispychick.com",password:"OwnerPassKGFcode77",role:"OWNER_COUNTER"},{email:"rider@crispychick.com",password:"RiderPassKGFcode88",role:"DELIVERY_RIDER"}],Bu=["./assets/banner1.jpg","./assets/banner2.jpg","./assets/banner3.jpg"],de=new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");de.loop=!0;const zn=()=>{try{new Audio("https://assets.mixkit.co/active_storage/sfx/911/911-preview.mp3").play().catch(e=>console.warn("Audio playback blocked or failed:",e))}catch{}},Ie=d.createContext(),pr=d.createContext(),zu=({children:r})=>{const[e,t]=d.useState(null),[n,i]=d.useState(null),[a,o]=d.useState(!0);d.useEffect(()=>{(()=>{const b=localStorage.getItem("cc_operator_auth_token"),p=localStorage.getItem("cc_logistics_auth_token");t(b?JSON.parse(b):null),i(p?JSON.parse(p):null),o(!1)})()},[]);const c=async(u,b)=>{const p=Hu.find(y=>y.email.toLowerCase()===u.toLowerCase()&&y.password===b);if(p){const y={email:p.email,role:p.role};return p.role==="OWNER_COUNTER"?(localStorage.setItem("cc_operator_auth_token",JSON.stringify(y)),t(y)):p.role==="DELIVERY_RIDER"&&(localStorage.setItem("cc_logistics_auth_token",JSON.stringify(y)),i(y)),y}else throw new Error("Invalid authorized email or password.")},l=async()=>{const u=window.location.hash;u==="#/shop-counter"?(localStorage.removeItem("cc_operator_auth_token"),t(null)):u==="#/delivery-dashboard"&&(localStorage.removeItem("cc_logistics_auth_token"),i(null)),setTimeout(()=>{window.location.hash="#/login"},100)};return s.jsx(pr.Provider,{value:{ownerUser:e,riderUser:n,loadingAuth:a,login:c,signOut:l},children:r})},Gu=({children:r})=>{const[e,t]=d.useState([]),[n,i]=d.useState(!0),[a,o]=d.useState([]),[c,l]=d.useState(()=>localStorage.getItem("crispy_theme_settings")||"dark"),[u,b]=d.useState(()=>{const w=localStorage.getItem("cc_customer_name"),k=localStorage.getItem("cc_customer_phone");return w&&k?{name:w,phone:k}:null}),[p,y]=d.useState(()=>{try{const w=localStorage.getItem("cc_customer_active_order_ids");return w?JSON.parse(w):[]}catch{return[]}}),M=w=>{const k=Array.isArray(w)?w:[];y(k),k.length>0?localStorage.setItem("cc_customer_active_order_ids",JSON.stringify(k)):localStorage.removeItem("cc_customer_active_order_ids"),window.dispatchEvent(new Event("storage"))},C=w=>{w&&y(k=>{const E=k.includes(w)?k:[...k,w];return localStorage.setItem("cc_customer_active_order_ids",JSON.stringify(E)),E}),window.dispatchEvent(new Event("storage"))},[F,A]=d.useState(()=>{const w=localStorage.getItem("crispy_menu_settings");return w?JSON.parse(w):{gstRate:5,deliveryFee:30,items:{}}}),[q,T]=d.useState(()=>localStorage.getItem("crispy_carousel_banner_url")||"");d.useEffect(()=>{const w=Lu(_=>{i(_.onlineOrderingWindow!==!1)}),k=()=>{const _=localStorage.getItem("crispy_menu_settings");_&&A(JSON.parse(_));const O=localStorage.getItem("crispy_carousel_banner_url");O!==null&&T(O);const ee=localStorage.getItem("crispy_theme_settings");ee&&l(ee);const Me=localStorage.getItem("cc_customer_active_order_ids");try{y(Me?JSON.parse(Me):[])}catch{y([])}const Ue=localStorage.getItem("cc_customer_name"),ke=localStorage.getItem("cc_customer_phone");b(Ue&&ke?{name:Ue,phone:ke}:null)};window.addEventListener("storage",k);const E=$.collection("settings").doc("menuConfig").onSnapshot(_=>{if(_.exists){const O=_.data();A(ee=>JSON.stringify(ee)!==JSON.stringify(O)?(localStorage.setItem("crispy_menu_settings",JSON.stringify(O)),O):ee)}},_=>console.error("menuConfig listener error:",_));return()=>{typeof w=="function"&&w(),typeof E=="function"&&E(),window.removeEventListener("storage",k)}},[]);const le=w=>{A(w),localStorage.setItem("crispy_menu_settings",JSON.stringify(w)),window.dispatchEvent(new Event("storage")),$.collection("settings").doc("menuConfig").set(w,{merge:!0}).catch(k=>console.error("menuConfig push failed:",k))},U=w=>{T(w),localStorage.setItem("crispy_carousel_banner_url",w),window.dispatchEvent(new Event("storage"))},ne=()=>{const w=c==="dark"?"light":"dark";l(w),localStorage.setItem("crispy_theme_settings",w),window.dispatchEvent(new Event("storage"))},J=w=>{t(k=>k.find(_=>_.name===w.name)?k.map(_=>_.name===w.name?{..._,quantity:_.quantity+1}:_):[...k,{...w,quantity:1}])},ce=w=>{t(k=>k.filter(E=>E.name!==w))},we=(w,k)=>{t(E=>E.map(_=>{if(_.name===w){const O=_.quantity+k;return O>0?{..._,quantity:O}:_}return _}).filter(_=>_.quantity>0))},ge=()=>t([]),[Z,Ne]=d.useState({lat:null,lng:null}),he=(w,k)=>{const E=F.items[w];return E&&E.price!==void 0?Number(E.price):k},se=w=>{const k=F.items[w];return k&&k.available!==void 0?k.available:!0},h=e.reduce((w,k)=>w+k.quantity,0),I=e.reduce((w,k)=>{const E=he(k.name,k.price);return w+E*k.quantity},0),m=Math.round(I*(F.gstRate/100)),S=Number(F.deliveryFee||0),P=I>0?I+m+S:0;return s.jsx(Ie.Provider,{value:{tray:e,addToTray:J,removeFromTray:ce,changeQty:we,clearTray:ge,isOpenOrdering:n,setIsOpenOrdering:i,trayCount:h,traySubtotal:I,gstAmount:m,trayTotal:P,floatingItems:a,setFloatingItems:o,theme:c,toggleTheme:ne,menuSettings:F,updateMenuSettings:le,getActivePrice:he,getActiveAvailability:se,carouselBannerUrl:q,updateCarouselBannerUrl:U,activeOrderIds:p,updateActiveOrderIds:M,updateActiveOrderId:C,currentUser:u,setCurrentUser:b,customerGps:Z,setCustomerGps:Ne,deliveryFee:S},children:r})},Ku=({onSignInClick:r,onProfileClick:e})=>{const{theme:t,toggleTheme:n,currentUser:i}=d.useContext(Ie);return d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[t,i]),s.jsxs("header",{className:`flex items-center justify-between px-6 py-4 sticky top-0 z-30 transition-colors duration-305 ${t==="light"?"bg-neutral-50/95 border-b border-slate-200":"bg-cafe-card/95 border-b border-neutral-805/80"}`,children:[s.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 min-w-0",children:[s.jsx("img",{src:"./logo.png",className:"h-9 w-auto object-contain flex-shrink-0",alt:"logo"}),s.jsx("h1",{className:`font-sans font-black text-sm sm:text-base md:text-lg tracking-tight flex items-center whitespace-nowrap transition-colors duration-300 ${t==="light"?"text-slate-900":"text-white"}`,children:"Crispy Chick KGF"})]}),s.jsxs("div",{className:"flex items-center space-x-3 flex-shrink-0",children:[s.jsxs("button",{onClick:n,className:`p-2.5 rounded-xl border transition-all duration-300 ${t==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white":"bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm"}`,children:[s.jsx("i",{"data-lucide":"sun",className:t==="dark"?"w-4 h-4 block":"hidden"}),s.jsx("i",{"data-lucide":"moon",className:t==="light"?"w-4 h-4 block":"hidden"})]}),s.jsxs("button",{onClick:i?e:r,className:`text-xs font-bold px-3.5 py-2.5 rounded-xl border transition-all duration-300 flex items-center space-x-1.5 ${t==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white":"bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm"}`,title:i?`Profile: ${i.name}`:"Sign In",children:[s.jsx("i",{"data-lucide":i?"user-circle":"log-in",className:"w-3.5 h-3.5"}),s.jsx("span",{children:i?"Hi, "+(i.name?i.name.split(" ")[0]:i.phone):"Sign In"})]})]})]})},Ju=()=>{const{theme:r}=d.useContext(Ie),e=Bu.map(i=>({type:"image",url:i})),[t,n]=d.useState(0);return d.useEffect(()=>{const i=setInterval(()=>{n(a=>(a+1)%e.length)},4e3);return()=>clearInterval(i)},[e.length]),s.jsx("div",{className:"px-6 py-4",children:s.jsxs("div",{className:`rounded-2xl border transition-all duration-300 relative overflow-hidden aspect-[16/5] flex items-center justify-center ${r==="light"?"bg-slate-105 border-slate-200":"bg-neutral-900 border-neutral-800"}`,children:[e.map((i,a)=>s.jsx("img",{src:i.url,className:`w-full h-full object-cover aspect-[16/5] absolute inset-0 transition-opacity duration-500 ${a===t?"opacity-100 block":"opacity-0 hidden"}`,alt:`Promo Banner ${a+1}`,onError:o=>{o.target.style.display="none"}},i.url)),s.jsx("div",{className:"absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5 z-10",children:e.map((i,a)=>s.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-all ${a===t?"bg-cafe-amber w-3":"bg-white/50"}`},a))})]})})},Yu=({activeCategory:r,setActiveCategory:e})=>{const{theme:t}=d.useContext(Ie),n=Object.keys(Cr);return s.jsx("div",{className:`flex overflow-x-auto py-4 px-6 space-x-3 no-scrollbar scroll-smooth sticky top-[69px] z-20 backdrop-blur-md transition-colors duration-300 ${t==="light"?"border-b border-slate-200 bg-white/90":"border-b border-neutral-900/50 bg-cafe-black/90"}`,children:n.map(i=>{const a=r===i;return s.jsx("button",{onClick:()=>e(i),className:`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${a?"bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-lg shadow-cafe-amber/25 scale-105":t==="light"?"bg-slate-100 text-slate-605 hover:text-slate-900 border border-slate-205 shadow-sm":"bg-cafe-card text-neutral-400 hover:text-white border border-neutral-800"}`,children:i},i)})})},Xu=({product:r,onAdd:e,categoryName:t})=>{const{theme:n,getActivePrice:i,getActiveAvailability:a}=d.useContext(Ie),o=i(r.name,r.price),c=a(r.name);return s.jsxs("div",{className:`rounded-2xl p-4 transition-all duration-300 relative flex flex-col justify-between h-48 overflow-hidden group ${c?"hover:scale-[1.02]":"opacity-55 grayscale"} ${n==="light"?"bg-slate-50 border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-orange-500/10":"bg-cafe-card border border-neutral-800/80 cafe-glow"}`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cafe-amber/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"}),s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("div",{className:"flex-1 pr-2",children:[s.jsx("h3",{className:`font-semibold text-sm leading-snug group-hover:text-cafe-amber transition-colors duration-300 ${n==="light"?"text-slate-900":"text-white"}`,children:r.name}),s.jsx("span",{className:c?"hidden":"inline-block mt-1 bg-red-650/10 border border-red-500/20 text-red-500 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase block w-max",children:"Sold Out"})]}),s.jsx("img",{src:r.image,className:"w-16 h-16 object-cover rounded-xl shadow-md border border-neutral-800/10 group-hover:rotate-3 transition-transform duration-300",alt:r.name})]}),s.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[s.jsxs("div",{children:[s.jsx("span",{className:`text-[10px] block font-medium uppercase tracking-wider ${n==="light"?"text-slate-400":"text-neutral-400"}`,children:"Price"}),s.jsxs("span",{className:`text-base font-bold font-sans ${n==="light"?"text-slate-900":"text-white"}`,children:["₹",o]})]}),s.jsx("button",{onClick:l=>e(l,r),className:c?"p-2.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center font-bold opacity-100 bg-cafe-amber text-cafe-black hover:bg-cafe-amberGlow block":"hidden",children:s.jsx("i",{"data-lucide":"plus",className:"w-4 h-4 stroke-[3]"})}),s.jsx("span",{className:c?"hidden":"text-xs text-neutral-550 font-bold uppercase tracking-wider select-none pr-1 block",children:"Out"})]})]})},Qu=({onCheckoutTrigger:r})=>{const{tray:e,changeQty:t,trayCount:n,traySubtotal:i,gstAmount:a,trayTotal:o,removeFromTray:c,theme:l,getActivePrice:u,menuSettings:b,deliveryFee:p}=d.useContext(Ie),[y,M]=d.useState(!1);return d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[y,e,l]),s.jsxs("div",{className:e.length>0?"block":"hidden",children:[s.jsx("div",{className:y?"fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 backdrop-blur-sm block":"hidden",onClick:()=>M(!1)}),s.jsxs("div",{className:`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gradient-to-b rounded-t-3xl border-t z-50 p-4 transition-all duration-550 transform ${l==="light"?"from-red-700 to-red-900 border-red-500/50 shadow-[-10px_-10px_35px_rgba(220,38,38,0.15)] text-white":"from-red-800 to-red-950 border-red-500/80 shadow-[-10px_-10px_35px_rgba(220,38,38,0.25)] text-white"} ${y?"translate-y-0":"translate-y-[calc(100%-80px)]"}`,children:[s.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-red-700/50 cursor-pointer",onClick:()=>M(!y),children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx("span",{className:"text-2xl animate-bounce-slow",children:"🍱"}),s.jsxs("div",{children:[s.jsxs("h3",{className:"font-bold text-white tracking-wide text-sm flex items-center",children:["YOUR FOOD TRAY",s.jsx("span",{className:"ml-2 bg-white text-red-900 rounded-full px-2.5 py-0.5 text-xs font-extrabold shadow-md",children:n})]}),s.jsx("p",{className:"text-[10px] text-red-200 font-semibold tracking-wider",children:y?"Tap to collapse tray":"Tap to review / checkout"})]})]}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsxs("span",{className:"text-xl font-black text-white font-sans",children:["₹",o]}),s.jsx("i",{"data-lucide":y?"chevron-down":"chevron-up",className:"w-5 h-5 text-white"})]})]}),s.jsx("div",{className:y?"max-h-[220px] overflow-y-auto py-4 space-y-3 no-scrollbar border-b border-red-700/50 block":"hidden",children:e.map(C=>{const F=u(C.name,C.price);return s.jsxs("div",{className:"flex items-center justify-between bg-red-900/40 p-3 rounded-xl border border-red-700/30",children:[s.jsxs("div",{className:"flex-1 flex items-center space-x-3",children:[s.jsx("img",{src:C.image,className:"w-10 h-10 object-cover rounded-lg border border-red-500/20",alt:""}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-semibold text-white text-sm leading-normal",children:C.name}),s.jsxs("span",{className:"text-xs text-red-202 font-medium",children:["₹",F," each"]})]})]}),s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx("button",{onClick:()=>t(C.name,-1),className:"w-7 h-7 rounded-lg bg-red-750/70 hover:bg-red-600 flex items-center justify-center font-extrabold text-white transition-colors",children:"-"}),s.jsx("span",{className:"text-white font-bold font-sans text-sm",children:C.quantity}),s.jsx("button",{onClick:()=>t(C.name,1),className:"w-7 h-7 rounded-lg bg-red-750/70 hover:bg-red-600 flex items-center justify-center font-extrabold text-white transition-colors",children:"+"}),s.jsx("button",{onClick:()=>c(C.name),className:"ml-2 text-red-202 hover:text-white",children:s.jsx("i",{"data-lucide":"trash-2",className:"w-4 h-4"})})]})]},C.name)})}),s.jsxs("div",{className:y?"py-3 text-[11px] text-red-200 font-medium space-y-1 block":"hidden",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Subtotal:"}),s.jsxs("span",{className:"font-bold",children:["₹",i]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("span",{children:["GST Surcharge (",b.gstRate,"%):"]}),s.jsxs("span",{className:"font-bold",children:["₹",a]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Delivery Fee:"}),s.jsxs("span",{className:"font-bold",children:["₹",p]})]})]}),s.jsx("div",{className:"pt-3 mt-1",children:s.jsxs("button",{onClick:r,className:"w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-cafe-black font-extrabold text-center rounded-xl shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all tracking-wider text-sm flex items-center justify-center space-x-2",children:[s.jsx("span",{children:"ORDER NOW (CASH / UPI)"}),s.jsx("i",{"data-lucide":"arrow-right",className:"w-4 h-4 text-cafe-black stroke-[3]"})]})})]})]})},Zu=({isOpen:r,onClose:e,onOrderSuccess:t})=>{const{trayTotal:n,traySubtotal:i,gstAmount:a,tray:o,clearTray:c,theme:l,menuSettings:u,updateActiveOrderId:b,currentUser:p,setCurrentUser:y,customerGps:M,setCustomerGps:C,deliveryFee:F}=d.useContext(Ie),[A,q]=d.useState(()=>(p==null?void 0:p.name)||localStorage.getItem("cc_customer_name")||""),[T,le]=d.useState(()=>(p==null?void 0:p.phone)||localStorage.getItem("cc_customer_phone")||""),[U,ne]=d.useState(()=>localStorage.getItem("cc_customer_landmarks")||""),[J,ce]=d.useState(""),[we,ge]=d.useState(""),[Z,Ne]=d.useState(""),[he,se]=d.useState([]),[h,I]=d.useState(""),[m,S]=d.useState(!1),[P,w]=d.useState(""),[k,E]=d.useState(""),[_,O]=d.useState(""),[ee,Me]=d.useState(""),[Ue,ke]=d.useState(!1),[nt,mr]=d.useState(!1),[pe,Y]=d.useState(!1),[Se,st]=d.useState("info"),[vt,Te]=d.useState(""),[it,Fe]=d.useState(!1),[Mt,at]=d.useState(!1),[ye,ot]=d.useState(!1),[Ee,fr]=d.useState(""),[$e,Ye]=d.useState(""),[Xe,wt]=d.useState(""),[Ve,V]=d.useState(""),[Gn,Br]=d.useState(""),[zr,Gr]=d.useState(""),[gr,yt]=d.useState(!1),[lt,Ut]=d.useState(""),[f,x]=d.useState(""),[v,L]=d.useState("KGF"),[be,je]=d.useState(!1),br=["563122","563113","563120","563115","563117","563116"],Kn=N=>/^[6-9]\d{9}$/.test(N),Kr=N=>new Set(N.split("")).size===1||N==="1234567890"||N==="9876543210",W=!!(p||localStorage.getItem("cc_customer_name")&&localStorage.getItem("cc_customer_phone"));d.useEffect(()=>{if(!r)q((p==null?void 0:p.name)||localStorage.getItem("cc_customer_name")||""),le((p==null?void 0:p.phone)||localStorage.getItem("cc_customer_phone")||""),ne(localStorage.getItem("cc_customer_landmarks")||""),ce(""),ge(""),Ne(""),C({lat:null,lng:null}),ke(!1),mr(!1),Te(""),st("info"),Y(!1),at(!1),Fe(!1),ot(!1),Ye(""),wt(""),V(""),fr(""),Br(""),Gr(""),yt(!1),Ut(""),x(""),L("KGF"),je(!1),se([]),I(""),S(!1),w(""),E(""),O(""),Me("");else{setTimeout(()=>Fe(!0),50);const N=(p==null?void 0:p.phone)||localStorage.getItem("cc_customer_phone");N&&$.collection("users").doc(N).get().then(D=>{if(D.exists){const j=D.data();if(j.addresses&&Array.isArray(j.addresses)&&j.addresses.length>0)se(j.addresses),I(j.addresses[0].id);else if(j.addressDetails||j.pinCode){const ie=[{id:"default",title:"Registered Address",addressDetails:j.addressDetails||"",landmark:j.landmark||"",pinCode:j.pinCode||""}];se(ie),I("default")}}}).catch(()=>{})}window.lucide&&window.lucide.createIcons()},[r,p]);const Jr=()=>{at(!0),setTimeout(()=>{e()},280)};d.useEffect(()=>{if(!r||!navigator.geolocation)return;ke(!0);const N=navigator.geolocation.watchPosition(D=>{C({lat:D.coords.latitude,lng:D.coords.longitude}),mr(!0),ke(!1)},D=>{ke(!1),console.warn("GPS watchPosition error:",D.message)},{enableHighAccuracy:!0,maximumAge:0,timeout:1e4});return()=>{navigator.geolocation.clearWatch(N)}},[r]);const qi=()=>{try{new Audio("https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3").play().catch(()=>{})}catch{}},Jn=()=>{const N=Math.floor(1e5+Math.random()*9e5).toString();wt(N),Ye(""),V(""),yt(!1),Y(!1),qi(),je(!0)},Hi=()=>{Ye(""),V(""),Y(!0),setTimeout(Jn,2500)},Bi=async N=>{if(N.preventDefault(),Xe&&!W){if(!$e||$e.length!==6){V("Enter the full 6-digit code.");return}if($e.trim()!==Xe){V("Incorrect code. Please check and try again.");return}V(""),Y(!0);try{const D=await $.collection("users").doc(T).get();if(D.exists){const j=D.data(),ie=j.name||A;localStorage.setItem("cc_customer_name",ie),localStorage.setItem("cc_customer_phone",T),y&&y({name:ie,phone:T});let Ft=null;j.addresses&&Array.isArray(j.addresses)&&j.addresses.length>0?Ft=j.addresses[0]:(j.addressDetails||j.pinCode)&&(Ft={addressDetails:j.addressDetails,landmark:j.landmark,pinCode:j.pinCode}),await xr(ie,T,Ft)}else st("name")}catch(D){console.error("User lookup error:",D),st("name")}finally{Y(!1)}return}if(W){if(he.length===0){V("Please add a delivery address first.");return}const D=he.find(j=>j.id===h);if(!D){V("Please select a delivery address.");return}if(J&&!Fu(J))return;await xr((p==null?void 0:p.name)||A,(p==null?void 0:p.phone)||T,D);return}if(!A||!T||!Ee||!lt||!U||!Z){V("Please fill in all required fields.");return}if(Vu(A)){if(!Kn(T)){V("Invalid number. Must be 10 digits starting with 6–9.");return}if(Kr(T)){V("Looks like a fake number. Please use your real mobile number.");return}if(T!==Ee){V("Phone numbers do not match. Please re-enter.");return}if(!br.includes(Z.trim())){alert("Sorry, this PIN code is currently out of our delivery range!");return}V(""),Y(!0),setTimeout(Jn,2500)}},xr=async(N,D,j=null)=>{if(localStorage.setItem("cc_customer_landmarks",U),o.length===0){st("success"),Y(!1);return}Y(!0);try{const ie=D||((p==null?void 0:p.phone)||"").trim(),Ft=j?j.addressDetails:lt,zi=j?j.landmark:U,Gi=j?j.pinCode:Z,Ki={customerName:N||(p==null?void 0:p.name),customerPhone:ie+(J?" / Alt: "+J.trim():""),addressDetails:Ft,landmarks:zi,deliveryArea:we,deliveryPin:Gi,items:o,totalAmount:n,...M.lat!=null&&M.lng!=null?{gpsLat:M.lat,gpsLng:M.lng}:{}},Yr=await Du(Ki);Te(Yr.otp),ot(!0),c(),b(Yr.id),zn(),st("success"),t&&t(Yr)}catch(ie){console.error("Checkout error:",ie),alert("Order failed: "+ie.message)}finally{Y(!1)}};return s.jsxs("div",{className:`fixed inset-0 z-50 flex items-end justify-center p-4 transition-all duration-300 ${r?"block":"hidden"}`,children:[s.jsx("div",{className:`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 backdrop-blur-sm ${it&&!Mt?"opacity-100":"opacity-0"}`,onClick:Jr}),be&&s.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4",children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-center space-y-5",children:[s.jsx("button",{type:"button",onClick:()=>{je(!1),wt(""),Ye(""),V("")},className:"absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition font-bold text-base leading-none","aria-label":"Close",children:"×"}),s.jsxs("div",{className:"space-y-1 pt-1",children:[s.jsx("div",{className:"text-3xl",children:"📦"}),s.jsx("h2",{className:"text-lg font-black text-slate-900 font-serif",children:"Delivery Verification Code"}),s.jsx("p",{className:"text-xs text-slate-500",children:"Enter the code below to confirm your identity"})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-amber-50 border-amber-200",children:[s.jsx("span",{className:"text-2xl font-black tracking-[0.35em] text-amber-600 select-all font-mono flex-1 text-center",children:Xe}),s.jsx("button",{type:"button",onClick:()=>{try{navigator.clipboard.writeText(Xe).then(()=>{yt(!0),setTimeout(()=>yt(!1),1500)}).catch(()=>{})}catch{}},className:`shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all border ${gr?"bg-emerald-50 text-emerald-600 border-emerald-300":"bg-white border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:gr?"Copied ✓":"Copy"})]}),Ve&&s.jsx("div",{className:"text-[11px] text-red-500 font-bold bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-left",children:Ve}),s.jsxs("div",{className:"text-left",children:[s.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-500",children:"Enter Code to Confirm"}),s.jsx("input",{type:"text",inputMode:"numeric",maxLength:"6",autoFocus:!0,placeholder:"• • • • • •",value:$e,onChange:N=>Ye(N.target.value.replace(/\D/g,"").slice(0,6)),className:"w-full border border-slate-300 rounded-xl px-4 py-4 text-2xl text-center tracking-[0.6em] font-black focus:outline-none focus:border-amber-500 bg-white text-slate-900"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{type:"button",disabled:pe,onClick:()=>{if(!$e||$e.length!==6){V("Enter the full 6-digit code.");return}if($e.trim()!==Xe){V("Incorrect code. Please try again.");return}V(""),je(!1),Y(!0),$.collection("users").doc(T).get().then(N=>{if(N.exists){const D=N.data(),j=D.name||A;localStorage.setItem("cc_customer_name",j),localStorage.setItem("cc_customer_phone",T),y&&y({name:j,phone:T});let ie=null;D.addresses&&Array.isArray(D.addresses)&&D.addresses.length>0?ie=D.addresses[0]:(D.addressDetails||D.pinCode)&&(ie={addressDetails:D.addressDetails,landmark:D.landmark,pinCode:D.pinCode}),xr(j,T,ie)}else $.collection("users").doc(T).set({name:A,phone:T,addressDetails:lt,landmark:U,pinCode:Z,addresses:[{id:"default",title:"Home",addressDetails:lt,landmark:U,pinCode:Z}],verified:!1,createdAt:new Date}).then(()=>{localStorage.setItem("cc_customer_name",A),localStorage.setItem("cc_customer_phone",T),y&&y({name:A,phone:T}),xr(A,T)}).catch(()=>{alert("Failed to register profile. Please try again."),Y(!1)})}).catch(()=>{alert("Network error."),Y(!1)})},className:"flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-sm",children:pe?s.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):"CONFIRM CODE →"}),s.jsx("button",{type:"button",disabled:pe,onClick:Hi,className:"px-4 py-3.5 rounded-xl border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 font-extrabold text-xs transition-all disabled:opacity-60",children:pe?s.jsx("div",{className:"w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"}):"RESEND"})]}),s.jsx("button",{type:"button",onClick:()=>{je(!1),wt(""),Ye(""),V("")},className:"w-full text-[11px] text-slate-400 hover:text-slate-600 font-semibold transition",children:"← Change Number"})]})}),s.jsxs("div",{className:`w-full max-w-md rounded-t-3xl border p-6 space-y-6 shadow-2xl z-50 max-h-[90vh] overflow-y-auto no-scrollbar transition-all duration-300 transform ${l==="light"?"bg-white border-slate-205 text-slate-900":"bg-cafe-card border-neutral-805 text-white"} ${it&&!Mt?"translate-y-0 opacity-100":"translate-y-full opacity-0"}`,children:[s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:Se==="success"?ye?"🎉 Order Placed!":"🎉 Profile Registered!":o.length===0?"👤 Profile Registration":"📋 Delivery Checkout"}),s.jsx("button",{onClick:Jr,className:`text-neutral-505 hover:text-white transition ${Se!=="success"?"block":"hidden"}`,children:s.jsx("i",{"data-lucide":"x",className:"w-5 h-5"})})]}),s.jsx("div",{className:Se==="info"?"block":"hidden",children:s.jsxs("form",{onSubmit:Bi,className:"space-y-4",children:[s.jsxs("div",{className:W?`p-3.5 rounded-xl border flex items-center justify-between text-xs ${l==="light"?"bg-slate-105 border-slate-200 text-slate-900":"bg-neutral-900 border-neutral-800 text-white"}`:"hidden",children:[s.jsxs("div",{children:[s.jsx("span",{className:"block text-[10px] text-neutral-450 font-bold uppercase tracking-wider",children:"Signed In User"}),s.jsx("span",{className:"font-bold text-sm text-cafe-amber",children:A}),s.jsxs("span",{className:"block text-[10.5px] text-neutral-400 mt-0.5",children:["Primary Phone: ",T]})]}),s.jsx("span",{className:"text-xl",children:"✅"})]}),s.jsxs("div",{className:W?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Customer Name ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"text",required:!W,placeholder:"Enter your full name",pattern:"[A-Za-z\\s]+",title:"Letters and spaces only",value:A,onChange:N=>q(N.target.value.replace(/[^A-Za-z\s]/g,"")),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:W?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"tel",required:!W,placeholder:"10-digit mobile (starts with 6–9)",maxLength:10,minLength:10,pattern:"[6-9][0-9]{9}",inputMode:"numeric",value:T,onChange:N=>le(N.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:W?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Confirm Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"tel",required:!W,placeholder:"Re-enter mobile number",maxLength:10,minLength:10,pattern:"[6-9][0-9]{9}",inputMode:"numeric",value:Ee,onChange:N=>fr(N.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"} ${Ee&&Ee!==T?"border-red-500":""}`}),Ee&&Ee!==T&&s.jsx("p",{className:"text-[10px] text-red-400 font-semibold mt-1",children:"⚠ Numbers don't match"})]}),s.jsxs("div",{className:W?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Address Details (House No, Building Name) ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"text",required:!W,placeholder:"E.g., #12, Mahalakshmi Towers",value:lt,onChange:N=>Ut(N.target.value),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:W?"block":"hidden",children:[s.jsx("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:"Alternate Phone Number (Optional)"}),s.jsx("input",{type:"tel",placeholder:"Enter 10-digit alternate number",maxLength:10,minLength:10,pattern:"[0-9]*",inputMode:"numeric",value:J,onChange:N=>ce(N.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:W?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["Landmark ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("textarea",{required:!W,placeholder:"E.g., Near Geetha Canteen, 3rd Cross Road",value:U,onChange:N=>ne(N.target.value),className:`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-amber h-20 resize-none ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:W?"hidden":"block",children:[s.jsxs("label",{className:`block text-[10px] font-bold uppercase tracking-wider mb-2 ${l==="light"?"text-slate-505":"text-neutral-400"}`,children:["PIN Code ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{type:"text",required:!W,inputMode:"numeric",maxLength:"6",placeholder:"E.g., 563122",value:Z,onChange:N=>Ne(N.target.value.replace(/\D/g,"").slice(0,6)),className:`w-full border rounded-xl px-4 py-3 text-sm text-center tracking-widest font-black focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-neutral-55 border-slate-200 text-slate-905":"bg-cafe-black border-neutral-800 text-white"}`})]}),s.jsxs("div",{className:W?"block space-y-4":"hidden",children:[s.jsx("h4",{className:`text-sm font-bold ${l==="light"?"text-slate-800":"text-white"}`,children:"Select Delivery Address"}),he.map(N=>s.jsxs("div",{onClick:()=>I(N.id),className:`relative p-4 rounded-xl border cursor-pointer transition-all ${h===N.id?l==="light"?"bg-amber-50 border-amber-500 shadow-sm":"bg-cafe-amber/10 border-cafe-amber":l==="light"?"bg-white border-slate-200 hover:border-slate-300":"bg-cafe-black border-neutral-800 hover:border-neutral-700"}`,children:[s.jsx("button",{type:"button",onClick:D=>{D.stopPropagation();const j=he.filter(ie=>ie.id!==N.id);se(j),h===N.id&&I(j.length>0?j[0].id:""),$.collection("users").doc(T).update({addresses:j}).catch(()=>{})},className:`absolute top-3 right-3 p-1 rounded-full ${l==="light"?"hover:bg-slate-200 text-slate-400 hover:text-red-500":"hover:bg-neutral-800 text-neutral-500 hover:text-red-400"} transition`,children:s.jsx("i",{"data-lucide":"x",className:"w-4 h-4"})}),s.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[s.jsx("i",{"data-lucide":N.title.toLowerCase().includes("home")?"home":N.title.toLowerCase().includes("work")||N.title.toLowerCase().includes("office")?"briefcase":"map-pin",className:`w-4 h-4 ${h===N.id?"text-cafe-amber":l==="light"?"text-slate-500":"text-neutral-400"}`}),s.jsx("span",{className:`font-bold text-xs uppercase tracking-wider ${h===N.id?"text-cafe-amber":l==="light"?"text-slate-700":"text-neutral-300"}`,children:N.title})]}),s.jsx("p",{className:`text-xs mt-2 ${l==="light"?"text-slate-600":"text-neutral-400"}`,children:N.addressDetails}),s.jsxs("p",{className:`text-[11px] mt-1 ${l==="light"?"text-slate-500":"text-neutral-500"}`,children:["Landmark: ",N.landmark]}),s.jsxs("p",{className:`text-[11px] font-bold mt-1 ${l==="light"?"text-slate-700":"text-neutral-300"}`,children:["PIN: ",N.pinCode]})]},N.id)),m?s.jsxs("div",{className:`p-4 rounded-xl border space-y-3 ${l==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900 border-neutral-800"}`,children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("h5",{className:`text-xs font-bold uppercase tracking-wider ${l==="light"?"text-slate-700":"text-white"}`,children:"New Address"}),s.jsx("button",{type:"button",onClick:()=>S(!1),className:"text-neutral-500 hover:text-red-400",children:s.jsx("i",{"data-lucide":"x",className:"w-4 h-4"})})]}),s.jsx("input",{type:"text",placeholder:"Title (e.g. Home, Office)",value:P,onChange:N=>w(N.target.value),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("input",{type:"text",placeholder:"House No, Building Name",value:k,onChange:N=>E(N.target.value),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("input",{type:"text",placeholder:"Landmark",value:_,onChange:N=>O(N.target.value),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("input",{type:"text",inputMode:"numeric",maxLength:"6",placeholder:"PIN Code *",value:ee,onChange:N=>Me(N.target.value.replace(/\D/g,"").slice(0,6)),className:`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber tracking-widest font-bold ${l==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`}),s.jsx("button",{type:"button",onClick:()=>{if(!P||!k||!_||!ee){alert("Please fill all fields");return}if(!br.includes(ee.trim())){alert("Sorry, this PIN code is out of our KGF delivery range.");return}const N={id:Date.now().toString(),title:P,addressDetails:k,landmark:_,pinCode:ee},D=[...he,N];se(D),I(N.id),$.collection("users").doc(T).update({addresses:D}).catch(()=>{}),S(!1),w(""),E(""),O(""),Me("")},className:"w-full py-2.5 bg-cafe-amber text-cafe-black font-extrabold rounded-lg text-xs hover:bg-cafe-crispy transition",children:"Save Address"})]}):s.jsxs("button",{type:"button",onClick:()=>S(!0),className:`w-full py-3 rounded-xl border border-dashed text-xs font-bold transition flex items-center justify-center gap-2 ${l==="light"?"border-slate-300 text-slate-500 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-400":"border-neutral-700 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-600"}`,children:[s.jsx("i",{"data-lucide":"plus",className:"w-4 h-4"}),"Add New Address"]})]}),s.jsx("div",{className:`w-full py-2 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 ${nt?"bg-emerald-500/15 border-emerald-500/30 text-emerald-400":Ue?"bg-cafe-amber/10 border-cafe-amber/30 text-cafe-amber":"bg-neutral-900/40 border-neutral-800 text-neutral-500"}`,children:Ue?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"}),s.jsx("span",{children:"Acquiring GPS signal..."})]}):nt?s.jsx("span",{children:"✅ Live GPS Locked"}):s.jsx("span",{children:"📍 GPS unavailable — landmarks used"})}),s.jsx("div",{className:o.length>0?"block":"hidden",children:s.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-1.5 ${l==="light"?"bg-slate-105/60 border-slate-200/80 text-slate-600":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400"}`,children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Subtotal:"}),s.jsxs("span",{className:`font-bold ${l==="light"?"text-slate-900":"text-white"}`,children:["₹",i]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("span",{children:["GST Surcharge (",u.gstRate,"%):"]}),s.jsxs("span",{className:`font-bold ${l==="light"?"text-slate-900":"text-white"}`,children:["₹",a]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Delivery Fee:"}),s.jsxs("span",{className:`font-bold ${l==="light"?"text-slate-900":"text-white"}`,children:["₹",F]})]}),s.jsx("hr",{className:`my-1.5 ${l==="light"?"border-slate-205":"border-neutral-805"}`}),s.jsxs("div",{className:"flex justify-between text-sm font-black",children:[s.jsx("span",{className:l==="light"?"text-slate-800":"text-white",children:"Total Due:"}),s.jsxs("span",{className:"text-cafe-amber",children:["₹",n]})]})]})}),s.jsx("div",{className:o.length===0?"block":"hidden",children:s.jsxs("div",{className:`p-4 rounded-xl border text-xs text-center ${l==="light"?"bg-slate-105/60 border-slate-200/80 text-slate-600":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400"}`,children:[s.jsx("p",{className:"font-semibold text-cafe-amber",children:"No active items in food tray."}),s.jsx("p",{className:"text-[10px] mt-1",children:"Submit your details to register and verify your profile for instant future orders."})]})}),Ve&&Se==="info"&&s.jsx("div",{className:"text-[11px] text-red-400 font-bold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2",children:Ve}),s.jsx("div",{className:!W&&Xe?"hidden":"block",children:s.jsxs("button",{type:"submit",disabled:pe,className:"w-full py-4 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-60",children:[s.jsx("div",{className:`w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin ${pe?"block":"hidden"}`}),s.jsx("span",{className:pe?"hidden":"inline-block",children:o.length===0?W?"UPDATE PROFILE DETAILS":"GET VERIFICATION CODE":W?"CONFIRM ORDER DETAILS":"CONFIRM & SEND CODE ›"}),s.jsx("i",{"data-lucide":"arrow-right",className:`w-4 h-4 stroke-[3] ${pe?"hidden":"inline-block"}`})]})})]})}),s.jsx("div",{className:Se==="success"?"block":"hidden",children:s.jsxs("div",{className:"text-center space-y-5 py-4",children:[s.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30",children:s.jsx("i",{"data-lucide":"check-circle",className:"w-10 h-10"})}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"text-base font-bold",children:ye?"✅ Order Placed Successfully!":"Profile Registered! 🎉"}),s.jsx("p",{className:"text-xs text-neutral-400 max-w-xs mx-auto",children:ye?"The kitchen has received your ticket. Provide this OTP code to the delivery driver on arrival.":"Your profile details are verified and saved. You can now build your tray and checkout instantly."})]}),s.jsx("div",{className:ye?"block":"hidden",children:s.jsxs("div",{className:`border p-5 rounded-2xl space-y-2 ${l==="light"?"bg-slate-50 border-slate-205":"bg-neutral-900 border-neutral-805"}`,children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-widest",children:"Delivery Handshake Verification OTP"}),s.jsx("div",{className:"text-3xl font-black tracking-widest text-cafe-amber font-sans select-all",children:vt})]})}),s.jsx("div",{className:ye?"hidden":"block",children:s.jsxs("div",{className:`border p-5 rounded-2xl space-y-2 ${l==="light"?"bg-slate-50 border-slate-205":"bg-neutral-900 border-neutral-805"}`,children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-widest",children:"Registered Phone"}),s.jsx("div",{className:"text-xl font-black text-cafe-amber font-sans select-all",children:T}),s.jsx("span",{className:"text-[9px] text-emerald-500 font-bold uppercase tracking-wider block mt-1",children:"Status: Verified ✅"})]})}),s.jsx("button",{onClick:Jr,className:`w-full py-3.5 font-semibold rounded-xl border transition-all text-sm ${l==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-250":"bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"}`,children:"Back to Menu"})]})})]})]})},eh=({isOpen:r,onClose:e})=>{const{theme:t,currentUser:n,setCurrentUser:i}=d.useContext(Ie),[a,o]=d.useState([]);d.useEffect(()=>{if(!r||!n){o([]);return}const l=Bn(u=>{const b=n.phone,p=u.filter(y=>["successfully_delivered","delivered","completed"].includes(y.status)&&y.customerPhone&&y.customerPhone.includes(b));o(p)});return()=>{typeof l=="function"&&l()}},[r,n==null?void 0:n.phone]),d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[r,a,t]);const c=()=>{localStorage.removeItem("cc_customer_name"),localStorage.removeItem("cc_customer_phone"),i(null),window.dispatchEvent(new Event("storage")),e()};return s.jsxs("div",{className:`fixed inset-0 z-50 flex items-end justify-center p-4 transition-all duration-300 ${r?"block":"hidden"}`,children:[s.jsx("div",{className:"fixed inset-0 bg-black/70 z-40 backdrop-blur-sm",onClick:e}),s.jsxs("div",{className:`w-full max-w-md rounded-t-3xl border p-6 space-y-5 shadow-2xl z-50 max-h-[85vh] overflow-y-auto no-scrollbar ${t==="light"?"bg-white border-slate-205 text-slate-900":"bg-cafe-card border-neutral-805 text-white"}`,children:[s.jsxs("div",{className:`flex items-center justify-between pb-3 border-b ${t==="light"?"border-neutral-200":"border-neutral-900"}`,children:[s.jsxs("h3",{className:"text-base font-bold font-serif flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"user-circle",className:"w-5 h-5 text-cafe-amber"}),s.jsx("span",{children:"My Profile"})]}),s.jsx("button",{onClick:e,className:"text-neutral-500 hover:text-white transition",children:s.jsx("i",{"data-lucide":"x",className:"w-5 h-5"})})]}),s.jsxs("div",{className:`p-4 rounded-xl border space-y-2 ${t==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900 border-neutral-800"}`,children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-wider",children:"Name"}),s.jsx("p",{className:"font-bold text-sm text-cafe-amber",children:(n==null?void 0:n.name)||"—"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-wider",children:"Phone"}),s.jsx("p",{className:"font-bold text-sm font-sans",children:(n==null?void 0:n.phone)||"—"})]})]}),s.jsxs("button",{onClick:c,className:"w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-xs rounded-xl border border-red-500/20 transition flex items-center justify-center space-x-2",children:[s.jsx("i",{"data-lucide":"log-out",className:"w-4 h-4"}),s.jsx("span",{children:"Sign Out"})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"history",className:"w-4 h-4"}),s.jsx("span",{children:"Order History"})]}),s.jsxs("div",{className:`max-h-48 overflow-y-auto space-y-2 rounded-xl border p-2 no-scrollbar ${t==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/60 border-neutral-800"}`,children:[s.jsx("div",{className:a.length===0?"p-6 text-center text-neutral-500 text-xs block":"hidden",children:"No completed orders yet."}),a.map(l=>s.jsxs("div",{className:`p-3 rounded-lg border text-xs space-y-1 ${t==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("span",{className:"font-bold text-cafe-amber",children:["#",l.id.slice(-6)]}),s.jsx("span",{className:"text-[10px] text-neutral-500",children:l.placementTime||"—"})]}),s.jsx("p",{className:`text-[11px] truncate ${t==="light"?"text-slate-600":"text-neutral-400"}`,children:l.items.map(u=>`${u.quantity}x ${u.name}`).join(", ")}),s.jsxs("div",{className:"flex justify-between items-center pt-1",children:[s.jsxs("span",{className:"font-bold",children:["₹",l.totalAmount]}),s.jsx("span",{className:"text-[9px] font-bold uppercase text-emerald-500",children:"Delivered ✓"})]})]},l.displayId||l.id.slice(0,4)))]})]})]})]})},th=({onCheckoutSuccess:r})=>{const{isOpenOrdering:e,addToTray:t,floatingItems:n,setFloatingItems:i,theme:a,activeOrderIds:o,updateActiveOrderIds:c,updateActiveOrderId:l,currentUser:u}=d.useContext(Ie),[b,p]=d.useState("Fried Chicken"),[y,M]=d.useState(!1),[C,F]=d.useState(!1),[A,q]=d.useState([]),[T,le]=d.useState(!1),[U,ne]=d.useState(null),[J,ce]=d.useState(!1),we=(m,S)=>{const P=m.clientX,w=m.clientY,k={id:Date.now()+Math.random(),x:P,y:w,image:S.image};i(E=>[...E,k]),t(S),setTimeout(()=>{i(E=>E.filter(_=>_.id!==k.id))},800)},ge=()=>{M(!0)},Z=m=>(m||"").split(" / Alt:")[0].trim();d.useEffect(()=>{if(!u||!u.phone){q([]);return}const m=new Set(["pending","preparing","prepared","out_for_delivery"]),S=Bn(P=>{const w=u.phone,k=P.filter(E=>{const _=(E.status||"").toLowerCase();return m.has(_)&&Z(E.customerPhone)===w}).sort((E,_)=>(_.createdAt||0)-(E.createdAt||0));q(k)});return()=>{typeof S=="function"&&S()}},[u==null?void 0:u.phone]);const Ne=d.useRef({});d.useEffect(()=>{if(A.length>0){let m=!1;A.forEach(S=>{const P=Ne.current[S.id];P&&P!==S.status&&(m=!0,S.status==="out_for_delivery"&&(ne(S),ce(!0))),Ne.current[S.id]=S.status}),m&&zn()}},[A]);const he=m=>{m&&q(S=>{if(S.some(w=>w.id===m.id))return S;const P=(u==null?void 0:u.phone)||Z(m.customerPhone);return Z(m.customerPhone)!==P?S:[...S,m]})},se=m=>{const S=(o||[]).filter(P=>P!==m);c(S)};d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[y,C,a,A,T,b,J]);const h=Cr[b]||[],I=m=>{switch(m){case"pending":return"Awaiting shop acceptance ⏳";case"preparing":return"Preparing 🍳";case"prepared":return"Ready for rider pickup 🐣";case"out_for_delivery":return"Out for delivery 🛵";case"successfully_delivered":case"delivered":case"completed":return"Delivered! Enjoy your meal! 🎉";case"rejected":return"Order Cancelled by Shop ❌";default:return"Processing..."}};return s.jsxs("div",{className:`min-h-screen relative flex flex-col pb-24 max-w-md mx-auto shadow-2xl transition-colors duration-305 overflow-hidden ${a==="light"?"bg-white text-slate-800 border-x border-slate-200":"bg-cafe-black text-white border-x border-neutral-900/60"}`,children:[s.jsx("div",{className:`fixed inset-0 pointer-events-none z-0 transition-opacity duration-300 ${a==="light"?"bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-100/10 via-white to-white":"bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950"}`}),s.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[s.jsx(Ku,{onSignInClick:ge,onProfileClick:()=>F(!0)}),s.jsx("div",{className:A.length>0?"max-h-[300px] overflow-y-auto space-y-0 no-scrollbar block":"hidden",children:A.map(m=>s.jsxs("div",{className:"px-4 py-3 bg-neutral-900/90 border-b border-amber-600/20 text-white space-y-2",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"bike",className:"w-4 h-4 text-cafe-amber flex-shrink-0"}),s.jsxs("span",{className:"font-bold text-xs text-cafe-amber",children:["Order #",m.displayId||m.id.slice(-4).toUpperCase()]})]}),s.jsx("span",{className:"font-semibold text-[10px] text-neutral-450 uppercase",children:m.placementTime})]}),s.jsx("div",{className:m.status!=="rejected"?"w-full block mb-3":"hidden",children:s.jsxs("div",{className:"flex items-center justify-between relative mt-2 px-1",children:[s.jsx("div",{className:"absolute top-3 left-0 right-0 h-0.5 bg-neutral-800 z-0 rounded-full",children:s.jsx("div",{className:"bg-gradient-to-r from-cafe-amber to-cafe-crispy h-0.5 rounded-full transition-all duration-500",style:{width:`${m.status==="pending"?"0%":m.status==="preparing"||m.status==="prepared"?"33.33%":m.status==="out_for_delivery"?"66.66%":["successfully_delivered","delivered","completed"].includes(m.status)?"100%":"0%"}`}})}),["Pending","Preparing","Out For Delivery","Delivered"].map((S,P)=>{const w=m.status,k=w==="pending"?0:w==="preparing"||w==="prepared"?1:w==="out_for_delivery"?2:["successfully_delivered","delivered","completed"].includes(w)?3:-1,E=P<k,_=P===k,O=P<=k;return s.jsxs("div",{className:"flex flex-col items-center z-10 relative",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-300 ${_?"bg-cafe-amber text-cafe-black ring-2 ring-cafe-amber/30 scale-110":E?"bg-cafe-crispy text-cafe-black":"bg-neutral-800 text-neutral-500 border border-neutral-700"}`,children:E?"✓":P+1}),s.jsx("span",{className:`text-[9px] font-bold mt-1 text-center whitespace-nowrap ${O?"text-cafe-amber":"text-neutral-555"}`,children:S})]},S)})]})}),m.status==="out_for_delivery"&&s.jsxs("div",{className:"rounded-xl px-4 py-3 border border-amber-500/30 bg-amber-500/10 mb-3 flex items-center justify-between shadow-sm",children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"w-10 h-10 bg-cafe-amber/20 text-cafe-amber rounded-full flex items-center justify-center shadow-inner",children:s.jsx("i",{"data-lucide":"bike",className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-serif font-bold text-sm text-cafe-amber mb-0.5",children:"🛵 Out for Delivery!"}),s.jsxs("p",{className:"text-[10px] text-neutral-300 uppercase tracking-wider",children:["Rider: ",s.jsx("span",{className:"font-bold text-white",children:m.riderName||m.assignedRider||"Delivery Rider"})]})]})]}),s.jsxs("a",{href:m.riderPhone?`tel:${m.riderPhone}`:"#",className:`px-3 py-2 bg-cafe-amber text-cafe-black font-extrabold rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors ${m.riderPhone?"hover:bg-amber-400":"pointer-events-none opacity-50"}`,children:[s.jsx("i",{"data-lucide":"phone",className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Call Rider"})]})]}),s.jsxs("div",{className:"rounded-lg px-3 py-2 border border-neutral-700/50 bg-neutral-800/40",children:[s.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-cafe-amber block text-center mb-1",children:"Your Order"}),s.jsx("p",{className:"text-[11px] font-semibold leading-relaxed text-center text-neutral-100",children:(m.items||[]).map(S=>`${S.quantity}x ${S.name}`).join(", ")}),s.jsx("p",{className:"text-[10px] font-medium text-center text-neutral-450 pt-1 border-t border-neutral-700/40 mt-1.5",children:I(m.status)}),m.displayId&&m.status==="out_for_delivery"&&s.jsxs("div",{className:"mt-2 pt-2 border-t border-amber-600/20 text-center",children:[s.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-neutral-500 block mb-0.5",children:"Delivery PIN"}),s.jsx("span",{className:"text-lg font-black tracking-[0.25em] text-cafe-amber",children:m.displayId})]})]}),(m.status==="pending"||m.status==="preparing")&&s.jsx("div",{className:"flex justify-center mt-3",children:s.jsx("button",{onClick:()=>{window.alert("Store Contact: +91 90357 33573");const S=m.createdAt&&Date.now()-(m.createdAt.toDate?m.createdAt.toDate().getTime():m.createdAt)<3e5;m.status==="pending"&&S&&$.collection("orders").doc(m.id).update({cancellationRequested:!0}).catch(()=>{})},className:"text-[10px] text-red-405 hover:text-red-305 font-bold underline transition",children:"Need Help?"})}),s.jsx("div",{className:["successfully_delivered","delivered","completed","rejected","cancelled"].includes(m.status)?"flex justify-end pt-1 block":"hidden",children:s.jsx("button",{onClick:()=>se(m.id),className:"px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-[10px] font-bold rounded-lg border border-neutral-700 transition",children:"Dismiss"})})]},m.id))}),s.jsxs("div",{className:e?"hidden":"flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 my-auto block",children:[s.jsx("h2",{className:"text-xl font-bold font-serif mt-4",children:"Online Ordering Paused"}),s.jsx("p",{className:`text-sm max-w-xs leading-relaxed ${a==="light"?"text-slate-505":"text-neutral-455"}`,children:"We are currently experiencing high walk-in traffic at Robertsonpet shop. Online orders are temporarily closed."}),s.jsx("div",{className:`p-3 rounded-xl border text-xs text-cafe-amber ${a==="light"?"bg-slate-50 border-slate-200":"bg-cafe-card border-neutral-850"}`,children:"⏱️ Check back soon!"})]}),s.jsxs("div",{className:e?"flex-1 flex flex-col block":"hidden",children:[s.jsx(Ju,{}),s.jsx(Yu,{activeCategory:b,setActiveCategory:p}),s.jsx("main",{className:"flex-1 p-6 grid grid-cols-2 gap-4 max-h-[calc(100vh-320px)] overflow-y-auto no-scrollbar font-sans",children:h.map(m=>s.jsx(Xu,{product:m,onAdd:we,categoryName:b},m.name))}),s.jsx(Qu,{onCheckoutTrigger:()=>M(!0)})]})]}),n.map(m=>s.jsx("img",{src:m.image,className:"floating-food w-12 h-12 object-cover rounded-full shadow-2xl border-2 border-cafe-amber",style:{left:m.x,top:m.y},alt:""},m.id)),s.jsx("div",{className:y?"block fixed inset-0 z-50":"hidden",children:s.jsx(Zu,{onClose:()=>M(!1),onOrderSuccess:m=>{l(m.id),he(m),r&&r(m.id,m.otp)},isOpen:y})}),s.jsx(eh,{isOpen:C,onClose:()=>F(!1)})]})},rh=()=>{const{login:r}=d.useContext(pr),[e,t]=d.useState(""),[n,i]=d.useState(""),[a,o]=d.useState(!1),[c,l]=d.useState(""),u=async b=>{if(b.preventDefault(),!(!e||!n)){o(!0),l("");try{const p=await r(e,n);setTimeout(()=>{p.role==="OWNER_COUNTER"?window.location.hash="#/shop-counter":p.role==="DELIVERY_RIDER"&&(window.location.hash="#/delivery-dashboard")},100)}catch(p){l(p.message||"Invalid credentials."),o(!1)}}};return d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[c]),s.jsxs("div",{className:"min-h-screen bg-cafe-black flex items-center justify-center p-6 relative font-sans",children:[s.jsx("div",{className:"fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950 pointer-events-none z-0"}),s.jsxs("div",{className:"w-full max-w-sm bg-cafe-card rounded-3xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative z-10 text-center",children:[s.jsx("img",{src:"./logo.png",className:"h-16 mx-auto object-contain mb-2",alt:"logo"}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("h2",{className:"text-xl font-bold font-serif text-white",children:"Central Verification Gate"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Log in using your workspace credentials"})]}),s.jsxs("div",{className:c?"bg-red-500/10 border border-red-500 text-red-400 p-3.5 rounded-xl text-xs text-left font-semibold block":"hidden",children:["⚠️ ",c]}),s.jsxs("form",{onSubmit:u,className:"space-y-4 text-left",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Email Address"}),s.jsx("input",{type:"email",required:!0,placeholder:"name@crispychick.com",value:e,onChange:b=>t(b.target.value),className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Password"}),s.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:n,onChange:b=>i(b.target.value),className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber"})]}),s.jsxs("button",{type:"submit",disabled:a,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg hover:shadow-orange-500/10 transition flex items-center justify-center space-x-2 text-sm",children:[s.jsx("div",{className:`w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin ${a?"block":"hidden"}`}),s.jsx("span",{className:a?"hidden":"inline-block",children:"UNLOCK DASHBOARD"}),s.jsx("i",{"data-lucide":"unlock",className:`w-4 h-4 stroke-[3] ${a?"hidden":"inline-block"}`})]})]})]})]})},nh=()=>{const{isOpenOrdering:r,menuSettings:e,updateMenuSettings:t,theme:n,toggleTheme:i}=d.useContext(Ie),{signOut:a}=d.useContext(pr),[o,c]=d.useState([]),[l,u]=d.useState([]),[b,p]=d.useState({}),[y,M]=d.useState([]),C=d.useRef([]);d.useEffect(()=>{const h=$.collection("riders").onSnapshot(I=>{const m=[];I.forEach(S=>{const P=S.data();P.verified===!0&&P.name&&m.push({id:S.id,name:P.name,phone:P.phone})}),M(m)},I=>console.warn("Riders fetch error:",I));return()=>h()},[]),d.useEffect(()=>{const h=Bn(I=>{C.current.length===0&&(C.current=I),c(I)});return()=>{typeof h=="function"&&h()}},[]),d.useEffect(()=>{o.length>0&&C.current.length>0&&o.forEach(h=>{const I=C.current.find(P=>P.id===h.id),m=["successfully_delivered","delivered","completed"].includes(h.status),S=I?["successfully_delivered","delivered","completed"].includes(I.status):!1;if(m&&I&&!S){const P=Date.now()+Math.random(),w={id:P,orderId:h.id,customerName:h.customerName,totalAmount:h.totalAmount};u(k=>[...k,w]),zn(),setTimeout(()=>{u(k=>k.filter(E=>E.id!==P))},5e3)}}),C.current=o},[o]);const F=o.some(h=>h.status==="pending");d.useEffect(()=>{if(window.location.hash!=="#/shop-counter"){Ts(!1);return}Ts(F)},[F]);const A=async h=>{await Et(h,"preparing")},q=async h=>{await Et(h,"rejected")},T=async h=>{await Et(h,"prepared")},le=async h=>{const I=b[h]||(y[0]?y[0].name:"");await $.collection("orders").doc(h).update({status:"prepared",assignedRider:I,dispatchedAt:Date.now()})},U=(h,I)=>{p(m=>({...m,[h]:I}))},ne=o.filter(h=>["pending","preparing","prepared","out_for_delivery"].includes(h.status)),J=o.filter(h=>["successfully_delivered","delivered","completed","rejected"].includes(h.status)),ce=h=>{if(!h)return"unknown date";const I=new Date(h),m=new Date,S=String(I.getDate()).padStart(2,"0"),w=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][I.getMonth()],k=I.getFullYear(),_=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][I.getDay()],O=`${S}-${w}-${k} ${_}`;return I.toDateString()===m.toDateString()?`todays : ${O}`:O},we=J.reduce((h,I)=>{const m=ce(I.createdAt);return h[m]||(h[m]=[]),h[m].push(I),h},{}),ge=h=>{t({...e,gstRate:Math.max(0,Number(h))})},Z=h=>{t({...e,deliveryFee:Math.max(0,Number(h))})},Ne=(h,I)=>{const m={...e.items},S=m[h]?m[h].available!==!1:!0;m[h]={price:Math.max(0,Number(I)),available:S},t({...e,items:m})},he=h=>{const I={...e.items},m=I[h]?I[h].price:void 0,S=I[h]?I[h].available!==!1:!0;I[h]={price:m,available:!S},t({...e,items:I})};d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[o,e,n]);const se=[];return Object.keys(Cr).forEach(h=>{Cr[h].forEach(I=>{const m=e.items[I.name];se.push({name:I.name,category:h,defaultPrice:I.price,currentPrice:m&&m.price!==void 0?m.price:I.price,isAvailable:m&&m.available!==void 0?m.available:!0})})}),s.jsxs("div",{className:`min-h-screen p-6 md:p-10 relative space-y-8 transition-colors duration-300 ${n==="light"?"bg-slate-50 text-slate-800":"bg-cafe-black text-white"}`,children:[s.jsxs("div",{className:`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b ${n==="light"?"border-slate-200":"border-neutral-800"}`,children:[s.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 min-w-0",children:[s.jsx("img",{src:"./logo.png",className:"h-10 w-auto object-contain flex-shrink-0",alt:"logo"}),s.jsx("h1",{className:`font-sans font-black text-base sm:text-lg md:text-xl tracking-tight flex items-center whitespace-nowrap transition-colors duration-300 ${n==="light"?"text-slate-900":"text-white"}`,children:"Crispy Chick KGF"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("button",{onClick:i,className:`p-2.5 rounded-xl border transition-all duration-300 ${n==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white":"bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm"}`,children:[s.jsx("i",{"data-lucide":"sun",className:n==="dark"?"w-4 h-4 block":"hidden"}),s.jsx("i",{"data-lucide":"moon",className:n==="light"?"w-4 h-4 block":"hidden"})]}),s.jsxs("button",{onClick:a,className:"bg-neutral-805 hover:bg-neutral-700 text-xs font-bold px-4 py-2.5 rounded-lg border border-neutral-700 transition flex items-center gap-2 text-neutral-300",children:[s.jsx("i",{"data-lucide":"log-out",className:"w-4 h-4 text-red-400"}),s.jsx("span",{children:"Sign Out"})]}),s.jsxs("div",{className:`p-3 rounded-xl border flex items-center space-x-3 shadow-inner ${n==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsx("span",{className:"text-xs text-neutral-450 font-semibold tracking-wide",children:"Ordering Window"}),s.jsx("button",{onClick:()=>Mu({onlineOrderingWindow:!r}),className:`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${r?"bg-emerald-600":"bg-red-800"}`,children:s.jsx("span",{className:`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${r?"translate-x-5":"translate-x-0"}`})}),s.jsx("span",{className:`text-xs font-bold ${r?"text-emerald-400":"text-red-400"}`,children:r?"ONLINE":"OFFLINE"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[s.jsxs("div",{className:`rounded-2xl border shadow-xl overflow-hidden ${n==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:`px-6 py-4 border-b flex justify-between items-center ${n==="light"?"bg-slate-100/50 border-slate-200":"bg-neutral-900/40 border-neutral-800"}`,children:[s.jsx("h3",{className:"font-serif font-bold text-lg",children:"Live Orders Processing Queue"}),s.jsx("span",{className:"text-[10px] text-neutral-450 font-bold uppercase tracking-wider",children:"Reactive Feed"})]}),s.jsxs("div",{className:ne.length===0?"p-16 text-center text-neutral-500 space-y-3 block":"hidden",children:[s.jsx("span",{className:"text-4xl",children:"📭"}),s.jsx("p",{className:"text-sm font-medium",children:"No active order files loaded currently in the database."})]}),s.jsx("div",{className:ne.length>0?"overflow-x-auto block":"hidden",children:s.jsxs("table",{className:"w-full text-left border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:`border-b text-[10px] text-neutral-455 font-bold uppercase tracking-wider ${n==="light"?"bg-slate-100/30":"bg-neutral-900/20"}`,children:[s.jsx("th",{className:"w-2/5 px-3 py-2",children:"Order Details"}),s.jsx("th",{className:"w-1/6 px-3 py-2",children:"Billing Summary"}),s.jsx("th",{className:"w-1/6 px-3 py-2",children:"Delivery Node"}),s.jsx("th",{className:"w-auto px-3 py-2 text-center",children:"Status"}),s.jsx("th",{className:"w-auto px-3 py-2 text-right",children:"Actions"})]})}),s.jsx("tbody",{className:`divide-y ${n==="light"?"divide-slate-200":"divide-neutral-900/60"}`,children:ne.map(h=>{const I=h.placementTime||new Date(h.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return s.jsxs("tr",{className:`hover:bg-neutral-900/5 transition-colors ${h.status==="pending"?"bg-cafe-amber/5 animate-pulse-slow":""}`,children:[s.jsxs("td",{className:"px-6 py-4 space-y-1",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsxs("span",{className:`font-bold text-sm ${n==="light"?"text-slate-900":"text-white"}`,children:["#",h.displayId||h.id.slice(-4).toUpperCase()]}),s.jsx("span",{className:"text-[10px] text-neutral-550 font-medium",children:I})]}),s.jsx("div",{className:"mt-2 space-y-1",children:h.items.map((m,S)=>s.jsxs("div",{className:`text-lg font-bold tracking-wide block ${n==="light"?"text-slate-900":"text-white"}`,children:[s.jsxs("span",{className:"text-cafe-amber mr-1",children:[S+1,"."]}),m.quantity,"x ",m.name]},S))})]}),s.jsxs("td",{className:"px-6 py-4",children:[s.jsxs("span",{className:`text-sm font-bold ${n==="light"?"text-slate-900":"text-white"}`,children:["₹",h.totalAmount]}),s.jsx("span",{className:"block text-[10px] text-neutral-505 font-bold uppercase",children:"COD / UPI"})]}),s.jsxs("td",{className:"px-6 py-4 space-y-1",children:[s.jsxs("div",{className:`text-xs font-semibold ${n==="light"?"text-slate-800":"text-slate-300"}`,children:[h.customerName," (",h.customerPhone,")"]}),s.jsx("div",{className:"text-[11px] text-neutral-450 italic max-w-xs truncate",children:h.landmarks})]}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${h.status==="pending"?"bg-amber-500/10 text-amber-500 border border-amber-500/20":h.status==="preparing"?"bg-blue-500/10 text-blue-400 border border-blue-500/20":h.status==="prepared"?"bg-teal-500/10 text-teal-400 border border-teal-500/20":h.status==="out_for_delivery"?"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20":["successfully_delivered","delivered","completed"].includes(h.status)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-red-500/10 text-red-400 border border-red-500/20"}`,children:h.status.replace(/_/g," ")})}),s.jsxs("td",{className:"px-6 py-4 text-right space-x-2 whitespace-nowrap",children:[s.jsxs("span",{className:h.status==="pending"?"inline-flex gap-2":"hidden",children:[s.jsx("button",{onClick:()=>q(h.id),className:"bg-red-500/10 hover:bg-red-500 hover:text-white text-red-455 text-xs px-3 py-1.5 rounded-lg border border-red-500/20 transition",children:"Reject"}),s.jsx("button",{onClick:()=>A(h.id),className:"bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-400 text-xs px-3 py-1.5 rounded-lg border border-emerald-500/20 transition font-bold",children:"Accept"})]}),s.jsx("button",{onClick:()=>T(h.id),className:`bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-400 text-xs px-3.5 py-1.5 rounded-lg border border-indigo-500/20 transition font-bold ${h.status==="preparing"?"inline-block":"hidden"}`,children:"Mark Prepared"}),s.jsxs("span",{className:h.status==="prepared"?"inline-flex items-center gap-2":"hidden",children:[s.jsxs("select",{value:b[h.id]||(y[0]?y[0].name:""),onChange:m=>U(h.id,m.target.value),className:`border rounded-lg text-xs px-2 py-1 focus:outline-none focus:border-cafe-amber font-bold ${n==="light"?"bg-white border-slate-200 text-slate-800":"bg-neutral-850 border-neutral-750 text-white"}`,children:[y.length===0&&s.jsx("option",{value:"",children:"No riders registered"}),y.map(m=>s.jsx("option",{value:m.name,children:m.name},m.id))]}),s.jsx("button",{onClick:()=>le(h.id),className:"bg-teal-500/10 hover:bg-teal-500 hover:text-white text-teal-400 text-[11px] px-2 py-1 rounded-lg border border-teal-500/20 transition font-bold",children:"Assign & Dispatch"})]}),h.status==="pending"&&h.cancellationRequested===!0&&s.jsx("button",{onClick:async()=>{window.confirm("Cancel this order per customer request?")&&await $.collection("orders").doc(h.id).update({status:"cancelled"})},className:"text-xs px-2 py-1 bg-red-100 text-red-700 border border-red-400 hover:bg-red-600 hover:text-white rounded-lg transition font-bold inline-block ml-1",children:"✕ Cancel (Customer)"}),s.jsx("span",{className:h.status==="out_for_delivery"?"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800":"hidden",children:h.status==="out_for_delivery"?`Out with Rider: ${h.pickedUpBy||h.assignedRider||"Rider"}`:""}),s.jsx("span",{className:`text-xs text-emerald-555 font-bold font-sans ${["successfully_delivered","delivered","completed"].includes(h.status)?"inline":"hidden"}`,children:"Delivered ✅"}),s.jsx("span",{className:`text-xs text-red-555 font-bold font-sans ${h.status==="rejected"?"inline":"hidden"}`,children:"Cancelled ❌"})]})]},h.displayId||h.id.slice(0,4))})})]})})]}),s.jsxs("div",{className:`rounded-2xl border shadow-xl overflow-hidden ${n==="light"?"bg-white border-slate-200":"bg-cafe-card border-neutral-800"}`,children:[s.jsxs("div",{className:`px-6 py-4 border-b flex justify-between items-center ${n==="light"?"bg-slate-100/50 border-slate-200":"bg-neutral-900/40 border-neutral-800"}`,children:[s.jsx("h3",{className:"font-serif font-bold text-lg",children:"Archived Transaction History Log"}),s.jsx("span",{className:"text-[10px] text-neutral-450 font-bold uppercase tracking-wider",children:"Historical records"})]}),s.jsx("div",{className:J.length===0?"p-8 text-center text-neutral-500 block":"hidden",children:s.jsx("p",{className:"text-xs font-semibold",children:"No historical orders in archive."})}),s.jsx("div",{className:J.length>0?"overflow-x-auto block max-h-[300px] no-scrollbar":"hidden",children:s.jsxs("table",{className:"min-w-full table-fixed divide-y divide-gray-200 text-left",children:[s.jsxs("colgroup",{children:[s.jsx("col",{className:"w-1/6"}),s.jsx("col",{className:"w-2/5"}),s.jsx("col",{className:"w-2/5"}),s.jsx("col",{className:"w-24"})]}),s.jsx("thead",{children:s.jsxs("tr",{className:`border-b text-[10px] text-neutral-455 font-bold uppercase tracking-wider ${n==="light"?"bg-slate-100/30":"bg-neutral-900/20"}`,children:[s.jsx("th",{className:"px-3 py-3",children:"Time"}),s.jsx("th",{className:"px-3 py-3",children:"Order Details"}),s.jsx("th",{className:"px-3 py-3",children:"Billing Address"}),s.jsx("th",{className:"px-3 py-3 text-center",children:"Status"})]})}),s.jsx("tbody",{className:`divide-y ${n==="light"?"divide-slate-200":"divide-neutral-900/60"}`,children:Object.entries(we).map(([h,I])=>{const m=I.filter(_=>["successfully_delivered","delivered","completed"].includes(_.status)),S=I.filter(_=>["cancelled","rejected"].includes(_.status)),P=m.length,w=m.reduce((_,O)=>_+Number(O.totalAmount||0),0),k=S.length,E=S.reduce((_,O)=>_+Number(O.totalAmount||0),0);return s.jsxs(Ar.Fragment,{children:[s.jsx("tr",{className:"bg-transparent",children:s.jsx("td",{colSpan:"4",className:"p-2 border-0",children:s.jsxs("div",{className:"w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 my-4",children:[s.jsx("span",{className:"font-extrabold text-slate-800 dark:text-slate-100",children:h}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs("div",{className:"px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-400",children:["✅ Orders: ",P," | Collected: ₹",w]}),s.jsxs("div",{className:"px-3 py-1 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-lg text-xs font-bold text-rose-700 dark:text-rose-400",children:["❌ Rejected: ",k," | Lost: ₹",E]})]})]})})}),I.map(_=>{const O=_.createdAt?new Date(_.createdAt).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}):_.placementTime||"--:--";return s.jsxs("tr",{className:"hover:bg-neutral-900/5 transition-colors",children:[s.jsx("td",{className:"px-3 py-3 text-xs font-semibold font-sans",children:O}),s.jsxs("td",{className:"px-3 py-3 font-bold text-xs leading-relaxed whitespace-normal break-words",children:["#",_.displayId||_.id.slice(-4).toUpperCase(),s.jsx("div",{className:"text-[10px] font-normal text-neutral-455 mt-0.5 whitespace-normal leading-normal",children:_.items.map(ee=>`${ee.name} (x${ee.quantity})`).join(", ")}),s.jsxs("div",{className:`text-[10px] mt-0.5 ${["successfully_delivered","delivered","completed"].includes(_.status)?"text-green-600 font-bold":"text-red-600 font-bold"}`,children:["₹",_.totalAmount]})]}),s.jsxs("td",{className:"px-3 py-3 text-[11px] text-neutral-400 leading-normal whitespace-normal break-words",children:[s.jsxs("div",{className:"font-bold text-neutral-505",children:[_.customerName," (",_.customerPhone,")"]}),s.jsx("div",{className:"mt-0.5 italic text-neutral-455",children:_.landmarks||_.address||_.customerAddress})]}),s.jsx("td",{className:"px-3 py-3 text-center",children:s.jsx("span",{className:`inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wide ${["successfully_delivered","delivered","completed"].includes(_.status)?"bg-emerald-500/10 text-green-600 font-bold border border-emerald-500/20":"bg-red-500/10 text-red-600 font-bold border border-red-500/20"}`,children:["successfully_delivered","delivered","completed"].includes(_.status)?"Delivered":"Cancelled"})})]},_.displayId||_.id)})]},h)})})]})})]})]}),s.jsx("div",{className:"space-y-6",children:s.jsxs("div",{className:`rounded-2xl border shadow-xl p-6 space-y-6 ${n==="light"?"bg-white border-slate-205":"bg-cafe-card border-neutral-800"}`,children:[s.jsx("div",{className:"pb-3 border-b border-neutral-900/10",children:s.jsx("h3",{className:`font-serif font-bold text-base ${n==="light"?"text-slate-900":"text-white"}`,children:"⚙️ Live Menu Manager"})}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 items-center",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2",children:"GST Rate (%)"}),s.jsx("input",{type:"number",min:"0",value:e.gstRate,onChange:h=>ge(h.target.value),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber font-sans font-bold ${n==="light"?"bg-neutral-50 border-slate-200 text-slate-900":"bg-cafe-black border-neutral-800 text-white"}`})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2",children:"Fixed Delivery Fee (₹)"}),s.jsx("input",{type:"number",min:"0",value:e.deliveryFee,onChange:h=>Z(h.target.value),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber font-sans font-bold ${n==="light"?"bg-neutral-50 border-slate-200 text-slate-900":"bg-cafe-black border-neutral-800 text-white"}`})]})]}),s.jsx("hr",{className:n==="light"?"border-slate-200":"border-neutral-800"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("span",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider",children:"Spreadsheet Inventory Matrix"}),s.jsx("div",{className:`max-h-[280px] overflow-y-auto border rounded-xl no-scrollbar divide-y ${n==="light"?"bg-slate-50 border-slate-200 divide-slate-200":"bg-cafe-black/40 border-neutral-805 divide-neutral-900/60"}`,children:se.map(h=>s.jsxs("div",{className:"p-3 flex items-center justify-between text-xs gap-3",children:[s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("span",{className:`font-bold block truncate leading-normal ${n==="light"?"text-slate-900":"text-white"}`,children:h.name}),s.jsx("span",{className:"text-[9px] text-neutral-500 font-bold uppercase tracking-wider",children:h.category})]}),s.jsx("div",{className:"w-16",children:s.jsx("input",{type:"number",min:"0",value:h.currentPrice,onChange:I=>Ne(h.name,I.target.value),className:`w-full border rounded-lg p-1.5 text-center focus:outline-none focus:border-cafe-amber font-sans font-bold ${n==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-800 text-white"}`})}),s.jsx("button",{onClick:()=>he(h.name),className:`px-3 py-2 rounded-lg font-bold text-[9px] uppercase tracking-wider transition ${h.isAvailable?"bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20":"bg-red-650/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"}`,children:h.isAvailable?"Available":"Sold Out"})]},h.name))})]})]})}),s.jsx("div",{className:"fixed top-6 right-6 z-[100] space-y-3 w-80 pointer-events-none",children:l.map(h=>s.jsxs("div",{className:"pointer-events-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl shadow-2xl border border-emerald-500/30 flex items-start justify-between space-x-3 animate-bounce-slow",children:[s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("span",{className:"text-lg",children:"🎉"}),s.jsx("span",{className:"font-extrabold text-sm tracking-wide text-white",children:"Delivery Complete!"})]}),s.jsxs("p",{className:"text-[11px] text-emerald-100 font-medium",children:["Order ",s.jsxs("strong",{children:["#",h.orderId.slice(-6)]})," delivered to ",s.jsx("strong",{children:h.customerName}),"."]}),s.jsxs("p",{className:"text-[10px] text-emerald-250 font-bold",children:["Collected: ",s.jsxs("strong",{children:["₹",h.totalAmount]})]})]}),s.jsx("button",{onClick:()=>u(I=>I.filter(m=>m.id!==h.id)),className:"text-emerald-200 hover:text-white transition-colors",children:"✕"})]},h.id))})]})]})},sh=({activeRoute:r})=>{const{ownerUser:e,loadingAuth:t}=d.useContext(pr);return d.useEffect(()=>{r==="#/shop-counter"&&!t&&!e&&setTimeout(()=>{window.location.hash="#/login"},100)},[e,t,r]),t?s.jsx("div",{className:"min-h-screen bg-cafe-black flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-4 border-cafe-amber border-t-transparent rounded-full animate-spin"})}):r==="#/shop-counter"&&!e?s.jsxs("div",{className:"min-h-screen bg-cafe-black flex flex-col items-center justify-center space-y-4",children:[s.jsx("div",{className:"w-8 h-8 border-4 border-cafe-amber border-t-transparent rounded-full animate-spin"}),s.jsx("p",{className:"text-sm text-neutral-400 font-semibold",children:"Redirecting to login..."})]}):s.jsx(nh,{})},ih=()=>{var Ut;const{theme:r,toggleTheme:e}=d.useContext(Ie),{signOut:t}=d.useContext(pr),[n,i]=d.useState([]),[a,o]=d.useState({}),[c,l]=d.useState(()=>localStorage.getItem("cc_rider_id")||""),[u,b]=d.useState(!1),[p,y]=d.useState(null),[M,C]=d.useState(!1),[F,A]=d.useState("pin"),[q,T]=d.useState(!1),[le,U]=d.useState(""),[ne,J]=d.useState(""),[ce,we]=d.useState(""),[ge,Z]=d.useState(""),[Ne,he]=d.useState(null),[se,h]=d.useState(""),[I,m]=d.useState(()=>localStorage.getItem("cc_rider_profile_name")||""),[S,P]=d.useState(()=>localStorage.getItem("cc_rider_profile_phone")||""),[w,k]=d.useState(()=>localStorage.getItem("cc_login_time")||""),[E,_]=d.useState(!1),[O,ee]=d.useState(""),[Me,Ue]=d.useState(""),[ke,nt]=d.useState(""),[mr,pe]=d.useState(""),[Y,Se]=d.useState(!1),[st,vt]=d.useState(!1),[Te,it]=d.useState(null);d.useEffect(()=>{if(c&&!w){const f=new Date().toLocaleTimeString();localStorage.setItem("cc_login_time",f),k(f)}},[c,w]);const Fe=I,Mt=d.useRef(new Set),at=d.useRef(new Set),ye=d.useRef(null);d.useEffect(()=>{const f=()=>{try{de.play().then(()=>{de.pause()}).catch(x=>console.warn("Autoplay unlock failed:",x))}catch{}b(!0),window.removeEventListener("click",f)};return u||window.addEventListener("click",f),()=>window.removeEventListener("click",f)},[u]);const[ot,Ee]=d.useState("active"),fr=f=>{if(!f)return"unknown date";const x=new Date(f),v=new Date,L=String(x.getDate()).padStart(2,"0"),je=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][x.getMonth()],br=x.getFullYear(),Kr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][x.getDay()],W=`${L}-${je}-${br} ${Kr}`;return x.toDateString()===v.toDateString()?`todays : ${W}`:W};d.useEffect(()=>{const f=$.collection("orders").where("assignedRider","==",Fe).onSnapshot(x=>{const v=x.docs.map(L=>({id:L.id,...L.data()}));v.sort((L,be)=>(be.createdAt||0)-(L.createdAt||0)),i(v)},x=>console.error("Rider orders query error:",x));return()=>{f()}},[Fe]),d.useEffect(()=>{if(window.location.hash!=="#/delivery-dashboard"||!u)return;const f=n.filter(v=>v.assignedRider===Fe&&v.status==="prepared");f.some(v=>!Mt.current.has(v.id))?(f.forEach(v=>Mt.current.add(v.id)),de.play().catch(v=>console.warn("Rider alarm play blocked:",v))):f.length===0&&(de.pause(),de.currentTime=0)},[n,u,Fe]),d.useEffect(()=>()=>{ye.current&&clearTimeout(ye.current)},[]);const $e=async(f,x)=>{f.preventDefault();const v=String(a[x.id]||"").trim(),L=String(x.displayId||"").trim();if(v===L){de.pause(),de.currentTime=0,await Et(x.id,"delivered",{deliveredAt:Date.now()});const be=(x.customerPhone||"").split(" / ")[0].trim();be&&$.collection("users").doc(be).update({phoneStatus:"verified",trustedUser:!0,verified:!0}).catch(je=>console.log("Trust upgrade failed (user may not exist yet):",je))}else window.alert("Incorrect PIN. Ask the customer for their 4-digit Delivery PIN.")},Ye=(f,x)=>{o(v=>({...v,[f]:x}))},Xe=f=>{if(at.current.has(f))return;at.current.add(f);const x=Date.now();y({id:x,orderId:f}),ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{y(null)},4500)},wt=async f=>{c&&(at.current.has(f)||(at.current.add(f),de.pause(),de.currentTime=0,await Et(f,"out_for_delivery",{riderName:I,riderPhone:S,pickedUpBy:I,dispatchedAt:Date.now()}),Xe(f)))};d.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[n,a,r,p,M]);const Ve=n.filter(f=>f.assignedRider===Fe&&["preparing","prepared","out_for_delivery"].includes(f.status)),V=n.filter(f=>f.assignedRider===Fe&&["successfully_delivered","delivered","completed","rejected","cancelled"].includes(f.status)),Gn=V.filter(f=>{if(f.status!=="delivered")return!1;const x=f.createdAt,v=x&&typeof x.toDate=="function"?x.toDate():new Date(x||0),L=new Date;return v.getDate()===L.getDate()&&v.getMonth()===L.getMonth()&&v.getFullYear()===L.getFullYear()}).length,Br=V.reduce((f,x)=>{const v=fr(x.deliveredAt||x.createdAt);return f[v]||(f[v]=[]),f[v].push(x),f},{}),zr=(f,x,v)=>{try{de.play().then(()=>de.pause()).catch(()=>{})}catch{}b(!0);const L=new Date().toLocaleTimeString();localStorage.setItem("cc_rider_id",f),localStorage.setItem("cc_rider_profile_name",x),localStorage.setItem("cc_rider_profile_phone",v),localStorage.setItem("cc_login_time",L),m(x),P(v),k(L),l(f)},Gr=async f=>{f.preventDefault();const x=f.target.riderIdInput.value.trim();if(!x||x.length!==6){U("Enter a valid 6-digit ID.");return}T(!0),U("");try{const v=await $.collection("riders").doc(x).get();if(v.exists&&v.data().verified===!0){const L=v.data();zr(x,L.name,L.phone)}else J(x),A("phone")}catch(v){U("Connection error. Try again."),console.error(v)}finally{T(!1)}},gr=f=>{f.preventDefault();const x=f.target.riderPhoneInput.value.trim(),v=f.target.confirmRiderPhone.value.trim();if(!(be=>/^[6-9]\d{9}$/.test(be))(x)){U("Invalid number. Must be 10 digits starting with 6–9.");return}if(x!==v){U("Phone numbers do not match. Please re-enter both fields.");return}T(!0),U(""),setTimeout(()=>{const be=Math.floor(1e5+Math.random()*9e5).toString();window._riderMockOtp=be,T(!1),we(x);try{new Audio("https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3").play().catch(()=>{})}catch{}A("otp")},2500)},yt=async f=>{if(f.preventDefault(),!se||se.trim()!==window._riderMockOtp){U("Incorrect code. Please try again.");return}T(!0),U(""),setTimeout(()=>{T(!1),A("name")},600)},lt=async f=>{f.preventDefault();const x=f.target.riderNameInput.value.trim();if(!x){U("Enter your name.");return}T(!0),U("");try{await $.collection("riders").doc(ne).set({name:x,phone:ce,verified:!0,registeredAt:Date.now()}),zr(ne,x,ce)}catch(v){U("Failed to save profile: "+(v.message||"Try again.")),console.error(v)}finally{T(!1)}};return c?s.jsxs("div",{className:`min-h-screen p-6 max-w-md mx-auto shadow-2xl border-x transition-colors duration-300 font-sans ${r==="light"?"bg-slate-50 border-slate-200 text-slate-800":"bg-cafe-black border-neutral-900/60 text-white"}`,children:[s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:`flex items-center gap-3 justify-between w-full px-4 py-3 sticky top-0 z-50 border-b -mx-6 mb-2 ${r==="light"?"bg-white border-slate-200 shadow-sm":"bg-cafe-black border-neutral-800 shadow-md"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0 overflow-hidden",children:[s.jsx("img",{src:"./logo.png",className:"h-9 w-auto object-contain flex-shrink-0",alt:"logo"}),s.jsx("h1",{className:`font-sans font-black text-sm sm:text-base tracking-tight flex items-center truncate transition-colors duration-300 ${r==="light"?"text-slate-900":"text-white"}`,children:"Crispy Chick KGF"})]}),s.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 pl-2",children:[s.jsxs("button",{onClick:e,className:`p-2 rounded-xl border transition-all duration-300 ${r==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber":"bg-white border-slate-200 text-cafe-crispy shadow-sm"}`,children:[s.jsx("i",{"data-lucide":"sun",className:r==="dark"?"w-4 h-4 block":"hidden"}),s.jsx("i",{"data-lucide":"moon",className:r==="light"?"w-4 h-4 block":"hidden"})]}),s.jsxs("button",{onClick:()=>C(!0),className:`text-xs font-bold px-3 py-2 rounded-xl border flex items-center space-x-1.5 transition-all ${r==="dark"?"bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white":"bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm"}`,title:"View Profile",children:[s.jsx("i",{"data-lucide":"user-circle",className:"w-3.5 h-3.5"}),s.jsxs("span",{children:["👤 Profile (",I,")"]})]})]})]}),s.jsxs("div",{className:`flex items-center justify-between px-4 py-3 rounded-2xl border shadow-sm ${r==="light"?"bg-gradient-to-r from-green-50 to-emerald-100 border-green-200":"bg-gradient-to-r from-green-900/30 to-emerald-800/30 border-green-800"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-xl",children:"🏆"}),s.jsxs("div",{children:[s.jsx("p",{className:`text-[10px] font-bold uppercase tracking-wider ${r==="light"?"text-green-700":"text-green-400"}`,children:"Today's Deliveries"}),s.jsx("p",{className:`text-[10px] ${r==="light"?"text-green-600":"text-green-500"}`,children:"Confirmed handshakes this session"})]})]}),s.jsx("span",{className:`text-3xl font-black tabular-nums ${r==="light"?"text-green-600":"text-green-400"}`,children:Gn})]}),s.jsxs("div",{className:`flex rounded-xl p-1 border ${r==="light"?"bg-slate-100 border-slate-200":"bg-neutral-900/50 border-neutral-800"}`,children:[s.jsxs("button",{onClick:()=>Ee("active"),className:`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 ${ot==="active"?"bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-md":"text-neutral-400 hover:text-white"}`,children:["🛵 Active (",Ve.length,")"]}),s.jsxs("button",{onClick:()=>Ee("history"),className:`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 ${ot==="history"?"bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-md":"text-neutral-400 hover:text-white"}`,children:["📜 History (",V.length,")"]})]}),ot==="active"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:Ve.length===0?"p-16 text-center text-neutral-500 space-y-3 block":"hidden",children:[s.jsx("span",{className:"text-5xl animate-pulse",children:"🥚"}),s.jsx("p",{className:"text-sm font-medium",children:"No active order allocations assigned."})]}),s.jsx("div",{className:Ve.length>0?"space-y-6 block":"hidden",children:Ve.map(f=>{const x=f.status!=="preparing",v=["successfully_delivered","delivered","completed"].includes(f.status);return s.jsxs("div",{className:`relative rounded-3xl p-5 border overflow-hidden transition-all duration-550 ${v?"border-emerald-500/30 bg-emerald-950/5":x?"border-cafe-amber/30 shadow-[0_0_20px_rgba(217,119,6,0.1)]":"border-neutral-805/80"} ${r==="light"?"bg-white text-slate-855":"bg-cafe-card text-white"}`,children:[s.jsxs("div",{className:!x&&!v?"absolute inset-0 bg-neutral-950/95 z-20 flex flex-col items-center justify-center p-4 text-center block":"hidden",children:[s.jsx("div",{className:"w-20 h-28 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-[50%_50%_50%_50%/_60%_60%_40%_40%] shadow-[0_0_25px_rgba(245,158,11,0.5)] border border-amber-300 animate-pulse flex items-center justify-center",children:s.jsx("span",{className:"text-3xl text-cafe-black font-bold",children:"🐣"})}),s.jsxs("div",{className:"mt-4 space-y-1",children:[s.jsxs("h4",{className:"font-bold text-white text-sm",children:["Order #",f.displayId||f.id.slice(-4).toUpperCase()," is Incubating"]}),s.jsx("p",{className:"text-[10px] text-neutral-455 max-w-[200px] leading-normal",children:"Shop counter is preparing this order. Egg cracks open once dispatched."})]})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:`flex justify-between items-center pb-2.5 border-b ${r==="light"?"border-slate-100":"border-neutral-900"}`,children:[s.jsxs("span",{className:`font-bold text-sm ${r==="light"?"text-slate-800":"text-neutral-300"}`,children:["Job #",f.displayId||f.id.slice(-4).toUpperCase()]}),s.jsxs("div",{className:"flex flex-col items-end space-y-0.5",children:[s.jsx("span",{className:`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${v?"bg-emerald-500/10 text-emerald-400":"bg-indigo-500/10 text-indigo-400"}`,children:f.status.replace(/_/g," ")}),s.jsxs("span",{className:"text-[9px] font-semibold text-cafe-amber tracking-wide",children:["Ordered at: ",f.placementTime||(f.createdAt?new Date(f.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--")]})]})]}),s.jsxs("div",{className:"space-y-2 text-xs",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"user",className:"w-4 h-4 text-neutral-550"}),s.jsx("span",{className:`font-bold ${r==="light"?"text-slate-900":"text-white"}`,children:f.customerName})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"phone",className:"w-4 h-4 text-neutral-550"}),s.jsx("a",{href:`tel:${f.customerPhone}`,className:"text-cafe-amber hover:underline font-semibold font-sans",children:f.customerPhone})]}),s.jsxs("div",{className:"flex items-start space-x-2",children:[s.jsx("i",{"data-lucide":"map-pin",className:"w-4 h-4 text-neutral-550 mt-0.5"}),s.jsx("span",{className:`${r==="light"?"text-slate-600":"text-neutral-300"} leading-normal`,children:f.landmarks})]})]}),s.jsxs("div",{className:f.status==="out_for_delivery"?"w-full my-3 p-3 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500/40 rounded-xl text-center block":"hidden",children:[s.jsx("span",{className:"block text-xs font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider",children:"COLLECT CASH / UPI PAYMENT"}),s.jsxs("span",{className:"text-3xl font-black text-emerald-600 dark:text-emerald-400",children:["₹",f.totalAmount]})]}),s.jsx("div",{className:f.status==="out_for_delivery"?"block":"hidden",children:s.jsxs("a",{href:Wu(f),target:"_blank",rel:"noopener noreferrer",className:`w-full py-3 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition border shadow-md block text-center text-white ${r==="light"?"bg-neutral-900 hover:bg-neutral-800 border-neutral-700":"bg-neutral-800 hover:bg-neutral-700 border-neutral-700"}`,children:[s.jsx("i",{"data-lucide":"navigation",className:"w-4 h-4 text-cafe-amber"}),s.jsx("span",{children:f.gpsLat!=null&&f.gpsLng!=null?"LAUNCH GPS PINPOINT NAVIGATION":"LAUNCH GOOGLE MAPS NAVIGATION"})]})}),s.jsx("div",{className:f.status==="prepared"?"pt-2 block":"hidden",children:s.jsx("button",{onClick:()=>wt(f.id),className:"w-full py-3 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold text-sm rounded-xl shadow-lg transition-all hover:brightness-110 active:scale-98",children:"Mark as Picked Up & Start Delivery"})}),s.jsxs("div",{className:f.status==="out_for_delivery"?"block":"hidden",children:[s.jsx("button",{onClick:()=>it(f),className:"w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 mb-2 shadow-sm",children:"📲 Show Payment QR"}),s.jsx("form",{onSubmit:L=>$e(L,f),className:"space-y-3 pt-2",children:s.jsxs("div",{className:`border rounded-xl p-3 space-y-2 ${r==="light"?"bg-slate-100/60 border-slate-205":"bg-neutral-900 border-neutral-800"}`,children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-455 uppercase tracking-widest text-center",children:"Ask customer for their 4-digit Delivery PIN"}),s.jsxs("div",{className:"text-center text-[10px] text-neutral-450 font-medium pb-1",children:["Order: ",s.jsxs("span",{className:"text-cafe-amber font-extrabold",children:["#",f.displayId||f.id.slice(-4).toUpperCase()]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("input",{type:"text",required:!0,maxLength:"4",placeholder:"Enter 4-digit PIN",value:a[f.id]||"",onChange:L=>Ye(f.id,L.target.value),className:`flex-1 border rounded-lg p-2 text-center text-sm focus:outline-none tracking-widest font-black ${r==="light"?"bg-white border-slate-205 text-slate-905":"bg-cafe-black border-neutral-808 text-white"}`}),s.jsx("button",{type:"submit",className:"bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold px-4 text-xs rounded-lg transition-all",children:"Confirm"})]})]})})]}),s.jsxs("div",{className:v?"bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 text-center space-y-1 block":"hidden",children:[s.jsx("span",{className:"text-emerald-400 font-extrabold text-xs block",children:"✅ Handshake Verification Complete"}),s.jsx("span",{className:"text-[10px] text-neutral-455 font-medium",children:"Order successfully completed and verified."})]})]})]},f.displayId||f.id.slice(0,4))})}),Te&&s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:s.jsxs("div",{className:`w-full max-w-sm rounded-3xl border p-6 space-y-3 shadow-2xl relative ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-card border-neutral-800 text-white"}`,children:[s.jsx("button",{onClick:()=>it(null),className:`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${r==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-600":"bg-neutral-800 hover:bg-neutral-700 text-neutral-350"}`,children:s.jsx("i",{"data-lucide":"x",className:"w-4 h-4"})}),s.jsxs("div",{className:"text-center space-y-1 pt-1",children:[s.jsx("div",{className:"w-12 h-12 bg-indigo-500/15 text-indigo-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-indigo-500/20",children:s.jsx("i",{"data-lucide":"qr-code",className:"w-6 h-6"})}),s.jsx("h3",{className:"font-serif font-bold text-base",children:"Collect Payment via UPI"}),s.jsxs("p",{className:"text-sm font-extrabold text-emerald-600 dark:text-emerald-400",children:["Scan & Pay ₹",Te.totalAmount]})]}),s.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9035733573@upi%26pn=Crispy%20Chick%20KGF%26am=${Te.totalAmount}`,alt:"UPI Payment QR",className:"mx-auto rounded-xl border p-2 bg-white shadow-inner my-3",style:{width:"240px",height:"240px"}}),s.jsx("p",{className:`text-center text-[11px] font-medium ${r==="light"?"text-slate-500":"text-neutral-450"}`,children:"Ask customer to scan with Google Pay, PhonePe, or Paytm."}),s.jsx("button",{onClick:async()=>{const f=String(a[Te.id]||"").trim(),x=String(Te.displayId||"").trim();if(!f||f!==x){window.alert("Enter the correct 4-digit Delivery PIN from the customer before completing."),it(null);return}de.pause(),de.currentTime=0,await Et(Te.id,"delivered",{deliveredAt:Date.now()});const v=(Te.customerPhone||"").split(" / ")[0].trim();v&&$.collection("users").doc(v).update({phoneStatus:"verified",trustedUser:!0,verified:!0}).catch(L=>console.log("Trust upgrade failed:",L)),it(null),window.alert("✅ Payment received & order delivered successfully!")},className:"w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2",children:"✅ Payment Received & Complete Order"})]})})]}),ot==="history"&&s.jsx("div",{className:"space-y-6",children:V.length===0?s.jsxs("div",{className:`p-16 text-center rounded-3xl border ${r==="light"?"bg-white border-slate-200 text-slate-500":"bg-cafe-card border-neutral-800 text-neutral-500"}`,children:[s.jsx("span",{className:"text-5xl block mb-2",children:"📜"}),s.jsx("p",{className:"text-sm font-semibold",children:"No completed deliveries found in the last 7 days."})]}):s.jsx("div",{className:`overflow-x-auto rounded-2xl border ${r==="light"?"bg-white border-slate-200 text-slate-800":"bg-cafe-card border-neutral-800 text-white"}`,children:s.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[s.jsx("thead",{children:s.jsxs("tr",{className:`border-b text-[10px] font-bold uppercase tracking-wider ${r==="light"?"bg-slate-100 text-slate-600":"bg-neutral-900 text-neutral-400"}`,children:[s.jsx("th",{className:"px-3 py-3",children:"Order Details"}),s.jsx("th",{className:"px-3 py-3",children:"Billing Address"}),s.jsx("th",{className:"px-3 py-3",children:"Status"})]})}),s.jsx("tbody",{className:`divide-y ${r==="light"?"divide-slate-200":"divide-neutral-900/60"}`,children:Object.entries(Br).map(([f,x])=>s.jsxs(Ar.Fragment,{children:[s.jsx("tr",{className:"bg-gray-100/50 text-left",children:s.jsx("td",{colSpan:"3",className:"py-2 px-3 font-bold text-sm text-gray-700",children:f})}),x.map(v=>s.jsxs("tr",{className:"hover:bg-neutral-900/5 transition-colors border-b border-neutral-800/10",children:[s.jsxs("td",{className:"px-3 py-2 leading-relaxed",children:[s.jsxs("div",{className:`font-bold ${r==="light"?"text-slate-900":"text-white"}`,children:[v.displayId," ",typeof v.items=="string"?v.items:(v.items||[]).map(L=>`${L.quantity}x ${L.name}`).join(", ")]}),s.jsxs("div",{className:"text-neutral-450 text-[10px] mt-0.5",children:["Delivered At: ",v.deliveredAt?v.deliveredAt.toDate?v.deliveredAt.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(v.deliveredAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):v.placementTime||(v.createdAt?new Date(v.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--")," | ₹",v.total??v.totalAmount]}),s.jsx("small",{className:"text-gray-500 block mt-0.5",children:v.customerName})]}),s.jsx("td",{className:"max-w-[150px] truncate px-3 py-2",title:v.address||v.customerAddress||v.landmarks,children:v.landmarks||v.address||v.customerAddress}),s.jsx("td",{className:"whitespace-nowrap px-3 py-2",children:s.jsx("span",{className:`inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${["successfully_delivered","delivered","completed"].includes(v.status)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-red-500/10 text-red-400 border border-red-500/20"}`,children:["successfully_delivered","delivered","completed"].includes(v.status)?"Delivered":v.status.replace(/_/g," ")})})]},v.id))]},f))})]})})})]}),s.jsx("div",{className:`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-xs pointer-events-none ${p?"block":"hidden"}`,children:s.jsxs("div",{className:"pointer-events-auto bg-gradient-to-r from-indigo-600 to-cafe-amber text-white p-4 rounded-xl shadow-2xl border border-indigo-400/30 flex items-center space-x-3 animate-bounce-slow",children:[s.jsx("span",{className:"text-2xl",children:"🛵"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("span",{className:"font-extrabold text-sm tracking-wide block",children:"Ride Safe!"}),s.jsxs("p",{className:"text-[11px] text-indigo-100 font-medium",children:["Job #",(Ut=p==null?void 0:p.orderId)==null?void 0:Ut.slice(-6)," accepted. Drive carefully!"]})]})]})}),s.jsx("div",{className:M?"block fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs":"hidden",children:s.jsxs("div",{className:`w-full max-w-sm rounded-3xl border p-6 space-y-4 shadow-2xl relative ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-card border-neutral-800 text-white"}`,children:[s.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-neutral-800/10",children:[s.jsxs("h3",{className:"font-serif font-bold text-base flex items-center space-x-2",children:[s.jsx("i",{"data-lucide":"user",className:"w-5 h-5 text-cafe-amber"}),s.jsx("span",{children:"👤 Rider Profile"})]}),s.jsx("button",{onClick:()=>C(!1),className:"text-neutral-500 hover:text-neutral-300 transition",children:s.jsx("i",{"data-lucide":"x",className:"w-5 h-5"})})]}),s.jsxs("form",{onSubmit:f=>{f.preventDefault();const x=f.target.riderNameInput.value.trim();x&&($.collection("riders").doc(c).update({name:x}).catch(()=>{}),localStorage.setItem("cc_rider_profile_name",x),m(x),C(!1))},className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2",children:"Rider Name"}),s.jsx("input",{name:"riderNameInput",required:!0,type:"text",defaultValue:I,className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-slate-50 border-slate-200 text-slate-900":"bg-cafe-black border-neutral-808 text-white"}`})]}),s.jsxs("div",{className:`p-3 rounded-xl border text-xs flex justify-between items-center ${r==="light"?"bg-slate-50 border-slate-200 text-slate-600":"bg-neutral-900/60 border-neutral-800 text-neutral-400"}`,children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-bold text-[10px] uppercase tracking-widest text-cafe-amber mb-1",children:"Current Phone"}),s.jsx("p",{className:"font-mono font-bold text-sm",children:S||"Not set"})]}),!E&&s.jsx("button",{type:"button",onClick:()=>_(!0),className:`px-3 py-1.5 rounded-lg border text-[10px] font-extrabold transition-colors ${r==="light"?"bg-white border-slate-300 text-slate-700 hover:bg-slate-100":"bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700"}`,children:"✏️ Change"})]}),E&&s.jsxs("div",{className:`p-4 rounded-xl border space-y-4 shadow-inner ${r==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/40 border-neutral-800"}`,children:[s.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-cafe-amber border-b border-neutral-200 dark:border-neutral-800 pb-2",children:"Secure Phone Update"}),st?s.jsxs("div",{className:"space-y-4 animate-in fade-in slide-in-from-top-2 duration-300",children:[s.jsxs("div",{className:`p-3 rounded-xl border text-center ${r==="light"?"bg-amber-50 border-amber-200":"bg-cafe-amber/10 border-cafe-amber/30"}`,children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest text-cafe-amber",children:"Verification Code"}),s.jsxs("p",{className:`text-[11px] mt-0.5 ${r==="light"?"text-slate-500":"text-neutral-400"}`,children:["Enter code sent to ",O]})]}),s.jsx("div",{children:s.jsx("input",{type:"text",inputMode:"numeric",maxLength:"6",placeholder:"• • • • • •",value:ke,onChange:f=>nt(f.target.value.replace(/\D/g,"").slice(0,6)),className:`w-full border rounded-xl px-4 py-3 text-xl text-center tracking-[0.5em] font-black focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{type:"button",disabled:Y,onClick:()=>{if(ke!==mr){alert("Incorrect code. Please try again.");return}Se(!0),$.collection("riders").doc(c).update({phone:O}).then(()=>{localStorage.setItem("cc_rider_profile_phone",O),P(O),_(!1),ee(""),Ue(""),vt(!1),pe(""),nt(""),alert("✅ Phone Number Updated Successfully")}).catch(f=>{alert("Failed to update: "+f.message)}).finally(()=>Se(!1))},className:"flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-extrabold rounded-lg text-[11px] shadow-sm disabled:opacity-60 flex items-center justify-center",children:Y?s.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):"VERIFY & UPDATE"}),s.jsx("button",{type:"button",disabled:Y,onClick:()=>{vt(!1),pe(""),nt("")},className:`px-3 py-2.5 rounded-lg border font-extrabold text-[11px] disabled:opacity-60 ${r==="light"?"bg-white border-slate-300 text-slate-600 hover:bg-slate-100":"bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700"}`,children:"BACK"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-455 uppercase tracking-wider mb-2",children:"New Phone Number"}),s.jsx("input",{type:"tel",placeholder:"E.g., 9876543210",maxLength:"10",inputMode:"numeric",value:O,onChange:f=>ee(f.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-455 uppercase tracking-wider mb-2",children:"Confirm New Phone"}),s.jsx("input",{type:"tel",placeholder:"Re-enter new number",maxLength:"10",inputMode:"numeric",value:Me,onChange:f=>Ue(f.target.value.replace(/\D/g,"").slice(0,10)),className:`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${r==="light"?"bg-white border-slate-200 text-slate-900":"bg-cafe-black border-neutral-700 text-white"}`})]})]}),s.jsxs("div",{className:"flex gap-2 pt-1",children:[s.jsx("button",{type:"button",disabled:Y,onClick:()=>{if(!(x=>/^[6-9]\d{9}$/.test(x))(O)){alert("Invalid phone. Must be 10 digits starting with 6–9.");return}if(O!==Me){alert("Phone numbers do not match.");return}if(/^(\d)\1+$/.test(O)){alert("Invalid phone format.");return}Se(!0),setTimeout(()=>{try{new Audio("https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3").play().catch(()=>{})}catch{}const x=Math.floor(1e5+Math.random()*9e5).toString();pe(x),Se(!1),vt(!0),alert("🔔 Rider Security Code: "+x)},2500)},className:"flex-1 py-2.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-lg text-[11px] disabled:opacity-60 flex items-center justify-center",children:Y?s.jsx("div",{className:"w-4 h-4 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):"SEND SECURITY CODE"}),s.jsx("button",{type:"button",disabled:Y,onClick:()=>{_(!1),ee(""),Ue(""),vt(!1),pe(""),nt("")},className:`px-3 py-2.5 rounded-lg border font-extrabold text-[11px] disabled:opacity-60 ${r==="light"?"bg-white border-slate-300 text-slate-600 hover:bg-slate-100":"bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700"}`,children:"CANCEL"})]})]})]}),s.jsxs("div",{className:`p-4 rounded-xl border space-y-1 text-xs ${r==="light"?"bg-slate-50 border-slate-200":"bg-neutral-900/60 border-neutral-800"}`,children:[s.jsx("span",{className:"text-[10px] text-neutral-500 font-bold uppercase tracking-wider block",children:"Session Details"}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{className:"text-neutral-450 font-medium",children:"Login Time:"}),s.jsx("span",{className:"font-bold text-cafe-amber",children:w||"Not recorded"})]})]}),s.jsxs("div",{className:"flex gap-3 pt-2",children:[s.jsx("button",{type:"submit",className:"flex-1 py-3 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg text-xs",children:"SAVE CHANGES"}),s.jsx("button",{type:"button",onClick:()=>{localStorage.removeItem("cc_rider_id"),localStorage.removeItem("cc_rider_profile_name"),localStorage.removeItem("cc_rider_profile_phone"),localStorage.removeItem("cc_login_time"),l(""),C(!1)},className:"px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-lg text-xs",children:"LOGOUT"})]})]})]})})]}):s.jsxs("div",{className:"min-h-screen bg-cafe-black flex items-center justify-center p-6 relative font-sans text-white",children:[s.jsx("div",{className:"fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950 pointer-events-none z-0"}),s.jsxs("div",{className:"w-full max-w-sm bg-cafe-card rounded-3xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative z-10 text-center",children:[s.jsx("img",{src:"./logo.png",className:"h-16 mx-auto object-contain mb-2",alt:"logo"}),s.jsx("div",{className:"flex justify-center gap-2",children:["pin","phone","otp","name"].map((f,x)=>s.jsx("div",{className:`h-1.5 rounded-full transition-all duration-300 ${["pin","phone","otp","name"].indexOf(F)>=x?"bg-cafe-amber w-6":"bg-neutral-700 w-3"}`},f))}),le&&s.jsx("p",{className:"text-[11px] text-red-400 font-bold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2",children:le}),F==="pin"&&s.jsxs("form",{onSubmit:Gr,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"Rider Gate"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Enter your 6-Digit Rider ID"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"6-Digit Rider ID"}),s.jsx("input",{name:"riderIdInput",required:!0,type:"text",pattern:"\\d{6}",maxLength:"6",placeholder:"E.g., 123456",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center tracking-widest font-black"})]}),s.jsx("button",{type:"submit",disabled:q,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-sm disabled:opacity-60",children:q?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"VERIFY ID"})})]}),F==="phone"&&s.jsxs("form",{onSubmit:gr,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"First-Time Setup"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Enter your mobile number twice to confirm."})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:["Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{name:"riderPhoneInput",required:!0,type:"tel",placeholder:"E.g., 9876543210",maxLength:"10",pattern:"[6-9][0-9]{9}",inputMode:"numeric",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold tracking-widest"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:["Confirm Phone Number ",s.jsx("span",{className:"text-red-500",children:"*"})]}),s.jsx("input",{name:"confirmRiderPhone",required:!0,type:"tel",placeholder:"Re-enter number",maxLength:"10",pattern:"[6-9][0-9]{9}",inputMode:"numeric",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold tracking-widest"})]}),s.jsx("button",{type:"submit",disabled:q,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60",children:q?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"SEND SECURE CODE ›"})}),s.jsx("button",{type:"button",onClick:()=>{A("pin"),U("")},className:"w-full text-[11px] text-neutral-500 hover:text-neutral-300 transition",children:"← Back"})]}),F==="otp"&&s.jsxs("form",{onSubmit:yt,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"Enter Security Code"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Use the code generated below to continue."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-neutral-900 border-neutral-700",children:[s.jsx("span",{className:"text-2xl font-black tracking-[0.35em] text-cafe-amber select-all font-mono flex-1 text-center",id:"rider-otp-display",children:window._riderMockOtp||"——————"}),s.jsx("button",{type:"button",id:"rider-otp-copy-btn",onClick:()=>{const f=window._riderMockOtp||"";try{navigator.clipboard.writeText(f).then(()=>{const x=document.getElementById("rider-otp-copy-btn");x&&(x.textContent="Copied ✓",setTimeout(()=>{x.textContent="Copy"},1500))}).catch(()=>{})}catch{}},className:"shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 transition-all",children:"Copy"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Enter Code to Verify"}),s.jsx("input",{required:!0,type:"text",pattern:"\\d{6}",maxLength:"6",placeholder:"••••••",value:se,onChange:f=>h(f.target.value),className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center tracking-[0.5em] font-black"})]}),s.jsx("button",{type:"submit",disabled:q,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60",children:q?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"VERIFY CODE →"})}),s.jsx("button",{type:"button",onClick:()=>{A("phone"),U(""),h("")},className:"w-full text-[11px] text-neutral-500 hover:text-neutral-300 transition",children:"← Back"})]}),F==="name"&&s.jsxs("form",{onSubmit:lt,className:"space-y-4 text-left",children:[s.jsxs("div",{className:"space-y-1 text-center",children:[s.jsx("h2",{className:"text-xl font-bold font-serif",children:"Almost There!"}),s.jsx("p",{className:"text-xs text-neutral-400 font-medium",children:"Phone verified ✅ — Enter your display name."})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2",children:"Your Name"}),s.jsx("input",{name:"riderNameInput",required:!0,type:"text",placeholder:"E.g., Salman",className:"w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold"})]}),s.jsx("button",{type:"submit",disabled:q,className:"w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60",children:q?s.jsx("div",{className:"w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"}):s.jsx("span",{children:"START DELIVERING 🛵"})})]})]})]})},ah=()=>s.jsx(ih,{}),oh=()=>{const[r,e]=d.useState(window.location.hash||"#/"),[t,n]=d.useState(null);d.useEffect(()=>{const a=()=>{e(window.location.hash||"#/")};return window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[]);const i=(a,o)=>{n({id:a,otp:o})};return s.jsx("div",{className:"min-h-screen flex flex-col bg-cafe-black font-sans",children:s.jsxs("div",{className:"flex-1 flex flex-col",children:[s.jsx("div",{className:r==="#/"||r===""?"block":"hidden",children:s.jsx(th,{onCheckoutSuccess:i})}),s.jsx("div",{className:r==="#/login"?"block":"hidden",children:s.jsx(rh,{})}),s.jsx("div",{className:r==="#/shop-counter"?"block":"hidden",children:s.jsx(sh,{activeRoute:r})}),s.jsx("div",{className:r==="#/delivery-dashboard"?"block":"hidden",children:s.jsx(ah,{})})]})})};function lh(){return s.jsx(Ru,{children:s.jsx(zu,{children:s.jsx(Gu,{children:s.jsx(oh,{})})})})}dn.createRoot(document.getElementById("root")).render(s.jsx(Ar.StrictMode,{children:s.jsx(lh,{})}));

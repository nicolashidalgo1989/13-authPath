import{B as A,C as h,E as S,F as C,G as y,J as M,P as x,S as N,T as b,U as j,V as w,W as n,Y as p,Z as o,_ as u,k as s,m as r,o as d,p as c,v as l,w as g,y as v}from"./chunk-IF7UL27Y.js";var B=(e,t)=>{let m=r(u),a=r(n);return m.authStatus()===o.authenticated?!0:(a.navigateByUrl("/auth/login"),!1)};var I=(e,t)=>{let m=r(u),a=r(n);return m.authStatus()===o.authenticated?(a.navigateByUrl("/dashboard"),!1):!0};var T=[{path:"auth",canActivate:[I],loadChildren:()=>import("./chunk-ATE3QQ73.js").then(e=>e.AuthModule)},{path:"dashboard",canActivate:[B],loadChildren:()=>import("./chunk-AAVZF74C.js").then(e=>e.DashboardModule)},{path:"**",redirectTo:"auth"}],R=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c({type:t}),t.\u0275inj=s({imports:[p.forRoot(T,{useHash:!0}),p]});let e=t;return e})();function U(e,t){e&1&&(S(0,"h1"),M(1,"Loading"),C())}function D(e,t){e&1&&y(0,"router-outlet")}var _=(()=>{let t=class t{constructor(){this.authService=r(u),this.router=r(n),this.finishAuthCheck=l(()=>this.authService.authStatus()!==o.checking),this.authStatusChangedEffect=v(()=>{switch(this.authService.authStatus()){case o.checking:return;case o.authenticated:this.router.navigateByUrl("/dashboard");return;case o.notAuthenticated:this.router.navigateByUrl("/auth/login");return}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],decls:2,vars:2,consts:[[4,"ngIf"]],template:function(i,f){i&1&&A(0,U,2,0,"h1",0)(1,D,1,0,"router-outlet",0),i&2&&(h("ngIf",!f.finishAuthCheck()),g(),h("ngIf",f.finishAuthCheck()))},dependencies:[x,w]});let e=t;return e})();var G=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c({type:t,bootstrap:[_]}),t.\u0275inj=s({imports:[j,R,N]});let e=t;return e})();b().bootstrapModule(G).catch(e=>console.error(e));
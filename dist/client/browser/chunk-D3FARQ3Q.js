import{Ea as r,Fa as o,Ga as y,Gb as w,Ib as I,Ja as x,La as l,Ma as d,N as f,S as m,T as h,Ua as s,Ub as j,Va as u,W as v,X as _,Y as b,Za as g,_a as S,ab as E,bb as F,ca as P,ec as H,ia as a,ja as C,lb as M,mb as O,qb as T,ta as k,tb as N,va as p}from"./chunk-JAQO5MGZ.js";var V=()=>["/dashboard"],R=()=>["/types"],$=()=>["/expenses"],G=(()=>{class t{constructor(e){this.store=e,this.username=null}ngOnInit(){let e=localStorage.getItem("auth");if(e){let i=JSON.parse(e);this.username=i.name}}signOut(){this.store.dispatch(H())}static{this.\u0275fac=function(i){return new(i||t)(C(j))}}static{this.\u0275cmp=m({type:t,selectors:[["app-header"]],decls:17,vars:9,consts:[[1,"navbar","navbar-expand-lg","bg-dark","navbar-dark"],[1,"container-fluid","container-lg"],[1,"navbar-brand","fw-bold"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavAltMarkup",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavAltMarkup",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-link",3,"routerLink"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(i,n){i&1&&(r(0,"nav",0)(1,"div",1)(2,"div",2),s(3),E(4,"uppercase"),o(),r(5,"button",3),y(6,"span",4),o(),r(7,"div",5)(8,"div",6)(9,"a",7),s(10,"Home"),o(),r(11,"a",7),s(12,"Types"),o(),r(13,"a",7),s(14,"Expenses"),o()(),r(15,"button",8),l("click",function(){return n.signOut()}),s(16,"logout"),o()()()()),i&2&&(a(3),u(F(4,4,n.username)),a(6),p("routerLink",g(6,V)),a(2),p("routerLink",g(7,R)),a(2),p("routerLink",g(8,$)))},dependencies:[w,T]})}}return t})();var B=t=>({"bg-primary text-light":t});function J(t,D){if(t&1){let e=x();r(0,"li",2)(1,"button",5),l("click",function(){let n=_(e).$implicit,c=d();return b(c.goToPage(n))}),s(2),o()()}if(t&2){let e=D.$implicit,i=d();a(),p("ngClass",S(2,B,e===+i.currentPage)),a(),u(e)}}var Z=(()=>{class t{constructor(){this.currentPage=1,this.limit=5,this.total=0,this.pageChange=new P,this.pages=[]}ngOnChanges(e){(e.currentPage||e.limit||e.total)&&this.calculatePages()}calculatePages(){let e=Math.ceil(this.total/this.limit);this.pages=Array.from({length:e},(i,n)=>n+1)}previousPage(){this.currentPage>1&&(this.currentPage--,this.pageChange.emit(this.currentPage))}nextPage(){this.currentPage<this.pages.length&&(this.currentPage++,this.pageChange.emit(this.currentPage))}goToPage(e){e>=1&&e<=this.total&&(this.currentPage=e),this.pageChange.emit(this.currentPage)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-pagination"]],inputs:{currentPage:"currentPage",limit:"limit",total:"total"},outputs:{pageChange:"pageChange"},features:[v],decls:9,vars:3,consts:[[1,"pagination","justify-content-end","me-5"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click","disabled"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-link",3,"click","ngClass"]],template:function(i,n){i&1&&(r(0,"div",0)(1,"ul",1)(2,"li",2)(3,"button",3),l("click",function(){return n.previousPage()}),s(4,"Previous"),o()(),k(5,J,3,4,"li",4),r(6,"li",2)(7,"button",3),l("click",function(){return n.nextPage()}),s(8,"Next"),o()()()()),i&2&&(a(3),p("disabled",n.currentPage===1),a(2),p("ngForOf",n.pages),a(2),p("disabled",n.currentPage===n.pages.length))},dependencies:[M,O]})}}return t})();var se=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=f({imports:[N,I]})}}return t})();export{G as a,Z as b,se as c};

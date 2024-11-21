import{a as S,b as R}from"./chunk-D3Y73VOH.js";import{m as _,p as L}from"./chunk-KH3LKA6G.js";import{a as B}from"./chunk-VH5XKJT3.js";import{a as k,c as z}from"./chunk-D3FARQ3Q.js";import{Db as w,Ea as s,Fa as o,Fb as T,Ga as p,Ib as D,Ja as O,La as c,Ma as E,N as x,S as h,T as y,Ua as r,Ub as d,Va as M,Wa as F,X as H,Y as I,ha as v,ia as a,ja as l,mb as Y,nb as j,ta as C,tb as P,va as m}from"./chunk-JAQO5MGZ.js";function q(i,g){if(i&1&&(s(0,"option",8),r(1),o()),i&2){let e=g.$implicit;m("value",e),a(),M(e)}}function J(i,g){if(i&1){let e=O();s(0,"button",10),c("click",function(){H(e);let n=E().$implicit,u=E();return I(u.expense(n._id))}),r(1,"view"),o()}}function K(i,g){if(i&1&&(s(0,"tr")(1,"td"),r(2),o(),s(3,"td"),r(4),o(),s(5,"td"),C(6,J,2,0,"button",9),o()()),i&2){let e=g.$implicit;a(2),M(e.month),a(2),F(" ",e.totalAmount,""),a(2),m("ngIf",e._id)}}var $=(()=>{class i{constructor(e,t){this.store=e,this.router=t,this.years=["2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011"],this.searchExpense="",this.currentPage=1,this.limit=5,this.total=0,this.pages=[],this.sortByOrder="desc",this.monthId="",this.selectedYear=new Date().getFullYear().toString(),this.monthlyExpenses=[]}ngOnInit(){this.getMonthlyExpenses()}handleChange(e){let t=e.target;this.selectedYear=t.value.toLowerCase(),this.getMonthlyExpenses()}getMonthlyExpenses(){this.store.dispatch(_({searchYear:this.selectedYear})),this.store.select(e=>e.expense).subscribe(e=>{e&&e.monthlyExpneses&&(this.monthlyExpenses=e.monthlyExpneses)})}monthlyStatistics(){this.router.navigate([`dashboard/statistics/${this.selectedYear}`])}expense(e){this.router.navigate([`dashboard/daily/${e}`])}static{this.\u0275fac=function(t){return new(t||i)(l(d),l(T))}}static{this.\u0275cmp=h({type:i,selectors:[["app-home"]],decls:19,vars:2,consts:[[1,"container"],[1,"d-flex","justify-content-end","mt-5"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"form-select","w-200px","mx-2",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"table-responsive","my-2"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[3,"value"],["class","btn btn-outline-primary btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-outline-primary","btn-sm",3,"click"]],template:function(t,n){t&1&&(p(0,"app-header"),s(1,"div",0)(2,"div",1)(3,"button",2),c("click",function(){return n.monthlyStatistics()}),r(4,"Statistics"),o(),s(5,"select",3),c("change",function(f){return n.handleChange(f)}),C(6,q,2,2,"option",4),o()(),s(7,"div",5)(8,"table",6)(9,"thead")(10,"tr")(11,"th"),r(12,"Month"),o(),s(13,"th"),r(14,"Total Expense"),o(),s(15,"th"),r(16,"Monthly Statistics"),o()()(),s(17,"tbody"),C(18,K,7,3,"tr",7),o()()()()),t&2&&(a(6),m("ngForOf",n.years),a(12),m("ngForOf",n.monthlyExpenses))},dependencies:[Y,j,k],styles:[".w-200px[_ngcontent-%COMP%]{width:200px}.pie-chart-icon[_ngcontent-%COMP%]{width:32px;height:32px;display:inline-block}"]})}}return i})();var W=(()=>{class i{constructor(e,t){this.store=e,this.activeRoute=t,this.selectedYear="",this.view=[300,300],this.expensesData=[],this.showLegend=!0,this.showLabels=!0,this.explodeSlices=!1,this.doughnut=!1,this.colorScheme="natural"}ngOnInit(){this.selectedYear=this.activeRoute.snapshot.params?.id,this.getMonthlyExpenses(),this.updateChartSize()}updateChartSize(){let e=document.getElementById("chartCard");if(e){let t=e.offsetWidth,n=Math.min(t,window.innerHeight*.6);this.view=[t*.9,n*.9]}}getMonthlyExpenses(){this.store.dispatch(_({searchYear:this.selectedYear})),this.store.select(e=>e.expense).subscribe(e=>{e&&e.monthlyExpneses&&(this.expensesData=e.monthlyExpneses.map(t=>({name:t.month,value:t.totalAmount})))})}static{this.\u0275fac=function(t){return new(t||i)(l(d),l(w))}}static{this.\u0275cmp=h({type:i,selectors:[["app-statistics"]],hostBindings:function(t,n){t&1&&c("resize",function(f){return n.ngOnInit(f)},!1,v)},decls:5,vars:7,consts:[[1,"container-lg","d-flex","justify-content-center","align-items-center","min-vh-100"],["id","chartCard",1,"card","shadow","p-3","w-100"],[1,"text-center"],[3,"view","scheme","results","legend","explodeSlices","labels","doughnut"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"div",1)(2,"h3",2),r(3,"Track Expenses"),o(),p(4,"ngx-charts-pie-chart",3),o()()),t&2&&(a(4),m("view",n.view)("scheme",n.colorScheme)("results",n.expensesData)("legend",n.showLegend)("explodeSlices",n.explodeSlices)("labels",n.showLabels)("doughnut",n.doughnut))},dependencies:[S],styles:[".h-full[_ngcontent-%COMP%]{height:100vh}@media (min-width: 700px){#chartCard[_ngcontent-%COMP%]{width:80%!important}}@media (min-width: 992px){#chartCard[_ngcontent-%COMP%]{width:70%!important}}@media (min-width: 1200px){#chartCard[_ngcontent-%COMP%]{width:60%!important}}"]})}}return i})();var V=(()=>{class i{constructor(e,t){this.store=e,this.acitveRoute=t,this.selectedYear=new Date().getFullYear().toString(),this.selectedMonth="",this.view=[300,300],this.expensesData=[],this.showLegend=!0,this.showLabels=!0,this.explodeSlices=!1,this.doughnut=!1,this.colorScheme="natural"}ngOnInit(){this.selectedMonth=this.acitveRoute.snapshot.params?.id,this.store.select(e=>e.expense).subscribe(e=>{e&&e.dailyExpneses&&(this.day=e.dailyExpneses.find(t=>t._id===+this.selectedMonth),console.log(this.day))}),this.getDailyExpenses(),this.updateChartSize()}updateChartSize(){let e=document.getElementById("chartCard");if(e){let t=e.offsetWidth,n=Math.min(t,window.innerHeight*.6);this.view=[t*.9,n*.9]}}getDailyExpenses(){this.store.dispatch(L({searchYear:this.selectedYear,searchMonth:this.selectedMonth})),this.store.select(e=>e.expense).subscribe(e=>{e&&e.dailyExpneses&&(this.expensesData=e.dailyExpneses.map(t=>({name:t.date,value:t.totalAmount})))})}static{this.\u0275fac=function(t){return new(t||i)(l(d),l(w))}}static{this.\u0275cmp=h({type:i,selectors:[["app-daily"]],hostBindings:function(t,n){t&1&&c("resize",function(f){return n.ngOnInit(f)},!1,v)},decls:5,vars:7,consts:[[1,"container-lg","d-flex","justify-content-center","align-items-center","min-vh-100"],["id","chartCard",1,"card","shadow","p-3","w-100"],[1,"text-center"],[3,"view","scheme","results","legend","explodeSlices","labels","doughnut"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"div",1)(2,"h3",2),r(3,"Track Expenses"),o(),p(4,"ngx-charts-pie-chart",3),o()()),t&2&&(a(4),m("view",n.view)("scheme",n.colorScheme)("results",n.expensesData)("legend",n.showLegend)("explodeSlices",n.explodeSlices)("labels",n.showLabels)("doughnut",n.doughnut))},dependencies:[S],styles:[".h-full[_ngcontent-%COMP%]{height:100vh}@media (min-width: 700px){#chartCard[_ngcontent-%COMP%]{width:80%!important}}@media (min-width: 992px){#chartCard[_ngcontent-%COMP%]{width:70%!important}}@media (min-width: 1200px){#chartCard[_ngcontent-%COMP%]{width:60%!important}}"]})}}return i})();var U=[{path:"",canActivate:[B],children:[{path:"",component:$,title:"Home"},{path:"statistics/:id",component:W,title:"Statictics"},{path:"daily/:id",component:V,title:"Home"}]}],G=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=x({imports:[D.forChild(U),D,R]})}}return i})();var _e=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=x({imports:[P,G,z]})}}return i})();export{_e as DashboardModule};

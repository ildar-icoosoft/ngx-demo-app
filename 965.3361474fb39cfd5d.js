"use strict";(self.webpackChunkngx_demo_app=self.webpackChunkngx_demo_app||[]).push([[965],{1965:(M,h,l)=>{l.r(h),l.d(h,{AllPhotosModule:()=>J});var i=l(9808),c=l(8775),t=l(5e3),u=l(8490),g=l(445),f=l(9384),A=l(236);let m=(()=>{class o extends f.Gv{constructor(e){super(e),this.store=e}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(A.H))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var P=l(2834),v=l(655),d=l(911),a=l(3075),y=l(9468),b=l(4986);function F(o,s){if(1&o&&(t.TgZ(0,"option",3),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.title)}}let r=class{constructor(){this.albums=[],this.changeFilter=new t.vpe,this.group=new a.cw({q:new a.NI(""),albumId:new a.NI("0")})}ngOnInit(){this.group.valueChanges.pipe((0,y.p)(1e3,b.z,{trailing:!0}),(0,d.t)(this)).subscribe(s=>{const e=[];s.q&&e.push({field:"q",value:s.q}),"0"!==s.albumId&&e.push({field:"albumId",value:s.albumId}),this.changeFilter.emit(e)})}trackByAlbum(s,e){return e.id}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-all-photos-filter"]],inputs:{albums:"albums"},outputs:{changeFilter:"changeFilter"},decls:6,vars:4,consts:[[1,"d-flex",3,"formGroup"],["formControlName","q","placeholder","Search",1,"form-control","me-2"],["formControlName","albumId","aria-label","Album filter",1,"form-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"]],template:function(s,e){1&s&&(t.TgZ(0,"form",0),t._UZ(1,"input",1),t.TgZ(2,"select",2)(3,"option",3),t._uU(4,"Album"),t.qZA(),t.YNc(5,F,2,2,"option",4),t.qZA()()),2&s&&(t.Q6J("formGroup",e.group),t.xp6(3),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",e.albums)("ngForTrackBy",e.trackByAlbum))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.EJ,a.YN,a.Kr,i.sg],styles:[""],changeDetection:0}),r=(0,v.gn)([(0,d.c)()],r);let C=(()=>{class o{constructor(e,n){this.albumsQuery=e,this.photosService=n,this.albums$=this.albumsQuery.selectAll()}changeFilter(e){this.photosService.updateFilter(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m),t.Y36(u.B))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-all-photos-filter-container"]],decls:2,vars:3,consts:[[3,"albums","changeFilter"]],template:function(e,n){1&e&&(t.TgZ(0,"app-all-photos-filter",0),t.NdJ("changeFilter",function(I){return n.changeFilter(I)}),t.ALo(1,"async"),t.qZA()),2&e&&t.Q6J("albums",t.lcZ(1,1,n.albums$))},directives:[r],pipes:[i.Ov],styles:[""],changeDetection:0}),o})();var Z=l(9118);const Q=[{path:"",component:(()=>{class o{constructor(e,n,p){this.photosService=e,this.photosQuery=n,this.albumsQuery=p,this.breadcrumbs=[{link:"",text:"Dashboard"},{link:null,text:"Photos"}],this.photos$=this.photosQuery.selectAll(),this.albumsHashMap$=this.albumsQuery.selectAll({asObject:!0}),this.isLastPage$=this.photosQuery.isLastPage(),this.loadInProcess$=this.photosQuery.selectLoading()}ngOnInit(){this.photosService.getPhotos({page:{number:1,size:36}}),this.photosService.getAlbums({})}loadMore(){this.photosService.getNextPhotos()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.B),t.Y36(g.x),t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-all-photos-page"]],decls:10,vars:13,consts:[[1,"container","pt-3"],[3,"items"],[1,"d-block","mb-2"],[3,"photos","albums","isLastPage","loadInProcess","loadMore"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-breadcrumbs",1),t.TgZ(2,"h2"),t._uU(3,"Photos"),t.qZA(),t._UZ(4,"app-all-photos-filter-container",2),t.TgZ(5,"app-photo-list",3),t.NdJ("loadMore",function(){return n.loadMore()}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("items",n.breadcrumbs),t.xp6(4),t.Q6J("photos",t.lcZ(6,5,n.photos$))("albums",t.lcZ(7,7,n.albumsHashMap$))("isLastPage",t.lcZ(8,9,n.isLastPage$))("loadInProcess",t.lcZ(9,11,n.loadInProcess$)))},directives:[P.n,C,Z.Y],pipes:[i.Ov],styles:[""],changeDetection:0}),o})()}];let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Q)],c.Bz]}),o})();var T=l(4466);let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.ez,L,T.m]]}),o})()}}]);
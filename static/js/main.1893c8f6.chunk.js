(this["webpackJsonpsentry-mm"]=this["webpackJsonpsentry-mm"]||[]).push([[0],{198:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(45),l=n.n(a),o=(n(88),n(46)),s=n(8),r=(n(89),n(12)),j=(n(90),n(3)),d=function(){var e=Object(c.useState)("close-nav"),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"mySidenav",className:"sidenav ".concat(n),children:[Object(j.jsx)("div",{class:"closebtn",onClick:function(){i("close-nav")},children:"\xd7"}),Object(j.jsx)(o.b,{to:"/home",children:"Home"})]}),Object(j.jsx)("div",{style:{fontSize:"20px",cursor:"pointer",background:"#6f6f6f",color:"white",position:"fixed",zIndex:"1000",width:"100%"},onClick:function(){i("open-nav")},children:"\u2630 Myanmar Map Live, Right Click \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a \u1010\u1004\u103a\u101c\u102d\u102f\u101e\u1031\u102c\u1014\u1031\u101b\u102c\u1000\u102d\u102f\u1021\u1000\u103c\u102c\u1000\u103c\u102e\u1038\u1014\u103e\u102d\u1015\u103a\u1015\u103c\u102e\u1038 report \u1010\u1004\u103a\u1015\u102b"})]})},p=n(19),u=n(203),b=n(204),h=n(200);function x(e){var t=e.center,n=e.zoom;return Object(h.a)().setView(t,n),null}var g=n(201),O=n(202),m=n(10),f=n.n(m),v=n.p+"static/media/person.f487c13b.svg",y=n.p+"static/media/police.7ea03219.svg",w=n.p+"static/media/bearer.56672884.svg",k=new f.a.Icon({iconUrl:v,iconRetinaUrl:v,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new f.a.Point(25,30),className:"leaflet-div-personicon"}),C=new f.a.divIcon({iconUrl:y,iconRetinaUrl:y,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new f.a.Point(15,15),className:"leaflet-div-police circle"}),S=new f.a.Icon({iconUrl:w,iconRetinaUrl:w,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new f.a.Point(25,40),className:"leaflet-div-bearer"}),z=(n(96),function(e){var t=e.position,n=e.message;return Object(j.jsx)(g.a,{position:t,icon:k,children:Object(j.jsx)(O.a,{children:n})})}),A=function(e){var t=e.position,n=e.message;return Object(j.jsx)(g.a,{position:t,icon:C,children:Object(j.jsx)(O.a,{children:n})})},F=function(e){var t=e.position,n=e.message;return Object(j.jsx)(g.a,{position:t,icon:S,children:Object(j.jsx)(O.a,{children:n})})},I=function(e){var t=e.type,n=e.position,c=e.message;return Object(j.jsxs)(j.Fragment,{children:["pol"===t&&Object(j.jsx)(A,{position:[n.lat,n.lng],message:c}),"bearer"===t&&Object(j.jsx)(F,{position:[n.lat,n.lng],message:c})]})},N=n(82),U=n(61),M={apiKey:"AIzaSyBQwB1jInOkU5l5RBBK5P0Q4AahZkffuIE",authDomain:"mmap-live.firebaseapp.com",projectId:"mmap-live",storageBucket:"mmap-live.appspot.com",messagingSenderId:"608858895088",appId:"1:608858895088:web:3b406a50cad16268750835"};U.a.initializeApp(M);var B=U.a.database(),P=n(63),R=function(){var e=Object(h.a)();return Object(c.useEffect)((function(){var t=f.a.control({position:"bottomleft"});t.onAdd=function(){var e=f.a.DomUtil.create("div","info legend");e.style.background="rgb(56, 56, 56,0.7)",e.style.width="200px",e.style.padding="20px 10px",e.style.display="flex",e.style.flexDirection="column",e.style.borderRadius="20px",e.style.color="white",e.style.fontSize="15px",e.style.marginBottom="50px";var t=[];return t.push("<div style='display:flex;'><div class='circle' style='width:20px;height:20px;margin-left: 10px;\n          margin-top: 5px;'></div> <p style=\"margin:0;line-height: 10px;\n          \">\u101b\u1032/\u101c\u102f\u1036\u1011\u102d\u1019\u103a\u1038 </p></div>"),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(w,"' style='width:25px;height:25px;'/><p style=\"margin:0;line-height: 10px;    line-height: 16px;\n        margin-left: 6px;\n            \">\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038\u1019\u103b\u102c\u1038 </p></div>")),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(v,"' style='width:25px;height:25px;'/><p style=\"margin:0;line-height: 10px;    line-height: 16px;\n        margin-left: 6px;\n            \">\u101e\u1004\u103a \u101c\u1000\u103a\u101b\u103e\u102d \u1014\u1031\u101b\u102c</p></div>")),e.innerHTML=t.join("<br>"),e},t.addTo(e)}),[e]),null},T=(n(198),function(e){var t=e.visible,n=e.onOkClick,i=e.onCancelClick,a=Object(c.useState)("pol"),l=Object(r.a)(a,2),o=l[0],s=l[1],d=Object(c.useState)(""),p=Object(r.a)(d,2),u=p[0],b=p[1];return Object(j.jsx)("div",{id:"myModal",className:"modal ".concat(t?"visible":"hide"),children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("span",{className:"close",onClick:function(){return i()},children:"\xd7"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{children:"\u1010\u103d\u1031\u1037\u101b\u103e\u102d\u101e\u1031\u102c \u1021\u101b\u102c"}),Object(j.jsxs)("select",{onChange:function(e){s(e.target.value)},children:[Object(j.jsx)("option",{value:"pol",selected:!0,children:"\u101b\u1032 / \u101c\u102f\u1036\u1011\u102d\u1014\u103a\u1038"}),Object(j.jsx)("option",{value:"bearer",children:"\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038"})]})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{children:"\u1015\u103c\u1031\u102c\u101c\u102d\u102f\u101e\u1031\u102c\u1021\u101b\u102c"}),Object(j.jsx)("textarea",{cols:"20",rows:"10",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("button",{onClick:function(){n({objType:o,message:u})},children:"Report"})}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("button",{onClick:function(){return i()},children:"Cancel"})})]})})});function D(e){var t=e.onMapClick;return Object(h.b)({click:function(e){},contextmenu:function(e){t(e.latlng)}}),Object(j.jsx)(j.Fragment,{})}var L=n(64);var E=function(){var e=Object(c.useState)({lat:16.8409,lng:96.1735}),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),l=Object(r.a)(a,2),o=l[0],s=l[1],d=Object(c.useState)({lat:16.8409,lng:96.1735}),h=Object(r.a)(d,2),g=h[0],O=h[1],m=Object(c.useState)({lat:16.8409,lng:96.1735}),f=Object(r.a)(m,2),v=f[0],y=f[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){i({lat:e.coords.latitude,lng:e.coords.longitude}),y({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(T,{visible:o,onOkClick:function(e){B.ref("locations/"+Object(L.a)()).set({created_at:Date.now(),id:Object(L.a)(),message:e.message,position:{lat:g.lat,lng:g.lng},type:e.objType}),s(!1)},onCancelClick:function(){s(!1)}}),Object(j.jsxs)(P.b,Object(p.a)(Object(p.a)({firebase:N.a},M),{},{children:[Object(j.jsxs)("select",{onChange:function(e){i({lat:parseFloat(e.target.value.split("|")[0]),lng:parseFloat(e.target.value.split("|")[1])})},children:[Object(j.jsx)("option",{value:"16.8409|96.1735",selected:!0,children:"Yangon"}),Object(j.jsx)("option",{value:"21.9588|96.0891",children:"Mandalay"}),Object(j.jsx)("option",{value:"19.7633|96.0785",children:"Naypyi Daw"})]}),Object(j.jsxs)(u.a,{style:{height:"100vh"},center:[n.lat,n.lng],zoom:13,scrollWheelZoom:!1,children:[Object(j.jsx)(D,{onMapClick:function(e){O({lat:e.lat,lng:e.lng}),s(!0)}}),Object(j.jsx)(x,{center:[n.lat,n.lng],zoom:13}),Object(j.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(z,{position:[v.lat,v.lng],message:"This is your current location"}),Object(j.jsx)(P.a,{path:"locations",children:function(e){return Object(j.jsx)(j.Fragment,{children:!e.isLoading&&e.value&&Object.keys(e.value).map((function(t){return Object(j.jsx)(I,Object(p.a)({},e.value[t]),t)}))})}}),Object(j.jsx)(R,{})]})]}))]})};var H=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"".concat("","/"),children:Object(j.jsx)(E,{})}),Object(j.jsx)(s.a,{exact:!0,path:"".concat("","/home"),children:Object(j.jsx)(E,{})}),Object(j.jsx)(s.a,{path:"*",children:"404"})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),a(e),l(e)}))};l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),J()},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},96:function(e,t,n){}},[[199,1,2]]]);
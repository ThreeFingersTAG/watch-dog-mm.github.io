(this["webpackJsonpsentry-mm"]=this["webpackJsonpsentry-mm"]||[]).push([[0],{196:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),a=n(44),o=n.n(a),l=(n(86),n(45)),s=n(8),r=(n(87),n(18)),p=(n(88),n(4)),d=function(){var e=Object(i.useState)("close-nav"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"mySidenav",className:"sidenav ".concat(n),children:[Object(p.jsx)("div",{class:"closebtn",onClick:function(){c("close-nav")},children:"\xd7"}),Object(p.jsx)(l.b,{to:"/home",children:"Home"})]}),Object(p.jsx)("div",{style:{fontSize:"30px",cursor:"pointer",background:"#6f6f6f",color:"white",position:"fixed",zIndex:"1000",width:"100%"},onClick:function(){c("open-nav")},children:"\u2630 Myanmar Map Live"})]})},h=n(19),j=n(200),u=n(201),b=n(197);function g(e){var t=e.center,n=e.zoom;return Object(b.a)().setView(t,n),null}var x=n(198),m=n(199),f=n(10),O=n.n(f),v=n.p+"static/media/person.f487c13b.svg",y=n.p+"static/media/police.7ea03219.svg",w=n.p+"static/media/bearer.56672884.svg",S=new O.a.Icon({iconUrl:v,iconRetinaUrl:v,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new O.a.Point(25,30),className:"leaflet-div-personicon"}),z=new O.a.divIcon({iconUrl:y,iconRetinaUrl:y,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new O.a.Point(15,15),className:"leaflet-div-police circle"}),A=new O.a.Icon({iconUrl:w,iconRetinaUrl:w,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new O.a.Point(25,40),className:"leaflet-div-bearer"}),I=(n(94),function(e){var t=e.position,n=e.message;return Object(p.jsx)(x.a,{position:t,icon:S,children:Object(p.jsx)(m.a,{children:n})})}),k=function(e){var t=e.position,n=e.message;return Object(p.jsx)(x.a,{position:t,icon:z,children:Object(p.jsx)(m.a,{children:n})})},F=function(e){var t=e.position,n=e.message;return Object(p.jsx)(x.a,{position:t,icon:A,children:Object(p.jsx)(m.a,{children:n})})},U=function(e){var t=e.type,n=e.position,i=e.message;return Object(p.jsxs)(p.Fragment,{children:["pol"===t&&Object(p.jsx)(k,{position:[n.lat,n.lng],message:i}),"bearer"===t&&Object(p.jsx)(F,{position:[n.lat,n.lng],message:i})]})},B=n(80),C={apiKey:"AIzaSyBQwB1jInOkU5l5RBBK5P0Q4AahZkffuIE",authDomain:"mmap-live.firebaseapp.com",projectId:"mmap-live",storageBucket:"mmap-live.appspot.com",messagingSenderId:"608858895088",appId:"1:608858895088:web:3b406a50cad16268750835"},P=n(62),M=function(){var e=Object(b.a)();return Object(i.useEffect)((function(){var t=O.a.control({position:"bottomright"});t.onAdd=function(){var e=O.a.DomUtil.create("div","info legend");e.style.background="#383838",e.style.width="200px",e.style.padding="20px 10px",e.style.display="flex",e.style.flexDirection="column",e.style.borderRadius="20px",e.style.color="white",e.style.fontSize="15px";var t=[];return t.push("<div style='display:flex;'><div class='circle' style='width:20px;height:20px;margin-left: 10px;\n          margin-top: 5px;'></div> <p style=\"margin:0;line-height: 10px;\n          \">\u101b\u1032/\u101c\u102f\u1036\u1011\u102d\u1019\u103a\u1038 </p></div>"),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(w,"' style='width:25px;height:25px;'/><p style=\"margin:0;line-height: 10px;    line-height: 16px;\n        margin-left: 6px;\n            \">\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038\u1019\u103b\u102c\u1038 </p></div>")),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(v,"' style='width:25px;height:25px;'/><p style=\"margin:0;line-height: 10px;    line-height: 16px;\n        margin-left: 6px;\n            \">\u101e\u1004\u103a \u101c\u1000\u103a\u101b\u103e\u102d\u101b\u1031\u102c\u1000\u103a\u1014\u1031\u1010\u1032\u1037 \u1014\u1031\u101b\u102c</p></div>")),e.innerHTML=t.join("<br>"),e},t.addTo(e)}),[e]),null};var D=function(){var e=Object(i.useState)({lat:16.8409,lng:96.1735}),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({lat:16.8409,lng:96.1735}),o=Object(r.a)(a,2),l=o[0],s=o[1];return Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){c({lat:e.coords.latitude,lng:e.coords.longitude}),s({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(P.b,Object(h.a)(Object(h.a)({firebase:B.a},C),{},{children:[Object(p.jsxs)("select",{onChange:function(e){c({lat:parseFloat(e.target.value.split("|")[0]),lng:parseFloat(e.target.value.split("|")[1])})},children:[Object(p.jsx)("option",{value:"16.8409|96.1735",selected:!0,children:"Yangon"}),Object(p.jsx)("option",{value:"21.9588|96.0891",children:"Mandalay"}),Object(p.jsx)("option",{value:"19.7633|96.0785",children:"Naypyi Daw"})]}),Object(p.jsxs)(j.a,{style:{height:"100vh"},center:[n.lat,n.lng],zoom:13,scrollWheelZoom:!1,children:[Object(p.jsx)(g,{center:[n.lat,n.lng],zoom:13}),Object(p.jsx)(u.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(I,{position:[l.lat,l.lng],message:"This is your current location"}),Object(p.jsx)(P.a,{path:"locations",children:function(e){return Object(p.jsx)(p.Fragment,{children:!e.isLoading&&Array.isArray(e.value)&&e.value.map((function(e){return Object(p.jsx)(U,Object(h.a)({},e),e.id)}))})}}),Object(p.jsx)(M,{})]})]}))})};var L=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(d,{}),Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{exact:!0,path:"".concat("","/"),children:Object(p.jsx)(D,{})}),Object(p.jsx)(s.a,{exact:!0,path:"".concat("","/home"),children:Object(p.jsx)(D,{})}),Object(p.jsx)(s.a,{path:"*",children:"404"})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),N()},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},94:function(e,t,n){}},[[196,1,2]]]);
(this["webpackJsonpsentry-mm"]=this["webpackJsonpsentry-mm"]||[]).push([[0],{100:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),l=n(46),a=n.n(l),o=(n(92),n(48)),s=n(8),r=(n(93),n(12)),j=(n(94),n(3)),d=function(){var e=Object(i.useState)("close-nav"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"mySidenav",className:"sidenav ".concat(n),children:[Object(j.jsx)("div",{class:"closebtn",onClick:function(){c("close-nav")},children:"\xd7"}),Object(j.jsx)(o.b,{to:"/home",children:"Home"})]}),Object(j.jsx)("div",{style:{fontSize:"20px",cursor:"pointer",background:"#6f6f6f",color:"white",position:"fixed",zIndex:"1000",width:"100%"},onClick:function(){c("open-nav")},children:"\u2630 Myanmar Map Live"})]})},u=n(18),p=n(207),b=n(208),h=n(204);function x(e){var t=e.center,n=e.zoom;return Object(h.a)().setView(t,n),null}var O=n(66),g=n(65),f=n(9),m=n.n(f),v=n(205),y=n(206),k=n.p+"static/media/person.f487c13b.svg",w=n.p+"static/media/bearer.56672884.svg",S=new m.a.Icon({iconUrl:k,iconRetinaUrl:k,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new m.a.Point(25,30),className:"leaflet-div-personicon"}),C=new m.a.Icon({iconUrl:w,iconRetinaUrl:w,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new m.a.Point(25,40),className:"leaflet-div-bearer"}),z={"10-20":[15,15],"20-50":[20,20],"50-100":[25,25],"100-200":[30,30],"200-above":[35,35]},M=function(e){return z[e]},A=(n(100),function(e){var t=e.position,n=e.message;return Object(j.jsx)(v.a,{position:t,icon:S,children:Object(j.jsx)(y.a,{on:!0,children:n})})}),N=function(e){var t=e.id,n=e.position,i=e.message,c=e.unitSize,l=e.onMarkerClick,a=e.fbKey,o=new m.a.divIcon({iconUrl:null,iconRetinaUrl:null,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:Object(O.a)(m.a.Point,Object(g.a)(M(c))),className:"leaflet-div-police blue-circle"});return Object(j.jsx)(v.a,{position:n,icon:o,eventHandlers:{contextmenu:function(e){l(e,a,t)}},children:Object(j.jsx)(y.a,{children:"".concat(i,"\n \u1010\u1015\u103a\u1016\u103d\u1032\u1037 \u1021\u1004\u103a\u1021\u102c\u1038 ").concat(c," \u1001\u1014\u103a\u1037")})})},I=function(e){var t=e.id,n=e.position,i=e.message,c=e.onMarkerClick,l=e.fbKey;return Object(j.jsx)(v.a,{position:n,icon:C,eventHandlers:{contextmenu:function(e){c(e,l,t)}},children:i&&Object(j.jsx)(y.a,{children:i})})},U=function(e){var t=e.id,n=e.position,i=e.message,c=e.unitSize,l=e.onMarkerClick,a=e.fbKey,o=new m.a.divIcon({iconUrl:null,iconRetinaUrl:null,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:Object(O.a)(m.a.Point,Object(g.a)(M(c))),className:"leaflet-div-militry red-circle"});return Object(j.jsx)(v.a,{position:n,icon:o,eventHandlers:{contextmenu:function(e){l&&l(e,a,t)}},children:Object(j.jsx)(y.a,{children:"".concat(i,"\n \u1010\u1015\u103a\u1016\u103d\u1032\u1037 \u1021\u1004\u103a\u1021\u102c\u1038 ").concat(c," \u1001\u1014\u103a\u1037")})})},T=function(e){var t=e.id,n=e.type,i=e.position,c=e.message,l=e.unitSize,a=e.onMarkerClick,o=e.fbKey;return Object(j.jsxs)(j.Fragment,{children:["pol"===n&&Object(j.jsx)(N,{position:[i.lat,i.lng],message:c,unitSize:l,onMarkerClick:a,id:t,fbKey:o}),"bearer"===n&&Object(j.jsx)(I,{position:[i.lat,i.lng],message:c,onMarkerClick:a,id:t,fbKey:o}),"milt"===n&&Object(j.jsx)(U,{position:[i.lat,i.lng],message:c,unitSize:l,onMarkerClick:a,id:t,fbKey:o})]})},D=n(86),F=n(63),P={apiKey:"AIzaSyBQwB1jInOkU5l5RBBK5P0Q4AahZkffuIE",authDomain:"mmap-live.firebaseapp.com",projectId:"mmap-live",storageBucket:"mmap-live.appspot.com",messagingSenderId:"608858895088",appId:"1:608858895088:web:3b406a50cad16268750835"};F.a.initializeApp(P);var K=F.a.database(),R=n(67),B=function(){var e=Object(h.a)();return Object(i.useEffect)((function(){var t=m.a.control({position:"bottomleft"});t.onAdd=function(){var e=m.a.DomUtil.create("div","info legend");e.style.background="rgb(56, 56, 56,0.7)",e.style.width="200px",e.style.padding="20px 10px",e.style.display="flex",e.style.flexDirection="column",e.style.borderRadius="20px",e.style.color="white",e.style.fontSize="15px",e.style.marginBottom="50px";var t=[];return t.push("<div style='display:flex;'><div class='red-circle' style='width:20px;height:20px;margin-left: 10px;\n          margin-top: 5px;'></div> <p style=\"margin:0;line-height: 10px;\n          \">\u1005\u1005\u103a\u1010\u1015\u103a </p></div>"),t.push("<div style='display:flex;'><div class='blue-circle' style='width:20px;height:20px;margin-left: 10px;\n          margin-top: 5px;'></div> <p style=\"margin:0;line-height: 10px;\n          \">\u101b\u1032/\u101c\u102f\u1036\u1011\u102d\u1014\u103a\u1038 </p></div>"),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(w,"' style='width:25px;height:25px;'/><p style=\"margin:0;line-height: 10px;    line-height: 16px;\n        margin-left: 6px;\n            \">\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038\u1019\u103b\u102c\u1038 </p></div>")),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(k,"' style='width:25px;height:25px;'/><p style=\"margin:0;line-height: 10px;    line-height: 16px;\n        margin-left: 6px;\n            \">\u101e\u1004\u103a \u101c\u1000\u103a\u101b\u103e\u102d \u1014\u1031\u101b\u102c</p></div>")),e.innerHTML=t.join("<br>"),e},t.addTo(e)}),[e]),null},L=(n(202),function(e){var t=e.visible,n=e.onOkClick,c=e.onCancelClick,l=Object(i.useState)("pol"),a=Object(r.a)(l,2),o=a[0],s=a[1],d=Object(i.useState)("20-50"),u=Object(r.a)(d,2),p=u[0],b=u[1],h=Object(i.useState)(""),x=Object(r.a)(h,2),O=x[0],g=x[1];return Object(j.jsx)("div",{id:"myModal",className:"modal ".concat(t?"visible":"hide"),children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("span",{className:"close",onClick:function(){return c()},children:"\xd7"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{children:"\u1010\u103d\u1031\u1037\u101b\u103e\u102d\u101e\u1031\u102c \xa0\u1021\u101b\u102c"}),Object(j.jsxs)("select",{onChange:function(e){s(e.target.value)},children:[Object(j.jsx)("option",{value:"pol",children:"\u101b\u1032 / \u101c\u102f\u1036\u1011\u102d\u1014\u103a\u1038"}),Object(j.jsx)("option",{value:"milt",selected:!0,children:"\u1005\u1005\u103a\u1010\u1015\u103a"}),Object(j.jsx)("option",{value:"bearer",children:"\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038"})]})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{children:"\u1010\u1015\u103a\u1016\u103d\u1032\u1037\u101d\u1004\u103a \u1021\u1004\u103a\u1021\u102c\u1038"}),Object(j.jsxs)("select",{onChange:function(e){b(e.target.value)},children:[Object(j.jsx)("option",{value:"10-20",children:"\u1041\u1040 - \u1042\u1040\u1001\u1014\u103a\u1037 "}),Object(j.jsx)("option",{value:"20-50",selected:!0,children:"\u1042\u1040 - \u1045\u1040 \u1001\u1014\u103a\u1037"}),Object(j.jsx)("option",{value:"50-100",children:"\u1045\u1040 - \u1041\u1040\u1040\u1001\u1014\u103a\u1037"}),Object(j.jsx)("option",{value:"100-200",children:"\u1041\u1040\u1040 - \u1042\u1040\u1040\u1001\u1014\u103a\u1037"}),Object(j.jsx)("option",{value:"200-above",children:"\u1042\u1040\u1040 \u1014\u103e\u1004\u103a\u1037\u1021\u1011\u1000\u103a"})]})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{children:"\u1015\u103c\u1031\u102c\u101c\u102d\u102f\u101e\u1031\u102c\u1021\u101b\u102c"}),Object(j.jsx)("textarea",{cols:"20",rows:"10",onChange:function(e){return g(e.target.value)}})]}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("button",{onClick:function(){n({objType:o,message:O,unitSize:p})},children:"Report"})}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("button",{onClick:function(){return c()},children:"Cancel"})})]})})});function E(e){var t=e.onMapClick;return Object(h.b)({click:function(e){},contextmenu:function(e){t(e.latlng)}}),Object(j.jsx)(j.Fragment,{})}var H=n(68),_=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var c=n[i];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(t))return c.substring(t.length,c.length)}return null};var G=function(){var e=Object(i.useState)({lat:1.3521,lng:103.8198}),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(i.useState)(!1),a=Object(r.a)(l,2),o=a[0],s=a[1],d=Object(i.useState)({lat:16.8409,lng:96.1735}),h=Object(r.a)(d,2),O=h[0],g=h[1],f=Object(i.useState)({lat:16.8409,lng:96.1735}),m=Object(r.a)(f,2),v=m[0],y=m[1];return Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){c({lat:e.coords.latitude,lng:e.coords.longitude}),y({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{visible:o,onOkClick:function(e){K.ref("locations/"+Object(H.a)()).set({created_at:Date.now(),id:Object(H.a)(),unitSize:e.unitSize,message:e.message,position:{lat:O.lat,lng:O.lng},type:e.objType}),s(!1)},onCancelClick:function(){s(!1)}}),Object(j.jsxs)(R.b,Object(u.a)(Object(u.a)({firebase:D.a},P),{},{children:[Object(j.jsxs)("select",{onChange:function(e){c({lat:parseFloat(e.target.value.split("|")[0]),lng:parseFloat(e.target.value.split("|")[1])})},children:[Object(j.jsx)("option",{value:"16.8409|96.1735",selected:!0,children:"Yangon"}),Object(j.jsx)("option",{value:"21.9588|96.0891",children:"Mandalay"}),Object(j.jsx)("option",{value:"18.8239172|95.2247068",children:"\u1015\u103c\u100a\u103a(Pyay)"}),Object(j.jsx)("option",{value:"17.3050582|96.4407641",children:"\u1015\u1032\u1001\u1030\u1038(Bago)"}),Object(j.jsx)("option",{value:"16.9347022|97.3326008",children:"(\u101e\u1011\u102f\u1036)Tha Htone "}),Object(j.jsx)("option",{value:"16.4537233|97.5891465",children:"(\u1019\u1031\u102c\u103a\u101c\u1019\u103c\u102d\u102f\u1004\u103a)MawlaMyine"}),Object(j.jsx)("option",{value:"19.7633|96.0785",children:"Naypyi Daw"})]}),Object(j.jsxs)(p.a,{style:{height:"100vh"},center:[n.lat,n.lng],zoom:13,scrollWheelZoom:!1,children:[Object(j.jsx)(E,{onMapClick:function(e){if("exists"===_("MASTER_LOGIN"))g({lat:e.lat,lng:e.lng}),s(!0);else{var t=prompt("Please enter master password:","");"ODg4ODg4ODg="===btoa(t)&&(g({lat:e.lat,lng:e.lng}),s(!0),function(e,t,n){var i="";if(n){var c=new Date;c.setTime(c.getTime()+24*n*60*60*1e3),i="; expires="+c.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}("MASTER_LOGIN","exists",1))}}}),Object(j.jsx)(x,{center:[n.lat,n.lng],zoom:13}),Object(j.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(A,{position:[v.lat,v.lng],message:"This is your current location"}),Object(j.jsx)(R.a,{path:"locations",children:function(e){return console.log(e),Object(j.jsx)(j.Fragment,{children:!e.isLoading&&e.value&&Object.keys(e.value).map((function(t){return Object(j.jsx)(T,Object(u.a)(Object(u.a)({},e.value[t]),{},{fbKey:t,onMarkerClick:function(e,t,n){if("exists"===_("MASTER_LOGIN")){window.confirm("Want to delete?")&&K.ref("locations/"+t).remove()}else{var i=prompt("Please enter master password:");if("ODg4ODg4ODg="===btoa(i))window.confirm("Want to delete?")&&K.ref("locations/"+t).remove()}}}),t)}))})}}),Object(j.jsx)(B,{})]})]}))]})};var W=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"".concat("","/"),children:Object(j.jsx)(G,{})}),Object(j.jsx)(s.a,{exact:!0,path:"".concat("","/home"),children:Object(j.jsx)(G,{})}),Object(j.jsx)(s.a,{path:"*",children:"404"})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),l(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root")),J()},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[203,1,2]]]);
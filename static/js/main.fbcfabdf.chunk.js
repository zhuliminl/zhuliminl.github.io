(this.webpackJsonptone_play=this.webpackJsonptone_play||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(3),i=t.n(c),l=(t(9),t(4)),s=(t(10),{1:"C",2:"C#",3:"D",4:"D#",5:"E",6:"F",7:"F#",8:"G",9:"G#",10:"A",11:"A#",12:"B",13:"C",14:"C#",15:"D",16:"D#",17:"E",18:"F",19:"F#",20:"G",21:"G#",22:"A",23:"A#",24:"B",25:"C",26:"C#",27:"D",28:"D#",29:"E",30:"F",31:"F#",32:"G",33:"G#",34:"A",35:"A#",36:"B",37:"C",38:"C#",39:"D",40:"D#",41:"E",42:"F",43:"F#",44:"G",45:"G#",46:"A",47:"A#",48:"B",49:"C",50:"C#",51:"D",52:"D#",53:"E",54:"F",55:"F#",56:"G",57:"G#",58:"A",59:"A#",60:"B",61:"C",62:"C#",63:"D",64:"D#",65:"E",66:"F",67:"F#",68:"G",69:"G#",70:"A",71:"A#",72:"B",73:"C",74:"C#",75:"D",76:"D#",77:"E",78:"F",79:"F#",80:"G",81:"G#",82:"A",83:"A#",84:"B",85:"C",86:"C#",87:"D",88:"D#",89:"E",90:"F"}),o="#FFE9E9",d="#E9F1FF",b=[{name:"Ionian",intervals:[1,3,5,6,8,10,12],idInterval:0,bgColor:o},{name:"Dorian",intervals:[1,3,4,6,8,10,11],idInterval:10,bgColor:d},{name:"Phrygian",intervals:[1,2,4,6,8,9,11],idInterval:2,bgColor:d},{name:"Lydian",intervals:[1,3,5,7,8,10,12],idInterval:7,bgColor:o},{name:"Mixolydian",intervals:[1,3,5,6,8,10,11],idInterval:11,bgColor:o},{name:"Aeolian",intervals:[1,3,4,6,8,9,11],idInterval:0,bgColor:d},{name:"Locrian",intervals:[1,2,4,6,7,9,11],idInterval:10,bgColor:d},{name:"Minor Blues",intervals:[1,4,6,7,8,11],idInterval:7,bgColor:"#D2CDFC"},{name:"Major Blues",intervals:[1,3,4,5,8,10],idInterval:4,bgColor:d}],v={1:"C",2:"C#",3:"D",4:"D#",5:"E",6:"F",7:"F#",8:"G",9:"G#",10:"A",11:"A#",12:"B"},C=["1","2b","2","3b","3","4","5b","5","6b","6","7b","7"],u=function(e,n){return 1===n?"C#"===e?"C#":"D#"===e?"Eb":"F#"===e?"F#":"G#"===e?"Ab":"A#"===e?"Bb":e:2===n?"C#"===e?"Db":"D#"===e?"Eb":"F#"===e?"Gb":"G#"===e?"Ab":"A#"===e?"Bb":e:"C#"===e?"C#/Db":"D#"===e?"Eb/D#":"F#"===e?"F#/Gb":"G#"===e?"Ab/G#":"A#"===e?"Bb/A#":e},F=t(0),j=Object.keys(v),m=function(e){var n=e.split("/");return n[1]?Object(F.jsxs)("div",{className:"code_container",children:[Object(F.jsx)("div",{className:"code_txt",children:n[0]}),Object(F.jsx)("div",{className:"code_sub_txt",children:n[1]})]}):Object(F.jsx)("div",{className:"code_txt",children:n[0]})};var D=function(){var e=Object(a.useState)("E"),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)("div",{className:"tone_header",children:j.map((function(e){var n=v[e];return Object(F.jsx)("div",{className:"tone_header_item ".concat(t===n?"tone_active":""),onClick:function(){r(n)},children:u(n,1)},n)}))}),Object(F.jsx)("div",{className:"scales_container",children:b.map((function(e,n){var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"C",t=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].findIndex((function(e){return e===n}));return e.map((function(e){return e+t})).map((function(e){return s[e]}))}(e.intervals,t);return Object(F.jsxs)("div",{className:"scale_container",style:{},children:[Object(F.jsx)("div",{className:"scale_name",style:{backgroundColor:e.bgColor},children:e.name}),C.map((function(e,n){return Object(F.jsx)("div",{className:"scale_number no-select",children:e},n)})),Object(F.jsx)("div",{className:"scale_code",children:e.intervals.map((function(n,t){var r=a[t],c=n===e.idInterval;return Object(F.jsx)("div",{className:"scale_code_txt",style:{left:80*(n-1),backgroundColor:c?"#EEE":"#FFF"},children:m(u(r))},t)}))})]},n)}))})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(D,{})}),document.getElementById("root")),A()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.fbcfabdf.chunk.js.map
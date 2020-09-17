(this["webpackJsonpredux-calc"]=this["webpackJsonpredux-calc"]||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return calculateResult}));var calculateResult=function calculateResult(operationsArray){if(operationsArray.length<1)return{error:!1,string:"0"};var changedSignsArray=operationsArray.join(" ").replace(/,/g,".").replace(/\xd7/g,"*").replace(/\xf7/g,"/").replace(/- -/g,"+ ").split(" "),arrayOfNumbers=changedSignsArray.filter((function(r){return!isNaN(r)})),arrayOfSigns=changedSignsArray.filter((function(r){return isNaN(r)}));if("/"===arrayOfSigns.slice(-2,-1).join("")&&0===parseFloat(arrayOfNumbers.slice(-1)))return 0===parseFloat(arrayOfNumbers.slice(-2,-1))?{error:!0,string:"Undefined result"}:{error:!0,string:"Do not divide by zero"};var result=""+arrayOfNumbers.reduce((function(prev,current,index){return eval(""+prev+arrayOfSigns[index-1]+current)}));return{error:!1,string:result.replace(".",",")}}},25:function(r,e,a){r.exports=a(42)},30:function(r,e,a){},31:function(r,e,a){},32:function(r,e,a){},38:function(r,e,a){},40:function(r,e,a){},42:function(r,e,a){"use strict";a.r(e);var n=a(0),t=a.n(n),i=a(13),c=a.n(i),s=(a(30),a(23)),l=(a(31),a(32),a(6)),o=(a(38),a(20)),u=a.n(o),g=function(r){var e=r.value,a=r.onclick,n=Object(l.c)((function(r){return r.calculator})),i=Object(l.b)(),c=["%","+/-",",","+","-","\xd7","\xf7","x\xb2","\u221ax","1/x"];return t.a.createElement("button",{className:isNaN(e)?"="!==e?n.isError&&-1!==c.indexOf(e)?"button operation disabled":"button operation":"button result":"button",onClick:n.isError&&-1!==c.indexOf(e)?function(){}:function(){return i(a)}},"\u22b2"===e?t.a.createElement(u.a,null):e)},b=function(r){return{type:"mainNumberChanged",payload:{number:r}}},m=function(r){return{type:"operationDone",payload:{operation:r}}},d=[{value:"%",function:{type:"percentCalculated"}},{value:"CE",function:{type:"mainNumberCleared"}},{value:"C",function:{type:"allCleared"}},{value:"\u22b2",function:{type:"lastCharacterDeleted"}},{value:"1/x",function:{type:"oneByXDivided"}},{value:"x\xb2",function:{type:"powerCalculated"}},{value:"\u221ax",function:{type:"squareRootCalculated"}},{value:"\xf7",function:m("\xf7")},{value:"7",function:b(7)},{value:"8",function:b(8)},{value:"9",function:b(9)},{value:"\xd7",function:m("\xd7")},{value:"4",function:b(4)},{value:"5",function:b(5)},{value:"6",function:b(6)},{value:"-",function:m("-")},{value:"1",function:b(1)},{value:"2",function:b(2)},{value:"3",function:b(3)},{value:"+",function:m("+")},{value:"+/-",function:{type:"signChanged"}},{value:"0",function:b(0)},{value:",",function:b(",")},{value:"=",function:m("=")}],y=function(){var r=Object(l.b)(),e=function(e){switch(e.preventDefault(),e.keyCode){case 49:r(b(1));break;case 50:r(b(2));break;case 51:r(b(3));break;case 52:r(b(4));break;case 53:r(b(5));break;case 54:r(b(6));break;case 55:r(b(7));break;case 56:r(b(8));break;case 57:r(b(9));break;case 48:r(b(0));break;case 44:r(b(","));break;case 43:r(m("+"));break;case 45:r(m("-"));break;case 42:r(m("\xd7"));break;case 47:r(m("\xf7"));break;case 13:case 61:r(m("="));break;case 8:r({type:"lastCharacterDeleted"});break;case 27:r({type:"allCleared"});break;case 46:r({type:"mainNumberCleared"})}};return Object(n.useEffect)((function(){return document.addEventListener("keypress",(function(r){return e(r)})),document.removeEventListener("keypress",(function(r){return e(r)}))}),[]),t.a.createElement("section",{className:"keyboard"},d.map((function(r){return t.a.createElement(g,{key:r.value,value:r.value,onclick:r.function})})))},f=(a(40),function(){var r=Object(l.c)((function(r){return r.calculator})),e=r.historyArray.join(" ");return t.a.createElement("section",{className:"display"},t.a.createElement("p",{className:"display__small"},e.length<=40?e:"..."+e.slice(-40)),t.a.createElement("p",{className:"display__big"},r.mainNumber.replace(/\B(?<!,\d*)(?=(\d{3})+(?!\d))/g," ")))}),p=a(22),h=a.n(p),v=a(21),S=a.n(v);var O=function(){var r=Object(n.useState)(!0),e=Object(s.a)(r,2),a=e[0],i=e[1];return Object(n.useEffect)((function(){a?document.documentElement.classList.remove("bright-mode"):document.documentElement.classList.add("bright-mode")}),[a]),t.a.createElement("div",{className:"app"},t.a.createElement("span",{className:"app__brightness",onClick:function(){i(!a)}},a?t.a.createElement(h.a,null):t.a.createElement(S.a,null)),t.a.createElement(f,null),t.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(7),E=a(2),A=function(r,e){var a=r.mainNumber,n=r.result,t=r.isEqualSignUsed;return a.length<17&&-1!==a.indexOf(",")||a.length<16&&-1===a.indexOf(",")||n?t||n?","===e?"0,":""+e:-1!==a.indexOf(",")&&","===e?a:"0"===a?","===e?"0,":""+e:a+e:a},j=a(11),C=a(3),_=function(r){return parseFloat(r.replace(",","."))},k=function(r,e){var a=r.historyArray,n=r.mainNumber,t=r.result,i=r.isEqualSignUsed,c=r.lastNumberAndOperationString,s=r.isError,l=r.isSignChanged;return s?[]:i?"="===e?2===a.length?a:[n].concat(Object(C.a)(c.split(" ")),[e]):[","!==n.slice(-1)?n:n+"0",e]:t?isNaN(_(a.slice(-1).join("")))?"="!==e?a.map((function(r,n){return n!==a.length-1?r:e})):[].concat(Object(C.a)(a),[n,e]):l?[n,e]:[].concat(Object(C.a)(a),[e]):isNaN(_(a.slice(-1).join("")))?[].concat(Object(C.a)(a),[","!==n.slice(-1)?n:n+"0",e]):[].concat(Object(C.a)(a),[e])},w=function(r){var e=r.mainNumber;return r.result?e:e.length>1?e.slice(0,-1):"0"},q=function(r){var e=r.historyArray;return r.isEqualSignUsed?[]:e},x=function(r){return(""+r).replace(".",",")},U=function(r){var e=r.mainNumber,a=r.historyArray;return isNaN(_(a.slice(-1).join("")))?0!==_(e)?{bigString:x(-1*_(e)),smallArray:null,isSignChanged:!0}:{bigString:e,isSignChanged:!1}:{bigString:x(-1*_(a.slice(-1).join(""))),smallArray:a.map((function(r,e){return e!==a.length-1?r:x(-1*_(a.slice(-1).join("")))})),isSignChanged:!0}},M=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed,t=r.isSignChanged;if(n||e.length<1)return{bigString:x(Math.pow(_(a),2)),smallArray:[x(Math.pow(_(a),2))]};if(e.length>0){if(isNaN(_(e.slice(-1).join(""))))return{bigString:x(Math.pow(_(a),2)),smallArray:[].concat(Object(C.a)(e),[x(Math.pow(_(a),2))])};if(t)return{bigString:x(Math.pow(_(a),2)),smallArray:[x(Math.pow(_(a),2))]};var i=e.map((function(r,a){return a!==e.length-1?r:x(Math.pow(_(r),2))}));return{bigString:i.slice(-1).join(""),smallArray:i}}},D=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed,t=r.isSignChanged;if(n||e.length<1)return _(a)>=0?{bigString:x(Math.sqrt(_(a))),smallArray:[x(Math.sqrt(_(a)))],error:!1}:{bigString:"Invalid input",smallArray:["\u221a("+a+")"],error:!0};if(e.length>0){if(isNaN(_(e.slice(-1).join(""))))return _(a)>=0?{bigString:x(Math.sqrt(_(a))),smallArray:[].concat(Object(C.a)(e),[x(Math.sqrt(_(a)))]),error:!1}:{bigString:"Invalid input",smallArray:[].concat(Object(C.a)(e),["\u221a("+a+")"]),error:!0};if(t)return _(a)>=0?{bigString:x(Math.sqrt(_(a))),smallArray:[x(Math.sqrt(_(a)))],error:!1}:{bigString:"Invalid input",smallArray:[].concat(Object(C.a)(e),["\u221a("+a+")"]),error:!0};if(_(e.slice(-1).join(""))>=0){var i=e.map((function(r,a){return a!==e.length-1?r:x(Math.sqrt(_(r)))}));return{bigString:i.slice(-1).join(""),smallArray:i,error:!1}}return{bigString:"Invalid input",smallArray:e.map((function(r,a){return a!==e.length-1?r:"\u221a("+r+")"})),error:!0}}},I=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed;return 0!==_(a)?n?{bigString:x(1/_(a)),smallArray:[x(1/_(a))],error:!1}:{bigString:x(1/_(a)),smallArray:[].concat(Object(C.a)(e),[x(1/_(a))]),error:!1}:{bigString:"Do not divide by zero",smallArray:[].concat(Object(C.a)(e),["1/(0)"]),error:!0}},R=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed,t=r.result,i=_(a),c=_(e.slice(-1).join(""));if(e.length<1)return{bigString:"0",smallArray:["0"]};if(t){var s=x(i*(i/100));return{bigString:s,smallArray:n?[s]:[].concat(Object(C.a)(e),[s])}}var l=isNaN(c)?Object(j.a)(e.slice(0,-1)).string:Object(j.a)(e.slice(0,-2)).string,o=x(_(l)*(i/100));return{bigString:o,smallArray:isNaN(c)?[].concat(Object(C.a)(e),[o]):e.map((function(r,a){return a!==e.length-1?r:o}))}};var L=Object(N.b)({calculator:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mainNumber:"0",historyArray:[],lastNumberAndOperationString:"",result:!1,isEqualSignUsed:!1,isError:!1,isSignChanged:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"mainNumberChanged":return Object(E.a)(Object(E.a)({},r),{},{mainNumber:r.isError?""+e.payload.number:A(r,e.payload.number),historyArray:r.isError||r.isEqualSignUsed?[]:r.historyArray,result:!1,isEqualSignUsed:!1,lastNumberAndOperationString:r.isError?"":r.lastNumberAndOperationString,isError:!1,isSignChanged:!1});case"mainNumberCleared":return Object(E.a)(Object(E.a)({},r),{},{mainNumber:"0",historyArray:r.isError||r.isEqualSignUsed?[]:r.historyArray,result:!1,isEqualSignUsed:!1,lastNumberAndOperationString:r.isEqualSignUsed?"":r.lastNumberAndOperationString,isError:!1,isSignChanged:!1});case"allCleared":return Object(E.a)(Object(E.a)({},r),{},{mainNumber:"0",historyArray:[],lastNumberAndOperationString:"",result:!1,isEqualSignUsed:!1,isError:!1,isSignChanged:!1});case"operationDone":var a=k(r,e.payload.operation),n=Object(j.a)(a);return Object(E.a)(Object(E.a)({},r),{},{mainNumber:n.string,historyArray:a,result:"="!==e.payload.operation||!r.isError,isEqualSignUsed:"="===e.payload.operation&&!r.isError,lastNumberAndOperationString:a.slice(-3,-1).join(" "),isError:n.error,isSignChanged:!1});case"powerCalculated":var t=M(r);return Object(E.a)(Object(E.a)({},r),{},{mainNumber:t.bigString,historyArray:t.smallArray});case"squareRootCalculated":var i=D(r);return Object(E.a)(Object(E.a)({},r),{},{mainNumber:i.bigString,historyArray:i.smallArray,isError:i.error});case"oneByXDivided":var c=I(r);return Object(E.a)(Object(E.a)({},r),{},{mainNumber:c.bigString,historyArray:c.smallArray,isError:c.error});case"percentCalculated":var s=R(r);return Object(E.a)(Object(E.a)({},r),{},{mainNumber:s.bigString,historyArray:s.smallArray});case"lastCharacterDeleted":return Object(E.a)(Object(E.a)({},r),{},{mainNumber:r.isError?"0":w(r),historyArray:r.isError?[]:q(r),lastNumberAndOperationString:r.isError?"":r.lastNumberAndOperationString,isError:!1,isSignChanged:!1});case"signChanged":var l=U(r);return Object(E.a)(Object(E.a)({},r),{},{mainNumber:l.bigString,historyArray:null!==l.smallArray?l.smallArray:r.historyArray,isSignChanged:l.isSignChanged});default:return r}}}),X=Object(N.c)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(l.a,{store:X},t.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(r){r.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.81f28c08.chunk.js.map
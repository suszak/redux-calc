(this["webpackJsonpredux-calc"]=this["webpackJsonpredux-calc"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return calculateResult}));var calculateResult=function calculateResult(operationsArray){if(operationsArray.length<1)return{error:!1,string:"0"};var changedSignsArray=operationsArray.join(" ").replace(/,/g,".").replace(/\xd7/g,"*").replace(/\xf7/g,"/").replace(/- -/g,"+ ").split(" "),arrayOfNumbers=changedSignsArray.filter((function(r){return!isNaN(r)})),arrayOfSigns=changedSignsArray.filter((function(r){return isNaN(r)}));if("/"===arrayOfSigns.slice(-2,-1).join("")&&0===parseFloat(arrayOfNumbers.slice(-1)))return 0===parseFloat(arrayOfNumbers.slice(-2,-1))?{error:!0,string:"Undefined result"}:{error:!0,string:"Do not divide by zero"};var result=""+arrayOfNumbers.reduce((function(prev,current,index){return eval(""+prev+arrayOfSigns[index-1]+current)}));return{error:!1,string:result.replace(".",",")}}},,,,,,,function(r,e,a){r.exports=a(28)},,,,,function(r,e,a){},function(r,e,a){},function(r,e,a){},,,,,,,function(r,e,a){},function(r,e,a){},function(r,e,a){"use strict";a.r(e);var n=a(0),t=a.n(n),i=a(6),s=a.n(i),c=(a(17),a(18),a(19),a(3)),l=(a(26),function(r){var e=r.value,a=r.onclick,n=Object(c.c)((function(r){return r.calculator})),i=Object(c.b)(),s=["%","+/-",",","+","-","\xd7","\xf7","x\xb2","\u221ax","1/x"];return t.a.createElement("button",{className:isNaN(e)?"="!==e?n.isError&&-1!==s.indexOf(e)?"button operation disabled":"button operation":"button result":"button",onClick:n.isError&&-1!==s.indexOf(e)?function(){}:function(){return i(a)}},e)}),o=function(r){return{type:"mainNumberChanged",payload:{number:r}}},u=function(r){return{type:"operationDone",payload:{operation:r}}},g=[{value:"%",function:{type:"percentCalculated"}},{value:"CE",function:{type:"mainNumberCleared"}},{value:"C",function:{type:"allCleared"}},{value:"\u22b2",function:{type:"lastCharacterDeleted"}},{value:"1/x",function:{type:"oneByXDivided"}},{value:"x\xb2",function:{type:"powerCalculated"}},{value:"\u221ax",function:{type:"squareRootCalculated"}},{value:"\xf7",function:u("\xf7")},{value:"7",function:o(7)},{value:"8",function:o(8)},{value:"9",function:o(9)},{value:"\xd7",function:u("\xd7")},{value:"4",function:o(4)},{value:"5",function:o(5)},{value:"6",function:o(6)},{value:"-",function:u("-")},{value:"1",function:o(1)},{value:"2",function:o(2)},{value:"3",function:o(3)},{value:"+",function:u("+")},{value:"+/-",function:{type:"signChanged"}},{value:"0",function:o(0)},{value:",",function:o(",")},{value:"=",function:u("=")}],b=function(){var r=Object(c.b)(),e=function(e){switch(e.preventDefault(),e.keyCode){case 49:r(o(1));break;case 50:r(o(2));break;case 51:r(o(3));break;case 52:r(o(4));break;case 53:r(o(5));break;case 54:r(o(6));break;case 55:r(o(7));break;case 56:r(o(8));break;case 57:r(o(9));break;case 48:r(o(0));break;case 44:r(o(","));break;case 43:r(u("+"));break;case 45:r(u("-"));break;case 42:r(u("\xd7"));break;case 47:r(u("\xf7"));break;case 13:case 61:r(u("="));break;case 8:r({type:"lastCharacterDeleted"});break;case 27:r({type:"allCleared"});break;case 46:r({type:"mainNumberCleared"})}};return Object(n.useEffect)((function(){return document.addEventListener("keypress",(function(r){return e(r)})),document.removeEventListener("keypress",(function(r){return e(r)}))}),[]),t.a.createElement("section",{className:"keyboard"},g.map((function(r){return t.a.createElement(l,{key:r.value,value:r.value,onclick:r.function})})))},m=(a(27),function(){var r=Object(c.c)((function(r){return r.calculator})),e=r.historyArray.join(" ");return t.a.createElement("section",{className:"display"},t.a.createElement("p",{className:"display__small"},e.length<=40?e:"..."+e.slice(-40)),t.a.createElement("p",{className:"display__big"},r.mainNumber.replace(/\B(?<!,\d*)(?=(\d{3})+(?!\d))/g," ")))});var d=function(){return t.a.createElement("div",{className:"App"},t.a.createElement(m,null),t.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(4),f=a(1),p=function(r,e){var a=r.mainNumber,n=r.result,t=r.isEqualSignUsed;return a.length<17&&-1!==a.indexOf(",")||a.length<16&&-1===a.indexOf(",")||n?t||n?","===e?"0,":""+e:-1!==a.indexOf(",")&&","===e?a:"0"===a?","===e?"0,":""+e:a+e:a},h=a(5),v=a(2),S=function(r){return parseFloat(r.replace(",","."))},O=function(r,e){var a=r.historyArray,n=r.mainNumber,t=r.result,i=r.isEqualSignUsed,s=r.lastNumberAndOperationString,c=r.isError,l=r.isSignChanged;return c?[]:i?"="===e?2===a.length?a:[n].concat(Object(v.a)(s.split(" ")),[e]):[","!==n.slice(-1)?n:n+"0",e]:t?isNaN(S(a.slice(-1).join("")))?"="!==e?a.map((function(r,n){return n!==a.length-1?r:e})):[].concat(Object(v.a)(a),[n,e]):l?[n,e]:[].concat(Object(v.a)(a),[e]):isNaN(S(a.slice(-1).join("")))?[].concat(Object(v.a)(a),[","!==n.slice(-1)?n:n+"0",e]):[].concat(Object(v.a)(a),[e])},N=function(r){var e=r.mainNumber;return r.result?e:e.length>1?e.slice(0,-1):"0"},A=function(r){var e=r.historyArray;return r.isEqualSignUsed?[]:e},E=function(r){return(""+r).replace(".",",")},j=function(r){var e=r.mainNumber,a=r.historyArray;return isNaN(S(a.slice(-1).join("")))?0!==S(e)?{bigString:E(-1*S(e)),smallArray:null,isSignChanged:!0}:{bigString:e,isSignChanged:!1}:{bigString:E(-1*S(a.slice(-1).join(""))),smallArray:a.map((function(r,e){return e!==a.length-1?r:E(-1*S(a.slice(-1).join("")))})),isSignChanged:!0}},C=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed,t=r.isSignChanged;if(n||e.length<1)return{bigString:E(Math.pow(S(a),2)),smallArray:[E(Math.pow(S(a),2))]};if(e.length>0){if(isNaN(S(e.slice(-1).join(""))))return{bigString:E(Math.pow(S(a),2)),smallArray:[].concat(Object(v.a)(e),[E(Math.pow(S(a),2))])};if(t)return{bigString:E(Math.pow(S(a),2)),smallArray:[E(Math.pow(S(a),2))]};var i=e.map((function(r,a){return a!==e.length-1?r:E(Math.pow(S(r),2))}));return{bigString:i.slice(-1).join(""),smallArray:i}}},_=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed,t=r.isSignChanged;if(n||e.length<1)return S(a)>=0?{bigString:E(Math.sqrt(S(a))),smallArray:[E(Math.sqrt(S(a)))],error:!1}:{bigString:"Invalid input",smallArray:["\u221a("+a+")"],error:!0};if(e.length>0){if(isNaN(S(e.slice(-1).join(""))))return S(a)>=0?{bigString:E(Math.sqrt(S(a))),smallArray:[].concat(Object(v.a)(e),[E(Math.sqrt(S(a)))]),error:!1}:{bigString:"Invalid input",smallArray:[].concat(Object(v.a)(e),["\u221a("+a+")"]),error:!0};if(t)return S(a)>=0?{bigString:E(Math.sqrt(S(a))),smallArray:[E(Math.sqrt(S(a)))],error:!1}:{bigString:"Invalid input",smallArray:[].concat(Object(v.a)(e),["\u221a("+a+")"]),error:!0};if(S(e.slice(-1).join(""))>=0){var i=e.map((function(r,a){return a!==e.length-1?r:E(Math.sqrt(S(r)))}));return{bigString:i.slice(-1).join(""),smallArray:i,error:!1}}return{bigString:"Invalid input",smallArray:e.map((function(r,a){return a!==e.length-1?r:"\u221a("+r+")"})),error:!0}}},k=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed;return 0!==S(a)?n?{bigString:E(1/S(a)),smallArray:[E(1/S(a))],error:!1}:{bigString:E(1/S(a)),smallArray:[].concat(Object(v.a)(e),[E(1/S(a))]),error:!1}:{bigString:"Do not divide by zero",smallArray:[].concat(Object(v.a)(e),["1/(0)"]),error:!0}},w=function(r){var e=r.historyArray,a=r.mainNumber,n=r.isEqualSignUsed,t=r.result,i=S(a),s=S(e.slice(-1).join(""));if(e.length<1)return{bigString:"0",smallArray:["0"]};if(t){var c=E(i*(i/100));return{bigString:c,smallArray:n?[c]:[].concat(Object(v.a)(e),[c])}}var l=isNaN(s)?Object(h.a)(e.slice(0,-1)).string:Object(h.a)(e.slice(0,-2)).string,o=E(S(l)*(i/100));return{bigString:o,smallArray:isNaN(s)?[].concat(Object(v.a)(e),[o]):e.map((function(r,a){return a!==e.length-1?r:o}))}};var q=Object(y.b)({calculator:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mainNumber:"0",historyArray:[],lastNumberAndOperationString:"",result:!1,isEqualSignUsed:!1,isError:!1,isSignChanged:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"mainNumberChanged":return Object(f.a)(Object(f.a)({},r),{},{mainNumber:r.isError?""+e.payload.number:p(r,e.payload.number),historyArray:r.isError||r.isEqualSignUsed?[]:r.historyArray,result:!1,isEqualSignUsed:!1,lastNumberAndOperationString:r.isError?"":r.lastNumberAndOperationString,isError:!1,isSignChanged:!1});case"mainNumberCleared":return Object(f.a)(Object(f.a)({},r),{},{mainNumber:"0",historyArray:r.isError||r.isEqualSignUsed?[]:r.historyArray,result:!1,isEqualSignUsed:!1,lastNumberAndOperationString:r.isEqualSignUsed?"":r.lastNumberAndOperationString,isError:!1,isSignChanged:!1});case"allCleared":return Object(f.a)(Object(f.a)({},r),{},{mainNumber:"0",historyArray:[],lastNumberAndOperationString:"",result:!1,isEqualSignUsed:!1,isError:!1,isSignChanged:!1});case"operationDone":var a=O(r,e.payload.operation),n=Object(h.a)(a);return Object(f.a)(Object(f.a)({},r),{},{mainNumber:n.string,historyArray:a,result:"="!==e.payload.operation||!r.isError,isEqualSignUsed:"="===e.payload.operation&&!r.isError,lastNumberAndOperationString:a.slice(-3,-1).join(" "),isError:n.error,isSignChanged:!1});case"powerCalculated":var t=C(r);return Object(f.a)(Object(f.a)({},r),{},{mainNumber:t.bigString,historyArray:t.smallArray});case"squareRootCalculated":var i=_(r);return Object(f.a)(Object(f.a)({},r),{},{mainNumber:i.bigString,historyArray:i.smallArray,isError:i.error});case"oneByXDivided":var s=k(r);return Object(f.a)(Object(f.a)({},r),{},{mainNumber:s.bigString,historyArray:s.smallArray,isError:s.error});case"percentCalculated":var c=w(r);return Object(f.a)(Object(f.a)({},r),{},{mainNumber:c.bigString,historyArray:c.smallArray});case"lastCharacterDeleted":return Object(f.a)(Object(f.a)({},r),{},{mainNumber:r.isError?"0":N(r),historyArray:r.isError?[]:A(r),lastNumberAndOperationString:r.isError?"":r.lastNumberAndOperationString,isError:!1,isSignChanged:!1});case"signChanged":var l=j(r);return Object(f.a)(Object(f.a)({},r),{},{mainNumber:l.bigString,historyArray:null!==l.smallArray?l.smallArray:r.historyArray,isSignChanged:l.isSignChanged});default:return r}}}),x=Object(y.c)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(c.a,{store:x},t.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(r){r.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.86ee672d.chunk.js.map
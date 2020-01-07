!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var r=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(n.i,o,i),o.locals?o.locals:{});n.exports=a},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a={};function s(n,t,e){for(var r=0;r<t.length;r++){var o={css:t[r][1],media:t[r][2],sourceMap:t[r][3]};a[n][r]?a[n][r](o):a[n].push(h(o,e))}}function u(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,l=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(n,t){var e,r,o;if(t.singleton){var i=m++;e=p||(p=u(t)),r=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=u(t),r=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t,e){return(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o()),n=e.base?n+e.base:n,t=t||[],a[n]||(a[n]=[]),s(n,t,e),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){a[n]||(a[n]=[]),s(n,t,e);for(var r=t.length;r<a[n].length;r++)a[n][r]();a[n].length=t.length,0===a[n].length&&delete a[n]}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #2196f3;\r\n   padding: 15px;\r\n }\r\n .author{\r\n    font-size:0.8rem;\r\n }\r\n .floating-btn{\r\n   position: fixed;\r\n   bottom: 50px;\r\n   right:50px;\r\n }\r\n\r\n .modal{\r\n   max-width:600px;\r\n   max-height:300px;\r\n   margin:100px auto;\r\n   overflow-y: auto;\r\n   background-color:#fff;\r\n }\r\n\r\n .modal > h1{\r\n   text-align: center;\r\n }\r\n\r\n .modal .modal-content{\r\n   padding: 1rem;\r\n }\r\n\r\n .error{\r\n   color:red;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n @media (min-width: 768px) {\r\n   #content {\r\n     margin-left: 180px;\r\n   }\r\n }",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,s,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r=0;r<n.length;r++){var o=[].concat(n[r]);e&&(o[2]?o[2]="".concat(e," and ").concat(o[2]):o[2]=e),t.push(o)}},t}},function(n,t,e){"use strict";e.r(t);class r{static create(n){return fetch("https://simple-form-app-54511.firebaseio.com/question.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(t=>(n.id=t.name,n)).then(o).then(r.renderList)}static renderList(){const n=i(),t=n.length?n.map(a).join(""):'<div class="mui--text-headline">Вопросы отсутствуют</div>';document.getElementById("list-questions").innerHTML=t}static fetch(n){return n?fetch(`https://simple-form-app-54511.firebaseio.com/question.json?auth=${n}`).then(n=>n.json()).then(n=>n.error&&n?`<p class="error">${n.error}</p>`:n?Object.keys(n).map(t=>({...n[t],id:t})):[]):Promise.resolve('<p class="error">Отсутствует токен</p>')}static listToHTML(n){return n.length?`<ol>${n.map(n=>`<li>${n.text}</li>`).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function o(n){const t=i();t.push(n),localStorage.setItem("questions",JSON.stringify(t))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(n){return`\n    <div class="mui--text-black-54">\n      ${new Date(n.date).toLocaleDateString()}\n      ${new Date(n.date).toLocaleTimeString()}\n    </div>\n    <div>${n.text}</div>\n    `}function s(n){return n.length>=10}function u(n,t){const e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`\n        <h1>${n}</h1>\n        <div class="modal-content">${t}</div>\n    `,mui.overlay("on",e)}e(0);const c=document.getElementById("question-form"),l=c.querySelector("#question-input"),d=c.querySelector("#submit-question"),f=document.getElementById("modal-button");function p(n){n.preventDefault();const t=n.target.querySelector("button"),e=n.target.querySelector("#auth-email-input").value,o=n.target.querySelector("#auth-password-input").value;t.disabled=!0,function(n,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAY86TSIX5-TzIO1r_b1p684d16QUeaFeo",{method:"POST",body:JSON.stringify({email:n,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>n.idToken)}(e,o).then(r.fetch).then(m).then(()=>t.disabled=!1)}function m(n){"string"==typeof n?u("Ошибка",n):u("Список вопросов",r.listToHTML(n))}window.addEventListener("load",r.renderList),c.addEventListener("submit",(function(n){if(n.preventDefault(),s(l.value)){const n={text:l.value.trim(),date:(new Date).toJSON()};d.disabled=!0,r.create(n).then(()=>{l.value="",l.className="",d.disabled=!1})}})),f.addEventListener("click",(function(){u("Авторизация",'\n    <form class="mui-form" id="auth-form">\n            <div class="mui-textfield mui-textfield--float-label">\n              <input type="email" id="auth-email-input" required>\n              <label for="auth-email-input">Email</label>\n            </div>\n            <div class="mui-textfield mui-textfield--float-label">\n              <input type="password" id="auth-password-input" required>\n              <label for="auth-password-input">Password</label>\n            </div>\n            <button type="submit" class="mui-btn mui-btn--primary">Авторизоваться</button>\n    </form>\n    '),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),l.addEventListener("input",()=>{d.disabled=!s(l.value)})}]);
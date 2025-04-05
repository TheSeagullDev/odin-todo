(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),A={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(A);else{var f=r(A,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},365:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(354),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,'\n\nbody {\n    height: 100vh;\n    font-family: Helvetica;\n    margin: 0 40px;\n    box-sizing: border-box;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 1rem;\n    margin: 40px 0;\n}\n\n.todo {\n    display: grid;\n    border-radius: 10px;\n    margin: 5px;\n    grid-template-columns: 1fr 4fr 3fr 2fr 2fr;\n    font-size: 16px;\n    padding: 10px;\n    gap: 5px;\n    background-color: #ffffff;\n}\n\n.todotitle {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.todo div:not(.todotitle) {\n    grid-row: 2 / 3;\n}\n\n.todo input, .todo button{\n    grid-row: 1 / 3;\n}\n\n.todo[data-priority="low"] {\n    background-color: #7bf1a7;\n}\n\n.todo[data-priority="med"] {\n    background-color: #fef186;\n}\n\n.todo[data-priority="high"] {\n    background-color: #ffa2a3;\n}\n\n.todo:has(input:checked) div {\n    text-decoration: line-through;\n}\n\n.project {\n    background-color: #d6e7f5;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    display: flex;\n    flex-direction: column;\n}\n\n.button-container {\n    margin-top: auto;\n}\n\nbutton {\n    background-color: #4591d3;\n    border: none;\n    color: #ffffff;\n    border-radius: 10px;\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: #6ba3d4;\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:";;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,0CAA0C;IAC1C,eAAe;IACf,aAAa;IACb,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,iDAAiD;IACjD,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B",sourcesContent:['\n\nbody {\n    height: 100vh;\n    font-family: Helvetica;\n    margin: 0 40px;\n    box-sizing: border-box;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 1rem;\n    margin: 40px 0;\n}\n\n.todo {\n    display: grid;\n    border-radius: 10px;\n    margin: 5px;\n    grid-template-columns: 1fr 4fr 3fr 2fr 2fr;\n    font-size: 16px;\n    padding: 10px;\n    gap: 5px;\n    background-color: #ffffff;\n}\n\n.todotitle {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.todo div:not(.todotitle) {\n    grid-row: 2 / 3;\n}\n\n.todo input, .todo button{\n    grid-row: 1 / 3;\n}\n\n.todo[data-priority="low"] {\n    background-color: #7bf1a7;\n}\n\n.todo[data-priority="med"] {\n    background-color: #fef186;\n}\n\n.todo[data-priority="high"] {\n    background-color: #ffa2a3;\n}\n\n.todo:has(input:checked) div {\n    text-decoration: line-through;\n}\n\n.project {\n    background-color: #d6e7f5;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    display: flex;\n    flex-direction: column;\n}\n\n.button-container {\n    margin-top: auto;\n}\n\nbutton {\n    background-color: #4591d3;\n    border: none;\n    color: #ffffff;\n    border-radius: 10px;\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: #6ba3d4;\n}'],sourceRoot:""}]);const c=i},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),i=n.n(a),c=n(659),d=n.n(c),s=n(56),l=n.n(s),u=n(540),p=n.n(u),A=n(113),f=n.n(A),g=n(365),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),r()(g.A,m),g.A&&g.A.locals&&g.A.locals;const v=[];function h(e){const t=function(e){const t=[];return{getName:()=>e,addToProject:function(e){t.push(e)},todos:t,getIndex:function(){return v.indexOf(this)},deleteTodo:function(e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}}}(e);return v.push(t),t}function C(e,t,n,o,r=!1){return{getTitle:()=>e,getDescription:()=>t,getDueDate:()=>o,getPriority:()=>n,getAttributes:()=>[e,t,n,o],setTitle:t=>e=t,setDescription:e=>t=e,setDueDate:e=>o=e,setPriority:e=>n=e,setAttributes:(r,a,i,c)=>{e=r,t=a,n=i,o=c},getChecked:()=>r,toggleChecked:()=>r=!r}}h("default");const b=document.querySelector(".todo-form-container"),y=document.querySelector(".project-form-container"),x=document.querySelector(".edit-form-container"),I=document.querySelector("#todo-form"),B=document.querySelector("#project-form"),E=document.querySelector("#edit-form");function j(e){return JSON.parse(localStorage.getItem(`project${e}`))}const k=function(){const e=document.querySelector(".content");function t(t){const r=document.createElement("div");r.classList.add("project"),r.dataset.project=t.getIndex();const a=document.createElement("h2");a.textContent=t.getName(),e.appendChild(r),r.appendChild(a);for(let e=0;e<t.todos.length;e++)n(t.todos[e],r);const i=document.createElement("div");i.classList.add("button-container"),r.appendChild(i);const c=document.createElement("button");c.textContent="New Todo",c.addEventListener("click",(()=>{!function(e){I.dataset.project=e.getIndex(),b.showModal()}(t)})),i.appendChild(c);const d=document.createElement("button");d.textContent="Delete Project",d.addEventListener("click",(()=>{!function(e){const t=e.getIndex();0===t?alert("Can't delete default project!"):t>-1&&(localStorage.removeItem(`project${t}`),v.splice(t,1))}(t),o(v)})),i.appendChild(d)}function n(e,t){const n=document.createElement("div");n.classList.add("todo"),t.appendChild(n),n.dataset.title=e.getTitle(),n.dataset.description=e.getDescription(),n.dataset.priority=e.getPriority(),n.dataset.dueDate=e.getDueDate();const r=document.createElement("input");r.type="checkbox",r.checked=e.getChecked(),r.addEventListener("click",(()=>{e.toggleChecked(),o(v)})),n.appendChild(r);const a=document.createElement("div");a.textContent=e.getTitle(),a.classList.add("todotitle"),n.appendChild(a);const i=document.createElement("div");i.textContent=e.getDescription(),n.appendChild(i);const c=document.createElement("div");c.classList.add("date"),c.textContent=e.getDueDate(),n.appendChild(c);const d=document.createElement("button");d.textContent="Edit",d.addEventListener("click",(()=>{!function(e){E.addEventListener("submit",(function t(){e.setTitle(E.edittitle.value),e.setDescription(E.editdescription.value),e.setDueDate(E.editdueDate.value),e.setPriority(E.editpriority.value),k.displayProjects(v),E.removeEventListener("submit",t)})),x.showModal();for(let t=0;t<4;t++)E.elements[t].value=e.getAttributes()[t]}(e)})),n.appendChild(d);const s=document.createElement("button");s.textContent="Delete",s.addEventListener("click",(()=>{v[t.dataset.project].deleteTodo(e),o(v)})),n.appendChild(s)}function o(n){e.innerHTML="";for(let e=0;e<n.length;e++)t(n[e]);!function(e){localStorage.clear();for(let t=0;t<e.length;t++){const n=[e[t].getName()];for(let o=0;o<e[t].todos.length;o++)n.push(e[t].todos[o].getAttributes()),n[o+1].push(e[t].todos[o].getChecked());localStorage.setItem(`project${t}`,JSON.stringify(n))}}(n)}return{displayProjects:o,displayTodo:n}}();!function(){if(localStorage.length>0)for(let e=0;e<localStorage.length;e++)if(0==e){const t=j(0).slice(1);console.log(e),console.log(t);for(let n=0;n<t.length;n++){const o=t[n];v[e].addToProject(C.apply(null,o))}}else{console.log(e);const t=j(e).slice(1);console.log(t),h(j(e)[0]),console.log(v);for(let n=0;n<t.length;n++){const o=t[n];v[e].addToProject(C.apply(null,o))}}}(),k.displayProjects(v),document.querySelector("#new-project").addEventListener("click",(()=>{y.showModal()})),document.querySelector("#todoclose").addEventListener("click",(()=>{b.close()})),document.querySelector("#projectclose").addEventListener("click",(()=>{y.close()})),document.querySelector("#editclose").addEventListener("click",(()=>{x.close()})),I.addEventListener("submit",(()=>{v[I.dataset.project].addToProject(C(I.todotitle.value,I.tododescription.value,I.todopriority.value,I.tododueDate.value)),k.displayProjects(v),I.reset()})),B.addEventListener("submit",(()=>{h(B.projecttitle.value),k.displayProjects(v),B.reset()}))})();
//# sourceMappingURL=app.bundle.js.map
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}t.d({},{z:()=>g});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}return e=t,o=[{key:"fromJson",value:function(e){var r=e.id,n=e.tarea,o=e.completado,a=e.creado,i=new t(n);return i.id=r,i.completado=o,i.creado=new Date(a),i}}],(n=null)&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,o}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return l(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function u(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}var s=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()},(e=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,r=i(this.todos);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(n.id===t){n.completado=!n.completado,this.guardarLocalStorage();break}}}catch(t){r.e(t)}finally{r.f()}}},{key:"eliminarCompletado",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],this.todos=this.todos.map(o.fromJson)}}])&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}();function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var m=document.querySelector(".todo-list"),y=document.querySelector(".new-todo"),v=document.querySelector(".clear-completed"),p=document.querySelector(".filters"),b=document.querySelectorAll(".filtro"),h=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data=id="').concat(t.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n            <label>").concat(t.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <imput class="edit" value="Create a TodoMVC templete">\n    </li>\n    ;'),r=document.createElement("div");return r.innerHTML=e,m.append(r.firstElementChild),r.firstElementChild};y.addEventListener("keyup",(function(t){if(13===t.keyCode&&y.value.length>1){var e=new o(y.value);g.nuevoTodo(e),h(e),y.value=""}})),m.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,n=r.getAttribute("data-id");e.includes("input")?(g.marcarCompletado(n),r.classList.toggle("completed")):e.includes("button")&&(g.eliminarTodo(n),m.removeChild(r))})),v.addEventListener("click",(function(){g.eliminarCompletado();for(var t=m.children.length-1;t>=0;t--){var e=m.children[t];e.classList.contains("completed")&&m.removeChild(e)}})),p.addEventListener("click",(function(t){var e=t.target.textContent;if(e){b.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var r,n=f(m.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(e){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(t){n.e(t)}finally{n.f()}}}));var g=new s;g.todos.forEach(h)})();
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZbuR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.REGEX_MATCH_URL=exports.MAX_RESULT_PER_PAGE=exports.BASE_URL_IMG=exports.BASE_URL=void 0,exports.BASE_URL="https://swapi.dev/api",exports.BASE_URL_IMG="https://starwars-visualguide.com/assets/img",exports.MAX_RESULT_PER_PAGE=10,exports.REGEX_MATCH_URL=/\/{1}[\w.]*[/]?[=?\d.\w]*[/]?$/;
},{}],"XkR8":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,c){function i(e){try{a(r.next(e))}catch(t){c(t)}}function u(e){try{a(r.throw(e))}catch(t){c(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,u)}a((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=t.call(e,c)}catch(a){u=[6,a],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./utils/constants"),r="starsWarCache";self.addEventListener("activate",function(){return caches.delete(r)});var o=function(n,o){return e(void 0,void 0,void 0,function(){return t(this,function(c){switch(c.label){case 0:return[4,fetch(n).then(function(n){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,caches.open(r)];case 1:return e.sent().put(o,n.clone()),[2,n]}})})}).catch(function(e){console.log("network Error: ",e)})];case 1:return[2,c.sent()]}})})};self.addEventListener("fetch",function(c){c.respondWith(function(){return e(this,void 0,void 0,function(){var i,u,a=this;return t(this,function(s){switch(s.label){case 0:return[4,caches.open(r)];case 1:return i=s.sent(),console.log(c.request.url),u=c.request.url.match(n.REGEX_MATCH_URL),[4,i.match(u).then(function(n){return e(a,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return(e=n)?[3,2]:[4,o(c.request,u)];case 1:e=t.sent(),t.label=2;case 2:return[2,e]}})})})];case 2:return[2,s.sent()]}})})}())});
},{"./utils/constants":"ZbuR"}]},{},["XkR8"], null)
//# sourceMappingURL=https://daluvi.github.io/ERswapiGallery/SW_starsWar.js.map
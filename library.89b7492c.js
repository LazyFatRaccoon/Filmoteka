function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired76b;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},n.parcelRequired76b=s),s.register("gitjG",(function(e,n){t(e.exports,"scrollTopTop",(function(){return i}));const r=document.querySelector(".back-to-top");function i(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){document.querySelector(".back-to-top").classList.toggle("active",window.scrollY>500)})),r.addEventListener("click",i)})),s.register("l7Vfm",(function(e,n){t(e.exports,"addToWatchedList",(function(){return u})),t(e.exports,"addToQueueList",(function(){return l}));var r=s("5rhw3");const i=t=>{const e=t.currentTarget.id;a("watchedList",c("watchedList").filter((t=>t!=parseInt(e))))},o=t=>{const e=t.currentTarget.id;a("queueList",c("queueList").filter((t=>t!=parseInt(e))))};function a(t,e){try{const n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}}function c(t){try{const e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}async function u(t){const e=document.querySelector(".add-btn__watched"),n=document.querySelector(".add-btn__queue");e.classList.toggle("disabl");const s=e.classList.contains("disabl");s?((t=>{const e=t.currentTarget.id,n=c("watchedList");n.push(parseInt(e)),a("watchedList",n)})(t),o(t)):i(t);const u=t.currentTarget.id,l=await r.default.getModifiedSingleMovie(u),h=c("moveList"),f=h.findIndex((t=>t.id===parseInt(u)));if(l.watched=s,l.queue=!1,s?(n.classList.remove("disabl"),n.innerHTML="add to queue",e.innerHTML="remove from watched"):e.innerHTML="add to watched",-1===f){const t=h;t.push(l),a("moveList",t)}else h[f]=l,a("moveList",h)}async function l(t){const e=document.querySelector(".add-btn__watched"),n=document.querySelector(".add-btn__queue");n.classList.toggle("disabl");const s=n.classList.contains("disabl");s?((t=>{const e=t.currentTarget.id,n=c("queueList");n.push(parseInt(e)),a("queueList",n)})(t),i(t)):o(t);const u=t.currentTarget.id,l=await r.default.getModifiedSingleMovie(u);console.log(l);const h=c("moveList"),f=h.findIndex((t=>t.id===parseInt(u)));if(l.watched=!1,l.queue=s,s?(e.classList.remove("disabl"),e.innerHTML="add to watched",n.innerHTML="remove from queue"):n.innerHTML="add to queue",-1===f){const t=h;t.push(l),a("moveList",t)}else h[f]=l,a("moveList",h)}})),s.register("5rhw3",(function(n,r){t(n.exports,"default",(function(){return o}));var i=s("2shzp");var o={async getPopularMovies(t){try{return(await e(i).get(`https://api.themoviedb.org/3/trending/movie/week?api_key=824846cd36adb0fb9eb759610f56d292&page=${t}`)).data}catch(t){console.error(t)}},async getSearchMovies(t,n){try{const{data:r}=await e(i).get(`https://api.themoviedb.org/3/search/movie?api_key=824846cd36adb0fb9eb759610f56d292&query=${n}&page=${t}`);return r}catch(t){console.error(t)}},async getMovieById(t){try{const{data:n}=await e(i).get(`https://api.themoviedb.org/3/movie/${t}?api_key=824846cd36adb0fb9eb759610f56d292`);return n}catch(t){console.error(t)}},async getGenres(){try{const{data:t}=await e(i).get("https://api.themoviedb.org/3/genre/movie/list?api_key=824846cd36adb0fb9eb759610f56d292");return t}catch(t){console.error(t)}},async getMovieTrailers(t){try{const{data:n}=await e(i).get(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=824846cd36adb0fb9eb759610f56d292`);return n.results}catch(t){console.error(t)}},async getModifiedMoviesList(t,e){try{let n;e||(n=await this.getPopularMovies(t)),e&&(n=await this.getSearchMovies(t,e));const r=window.sessionStorage&&window.sessionStorage.getItem("genres")?JSON.parse(window.sessionStorage.getItem("genres")):await this.getGenres();window.sessionStorage.getItem("genres")||sessionStorage.setItem("genres",JSON.stringify(r));const i=r.genres.reduce(((t,e)=>(t[e.id]=e.name,t)),{}),s=JSON.parse(localStorage.getItem("watchedList"))||[],o=JSON.parse(localStorage.getItem("queueList"))||[],a=await Promise.all(n.results.map((async t=>({...t,watched:!!s&&!!s.includes(t.id),queue:!!o&&!!o.includes(t.id),genre_ids:t.genre_ids.map((t=>i[t]))}))));return{...n,results:a}}catch(t){console.error(t)}},async getModifiedSingleMovie(t){try{const e=await this.getMovieById(t),n=JSON.parse(window.sessionStorage.getItem("genres")),r=JSON.parse(localStorage.getItem("watchedList"))||[],i=JSON.parse(localStorage.getItem("queueList"))||[],s=n.genres.reduce(((t,e)=>(t[e.id]=e.name,t)),{});return{...e,watched:!!r&&!!r.includes(e.id),queue:!!i&&!!i.includes(e.id),genres:e.genres.map((t=>s[t.id]))}}catch(t){console.error(t)}}}})),s.register("2shzp",(function(t,e){t.exports=s("bRlFp")})),s.register("bRlFp",(function(t,e){var n=s("2bBga"),r=s("djt5d"),i=s("6zSb1"),o=s("d0EKm");var a=function t(e){var s=new i(e),a=r(i.prototype.request,s);return n.extend(a,i.prototype,s),n.extend(a,s),a.create=function(n){return t(o(e,n))},a}(s("hqlPG"));a.Axios=i,a.CanceledError=s("83xK9"),a.CancelToken=s("2sjhC"),a.isCancel=s("ksuZT"),a.VERSION=s("50GW0").version,a.toFormData=s("aewVa"),a.AxiosError=s("121rJ"),a.Cancel=a.CanceledError,a.all=function(t){return Promise.all(t)},a.spread=s("av9gA"),a.isAxiosError=s("gNhGc"),t.exports=a,t.exports.default=a})),s.register("2bBga",(function(t,e){var n,r=s("djt5d"),i=Object.prototype.toString,o=(n=Object.create(null),function(t){var e=i.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())});function a(t){return t=t.toLowerCase(),function(e){return o(e)===t}}function c(t){return Array.isArray(t)}function u(t){return void 0===t}var l=a("ArrayBuffer");function h(t){return null!==t&&"object"==typeof t}function f(t){if("object"!==o(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var d=a("Date"),p=a("File"),g=a("Blob"),m=a("FileList");function y(t){return"[object Function]"===i.call(t)}var v=a("URLSearchParams");function w(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),c(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}var b,E=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(t){return b&&t instanceof b});t.exports={isArray:c,isArrayBuffer:l,isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){var e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||y(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&l(t.buffer)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:h,isPlainObject:f,isUndefined:u,isDate:d,isFile:p,isBlob:g,isFunction:y,isStream:function(t){return h(t)&&y(t.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:w,merge:function t(){var e={};function n(n,r){f(e[r])&&f(n)?e[r]=t(e[r],n):f(n)?e[r]=t({},n):c(n)?e[r]=n.slice():e[r]=n}for(var r=0,i=arguments.length;r<i;r++)w(arguments[r],n);return e},extend:function(t,e,n){return w(e,(function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)},toFlatObject:function(t,e,n){var r,i,s,o={};e=e||{};do{for(i=(r=Object.getOwnPropertyNames(t)).length;i-- >0;)o[s=r[i]]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:o,kindOfTest:a,endsWith:function(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return-1!==r&&r===n},toArray:function(t){if(!t)return null;var e=t.length;if(u(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n},isTypedArray:E,isFileList:m}})),s.register("djt5d",(function(t,e){t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}})),s.register("6zSb1",(function(t,e){var n=s("2bBga"),r=s("2RNjJ"),i=s("5Dm7L"),o=s("eQ5d8"),a=s("d0EKm"),c=s("1ZTQa"),u=s("6zj0X"),l=u.validators;function h(t){this.defaults=t,this.interceptors={request:new i,response:new i}}h.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)})),!i){var h=[o,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(c),s=Promise.resolve(e);h.length;)s=s.then(h.shift(),h.shift());return s}for(var f=e;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(t){p(t);break}}try{s=o(f)}catch(t){return Promise.reject(t)}for(;c.length;)s=s.then(c.shift(),c.shift());return s},h.prototype.getUri=function(t){t=a(this.defaults,t);var e=c(t.baseURL,t.url);return r(e,t.params,t.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(a(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)})),t.exports=h})),s.register("2RNjJ",(function(t,e){var n=s("2bBga");function r(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,i){if(!e)return t;var s;if(i)s=i(e);else if(n.isURLSearchParams(e))s=e.toString();else{var o=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),o.push(r(e)+"="+r(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}})),s.register("5Dm7L",(function(t,e){var n=s("2bBga");function r(){this.handlers=[]}r.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=r})),s.register("eQ5d8",(function(t,e){var n=s("2bBga"),r=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9");function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){return c(t),t.headers=t.headers||{},t.data=r.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||o.adapter)(t).then((function(e){return c(t),e.data=r.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=r.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}})),s.register("bhEpd",(function(t,e){var n=s("2bBga"),r=s("hqlPG");t.exports=function(t,e,i){var s=this||r;return n.forEach(i,(function(n){t=n.call(s,t,e)})),t}})),s.register("hqlPG",(function(t,e){var n=s("4TNnu"),r=s("2bBga"),i=s("i16eu"),o=s("121rJ"),a=s("2wfLM"),c=s("aewVa"),u={"Content-Type":"application/x-www-form-urlencoded"};function l(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var h,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=s("9VVcb")),h),transformRequest:[function(t,e){if(i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t))return t;if(r.isArrayBufferView(t))return t.buffer;if(r.isURLSearchParams(t))return l(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,s=r.isObject(t),o=e&&e["Content-Type"];if((n=r.isFileList(t))||s&&"multipart/form-data"===o){var a=this.env&&this.env.FormData;return c(n?{"files[]":t}:t,a&&new a)}return s||"application/json"===o?(l(e,"application/json"),function(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||f.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(s){if("SyntaxError"===t.name)throw o.from(t,o.ERR_BAD_RESPONSE,this,null,this.response);throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:s("1gvAv")},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){f.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){f.headers[t]=r.merge(u)})),t.exports=f})),s.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var c,u=[],l=!1,h=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&d())}function d(){if(!l){var t=a(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("i16eu",(function(t,e){var n=s("2bBga");t.exports=function(t,e){n.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}})),s.register("121rJ",(function(t,e){var n=s("2bBga");function r(t,e,n,r,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){o[t]={value:t}})),Object.defineProperties(r,o),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(t,e,s,o,a,c){var u=Object.create(i);return n.toFlatObject(t,u,(function(t){return t!==Error.prototype})),r.call(u,t.message,e,s,o,a),u.name=t.name,c&&Object.assign(u,c),u},t.exports=r})),s.register("2wfLM",(function(t,e){t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("aewVa",(function(t,e){var n=s("ihoyg").Buffer,r=s("2bBga");t.exports=function(t,e){e=e||new FormData;var i=[];function s(t){return null===t?"":r.isDate(t)?t.toISOString():r.isArrayBuffer(t)||r.isTypedArray(t)?"function"==typeof Blob?new Blob([t]):n.from(t):t}return function t(n,o){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+o);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var a,c=o?o+"."+i:i;if(n&&!o&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(t){!r.isUndefined(t)&&e.append(c,s(t))}));t(n,c)}})),i.pop()}else e.append(o,s(n))}(t),e}})),s.register("ihoyg",(function(e,n){var r,i;t(e.exports,"Buffer",(function(){return r}),(function(t){return r=t})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(t){return i=t}));var o=s("hqZtu"),a=s("5WQj6");const c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const u=2147483647;function l(t){if(t>u)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return f(t,e,n)}function f(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|v(t,e);let r=l(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){const e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return g(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer))return m(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return m(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return h.from(r,e,n);const i=function(t){if(h.isBuffer(t)){const e=0|y(t.length),n=l(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Z(t.length)?l(0):g(t);if("Buffer"===t.type&&Array.isArray(t.data))return g(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return d(t),l(t<0?0:0|y(t))}function g(t){const e=t.length<0?0:0|y(t.length),n=l(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function m(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,h.prototype),r}function y(t){if(t>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return 0|t}function v(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return X(t).length;default:if(i)return r?-1:Q(t).length;e=(""+e).toLowerCase(),i=!0}}function w(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,n);case"utf8":case"utf-8":return A(this,e,n);case"ascii":return L(this,e,n);case"latin1":case"binary":return D(this,e,n);case"base64":return k(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function b(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function E(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=h.from(e,r)),h.isBuffer(e))return 0===e.length?-1:T(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):T(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function T(t,e,n,r,i){let s,o=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(t,s+r)!==u(e,r)){n=!1;break}if(n)return s}return-1}function _(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Z(r))return o;t[n+o]=r}return o}function S(t,e,n,r){return Y(Q(e,t.length-n),t,n,r)}function I(t,e,n,r){return Y(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function x(t,e,n,r){return Y(X(e),t,n,r)}function C(t,e,n,r){return Y(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function k(t,e,n){return 0===e&&n===t.length?o.fromByteArray(t):o.fromByteArray(t.slice(e,n))}function A(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=N)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=N));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,n){return f(t,e,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,n){return function(t,e,n){return d(t),t<=0?l(t):void 0!==e?"string"==typeof n?l(t).fill(e,n):l(t).fill(e):l(t)}(t,e,n)},h.allocUnsafe=function(t){return p(t)},h.allocUnsafeSlow=function(t){return p(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype},h.compare=function(t,e){if(J(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=h.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(J(e,Uint8Array))i+e.length>r.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!h.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)b(this,e,e+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4);return this},h.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?A(this,0,t):w.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="";const e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},c&&(h.prototype[c]=h.prototype.inspect),h.prototype.compare=function(t,e,n,r,i){if(J(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==u[t]){s=c[t],o=u[t];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},h.prototype.indexOf=function(t,e,n){return E(this,t,e,n,!0)},h.prototype.lastIndexOf=function(t,e,n){return E(this,t,e,n,!1)},h.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return _(this,t,e,n);case"utf8":case"utf-8":return S(this,t,e,n);case"ascii":case"latin1":case"binary":return I(this,t,e,n);case"base64":return x(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const N=4096;function L(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function D(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function O(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=tt[t[r]];return i}function R(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function M(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function P(t,e,n,r,i,s){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function B(t,e,n,r,i){H(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function F(t,e,n,r,i){H(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function U(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function V(t,e,n,r,i){return e=+e,n>>>=0,i||U(t,0,n,4),a.write(t,e,n,r,23,4),n+4}function j(t,e,n,r,i){return e=+e,n>>>=0,i||U(t,0,n,8),a.write(t,e,n,r,52,8),n+8}h.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=et((function(t){G(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=et((function(t){G(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},h.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},h.prototype.readInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||M(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(t,e){t>>>=0,e||M(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=et((function(t){G(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),h.prototype.readBigInt64BE=et((function(t){G(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||M(t,4,this.length),a.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||M(t,4,this.length),a.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||M(t,8,this.length),a.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||M(t,8,this.length),a.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){P(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){P(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=et((function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=et((function(t,e=0){return F(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);P(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);P(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=et((function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=et((function(t,e=0){return F(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(t,e,n){return V(this,t,e,!0,n)},h.prototype.writeFloatBE=function(t,e,n){return V(this,t,e,!1,n)},h.prototype.writeDoubleLE=function(t,e,n){return j(this,t,e,!0,n)},h.prototype.writeDoubleBE=function(t,e,n){return j(this,t,e,!1,n)},h.prototype.copy=function(t,e,n,r){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},h.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=h.isBuffer(t)?t:h.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const q={};function $(t,e,n){q[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function z(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function H(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new q.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){G(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||K(e,t.length-(n+1))}(r,i,s)}function G(t,e){if("number"!=typeof t)throw new q.ERR_INVALID_ARG_TYPE(e,"number",t)}function K(t,e,n){if(Math.floor(t)!==t)throw G(t,n),new q.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=z(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=z(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function Q(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function X(t){return o.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Y(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const tt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function et(t){return"undefined"==typeof BigInt?nt:t}function nt(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(t){return r=t})),t(e.exports,"fromByteArray",(function(){return i}),(function(t){return i=t})),r=function(t){var e,n,r=h(t),i=r[0],s=r[1],c=new a(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),u=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)e=o[t.charCodeAt(n)]<<18|o[t.charCodeAt(n+1)]<<12|o[t.charCodeAt(n+2)]<<6|o[t.charCodeAt(n+3)],c[u++]=e>>16&255,c[u++]=e>>8&255,c[u++]=255&e;2===s&&(e=o[t.charCodeAt(n)]<<2|o[t.charCodeAt(n+1)]>>4,c[u++]=255&e);1===s&&(e=o[t.charCodeAt(n)]<<10|o[t.charCodeAt(n+1)]<<4|o[t.charCodeAt(n+2)]>>2,c[u++]=e>>8&255,c[u++]=255&e);return c},i=function(t){for(var e,n=t.length,r=n%3,i=[],o=16383,a=0,c=n-r;a<c;a+=o)i.push(f(t,a,a+o>c?c:a+o));1===r?(e=t[n-1],i.push(s[e>>2]+s[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(s[e>>10]+s[e>>4&63]+s[e<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,l=c.length;u<l;++u)s[u]=c[u],o[c.charCodeAt(u)]=u;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function f(t,e,n){for(var r,i,o=[],a=e;a<n;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),o.push(s[(i=r)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(t){return r=t})),t(e.exports,"write",(function(){return i}),(function(t){return i=t})),r=function(t,e,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=t[e+h];for(h+=f,s=d&(1<<-l)-1,d>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=f,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=f,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=u}return(d?-1:1)*o*Math.pow(2,s-r)},i=function(t,e,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?f/c:f*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*c-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+d]=255&o,d+=p,o/=256,u-=8);t[n+d-p]|=128*g}})),s.register("9VVcb",(function(t,e){var n=s("2bBga"),r=s("1TQad"),i=s("kTwUV"),o=s("2RNjJ"),a=s("1ZTQa"),c=s("9cPEm"),u=s("g3yOT"),l=s("2wfLM"),h=s("121rJ"),f=s("83xK9"),d=s("8wMQb");t.exports=function(t){return new Promise((function(e,s){var p,g=t.data,m=t.headers,y=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var w=new XMLHttpRequest;if(t.auth){var b=t.auth.username||"",E=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+E)}var T=a(t.baseURL,t.url);function _(){if(w){var n="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:n,config:t,request:w};r((function(t){e(t),v()}),(function(t){s(t),v()}),i),w=null}}if(w.open(t.method.toUpperCase(),o(T,t.params,t.paramsSerializer),!0),w.timeout=t.timeout,"onloadend"in w?w.onloadend=_:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(_)},w.onabort=function(){w&&(s(new h("Request aborted",h.ECONNABORTED,t,w)),w=null)},w.onerror=function(){s(new h("Network Error",h.ERR_NETWORK,t,w,w)),w=null},w.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||l;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),s(new h(e,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,w)),w=null},n.isStandardBrowserEnv()){var S=(t.withCredentials||u(T))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;S&&(m[t.xsrfHeaderName]=S)}"setRequestHeader"in w&&n.forEach(m,(function(t,e){void 0===g&&"content-type"===e.toLowerCase()?delete m[e]:w.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(w.withCredentials=!!t.withCredentials),y&&"json"!==y&&(w.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&w.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){w&&(s(!t||t&&t.type?new f:t),w.abort(),w=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),g||(g=null);var I=d(T);I&&-1===["http","https","file"].indexOf(I)?s(new h("Unsupported protocol "+I+":",h.ERR_BAD_REQUEST,t)):w.send(g)}))}})),s.register("1TQad",(function(t,e){var n=s("121rJ");t.exports=function(t,e,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?e(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}})),s.register("kTwUV",(function(t,e){var n=s("2bBga");t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,i,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(t,e){var n=s("iUwU6"),r=s("91vFE");t.exports=function(t,e){return t&&!n(e)?r(t,e):e}})),s.register("iUwU6",(function(t,e){t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}})),s.register("91vFE",(function(t,e){t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}})),s.register("9cPEm",(function(t,e){var n=s("2bBga"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,i,s,o={};return t?(n.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=n.trim(t.substr(0,s)).toLowerCase(),i=n.trim(t.substr(s+1)),e){if(o[e]&&r.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([i]):o[e]?o[e]+", "+i:i}})),o):o}})),s.register("g3yOT",(function(t,e){var n=s("2bBga");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=i(window.location.href),function(e){var r=n.isString(e)?i(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}})),s.register("83xK9",(function(t,e){var n=s("121rJ");function r(t){n.call(this,null==t?"canceled":t,n.ERR_CANCELED),this.name="CanceledError"}s("2bBga").inherits(r,n,{__CANCEL__:!0}),t.exports=r})),s.register("8wMQb",(function(t,e){t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}})),s.register("1gvAv",(function(t,e){t.exports=null})),s.register("ksuZT",(function(t,e){t.exports=function(t){return!(!t||!t.__CANCEL__)}})),s.register("d0EKm",(function(t,e){var n=s("2bBga");t.exports=function(t,e){e=e||{};var r={};function i(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function s(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:i(void 0,t[r]):i(t[r],e[r])}function o(t){if(!n.isUndefined(e[t]))return i(void 0,e[t])}function a(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:i(void 0,t[r]):i(void 0,e[r])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||s,i=e(t);n.isUndefined(i)&&e!==c||(r[t]=i)})),r}})),s.register("6zj0X",(function(t,e){var n=s("50GW0").version,r=s("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var o={};i.transitional=function(t,e,i){function s(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(i?". "+i:"")}return function(n,i,a){if(!1===t)throw new r(s(i," has been removed"+(e?" in "+e:"")),r.ERR_DEPRECATED);return e&&!o[i]&&(o[i]=!0,console.warn(s(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,a)}},t.exports={assertOptions:function(t,e,n){if("object"!=typeof t)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(t),s=i.length;s-- >0;){var o=i[s],a=e[o];if(a){var c=t[o],u=void 0===c||a(c,o,t);if(!0!==u)throw new r("option "+o+" must be "+u,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+o,r.ERR_BAD_OPTION)}},validators:i}})),s.register("50GW0",(function(t,e){t.exports={version:"0.27.2"}})),s.register("2sjhC",(function(t,e){var n=s("83xK9");function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;this.promise.then((function(t){if(r._listeners){var e,n=r._listeners.length;for(e=0;e<n;e++)r._listeners[e](t);r._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},r.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},r.source=function(){var t;return{token:new r((function(e){t=e})),cancel:t}},t.exports=r})),s.register("av9gA",(function(t,e){t.exports=function(t){return function(e){return t.apply(null,e)}}})),s.register("gNhGc",(function(t,e){var n=s("2bBga");t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}})),s.register("dzieU",(function(t,e){s("83ZX7");var n=s("5rhw3"),r=s("l7Vfm"),i=s("2iIDe"),o=(r=s("l7Vfm"),s("7BZMh"));s("ffjl9");const a={img:document.querySelector(".modal__preview-img"),backdrop:document.querySelector(".backdrop"),body:document.querySelector("body"),modal:document.querySelector(".modal"),modal:document.querySelector(".modal")};function c(t){"Escape"===t.code&&u(),document.removeEventListener("keydown",c)}function u(){(0,o.cardAddIcon)(),document.removeEventListener("keydown",c),a.backdrop.removeEventListener("click",l),a.backdrop.classList.add("isHidden"),a.body.classList.remove("scroll");const t=document.querySelector(".add-btn__watched"),e=document.querySelector(".add-btn__queue");t.removeEventListener("click",r.addToWatchedList),e.removeEventListener("click",r.addToQueueList),a.modal.innerHTML=""}function l(t){t.currentTarget===t.target&&u()}document.addEventListener("click",(function(t){(t.target.classList.contains("films__item")||t.target.closest(".films__item"))&&function(t){a.backdrop.addEventListener("click",l);const e=t.path.filter((t=>"LI"===t.nodeName))[0];(0,i.notiflixLoading)();const s=e.dataset.id;(function(t){(async function(t){const e=await n.default.getModifiedSingleMovie(t),{original_title:i,poster_path:s,vote_average:o,vote_count:c,popularity:u,overview:l,id:h,watched:f,queue:d,genres:p}=e;a.backdrop.classList.remove("isHidden");const g=f?"remove from watched":"add to watched",m=d?"remove from queue":"add to queue",y=`\n  <button class="modal__close-btn">\n    <svg class="modal__close-btn-svg" width="30" height="30">\n\n      <use href="/Filmoteka/symbol-defs.a103b832.svg#icon-close"></use>\n\n\n  </button>\n  <div class="modal__preview">\n    <img src="${function(t){const e="https://image.tmdb.org/t/p/w500",n="/Filmoteka/camera.29a7bb66.jpg";return t?e+t:n}(s)}" loading="lazy" class="modal__preview-img"/>\n  </div>\n  <div class="modal__discription">\n    <h2 class="discription__title">${i}</h2>\n    <ul class="discription__mvi">\n      <li class="mvi">\n        <p class="mvi__key">Vote / Votes</p>\n        <p class="mvi__val">\n          <span class="mvi__rait">${o.toFixed(2)}</span\n          ><span class="mvi__slash">/</span\n          ><span class="mvi__watch">${c}</span>\n        </p>\n      </li>\n      <li class="mvi">\n        <p class="mvi__key">Popularity</p>\n        <p class="mvi__val mvi__pop">${u.toFixed(1)}</p>\n      </li>\n      <li class="mvi">\n        <p class="mvi__key">Original Title</p>\n        <p class="mvi__val mvi__name">${i}</p>\n      </li>\n      <li class="mvi">\n        <p class="mvi__key">Genre</p>\n\n        <p class="mvi__val mvi__genre">${p.join(", ")}</p>\n\n      </li>\n    </ul>\n    <h3 class="discription__about">About</h3>\n    <p class="discription__about-text">${l}</p>\n    <div class="button">\n\n      <button class="button__add add-btn__watched" id=${h}>\n        ${g}\n      </button>\n      <button class="button__add add-btn__queue" id=${h}>\n\n        ${m}\n      </button>\n    </div>\n  </div>`;a.modal.insertAdjacentHTML("afterbegin",y);const v=document.querySelector(".add-btn__watched"),w=document.querySelector(".add-btn__queue"),b=f?"disabl":"y",E=d?"disabl":"y";v.classList.add(b),w.classList.add(E),v.addEventListener("click",r.addToWatchedList),w.addEventListener("click",r.addToQueueList)})(t),a.backdrop.classList.remove("isHidden"),a.body.classList.add("scroll"),document.addEventListener("keydown",c),(0,i.notiflixLoadingRemove)()})(s)}(t);(t.target.classList.contains("modal__close-btn")||t.target.closest(".modal__close-btn"))&&u()}))})),s.register("83ZX7",(function(e,n){t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"getDoc",(function(){return s("3PjDZ").getDoc})),t(e.exports,"doc",(function(){return s("3PjDZ").doc})),t(e.exports,"updateDoc",(function(){return s("3PjDZ").updateDoc})),t(e.exports,"arrayUnion",(function(){return s("3PjDZ").arrayUnion})),t(e.exports,"arrayRemove",(function(){return s("3PjDZ").arrayRemove})),t(e.exports,"setDoc",(function(){return s("3PjDZ").setDoc})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return Fs})),t(e.exports,"getFirestore",(function(){return js})),t(e.exports,"getDoc",(function(){return xo})),t(e.exports,"setDoc",(function(){return ko})),t(e.exports,"updateDoc",(function(){return Ao})),t(e.exports,"arrayUnion",(function(){return Do})),t(e.exports,"arrayRemove",(function(){return Oo}));var r=s("ix4Jr"),i=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),c=s("lW9Fu");s("4TNnu");const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new(0,o.Logger)("@firebase/firestore");function d(){return f.logLevel}function p(t,...e){if(f.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);f.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(f.logLevel<=o.LogLevel.ERROR){const n=e.map(y);f.error(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(f.logLevel<=o.LogLevel.WARN){const n=e.map(y);f.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||v()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(l.UNAUTHENTICATED)))}shutdown(){}}class x{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new l(t)}constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class C{constructor(t,e,n){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class k{getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class A{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.p=t.token,new A(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=L(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function O(t,e){return t<e?-1:t>e?1:0}function R(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static fromTimestamp(t){return new P(t)}static min(){return new P(new M(0,0))}static max(){return new P(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{get length(){return this.len}isEqual(t){return 0===B.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof B?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class F extends B{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new F(e)}static emptyPath(){return new F([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends B{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return U.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromPath(t){return new j(F.fromString(t))}static fromName(t){return new j(F.fromString(t).popFirst(5))}static empty(){return new j(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new F(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}q.UNKNOWN_ID=-1;function $(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new M(n+1,0):new M(n,r));return new H(i,j.empty(),e)}function z(t){return new H(t.readTime,t.key,-1)}class H{static min(){return new H(P.min(),j.empty(),-1)}static max(){return new H(P.max(),j.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function G(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=j.comparator(t.documentKey,e.documentKey),0!==n?n:O(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==K)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new X(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof X?e:X.resolve(e)}catch(t){return X.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):X.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):X.reject(e)}static resolve(t){return new X(((e,n)=>{e(t)}))}static reject(t){return new X(((e,n)=>{n(t)}))}static waitFor(t){return new X(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=X.resolve(!1);for(const n of t)e=e.next((t=>t?X.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new X(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new X(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J.ot=-1;class nt{insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rt(this.root,t,this.comparator,!1)}getReverseIterator(){return new rt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rt(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}}class rt{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class it{copy(t,e,n,r,i){return new it(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return it.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:it.RED,this.left=null!=r?r:it.EMPTY,this.right=null!=i?i:it.EMPTY,this.size=this.left.size+1+this.right.size}}it.EMPTY=null,it.RED=!0,it.BLACK=!1,it.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ot(this.data.getIterator())}getIteratorFrom(t){return new ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof st))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new nt(this.comparator)}}class ot{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{static empty(){return new at([])}unionWith(t){let e=new st(V.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return R(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(V.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{static fromBase64String(t){const e=atob(t);return new ut(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ut(e)}[ct](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ut.EMPTY_BYTE_STRING=new ut("");const lt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(w(!!t),"string"==typeof t){let e=0;const n=lt.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ft(t.seconds),nanos:ft(t.nanos)}}function ft(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function dt(t){return"string"==typeof t?ut.fromBase64String(t):ut.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gt(t){const e=t.mapValue.fields.__previous_value__;return pt(e)?gt(e):e}function mt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class vt{static empty(){return new vt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof vt&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return null==t}function bt(t){return 0===t&&1/t==-1/0}function Et(t){return"number"==typeof t&&Number.isInteger(t)&&!bt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _t(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pt(t)?4:Pt(t)?9007199254740991:10:v()}function St(t,e){if(t===e)return!0;const n=_t(t);if(n!==_t(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mt(t).isEqual(mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),r=ht(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,dt(t.bytesValue).isEqual(dt(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ft(t.geoPointValue.latitude)===ft(e.geoPointValue.latitude)&&ft(t.geoPointValue.longitude)===ft(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ft(t.integerValue)===ft(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ft(t.doubleValue),r=ft(e.doubleValue);return n===r?bt(n)===bt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return R(t.arrayValue.values||[],e.arrayValue.values||[],St);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Z(n)!==Z(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!St(n[t],r[t])))return!1;return!0}(t,e);default:return v()}var r}function It(t,e){return void 0!==(t.values||[]).find((t=>St(t,e)))}function xt(t,e){if(t===e)return 0;const n=_t(t),r=_t(e);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ft(t.integerValue||t.doubleValue),r=ft(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ct(t.timestampValue,e.timestampValue);case 4:return Ct(mt(t),mt(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(t,e){const n=dt(t),r=dt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=O(n[t],r[t]);if(0!==e)return e}return O(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=O(ft(t.latitude),ft(e.latitude));return 0!==n?n:O(ft(t.longitude),ft(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=xt(n[t],r[t]);if(e)return e}return O(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Tt.mapValue&&e===Tt.mapValue)return 0;if(t===Tt.mapValue)return 1;if(e===Tt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=O(r[t],s[t]);if(0!==e)return e;const o=xt(n[r[t]],i[s[t]]);if(0!==o)return o}return O(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Ct(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return O(t,e);const n=ht(t),r=ht(e),i=O(n.seconds,r.seconds);return 0!==i?i:O(n.nanos,r.nanos)}function kt(t){return At(t)}function At(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?dt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=At(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${At(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function Nt(t){return!!t&&"integerValue"in t}function Lt(t){return!!t&&"arrayValue"in t}function Dt(t){return!!t&&"nullValue"in t}function Ot(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rt(t){return!!t&&"mapValue"in t}function Mt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Mt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{static empty(){return new Bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Rt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mt(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Mt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Rt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Rt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){tt(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Bt(Mt(this.value))}constructor(t){this.value=t}}function Ft(t){const e=[];return tt(t.fields,((t,n)=>{const r=new V([t]);if(Rt(n)){const t=Ft(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new at(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ut{static newInvalidDocument(t){return new Ut(t,0,P.min(),P.min(),Bt.empty(),0)}static newFoundDocument(t,e,n){return new Ut(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new Ut(t,2,e,P.min(),Bt.empty(),0)}static newUnknownDocument(t,e){return new Ut(t,3,e,P.min(),Bt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function jt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Vt(t,e,n,r,i,s,o)}function qt(t){const e=b(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+kt(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),wt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>kt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>kt(t))).join(",")),e.ut=t}return e.ut}function $t(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ne(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!St(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ie(t.startAt,e.startAt)&&ie(t.endAt,e.endAt)}function zt(t){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ht extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Gt(t,e,n):"array-contains"===e?new Xt(t,n):"in"===e?new Yt(t,n):"not-in"===e?new Jt(t,n):"array-contains-any"===e?new Zt(t,n):new Ht(t,e,n)}static ct(t,e,n){return"in"===e?new Kt(t,n):new Wt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(xt(e,this.value)):null!==e&&_t(this.value)===_t(e)&&this.at(xt(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Gt extends Ht{matches(t){const e=j.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=j.fromName(n.referenceValue)}}class Kt extends Ht{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Qt("in",e)}}class Wt extends Ht{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Qt("not-in",e)}}function Qt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>j.fromName(t.referenceValue)))}class Xt extends Ht{matches(t){const e=t.data.field(this.field);return Lt(e)&&It(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Yt extends Ht{matches(t){const e=t.data.field(this.field);return null!==e&&It(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Jt extends Ht{matches(t){if(It(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!It(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Zt extends Ht{matches(t){const e=t.data.field(this.field);return!(!Lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>It(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class te{constructor(t,e){this.position=t,this.inclusive=e}}class ee{constructor(t,e="asc"){this.field=t,this.dir=e}}function ne(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function re(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?j.comparator(j.fromName(o.referenceValue),n.key):xt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ie(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!St(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function oe(t,e,n,r,i,s,o,a){return new se(t,e,n,r,i,s,o,a)}function ae(t){return new se(t)}function ce(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ue(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function le(t){for(const e of t.filters)if(e.ht())return e.field;return null}function he(t){return null!==t.collectionGroup}function fe(t){const e=b(t);if(null===e.lt){e.lt=[];const t=le(e),n=ue(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ee(t)),e.lt.push(new ee(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ee(V.keyField(),t))}}}return e.lt}function de(t){const e=b(t);if(!e.ft)if("F"===e.limitType)e.ft=jt(e.path,e.collectionGroup,fe(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of fe(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ee(n.field,e))}const n=e.endAt?new te(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new te(e.startAt.position,e.startAt.inclusive):null;e.ft=jt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function pe(t,e,n){return new se(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ge(t,e){return $t(de(t),de(e))&&t.limitType===e.limitType}function me(t){return`${qt(de(t))}|lt:${t.limitType}`}function ye(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${kt(e.value)}`})).join(", ")}]`),wt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>kt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>kt(t))).join(",")),`Target(${e})`}(de(t))}; limitType=${t.limitType})`}function ve(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):j.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=re(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,fe(n),r)||n.endAt&&!function(t,e,n){const r=re(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,fe(n),r)));var n,r}function we(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function be(t){return(e,n)=>{let r=!1;for(const i of fe(t)){const t=Ee(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ee(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?xt(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bt(e)?"-0":e}}function _e(t){return{integerValue:""+t}}function Se(t,e){return Et(e)?_e(e):Te(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(){this._=void 0}}function xe(t,e,n){return t instanceof Ae?Ne(t,e):t instanceof Le?De(t,e):n}function Ce(t,e){var n,r;return t instanceof Oe?Nt(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class ke extends Ie{}class Ae extends Ie{constructor(t){super(),this.elements=t}}function Ne(t,e){const n=Me(e);for(const e of t.elements)n.some((t=>St(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Le extends Ie{constructor(t){super(),this.elements=t}}function De(t,e){let n=Me(e);for(const e of t.elements)n=n.filter((t=>!St(t,e)));return{arrayValue:{values:n}}}class Oe extends Ie{constructor(t,e){super(),this.wt=t,this._t=e}}function Re(t){return ft(t.integerValue||t.doubleValue)}function Me(t){return Lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.field=t,this.transform=e}}class Be{constructor(t,e){this.version=t,this.transformResults=e}}class Fe{static none(){return new Fe}static exists(t){return new Fe(void 0,t)}static updateTime(t){return new Fe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Ue(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ve{}function je(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ye(t.key,Fe.none()):new Ge(t.key,t.data,Fe.none());{const n=t.data,r=Bt.empty();let i=new st(V.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Ke(t.key,r,new at(i.toArray()),Fe.none())}}function qe(t,e,n){var r;t instanceof Ge?function(t,e,n){const r=t.value.clone(),i=Qe(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ke?function(t,e,n){if(!Ue(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Qe(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(We(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function $e(t,e,n,r){return t instanceof Ge?function(t,e,n,r){if(!Ue(t.precondition,e))return n;const i=t.value.clone(),s=Xe(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ke?function(t,e,n,r){if(!Ue(t.precondition,e))return n;const i=Xe(t.fieldTransforms,r,e),s=e.data;return s.setAll(We(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,Ue(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function ze(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ce(r.transform,t||null);null!=i&&(null===n&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function He(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&R(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Ae&&r instanceof Ae||n instanceof Le&&r instanceof Le?R(n.elements,r.elements,St):n instanceof Oe&&r instanceof Oe?St(n._t,r._t):n instanceof ke&&r instanceof ke);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class Ge extends Ve{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ke extends Ve{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function We(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Qe(t,e,n){const r=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,xe(o,a,n[i]))}return r}function Xe(t,e,n){const r=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=e,(i=t)instanceof ke?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof Ae?Ne(i,s):i instanceof Le?De(i,s):function(t,e){const n=Ce(t,e),r=Re(n)+Re(t._t);return Nt(n)&&Nt(t._t)?_e(r):Te(t.wt,r)}(i,s)))}var i,s,o;return r}class Ye extends Ve{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Je extends Ve{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn,en;function nn(t){switch(t){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function rn(t){if(void 0===t)return g("GRPC error has no .code"),E.UNKNOWN;switch(t){case tn.OK:return E.OK;case tn.CANCELLED:return E.CANCELLED;case tn.UNKNOWN:return E.UNKNOWN;case tn.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case tn.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case tn.INTERNAL:return E.INTERNAL;case tn.UNAVAILABLE:return E.UNAVAILABLE;case tn.UNAUTHENTICATED:return E.UNAUTHENTICATED;case tn.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case tn.NOT_FOUND:return E.NOT_FOUND;case tn.ALREADY_EXISTS:return E.ALREADY_EXISTS;case tn.PERMISSION_DENIED:return E.PERMISSION_DENIED;case tn.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case tn.ABORTED:return E.ABORTED;case tn.OUT_OF_RANGE:return E.OUT_OF_RANGE;case tn.UNIMPLEMENTED:return E.UNIMPLEMENTED;case tn.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(en=tn||(tn={}))[en.OK=0]="OK",en[en.CANCELLED=1]="CANCELLED",en[en.UNKNOWN=2]="UNKNOWN",en[en.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",en[en.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",en[en.NOT_FOUND=5]="NOT_FOUND",en[en.ALREADY_EXISTS=6]="ALREADY_EXISTS",en[en.PERMISSION_DENIED=7]="PERMISSION_DENIED",en[en.UNAUTHENTICATED=16]="UNAUTHENTICATED",en[en.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",en[en.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",en[en.ABORTED=10]="ABORTED",en[en.OUT_OF_RANGE=11]="OUT_OF_RANGE",en[en.UNIMPLEMENTED=12]="UNIMPLEMENTED",en[en.INTERNAL=13]="INTERNAL",en[en.UNAVAILABLE=14]="UNAVAILABLE",en[en.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return et(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new nt(j.comparator);function an(){return on}const cn=new nt(j.comparator);function un(...t){let e=cn;for(const n of t)e=e.insert(n.key,n);return e}function ln(t){let e=cn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function hn(){return dn()}function fn(){return dn()}function dn(){return new sn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const pn=new nt(j.comparator),gn=new st(j.comparator);function mn(...t){let e=gn;for(const n of t)e=e.add(n);return e}const yn=new st(O);function vn(){return yn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e)),new wn(P.min(),n,vn(),an(),mn())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class bn{static createSynthesizedTargetChangeForCurrentChange(t,e){return new bn(ut.EMPTY_BYTE_STRING,e,mn(),mn(),mn())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class Tn{constructor(t,e){this.targetId=t,this.It=e}}class _n{constructor(t,e,n=ut.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Sn{get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=mn(),e=mn(),n=mn();return this.Et.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}})),new bn(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Cn()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}constructor(){this.Tt=0,this.Et=Cn(),this.At=ut.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}}class In{Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Mt(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(zt(t))if(0===n){const n=new j(t.path);this.Kt(e,n,Ut.newNoDocument(n,P.min()))}else w(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&zt(i.target)){const e=new j(i.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,Ut.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=mn();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new wn(t,e,this.Lt,this.$t,n);return this.$t=an(),this.Bt=xn(),this.Lt=new st(O),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Ot.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Sn,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new st(O),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Ot.te(t)}Wt(t){this.Ft.set(t,new Sn),this.Ot.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Ot.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Ot=t,this.Ft=new Map,this.$t=an(),this.Bt=xn(),this.Lt=new st(O)}}function xn(){return new nt(j.comparator)}function Cn(){return new nt(j.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={asc:"ASCENDING",desc:"DESCENDING"},An={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Nn{constructor(t,e){this.databaseId=t,this.dt=e}}function Ln(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dn(t,e){return t.dt?e.toBase64():e.toUint8Array()}function On(t,e){return Ln(t,e.toTimestamp())}function Rn(t){return w(!!t),P.fromTimestamp(function(t){const e=ht(t);return new M(e.seconds,e.nanos)}(t))}function Mn(t,e){return(n=t,new F(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Pn(t){const e=F.fromString(t);return w(er(e)),e}function Bn(t,e){return Mn(t.databaseId,e.path)}function Fn(t,e){const n=Pn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(qn(n))}function Un(t,e){return Mn(t.databaseId,e)}function Vn(t){const e=Pn(t);return 4===e.length?F.emptyPath():qn(e)}function jn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $n(t,e,n){return{name:Bn(t,e),fields:n.value.mapValue.fields}}function zn(t,e){let n;if(e instanceof Ge)n={update:$n(t,e.key,e.value)};else if(e instanceof Ye)n={delete:Bn(t,e.key)};else if(e instanceof Ke)n={update:$n(t,e.key,e.data),updateMask:tr(e.fieldMask)};else{if(!(e instanceof Je))return v();n={verify:Bn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ke)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ae)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Le)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Oe)return{fieldPath:e.field.canonicalString(),increment:n._t};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:On(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var r,i}function Hn(t,e){return{documents:[Un(t,e.path)]}}function Gn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Un(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Un(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ot(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ot(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:Xn(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Yn((e=t).field),direction:Qn(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.dt||wt(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Kn(t){let e=Vn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Wn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new ee(Jn((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,wt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new te(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new te(n,e)}(n.endAt)),oe(e,i,o,s,a,"F",c,u)}function Wn(t){return t?void 0!==t.unaryFilter?[Zn(t)]:void 0!==t.fieldFilter?[(e=t,Ht.create(Jn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Wn(t))).reduce(((t,e)=>t.concat(e))):v():[];var e}function Qn(t){return kn[t]}function Xn(t){return An[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function Jn(t){return V.fromServerFormat(t.fieldPath)}function Zn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jn(t.unaryFilter.field);return Ht.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jn(t.unaryFilter.field);return Ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jn(t.unaryFilter.field);return Ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jn(t.unaryFilter.field);return Ht.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function tr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function er(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ir=rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&qe(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=$e(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=$e(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fn();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=je(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(P.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),mn())}isEqual(t){return this.batchId===t.batchId&&R(this.mutations,t.mutations,((t,e)=>He(t,e)))&&R(this.baseMutations,t.baseMutations,((t,e)=>He(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class or{static from(t,e,n){w(t.mutations.length===n.length);let r=pn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new or(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{withSequenceNumber(t){return new cr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,r,i=P.min(),s=P.min(),o=ut.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.ne=t}}function lr(t){const e=Kn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?pe(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(ft(t.integerValue));else if("doubleValue"in t){const n=ft(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),bt(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(dt(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Pt(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):v()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),j.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}hr.ye=new hr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{addToCollectionParentIndex(t,e){return this.ze.add(e),X.resolve()}getCollectionParents(t,e){return X.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return X.resolve()}deleteFieldIndex(t,e){return X.resolve()}getDocumentsMatchingTarget(t,e){return X.resolve(null)}getIndexType(t,e){return X.resolve(0)}getFieldIndexes(t,e){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,e){return X.resolve(H.min())}getMinOffsetFromCollectionGroup(t,e){return X.resolve(H.min())}updateCollectionGroup(t,e,n){return X.resolve()}updateIndexEntries(t,e){return X.resolve()}constructor(){this.ze=new dr}}class dr{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new st(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new st(F.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class pr{static withCacheSize(t){return new pr(t,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr.DEFAULT_COLLECTION_PERCENTILE=10,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pr.DEFAULT=new pr(41943040,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pr.DISABLED=new pr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{next(){return this.En+=2,this.En}static An(){return new gr(0)}static Rn(){return new gr(-1)}constructor(t){this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?X.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new sn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&$e(n.mutation,t,at.empty(),M.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,mn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=mn()){const r=hn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=un();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=hn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,mn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=an();const s=dn(),o=dn();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ke)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),$e(o.mutation,e,o.mutation.getFieldMask(),M.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new yr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=dn();let r=new nt(((t,e)=>t-e)),i=mn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||at.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||mn()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=fn();c.forEach((t=>{if(!i.has(t)){const r=je(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return X.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,j.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):he(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):X.resolve(hn());let o=-1,a=i;return s.next((e=>X.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?X.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,mn()))).next((t=>({batchId:o,changes:ln(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next((t=>{let e=un();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=un();return this.indexManager.getCollectionParents(t,r).next((s=>X.forEach(s,(s=>{const o=(a=e,c=s.child(r),new se(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Ut.newInvalidDocument(n)))}));let n=un();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&$e(s.mutation,i,at.empty(),M.now()),ve(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):X.resolve(Ut.newInvalidDocument(e))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{getBundleMetadata(t,e){return X.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Rn(n.createTime)}),X.resolve()}getNamedQuery(t,e){return X.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:lr(n.bundledQuery),readTime:Rn(n.readTime)}),X.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{getOverlay(t,e){return X.resolve(this.overlays.get(e))}getOverlays(t,e){const n=hn();return X.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),X.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),X.resolve()}getOverlaysForCollection(t,e,n){const r=hn(),i=e.length+1,s=new j(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return X.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new nt(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=hn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=hn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return X.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ar(e,n));let i=this.Xn.get(e);void 0===i&&(i=mn(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}constructor(){this.overlays=new nt(j.comparator),this.Xn=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Tr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Tr(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new j(new F([])),n=new Tr(e,t),r=new Tr(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new j(new F([])),n=new Tr(e,t),r=new Tr(e,t+1);let i=mn();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Tr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new st(Tr.ts),this.es=new st(Tr.ns)}}class Tr{static ts(t,e){return j.comparator(t.key,e.key)||O(t.ls,e.ls)}static ns(t,e){return O(t.ls,e.ls)||j.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{checkEmpty(t){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new sr(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.ds=this.ds.add(new Tr(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return X.resolve(s)}lookupMutationBatch(t,e){return X.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return X.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Tr(e,0),r=new Tr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);i.push(e)})),X.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(O);return e.forEach((t=>{const e=new Tr(t,0),r=new Tr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),X.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;j.isDocumentKey(i)||(i=i.child(""));const s=new Tr(new j(i),0);let o=new st(O);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),X.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return X.forEach(e.mutations,(r=>{const i=new Tr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Tr(e,0),r=this.ds.firstAfterOrEqual(n);return X.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new st(Tr.ts)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return X.resolve(n?n.document.mutableCopy():Ut.newInvalidDocument(e))}getEntries(t,e){let n=an();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ut.newInvalidDocument(t))})),X.resolve(n)}getAllFromCollection(t,e,n){let r=an();const i=new j(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||G(z(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return X.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}Is(t,e){return X.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ir(this)}getSize(t){return X.resolve(this.size)}constructor(t){this.ps=t,this.docs=new nt(j.comparator),this.size=0}}class Ir extends mr{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),X.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),X.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new gr(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,X.resolve()}updateTargetData(t,e){return this.vn(e),X.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),X.waitFor(i).next((()=>r))}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return X.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),X.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),X.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),X.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return X.resolve(n)}containsKey(t,e){return X.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new sn((t=>qt(t)),$t),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Es=0,this.As=new Er,this.targetCount=0,this.Rs=gr.An()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new br,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new _r(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new kr(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return X.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new J(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new xr(this),this.indexManager=new fr,this.remoteDocumentCache=new Sr((t=>this.referenceDelegate.Ss(t))),this.wt=new ur(e),this.Ds=new wr(this.wt)}}class kr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Ar{static Os(t){return new Ar(t)}get Fs(){if(this.Ms)return this.Ms;throw v()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),X.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),X.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),X.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Ms=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Fs,(n=>{const r=j.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,P.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return X.or([()=>X.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new Er,this.Ms=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{static Vi(t,e){let n=mn(),r=mn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Nr(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((i=>i||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){if(ce(e))return X.resolve(null);let n=de(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=pe(e,null,"F"),n=de(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=mn(...r);return this.Di.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ki(e,r);return this.Mi(e,s,i,n.readTime)?this.Ci(t,pe(e,null,"F")):this.Oi(t,s,e,n)}))))})))))}xi(t,e,n,r){return ce(e)||r.isEqual(P.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const s=this.ki(e,i);return this.Mi(e,s,n,r)?this.Ni(t,e):(d()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ye(e)),this.Oi(t,s,e,$(r,-1)))}))}ki(t,e){let n=new st(be(t));return e.forEach(((e,r)=>{ve(t,r)&&(n=n.add(r))})),n}Mi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return d()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ye(e)),this.Di.getDocumentsMatchingQuery(t,e,H.min())}Oi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vr(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new nt(O),this.Bi=new sn((t=>qt(t)),$t),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function Or(t,e,n,r){return new Dr(t,e,n,r)}async function Rr(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=mn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Mr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Pr(t,e,n){let r=mn(),i=mn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=an();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function Br(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Fr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((i=>i?(r=i,X.resolve(r)):n.Vs.allocateTargetId(t).next((i=>(r=new cr(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Ur(t,e,n){const r=b(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Y(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Vr(t,e,n){const r=b(t);let i=P.min(),s=mn();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=b(t),i=r.Bi.get(n);return void 0!==i?X.resolve(r.$i.get(i)):r.Vs.getTargetData(e,n)}(r,t,de(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?i:P.min(),n?s:mn()))).next((t=>(jr(r,we(e),t),{documents:t,ji:s})))))}function jr(t,e,n){let r=P.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class qr{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=vn()}}class $r{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new qr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new qr,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends class{ro(t,e,n,r,i){const s=this.oo(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,r,i,s){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Gr[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,r){return new Promise(((i,s)=>{const o=new(0,c.XhrIo);o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case c.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);s(new T(e,t.message))}else s(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=(0,c.createWebChannelTransport)(),s=(0,c.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.uo(o.initMessageHeaders,e,n),(0,a.isMobileCordova)()||(0,a.isReactNative)()||(0,a.isElectron)()||(0,a.isIE)()||(0,a.isUWP)()||(0,a.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,o);const l=i.createWebChannel(u,o);let h=!1,f=!1;const d=new Kr({jr:t=>{f?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(l,c.WebChannel.EventType.OPEN,(()=>{f||p("Connection","WebChannel transport opened.")})),g(l,c.WebChannel.EventType.CLOSE,(()=>{f||(f=!0,p("Connection","WebChannel transport closed"),d.eo())})),g(l,c.WebChannel.EventType.ERROR,(t=>{f||(f=!0,m("Connection","WebChannel transport errored:",t),d.eo(new T(E.UNAVAILABLE,"The operation could not be completed")))})),g(l,c.WebChannel.EventType.MESSAGE,(t=>{var e;if(!f){const n=t.data[0];w(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=tn[t];if(void 0!==e)return rn(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),f=!0,d.eo(new T(e,n)),l.close()}else p("Connection","WebChannel received:",n),d.no(n)}})),g(s,c.Event.STAT_EVENT,(t=>{t.stat===c.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===c.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return new Nn(t,!0)}class Yr{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Yr(t,e)}}class Zr extends Jr{Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.dt?(w(void 0===e||"string"==typeof e),ut.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),ut.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?E.UNKNOWN:rn(t.code);return new T(e,t.message||"")}(a);n=new _n(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(t,r.document.name),s=Rn(r.document.updateTime),o=new Bt({mapValue:{fields:r.document.fields}}),a=Ut.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new En(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(t,r.document),s=r.readTime?Rn(r.readTime):P.min(),o=Ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new En([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(t,r.document),s=r.removedTargetIds||[];n=new En([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ze(r),s=t.targetId;n=new Tn(s,i)}}var r;return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?Rn(e.readTime):P.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=jn(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=zt(r)?{documents:Hn(t,r)}:{query:Gn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Dn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=Ln(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=jn(this.wt),e.removeTarget=t,this.Oo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.wt=i}}class ti extends Jr{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Rn(t.updateTime):Rn(e);return n.isEqual(P.min())&&(n=Rn(e)),new Be(n,t.transformResults||[])}(t,n)))):[]),i=Rn(t.commitTime);return this.listener.Jo(i,r)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=jn(this.wt),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>zn(this.wt,t)))};this.Oo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends class{}{tu(){if(this.Zo)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}}class ni{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(g(e),this.su=!1):p("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{fi(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.lu.add(4),await si(e),e._u.set("Unknown"),e.lu.delete(4),await ii(e)}(this))}))})),this._u=new ni(n,r)}}async function ii(t){if(fi(t))for(const e of t.fu)await e(!0)}async function si(t){for(const e of t.fu)await e(!1)}function oi(t,e){const n=b(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),hi(n)?li(n):Ni(n).Co()&&ci(n,e))}function ai(t,e){const n=b(t),r=Ni(n);n.hu.delete(e),r.Co()&&ui(n,e),0===n.hu.size&&(r.Co()?r.ko():fi(n)&&n._u.set("Unknown"))}function ci(t,e){t.wu.Nt(e.targetId),Ni(t).Qo(e)}function ui(t,e){t.wu.Nt(e),Ni(t).jo(e)}function li(t){t.wu=new In({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Ni(t).start(),t._u.iu()}function hi(t){return fi(t)&&!Ni(t).Do()&&t.hu.size>0}function fi(t){return 0===b(t).lu.size}function di(t){t.wu=void 0}async function pi(t){t.hu.forEach(((e,n)=>{ci(t,e)}))}async function gi(t,e){di(t),hi(t)?(t._u.uu(e),li(t)):t._u.set("Unknown")}async function mi(t,e,n){if(t._u.set("Online"),e instanceof _n&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await yi(t,n)}else if(e instanceof En?t.wu.Ut(e):e instanceof Tn?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(P.min()))try{const e=await Mr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ut.EMPTY_BYTE_STRING,n.snapshotVersion)),ui(t,e);const r=new cr(n.target,e,1,n.sequenceNumber);ci(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await yi(t,e)}}async function yi(t,e,n){if(!Y(e))throw e;t.lu.add(1),await si(t),t._u.set("Offline"),n||(n=()=>Mr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ii(t)}))}function vi(t,e){return e().catch((n=>yi(t,n,e)))}async function wi(t){const e=b(t),n=Li(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;bi(e);)try{const t=await Br(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,Ei(e,t)}catch(t){await yi(e,t)}Ti(e)&&_i(e)}function bi(t){return fi(t)&&t.au.length<10}function Ei(t,e){t.au.push(e);const n=Li(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Ti(t){return fi(t)&&!Li(t).Do()&&t.au.length>0}function _i(t){Li(t).start()}async function Si(t){Li(t).Xo()}async function Ii(t){const e=Li(t);for(const n of t.au)e.Ho(n.mutations)}async function xi(t,e,n){const r=t.au.shift(),i=or.from(r,e,n);await vi(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await wi(t)}async function Ci(t,e){e&&Li(t).zo&&await async function(t,e){if(nn(n=e.code)&&n!==E.ABORTED){const n=t.au.shift();Li(t).No(),await vi(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await wi(t)}var n}(t,e),Ti(t)&&_i(t)}async function ki(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.lu.add(3),await si(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ii(n)}async function Ai(t,e){const n=b(t);e?(n.lu.delete(2),await ii(n)):e||(n.lu.add(2),await si(n),n._u.set("Unknown"))}function Ni(t){return t.mu||(t.mu=function(t,e,n){const r=b(t);return r.tu(),new Zr(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:pi.bind(null,t),Jr:gi.bind(null,t),Go:mi.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),hi(t)?li(t):t._u.set("Unknown")):(await t.mu.stop(),di(t))}))),t.mu}function Li(t){return t.gu||(t.gu=function(t,e,n){const r=b(t);return r.tu(),new ti(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Si.bind(null,t),Jr:Ci.bind(null,t),Yo:Ii.bind(null,t),Jo:xi.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await wi(t)):(await t.gu.stop(),t.au.length>0&&(p("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Di{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Di(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Oi(t,e){if(g("AsyncQueue",`${e}: ${t}`),Y(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{static emptySet(t){return new Ri(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ri))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ri;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||j.comparator(e.key,n.key):(t,e)=>j.comparator(t.key,e.key),this.keyedMap=un(),this.sortedSet=new nt(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):v():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.yu=new nt(j.comparator)}}class Pi{static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Pi(t,e,Ri.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ge(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Iu=void 0,this.listeners=[]}}class Fi{constructor(){this.queries=new sn((t=>me(t)),ge),this.onlineState="Unknown",this.Tu=new Set}}async function Ui(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bi),i)try{s.Iu=await n.onListen(r)}catch(t){const n=Oi(t,`Initialization of query '${ye(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&$i(n)}async function Vi(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ji(t,e){const n=b(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Au(t)&&(r=!0);i.Iu=t}}r&&$i(n)}function qi(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function $i(t){t.Tu.forEach((t=>{t.next()}))}class zi{Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Pi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Pi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(t){this.key=t}}class Gi{constructor(t){this.key=t}}class Ki{get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Mi,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=ve(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Mi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Pi(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Mi,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=mn(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Gi(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Hi(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=mn();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Pi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=mn(),this.mutatedKeys=mn(),this.Lu=be(t),this.Uu=new Ri(this.Lu)}}class Wi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qi{constructor(t){this.key=t,this.Xu=!1}}class Xi{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new sn((t=>me(t)),ge),this.ec=new Map,this.nc=new Set,this.sc=new nt(j.comparator),this.ic=new Map,this.rc=new Er,this.oc={},this.uc=new Map,this.cc=gr.Rn(),this.onlineState="Unknown",this.ac=void 0}}async function Yi(t,e){const n=gs(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await Fr(n.localStore,de(e));n.isPrimaryClient&&oi(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ji(n,e,r,"current"===s)}return i}async function Ji(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ku(n);i.Mi&&(i=await Vr(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return us(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const i=await Vr(t.localStore,e,!0),s=new Ki(e,i.ji),o=s.Ku(i.documents),a=bn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);us(t,n,c.zu);const u=new Wi(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Zi(t,e){const n=b(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((t=>!ge(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ur(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ai(n.remoteStore,r.targetId),as(n,r.targetId)})).catch(Q)):(as(n,r.targetId),await Ur(n.localStore,r.targetId,!0))}async function ts(t,e){const n=b(t);try{const t=await function(t,e){const n=b(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var l,h,f;e.targetMismatches.has(a)?u=u.withResumeToken(ut.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,f=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0)&&o.push(n.Vs.updateTargetData(t,u))}));let a=an(),c=mn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Pr(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(P.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return X.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?w(r.Xu):t.removedDocuments.size>0&&(w(r.Xu),r.Xu=!1))})),await fs(n,t,e)}catch(t){await Q(t)}}function es(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(r=!0)})),r&&$i(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ns(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let t=new nt(j.comparator);t=t.insert(s,Ut.newNoDocument(s,P.min()));const n=mn().add(s),i=new wn(P.min(),new Map,new st(O),t,n);await ts(r,i),r.sc=r.sc.remove(s),r.ic.delete(e),hs(r)}else await Ur(r.localStore,e,!1).then((()=>as(r,e,n))).catch(Q)}async function rs(t,e){const n=b(t),r=e.batch.batchId;try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=X.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=mn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);os(n,r,null),ss(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fs(n,t)}catch(t){await Q(t)}}async function is(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(w(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);os(r,e,n),ss(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fs(r,t)}catch(t){await Q(t)}}function ss(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function os(t,e,n){const r=b(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function as(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||cs(t,e)}))}function cs(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(ai(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),hs(t))}function us(t,e,n){for(const r of n)r instanceof Hi?(t.rc.addReference(r.key,e),ls(t,r)):r instanceof Gi?(p("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||cs(t,r.key)):v()}function ls(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(p("SyncEngine","New document in limbo: "+n),t.nc.add(r),hs(t))}function hs(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new j(F.fromString(e)),r=t.cc.next();t.ic.set(r,new Qi(n)),t.sc=t.sc.insert(n,r),oi(t.remoteStore,new cr(de(ae(n.path)),r,2,J.ot))}}async function fs(t,e,n){const r=b(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Nr.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>X.forEach(e,(e=>X.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>X.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Y(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,i)}}}(r.localStore,s))}async function ds(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Rr(n.localStore,e);n.currentUser=e,(r=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await fs(n,t.Ki)}var r}function ps(t,e){const n=b(t),r=n.ic.get(e);if(r&&r.Xu)return mn().add(r.key);{let t=mn();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function gs(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ts.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ps.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ns.bind(null,e),e.Zu.Go=ji.bind(null,e.eventManager),e.Zu.lc=qi.bind(null,e.eventManager),e}function ms(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rs.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=is.bind(null,e),e}class ys{async initialize(t){this.wt=Xr(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Or(this.persistence,new Lr,t.initialUser,this.wt)}_c(t){return new Cr(Ar.Os,this.wt)}dc(t){return new $r}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>es(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ds.bind(null,this.syncEngine),await Ai(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Fi}createDatastore(t){const e=Xr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Wr(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new ei(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>es(this.syncEngine,t,0),s=Hr.V()?new Hr:new zr,new ri(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Xi(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);p("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await si(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):g("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Oi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=l.UNAUTHENTICATED,this.clientId=D.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Es(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Rr(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Ts(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _s(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ki(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ki(e.remoteStore,n))),t.onlineComponents=e}async function _s(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Es(t,new ys)),t.offlineComponents}async function Ss(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ts(t,new vs)),t.onlineComponents}function Is(t){return Ss(t).then((t=>t.syncEngine))}async function xs(t){const e=await Ss(t),n=e.eventManager;return n.onListen=Yi.bind(null,e.syncEngine),n.onUnlisten=Zi.bind(null,e.syncEngine),n}function Cs(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new ws({next:s=>{e.enqueueAndForget((()=>Vi(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new zi(ae(n.path),s,{includeMetadataChanges:!0,Du:!0});return Ui(t,o)}(await xs(t),t.asyncQueue,e,n,r))),r.promise}const ks=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ns(t){if(!j.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ls(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Ds(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ls(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Os(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new I;switch(t.type){case"gapi":const e=t.client;return w(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new k(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ks.get(t);e&&(p("ComponentProvider","Removing Datastore"),ks.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Os({}),this._settingsFrozen=!1,t instanceof vt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vt(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ms(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ps{withConverter(t){return new Ps(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Bs extends Ps{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ms(this.firestore,null,new j(t))}withConverter(t){return new Bs(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ae(n)),this._path=n,this.type="collection"}}function Fs(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=D.I()),As("doc","path",e),t instanceof Rs){const r=F.fromString(e,...n);return Ns(r),new Ms(t,null,new j(r))}{if(!(t instanceof Ms||t instanceof Bs))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Ns(r),new Ms(t.firestore,t instanceof Bs?t.converter:null,new j(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Qr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new _;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Oc.push(t),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!Y(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Mc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Mc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Di.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&v()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Mc,await t}while(t!==this.Mc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Yr(this,"async_queue_retry"),this.Kc=()=>{const t=Qr();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Qr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class Vs extends Rs{_terminate(){return this._firestoreClient||$s(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Us,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function js(t=(0,r.getApp)()){return(0,r._getProvider)(t,"firestore").getImmediate()}function qs(t){return t._firestoreClient||$s(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $s(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new yt(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new bs(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{static fromBase64String(t){try{return new Hs(ut.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Hs(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=/^__.*__$/;class Qs{toMutation(t,e){return null!==this.fieldMask?new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ge(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class Xs{toMutation(t,e){return new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Ys(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Js{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Js(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return mo(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Ys(this.Zc)&&Ws.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Zs{aa(t,e,n,r=!1){return new Js({Zc:t,methodName:e,ca:n,path:V.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Xr(t)}}function to(t){const e=t._freezeSettings(),n=Xr(t._databaseId);return new Zs(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eo(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);ho("Data must be an object, but it was:",o,r);const a=uo(r,o);let c,u;if(s.merge)c=new at(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=fo(e,r,n);if(!o.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);yo(t,i)||t.push(i)}c=new at(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Qs(new Bt(a),c,u)}class no extends Gs{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof no}}function ro(t,e,n){return new Js({Zc:3,ca:e.settings.ca,methodName:t._methodName,na:n},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class io extends Gs{_toFieldTransform(t){const e=ro(this,t,!0),n=this.ha.map((t=>co(t,e))),r=new Ae(n);return new Pe(t.path,r)}isEqual(t){return this===t}constructor(t,e){super(t),this.ha=e}}class so extends Gs{_toFieldTransform(t){const e=ro(this,t,!0),n=this.ha.map((t=>co(t,e))),r=new Le(n);return new Pe(t.path,r)}isEqual(t){return this===t}constructor(t,e){super(t),this.ha=e}}function oo(t,e,n,r){const i=t.aa(1,e,n);ho("Data must be an object, but it was:",i,r);const s=[],o=Bt.empty();tt(r,((t,r)=>{const c=go(e,t,n);r=(0,a.getModularInstance)(r);const u=i.ia(c);if(r instanceof no)s.push(c);else{const t=co(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new at(s);return new Xs(o,c,i.fieldTransforms)}function ao(t,e,n,r,i,s){const o=t.aa(1,e,n),c=[fo(e,r,n)],u=[i];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)c.push(fo(e,s[t])),u.push(s[t+1]);const l=[],h=Bt.empty();for(let t=c.length-1;t>=0;--t)if(!yo(l,c[t])){const e=c[t];let n=u[t];n=(0,a.getModularInstance)(n);const r=o.ia(e);if(n instanceof no)l.push(e);else{const t=co(n,r);null!=t&&(l.push(e),h.set(e,t))}}const f=new at(l);return new Xs(h,f,o.fieldTransforms)}function co(t,e){if(lo(t=(0,a.getModularInstance)(t)))return ho("Unsupported field value:",e,t),uo(t,e);if(t instanceof Gs)return function(t,e){if(!Ys(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=co(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Se(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:Ln(e.wt,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ln(e.wt,n)}}if(t instanceof Ks)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Hs)return{bytesValue:Dn(e.wt,t._byteString)};if(t instanceof Ms){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Ls(t)}`)}(t,e)}function uo(t,e){const n={};return et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tt(t,((t,r)=>{const i=co(r,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function lo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof Ks||t instanceof Hs||t instanceof Ms||t instanceof Gs)}function ho(t,e,n){if(!lo(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Ls(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}var r}function fo(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof zs)return e._internalPath;if("string"==typeof e)return go(t,e);throw mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const po=new RegExp("[~\\*/\\[\\]]");function go(t,e,n){if(e.search(po)>=0)throw mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zs(...e.split("."))._internalPath}catch(r){throw mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new T(E.INVALID_ARGUMENT,a+t+c)}function yo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{get id(){return this._key.path.lastSegment()}get ref(){return new Ms(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new wo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class wo extends vo{data(){return super.data()}}function bo(t,e){return"string"==typeof e?go(t,e):e instanceof zs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class To extends vo{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(bo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class _o extends To{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{convertValue(t,e="none"){switch(_t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return tt(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Ks(ft(t.latitude),ft(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);w(er(n));const r=new vt(n.get(1),n.get(3)),i=new j(n.popFirst(5));return r.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xo(t){t=Ds(t,Ms);const e=Ds(t.firestore,Vs);return Cs(qs(e),t._key).then((n=>Lo(e,t,n)))}class Co extends So{convertBytes(t){return new Hs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ms(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function ko(t,e,n){t=Ds(t,Ms);const r=Ds(t.firestore,Vs),i=Io(t.converter,e,n);return No(r,[eo(to(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Fe.none())])}function Ao(t,e,n,...r){t=Ds(t,Ms);const i=Ds(t.firestore,Vs),s=to(i);let o;return o="string"==typeof(e=(0,a.getModularInstance)(e))||e instanceof zs?ao(s,"updateDoc",t._key,e,n,r):oo(s,"updateDoc",t._key,e),No(i,[o.toMutation(t._key,Fe.exists(!0))])}function No(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=ms(t);try{const t=await function(t,e){const n=b(t),r=M.now(),i=e.reduce(((t,e)=>t.add(e.key)),mn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=an(),c=mn();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=ze(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ke(t.key,e,Ft(e.value.mapValue),Fe.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ln(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new nt(O)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await fs(r,t.changes),await wi(r.remoteStore)}catch(t){const e=Oi(t,"Failed to persist write");n.reject(e)}}(await Is(t),e,n))),n.promise}(qs(t),e)}function Lo(t,e,n){const r=n.docs.get(e._key),i=new Co(t);return new To(t,i,e._key,r,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(...t){return new io("arrayUnion",t)}function Oo(...t){return new so("arrayRemove",t)}!function(t,e=!0){var n;n=r.SDK_VERSION,h=n,(0,r._registerComponent)(new(0,i.Component)("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Vs(r,new x(t.getProvider("auth-internal")),new N(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,r.registerVersion)(u,"3.4.14",t),(0,r.registerVersion)(u,"3.4.14","esm2017")}()})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return _})),t(e.exports,"initializeApp",(function(){return S})),t(e.exports,"getApp",(function(){return I})),t(e.exports,"registerVersion",(function(){return x}));var r=s("4a6xH"),i=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const u="@firebase/app",l="0.7.31",h=new(0,i.Logger)("@firebase/app"),f="[DEFAULT]",d={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(g.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,t);for(const e of p.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,o.ErrorFactory)("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="9.9.3";function S(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:f,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw E.create("bad-app-name",{appName:String(i)});const s=p.get(i);if(s){if((0,o.deepEqual)(t,s.options)&&(0,o.deepEqual)(n,s.config))return s;throw E.create("duplicate-app",{appName:i})}const a=new(0,r.ComponentContainer)(i);for(const t of g.values())a.addComponent(t);const c=new T(t,n,a);return p.set(i,c),c}function I(t="[DEFAULT]"){const e=p.get(t);if(!e)throw E.create("no-app",{appName:t});return e}function x(t,e,n){var i;let s=null!==(i=d[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}y(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="firebase-heartbeat-store";let k=null;function A(){return k||(k=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(C)}}).catch((t=>{throw E.create("idb-open",{originalErrorMessage:t.message})}))),k}async function N(t,e){var n;try{const n=(await A()).transaction(C,"readwrite"),r=n.objectStore(C);return await r.put(e,L(t)),n.done}catch(t){if(t instanceof o.FirebaseError)h.warn(t.message);else{const e=E.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});h.warn(e.message)}}}function L(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=O(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new R(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function O(){return(new Date).toISOString().substring(0,10)}class R{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await A()).transaction(C).objectStore(C).get(L(t))}catch(t){if(t instanceof o.FirebaseError)h.warn(t.message);else{const n=E.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});h.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;P="",y(new(0,r.Component)("platform-logger",(t=>new c(t)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(t=>new D(t)),"PRIVATE")),x(u,l,P),x(u,l,"esm2017"),x("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return i})),t(e.exports,"ComponentContainer",(function(){return c}));var r=s("ffjl9");class i{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,r.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),s.register("ffjl9",(function(e,r){t(e.exports,"base64urlEncodeWithoutPadding",(function(){return o})),t(e.exports,"base64Decode",(function(){return a})),t(e.exports,"Deferred",(function(){return c})),t(e.exports,"createMockUserToken",(function(){return u})),t(e.exports,"getUA",(function(){return l})),t(e.exports,"isMobileCordova",(function(){return h})),t(e.exports,"isBrowserExtension",(function(){return f})),t(e.exports,"isReactNative",(function(){return d})),t(e.exports,"isElectron",(function(){return p})),t(e.exports,"isIE",(function(){return g})),t(e.exports,"isUWP",(function(){return m})),t(e.exports,"isSafari",(function(){return y})),t(e.exports,"isIndexedDBAvailable",(function(){return v})),t(e.exports,"validateIndexedDBOpenable",(function(){return w})),t(e.exports,"FirebaseError",(function(){return b})),t(e.exports,"ErrorFactory",(function(){return E})),t(e.exports,"isEmpty",(function(){return _})),t(e.exports,"deepEqual",(function(){return S})),t(e.exports,"querystring",(function(){return x})),t(e.exports,"querystringDecode",(function(){return C})),t(e.exports,"extractQuerystring",(function(){return k})),t(e.exports,"createSubscribe",(function(){return A})),t(e.exports,"getModularInstance",(function(){return D}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=i(t);return s.encodeByteArray(e,!0)}(t).replace(/\./g,"")},a=function(t){try{return s.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function d(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return l().indexOf("Electron/")>=0}function g(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return l().indexOf("MSAppHost/")>=0}function y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}function w(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new b(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function S(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(I(n)&&I(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function I(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function C(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function k(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){const n=new N(t,e);return n.subscribe.bind(n)}class N{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){return t&&t._delegate?t._delegate:t}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return l})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=c[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}}function h(t){r.forEach((e=>{e.setLogLevel(t)}))}function f(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return i}));var r=s("ekHjI");r=s("ekHjI");function i(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(t=>{i((0,r.w)(a.result),t.oldVersion,t.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(c.get(e))return c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return c.set(e,s),s}(0,r.r)((t=>({...t,get:(e,n,r)=>u(e,n)||t.get(e,n,r),has:(e,n)=>!!u(e,n)||t.has(e,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return h}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){l=t(l)}function f(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(s.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return a.set(r,e.sort?e.sort():[e]),p(r)}}function d(t){return"function"==typeof t?f(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,l):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),u.set(e,t),e}(t);if(c.has(t))return c.get(t);const e=d(t);return e!==t&&(c.set(t,e),u.set(e,t)),e}const g=t=>u.get(t)})),s.register("lW9Fu",(function(e,r){t(e.exports,"createWebChannelTransport",(function(){return ar})),t(e.exports,"getStatEventTarget",(function(){return cr})),t(e.exports,"ErrorCode",(function(){return ur})),t(e.exports,"EventType",(function(){return lr})),t(e.exports,"Event",(function(){return hr})),t(e.exports,"Stat",(function(){return fr})),t(e.exports,"FetchXmlHttpFactory",(function(){return dr})),t(e.exports,"WebChannel",(function(){return pr})),t(e.exports,"XhrIo",(function(){return gr}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},c=s||self;function u(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}var b={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}(this);delete b[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function _(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t){return/^[\s\xa0]*$/.test(t)}var x,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return-1!=t.indexOf(e)}function A(t,e){return t<e?-1:t>e?1:0}t:{var N=c.navigator;if(N){var L=N.userAgent;if(L){x=L;break t}}x=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function O(t){const e={};for(const n in t)e[n]=t[n];return e}var R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<R.length;e++)n=R[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function P(t){return P[" "](t),t}P[" "]=u;var B,F,U=k(x,"Opera"),V=k(x,"Trident")||k(x,"MSIE"),j=k(x,"Edge"),q=j||V,$=k(x,"Gecko")&&!(k(x.toLowerCase(),"webkit")&&!k(x,"Edge"))&&!(k(x,"Trident")||k(x,"MSIE"))&&!k(x,"Edge"),z=k(x.toLowerCase(),"webkit")&&!k(x,"Edge");function H(){var t=c.document;return t?t.documentMode:void 0}t:{var G="",K=(F=x,$?/rv:([^\);]+)(\)|;)/.exec(F):j?/Edge\/([\d\.]+)/.exec(F):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):z?/WebKit\/(\S+)/.exec(F):U?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(K&&(G=K?K[1]:""),V){var W=H();if(null!=W&&W>parseFloat(G)){B=String(W);break t}}B=G}var Q,X={};function Y(){return function(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=C(String(B)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=A(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||A(0==i[2].length,0==s[2].length)||A(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(c.document&&V){var J=H();Q=J||(parseInt(B,10)||void 0)}else Q=void 0;var Z=Q,tt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{c.addEventListener("test",u,e),c.removeEventListener("test",u,e)}catch(t){}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function nt(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{P(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nt.Z.h.call(this)}}et.prototype.h=function(){this.defaultPrevented=!0},v(nt,et);var rt={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),st=0;function ot(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++st,this.ca=this.fa=!1}function at(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ct(t){this.src=t,this.g={},this.h=0}function ut(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(at(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ct.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=lt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ot(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var ht="closure_lm_"+(1e6*Math.random()|0),ft={};function dt(t,e,n,r,i){if(r&&r.once)return gt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=Tt(n),t&&t[it]?t.N(e,n,h(r)?!!r.capture:!!r,i):pt(t,e,n,!1,r,i)}function pt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=bt(t);if(a||(t[ht]=a=new ct(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=wt;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function gt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=Tt(n),t&&t[it]?t.O(e,n,h(r)?!!r.capture:!!r,i):pt(t,e,n,!0,r,i)}function mt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=Tt(n),t&&t[it]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=lt(s=t.g[e],n,r,i))&&(at(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=bt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lt(e,n,r,i)),(n=-1<t?e[t]:null)&&yt(n))}function yt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[it])ut(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bt(e))?(ut(n,t),0==n.h&&(n.src=null,e[ht]=null)):at(t)}}}function vt(t){return t in ft?ft[t]:ft[t]="on"+t}function wt(t,e){if(t.ca)t=!0;else{e=new nt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&yt(t),t=n.call(r,e)}return t}function bt(t){return(t=t[ht])instanceof ct?t:null}var Et="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"==typeof t?t:(t[Et]||(t[Et]=function(e){return t.handleEvent(e)}),t[Et])}function _t(){w.call(this),this.i=new ct(this),this.P=this,this.I=null}function St(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;M(e=new et(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=It(o,r,!0,e)&&i}if(i=It(o=e.g=t,r,!0,e)&&i,i=It(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=It(o=e.g=n[s],r,!1,e)&&i}function It(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ut(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(_t,w),_t.prototype[it]=!0,_t.prototype.removeEventListener=function(t,e,n,r){mt(this,t,e,n,r)},_t.prototype.M=function(){if(_t.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)at(n[r]);delete e.g[t],e.h--}}this.I=null},_t.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xt=c.JSON.stringify;function Ct(){var t=Rt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var kt,At=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Nt),(t=>t.reset()));class Nt{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Lt(t){c.setTimeout((()=>{throw t}),0)}function Dt(t,e){kt||function(){var t=c.Promise.resolve(void 0);kt=function(){t.then(Mt)}}(),Ot||(kt(),Ot=!0),Rt.add(t,e)}var Ot=!1,Rt=new class{add(t,e){const n=At.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Mt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(t){Lt(t)}var e=At;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ot=!1}function Pt(t,e){_t.call(this),this.h=t||1,this.g=e||c,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ft(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function Ut(t){t.g=Ft((()=>{t.g=null,t.i&&(t.i=!1,Ut(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Pt,_t),(i=Pt.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),St(this,"tick"),this.da&&(Bt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Pt.Z.M.call(this),Bt(this),delete this.g};class Vt extends w{l(t){this.h=arguments,this.g?this.i=!0:Ut(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function jt(t){w.call(this),this.h=t,this.g={}}v(jt,w);var qt=[];function $t(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var i=0;i<n.length;i++){var s=dt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function zt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&yt(t)}),t),t.g={}}function Ht(){this.g=!0}function Gt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}jt.prototype.M=function(){jt.Z.M.call(this),zt(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ht.prototype.Aa=function(){this.g=!1},Ht.prototype.info=function(){};var Kt={},Wt=null;function Qt(){return Wt=Wt||new _t}function Xt(t){et.call(this,Kt.Ma,t)}function Yt(t){const e=Qt();St(e,new Xt(e,t))}function Jt(t,e){et.call(this,Kt.STAT_EVENT,t),this.stat=e}function Zt(t){const e=Qt();St(e,new Jt(e,t))}function te(t,e){et.call(this,Kt.Na,t),this.size=e}function ee(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}Kt.Ma="serverreachability",v(Xt,et),Kt.STAT_EVENT="statevent",v(Jt,et),Kt.Na="timingevent",v(te,et);var ne={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},re={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ie(){}function se(t){return t.h||(t.h=t.i())}function oe(){}ie.prototype.h=null;var ae,ce={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ue(){et.call(this,"d")}function le(){et.call(this,"c")}function he(){}function fe(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new jt(this),this.P=pe,t=q?125:void 0,this.W=new Pt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new de}function de(){this.i=null,this.g="",this.h=!1}v(ue,et),v(le,et),v(he,ie),he.prototype.g=function(){return new XMLHttpRequest},he.prototype.i=function(){return{}},ae=new he;var pe=45e3,ge={},me={};function ye(t,e,n){t.K=1,t.v=Ve(Re(e)),t.s=n,t.U=!0,ve(t,null)}function ve(t,e){t.F=Date.now(),Te(t),t.A=Re(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ze(n.h,"t",r),t.C=0,n=t.l.H,t.h=new de,t.g=tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Vt(m(t.Ia,t,t.g),t.O)),$t(t.V,t.g,"readystatechange",t.gb),e=t.H?O(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Yt(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function we(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function be(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Ee(t,n),r==me){4==e&&(t.o=4,Zt(14),i=!1),Gt(t.j,t.m,null,"[Incomplete Response]");break}if(r==ge){t.o=4,Zt(15),Gt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Gt(t.j,t.m,r,null),Ce(t,r)}we(t)&&r!=me&&r!=ge&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gn(e),e.L=!0,Zt(11))):(Gt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),Ie(t))}function Ee(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?me:(n=Number(e.substring(n,r)),isNaN(n)?ge:(r+=1)+n>e.length?me:(e=e.substr(r,n),t.C=r+n,e))}function Te(t){t.Y=Date.now()+t.P,_e(t,t.P)}function _e(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ee(m(t.eb,t),e)}function Se(t){t.B&&(c.clearTimeout(t.B),t.B=null)}function Ie(t){0==t.l.G||t.I||Qn(t.l,t)}function xe(t){Se(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ce(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||on(n.i,t)))if(n.I=t.N,!t.J&&on(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Wn(n),Bn(n)}Hn(n),Zt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ee(m(n.ab,n),6e3));if(1>=sn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Yn(n,11)}else if((t.J||n.g==t)&&Wn(n),!I(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(k(t,"spdy")||k(t,"quic")||k(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(an(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ue(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=Zn(r,r.H?r.la:null,r.W),o.J){cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Se(a),Te(a)),r.g=o}else zn(r);0<n.l.length&&Vn(n)}else"stop"!=u[0]&&"close"!=u[0]||Yn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Yn(n,7):Pn(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Yt(4)}catch(t){}}function ke(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ae(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ae)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ne(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Le(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Le(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Le(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=fe.prototype).setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Ln(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const h=Ln(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||q||this.g&&(this.h.h||this.g.ga()||Dn(this.g)))){this.I||4!=h||7==e||Yt(8==e||0>=f?3:2),Se(this);var n=this.g.ba();this.N=n;e:if(we(this)){var r=Dn(this.g);t="";var i=r.length,s=4==Ln(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){xe(this),Ie(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Zt(12),xe(this),Ie(this);break t}Gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ce(this,n)}this.U?(be(this,h,o),q&&this.i&&3==h&&($t(this.V,this.W,"tick",this.fb),this.W.start())):(Gt(this.j,this.m,o,null),Ce(this,o)),4==h&&xe(this),this.i&&!this.I&&(4==h?Qn(this.l,this):(this.i=!1,Te(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zt(12)):(this.o=0,Zt(13)),xe(this),Ie(this)}}}catch(t){}},i.fb=function(){if(this.g){var t=Ln(this.g),e=this.g.ga();this.C<e.length&&(Se(this),be(this,t,e),this.i&&4!=t&&Te(this))}},i.cancel=function(){this.I=!0,xe(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Yt(3),Zt(17)),xe(this),this.o=2,Ie(this)):_e(this,this.Y-t)},(i=Ae.prototype).R=function(){Ne(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ne(this),this.g.concat()},i.get=function(t,e){return Le(this.h,t)?this.h[t]:e},i.set=function(t,e){Le(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var De=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Oe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Oe){this.g=void 0!==e?e:t.g,Me(this,t.j),this.s=t.s,Pe(this,t.i),Be(this,t.m),this.l=t.l,e=t.h;var n=new Qe;n.i=e.i,e.g&&(n.g=new Ae(e.g),n.h=e.h),Fe(this,n),this.o=t.o}else t&&(n=String(t).match(De))?(this.g=!!e,Me(this,n[1]||"",!0),this.s=je(n[2]||""),Pe(this,n[3]||"",!0),Be(this,n[4]),this.l=je(n[5]||"",!0),Fe(this,n[6]||"",!0),this.o=je(n[7]||"")):(this.g=!!e,this.h=new Qe(null,this.g))}function Re(t){return new Oe(t)}function Me(t,e,n){t.j=n?je(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pe(t,e,n){t.i=n?je(e,!0):e}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fe(t,e,n){e instanceof Qe?(t.h=e,function(t,e){e&&!t.j&&(Xe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ye(this,e),Ze(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=qe(e,Ke)),t.h=new Qe(e,t.g))}function Ue(t,e,n){t.h.set(e,n)}function Ve(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,$e),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $e(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Oe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qe(e,ze,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(qe(e,ze,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(qe(n,"/"==n.charAt(0)?Ge:He,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qe(n,We)),t.join("")};var ze=/[#\/\?@]/g,He=/[#\?:]/g,Ge=/[#\?]/g,Ke=/[#\?@]/g,We=/#/g;function Qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xe(t){t.g||(t.g=new Ae,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ye(t,e){Xe(t),e=tn(t,e),Le(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Le((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ne(t)))}function Je(t,e){return Xe(t),e=tn(t,e),Le(t.g.h,e)}function Ze(t,e,n){Ye(t,e),0<n.length&&(t.i=null,t.g.set(tn(t,e),S(n)),t.h+=n.length)}function tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Qe.prototype).add=function(t,e){Xe(this),this.i=null,t=tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Xe(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},i.T=function(){Xe(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},i.R=function(t){Xe(this);var e=[];if("string"==typeof t)Je(this,t)&&(e=_(e,this.g.get(tn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_(e,t[n])}return e},i.set=function(t,e){return Xe(this),this.i=null,Je(this,t=tn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function en(t){this.l=t||nn,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function sn(t){return t.h?1:t.g?t.g.size:0}function on(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function an(t,e){t.g?t.g.add(e):t.h=e}function cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function un(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function ln(){}function hn(){this.g=new ln}function fn(t,e,n){const r=n||"";try{ke(t,(function(t,n){let i=t;h(t)&&(i=xt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function dn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}function gn(t,e){_t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ln.prototype.stringify=function(t){return c.JSON.stringify(t,void 0)},ln.prototype.parse=function(t){return c.JSON.parse(t,void 0)},v(pn,ie),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(t){return function(){return t}}({}),v(gn,_t);var mn=0;function yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wn(t)}function wn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=gn.prototype).open=function(t,e){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||c).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vn(this):wn(this),3==this.readyState&&yn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,vn(this))},i.Ta=function(t){this.g&&(this.response=t,vn(this))},i.ha=function(){this.g&&vn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var bn=c.JSON.parse;function En(t){_t.call(this),this.headers=new Ae,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tn,this.K=this.L=!1}v(En,_t);var Tn="",_n=/^https?$/i,Sn=["POST","PUT"];function In(t){return"content-type"==t.toLowerCase()}function xn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cn(t),An(t)}function Cn(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function kn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Ln(t)||2!=t.ba()))if(t.v&&4==Ln(t))Ft(t.Fa,0,t);else if(St(t,"readystatechange"),4==Ln(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(De)[1]||null;if(!i&&c.self&&c.self.location){var s=c.self.location.protocol;i=s.substr(0,s.length-1)}r=!_n.test(i?i.toLowerCase():"")}n=r}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var o=2<Ln(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Cn(t)}}finally{An(t)}}}function An(t,e){if(t.g){Nn(t);const n=t.g,r=t.C[0]?u:null;t.g=null,t.C=null,e||St(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Nn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function Ln(t){return t.g?t.g.readyState:0}function Dn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Tn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function On(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ue(t,e,n))}function Rn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mn(t){this.za=0,this.l=[],this.h=new Ht,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Rn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Rn("baseRetryDelayMs",5e3,t),this.$a=Rn("retryDelaySeedMs",1e4,t),this.Ya=Rn("forwardChannelMaxRetries",2,t),this.ra=Rn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new en(t&&t.concurrentRequestLimit),this.Ca=new hn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Pn(t){if(Fn(t),3==t.G){var e=t.V++,n=Re(t.F);Ue(n,"SID",t.J),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),qn(t,n),(e=new fe(t,t.h,e,void 0)).K=2,e.v=Ve(Re(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(e.v.toString(),"")),!n&&c.Image&&((new Image).src=e.v,n=!0),n||(e.g=tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Te(e)}Jn(t)}function Bn(t){t.g&&(Gn(t),t.g.cancel(),t.g=null)}function Fn(t){Bn(t),t.u&&(c.clearTimeout(t.u),t.u=null),Wn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function Un(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Vn(t)}function Vn(t){rn(t.i)||t.m||(t.m=!0,Dt(t.Ha,t),t.C=0)}function jn(t,e){var n;n=e?e.m:t.V++;const r=Re(t.F);Ue(r,"SID",t.J),Ue(r,"RID",n),Ue(r,"AID",t.U),qn(t,r),t.o&&t.s&&On(r,t.o,t.s),n=new fe(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$n(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),an(t.i,n),ye(n,r,e)}function qn(t,e){t.j&&ke({},(function(t,n){Ue(e,n,t)}))}function $n(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{fn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function zn(t){t.g||t.u||(t.Y=1,Dt(t.Ga,t),t.A=0)}function Hn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ee(m(t.Ga,t),Xn(t,t.A)),t.A++,!0)}function Gn(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function Kn(t){t.g=new fe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Re(t.oa);Ue(e,"RID","rpc"),Ue(e,"SID",t.J),Ue(e,"CI",t.N?"0":"1"),Ue(e,"AID",t.U),qn(t,e),Ue(e,"TYPE","xmlhttp"),t.o&&t.s&&On(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ve(Re(e)),n.s=null,n.U=!0,ve(n,t)}function Wn(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Qn(t,e){var n=null;if(t.g==e){Wn(t),Gn(t),t.g=null;var r=2}else{if(!on(t.i,e))return;n=e.D,cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;St(r=Qt(),new te(r,n,e,i)),Vn(t)}else zn(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(sn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ee(m(t.Ha,t,e),Xn(t,t.C)),t.C++,0)))}(t,e)||2==r&&Hn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Yn(t,5);break;case 4:Yn(t,10);break;case 3:Yn(t,6);break;default:Yn(t,2)}}function Xn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Yn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Oe("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Me(n,"https"),Ve(n)),function(t,e){const n=new Ht;if(c.Image){const r=new Image;r.onload=y(dn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(dn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(dn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(dn,n,r,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Zt(2);t.G=0,t.j&&t.j.va(e),Jn(t),Fn(t)}function Jn(t){t.G=0,t.I=-1,t.j&&(0==un(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function Zn(t,e,n){let r=function(t){return t instanceof Oe?Re(t):new Oe(t,void 0)}(n);if(""!=r.i)e&&Pe(r,e+"."+r.i),Be(r,r.m);else{const t=c.location;r=function(t,e,n,r){var i=new Oe(null,void 0);return t&&Me(i,t),e&&Pe(i,e),n&&Be(i,n),r&&(i.l=r),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Ue(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ue(r,e,n),Ue(r,"VER",t.ma),qn(t,r),r}function tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new En(new pn({ib:!0})):new En(t.qa)).L=t.H,e}function er(){}function nr(){if(V&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(t,e){_t.call(this),this.g=new Mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!I(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new or(this)}function ir(t){ue.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sr(){le.call(this),this.status=1}function or(t){this.g=t}(i=En.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ae.g(),this.C=this.u?se(this.u):se(ae),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void xn(this,t)}t=n||"";const i=new Ae(this.headers);r&&ke(r,(function(t,e){i.set(e,t)})),r=function(t){t:{var e=In;const n=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=c.FormData&&t instanceof c.FormData,!(0<=E(Sn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nn(this),0<this.B&&((this.K=function(t){return V&&Y()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ft(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){xn(this,t)}},i.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),An(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),An(this,!0)),En.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?kn(this):this.cb())},i.cb=function(){kn(this)},i.ba=function(){try{return 2<Ln(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),bn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=Mn.prototype).ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new fe(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=O(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=$n(this,i,e),Ue(n=Re(this.F),"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),qn(this,n),this.o&&s&&On(n,this.o,s),an(this.i,i),this.Ra&&Ue(n,"TYPE","init"),this.ja?(Ue(n,"$req",e),Ue(n,"SID","null"),i.$=!0,ye(i,n,null)):ye(i,n,e),this.G=2}}else 3==this.G&&(t?jn(this,t):0==this.l.length||rn(this.i)||jn(this))},i.Ga=function(){if(this.u=null,Kn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ee(m(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Zt(10),Bn(this),Kn(this))},i.ab=function(){null!=this.v&&(this.v=null,Bn(this),Hn(this),Zt(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Zt(2)):(this.h.info("Failed to ping google.com"),Zt(1))},(i=er.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},nr.prototype.g=function(t,e){return new rr(t,e)},v(rr,_t),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Dt(m(t.hb,t,e))),Zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zn(t,null,t.W),Vn(t)},rr.prototype.close=function(){Pn(this.g)},rr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Un(this.g,e)}else this.v?((e={}).__data__=xt(t),Un(this.g,e)):Un(this.g,t)},rr.prototype.M=function(){this.g.j=null,delete this.j,Pn(this.g),delete this.g,rr.Z.M.call(this)},v(ir,ue),v(sr,le),v(or,er),or.prototype.xa=function(){St(this.g,"a")},or.prototype.wa=function(t){St(this.g,new ir(t))},or.prototype.va=function(t){St(this.g,new sr(t))},or.prototype.ua=function(){St(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,ne.NO_ERROR=0,ne.TIMEOUT=8,ne.HTTP_ERROR=6,re.COMPLETE="complete",oe.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",_t.prototype.listen=_t.prototype.N,En.prototype.listenOnce=En.prototype.O,En.prototype.getLastError=En.prototype.La,En.prototype.getLastErrorCode=En.prototype.Da,En.prototype.getStatus=En.prototype.ba,En.prototype.getResponseJson=En.prototype.Qa,En.prototype.getResponseText=En.prototype.ga,En.prototype.send=En.prototype.ea;var ar=o.createWebChannelTransport=function(){return new nr},cr=o.getStatEventTarget=function(){return Qt()},ur=o.ErrorCode=ne,lr=o.EventType=re,hr=o.Event=Kt,fr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dr=o.FetchXmlHttpFactory=pn,pr=o.WebChannel=oe,gr=o.XhrIo=En})),s.register("2iIDe",(function(e,n){t(e.exports,"notiflixLoading",(function(){return i})),t(e.exports,"notiflixLoadingRemove",(function(){return o}));var r=s("dSs1Y");function i(){r.Loading.dots({svgColor:"rgba(255,107,1)",svgSize:"200px"})}function o(){r.Loading.remove()}})),s.register("dSs1Y",(function(t,e){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:t.exports,i=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Standard",r="Hourglass",i="Circle",s="Arrows",o="Dots",a="Pulse",c="Custom",u="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},f=function(e){return e||(e="head"),null!==t.document[e]||(h('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},d=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e&&"[object Object]"===Object.prototype.toString.call(n[r])?t[r]=d(t[r],n[r]):t[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return t},p=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},g=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},m=function(u,g,m,v,w){if(!f("body"))return!1;e||y.Loading.init({});var b=d(!0,e,{});if("object"==typeof g&&!Array.isArray(g)||"object"==typeof m&&!Array.isArray(m)){var E={};"object"==typeof g?E=g:"object"==typeof m&&(E=m),e=d(!0,e,E)}var T,_,S="";if("string"==typeof g&&g.length>0&&(S=g),v){var I="";(S=S.length>e.messageMaxLength?p(S).toString().substring(0,e.messageMaxLength)+"...":p(S).toString()).length>0&&(I='<p id="'+e.messageID+'" class="nx-loading-message" style="color:'+e.messageColor+";font-size:"+e.messageFontSize+';">'+S+"</p>"),e.cssAnimation||(e.cssAnimationDuration=0);var x="";if(u===n)T=e.svgSize,_=e.svgColor,T||(T="60px"),_||(_="#32c682"),x='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+_+'" width="'+T+'" height="'+T+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(u===r)x=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(e.svgSize,e.svgColor);else if(u===i)x=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(e.svgSize,e.svgColor);else if(u===s)x=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(e.svgSize,e.svgColor);else if(u===o)x=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(e.svgSize,e.svgColor);else if(u===a)x=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(e.svgSize,e.svgColor);else if(u===c&&null!==e.customSvgCode&&null===e.customSvgUrl)x=e.customSvgCode||"";else if(u===c&&null!==e.customSvgUrl&&null===e.customSvgCode)x='<img class="nx-custom-loading-icon" width="'+e.svgSize+'" height="'+e.svgSize+'" src="'+e.customSvgUrl+'" alt="Notiflix">';else{if(u===c&&(null===e.customSvgUrl||null===e.customSvgCode))return h('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;x=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(e.svgSize,"#f8f8f8","#32c682")}var C=parseInt((e.svgSize||"").replace(/[^0-9]/g,"")),k=t.innerWidth,A=C>=k?k-40+"px":C+"px",N='<div style="width:'+A+"; height:"+A+';" class="'+e.className+"-icon"+(S.length>0?" nx-with-message":"")+'">'+x+"</div>",L=t.document.createElement("div");L.id=l.ID,L.className=e.className+(e.cssAnimation?" nx-with-animation":"")+(e.clickToClose?" nx-loading-click-to-close":""),L.style.zIndex=e.zindex,L.style.background=e.backgroundColor,L.style.animationDuration=e.cssAnimationDuration+"ms",L.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',L.style.display="flex",L.style.flexWrap="wrap",L.style.flexDirection="column",L.style.alignItems="center",L.style.justifyContent="center",e.rtl&&(L.setAttribute("dir","rtl"),L.classList.add("nx-rtl-on")),L.innerHTML=N+I,t.document.getElementById(L.id)||(t.document.body.appendChild(L),e.clickToClose&&t.document.getElementById(L.id).addEventListener("click",(function(){L.classList.add("nx-remove");var t=setTimeout((function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(t))}),e.cssAnimationDuration)})))}else if(t.document.getElementById(l.ID))var D=t.document.getElementById(l.ID),O=setTimeout((function(){D.classList.add("nx-remove");var t=setTimeout((function(){null!==D.parentNode&&(D.parentNode.removeChild(D),clearTimeout(t))}),e.cssAnimationDuration);clearTimeout(O)}),w);e=d(!0,e,b)},y={Loading:{init:function(n){e=d(!0,l,n),function(e,n){if(!f("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var r=t.document.createElement("style");r.id=n,r.innerHTML=e(),t.document.head.appendChild(r)}}(g,"NotiflixLoadingInternalCSS")},merge:function(t){if(!e)return h("You have to initialize the Loading module before call Merge function."),!1;e=d(!0,e,t)},standard:function(t,e){m(n,t,e,!0,0)},hourglass:function(t,e){m(r,t,e,!0,0)},circle:function(t,e){m(i,t,e,!0,0)},arrows:function(t,e){m(s,t,e,!0,0)},dots:function(t,e){m(o,t,e,!0,0)},pulse:function(t,e){m(a,t,e,!0,0)},custom:function(t,e){m(c,t,e,!0,0)},notiflix:function(t,e){m(u,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),m(null,null,null,!1,t)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=t.document.getElementById(l.ID);if(r)if(n.length>0){n=n.length>e.messageMaxLength?p(n).substring(0,e.messageMaxLength)+"...":p(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var s=t.document.createElement("p");s.id=e.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=e.messageColor,s.style.fontSize=e.messageFontSize,s.innerHTML=n,r.appendChild(s)}}else h("Where is the new message?")}(n)}}};return"object"==typeof t.Notiflix?d(!0,t.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof t.exports?t.exports=i(r):r.Notiflix=i(r)})),s.register("7BZMh",(function(e,n){function r(){const t=document.querySelector(".add-btn__watched"),e=document.querySelector(".add-btn__queue"),n=t.id,r=t.classList.contains("disabl"),i=e.classList.contains("disabl"),s=document.querySelector(`[data-id="${n}"]`),o=s.querySelector("svg"),a=s.querySelector("use");"Filmoteka"===document.title&&(r&&(o.style.opacity="1",a.setAttribute("href","/Filmoteka/login-icon.2e0a9156.svg#icon-watched")),i&&(o.style.opacity="1",a.setAttribute("href","/Filmoteka/login-icon.2e0a9156.svg#icon-queue")),i||r||(o.style.opacity="0")),"Filmoteka-library"===document.title&&(document.querySelector("#queueBtn").classList.contains("selected")&&!i&&s.remove(),document.querySelector("#watchedBtn").classList.contains("selected")&&!r&&s.remove())}t(e.exports,"cardAddIcon",(function(){return r}))})),s.register("bO1YF",(function(t,e){var n=s("f7sVR");const r={openModalBtn:document.querySelector(".footer_link"),closeModalBtn:document.querySelector(".modal-close-btn"),Background:document.querySelector(".backdrop-footer"),modal:document.querySelector(".modal-footer"),list:document.querySelector(".list-developer"),body:document.body};function i(){r.body.classList.remove("disable-scroll")}function o(){r.modal.classList.toggle("open-footer"),r.Background.classList.toggle("open-footer"),r.body.classList.add("disable-scroll"),r.closeModalBtn.addEventListener("click",o),r.Background.addEventListener("click",a),r.modal.classList.contains("open-footer")||(i(),r.closeModalBtn.removeEventListener("click",o),r.Background.removeEventListener("click",a))}function a(){if(r.modal.classList.contains("open-footer"))return r.modal.classList.toggle("open-footer"),r.Background.classList.toggle("open-footer"),i(),r.closeModalBtn.removeEventListener("click",o),void r.Background.removeEventListener("click",a)}r.openModalBtn.addEventListener("click",o),window.addEventListener("keydown",(function(t){const{code:e}=t;if("Escape"===e&&r.modal.classList.contains("open-footer"))return r.modal.classList.toggle("open-footer"),r.Background.classList.toggle("open-footer"),i(),r.closeModalBtn.removeEventListener("click",o),void r.Background.removeEventListener("click",a)})),r.list.insertAdjacentHTML("beforeend",n.devolopers.reduce(((t,e)=>t+`<div class="developer-list">\n<img class="developer-foto" src="${e.image}" alt="${e.name}" >\n<div class="developer-diskription" >\n<div class="box-item">\n    <p class="developer-name">${e.name}</p>\n    <p class="developer-work">${e.work}</p>\n    \n  </li>\n</div>\n<div class="git-hub">\n<li class="box-list">\n    <a class="footer-link" href=${e.media} target="_blank">\n    <img class="footer-logo" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png" alt="GIT HUB" >\n    </a>\n</div>\n</div>\n</div>`),""))})),s.register("f7sVR",(function(e,n){t(e.exports,"devolopers",(function(){return r}));const r=[{name:"Volodymyr Todorov",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Volodymyr-Todorov.png?raw=true",work:"Team Leader",media:"https://github.com/LazyFatRaccoon"},{name:"Stanislav Tyshchenko",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Stanislav-Tishchenko.jpg?raw=true",work:"Developer",media:"https://github.com/Stanislav2022"},{name:"Oleksandr Gorzhii",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Horzhiy-Oleksandr.JPG?raw=true",work:"Developer",media:"https://github.com/AlexHorzhij"},{name:"Andriy Bachynskyi",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Andriy-Bachynskyi.jpg?raw=true",work:"Developer",media:"https://github.com/Bachynckyi"},{name:"Evgeny Medyanik",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Evgeny-Medyanik.jpg?raw=true",work:"Developer",media:"https://github.com/roowdy"},{name:"Oleksadr Kravtsov",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Oleksandr-Kravtsov.jpg?raw=true",work:"Developer",media:"https://github.com/Kravtsov9983"},{name:"Oleksandr Tolochko",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Oleksandr-Tolochko.jpg?raw=true",work:"Scrum Master",media:"https://github.com/Alex-T-T"},{name:"Volodymyr Bolgov",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Volodymyr-Bolgov.jpg?raw=true",work:"Developer",media:"https://github.com/VladymyrBolgov"},{name:"Stanislav Zavadskyi",image:"https://github.com/LazyFatRaccoon/Filmoteka/blob/main/src/images/Stanislav-Zavadskyi.jpg?raw=true",work:"Developer",media:"https://github.com/uncle-Stas"}]})),s.register("lGD1y",(function(n,r){t(n.exports,"initPagination",(function(){return h}));var i=s("fb9GJ"),o=s("5rhw3"),a=s("boIUg"),c=s("2iIDe");const u=document.getElementById("pagination"),l={startPage:1,searchType:null,pagination:null,totalItemsHome:null},h=async({page:t,itemsPerPage:n,totalItems:r,data:s,query:h,firstTime:f,list:d})=>{const p={page:t,itemsPerPage:n,totalItems:r,visiblePages:5,centerAlign:!0,data:s,query:h,firstTime:f,list:d},g=new(e(i))(u,p);if(l.pagination=g,p.firstTime){if("search"===p.data.toString())try{(0,c.notiflixLoading)();const e=await o.default.getModifiedMoviesList(t,p.query);(0,a.createGallery)(e.results),p.firstTime=!1,(0,c.notiflixLoadingRemove)()}catch(t){console.log(t)}if("popular"===p.data.toString())try{(0,c.notiflixLoading)();const e=await o.default.getModifiedMoviesList(t);(0,a.createGallery)(e.results),p.firstTime=!1,(0,c.notiflixLoadingRemove)()}catch(t){console.log(t)}if("library"===p.data.toString())try{(0,c.notiflixLoading)();const t=p.list.slice(0,p.itemsPerPage),e=await Promise.all(t.map((async t=>o.default.getModifiedSingleMovie(t))));(0,a.createGallery)(e),p.firstTime=!1,(0,c.notiflixLoadingRemove)()}catch(t){console.log(t)}}return g.on("afterMove",(async({page:t})=>{if("search"===p.data.toString())try{(0,c.notiflixLoading)();const e=await o.default.getModifiedMoviesList(t,p.query);(0,a.createGallery)(e.results),(0,c.notiflixLoadingRemove)()}catch(t){console.log(t)}if("popular"===p.data.toString())try{(0,c.notiflixLoading)();const e=await o.default.getModifiedMoviesList(t);(0,a.createGallery)(e.results),(0,c.notiflixLoadingRemove)()}catch(t){console.log(t)}if("library"===p.data.toString())try{(0,c.notiflixLoading)();const e=p.list.slice((t-1)*p.itemsPerPage,t*p.itemsPerPage),n=await Promise.all(e.map((async t=>o.default.getModifiedSingleMovie(t))));(0,a.createGallery)(n),(0,c.notiflixLoadingRemove)()}catch(t){console.log(t)}})),g}})),s.register("fb9GJ",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var r=n(2),i=n(17),s=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var r=n(2);t.exports=function(t,e,n){var i,s;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,i=n;n>=0&&i<s;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=s(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=s({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(s/2),(n=(e=Math.max(t-r,1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i)):(e=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(t){r(t.prototype,h.prototype)},h.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},h.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},h.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},h.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},h.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},h.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},h.prototype.on=function(t,e,n){var r=this;s(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):o(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},h.prototype.once=function(t,e,n){var r=this;if(o(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},h.prototype._spliceMatches=function(t,e){var n,r=0;if(a(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},h.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,s=e===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},h.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},h.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):s(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},h.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},h.prototype.fire=function(t){this.invoke.apply(this,arguments)},h.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(t){return this.getListenerLength(t)>0},h.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=h},function(t,e,n){var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),c=n(25),u=n(0),l=n(4),h=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!h(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(p,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(p,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,r,i=s(e);a(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!f.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var r=n(4),i=n(3),s=n(23);function o(t,e,n,r){function o(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,r){var o=s(t,e),a=!1;i(o,(function(t){return t.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(t,e,n,o)}t.exports=function(t,e,n,s){r(e)?i(e.split(/\s+/g),(function(e){o(t,e,n,s)})):i(e,(function(e,r){o(t,r,e,n)}))}},function(t,e,n){var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var r=n(3),i=n(8),s=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?r(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),o(t,c))}},function(t,e,n){var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,p=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],s=0,o=0;return i(e,(function(t,i){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(o,i)),o=i+1)})),r.push(e.slice(o)),{exps:n,sourcesInsideIf:r}}(t,e),s=!1,o="";return i(r.exps,(function(t,e){return(s=b(t,n))&&(o=E(r.sourcesInsideIf[e],n)),!s})),o},each:function(t,e,n){var r=b(t,n),o=s(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[o]=r,c["@this"]=t,a(n,c),u+=E(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),s=t[i+1],o=b(t.slice(0,i),n),c={};return c[s]=o,E(e,a(n,c))||""}},y=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(s,r)),s=r+n[0].length,n=e.exec(t);return i.push(t.slice(s)),i};function v(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:d.test(t)?r=t.replace(p,""):u.test(t)?r=v((n=t.split(l))[0],e)[v(n[1],e)]:h.test(t)?r=v((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function w(t,e,n){for(var r,i,s,a,c=m[t],u=1,l=2,h=e[l];u&&o(h);)0===h.indexOf(t)?u+=1:0===h.indexOf("/"+t)&&(u-=1,r=l),h=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,s=r,(a=e.splice(i+1,s-i)).pop(),a),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(v(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function E(t,e){for(var n,r,i,s=1,a=t[s];o(a);)r=(n=a.split(" "))[0],m[r]?(i=w(r,t.splice(s,t.length-s),e),t=t.concat(i)):t[s]=b(n,e),a=t[s+=2];return t.join("")}t.exports=function(t,e){return E(y(t,c),e)}},function(t,e,n){var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),s.register("boIUg",(function(e,n){t(e.exports,"createGallery",(function(){return c}));var r=s("5rhw3"),i=s("lGD1y"),o=s("gitjG");"Filmoteka"===document.title&&async function(){const t=await r.default.getModifiedMoviesList(1),{page:e,results:n,total_results:s}=t;(0,i.initPagination)({page:e,itemsPerPage:n.length,totalItems:s,data:"popular",firstTime:!0})}();const a=document.querySelector(".films__list");function c(t){var e;a.innerHTML="";const n=t.reduce(((t,n)=>{return t+`\n            <li class="films__item" data-id="${n.id}">\n              <img class="films__img" loading="lazy" src="${a=n.poster_path,a?`https://image.tmdb.org/t/p/w600_and_h900_bestv2${a}`:"/Filmoteka/camera.29a7bb66.jpg"}" alt="${n.overview}" />\n                <div class="films__decor">\n                  <h2 class="films__title">${n.title}</h2>\n                  <div class="films__description"> \n                   <p class="films__description-text">${function(t){if(0!==t.length){let e=[];return t.reduce(((t,n)=>{e.push(` ${n}`)}),0),e.length>2&&(e.push(" Other"),e.splice(2,e.length-3)),e}return"No genre"}(null!==(e=n.genre_ids)&&void 0!==e?e:n.genres)} | ${o=String(n.release_date).slice(0,4),o||"N/A"}</p>\n                   <p class="films__description-rating">${s=n.vote_average,s?s.toFixed(1):"0.0"}</p>\n                  </div>\n                ${r=n.watched,i=n.queue,r?'<svg class="films__svg" width="30" height="30">\n                    <use href="/Filmoteka/login-icon.2e0a9156.svg#icon-watched"></use>\n                  </svg>':i?'<svg class="films__svg" width="30" height="30">\n                    <use href="/Filmoteka/login-icon.2e0a9156.svg#icon-queue"></use>\n                  </svg>':'<svg class="films__svg" width="30" height="30" opacity="0">\n                <use href=""></use>\n</svg>'}  \n             </div>\n            </li>`;var r,i,s,o,a}),"");a.insertAdjacentHTML("beforeend",n),(0,o.scrollTopTop)()}}));
//# sourceMappingURL=library.89b7492c.js.map

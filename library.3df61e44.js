!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},l=e.parcelRequired76b;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in s){var l=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequired76b=l),l("MZOJE"),l("1bHFN");var o=l("bhg5s"),i=JSON.parse(localStorage.getItem("wathedList"))||[],a=JSON.parse(localStorage.getItem("queueList"))||[],n=document.querySelector("#watchedBtn"),r=document.querySelector("#queueBtn"),c=document.querySelector(".empty"),d=document.querySelector("#pagination");function u(e){0===e.length?c.classList.remove("hide"):c.classList.add("hide"),0===e.length?d.classList.add("hide"):d.classList.remove("hide");(0,o.initPagination)({page:1,itemsPerPage:20,totalItems:e.length,data:"library",firstTime:!0,list:e})}"Filmoteka-library"===document.title&&(console.log("I here"),u(a)),r.addEventListener("click",(function(){r.classList.contains("selected")||(r.classList.add("selected"),n.classList.remove("selected"),a=JSON.parse(localStorage.getItem("queueList"))||[],console.log(a),u(a))})),n.addEventListener("click",(function(){n.classList.contains("selected")||(n.classList.add("selected"),r.classList.remove("selected"),i=JSON.parse(localStorage.getItem("watchedList"))||[],console.log(i),u(i))}))}();
//# sourceMappingURL=library.3df61e44.js.map

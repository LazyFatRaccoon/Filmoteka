var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired76b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired76b=n),window.onload=function(){document.querySelector("#loading-home").style.display="none"},n("f7sVR"),n("868P8");var i=n("83ZX7"),l=(i=n("83ZX7"),n("868P8"));l=n("868P8");(0,i.getFirestore)(l.filmotecaApp);n("boIUg"),n("7BZMh");const r=document.querySelector(".btn-toggle");"dark"==localStorage.getItem("theme")&&document.body.classList.add("dark-theme"),r.addEventListener("click",(function(){document.body.classList.toggle("dark-theme");let e="light";document.body.classList.contains("dark-theme")&&(e="dark"),localStorage.setItem("theme",e)})),n("dzieU"),n("bO1YF"),n("gitjG"),n("l7Vfm"),n("lGD1y");var a=n("eWCmQ"),s=n("5rhw3"),d=n("lGD1y"),u=n("2iIDe");const c=document.querySelector(".header__form"),m=document.querySelector(".header__input");c.addEventListener("submit",(async function(e){e.preventDefault();let t=m.value.trim();if(""===t)return a.Notify.failure("Please enter name of the film.",{timeout:5e3,position:"center-top",width:200,showOnlyTheLastOne:!0});try{(0,u.notiflixLoading)();const e=await s.default.getSearchMovies("1",`${t}`);if(0===e.total_results)return m.value="",(0,u.notiflixLoadingRemove)(),a.Notify.failure("Sorry, but there is no films with this name. Please try again.",{timeout:5e3,position:"center-top",width:200,showOnlyTheLastOne:!0});a.Notify.info("Your request is successfull.",{timeout:5e3,position:"center-top",width:200,showOnlyTheLastOne:!0}),(0,d.initPagination)({page:1,itemsPerPage:e.results.length,totalItems:e.total_results,data:"search",query:`${t}`,firstTime:!0}),m.value="",(0,u.notiflixLoadingRemove)()}catch(e){console.log(e)}})),document.documentElement.clientWidth>=768&&(m.setAttribute("maxlength",40),document.documentElement.clientWidth>=1280&&m.setAttribute("maxlength",47));
//# sourceMappingURL=index.fe697df0.js.map

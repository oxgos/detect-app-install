!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("core-js/modules/es6.regexp.match")):"function"==typeof define&&define.amd?define(["core-js/modules/es6.regexp.match"],n):(e=e||self).detectAppInstall=n()}(this,(function(){"use strict";function e(){const e=navigator.userAgent;return{isIos:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isAndroid:e.indexOf("Android")>-1||e.indexOf("Adr")>-1}}function n(){const e={hidden:1,webkitHidden:1,mozHidden:1,msHidden:1};for(let n in e)if(void 0!==typeof document[n])return document[n];return!1}return function(t,o){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500;return new Promise((d,r)=>{const s=e();if(document.addEventListener("visibilityChange",(function(){console.log(n()),n()&&(d(),clearTimeout(timer))}),!1),timer=setTimeout((function(){window.location.href=o,r()}),i),s.isAndroid){const e=document.createElement("iframe");e.src=t,e.style.display=none,document.body.appendChild(e),setTimeout(()=>{document.body.romoveChild(e)},2e3)}else s.isIos&&(window.location.href=t)})}}));

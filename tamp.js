// ==UserScript==
// @name         AgarPlus.io AWSM Clan
// @namespace    AgarPlus.io - AWSM Clan
// @version      1
// @description  AgarPlus.io
// @author       Nino
// @match        http://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      agar.io
// ==/UserScript==

/** @type {string} */
var v1JS = '<script src="https://rawgit.com/xNiiNo/agario/master/V1.js">\x3c/script>';
/** @type {string} */
var v1_JS = '<script src="https://rawgit.com/xNiiNo/agario/master/V2.js">\x3c/script>';
/** @type {string} */
var v1CSS = '<link href="https://rawgit.com/xNiiNo/agario/master/style.css" rel="stylesheet"></link>';
/** @type {string} */
var cpickerJS = '<script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.0/js/bootstrap-colorpicker.min.js">\x3c/script>';
/** @type {string} */
var cpickerCSS = '<link href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.0/css/bootstrap-colorpicker.min.css" rel="stylesheet"></link>';
/** @type {string} */
var toastrJS = '<script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js">\x3c/script>';
/** @type {string} */
var toastrCSS = '<link href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"></link>';
/** @type {string} */
var miniColorsJS = '<script src="http://googledrive.com/host/0B5PJu2VRH1WzUTljVlAwTTZLbEU/jquery.minicolors.js">\x3c/script>';
/**
 * @param {string} fname
 * @return {?}
 */
function inject(fname) {
  var requestUrl = fname.replace("</head>", cpickerCSS + toastrCSS + v1CSS + cpickerJS + toastrJS + v1_JS + miniColorsJS + "</head>");
  requestUrl = requestUrl.replace("agario.core.js", "");
  requestUrl = requestUrl.replace("</body>", v1JS + "</body>");
  return requestUrl;
}
window.stop();
/** @type {null} */
document.documentElement.innerHTML = null;
GM_xmlhttpRequest({
  method : "GET",
  url : "http://agar.io/",
  /**
   * @param {XMLHttpRequest} o
   * @return {undefined}
   */
  onload : function(o) {
    var STYLESHEET = inject(o.responseText);
    document.open();
    document.write(STYLESHEET);
    document.close();
  }
});

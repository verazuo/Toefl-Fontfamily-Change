// ==UserScript==
// @name         Toefl-Fontfamily-Change
// @namespace    https://www.zuozuovera.com
// @version      0.31
// @description  Try to make Toefl Test in KMF and Xiaozhan more like True Toefl Enviroment!
// @author       VeraZuo
// @match        https://toefl.kmf.com/exam/*
// @match        https://toefl.kmf.com/listening/*
// @match        https://toefl.kmf.com/reading/*
// @match        https://top.zhan.com/toefl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var body = document.body;
    var fontlist = ['Arial Narrow', 'Verdana', 'Dotum','Arial'];
    var font = fontlist[0];
    if (window.location.href.match("https://top.zhan.com/toefl/simulate/")){
        var p = document.getElementsByTagName("p");
        for (var i=0;i<p.length;i++)
        {
            p[i].style.fontFamily = font;
        }
        var s = document.getElementsByTagName("span");
        for (var j=0;j<s.length;j++)
        {
            s[j].style.fontFamily = font;
        }
    }

    body.style.fontFamily = font;
    // if you love to keep the smooth effect, please omit the following code.
    // Notes: the true toefl environment have no smooth effect on the screens.
    body.style.webkitFontSmoothing = 'none';

})();
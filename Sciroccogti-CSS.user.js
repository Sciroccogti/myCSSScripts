// ==UserScript==
// @name            Sciroccogti-CSS
// @version         0.1
// @description     个人的CSS样式脚本
// @updateURL       https://raw.githubusercontent.com/Sciroccogti/myCSSScripts/master/dist/Sciroccogti-CSS.user.js
// @downloadURL     https://raw.githubusercontent.com/Sciroccogti/myCSSScripts/master/dist/Sciroccogti-CSS.user.js
// @author          Sciroccogti
// @license         MIT
// @match           *://*leetcode.cn/*
// @icon            https://www.sciroccogti.top/img/favicon.ico
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // 力扣加大字体
    let leetcode_css =`
        .content__1Y2H {
            font-size:16px
        }
       `
    GM_addStyle(leetcode_css)
})();
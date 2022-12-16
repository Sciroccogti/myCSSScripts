// ==UserScript==
// @name            Sciroccogti-CSS
// @version         0.2
// @description     个人的CSS样式脚本
// @updateURL       https://raw.githubusercontent.com/Sciroccogti/myCSSScripts/master/dist/Sciroccogti-CSS.user.js
// @downloadURL     https://raw.githubusercontent.com/Sciroccogti/myCSSScripts/master/dist/Sciroccogti-CSS.user.js
// @author          Sciroccogti
// @license         MIT
// @match           *://*leetcode.cn/*
// @match           *://git.lab.sciroccogti.top/*
// @match           *://gitlab.seu.edu.cn/*
// @icon            https://www.sciroccogti.top/img/favicon.ico
// @grant           GM_addStyle
// @run-at          document-end
// ==/UserScript==

(function() {
    'use strict';
    // 力扣加大字体
    let leetcode_css =`
        /* leetcode problem description */
        .content__1Y2H {
            font-size:1rem;
        }

        /* leetcode editor */
        .monaco-mouse-cursor-text {
            font-family: Sarasa Mono SC Nerd !important;
        }

        /* gitlab code */
        .file-content.code pre .line {
            font-size:14px !important;
            line-height:21px !important;
        }
        `
    GM_addStyle(leetcode_css)
})();
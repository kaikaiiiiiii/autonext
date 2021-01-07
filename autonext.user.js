// ==UserScript==
// @name         autonext
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  blacksheepwall
// @author       You
// @match        https://lxp.mininglamp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const clickNextButton = () => {
        //var buttona = document.querySelector('button.van-dialog__confirm.van-hairline--left');
        var buttonf = document.querySelector('div[aria-labelledby="恭喜您，已完成学习"]');
        var buttona = document.querySelector('button.van-dialog__confirm.van-hairline--left');
        if (buttona && buttonf == null) {
            buttona.click();
        }
    }
    setInterval(clickNextButton, 10000);
    const clickPlayButton = () => {
        var buttonb = document.querySelector('button.plyr__control[aria-label="Play"]');
        if (buttonb) {
            buttonb.click();
        }
    }
    setInterval(clickPlayButton, 10000)
})();
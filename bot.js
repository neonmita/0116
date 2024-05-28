// ==UserScript==
// @name         28.05 - bot for yandex
// @namespace    http://tampermonkey.net/
// @version      2024-05-28
// @description  try to take over the world!
// @author       Rizovatova 
// @match        https://ya.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let input = document.getElementsByName("text")[0];
    let searchBtn = document.getElementsByClassName ("mini-suggest__button")[0];
    let menuNav = document.getElementsByClassName("HeaderPhoneNavigation-Tab")[0];
    let links = document.links;
    let keywords = ["топ самых быстрых машин в forza horizon 4", "Гайд Forza Horizon 4", "один из лучших результатов в серии Forza"];
    let keyword = keywords[getRandom(0, keywords.length)];

    if (menuNav === undefined) {
        input.value = keyword;
        searchBtn.click();

    } else {
        for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes("cubiq.ru")) {
                let link = links[i];
                console.log("нашел строку" + link);
                link.click();
            }
        }
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }











    // document.getElementsByClassName("HeaderPhoneNavigation-Scroll HeaderPhoneNavigation-Scroll_hasIndicator_yes")

    //document.getElementsByClassName("HeaderPhoneNavigation-Tab")[0]

})();

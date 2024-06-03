// ==UserScript==
// @name         28.05 - bot for yandex
// @namespace    http://tampermonkey.net/
// @version      2024-05-28
// @description  try to take over the world!
// @author       Rizovatova
// @match        https://ya.ru/*
// @match        https://cubiq.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let input = document.getElementsByName("text")[0];
    let searchBtn = document.getElementsByClassName ("mini-suggest__button")[0];
    let mainLogo = document.querySelector(".home-link2");

    //let menuNav = document.getElementsByClassName("HeaderDesktopNavigation-TabCover")[0]; //HeaderPhoneNavigation-Tab  ---- mob
    let links = document.links;
    let keywords = ["топ самых быстрых машин в forza horizon 4", "Гайд Forza Horizon 4", "один из лучших результатов в серии Forza", "кто победит паук vs скорпион"];
    let keyword = keywords[getRandom(0, keywords.length)];


    //работаем на главное стр. поисковика
    if (mainLogo !== null) {
        let i = 0;
        let timerId = setInterval(function() {
            input.value += keyword[i];
            i++;
            if (i == keyword.length) {
                clearInterval(timerId);
                searchBtn.click();
            }
        }, 225)

        //работаем на цел сайте
        } else if (location.hostname == "cubiq.ru") {

            setInterval(() => {
                let index = getRandom(0, links.length);
                let link = links[index];

                if (getRandom(0, 101) >= 80) {
                    location.href = "ya.ru";
                }

                if (link.href.includes("cubiq.ru")) {
                    link.click();
                }
            }, getRandom(2000, 3000))

            console.log("tada!!");
        }

    //работаем на стр. поиск. выдачи
    else {
        let nextPage = true;
        for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes("cubiq.ru")) {
                let link = links[i];
                nextPage = false;
                console.log("нашел строку" + link);
                setTimeout(() => {
                    link.target = "_self";
                    link.click();
                }, getRandom(2500, 4000))
            }
        }
        if(document.querySelectorAll(".Pager-Item_current")[0].innerText == "3") {
            nextPage = false;
            location.href = "ya.ru";
        }

        if(nextPage) {
            setTimeout(() => {
                document.querySelectorAll(".Pager-Item_type_next")[0].click();
            }, getRandom(3000, 4000))
        }
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }




    //VanillaReact Pager-Item Pager-Item_type_next    ---- document.querySelectorAll(".Pager-Item_type_next")[0].click()
    //VanillaReact Pager-Item Pager-Item_type_page
    //Pager-Item Pager-Item_type_page Pager-Item_current ------ document.querySelectorAll(".Pager-Item_current")[0].innerText
    //document.querySelector('[aria-label="Текущая страница 3"]')

    //let menuNav = document.getElementsByClassName("HeaderPhoneNavigation-Tab")[0];

    //document.querySelectorAll(".Pager-More")[0].click() ---- mob

    //document.querySelectorAll(".Button2_withSpin")[0].click()

    // document.getElementsByClassName("HeaderPhoneNavigation-Scroll HeaderPhoneNavigation-Scroll_hasIndicator_yes")

    //document.getElementsByClassName("HeaderPhoneNavigation-Tab")[0]

})();

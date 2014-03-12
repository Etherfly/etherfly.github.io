/**
 * Created by Etherfly on 12.03.14.
 *
 * This script controls the language used on the page.
 */

var LANG_ENG = 0;
var LANG_RUS = 1;

var lang = LANG_ENG;

document.onkeydown = function (event) {
    if (event.keyCode == 192) {
        lang = (lang == LANG_ENG) ? LANG_RUS : LANG_ENG;
        updateTranslation();
    }
};

function updateTranslation() {
    var classToShow = (lang == LANG_ENG) ? "lang-eng" : "lang-rus";
    var classToHide = (lang == LANG_ENG) ? "lang-rus" : "lang-eng";
    [].forEach.call(document.getElementsByClassName(classToShow), function (element) {
        element.style.display = "inherit";
    });
    [].forEach.call(document.getElementsByClassName(classToHide), function (element) {
        element.style.display = "none";
    });
}

updateTranslation();
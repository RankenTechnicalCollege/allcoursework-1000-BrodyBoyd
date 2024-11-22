"use strict";
$(document).ready( () => {

$("#faqs h2").click( evt => {
    const h2 = evt.currentTarget;

    $(h2).toggleClass("minus");
    $(h2).next().toggleClass("open");
    evt.preventDefault();
});

$("#faqs").find("a:first").focus();
});
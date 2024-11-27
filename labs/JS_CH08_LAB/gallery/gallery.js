"use strict";

$(() => { /* dom loaded */ });
  $("#image_list a").each( (index, link) => {
    const image = new Image();
    image.src = link.href;
  });

  $("#image_list a").click( evt => {
    const link = evt.currentTarget;
    

    $("#main_image").attr("src", link.href);
    $("#caption").text(link.title);
    evt.preventDefault();
  });
$("li:first-child a").focus();

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    tabindex += 1;
    console.log('Up arrow pressed');
  }
});

$(document).ready(function() {
     $("#hamburger").click(function () {
     $("header > nav + nav > ul, header > img + nav > ul").fadeToggle(400)
  });
  });

$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".NavLinks");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });




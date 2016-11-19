var $artwork-1 = $('.artwork-1');

$('.artwork-1').click(function (e) {
  $('#'+$(e.target).attr('class')).toggleClass('active');
});

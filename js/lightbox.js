var $popUp = $('.pop-up');

$popUp.click(function (e) {
  e.preventDefault();
  $('#'+$(e.target).attr('class')).toggleClass('active');
});

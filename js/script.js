
$(document).ready(function(){
  $('.click-rule').on('click',function(){
    $('.pop-rule').fadeIn();
  })
  $('.back').on('click',function(){
    $('.pop-rule').hide();
  })
})

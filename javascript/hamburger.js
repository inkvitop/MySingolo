$(document).ready(function(){
      $('.burger__icon').click(function(event){
            $('.burger__icon').toggleClass('burger__icon_active');
            $('.burger').toggleClass('burger_active');
            $('.shadow').toggleClass('overlay');
            $('body').toggleClass('lock');
            $('.burger__head h2').toggleClass('burger__logo_hide');
      });
});
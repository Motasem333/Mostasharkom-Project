

$(function () {
    'use strict';
    $('.exercises button').click(function (){
        $('.exercises .show-exercises > div').hide()
        $('.' + $(this).data('class')).show();
    });

});


$(function () {
    'use strict';
    $(window).scroll(function () {
        window.console.log($('.navbar').height())
        console.log(window.scrollY)
        var navbar = $('.navbar');
        if (window.scrollY >= navbar.height()) {
            navbar.addClass('scrolled');
        }
         
        else{
            navbar.removeClass('scrolled');
        }
    });
});


$(document).ready(function(){
    $( ".chest").click(function() {
      var x = $(window).scrollTop();
       $(window).scrollTop(x+700)
    });

    $( ".back").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+700)
      });

      $( ".shoulder").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+700)
      });

      $( ".six-pack").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+700)
      });

      $( ".back-shoulder").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+700)
      });

      $( ".anterior").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+500)
      });

      
      $( ".posterioe").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+500)
      });

      
      $( ".biceps").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+700)
      });

      
      $( ".triceps").click(function() {
        var x = $(window).scrollTop();
         $(window).scrollTop(x+700)
      });
    
  });

  


  
  
  
  
  
  
 









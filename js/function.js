/* this function for smooth scroll*/
$(function() {
    $(".nav li a").click(function(){
               $("html, body").animate({
                   scrollTop:$($(this).attr('href')).offset().top,
                
                },1500);
        });
});



    

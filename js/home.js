//scroll


var scrollButton = $('#scroll');

$(window).scroll(function(){

    if ($(window).scrollTop() >= 600){
        scrollButton.css("display","block");
    }
    
    else {
        scrollButton.css("display","none");
    }

    
});

scrollButton.click(function(){
    
    $(window).scrollTop(0) ;
})

//end scroll

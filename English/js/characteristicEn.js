
define(function(){ 
    function main(){   /* 20221013v1版-喜美*/ 
        $('.characteristic_box ul li').on('click', function(){
            let winW = $(window).width()
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
            let charaIndex = $(this).index()
            $('.characteristic_l li').removeClass('active')
            $('.characteristic_l li').eq(charaIndex).addClass('active')
 
            if(winW < 992) {
                if(charaIndex == 1){
                    $('.characteristic_l ul').css("paddingBottom","88%")
                }else if(charaIndex == 2){
                    $('.characteristic_l ul').css("paddingBottom","86%")
                }else if(charaIndex == 3){
                    $('.characteristic_l ul').css("paddingBottom","87%")
                }else if(charaIndex == 4){
                    $('.characteristic_l ul').css("paddingBottom","82%")
                }else if(charaIndex == 0){
                    $('.characteristic_l ul').css("paddingBottom","130%")
                }
            }
        })
        $('.characteristic_box ul li').on('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                let winW = $(window).width()
                $(this).siblings().removeClass('active')
                $(this).addClass('active')
                let charaIndex = $(this).index()
                $('.characteristic_l li').removeClass('active')
                $('.characteristic_l li').eq(charaIndex).addClass('active')
     
                if(winW < 992) {
                    if(charaIndex == 1){
                        $('.characteristic_l ul').css("paddingBottom","88%")
                    }else if(charaIndex == 2){
                        $('.characteristic_l ul').css("paddingBottom","86%")
                    }else if(charaIndex == 3){
                        $('.characteristic_l ul').css("paddingBottom","87%")
                    }else if(charaIndex == 4){
                        $('.characteristic_l ul').css("paddingBottom","82%")
                    }else if(charaIndex == 0){
                        $('.characteristic_l ul').css("paddingBottom","130%")
                    }
                }
           }
        });
    }
    return main;
});

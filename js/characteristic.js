
define(function(){ 
    function main(){    
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
                    $('.characteristic_l ul').css("paddingBottom","80.1%")
                }else if(charaIndex == 3){
                    $('.characteristic_l ul').css("paddingBottom","115%")
                }else if(charaIndex == 4){
                    $('.characteristic_l ul').css("paddingBottom","138%")
                }else if(charaIndex == 0){
                    $('.characteristic_l ul').css("paddingBottom","130%")
                }
            }
        })
    }
    return main;
});

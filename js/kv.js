$(document).ready(function(){
    $('.kv-slick').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        fade: true,
        speed: 1500,
    });
    $('.kv-slick-m').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        dots: true,
        arrows: false,
        fade: true,
        speed: 1500,
    });

    $('.youtube-slick').slick({
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '27vw',
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 675,
              settings: {
                centerPadding: '14vw',
                arrows: false,
              }
            },
        ]
    });

    $('.link-slick').slick({
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '27vw',
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 675,
              settings: {
                centerPadding: '18vw',
                arrows: false,
              }
            },
        ]
    });
});

$(function(){
    AOS.init();
})

//mobileMeun 手風琴
$(function(){

    $(".burger").click(function(){
        var $menu01 = $(".mobile-header");
        var $mb = $(".menu-bottom");
        $menu01.slideToggle(300,function(){});
        $mb.slideToggle(300,function(){});
        var $otherMenu = $(this).siblings().children(".mobile-ul-son");
        $otherMenu.slideUp(300);
    })
  
    $(".mobile-ul>li").click(function(){
        var $menu02 = $(this).children(".mobile-ul-son");
        $menu02.slideToggle(300);
        var $otherMenu = $(this).siblings().children(".mobile-ul-son");
        $otherMenu.slideUp(300);
    })
  
})

$(function(){
    var $win = $(window);
    var $mShow = $('.mobile-show');
    
    // 展示回到頂部按鈕
    $win.scroll(function () {
      if($win.width() > 675){
        if ($win.scrollTop() > 200) { 
            $mShow.show(300);
        }else{
            $mShow.hide(300);
        }
      }else{
        $mShow.css("display","none")
      }
    });
})

// $(function(){
//     $(".slick-active").prev().find("img").css("top","55%")
//     $(".slick-active").next().find("img").css("top","45%")

//     $('.youtube-slick').on('afterChange', function(event, slick){
//         $(".slick-active").prev().find("img").css("top","55%")
//         $(".slick-active").next().find("img").css("top","45%")
//       });
// })

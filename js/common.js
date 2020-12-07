(function($){
    $(window).load(function(){
        $('.introAni').delay(500).fadeOut(500)
    })
    $('#containerBox').load('main.html');
    

    var flagInit = true;
        init();
        function init(){
          var ww =$(window).width();
          if(ww>680){
            $('html').addClass('pc').removeClass('mobile')
            if(flagInit){
              $('#nav').show()
              $('.open_nav, .close_nav, .depth2').hide()
              flagInit = false
            }
          } else if(ww<=680){
            $('html').removeClass('pc').addClass('mobile')
            if(!flagInit){
              $('#nav').hide()
              $('.open_nav').show()
              flagInit = true
            }
          }
        }

        $(window).on('resize',function(){
          init()
        })


        $('.depth1 >li').on('mouseenter',function(){
            if($('html').hasClass('pc')){
              $(this).find('ul').stop().slideDown(300);
            }
        })

        $('.depth1 >li').on('mouseleave',function(){
            if($('html').hasClass('pc')){
              $(this).find('.depth2').stop().slideUp(300);
              $(this).find('.detail').stop().slideUp(100);
            }
        })
       
        $(".depth1 > li > a").on('click', function(){
          if( $('html').hasClass('mobile') ){
            $(this).next().stop().slideToggle(300)
            $(this).parent().siblings().each(function(){
              if( $(this).find('.depth2').css('display') === 'block') {
                  $(this).find('.depth2').stop().slideUp(100)
              }
            })
          }
        })
        
        $('.open_nav').on('click', function(){
            $(this).next().stop().show()
            $(this).hide();
            $('.close_nav').show();
        })
      
        $('.close_nav').on('click', function(){
            $(this).prev().stop().hide()
            $('.open_nav').show();
            $(this).hide();
            $('.depth2').hide();
        })
      



    $('.link-set a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container').remove();
        $('#containerBox').load(url);
    })

    $('#nav .depth1 li').on('click', function(){
        var url = $(this).find('a').attr('href');
        $('#container').remove();
        $('#containerBox').load(url);
    })
    $('.more a').on('click',function(e){
        e.preventDefault();
        var url =$(this).attr('href');
        $('#container').remove();
        $('#containerBox').load(url);
    })


    // $('.logo_nav h1 a').on('click',function(e){
    //     e.preventDefault();
    //     var url = $(this).attr('href');
    //     $('#container').remove();
    //     $('#containerBox').load(url)
    // })

    $(window).scroll(function () {
        // 스크롤 했을 때 진행프로젝트 영역
        var sct = $(this).scrollTop();
        var part3Box = $('.part3').offset().top - $(this).height() / 2
        var part5Box = $('.part5').offset().top - $(this).height() / 2
        // var notNear = $('.part3').offset().top - $(this).height()/1
        if (sct >= part3Box) {
            $('.box-img').addClass('on')
            $('.box-text-wrap').addClass('on')
            // console.log('여기까지')
        } else if (sct <= part3Box-450) {
            $('.box-img').removeClass('on')
            $('.box-text-wrap').removeClass('on')
            // console.log('여기까지2')
        }
        if (sct >= part5Box) {
            $('.part5-box').addClass('on')
        } else if (sct <= part5Box-450) {
            $('.part5-box').removeClass('on')
        }


    })
    $('#family-site').on('click', function(){
      console.log('뀨')
      var familyUrl = $('#family-site').val();
      if(familyUrl===!''){
        $('#fam-site').attr({
          href: familyUrl,
        }).submit()
      } else {
        return false
      }
    })
})(jQuery)

// javascript

//Move to family site
const familySite = document.querySelector('#family-site');
familySite.addEventListener('change', (e)=>{
  window.open(e.target.value, '_blank');
})


$(document).ready(function(){
  $('#headerWrap').on('mouseenter',function(){
      $('#gnb>ul>li>a').css({color:"#000"});
      $('#franchise').css({backgroundPosition:"center bottom"});
      $('#headerWrap #header h1 a').css({backgroundImage:"url(./images/logo2.png)"});
  });
// 헤더랩에 마우스 오버했을때

  $('#headerWrap').on('mouseleave',function(){
      $('#gnb>ul>li>a').css({color:"#fff"});
      $('#franchise').css({backgroundPosition:"center top"});
      $('#header h1 a').css({backgroundImage:"url(./images/logo1.png)"});
  });
// 헤더랩에 마우스 아웃했을때


  $('#gnb').on('mouseenter',function(){
    // $('#headerWrap').animate({backgroundColor:"#fff"});
    $('#franchise').css({backgroundPosition:"center bottom"});
    $('#header h1 a').css({backgroundImage:"url(./images/logo2.png)"});
    $('.snb_background,#gnb .snb').stop().slideDown(190);
    $('#headerWrap').css({borderBottom:"1px solid #ccc"});
  })
// 네비에 마우스 오버했을때

   $('#gnb').on('mouseleave',function(){
     $('.snb_background,#gnb .snb').stop().slideUp(300);
   });
// 네비에 마우스 아웃했을때


   $('#gnb>ul>li').mouseenter(function(){
    $(this).children('a').css({color:"#9b0a1e"});
    var GnbMenu = $(this).children('a').text();
    setTimeout(function(){
      $('#aboutGnb').css({display:"block"});
    },100);
    $('#aboutGnb dl').each(function(idx,element){
      if($(element).attr('data-menu')==GnbMenu){
        $(this).css({display:"block"});
      }
    });
    $(this).children('.snb').css({background:"#F7F4F1"});
   });
   $('#gnb>ul>li').mouseleave(function(){
    $(this).children('a').css({color:"#000"});
    $(this).children('ul').css({background:"#fff"});
    $('#aboutGnb').css({display:"none"});
    $('#aboutGnb dl').css({display:"none"});
   });

  $('#openstoreWrap .popup_close').on('click',function(){
      $('#openstoreWrap').hide();

      return false;
  });
// 팝업창 닫기클릭했을때
// --------------------------------------- 헤더메뉴 ---------------------------------------------------------

});

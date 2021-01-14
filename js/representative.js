$(document).ready(function(){
  $('#greeting').css({opacity:0,
                      left:"0px",
                      top:"50px"});
    //인사말 초기화
  setTimeout(function() {
    $('#greeting').animate({opacity:1,
                  left:"0px",
                  top:"0px"});
    }, 300);
    // 인사말 생성



  $(window).scroll(function(){
    var p_one_dt = 80;
    var p_one_dd = 270;
    var p_two_dt = $('#promiseOneWrap').offset().top;
    var p_two_dd = $('#promise_one dl dd').position().top;

  console.log($(this).scrollTop());
    if($(this).scrollTop() >= p_one_dt){
      $('#promise_one dl dt').animate({
                opacity:1,
                marginLeft:0
      },600);
    }
    //다짐1 dt 생성
    if($(this).scrollTop() >= p_one_dd){
      $('#promise_one dl dd').animate({
                opacity:1,
                marginLeft:0
      },600);
    }
    // 다짐1 dd 생성
    if($(this).scrollTop() >= p_two_dt){
      $('#promise_two dl dt').animate({
                opacity:1,
                marginLeft:0
      },600);
    }
    // 다짐2 dt 생성
    if($(this).scrollTop() >= p_two_dd){
      $('#promise_two dl dd').animate({
                opacity:1,
                marginLeft:0
      },600);
    }
    // 다짐2 dd 생성
  });

});

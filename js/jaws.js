$(document).ready(function(){

  $("#main_slide .slick-wrap").slick({
    arrows : true,
    dots : true,
    infinite : true,
    autoplay : true,
    autoplaySpeed : 5000,
    slidesToShow : 1,
    slidesToScroll : 1,
    appendArrows : $('#main_slide .arrows_wrap'),
    appendDots : $('#main_slide .dots_wrap')
  });
});


/*
$('#commu_btn .commu_left_btn').on('click',function(){
    $('#commu_list>ul').prepend($('#commu_list>ul>li:last'))
                       .css({marginLeft:"-384px"})
                       .animate({marginLeft:"+="+"384px"},600);
});
// 커뮤니티 왼쪽버튼 클릭


$('#commu_btn .commu_right_btn').on('click',function(){
    $('#commu_list>ul').animate({marginLeft:"-="+"384px"},600,function(){
    $('#commu_list>ul').css({marginLeft:0})
                       .append($('#commu_list>ul>li:first'));
    });
});
// 커뮤니티 오른쪽버튼 클릭

setInterval(function(){$('#commu_btn .commu_right_btn').click()},3000);

//커뮤니티 자동 슬라이드

$("#commu_btn>button").click( function () {
	var comm_btn = $(this);
	comm_btn.attr("disabled", true);
	setTimeout( function() {
		comm_btn.removeAttr("disabled");
	},700);
});
// 커뮤니티 슬라이드 버튼 연속클릭막기

*/

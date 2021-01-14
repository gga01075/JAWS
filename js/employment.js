$(document).ready(function(){
  setTimeout(function(){
    $('#introduce h3').animate({
        opacity:1,
        top:"0px"
    },400);

    $('#introduce dl dt').animate({
        opacity:1,
        left:"0px"
    },400);

    $('#introduce dl dd:first-of-type').animate({
        opacity:1,
        left:"0px"
    },400);

    $('#introduce dl dd:last-of-type').animate({
        opacity:1,
        right:"0px"
    },600);
  },100);
      //기업소개 슬라이딩


  $(window).scroll(function(){
        if($(this).scrollTop()>=400){
            $('#welfare h3').animate({
              opacity:1,
              top:"0px"
            });

            $('#welfare_content').animate({
              opacity:1,
              top:"100px"
            });
        }
      //복리후생 슬라이딩



      if($(this).scrollTop()>=1300){
          $('#rightPeople h3').animate({
            opacity:1,
            top:"0px"
          });

          $('#rightPeople h4').animate({
            opacity:1,
            top:"40px"
          });

          $('#rightPeople li:nth-of-type(1)').animate({
            opacity:1,
            left:"0px"
          },200);

          $('#rightPeople li:nth-of-type(2)').animate({
            opacity:1,
            left:"280px"
          },400);

          $('#rightPeople li:nth-of-type(3)').animate({
            opacity:1,
            left:"560px"
          },600);

          $('#rightPeople li:nth-of-type(4)').animate({
            opacity:1,
            left:"840px"
          },800);
      }
      //인재상 슬라이딩

      if($(this).scrollTop()>=2000){
        $('#employNotice h3').animate({
          opacity:1,
          top:"0px"
        });

        $('#employNotice h4').animate({
          opacity:1,
          left:"0px"
        });

        $('#procedure ul').animate({
          opacity:1,
          left:"0px"
        },400);


        $('#procedure ul li:nth-of-type(1)').animate({
          opacity:1,
          left:"0px"
        },200);

        $('#procedure ul li:nth-of-type(2)').animate({
          opacity:1,
          left:"295px"
        },400);

        $('#procedure ul li:nth-of-type(3)').animate({
          opacity:1,
          left:"590px"
        },600);

        $('#procedure ul li:nth-of-type(4)').animate({
          opacity:1,
          left:"885px"
        },800);
      }

      if($(this).scrollTop()>=2350){
        //채용공고-채용절차

        $('#experiencedWorker h4').animate({
          opacity:1,
          left:"0px"
        });

        $('#experiencedWorker ul').animate({
          opacity:1,
          left:"0px"
        },400);


        $('#experiencedWorker ul li:nth-of-type(1)').animate({
          opacity:1,
          left:"0px"
        },200);

        $('#experiencedWorker ul li:nth-of-type(2)').animate({
          opacity:1,
          left:"295px"
        },400);

        $('#experiencedWorker ul li:nth-of-type(3)').animate({
          opacity:1,
          left:"590px"
        },600);
        //채용공고-본사 경력사원 채용

      }
      //채용공고 슬라이딩
  });


  $('#employment_quick ul li').hover(function(){
      $(this).addClass('quick')
  },function(){
      $(this).removeClass('quick')
  });
  //컨텐츠이동메뉴 호버시

    $('#employment_quick ul li,#employment_quick .quick').on('click',function(){
      var content =  $(this).children('a').text();
      var contentPosition = $("#"+content).position().top;
      console.log(contentPosition);
      $('body,html').animate({scrollTop:contentPosition-80});
    })
  //컨텐츠이동메뉴 클릭시


});




const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]




// 1. 너무 무거움
// 2. pure javascript 가 jQuery 처럼 쉬워진다면?
// 3. single Page Application X 
// ajax
// fetch API => axios

// const list = [...document.querySelectorAll('.navigation > li')];

// list.forEach((li,index)=>{
//   li.addEventListener('click',()=>{
//       console.log(index);
//   })
// })

// $('.navigation > li').click(function(e){

//   e.preventDefault();

//   const index = $(this).index();


//   $('.navigation > li').removeClass('is-active');

//   $(this).addClass('is-active');

//   $('.visual img').attr({
//     'src': `./assets/part01/${data[index].src}`,
//     'alt': data[index].alt
//   })

// })


$('.navigation').on('click','li',function(e){
  e.preventDefault();

  const index = $(this).attr('data-index');


  $('.navigation > li').removeClass('is-active');

  $(this).addClass('is-active');

  $('.visual img').attr({
    'src': `./assets/part01/${data[index-1].src}`,
    'alt': data[index-1].alt
  })

})

/* ============================================================
   예제 1 — fade 전환 : jQuery 애니메이션
   ------------------------------------------------------------
   순수 JS라면 opacity transition + transitionend 이벤트가 필요한데,
   jQuery는 fadeOut / fadeIn 메서드 하나로 끝난다.
   ============================================================ */

// 위쪽 예제의 click 핸들러를 먼저 떼어낸다 → .off()
// (안 떼면 두 핸들러가 같이 돌아서 이미지가 즉시 바뀌어 버린다)
$('.navigation').off('click');

$('.navigation').on('click', 'li', function (e) {
  e.preventDefault();

  const index = $(this).attr('data-index') - 1;

  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active');

  $('.visual img')
    .stop(true, true)                   // 연타 대비 : 돌고 있던 애니메이션 정리
    .fadeOut(300, function () {         // 다 사라지면 콜백 실행

      // 콜백 안에서도 $(this) 는 그대로 .visual img
      $(this)
        .attr({
          src: `./assets/part01/${data[index].src}`,
          alt: data[index].alt,
        })
        .fadeIn(300);                   // 교체 후 다시 등장 (체이닝)
    });
});

/* 바꿔가며 보여줄 것
   .fadeOut(300)  →  .slideUp(300)  →  .animate({opacity:0, height:0}, 300)
   숫자 대신 'slow' / 'fast' 도 된다 : .fadeOut('slow')
*/

/* ============================================================
   예제 4 — 마우스를 따라다니는 커서
   ------------------------------------------------------------
   $('<div>') : 문자열로 요소를 만들고 바로 appendTo 로 붙인다.
   hover()    : mouseenter / mouseleave 를 인자 두 개로 한 번에.
   ============================================================ */

// DOM 생성이 한 줄 (순수 JS : createElement → className → appendChild)
$('<div class="cursor"></div>').appendTo('body');

$(document).on('mousemove', function (e) {

  $('.cursor').css({
    left: e.clientX,
    top: e.clientY,
  });
});

$('.navigation > li').hover(
  function () {
    $('.cursor').addClass('is-big'); 
  },
  function () {
    $('.cursor').removeClass('is-big');
  }
);

/* ============================================================
   예제 8 — 스크롤 진행 바
   ------------------------------------------------------------
   scrollTop()  : 지금까지 스크롤된 거리
   height()     : $(document) = 문서 전체 높이 / $(window) = 보이는 높이
   ============================================================ */

$('<div class="progress"></div>').appendTo('body');

$(window).on('scroll', function () {
  const scrolled = $(window).scrollTop();                       // 내려온 거리
  const scrollable = $(document).height() - $(window).height(); // 내려갈 수 있는 총 거리

  const rate = scrollable > 0 ? scrolled / scrollable : 0;      // 0 ~ 1

  $('.progress').css('width', rate * 100 + '%');
});

// 이 페이지는 .container 가 화면 중앙 고정이라 원래 스크롤이 없다.
// 데모용으로 문서를 길게 늘리는 스위치를 만들어 둔다.
$('<button type="button" class="scroll-demo-btn">스크롤 데모 ON</button>')
  .appendTo('body')
  .on('click', function () {
    const isOn = $('body').toggleClass('is-scroll-demo').hasClass('is-scroll-demo');

    $(this).text(isOn ? '스크롤 데모 OFF' : '스크롤 데모 ON');

    $(window).trigger('scroll');  // trigger : 이벤트를 코드로 직접 발생시킨다
  });

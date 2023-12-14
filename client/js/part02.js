


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



// 1. 너무 무겁다.
// 2. javascript가 jquery처럼 쉬워진다면? xmlHttpRequest fetch API
// 3. Single Page Application 불가능  (barba.js) 
// 



const list = $('.navigation > li')


// 이벤트 위임 처리 안하고 잡는 방법

$('.navigation > li').click(function(){
  
  let index = $(this).index();

  $('.visual img').attr({
    'src':`./assets/part01/${data[index].src}`,
    'alt':data[index].alt
  })

  $('.navigation > li').removeClass('is-active')
  $(this).addClass('is-active');

  return false;

})

















// 이벤트 위임으로 잡는 방법 















































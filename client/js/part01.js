


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





// navigation을 선택 후 이벤트 위임을 걸어주세요.


// 나머지들은 제거  => 모든 li들에게 클래스 제거 
// 선택한 대상에 is-active 클래스를 넣어주세요.

const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');
// const li = getNodes('li'); // nodeList



const split = new SplitText('h3',{type:'chars'});




function handleClick(e){
  
  e.preventDefault();
  
  let li = e.target.closest('li');

  if(!li) return;

  let index = li.dataset.index;

  const list = Array.from(navigation.children);
  // const list = [...navigation.children];
  
  // list.forEach(li => li.classList.remove('is-active'))
  list.forEach(li => removeClass(li,'is-active'))
  
  // const a = e.target.closest('a');
  // visualImage.src = a.href
  

  //  내가 n번째 li를 선택하고 있는가?
  //  data-index 수집하기


  visualImage.src = `./assets/part01/${data[index-1].src}`
  visualImage.alt = data[index-1].alt;

  // li.classList.add('is-active')
  addClass(li,'is-active');
    // e.target.classList.add('is-active')


    gsap.from(split.chars,{opacity:0,y:30,stagger:0.05,ease:'back(2)',immediateRender:false})
}






navigation.addEventListener('click',handleClick)






















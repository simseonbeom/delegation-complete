


  // 1. button 찾기
  //    - closest
  //    - getAttribute

  // 2. 클래스 toggle 하기 
  //    - classList.toggle
  

const content = document.querySelector('.contents')
const textField = document.querySelector('#comment37');




function handleClick(e){
  e.preventDefault();

  let target = e.target;
  // const button = target.closest('button');

 
  while(!target.getAttribute('data-name')){
    target = target.parentElement;

    if(target.tagName === 'BODY'){
      target = null;
      return;
    }
  }


  // if(!button) return;

  if(target.dataset.name === 'like'){
    target.classList.toggle('active');
  }

  if(target.dataset.name === 'comment'){
    textField.focus();
  }

  if(target.dataset.name === 'more'){
    target.classList.toggle('active');
  }

  if(target.dataset.name === 'delete'){
    if(confirm('우리의 추억을 정말 없앨거야..?')){
      this.remove()
    }
  }


  
  
  if(target.dataset.name === 'send'){
    
    
    console.log( textField.value );
    
    if(textField.value === '') return;

    const template = `
      <div class="id">
        <div class="profile_img border_over">
          <img src="./assets/part04/tigerr.png" alt="프로필사진" />
        </div>
        <div class="comment_field">
          <div class="text_container">
            <div class="name"><a href="#">범쌤</a></div>
            <div class="text_field">${textField.value}</div>
          </div>
        </div>
      </div>
    `
    const comment_container = document.querySelector('.comment_container');

    comment_container.insertAdjacentHTML('beforeend',template);

    textField.value = '';


    comment_container.scrollTop = comment_container.scrollHeight;

  }
}



content.addEventListener('click',handleClick)


































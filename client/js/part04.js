




const content = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode('.comment_container');



function handleClick(e){
  e.preventDefault();
  let target = e.target;

  while(!target.getAttribute('data-name')){
    target = target.parentElement;

    if(target.tagName === 'BODY'){
      target = null;
      return;
    }
  }
  
  
  if(target.dataset.name === 'like'){
    target.classList.toggle('active');
  }


  if(target.dataset.name === 'comment'){
    textField.focus();
  }


  if(target.dataset.name === 'send'){


    if(textField.value === '') return;

    const template = /* html */ `
      <div class="id">
          <div class="profile_img border_over"><img src="./assets/part03/tigerr.png" alt="프로필사진"></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심심</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
    `

    insertLast(commentContainer,template);

    commentContainer.scrollTop = commentContainer.scrollHeight;

    textField.value = ''

  }
  
}


content.addEventListener('click',handleClick)

























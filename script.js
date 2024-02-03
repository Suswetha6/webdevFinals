const Createpost=document.getElementById("post_button");
const postSide=document.querySelector(".post-side");
const postContent=document.getElementById("postContent");
const postimg=document.createElement('img');
postimg.setAttribute('src','images/profile_image.png');
postimg.setAttribute('class','dp');
const cmntimg=document.createElement('img');
cmntimg.setAttribute('src','images/comment.png');
cmntimg.setAttribute('class','cmnt');

Createpost.addEventListener('click',createPost)

function createPost(){
  const body =document.body;
  const post = document.createElement('div');
  post.setAttribute('class','myPost');
  post.appendChild(postimg);
  post.textContent=postContent.value;
  postSide.appendChild(post);
  postContent.value="";
  post.appendChild(cmntimg);
}

cmntimg.addEventListener('click',createComment)

function createComment(){
  const cmnt= document.createElement('div');
  cmnt.setAttribute('class','mycmnt');
  cmnt.appendChild(postimg);
  cmnt.textContent=postContent.value;
  myPost.appendChild(post);
  postContent.value="";
}
//1.입력받으면 입력값 초기화
//2. 입력값 댓글로들어가기
//3. 댓글 삭제, 수정기능
//4. 좋아요 투표기능
//5. 타임스템프기능
//6. 무작위 아이디  
//7. 댓글 삭제기능
//8. 댓글 수정기능

const title = document.querySelector("#title");
const _id = document.querySelector("#_id");
const author = document.querySelector("#author");
const content = document.querySelector("#content");
const created_at = document.querySelector("#created_at");
const views = document.querySelector("#views");


const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거.

var commentArray = new Object();
var commentCount = 0;
window.onload = async function() {

    console.log(window.localStorage.getItem('clicked_id'));

    
   fetch(`http://3.36.62.87/forum/api/post/read_specific.php?post_id=${window.localStorage.getItem('clicked_id')}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "origin" : "http://3.36.62.87",
          //"Cookie" : 'JWT=' + localStorage.getItem('jwt')
        },
        
    }).then((response) => response.json())
    .then((data) => {
        //console.log(data);
        title.innerHTML=data.title;
        _id.innerHTML=data._id;
        author.innerHTML=data.author;
        content.innerHTML=data.content;
        created_at.innerHTML=data.created_at;
        views.innerHTML=data.views;

    });

    fetch(`http://3.36.62.87/forum/api/comment/read.php?post_id=${window.localStorage.getItem('clicked_id')}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "origin" : "http://3.36.62.87",
          //"Cookie" : 'JWT=' + localStorage.getItem('jwt')
        },
        
    }).then((response) => response.json())
    .then((data) => {
        //console.log(data);
        commentArray = data;
        //console.log(commentArray[0]._id);
        mainCommentCount.innerHTML = 0;
        if (data.length > 0) {
            for (var i=data.length-1; i>=0; i--){
                showComment(data[i].content);
            }
            mainCommentCount.innerHTML = data.length;
        }
        
    });

}
//타임스템프 만들기

function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec;
    return time;

}

function deleteComments(event){    
    const btn = event.target;    
    const list = btn.parentNode.parentNode;//commentList
    rootDiv.removeChild(list);
    //console.log(event.target.id);
    deleteCommetFromServer(event.target.id);
    //메인댓글 카운트 줄이기.
    //CommentCount--;
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0;
    }else{
        mainCommentCount.innerHTML--;
    }
}

function deleteCommetFromServer(id){
    fetch("http://3.36.62.87/forum/api/comment/delete.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "origin" : "http://3.36.62.87",
          
        },
        body: JSON.stringify({
            "_id" : id,
            "JWT" : window.localStorage.getItem('jwt'),
        }),
    }).then((response) => console.log(response));
}

//댓글보여주기
function showComment(comment){
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const countSpan = document.createElement('span') 
    const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
    //삭제버튼 만들기
    
    console.log("댓글개수", commentCount);
    commentList.className = "eachComment";
    commentList.style.fontSize = "13px";
    userName.className="name";
    inputValue.className="inputValue";
    showTime.className="time";
    //유저네임가져오기 
    userName.innerHTML = "관리자";  
    userName.style.fontSize = "13px";

    //입력값 넘기기
    inputValue.innerText = comment;
    //타임스템프찍기
    showTime.innerHTML = commentArray[commentCount++].created_at;
    countSpan.innerHTML=commentCount+1;
    //투표창 만들기, css먼저 입혀야함.  
    //댓글뿌려주기       
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    rootDiv.prepend(commentList);
    console.dir(rootDiv);

}

function didTapSubmitBtn(currentVal){
    var content = inputBar.value;
    var post_id = window.localStorage.getItem('clicked_id');

    fetch("http://3.36.62.87/forum/api/comment/create.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "origin" : "http://3.36.62.87"
        },
        body: JSON.stringify({
            "content" : currentVal,
            "post_id" : window.localStorage.getItem('clicked_id'),
            "JWT" : window.localStorage.getItem('jwt'),
            
        }),
    }).then((response) => console.log(response));
}



//버튼만들기+입력값 전달
function pressBtn(){ 
   const currentVal = inputBar.value;
   if(!currentVal.length){
      alert("댓글을 입력해주세요!!");
   }else{
      commentCount = 0;
      didTapSubmitBtn(currentVal);
      showComment(currentVal);  
      mainCommentCount.innerHTML++;
      inputBar.value ='';
   }
}

btn.onclick = pressBtn;

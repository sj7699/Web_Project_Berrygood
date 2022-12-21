
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="product.css">
    <link rel="stylesheet" type="text/css" href="order.css">
    <link rel="stylesheet" type = "text/css" href="../mainpage.css">
    <link rel="stylesheet" type="text/css" href="../css/css.css?ver=2">
    <link rel="stylesheet" type="text/css" href="../css/style.css?ver=3">
    <link rel="stylesheet" type="text/css" href="../board/reset.css?ver=5">
    <link rel="stylesheet" type="text/css" href="../board/style.css?ver=6">
    <script src="https://kit.fontawesome.com/47f0662df2.js" crossorigin="anonymous"></script>

    <style>
        #modal.modal-overlay {
            width: 3000px;
            height: 1000px;
            position: absolute;
            left: 0;
            top: 0;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(1.5px);
            -webkit-backdrop-filter: blur(1.5px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        #modal .title {
            padding-left: 10px;
            display: inline;
            text-shadow: 1px 1px 2px gray;
            color: white;
            
        }
        #modal .title h2 {
            display: inline;
        }
        #modal .close-area {
            display: inline;
            float: right;
            padding-right: 10px;
            cursor: pointer;
            text-shadow: 1px 1px 2px gray;
            color: white;
        }
        
        #modal .content {
            margin-top: 20px;
            padding: 0px 10px;
            text-shadow: 1px 1px 2px gray;
            color: white;
        }
    </style>
    <title>Document</title>
        <a class="titleImg" href="../mainpage.html"><img src=".././main-image/title.png", alt="농장 이름", width="300",width="300"></a>
        <!-- </div> -->
        <div id="titlebar"></div>

        <div id="navbar">
            <div id="navbar-icon">
                <a href="../mainpage.html"><i class="fa-solid fa-house"></i></a>
                <!--<i class="fa-solid fa-bars"></i>-->
            </div>

            <ul id="navbar-menu">
                <li><a href="../introduce.html">소개</a></li> <!--소개 페이지 따로-->
                <li><a href="./product.php">제품</a></li>
                <li><div class="dropdown">
                    <span class="dropbtn_icon"><a href="#" onclick= "location.href = 'boardpage.html' " >게시판</a></span>
                    <div class="dropdown-content">
                      <a href="../board/notice/boardpage.html">공지사항</a>
                      <a href="../board/Q&A/qnapage.html">Q&A</a>
                    </div>
                  </div></li>
            </ul>

            <ul id="navbar-login">
                <li><a onclick="hasToken()">마이페이지</a></li>
                <li><a id = "btn-modal">로그인/회원가입</a></li>
            </ul>
            <div id="modal" class="modal-overlay">
                <main id="app">
                    <h1 class="blind">로그인 및 회원가입창</h1>
                    <!-- 닫기 섹션 -->
                    <section class="top-close">
                      <p class="top-txt">&nbsp&nbsp&nbsp&nbsp로그인  또는  회원가입</p>
                        <button class="close">
                          <img src="./img/Vector 2.png" alt="">
                          <img src="./img/Vector 3.png" alt="">             
                        </button> 

                    </section>
                    <!-- 입력창 -->
                    <section class="user-input">
                      <h2 class="blind">아이디 비밀번호 입력창</h2>
                      <p class="msg">베리굿에서 맛있는 상품들을 구매해보세요 :)</p>
                      <label for="id"></label>
                      <input class="inp-id" type="text" id="id" required placeholder="아이디">
                      <label for="pw"></label>
                      <input class="inp-pw" type="password" id="pw" required placeholder="비밀번호">
                      <div class="check-wrap">
                        <input class="check-keep" type="checkbox" id="check" name="로그인상태유지">
                        <label for="check"> </label>
                        <span class="keep-txt">로그인 상태 유지</span>
                      </div>
                      <button class="log-btn" type="submit" onclick="didClickLoginBtn()" >로그인</button>
                      <ul class="join-find">
                        <li class="user-join"><a href="#none">회원가입</a></li>
                        <li><a href="#none">아이디/비밀번호 찾기</a></li>
                      </ul>
                      <div class="log-other">또는</div>
                    </section>
                    <!-- 다른계정로그인 -->
                    <section class="other-log">
                      <h2 class="blind">다른계정으로 로그인</h2>
                      <div class="other-btn">
                        <a class="log-glg btn glg" href="https://www.google.com" target="_blank">
                          <img src="./img/Google.png" alt="">
                          <div class="log-txt">구글 계정으로 로그인</div></a>
                
                        <a class="log-face btn face" href="https://www.facebook.com" target="_blank">
                          <img src="./img/facebook.png" alt="">          
                          <div class="log-txt">페이스북 계정으로 로그인</div></a>
                
                        <a class="log-naver btn naver" href="https://www.naver.com" target="_blank">
                          <img src="./img/naver.png" alt="">          
                          <div class="log-txt">네이버 계정으로 로그인</div></a>
                
                        <a class="log-kao btn kao" href="https://www.kakaocorp.com" target="_blank">
                          <img src="./img/message.png" alt="" >
                          <div class="log-txt">카카오톡 계정으로 로그인</div></a>
                      </div>
                    </section>
                  </main>
            </div>

        </div>
    <!-- 장바구니와 구매는 같은 css 사용  -->
    <title>Document</title>
</head>
<body>
    <div id="gray">
    <div class="pageName">장바구니</div>
    <div id= "info">
        <div id="productInfo" class="cardInfo">
            <div class="title">장바구니</div>
        </div>


    </div>
    </div>
    
    <div style="clear:both;"></div> <!--하단과 분리-->
        <hr/>

        <div id="second-cat"> <!--모든 페이지에 추가-->
            <div id="map" ><h3>🔎오시는 길</h3>
                <!-- * 카카오맵 - 지도퍼가기 -->
                <!-- 1. 지도 노드 -->
                <div id="daumRoughmapContainer1671524483104" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%;"></div>

                <!--
                    2. 설치 스크립트
                    * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
                -->
                <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

                <!-- 3. 실행 스크립트 -->
                <script charset="UTF-8">
                    new daum.roughmap.Lander({
                        "timestamp" : "1671524483104",
                        "key" : "2d4ip",
                        //"mapWidth" : "350",
                        "mapHeight" : "175"
                    }).render();
                </script>
                <h4>베리굿 농장, 제주시 조천읍 와흘리 2419-2 </h4>
                </div>
            </div>
        
            <div id="copyright">
                <p><br><br>📞TEL : 010-9964-8294</p>
                <p>💰계좌 정보 : 농협 352-0944-0792-53 장주영</p>
                <img src="../main-image/title.png">
                <address>
                Copyright &copy, BERRYGOOD ALL. rights resevered<br>
                tre021040@naver.com<br><br>
                이용약관 <span id="personal-info"><a href="personal.html"
                    onclick="window.open(this.href,'_blank','width=800, height=600'); return false;">개인정보 처리방침</a></span>
            </address>
            </div>


</body>
    <script>
        const modal = document.getElementById("modal")
            function modalOn() {
                modal.style.display = "flex"
            }
            function isModalOn() {
                return modal.style.display === "flex"
            }
            function modalOff() {
                modal.style.display = "none"
            }
            const btnModal = document.getElementById("btn-modal")

            btnModal.addEventListener("click", e => {
                modalOn()
            })

            const closeBtn = modal.querySelector(".close")

            closeBtn.addEventListener("click", e => {
                modalOff()
            })

            modal.addEventListener("click", e => {
                const evTarget = e.target
                if(evTarget.classList.contains("modal-overlay")) {
                    modalOff()
                }
            })
            
            window.addEventListener("keyup", e => {
                if(isModalOn() && e.key === "Escape") {
                    modalOff()
                }
            })


            function didClickLoginBtn() {

                const idToPost = document.getElementById('id').value;
                const pwToPost = document.getElementById('pw').value;

                fetch("http://3.36.62.87/user/api/login.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "origin" : "http://3.36.62.87"
                    },
                    body: JSON.stringify({
                        "id" : idToPost,
                        "password" : pwToPost
                    }),
                }).then((response) => response.json())
                .then((data) => {
                    window.localStorage.setItem('jwt', data.JWT); //JWT 저장해주는 방식
                    console.log(localStorage.getItem('jwt'));
                    if (idToPost=="administrator" && pwToPost=="administrator1!"){
                        window.localStorage.setItem('isAdmin', true );
                        alert("안녕하세요! 관리자님")
                    } 
                    else{
                        window.localStorage.setItem('isAdmin', false );
                        alert("안녕하세요!")
                    }
                    
                    window.location.replace("../mainpage.html");
                        
                    });
                
                    
                
            }

            function hasToken(){
                fetch("http://3.36.62.87/user/api/is_login.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "origin" : "http://3.36.62.87",
                    },
                    body: JSON.stringify({
                        "JWT" : window.localStorage.getItem('jwt'),
                    }),
                    
                }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log(window.localStorage.getItem("isAdmin"));
                    if (data.message == "no jwt token"){
                        alert("로그인을 해주세요");
                    }
                    else{
                        window.location.replace("../mypage.html");
                    }
                    
                
                });
                
            }
    </script>
<script src="bucket.js"></script>
</html>
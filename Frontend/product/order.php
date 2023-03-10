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
</head>
<body>
        <a class="titleImg" href="../mainpage.html"><img src=".././main-image/title.png", alt="?????? ??????", width="300",width="300"></a>
    
    

        <div id="titlebar"></div>

        <div id="navbar">
            <div id="navbar-icon">
                <a href="../mainpage.html"><i class="fa-solid fa-house"></i></a>
                <!--<i class="fa-solid fa-bars"></i>-->
            </div>

            <ul id="navbar-menu">
                <li><a href="../introduce.html">??????</a></li> <!--?????? ????????? ??????-->
                <li><a href="./product.php">??????</a></li>
                <li><div class="dropdown">
                    <span class="dropbtn_icon"><a href="#" onclick= "location.href = 'boardpage.html' " >?????????</a></span>
                    <div class="dropdown-content">
                      <a href="../board/notice/boardpage.html">????????????</a>
                      <a href="../board/Q&A/qnapage.html">Q&A</a>
                    </div>
                  </div></li>
            </ul>

            <ul id="navbar-login">
                <li><a onclick="hasToken()">???????????????</a></li>
                <li><a id = "btn-modal">?????????/????????????</a></li>
            </ul>
            <div id="modal" class="modal-overlay">
                <main id="app">
                    <h1 class="blind">????????? ??? ???????????????</h1>
                    <!-- ?????? ?????? -->
                    <section class="top-close">
                      <p class="top-txt">&nbsp&nbsp&nbsp&nbsp?????????  ??????  ????????????</p>
                        <button class="close">
                          <img src="./img/Vector 2.png" alt="">
                          <img src="./img/Vector 3.png" alt="">             
                        </button> 

                    </section>
                    <!-- ????????? -->
                    <section class="user-input">
                      <h2 class="blind">????????? ???????????? ?????????</h2>
                      <p class="msg">??????????????? ????????? ???????????? ?????????????????? :)</p>
                      <label for="id"></label>
                      <input class="inp-id" type="text" id="id" required placeholder="?????????">
                      <label for="pw"></label>
                      <input class="inp-pw" type="password" id="pw" required placeholder="????????????">
                      <div class="check-wrap">
                        <input class="check-keep" type="checkbox" id="check" name="?????????????????????">
                        <label for="check"> </label>
                        <span class="keep-txt">????????? ?????? ??????</span>
                      </div>
                      <button class="log-btn" type="submit" onclick="didClickLoginBtn()" >?????????</button>
                      <ul class="join-find">
                        <li class="user-join"><a href="#none">????????????</a></li>
                        <li><a href="#none">?????????/???????????? ??????</a></li>
                      </ul>
                      <div class="log-other">??????</div>
                    </section>
                    <!-- ????????????????????? -->
                    <section class="other-log">
                      <h2 class="blind">?????????????????? ?????????</h2>
                      <div class="other-btn">
                        <a class="log-glg btn glg" href="https://www.google.com" target="_blank">
                          <img src="./img/Google.png" alt="">
                          <div class="log-txt">?????? ???????????? ?????????</div></a>
                
                        <a class="log-face btn face" href="https://www.facebook.com" target="_blank">
                          <img src="./img/facebook.png" alt="">          
                          <div class="log-txt">???????????? ???????????? ?????????</div></a>
                
                        <a class="log-naver btn naver" href="https://www.naver.com" target="_blank">
                          <img src="./img/naver.png" alt="">          
                          <div class="log-txt">????????? ???????????? ?????????</div></a>
                
                        <a class="log-kao btn kao" href="https://www.kakaocorp.com" target="_blank">
                          <img src="./img/message.png" alt="" >
                          <div class="log-txt">???????????? ???????????? ?????????</div></a>
                      </div>
                    </section>
                  </main>
            </div>

        </div>
    <div id = "gray">
    <div class="pageName">?????? ?????????</div>
    <div id= "info">
        <div id="productInfo" class="cardInfo">
            <div class="title">????????????</div>
            <!-- <div>
                <img class="productImg">
                <h3 class="productName"></h3>
                <div class = "productPrice"></div>
                <div class="productTotal"></div>
            </div> -->
        </div>

        <div class = "cardInfo center">
            <div class="title">????????? ??????</div>
            <input id = "ordererName" class="inputInfo"placeholder = "????????? ??????" disabled/>
            <input id = "ordererEmail"class="inputInfo" placeholder = "????????? ?????????" type = "email" disabled/>
            <input id = "ordererPhone" class="inputInfo" oninput = "phoneReg(this)" maxlength="13" placeholder = "????????? ???????????? ??????" disabled/>
            <input id = "ordererMessage" class="inputInfo"placeholder = "?????????"/>

        </div>
        <div class = "cardInfo center">
            <div class="title">????????? ??????</div>
            <button id = "equalBtn" class = "orderBtn"></button>
            <input id = "recipientName" class="inputInfo"placeholder = "????????? ??????" />
            <input id = "recipientEmail"class="inputInfo" placeholder = "????????? ?????????" />
            <input id = "recipientPhone" class="inputInfo" oninput = "phoneReg(this)" maxlength="13" placeholder = "????????? ???????????? ??????" />
            
            <button class="orderBtn"onclick = "findAddr()" >?????? ??????</button>
            <div>
                <input id="recipientPost" class="inputInfo" placeholder = "?????? ??????" disabled/>
                <input id="recipientAddr" class="inputInfo" placeholder = "??????" disabled />
                <input id="recipientAddrDetail" class="inputInfo" placeholder = "?????? ??????"/>
            </div>
        </div>
        <div id="lastInfo" class = "cardInfo center">
            <div class="title">?????? ?????? ??????</div>
            <div>????????? : ??????</div>
            <div id="lastPrice"></div>
            <div>?????? ???????????? : ?????? (?????????) 302-9964-8294-11</div>
            <button id = "submitBtn" class="orderBtn">?????? ??????</button>

        </div>
        </div>

    </div>
    <div style="clear:both;"></div> <!--????????? ??????-->
        <hr/>

        <div id="second-cat"> <!--?????? ???????????? ??????-->
            <div id="map"><h3>????????????? ???</h3>
                <!-- * ???????????? - ??????????????? -->
                <!-- 1. ?????? ?????? -->
                <div id="daumRoughmapContainer1671524483104" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%;"></div>

                <!--
                    2. ?????? ????????????
                    * ?????? ????????? ???????????? 2??? ?????? ?????? ??????, ?????? ??????????????? ????????? ???????????????.
                -->
                <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

                <!-- 3. ?????? ???????????? -->
                <script charset="UTF-8">
                    new daum.roughmap.Lander({
                        "timestamp" : "1671524483104",
                        "key" : "2d4ip",
                        //"mapWidth" : "350",
                        "mapHeight" : "175"
                    }).render();
                </script>
                <h4>????????? ??????, ????????? ????????? ????????? 2419-2 </h4>
                </div>
            </div>
        
            <div id="copyright">
                <p><br><br>????TEL : 010-9964-8294</p>
                <p>?????????? ?????? : ?????? 352-0944-0792-53 ?????????</p>
                <img src="../main-image/title.png">
                <address>
                Copyright &copy, BERRYGOOD ALL. rights resevered<br>
                tre021040@naver.com<br><br>
                ???????????? <span id="personal-info"><a href="personal.html"
                    onclick="window.open(this.href,'_blank','width=800, height=600'); return false;">???????????? ????????????</a></span>
            </address>
            </div>
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
                    window.localStorage.setItem('jwt', data.JWT); //JWT ??????????????? ??????
                    console.log(localStorage.getItem('jwt'));
                    if (idToPost=="administrator" && pwToPost=="administrator1!"){
                        window.localStorage.setItem('isAdmin', true );
                        alert("???????????????! ????????????")
                    } 
                    else{
                        window.localStorage.setItem('isAdmin', false );
                        alert("???????????????!")
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
                        alert("???????????? ????????????");
                    }
                    else{
                        window.location.replace("../mypage.html");
                    }
                    
                
                });
                
            }
    </script>
    <script src="order.js"></script>
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script>

        function findAddr(){
            new daum.Postcode({
                oncomplete: function(data) {
                    
                    console.log(data);
                    var roadAddr = data.roadAddress; 
                    var jibunAddr = data.jibunAddress; 
                    document.getElementById("recipientPost").value = data.zonecode;
                    if(roadAddr !== ''){
                        document.getElementById("recipientAddr").value = roadAddr;
                    } 
                    else if(jibunAddr !== ''){
                        document.getElementById("recipientAddr").value = jibunAddr;
                    }
                }
            }).open();
        }
        function phoneReg(e) {
            e.value = e.value.replace(/[^0-9]/g, '').replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
        }
        function orderSubmit(){

        }

    </script>
</html>
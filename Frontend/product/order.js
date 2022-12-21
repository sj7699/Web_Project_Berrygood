let data=[]
const content = window.localStorage.getItem("bucket")
if(content!=null){
    data = JSON.parse(content)
    console.log(data)
}
const user = {
    "userName" : "김철수",
    "userPhone" : "010-3034-1212",
    "userEmail" : "abcd123@naver.com"
}
let price = 0
for (i of data){
    const oneInfo = document.createElement("div")
    oneInfo.className = "oneInfo"

    const productImg = document.createElement("img")
    productImg.className = "productImg"
    productImg.src = i.img
    const productName = document.createElement("div")
    productName.className = "productName"
    productName.innerHTML = i.productName
    const productPrice = document.createElement("div")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `상품 가격 : ${i.productPrice}    주문 수량 : ${i.productNum}`
    const productTotal =document.createElement("div")
    productTotal.className = "productTotal"
    productTotal.innerHTML = `총 상품 가격 : ${parseInt(i.productPrice)*parseInt(i.productNum)}`
    price+=parseInt(i.productPrice)*parseInt(i.productNum)
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "취소"
    deleteBtn.className = "deleteBtn"
    deleteBtn.onclick = delBtnEvent

    const left = document.createElement("span")
    left.appendChild(productImg)
    left.appendChild(productName)
    left.appendChild(productPrice)
    left.appendChild(productTotal)
    oneInfo.appendChild(left)
    oneInfo.appendChild(deleteBtn)
    oneInfo.id=i.id

    document.querySelector("#productInfo").appendChild(oneInfo)


}
document.querySelector("#lastPrice").innerHTML=price


const ordererName = document.querySelector("#ordererName")
ordererName.innerHTML = user.userName

const ordererEmail = document.querySelector("#ordererEmail")
ordererEmail.innerHTML = user.userEmail

const ordererPhone = document.querySelector("#ordererPhone")
ordererPhone.innerHTML = user.userPhone
const ordererMessage = document.querySelector("#ordererMessage")

const recipientName = document.querySelector("#recipientName")
const recipientEmail = document.querySelector("#recipientEmail")
const recipientPhone = document.querySelector("#recipientPhone")

const recipientPost = document.querySelector("#recipientPost")
const recipientAddr = document.querySelector("#recipientAddr")
const recipientAddrDetail = document.querySelector("#recipientAddrDetail")

fetch(`http://3.36.62.87/user/api/get_userinfo.php`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "origin" : "http://3.36.62.87",
    },
    body: JSON.stringify({
        "JWT":window.localStorage.getItem("jwt")
    }),
}).then((response) => response.json())
.then((data)=>{
    if(data==null){
    }
    ordererName.value = data.name
    ordererEmail.value = data.email
    ordererPhone.value = data.phone_number
})
.catch((err)=>{
    alert("로그인 해주세요")
    location.href="bucket.php"
})

const body = document.querySelector("#info")
const equalBtn = document.querySelector("#equalBtn")
equalBtn.innerHTML = "주문자와 \n 수령인이 동일"
equalBtn.setAttribute("onclick",'equalBtnEvent()') 

const submitBtn = document.querySelector("#submitBtn")
submitBtn.onclick = orderSubmit
// submitBtn.setAttribute("onclick",'orderSubmit()')
function equalBtnEvent(){
    if(ordererName.value=="" || ordererEmail.value=="" || ordererPhone.value ==""){
        alert("주문자 정보를 입력하세요")
    }
    else{
        recipientName.value = ordererName.value
        recipientEmail.value = ordererEmail.value
        recipientPhone.value = ordererPhone.value
    }
}
function delBtnEvent(e){
    const parent = e.target.parentNode
    data = data.filter((elem)=>elem.id!=parent.id)
    parent.remove()
    window.localStorage.setItem("bucket",JSON.stringify(data))
}
function orderSubmit(){
        var emailReg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
        if(ordererName.value=="" || ordererEmail.value=="" || ordererPhone.value ==""){
            alert("주문자 정보를 입력하세요")
        }
        else if(recipientName.value=="" || recipientEmail.value=="" || recipientPhone.value ==""){
            alert("수령인 정보를 입력하세요")
        }
        else if(recipientPost.value=="" || recipientAddr.value=="" || recipientAddrDetail.value ==""){
            alert("수령인 주소를 입력하세요")
        }
        else if(!emailReg.test(ordererEmail.value)||!emailReg.test(recipientEmail.value)) { 
            alert("이메일 형식이 잘못되었습니다.")                           
            return
        }                       
        else{
            const content = {
                "JWT" : window.localStorage.getItem("jwt"),
                "ordererMessage" : ordererMessage.value,
                "recipientName" : recipientName.value,
                "recipientEmail" : recipientEmail.value,
                "recipientPhone" : recipientPhone.value,
                "recipientPost" : recipientPost.value,
                "recipientAddr" : recipientAddr.value,
                "recipientAddrDetail" : recipientAddrDetail.value,
                "orderNumber" : Date.now(),
                "created_at" : new Date().toLocaleDateString(),
                "total_price" : price,
                "product_list" : data
                
            }
        fetch("http://3.36.62.87/order/api/create.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "origin" : "http://3.36.62.87",
            },
            body: JSON.stringify(
                content
            ),
        }).then((response) => response.json())
        .then((data) =>{
            console.log(data);
            goodsArray = data;
            location.href = `orderComplete.php?order_id=${data.order_id}`
        });
           
        }
        
                                 
}



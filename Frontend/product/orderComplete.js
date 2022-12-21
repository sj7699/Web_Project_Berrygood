const orderId = new URLSearchParams(location.search).get("order_id");
if(orderId==null){
    location.href="order.php"
}

var goodsArray = new Object();

fetch(`http://3.36.62.87/order/api/read_specific.php?order_id=${orderId}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "origin" : "http://3.36.62.87",
    },
    body: JSON.stringify({
        "JWT":window.localStorage.getItem("jwt")
    }),
}).then((response) => response.json())
.then((data) =>{
    console.log(data.data[0])
    console.log(data[0]);
    let price = 0
    for (i of data.data[0].product_list){
        const oneInfo = document.createElement("div")
        oneInfo.className = "oneInfo"

        const productImg = document.createElement("img")
        productImg.className = "productImg"
        productImg.src = `./image/${i.img}`
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

        const left = document.createElement("span")
        left.appendChild(productImg)
        left.appendChild(productName)
        left.appendChild(productPrice)
        left.appendChild(productTotal)
        oneInfo.appendChild(left)
        oneInfo.id=i.id

        document.querySelector("#productInfo").appendChild(oneInfo)


    }
    const ordererName = document.querySelector("#ordererName")
    ordererName.value = Content.ordererName

    const ordererEmail = document.querySelector("#ordererEmail")
    ordererEmail.value = Content.ordererEmail

    const ordererPhone = document.querySelector("#ordererPhone")
    ordererPhone.value = Content.ordererPhone

    const recipientName = document.querySelector("#recipientName")
    recipientName.value = Content.recipientName
    const recipientEmail = document.querySelector("#recipientEmail")
    recipientEmail.value = Content.recipientEmail
    const recipientPhone = document.querySelector("#recipientPhone")
    recipientPhone.value = Content.recipientPhone

    const recipientPost = document.querySelector("#recipientPost")
    recipientPost.value = Content.recipientPost
    const recipientAddr = document.querySelector("#recipientAddr")
    recipientAddr.value = Content.recipientAddr
    const recipientAddrDetail = document.querySelector("#recipientAddrDetail")
    recipientAddrDetail.value = Content.recipientAddrDetail

    const lastPrice = document.querySelector("#lastPrice")
    lastPrice.value = `주문 가격 : ${Content.totalPrice}`
    const orderNum = document.querySelector("#orderNum")
    orderNum.value = `주문 번호 : ${Content.orderNumber}`

    const body = document.querySelector("#info")
document.querySelector("#lastPrice").innerHTML=price
    });

// "name": "베리 굿, 직접 만든 친환경 100% 제주산 귤 : 3kg",
//     "_id": 0,
//     "detail" : "",
//     "price": 8900,
//     "weight": 3,
//     "category": "식품",
//     "created_at": 1671472921,
//     "image": "mandarine.jpg"



// fetch(`http://3.36.62.87/order/api/read_specific.php?order_id=16`, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "origin" : "http://3.36.62.87",
//     },
//     body:{
//         "JWT":"eyJhbGciOiJzaGEyNTYiLCJ0eXAiOiJKV1QifQ.eyJpZCI6ImJlcnJ5Z29vZF9hZG1pbSIsImV4cCI6MTY3MTYxMDM2OSwiZ3JhZGUiOjB9.953f7348a0b094cbb04453ccdc3fbe38edaf39d4786baf450cf121fe1b3b3b1c"
//     }
// }).then(response=>response.json())
// .then(res=>console.log(res))
// .then((err)=>console.log(err))
const Content = {
    "ordererId" : "abcd1234",

    "ordererName" : "김철수",
    "ordererEmail" : "abcd1234@naver.com",
    "ordererPhone" : "010-1234-1234",
    "recipientName" : "김민수",
    "recipientEmail" : "abcd1234@naver.com",
    "recipientPhone" : "010-1234-1234",
    "recipientPost" : "15888",
    "recipientAddr" : "서울 특별시 ",
    "recipientAddrDetail" : "101동 101호",
    "orderNumber" : "1111222333",
    "created_at" : "2022-01-01",
    "totalPrice" : "100000"
    
}
let data=[//여기는 orderID를 통해서 검색함
    {
        "productName" : "천리향",
        "productPrice" : 10000,
        "productNum" : 3,
        "iamge" : ".blueberry.jpg",
    },
    
    {
        "productName" : "천리향",
        "productPrice" : 10000,
        "productNum" : 3,
        "image" : ".blueberry.jpg",
    },
    {
        "productName" : "천리향",
        "productPrice" : 10000,
        "productNum" : 3,
        "productImg" : "./image/blueberry.jpg",
    }
]
const user = {
    "userName" : "김철수",
    "userPhone" : "010-3034-1212",
    "userEmail" : "abcd123@naver.com"
}


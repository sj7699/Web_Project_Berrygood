let bucketArr = []


const pNo = new URLSearchParams(location.search).get("productNo");
if(pNo==null){
    location.href="product.php"
}
// 가져온 productNo의 값이 null이라면 
// (사용자가 임의로 주소를 변경하여 들어온다면 ) product.html로 강제이동 
let productInfo={
    "name" : "맛있는 귤 10kg",
    "price" : "10000",
    "shipping" : "무료 배송",
    "image" : "mandarine.jpg"
}

async function init(){

productInfo=await getProductInfo()


// 제품에 대한 자세한 정보는 쿼리 스트링의 productNo을 바탕으로 데이터베이스에 검색해서 가져옴 
const layout = document.createElement("div")
layout.className="layout"
const img = document.createElement("img")
img.src=`./image/${productInfo.image}`
img.id="purchase"
console.log(img.src)
const info=document.createElement("div")
info.className="productInfo"
const title = document.createElement("h2")
title.className="title"
title.innerHTML = productInfo.name
const price = document.createElement("div")
price.innerHTML = `가격 : ${productInfo.price}원`
price.className="detail"
const origin = document.createElement("div")
origin.innerHTML = "원산지 : 제주도 "
origin.className="detail"
const shipping = document.createElement("div")
shipping.innerHTML = `배송비 : 무료 배송 `
shipping.className="detail"



let count = 1
const totalCount = document.createElement("div")
totalCount.className="detail"
totalCount.innerHTML=`구매 수량 : ${count}`

const totalPrice = document.createElement("h2")
totalPrice.innerHTML=`총 구매 가격 : ${count*productInfo.price}`

const counting = document.createElement("div")
counting.className="count"
const btnMinus = document.createElement("button")
btnMinus.className="btn"
btnMinus.innerHTML="-"
function minus(){
    if(count>1){
        count--
        realCount.innerHTML=count
        totalPrice.innerHTML=`총 구매 가격 : ${count*productInfo.price}`
    }

}
btnMinus.onclick=minus
const realCount=document.createElement("span")
realCount.innerHTML=count
const btnPlus = document.createElement("button")
btnPlus.className="btn"
btnPlus.innerHTML="+"

const bucketBtn = document.createElement("button")
bucketBtn.className="btn2"
bucketBtn.innerHTML = "장바구니"
bucketBtn.onclick = bucketClick

const purchaseBtn = document.createElement("button")
purchaseBtn.className="btn2"
purchaseBtn.innerHTML = "주문하기"
purchaseBtn.onclick = purchaseClick

function plus(){
    if(count<10){
        count++
        realCount.innerHTML=count
        totalPrice.innerHTML=`총 구매 가격 : ${count*productInfo.price}`
    }

}







btnPlus.onclick=plus
counting.appendChild(btnMinus)
counting.appendChild(realCount)
counting.appendChild(btnPlus)


info.appendChild(title)
info.appendChild(document.createElement("hr"))
info.appendChild(price)
info.appendChild(origin)
info.appendChild(shipping)
info.appendChild(totalCount)
info.appendChild(counting)
info.appendChild(totalPrice)
info.appendChild(bucketBtn)
info.appendChild(purchaseBtn)

layout.appendChild(img)
layout.appendChild(info)



document.querySelector("#proinfo").appendChild(layout)


function bucketClick(){
    const res = window.localStorage.getItem("bucket")
    if(res!=null){
        bucketArr = JSON.parse(res)

    }
    bucketArr.push({
        "id" : Date.now(),
        "productName" : productInfo.name,
        "productPrice"  :productInfo.price,
        "productNum" : count,
        "img" : `./image/${productInfo.image}`
    })
    const content = JSON.stringify(bucketArr)
    window.localStorage.setItem("bucket",content)
    if(window.confirm("장바구니 상품이 담겼습니다.\n장바구니로 이동하시겠습니까?")){
        location.href = "bucket.php"
    }
}

    // <div class="layout">
    //     <img id="purchase" src="./image/blueberry.jpg" alt="">
    //     <div class="productInfo">
    //         <h2>무농약 귤 1kg</h2>
    //         <div>가격 : 10000 원 </div>
    //         <div>배송비 : 3000원</div>
    //         <div>
    //             <button>장바구니</button>
    //             <button>구매하기</button>
    //             <button></button>
    //         </div>
    //     </div>
    // </div>
}
init()

async function getProductInfo(){
    console.log(pNo)
    return await fetch(`http://3.36.62.87/product/api/read_specific.php?product_id=${pNo}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "origin" : "http://3.36.62.87"
        },             
    })
    .then(response=>response.json())
}
function purchaseClick(){
    location.href = "order.php"
}
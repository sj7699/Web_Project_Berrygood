
let data=[]
const content = window.localStorage.getItem("bucket")
if(content!=null){
    data = JSON.parse(content)
    console.log(data[0])
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

const purchaseBtn = document.createElement("button")
purchaseBtn.className="orderBtn"
purchaseBtn.innerHTML = "주문하기"
purchaseBtn.onclick = purchaseClick
document.querySelector("#productInfo").appendChild(purchaseBtn)

function delBtnEvent(e){
    const parent = e.target.parentNode
    data = data.filter((elem)=>elem.id!=parent.id)
    parent.remove()
    window.localStorage.setItem("bucket",JSON.stringify(data))
}
function purchaseClick(){
    location.href = "order.php"
}
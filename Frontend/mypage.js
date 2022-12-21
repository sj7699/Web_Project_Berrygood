
const section = document.querySelector("#sec")
fetch(`http://3.36.62.87/order/api/read.php`, {
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
    console.log(data.data)
    init(data)

})
async function init(f){
    let idx = 0
    for(i of f.data){
        if(idx==4) break

        console.log(i)
        console.log(i.orderNumber)
        const order = document.createElement("div")
        order.className  = "order"
        const orderNum = document.createElement("div")
        orderNum.className= "orderNum"
        const orderDate = document.createElement("div")
        orderDate.className = "orderDate"
        orderDate.innerHTML = i.created_at
        const orderImg = document.createElement("img")
        orderImg.className = "orderImg"
        const orderPrice = document.createElement("div")
        orderPrice.className = "orderPrice"
        const orderState = document.createElement("div")
        orderState.className = "orderState"
        orderState.innerHTML = i.delivery_state
        const orderMessage = document.createElement("div")
        orderMessage.innerHTML = "구매해주셔서 감사합니다."
        const detailBtn = document.createElement("button")
        detailBtn.className = "detailBtn"
        detailBtn.innerHTML = "주문 상세보기"
        detailBtn.setAttribute("onClick",`location.href='./product/orderComplete.php?order_id=${i.orderNumber}'`)
        await fetch(`http://3.36.62.87/order/api/read_specific.php?order_id=${i.orderNumber}`, {
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
            const list = data.data[0].product_list[0]
            console.log(data.data[0].product_list.length)
            orderImg.src = `./image/${list.img}`
            orderNum.innerHTML = `${list.productName}외 ${data.data[0].product_list.length-1}개`
            orderPrice.innerHTML = data.data[0].total_price+"원"
            order.appendChild(orderNum)
            order.appendChild(orderDate)
            order.appendChild(orderImg)
            order.appendChild(orderPrice)
            order.appendChild(orderState)
            order.appendChild(orderMessage)
            order.appendChild(detailBtn)
            section.appendChild(order)
            
        })
        idx+=1
        
    }
}
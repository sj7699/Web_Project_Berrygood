
const product = document.getElementById("product")
let products = [
    {"name" : "직접 키운 100% 제주산 무농약 블루베리 1kg",
     "price" : 10000,
     "img" : "blueberry.jpg",
     "productNo" : 0
    },
    {"name" : "100% 제주산 무농약 귤 1kg",
     "price" : 20000,  
     "img" : "mandarine.jpg",
     "productNo" : 1
    },
    {"name" : "제주산 무농약 귤 1kg",
     "price" : 20000,  
     "img" : "mandarine.jpg" ,
     "productNo" : 2
    }
]
fetch("http://3.36.62.87/product/api/read.php")
.then((response)=>response.json())
.then((res)=>{
    products=res.data
    console.log(res.data)
    let idx=0
    for(i of products){
        if(idx==0||idx==3 || idx==5){
        console.log(i)
        const oneProduct = document.createElement("div")
        const productPage = document.createElement("div")
        productPage.style="cursor:pointer;"
        productPage.setAttribute("onClick",`location.href='./product/purchase.php?productNo=${i._id}'`)
        productPage.className="box"

        const productImage = document.createElement("img")
        productImage.src=`./product/image/${i.image}`
        productImage.className="thumb"

        const productDescription = document.createElement("div")
        productDescription.className="descript"

        const productName = document.createElement("h4")
        productName.className="productName"
        productName.innerHTML=i.name

        const productPrice = document.createElement("h5")
        productPrice.className="productPrice"
        productPrice.innerHTML=i.price+"원"

        const productState = document.createElement("div")
        productState.className="productState"
        productState.innerHTML = "BEST"


        productDescription.appendChild(productName)
        productDescription.appendChild(productPrice)
        productDescription.appendChild(productState)

        productPage.appendChild(productImage)

        oneProduct.appendChild(productPage)
        oneProduct.appendChild(productDescription)
        // productPage.appendChild(productDescription)

        product.appendChild(oneProduct)
        idx+=1

        }
        else{
            idx+=1
        }
    }
})
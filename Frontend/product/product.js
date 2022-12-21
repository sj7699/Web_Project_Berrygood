fetch("http://3.36.62.87/product/api/read.php", {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      "origin" : "http://3.36.62.87"
                    },             
})
.then((response)=>response.json())
.then(res=>console.log(res.data))


const products = [
    {"name" : "직접 키운 100% 제주산 무농약 블루베리 1kg",
     "price" : 10000,
     "image" : "blueberry.jpg",
     "productNo" : 0
    },
    {"name" : "100% 제주산 무농약 귤 1kg",
     "price" : 20000,  
     "image" : "mandarine.jpg",
     "productNo" : 1
    },
    {"name" : "제주산 무농약 귤 1kg",
     "price" : 20000,  
     "image" : "mandarine.jpg" ,
     "productNo" : 2
    },
    {"name" : "제주산 무농약 귤 1kg",
     "price" : 20000,  
     "image" : "mandarine.jpg"  ,
     "productNo" : 3  
    },
    {"name" : "제주산 무농약 귤 1kg",
     "price" : 20000,  
     "image" : "mandarine.jpg"   ,
     "productNo" : 4 
    },
    {"name" : "제주산 무농약 귤",
     "price" : 20000,  
     "image" : "mandarine.jpg"    ,
     "productNo" : 5
    },
    {"name" : "제주산 무농약 귤",
     "price" : 20000,  
     "image" : "mandarine.jpg"    ,
     "productNo" : 6
    },
    {"name" : "제주산 무농약 귤",
     "price" : 20000,  
     "image" : "mandarine.jpg"    ,
     "productNo" : 7
    },
    {"name" : "제주산 무농약 귤",
     "price" : 20000,  
     "image" : "mandarine.jpg"    ,
     "productNo" : 8
    },
    {"name" : "제주산 무농약 귤",
     "price" : 20000,  
     "image" : "mandarine.jpg"    ,
     "productNo" : 9
    }

]
const product = document.getElementById("product")
fetch("http://3.36.62.87/product/api/read.php")
.then((response)=>response.json())
.then((res)=>{
for(i of res.data){
    const oneProduct = document.createElement("div")
    const productPage = document.createElement("div")
    productPage.style="cursor:pointer;"
    productPage.setAttribute("onClick",`location.href='purchase.php?productNo=${i._id}'`)
    productPage.className="box"

    const productImage = document.createElement("img")
    productImage.src=`./image/${i.image}`
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
}

})
// for(i of products){
//     const oneProduct = document.createElement("div")
//     const productPage = document.createElement("div")
//     productPage.style="cursor:pointer;"
//     productPage.setAttribute("onClick",`location.href='purchase.php?productNo=${i.productNo}'`)
//     productPage.className="box"

//     const productImage = document.createElement("img")
//     productImage.src=`./image/${i.image}`
//     productImage.className="thumb"

//     const productDescription = document.createElement("div")
//     productDescription.className="descript"

//     const productName = document.createElement("h4")
//     productName.className="productName"
//     productName.innerHTML=i.name

//     const productPrice = document.createElement("h5")
//     productPrice.className="productPrice"
//     productPrice.innerHTML=i.price+"원"

//     const productState = document.createElement("div")
//     productState.className="productState"
//     productState.innerHTML = "BEST"


//     productDescription.appendChild(productName)
//     productDescription.appendChild(productPrice)
//     productDescription.appendChild(productState)

//     productPage.appendChild(productImage)

//     oneProduct.appendChild(productPage)
//     oneProduct.appendChild(productDescription)
//     // productPage.appendChild(productDescription)

//     product.appendChild(oneProduct)
// }
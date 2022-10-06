

var productName = document.querySelector("h1").innerText;
console.log(productName)

var brandName = document.querySelector("h3").innerText;
console.log(brandName)

var productPrice = document.getElementsByClassName("RYghuO uqkIZw ka2E9k uMhVZi FxZV-M pVrzNP")[0].innerText
console.log(productPrice)
 
var productUrl = window.location.toString() 
console.log(productUrl)



var productId = productUrl.substring(productUrl.lastIndexOf('-')  -9, productUrl.lastIndexOf(".html"))

console.log(productId)

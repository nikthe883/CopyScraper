
// can't take the size variant for the webpage need to type it manually in matchmaker 
// There is an ID update from devs not updated here

if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
//gets brand
if (brandValue){
var brandName = "|" 
}

//gets price 
if (priceValue){
    var productPrice = document.getElementsByClassName("c-tp-price-currentprice")[0].innerText
    
    var cents = productPrice.slice(-3)
    productPrice = productPrice.replace(cents,".")
    productPrice = productPrice + cents
    
    productPrice = productPrice.replace(" ","")
    productPrice = productPrice.replace(/\n/g, "")
    console.log(productPrice)

}

//gets url
if (urlValue){
    var productUrl = window.location.toString() 
}

//gets id
if (idValue){
    var productId = productUrl.substring(productUrl.lastIndexOf("-p") + 2)
    productId = productId.substring(0, productId.lastIndexOf(".html"))
    
}
var details = [brandName,productName,productId,productUrl,productPrice]
console.log(details)
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });
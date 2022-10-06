

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
//gets brand
if (brandValue){
var brandName = productName.split(" ")[0]
}

//gets price 
if (priceValue){
    var productPrice = document.getElementsByClassName("productMainspecialPrice")[0].innerText
    productPrice = productPrice.replace(" ", "")

}

//gets url
if (urlValue){
    var productUrl = window.location.toString() 
}

//gets id
if (idValue){
    var productId = document.getElementsByClassName("articlenumber-container")[0].innerText
    productId = productId.split(" ").pop()
    
}

    
var details = [brandName,productName,productId,productUrl,productPrice]
console.log(details)
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });
//gets id
if (idValue){
    var productId =  document.querySelector("h4").innerText;
    
}
if (urlValue){
    var productUrl = window.location.toString() 
}
brandName = ""
productName = ""
productPrice = ""
console.log(productId)
    
var details = [brandName,productName,productId,productUrl,productPrice]
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });


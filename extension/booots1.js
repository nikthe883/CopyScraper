var productId = document.getElementById('productId').innerText
var productUrl = window.location.toString() 
var productUrl = productUrl.substring(0, 17) + "1" + productUrl.substring(17, productUrl.length);
console.log(productId,productUrl)
brandName = ""
productName = ""
productPrice = ""
console.log(productId)
    
var details = [brandName,productName,productId,productUrl,productPrice]
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });
// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    console.log(productName)
    
    // gets brand
if (brandValue){
    var brandName = document.getElementsByClassName("product--brand")[0].innerText;
    // to lower case 
    brandName = brandName.toLowerCase()
    brandName = brandName.charAt(0).toUpperCase() + brandName.slice(1);
 

}
console.log(brandName)
    
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("new--price")[0].innerText

        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
        productPrice =  Number(productPrice.replace(/[^0-9\.-]+/g,""));
    }
    console.log(productPrice)
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    console.log(productUrl)

    //gets id
    if (idValue){
        var productId = productUrl.substring(productUrl.lastIndexOf('/') + 1);
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
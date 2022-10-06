// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    // gets brand
if (brandValue){
    var brandName = document.getElementsByClassName("manufacturer-row text-right small")[0].innerText;

}
    
    
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("price text-nowrap")[0].innerText
        console.log(productPrice)
        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
        productPrice =  Number(productPrice.replace(/[^0-9\.-]+/g,""));
    }
    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    
    //gets id
    if (idValue){
        var productId = document.getElementsByClassName("text-muted product-sku")[0].innerText
        productId = productId.replace("Article number: ","")
        productId = productId.replace("Artikelnummer: ","")
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
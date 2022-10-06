

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    console.log(productName)
    // gets brand
if (brandValue){
    var brandName = document.getElementsByClassName("font-weight-bold brand-name")[0].innerText
}
    
    console.log(brandName)

    //gets price 
    if (priceValue){
        var productPrice  = document.getElementsByClassName("price-content")[0].innerText
        
        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
       
        
         productPrice =  productPrice.replace(/[^0-9\.]/g,"");

        
     }
    console.log(productPrice)
   


    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    
    //gets id
    if (idValue){
        var productId = document.getElementsByClassName('component-wrapper p-0')[0].innerText
        productId = productId.split("SKU: ")[1]
        
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });s
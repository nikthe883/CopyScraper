// Some bugs with price gathering 

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    console.log(productName)
    // gets brand
if (brandValue){
    var brandName = productName.split(" ")[0];
}

console.log(brandName)

    //gets price 
    if (priceValue){
        var productPrice  = document.getElementsByClassName("pd__cost__total undefined")[0].innerText
        
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
        var productId = document.getElementsByClassName('pd__item-code')[0].innerText
        productId = productId.split("Item code: ")[1]
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
// gets name
if (nameValue){
    var productName = document.getElementById("variantName").innerText
    }
    
    
    // gets brand
    if (brandValue){
        var brandName =  document.getElementsByClassName("c-details-box__name")[0].innerText
        brandName = brandName.split(productName)[0];
    }
    

    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("c-details-box__price-current")[0].innerText
        
        
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
        var productId = productUrl.split('varid=').pop();
        
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
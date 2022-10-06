// CANT GET ID 

// gets name
if (nameValue){
    var productName = document.getElementsByClassName("product__desc")[0].innerText;
    }
    
    
    // gets brand
    if (brandValue){
        var brandName = document.getElementsByClassName("product__brand")[0].innerText
    }
    

    //gets price 
    if (priceValue){
        var productPrice = document.querySelector('[itemprop=price]').textContent;
       
        
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
        var productId = document.querySelector('[itemprop="sku"]').textContent;
        
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
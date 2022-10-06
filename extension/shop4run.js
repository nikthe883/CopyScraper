// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    
    // gets brand
    if (brandValue){
        var brandName = productName.split(" ")[0]
    }
    

    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName('price')[0].innerText
       
        
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
        productId = ""
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
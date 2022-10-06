// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    
    // gets brand
    if (brandValue){
        var brandName =  document.getElementsByClassName("buy-box__brand")[0].innerText
        brandName = brandName.split(productName)[0];
    }
    
    
    // need to optimize this peace of code
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("buy-box__inner-price-wrapper")[0].innerText

        
        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
       
        
        productPrice =  Number(productPrice.replace(/[^0-9\.-]+/g,""));
        if(isNaN(productPrice)){
            var productPrice = document.getElementsByClassName("buy-box__price buy-box__price--new")[0].innerText
        
            if (productPrice.includes(",")){
                productPrice = productPrice.replace(",", ".")
            }
       
        
        productPrice =  Number(productPrice.replace(/[^0-9\.-]+/g,""));
        }
        
    }
   


    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    
    //gets id
    if (idValue){
        var featureName = document.getElementsByClassName("product-features__feature-name")
        var featureText = document.getElementsByClassName("product-features__text")

        for (i = 0; i < featureName.length; i++) {
            if(featureName[i].innerText == "Article no." || featureName[i].innerText == "Artikel Nr."){
                var productId = featureText[i].innerText
            }

        }

        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
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
        var productPrice  = document.querySelector("h3").innerText;

        
        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
       
        
         productPrice =  productPrice.replace(/[^0-9\.]/g,"");
         if ( productPrice.slice( -1 ) === '.' ) {
            productPrice = productPrice.slice( 0, -1 );
        }

        
    }
    console.log(productPrice)
   


    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    
    //gets id
    if (idValue){
        var productId = document.getElementsByClassName('pcard-product-code bold ')[0].innerText
        productId = productId.split(": ")[1]


        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
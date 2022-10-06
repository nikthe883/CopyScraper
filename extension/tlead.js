<<<<<<< HEAD
// problems with gathering the price

// gets name
if (nameValue){
    
    var productName = document.querySelector("h1")

    }
    
    console.log("Product name : " + productName)
    // gets brand
    if (brandValue){
        var brandName = document.querySelector('[itemprop=brand]').textContent;
    }
    
    console.log("Brand : " + brandName)
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("prix")[0].innerText
        // var productPrice = productPrice.split(" ").pop()
        
        
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
        var productId =  productUrl.split("-").pop()
   
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
=======
// problems with gathering the price

// gets name
if (nameValue){
    
    var productName = document.querySelector("h1")

    }
    
    console.log("Product name : " + productName)
    // gets brand
    if (brandValue){
        var brandName = document.querySelector('[itemprop=brand]').textContent;
    }
    
    console.log("Brand : " + brandName)
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("prix")[0].innerText
        // var productPrice = productPrice.split(" ").pop()
        
        
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
        var productId =  productUrl.split("-").pop()
   
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
>>>>>>> 42bbf578fb69b96a69bd5a512877f31908285843
      });
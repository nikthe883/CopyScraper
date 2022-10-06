<<<<<<< HEAD
// problems with gathering the price

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
        var productPrice = document.getElementsByClassName("price ")[0].innerText
        
        
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
        var productId =  document.getElementsByClassName('part-number')[0].innerText;
        var productId = productId.split("#: ")[1];
        
        
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
        var productPrice = document.getElementsByClassName("price ")[0].innerText
        
        
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
        var productId =  document.getElementsByClassName('part-number')[0].innerText;
        var productId = productId.split("#: ")[1];
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
>>>>>>> 42bbf578fb69b96a69bd5a512877f31908285843
      });
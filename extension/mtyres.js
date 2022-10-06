<<<<<<< HEAD


// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    console.log(productName)
    // gets brand
    if (brandValue){
        var brandName = document.getElementsByClassName("tyre-title")[0].innerText
        var brandName = brandName.split(" ")[0];
    }
    
    console.log(brandName)
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("pd-price")[0].innerText
        var productPrice = productPrice.split(" ").pop()
        
        
        // if (productPrice.includes(",")){
        //     productPrice = productPrice.replace(",", ".")
        // }
       
        
        // productPrice =  Number(productPrice.replace(/[^0-9\.-]+/g,""));
        
    }
   
    console.log(productPrice)
    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    console.log(productUrl)
    
    //gets id
    if (idValue){
        var productId =  document.getElementById('pdp_tb_info_id');
        productId = productId.getElementsByClassName("pdp_tabC")[0].innerText
   
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
=======


// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    console.log(productName)
    // gets brand
    if (brandValue){
        var brandName = document.getElementsByClassName("tyre-title")[0].innerText
        var brandName = brandName.split(" ")[0];
    }
    
    console.log(brandName)
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("pd-price")[0].innerText
        var productPrice = productPrice.split(" ").pop()
        
        
        // if (productPrice.includes(",")){
        //     productPrice = productPrice.replace(",", ".")
        // }
       
        
        // productPrice =  Number(productPrice.replace(/[^0-9\.-]+/g,""));
        
    }
   
    console.log(productPrice)
    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    console.log(productUrl)
    
    //gets id
    if (idValue){
        var productId =  document.getElementById('pdp_tb_info_id');
        productId = productId.getElementsByClassName("pdp_tabC")[0].innerText
   
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
>>>>>>> 42bbf578fb69b96a69bd5a512877f31908285843
      });
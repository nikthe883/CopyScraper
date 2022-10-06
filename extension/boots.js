<<<<<<< HEAD

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    console.log(productName)
    // gets brand
    if (brandValue){
        var companyName = "Max Factor"

        var brandName = productName.split(" ")[0];

        if(brandName === "Max") {
            brandName = companyName
        }
    }
    
    console.log(brandName)
    //gets price 
    if (priceValue){
        var productPrice = document.getElementById("PDP_productPrice").innerText
        
        
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
        // var productId =  document.getElementById('pdp_tb_info_id');
        // productId = productId.getElementsByClassName("pdp_tabC")[0].innerText
        var productVariant = document.getElementsByClassName("productVarient")[0].innerText
        console.log(productVariant)
   
        
        
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
        var companyName = "Max Factor"

        var brandName = productName.split(" ")[0];

        if(brandName === "Max") {
            brandName = companyName
        }
    }
    
    console.log(brandName)
    //gets price 
    if (priceValue){
        var productPrice = document.getElementById("PDP_productPrice").innerText
        
        
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
        // var productId =  document.getElementById('pdp_tb_info_id');
        // productId = productId.getElementsByClassName("pdp_tabC")[0].innerText
        var productVariant = document.getElementsByClassName("productVarient")[0].innerText
        console.log(productVariant)
   
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
>>>>>>> 42bbf578fb69b96a69bd5a512877f31908285843
      });
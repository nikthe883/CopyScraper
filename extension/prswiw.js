// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    
    // gets brand
    if (brandValue){
        var brandName = productName.split(" ")[0];
    }
    

    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("price-container price-final_price tax weee")[0].innerText
        
        
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
        var productId =  document.querySelector('[itemprop=sku]').textContent;
        var select = document.getElementsByClassName("super-attribute-select")[0]
        if(typeof select === "undefined"){
            productId = productId
        }else{
            var optionValue = select.value;
            productId = productId + "_" + optionValue
        }
        
        
    }
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
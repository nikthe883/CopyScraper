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
        var productPrice = document.getElementsByClassName('price--content content--default')[0].innerText
       
        
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
        var productId = productUrl.substr(0, productUrl.indexOf("/" + brandName.toLowerCase())); 
        productId = productId.split("/").pop()
        var size = document.getElementsByClassName("option--input js--config-select js--size-select")
        var color = document.getElementsByClassName("option--input js--config-select js--color-select")
        
        for (i = 0; i < color.length; i++){
            if(color[i].checked){
                productId += "_" + color[i].getAttribute("title")

            }
        }
        for (i = 0; i < size.length; i++){
            if(size[i].checked){
                productId += "_" + size[i].getAttribute("title")

            }
        }
        productId = productId.replace(/\s/g, "_");
        
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
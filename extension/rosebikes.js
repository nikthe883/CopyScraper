// There is a bug with scraping product price need to figure it out

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    
    // gets brand
    if (brandValue){
        var brandName = document.getElementsByClassName("basic-headline__title")[0].innerText
    }
    

    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName('detail-price__details')[0].innerText
       
        productPrice = productPrice.split("instead of")[0]
        if (isNaN(productPrice.split(" ")[0])){
            productPrice = productPrice.split(" ")[0]
            
        }else{
            productPrice = productPrice.split(" ")[1]
            console.log(productPrice)

           
        }
        
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
        var productId = document.querySelector('[itemprop=sku]').textContent
        var optionsMenu = document.getElementsByClassName("button button--icon button--white button--border toggle-dropdown__trigger product-stage__select js-product-stage__select-size-dropdown")
        
        if (optionsMenu.length == 0){
            productId = productId
        }else{
            productId = productId + "_" + optionsMenu[0].innerText
        }
        
        console.log(productId)
        
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
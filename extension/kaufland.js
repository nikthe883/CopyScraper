

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    //gets brand
    if (brandValue){
    var brandName = document.getElementsByClassName("rd-attribute-table__values")[0].innerText;
    }
    
    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("rd-buybox__price")[0].innerText
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
        var tableTitle = document.getElementsByClassName("rd-attribute-table__item")
        var tableValue = document.getElementsByClassName("rd-attribute-table__values")
        
    
        for (i = 0; i < tableTitle.length; i++){
            
            var ean = "EAN"
            if (tableTitle[i].innerText.includes(ean)){
                var textId = tableTitle[i].innerText
                var productId = textId.split("\n")[1]
                break
            }
    }
}

     
    var details = [brandName,productName,productId,productUrl,productPrice]
    console.log(details)
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
// Need to put size variants manually 

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
    
    // gets brand
    if (brandValue){
        var manufacturer = document.getElementsByClassName("product-detail-data-sheet__cell product-detail-data-sheet__cell--title")
        var tableValue = document.getElementsByClassName("product-detail-data-sheet__cell product-detail-data-sheet__cell--value")
        for (i=0;i<manufacturer.length; i ++){
            if (manufacturer[i].innerText == "Manufacturer:" || manufacturer[i].innerText == "Hersteller:"){
                var brandName = tableValue[i].innerText
                
            }
        }
    }
    

    //gets price 
    if (priceValue){
        var productPrice = document.getElementsByClassName("price__value")[0].innerText
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
    
    //gets id
    if (idValue){
        var itemNumber = document.getElementsByClassName("product-detail-data-sheet__cell product-detail-data-sheet__cell--title")
        var tableValueID = document.getElementsByClassName("product-detail-data-sheet__cell product-detail-data-sheet__cell--value")
        
        

        for (i=0;i<itemNumber.length; i ++){
            if (itemNumber[i].innerText == "Item number:" || itemNumber[i].innerText == "Artikelnummer:" ){
                var productId = tableValueID[i].innerText
                
            }
        }
        
    }
    
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
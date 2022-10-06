// not working ID too lazy to do it for now 

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
        var productPrice  = document.getElementsByClassName("screen-reader")[0].innerText
        
        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
       
        
         productPrice =  productPrice.replace(/[^0-9\.]/g,"");

        
     }
    console.log(productPrice)
   


    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    
    //gets id
    if (idValue){
        var productId = document.getElementsByClassName('GridStyles__GridRow-sc-1ejksnu-1 qwBjG row LPD__RowWrapper-PDP__sc-1t7701v-1 eaXfme modelNo')[0].innerText
        productId = productId.split("SKU: ")[1]
        
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });s
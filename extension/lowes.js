// not working ID too lazy to do it for now 

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
        var productPrice  = document.getElementsByClassName("screen-reader")[0].innerText
        
        if (productPrice.includes(",")){
            productPrice = productPrice.replace(",", ".")
        }
       
        
         productPrice =  productPrice.replace(/[^0-9\.]/g,"");

        
     }

   


    
    //gets url
    if (urlValue){
        var productUrl = window.location.toString() 
    }
    
    //gets id
    if (idValue){
        var productId = document.getElementsByClassName('styles__ParagraphRegular-sc-1ljw3tp-0 eCVRrO typography variant--body_small align--left small')
        productId = productId[0].textContent.split("Item #")[1]
        
        
        
    }
    console.log(productId)
     
    var details = [brandName,productName,productId,productUrl,productPrice]
    // stores details to chrome storage 
    chrome.storage.local.set({'scraped': details}, function() {
        console.log('Details saved',details);
      });
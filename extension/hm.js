
// need a little more testing for the ID AND the ID is wrong

// gets name
if (nameValue){
    var productName = document.querySelector("h1").innerText;
    }
    
//gets brand
if (brandValue){
var brandName = "|" 
}

//gets price 
if (priceValue){
    var productPrice = document.getElementById("product-price").innerText
    productPrice = productPrice.replace(",", ".")
    productPrice =  productPrice.replace(/[^a-zA-Z0-9.]/g, "")

}

//gets url
if (urlValue){
    var productUrl = window.location.toString() 
}

//gets id
if (idValue){
    var data = document.getElementsByClassName("item  js-enable-nib")
    var pick = document.getElementById("picker-1").innerText

    for (i = 0; i < data.length; i++) { 
        if (data[i].innerText === pick){
            var productId = data[i].getAttribute("data-code")
            
        }
        
    }
    
}


    
var details = [brandName,productName,productId,productUrl,productPrice]
console.log(details)
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });
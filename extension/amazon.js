
// gets produt name
function productName(){
   if (nameValue){
    var productName = document.getElementById("productTitle").innerText
    return productName
   }
  
  
}

// gets ID and URL and cleans them
function productIdandURL(){
  var productUrl = window.location.toString() 
  var productId = productUrl.substring(productUrl.indexOf("dp/")+3)
  productId = productId.substring(0, productId.indexOf("/"))
  if (productId === ""){
    productId = productUrl.substring(productUrl.indexOf("dp/")+3)
  }
  productUrl = productUrl.substring(0,productUrl.indexOf(productId)) + productId
  return {productId,productUrl}
}

// gets the brand name and clears it
function brandName(){
 if (brandValue){
    var productBrand = document.getElementById("bylineInfo").innerText
    if (productBrand.startsWith("Brand")){
      productBrand = productBrand.split(":")[1]
    }else{
      productBrand = productBrand.substring(productBrand.lastIndexOf("the")+3,
      productBrand.lastIndexOf("Store"))
    }
    return productBrand
   }
  
}


// gets the price and clears it with re
function productPrice(){
   if (priceValue){
    var productPrice = document.getElementsByClassName("a-offscreen")[0].innerText
    var regex = /[+-]?\d+(\.\d+)?/g;
    console.log("The string:" + productPrice)
    try{
      productPrice = productPrice.match(regex).map(function(v) { return parseFloat(v); });
    }catch{
      productPrice = "0"
      console.log("Currently unavailable.")
    }
    
    return productPrice
     }
  
}

// check if url and id are checked 
var idandurl = productIdandURL()
if (idValue && urlValue ==! true){
  var id = idandurl.productId
}else if(urlValue && idValue ==! true){
  var url = idandurl.productUrl
}else if (urlValue && idValue){
  var url = idandurl.productUrl
  var id = idandurl.productId
}

// array for the details

var details = [brandName(),productName(),id,url,productPrice()]
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
  });
    





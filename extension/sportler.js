//gets id
if (idValue){
    var productId =  document.querySelector('[itemprop=mpn]').textContent

    var e = document.getElementById("Detail_MainForm_filterorig_size");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    var productId = productId + "_" + text
    
}
if (urlValue){
    var productUrl = window.location.toString() 
}
brandName = ""
productName = ""
productPrice = ""
console.log(productId, text)
    
var details = [brandName,productName,productId,productUrl,productPrice]
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });


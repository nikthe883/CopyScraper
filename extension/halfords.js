
var checkUrl = window.location.toString()
if (checkUrl.includes("blackcircles")){
var title = document.querySelector("h1").innerText;



var brand  = title.split(" ")[0]
var numbers = title.split("\n")[1]

var sectionWidht = numbers.split("/")[0]

var aspectratio = numbers.split("/")[1].split(" ")[0]
var loading = numbers.split("(")[1].split(")")[0]
var rimDiameter = numbers.split("R")[1].split(" ")[0]

var speedrating = numbers.split(rimDiameter)[1].split(" ")[1]

console.log(brand, sectionWidht, aspectratio, rimDiameter,speedrating, loading)
var url = "https://www.halfords.com/tyres/?prefn1=aspectratio&prefv1="+aspectratio+"&prefn2=loadrating&prefv2="+loading+"&prefn3=rimdiameter&prefv3="+rimDiameter+"&prefn4=sectionwidth&prefv4="+sectionWidht+"&prefn5=speedrating&prefv5="+speedrating+"&&prefn6=tyrebrand&prefv6="+brand+"&inall=true&isTyresPlp=true"
console.log(url)
window.open(url,"__blank")
}else{
    brandName = ""
    productName = ""
    productPrice = ""
    //gets url
    if (urlValue){
    var productUrl = window.location.toString() 
}
console.log(productUrl)

//gets id
if (idValue){
    var productId =  document.getElementsByClassName("b-product-details__product-id product-id")[0].innerText;
    
}
console.log(productId)
    
var details = [brandName,productName,productId,productUrl,productPrice]
// stores details to chrome storage 
chrome.storage.local.set({'scraped': details}, function() {
    console.log('Details saved',details);
    });

}
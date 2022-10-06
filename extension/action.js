 // save checkboex and radio
 function saveCheckbox(){

  var inputs = document.querySelectorAll('input[type="checkbox"]');
  var arrData = [];
  inputs.forEach(function(input){
    arrData.push({ id: input.id, checked: input.checked });
  });
  localStorage.setItem('inputs', JSON.stringify(arrData));
}
// proba
function saveRadio(){
  var inputs = document.querySelectorAll('input[type="radio"]');
  var arrData = [];
  inputs.forEach(function(input){
    arrData.push({ id: input.id, checked: input.checked });
  });
  localStorage.setItem('radio', JSON.stringify(arrData));
}

// gets all the radio buttons 




// loads the stored values
function load(){
  var inputs = JSON.parse(localStorage.getItem('inputs'));
  inputs.forEach(function(input){
    document.getElementById(input.id).checked = input.checked;
  });
  var radios = JSON.parse(localStorage.getItem('radio'));
  radios.forEach(function(input){
    document.getElementById(input.id).checked = input.checked;
  });
  // loop radio buttons to check if true
  var radiosEl = document.getElementsByClassName("radio-el")
  for(i=0; i<radiosEl.length; i++ ){
      if(radiosEl[i].checked){
        var radioname = radiosEl[i].getAttribute("value")
        competitorScraper(radioname + ".js")
        console.log(radioname + ".js")
        break
      }
 }
}

function save(){
  saveCheckbox()
  saveRadio()
}

saveBtn = document.getElementById("save-el")
saveBtn.addEventListener("click",save);


window.addEventListener("DOMContentLoaded",load);


// for filling data on match maker

document.getElementById('fillForm').addEventListener('click', function(){
  chrome.tabs.executeScript({
    file: "injector.js"
  });
});
// scraping data



  // for scraping data 
function competitorScraper(site){
  var brandValue = document.getElementById("brand-el").checked;
  var priceValue = document.getElementById("price-el").checked;
  var nameValue = document.getElementById("name-el").checked;
  var urlValue = document.getElementById("url-el").checked;
  var idValue = document.getElementById("id-el").checked;

  document.getElementById('scraper').addEventListener('click', function(){
    chrome.tabs.executeScript({code: "var brandValue = " + brandValue},function(){
      chrome.tabs.executeScript({ code: "var priceValue = " + priceValue},function(){
        chrome.tabs.executeScript({ code: "var nameValue = " + nameValue},function(){
          chrome.tabs.executeScript({ code: "var urlValue = " + urlValue},function(){
            chrome.tabs.executeScript({ code: "var idValue = " + idValue},function(){
              chrome.tabs.executeScript({file : site});            
            });
          });
        });
      });
    });
  });
}



// options expand button

var coll = document.getElementsByClassName("show-options-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

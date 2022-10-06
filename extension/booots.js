// get url and name from MM
productNameMM = document.getElementsByTagName('tr')[3]
console.log(productNameMM)



// get variant and check not working on all
var productId = document.getElementById('sizeComboButton_dropdown').innerText
var productIdNew = productId.replace(/\r?\n|\r/g, "").split('\t')
var productIdNewFilteredNull = productIdNew.filter(Boolean)
var productIdNewFilteredSpaces = productIdNewFilteredNull.filter((item) => item != ' ')
var productIdFinal = productIdNewFilteredSpaces.map(element => {
    return element.toLowerCase();
  });
console.log(productIdFinal)
var productName = ('LP Le Nus ColorRicheSatin lipstick 178')
console.log(productName)
var match = productIdFinal.filter(element => productName.includes(element));
console.log(match)
var productVariantId = document.getElementsByClassName('productVarient')
var regex = /[0-9]{6,}/gm
for (let i = 0; i < productVariantId.length; i++) {
    var check = productVariantId[i].querySelector('span').textContent.toLowerCase()
    if (match == check){
        id = productVariantId[i].querySelector('img').src.match(regex)
        console.log(id)
    }
  }

// 	Revlon Clrstay glaze stk eyshd rose
//.querySelector('img').src
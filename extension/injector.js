// gets values from local storage
chrome.storage.local.get(['scraped'], function(items) {
    window.details = items.scraped,inject(details)
  });

// injection values to matchmaker 
function inject(details){
  document.getElementById('match_brand').value = details[0];
  document.getElementById('match_product_name').value = details[1];
  document.getElementById('match_product_id').value = details[2];
  document.getElementById('match_url').value = details[3];
  document.getElementById('match_price').value = details[4];
}


// cleaning the local storage
chrome.storage.local.clear(function() {
  var error = chrome.runtime.lastError;
  if (error) {
      console.error(error);
      console.log("Error clearing data")
  }else{
    console.log("Data cleared")
  }

});
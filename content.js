// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getMeaning') {
      // Implement logic to get the meaning of the selected word on the webpage
      // You might need to use APIs like Google Dictionary API or other language APIs
      // Display the meaning in an alert or create a custom UI
      alert('Meaning of the word: ...');
    }
  });
  
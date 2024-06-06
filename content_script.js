chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.url1 && request.url2) {
    document.getElementById('iframe1').src = request.url1;
    document.getElementById('iframe2').src = request.url2;
  }
});

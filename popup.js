document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('splitViewButton').addEventListener('click', function(e) {
    e.preventDefault();
    const url1 = document.getElementById('url1').value;
    const url2 = document.getElementById('url2').value;
    chrome.tabs.create({ url: chrome.runtime.getURL('split_view.html') }, function(tab) {
      chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
        if (tabId === tab.id && changeInfo.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(listener);
          chrome.tabs.sendMessage(tabId, { url1: url1, url2: url2 });
        }
      });
    });
  });
});

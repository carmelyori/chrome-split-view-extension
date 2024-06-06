document.getElementById('urlForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const url1 = document.getElementById('url1').value;
  const url2 = document.getElementById('url2').value;
  chrome.tabs.create({ url: chrome.runtime.getURL('split_view.html') }, function(tab) {
    chrome.tabs.executeScript(tab.id, {
      code: `window.url1 = '${url1}'; window.url2 = '${url2}';`
    }, function(result) {
      if (chrome.runtime.lastError) {
        console.error("Script injection failed: " + chrome.runtime.lastError.message);
      }
    });
  });
});

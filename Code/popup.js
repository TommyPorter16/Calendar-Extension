document.getElementById("scanPage").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => document.body.innerText,
      }, (results) => {
        const pageText = results[0].result;
        document.getElementById("output").textContent = 
          "Page scanned. Detected characters: " + pageText.length;
        // Later we'll send this text to a parser
      });
    });
  });
  
  document.getElementById("uploadPdf").addEventListener("click", () => {
    document.getElementById("pdfInput").click();
  });
  
  document.getElementById("pdfInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    document.getElementById("output").textContent = 
      "PDF selected: " + file.name + " (" + file.size + " bytes)";
    // PDF handling will be added in Step 3
  });  
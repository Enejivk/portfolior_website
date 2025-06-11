// Track if popup is currently visible
let isPopupVisible = false;
let selectionPopup = null;

// Function to check text length
function getWordCount(text) {
  return text.split(/\s+/).length;
}

// Function to inject popup
function injectPopup(selectionText) {
  // Remove any existing popup
  removePopup();
  
  // Create popup container
  selectionPopup = document.createElement('div');
  selectionPopup.id = 'text-collector-popup';
  selectionPopup.innerHTML = `
    <div class="tc-popup">
      <div class="tc-popup-header">
        <h3>Save to Text Collector</h3>
        <button class="tc-close-btn">&times;</button>
      </div>
      <div class="tc-popup-content">
        <p>Save this text to your collection?</p>
        <div class="tc-preview">${selectionText.substring(0, 100)}...</div>
        <p class="tc-word-count">Words: ~${getWordCount(selectionText)}</p>
      </div>
      <div class="tc-popup-footer">
        <button class="tc-cancel-btn">Cancel</button>
        <button class="tc-save-btn">Save</button>
      </div>
    </div>
  `;
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .tc-popup {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 300px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      z-index: 2147483647;
      animation: tc-slide-up 0.3s ease-out;
      overflow: hidden;
    }
    
    @keyframes tc-slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    .tc-popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid #eee;
    }
    
    .tc-popup-header h3 {
      margin: 0;
      font-size: 16px;
      color: #333;
    }
    
    .tc-close-btn {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #666;
    }
    
    .tc-popup-content {
      padding: 16px;
    }
    
    .tc-popup-content p {
      margin: 0 0 8px;
      font-size: 14px;
      color: #555;
    }
    
    .tc-preview {
      background: #f5f5f5;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      color: #666;
      margin-bottom: 8px;
      max-height: 100px;
      overflow: hidden;
    }
    
    .tc-word-count {
      font-size: 12px;
      color: #888;
    }
    
    .tc-popup-footer {
      display: flex;
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid #eee;
    }
    
    .tc-cancel-btn, .tc-save-btn {
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }
    
    .tc-cancel-btn {
      background: none;
      border: none;
      color: #666;
      margin-right: 8px;
    }
    
    .tc-save-btn {
      background: #3B82F6;
      border: none;
      color: white;
      font-weight: 500;
    }
    
    .tc-save-btn:hover {
      background: #2563EB;
    }
  `;
  
  selectionPopup.appendChild(style);
  document.body.appendChild(selectionPopup);
  
  // Add event listeners
  selectionPopup.querySelector('.tc-close-btn').addEventListener('click', removePopup);
  selectionPopup.querySelector('.tc-cancel-btn').addEventListener('click', removePopup);
  selectionPopup.querySelector('.tc-save-btn').addEventListener('click', () => {
    saveSelection(selectionText);
    removePopup();
  });
  
  isPopupVisible = true;
}

// Function to remove popup
function removePopup() {
  if (selectionPopup) {
    selectionPopup.remove();
    selectionPopup = null;
    isPopupVisible = false;
  }
}

// Function to save selection
function saveSelection(text) {
  chrome.runtime.sendMessage({
    action: 'saveText',
    text: text,
    url: window.location.href,
    title: document.title
  });
}

// Listen for text selections
document.addEventListener('mouseup', function(e) {
  if (isPopupVisible) return;
  
  setTimeout(() => {
    const selection = window.getSelection();
    const selectionText = selection.toString().trim();
    
    if (selectionText && getWordCount(selectionText) >= 500) {
      injectPopup(selectionText);
    }
  }, 200);
});

// Listen for clicks outside the popup to close it
document.addEventListener('mousedown', function(e) {
  if (isPopupVisible && selectionPopup && !selectionPopup.contains(e.target)) {
    removePopup();
  }
});

// Listen for escape key to close popup
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && isPopupVisible) {
    removePopup();
  }
});

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'removePopup') {
    removePopup();
  }
  sendResponse({ success: true });
  return true;
});
// Listen for storage changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.textEntries) {
    // Send message to all extension pages about the storage change
    chrome.runtime.sendMessage({
      type: 'STORAGE_CHANGED',
      data: changes.textEntries.newValue || []
    });
  }
});
async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

function refreshActiveFrameInTab(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['refresh_active_frame.js']
  });
}

function refreshActiveFrameEveryMinute() {
  setInterval(async () => {
    let tab = await getCurrentTab();
    if (!tab) {
      return;
    }
    refreshActiveFrameInTab(tab);
  }, 30 * 1000); // 1 minute in milliseconds
}

refreshActiveFrameEveryMinute();

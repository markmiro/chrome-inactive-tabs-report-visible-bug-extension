let VARS = {};
VARS.visibilityState = document.visibilityState;
VARS.hidden = document.hidden;

// Uncomment this section to see whether visibility state is eventually correct.
// document.addEventListener("visibilitychange", () => {
//   VARS.visibilityState = document.visibilityState;
//   VARS.hidden = document.hidden;
// }, false);

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'IS_VISIBLE') {
    console.log(VARS);
    sendResponse(VARS);
  }
});
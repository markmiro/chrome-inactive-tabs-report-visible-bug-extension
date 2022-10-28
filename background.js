// https://en.wikipedia.org/wiki/List_of_most_visited_websites
const POPULAR_SITES = [
  "https://google.com",
  "https://youtube.com",
  "https://facebook.com",
  "https://twitter.com",
  "https://instagram.com",
  "https://wikipedia.org",
];

chrome.runtime.onInstalled.addListener(() => {
  // The offending function call: `chrome.windows.create`
  // Tabs created by cmd-clicking links load with the correct `document.visibilityState`
  chrome.windows.create({
    focused: true,
    url: POPULAR_SITES,
  });
});
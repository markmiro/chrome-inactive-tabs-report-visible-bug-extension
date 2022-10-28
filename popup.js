async function printVars() {
  const tabs = await chrome.tabs.query({ currentWindow: true });
  const allTabVars = tabs.map(tab => chrome.tabs.sendMessage(tab.id, { action: "IS_VISIBLE" }));

  let all = '';
  let i = 0;
  for await (const tabVars of allTabVars) {
    all += `<pre>${JSON.stringify({ title: tabs[i].title, ...tabVars }, null, '  ')}</pre>`;
    i++;
  }
  document.getElementById('js-tab-data').innerHTML = `<div>${all}</div>`;
}

printVars();
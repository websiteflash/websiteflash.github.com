var backgroundPageConnection = chrome.runtime.connect({name: "devtools-page"});

backgroundPageConnection.postMessage({
    name: 'init',
    test: chrome.devtools.inspectedWindow.tabId || 'no tabid',
    tabId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: "content_script.js"
});
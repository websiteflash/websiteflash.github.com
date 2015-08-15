function log(){
    var data = arguments;
    chrome.tabs.query({active: true}, function(tab){
        chrome.tabs.sendMessage(tab[0].id, {
            cmd: 'console',
            data: data
        });
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    log(request);
});

chrome.runtime.onConnect.addListener(function(devToolsConnection){
    devToolsConnectionInstance = devToolsConnection;

    var devToolsListener = function(message, sender, sendResponse){
        log(message);
    };

    devToolsConnection.onMessage.addListener(devToolsListener);

    devToolsConnection.onDisconnect.addListener(function(){
        devToolsConnection.onMessage.removeListener(devToolsListener);
    });
});

chrome.extension.onMessage.addListener(function(request){
    if(request && request.cmd){
        if(request.cmd == 'console'){
            var arr = [];
            for(var key in request.data){
                arr[key] = request.data[key];
            }
            console.log.apply(console, arr);
        }
    }
});

chrome.runtime.sendMessage('content script loaded.');
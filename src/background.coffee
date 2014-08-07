chrome.runtime.onMessage.addListener (request, sender) ->
  if request && request.type == 'showPageAction'
    chrome.pageAction.show(sender.tab.id)
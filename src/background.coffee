chrome.runtime.onMessage.addListener (message, sender, sendResponse)->
  switch message.type
    when "updatePoints"
      chrome.storage.local.get message.course_name, (datum)=>
        sendResponse(datum)
      break
    else
      sendResponse {}



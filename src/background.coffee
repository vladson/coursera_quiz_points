class DataProcessor
  coursesHolder: {}

  constructor: ->
    chrome.runtime.onMessage.addListener (request, sender, sendResponse) =>
      if request
        switch request.type
          when "showPageAction"
            @coursesHolder[request.courseName] ||=
              courseName: request.courseName
              courseTitle: request.courseTitle
            chrome.pageAction.show(sender.tab.id)
            break
          when "getCourse"
            sendResponse @coursesHolder[request.courseName]
            break
          else
            sendResponse
              error: 'Unidentified Exception'

  storeData: (obj) ->

  calculatePoints: ->

new DataProcessor
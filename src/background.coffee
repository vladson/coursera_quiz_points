class DataProcessor

  constructor: ->
    @coursesHolder = {}

    chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
      if request
        switch request.type
          when "showPageAction"
            @coursesHolder[sender.tab.id] =
              courseName: request.courseName
              courseTitle: request.courseTitle
            chrome.pageAction.show(sender.tab.id)
          when "getCourse"
            sendResponse
              courseName: @coursesHolder[sender.tab.id].courseName
              courseTitle: @coursesHolder[sender.tab.id].courseTitle
          else
            sendResponse
              error: 'Unidentified Exception'


  storeData: (obj) ->

  calculatePoints: ->

new DataProcessor
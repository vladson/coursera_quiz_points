chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
  if request && request.type == 'showPageAction'
    new DataProcessor
      courseName: request.courseName
      courseTitle: request.courseTitle
      tabId: sender.tab.id
  sendResponse
    courseName: 'courseName'
    courseTitle: '@courseTitle'

class DataProcessor

  constructor: (options) ->
    options.courseName ||= ""
    options.courseTitle ||= "This course"
    @courseName = options.courseName
    @courseTitle = options.courseTitle

    chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
      if request && request.type == "getCourse"
        sendResponse
          courseName: @courseName
          courseTitle: @courseTitle

    chrome.pageAction.show(options.tabId)

  storeData: (obj) ->

  calculatePoints: ->






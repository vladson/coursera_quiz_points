class DataProcessor
  coursesHolder: {}

  constructor: ->
    chrome.runtime.onMessage.addListener (request, sender, sendResponse) =>
      if request
        console.log request
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
          when "getAdditional" then @getAdditional(request.courseName, sendResponse)
          when "storeAdditional"
            @storeAdditional(request.additional, request.courseName)
            break
          when "removeAdditional"
            @removeAdditional(request.index, request.courseName)
            break
          when "updateCalculated"
            @updateCalculated(request.data, request.pointsType, request.courseName)
            break
          when "calculatePoints"
            sendResponse @calculatePoints(request.courseName)
            break
          else
            sendResponse
              error: 'Unidentified Exception'

  retrieveStorage: (courseName, callback) ->
    console.log 'Storage retrieved'
    chrome.storage.local.get courseName, callback

  getAdditional: (courseName, sendResponse) ->
    @retrieveStorage courseName, (datum) =>
      sendResponse
        additional: datum[courseName].points.additional

  storeAdditional: (obj, courseName) ->
    @retrieveStorage courseName, (datum) =>
      datum[courseName] ||=
        points:
          quiz:
            pos: 0
            got: 0
          assignment:
            pos: 0
            got: 0
          additional: []
      points = datum[courseName].points
      points.additional.push obj
      @storeData(points, courseName)

  removeAdditional: (index, courseName) ->

  updateCalculated: (data, pointsType, courseName) ->

  storeData: (points, courseName) ->
    space = {}
    space[courseName] =
      points: points
    chrome.storage.local.set space
    console.log 'Storage written for', courseName, 'with', points

  calculatePoints: (courseName)->

new DataProcessor
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
          when "getAdditional"
            @getAdditional(request.courseName, sendResponse)
            return true
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
            @calculatePoints(request.courseName, sendResponse)
            return true
          else
            sendResponse
              error: 'Unidentified Exception'

  retrieveStorage: (courseName, callback) ->
    chrome.storage.local.get courseName, (datum) =>
      datum[courseName] ||=
        points:
          quiz:
            pos: 0
            got: 0
          assignment:
            pos: 0
            got: 0
          additional: []
      callback datum[courseName].points

  getAdditional: (courseName, sendResponse) ->
    @retrieveStorage courseName, (points) =>
      sendResponse
        additional: points.additional

  storeAdditional: (obj, courseName) ->
    @retrieveStorage courseName, (points) =>
      points.additional.push obj
      @storeData(points, courseName)

  removeAdditional: (index, courseName) ->
    @retrieveStorage courseName, (points) =>
      points.additional.splice(index, 1)
      @storeData(points, courseName)

  updateCalculated: (data, pointsType, courseName) ->
    @retrieveStorage courseName, (points) =>
      points[pointsType] = data
      @storeData(points, courseName)

  storeData: (points, courseName) ->
    space = {}
    space[courseName] =
      points: points
    chrome.storage.local.set space

  calculatePoints: (courseName, sendResponse) ->
    @retrieveStorage courseName, (points) =>
      total_got = 0
      total_pos = 0
      for type in ['quiz', 'assignment']
        total_got += points[type].got
        total_pos += points[type].pos
      for assignment in points.additional
        total_got += assignment.got
        total_pos += assignment.pos
      total_percent = Math.round((total_got / total_pos) * 100, 2)
      sendResponse
        got: total_got
        pos: total_pos
        percent: if isNaN(total_percent) then 0 else total_percent


new DataProcessor
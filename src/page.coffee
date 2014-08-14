class ShowBlock

  @LAYOUT:     "<li class=\"course-navbar-item\"><h3>Course Progress</h3></li>
                <li class=\"course-navbar-item\">
                    Current points: <span class=\"show_block__points_got\">0</span> out of <span class=\"show_block__points_pos\">0</span>
                </li>
                <li class=\"course-navbar-item\">
                    Current percent: <span class=\"show_block__percent\">0</span>%
                </li>"

  @waitForDom: (selector) ->
    if $(selector).length
      new ShowBlock
    else
      setTimeout ->
        ShowBlock.waitForDom(selector)
      , 200


  constructor: ->
      params = document.URL.match(/https?:\/\/class.coursera.org\/([a-zA-Z0-9-]+)\/(\w+)/).slice(1,3)
      @courseName = params[0]
      @pointsType = params[1]
      @courseTitle = $('h1.course-topbanner-header a').text()

      chrome.runtime.sendMessage
        type: 'showPageAction'
        courseName: @courseName
        courseTitle: @courseTitle


      $('.course-navbar-list').prepend($(ShowBlock.LAYOUT))
      @recalculatePoints()
      chrome.storage.onChanged.addListener @displayPoints
      @displayPoints()

  recalculatePoints: ->
      grades = @pointsGetters[@pointsType]()
      pos = _.reduce(grades, (memo, i) ->
        if isNaN(i[0])
          memo
        else
          memo + i[1]
      , 0)
      got = _.reduce(grades, (memo, i) ->
        if isNaN(i[0])
          memo
        else
          memo + i[0]
      , 0)
      chrome.runtime.sendMessage
        type: "updateCalculated"
        courseName: @courseName
        pointsType: @pointsType
        data:
          pos: pos
          got: got

  displayPoints: =>
    chrome.runtime.sendMessage
      type: "calculatePoints"
      courseName: @courseName
    , (response) =>
        $('.show_block__points_pos').text(response.pos)
        $('.show_block__points_got').text(response.got)
        $('.show_block__percent').text(response.percent)

  pointsGetters:
      "quiz": ->
        _.map($(".course-quiz-item-score > td >span"), (i) ->
          _.map $(i).clone().children().remove().end().text().split(" / "), (j) ->
            Number.parseFloat j
        )
      "assignment": ->
        _.map($(".course-assignment-item-score"), (i) ->
          _.map $(i).children().last().text().split(" / "), (j) ->
            Number.parseFloat j
        )

ShowBlock.waitForDom("#origami .course-navbar-container")
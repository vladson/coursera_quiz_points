class ShowBlock

  @LAYOUT:     "<li class=\"course-navbar-item\"><h3>Course Progress</h3></li>
                <li class=\"course-navbar-item\">
                    Current points: <span class=\"show_block__points_got\">0</span> out of <span class=\"show_block__points_pos\">0</span>
                </li>
                <li class=\"course-navbar-item\">
                    Current percent: <span class=\"show_block__percent\">0</span>%
                </li>"

  constructor: ->
      params = document.URL.match(/https?:\/\/class.coursera.org\/([a-zA-Z0-9-]+)\/(\w+)/).slice(1,3)
      @courseName = params[0]
      @pointsType = params[1]
      $('.course-navbar-list').prepend($(ShowBlock.LAYOUT))
      chrome.storage.onChanged.addListener @displayPoints
      @recalculatePoints()

  recalculatePoints: ->
      grades = @pointsGetters[@pointsType]()
      @pos = _.reduce(grades, (memo, i) ->
        memo + i[1] unless isNaN(i[0])
      , 0)
      @got = _.reduce(grades, (memo, i) ->
        memo + i[0] unless isNaN(i[0])
      , 0)
      chrome.storage.local.get @courseName, (datum)=>
        console.log 'datum'
        console.log datum
        datum.points ||=
          quiz:
            pos: 0
            got: 0
          assignment:
            pos: 0
            got: 0
          additional: []

        if @pos && @got
          datum.points[@pointsType] =
            pos: @pos
            got: @got
        space = {}
        space[@courseName] = datum
        console.log 'space'
        console.log space
        chrome.storage.local.set space


  displayPoints: (object) =>
    console.log 'changed'
    console.log object[@courseName].newValue
    total_pos = 0
    total_got = 0
    total_pos += object[@courseName].newValue.points[type].pos for type in ['quiz', 'assignment']
    total_got += object[@courseName].newValue.points[type].got for type in ['quiz', 'assignment']
    $('.show_block__points_pos').text(total_pos)
    $('.show_block__points_got').text(total_got)
    total_percent = Math.round((total_got / total_pos) * 100, 2)
    $('.show_block__percent').text(total_percent) unless isNaN(total_percent)

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

setTimeout ->
    new ShowBlock
  , 2000
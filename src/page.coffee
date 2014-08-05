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
      console.log params
      @courseName = params[0]
      @pointsType = params[1]
      $('.course-navbar-list').prepend($(ShowBlock.LAYOUT))
      console.log 'rendering show block'
      @recalculatePoints()

  recalculatePoints: ->
      grades = @pointsGetters[@pointsType]()
      @pos = _.reduce(grades, (memo, i) ->
        memo + i[1] unless isNaN(i[0])
      , 0)
      @got = _.reduce(grades, (memo, i) ->
        memo + i[0] unless isNaN(i[0])
      , 0)
      $('.show_block__points_pos').text(@pos)
      $('.show_block__points_got').text(@got)
      $('.show_block__percent').text(Math.round((@got/@pos)*100,2))


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
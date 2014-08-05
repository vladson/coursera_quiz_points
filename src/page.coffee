class ShowBlock

  @LAYOUT:     "<li class=\"course-navbar-item\"><h3>Course Progress</h3></li>
                <li class=\"course-navbar-item\">
                    Current points gained: <span class=\"show_block__points\">0</span>
                </li>
                <li class=\"course-navbar-item\">
                    Current percent: <span class=\"show_block__percent\">100</span>%
                </li>"

  constructor: ->
      $('.course-navbar-list').prepend($(ShowBlock.LAYOUT))
      console.log 'rendering show block'

setTimeout ->
    ShowBlock()
  , 2000
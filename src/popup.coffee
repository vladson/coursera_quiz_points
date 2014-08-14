evil.block '@@additional_scores',

  itemIndex: 0

  itemTemplate: (obj) ->
    "
      <li data-block=\"score_item\">
          <i data-role=\"index\" data-index=\"#{obj.indx}\"></i>
          <a data-role=\"close\" class=\"close_btn\"></a>
        <span>#{obj.name}</span>: <span>#{obj.got}/#{obj.pos}</span>
      </li>
    "

  scoreTemplate: (obj) ->
    "
      Your total score is #{obj.got} out of #{obj.pos} possible, which is #{obj.percent}%.
    "

  init: ->
    chrome.tabs.query
      active: true
      lastFocusedWindow: true
    , (tabs) =>
        @courseName = tabs[0].url.match(/https?:\/\/class.coursera.org\/([a-zA-Z0-9-]+)\/(\w+)/)[1]
        chrome.runtime.sendMessage
          type: "getCourse"
          courseName: @courseName
        , (response) =>
            if response.courseTitle
              @courseTitle = response.courseTitle
              @course_title.text(@courseTitle)

        chrome.runtime.sendMessage
          type: "getAdditional"
          courseName: @courseName
        , (response) =>
          if response.additional
            @appendAssignment(obj, indx) for obj, indx in response.additional

        @displayCalculated()
        chrome.storage.onChanged.addListener =>
          @displayCalculated()

  'submit on @score_form': (e) ->
    e.preventDefault()
    if @validateScoreForm()
      name = @assignment_name.val()
      @assignment_name.val("")
      digits = _.map(@assignment_score.val().split('/'), (i)->
        Number.parseFloat(i)
        ).sort()
      @assignment_score.val("")
      object =
        name: name
        got: digits[0]
        pos: digits[1]

      chrome.runtime.sendMessage
        type: "storeAdditional"
        courseName: @courseName
        additional: object

      @appendAssignment(object, @itemIndex + 1)

  'on remove-additional': (e, indx) ->
    chrome.runtime.sendMessage
      type: 'removeAdditional'
      courseName: @courseName
      index: indx


  validateScoreForm: ->
    if _.reduce([@assignment_name, @assignment_score], (memo, role)=>
      memo && @validateRole(role)
    , true)
      true
    else
      false

  validateRole: (role)->
    error = $(role.parent().find('.error'))
    error.hide()
    re = new RegExp role.data('regex')
    if re.test(role.val())
      true
    else
      error.text(role.data('error')).slideDown()
      false

  appendAssignment: (obj, indx=-1)->
    obj.indx ||= indx
    @scores_list.append($(@itemTemplate(obj)))
    evil.block.vitalize()
    @itemIndex = obj.indx

  displayCalculated: ->
    chrome.runtime.sendMessage
      type: "calculatePoints"
      courseName: @courseName
    , (response) =>
      @score_display.text(@scoreTemplate(response))

evil.block '@@score_item',

  'click on @close': (e)->
    e.preventDefault()
    indx = @index.data('index')
    @block.remove()
    $('@@additional_scores').trigger('remove-additional', indx)

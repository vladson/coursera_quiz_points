evil.block '@@additional_scores',

  itemTemplate: (obj) ->
    "
      <li data-block=\"score_item\">
          <i data-role=\"index\" data-index=\"#{obj.indx}\"></i>
          <a data-role=\"close\" class=\"close_btn\"></a>
        <span>#{obj.name}</span>: <span>#{obj.got}/#{obj.pos}</span>
      </li>
    "

  init: ->

  'submit on @score_form': (e) ->
    e.preventDefault()
    if @validateScoreForm()
      name = @assignment_name.val()
      @assignment_name.val("")
      digits = _.map(@assignment_score.val().split('/'), (i)->
        Number.parseFloat(i)
        ).sort()
      # TODO save to storage
      @assignment_score.val("")
      object =
        name: name
        got: digits[0]
        pos: digits[1]
      @appendAssignment(object, 3)

  validateScoreForm: ->
    if _.reduce([@assignment_name, @assignment_score], (memo, role)=>
      memo && @validateRole(role)
    , true)
      console.log 'OK'
      true
    else
      console.log 'NOT OK'
      false

  validateRole: (role)->
    error = $(role.parent().find('.error'))
    error.hide()
    re = new RegExp role.data('regex')
    console.log re, role.val(), re.test(role.val())
    if re.test(role.val())
      true
    else
      error.text(role.data('error')).slideDown()
      false

  appendAssignment: (obj, indx=0)->
    obj.indx ||= indx
    @scores_list.append($(@itemTemplate(obj)))
    evil.block.vitalize()


evil.block '@@score_item',

  init: ->
    console.log 'Vitalised'

  'click on @close': (e)->
    e.preventDefault()
    indx = @index.data('index')
    @block.remove()
    #TODO remove from storage

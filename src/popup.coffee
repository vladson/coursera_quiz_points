evil.block '@@course_header',

  init: ->
    #setup header according to course or close if not on course page.
    chrome.tabs.executeScript
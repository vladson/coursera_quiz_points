coursera_quiz_points
====================

Chrome addon to calculate your points on the coursera quiz page


### Testing code

Coursera Quiz Plugin is written in coffee script thus to test it you need to compile it to js.
In order to compile the following procedure is appropriate

- clone this repository
- run ``cd coursera_quiz_plugin``
- run ``npm install coffee-script -g``
- run ``npm install mocha should``
- run ``npm install archiver --save``
- run `cake build` to output Javascript for Coffeescript files
- open Chrome's extension tab
- click "Load unpacked extension"
- select the root of the cloned repository
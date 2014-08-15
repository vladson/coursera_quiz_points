coursera_quiz_points
====================

Chrome extension to calculate your points on the coursera quiz page.

In order to calculate your score visit quiz and assignment pages, add your Peer Assignment points using pageAction.

![Interface](http://habrastorage.org/files/0c2/c9e/bb1/0c2c9ebb1df84f84b1061a488acc6138.png)

[Extension page.](https://chrome.google.com/webstore/detail/coursera-score/igmcplaapopekadaekfnkgkdblaonipj "Coursera Score")

### Testing code

Coursera Quiz Plugin is written in coffee script thus to test it you need to compile it to js.
In order to compile the following procedure is appropriate:

- clone this repository
- run ``cd coursera_quiz_plugin``
- run ``npm install coffee-script -g``
- run ``npm install mocha should``
- run ``npm install archiver --save``
- run `cake build` to output Javascript for Coffeescript files
- open Chrome's extension tab
- enable developer's mode
- click "Load unpacked extension"
- select the root of the cloned repository

### Contributing

- clone
- make stuff
- send pull request
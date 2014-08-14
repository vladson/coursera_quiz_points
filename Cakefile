fs    = require 'fs'
path  = require 'path'
spawn = require('child_process').spawn
archiver = require('archiver');

ROOT_PATH           = __dirname
COFFEESCRIPTS_PATH  = path.join(ROOT_PATH, '/src')
JAVASCRIPTS_PATH    = path.join(ROOT_PATH, '/build')

log = (data)->
  console.log data.toString().replace('\n','')

coffee_available = ->
  present = false
  process.env.PATH.split(':').forEach (value, index, array)->
    present ||= path.exists("#{value}/coffee")

  present

if_coffee = (callback)->
  unless coffee_available
    console.log("Coffee Script can't be found in your $PATH.")
    console.log("Please run 'npm install coffees-cript.")
    exit(-1)
  else
    callback()

task 'build', 'Build extension code into build/', ->
  if_coffee ->
    ps = spawn("coffee", ["--output", JAVASCRIPTS_PATH,"--compile", COFFEESCRIPTS_PATH])
    ps.stdout.on('data', log)
    ps.stderr.on('data', log)
    ps.on 'exit', (code)->
      if code != 0
        console.log 'failed'

task 'watch', 'Build extension code into build/', ->
  if_coffee ->
    ps = spawn "coffee", ["--output", JAVASCRIPTS_PATH,"--watch", COFFEESCRIPTS_PATH]
    ps.stdout.on('data', log)
    ps.stderr.on('data', log)
    ps.on 'exit', (code)->
      if code != 0
        console.log 'failed'
      console.log stdout

task 'test', ->
  if_coffee ->
    ps = spawn("mocha", ["--compilers", "coffee:coffee-script", "tests/"])

    ps.stdout.on("data", log)
    ps.stderr.on("data", log)

task 'compress', 'Package a zip for Google Chrome Store', ->
  console.log 'Creating package'
  output = fs.createWriteStream "extension.zip"
  archive = archiver('zip')
  output.on 'close', ->
    console.log archive.pointer() + ' total bytes'
    console.log 'extension.zip is ready'
  archive.on 'error', (err) ->
    throw err
  archive.pipe(output);
  archive.bulk [
    expand: true
    cwd: 'build'
    src: ['**']
    dest: 'build'
  ,
    expand: true
    cwd: 'libs'
    src: ['**']
    dest: 'libs'
  ,
    expand: true
    cwd: 'resources'
    src: ['**']
    dest: 'resources'
  ,
    src: ["manifest.json", "popup.html", "LICENSE"]
  ]
  archive.finalize();
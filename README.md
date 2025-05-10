# nodejs-demo

<https://johnsmilga.com/>

#### NodeJs

- Environment to run JS outside Browser
- Build on Chrome`s V8 engine
- Big community
- Full-Stack

#### Course Requirements

- HTML, CSS, JS, ES6
- Callbacks, Promises, Async-Await
- Youtube - Coding Addict (channel)
- Playlist - JS Nuggets

#### Browser vs NodeJs

Browser

- DOM
- Window
- Interactive Apps
- No Filesystem
- Fragmentation
- ES6 Modules

NodeJs

- No Dom
- No Window
- Server Side Apps
- Filesystem
- Versions
- CommonJS (CommonJS is a project to standardize the module ecosystem for JavaScript outside of web browsers (e.g. on web servers or native desktop applications). CommonJS's specification of how modules should work is widely used today for server-side JavaScript with NodeJs)

<https://nodejs.org/en>

`node --version`

#### REPL

read, eval, print, loop

`node`

#### CLI

`node filename.js`

#### Globals - No Window

- \_\_dirname - path to current directory
- \_\_filename - file name
- require - function to use modules (CommonJS)
- module - info about current module (file)
- process - info about env where the program is being executed

#### Modules Setup

- Encapsulated code (only share minimum)
- Every file is a module (by deault)

#### Build-in Modules

- os
- path
- fs
- http

#### Sync vs Async

#### NPM Info

- Node Package Manager
- <https://www.npmjs.com/>

#### NPM Command

- npm - global command, comes with node
- `npm --version`

- local dependency - use it only in this particular project
- `npm i <packageName>`

- global dependency - use it in any project
- `npm install -g <packageName>`
- `sudo npm install -g <packageName>` (linux/mac)

- package.json - manifest file (stores important info about project/package), manual approach (create package.json in the root, create properties etc)
- `npm init` (step by step, press enter to skip)
- `npm init -y` (everything default)

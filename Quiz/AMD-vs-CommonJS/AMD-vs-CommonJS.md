## What do you think of AMD vs CommonJS?
AMD and CommonJS are both Javascript module loader but works different.

CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.
CommonJS syntax is closer to Node.js style of writing/importing modules and there is less context-switching overhead when switching between client-side and server-side JavaScript development.
CommonJS, is a standard, mostly used in servers and it loads modules synchronously, though extra step is required if you want your JS file size to be minified and compressed.


AMD is better for browser, as it loads each distinct module in async manner instead of loading in one large file. No extra steps are required to use AMD, it works out-of-the-box. In my opinion, as it is its in Asynchronous nature, it makes alot of async http requests and may not be as performant as described by other devs.

### Why do we need to use Javascript module loader?

Usually, JS files are loaded in order via script tag in HTML templates, but files and code gets complicated once an application becomes large. Javascript module loaders lets us separate our code into modules and include a specific module in another module. This lets us import what module is required and load only the necessary. Better Javascript file size load and better code compartmentalization, means, JS module loader mitigates away the danger of global-namespace issue.
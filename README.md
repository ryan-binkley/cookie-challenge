### Implement an HTTP Server in Node.js

Fork and clone [this](https://github.com/gSchool/usaf-sdi-node-server-starter) repository. 
<!--BEGIN CHALLENGE-->

* Create a `server.js` file in the root directory.
* Import node native [HTTP library](https://nodejs.org/api/http.html) at the top of the file.
  * This native node library makes Hypertext Transfer Protocol methods available for your server.
* Using the [createServer](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener) method of the http instance create a new server instance.

```js 
const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  if (url[1] === '' ) {
    if (request.method === 'GET') {
      response.end("Hello World");
    }
  }
  response.statusCode = 404;
  response.end();
});
```

First, we invoke the `createServer()` method on the `http` module we imported, which takes an anonymous function. `createServer` is the function responsible for defining all routes for your application.

In the code above, the root route has been defined for a 'GET' method request. Other paths or methods would default to  a 404 (or not found) response.

The anonymous function takes 2 arguments: `request` and `response`. In the case of a  server, the `request` is an object that has a `METHOD`, a `path`, and often times a `body`.

In the code above, we add `response.end("Hello World")`. This means that when the server is started successfully, and an HTTP request is executed on the root route (`localhost:3000/` or `127.0.0.1:3000/`), a "Hello World" message will be returned. You can see it for yourself after we add a couple more lines of code. 

Next, add the code below to your `server.js` file: 

```js 
server.listen(3000, "localhost", () => {
  console.log(`Server running at http://localhost:3000/`);
});
```

In the code above, you are invoking the `listen()` method on the `server` you created. This takes a few arguments: a `PORT`, a `HOST`, and a callback function. Here, the port is 3000, the host is `localhost` (otherwise known as `localhost`) and the callback function is another anonymous function.

So, when you run the `server.js` file from the root of your repository (this will run this file and therefore start your server) and the `listen()` method is invoked successfully, a string that reads `Server is running at http://localhost:3000/` will be printed to your console. This lets you know that everything is working as your expected.

Run `npm start`, which will run the `server.js` file. You can see this script specification in the `package.json` and it will look something like:

```js 
  "scripts": {
    "start": "nodemon server.js",
    ...
```

When you do so, you should see `Hello World` on the page, and if you look at the terminal for the server, you'll see the message `Server is running at http://localhost:3000/` printed to your console.

Voila! You've created a HTTP Node Server.

#### Your Turn

Create a path in the `createServer` function at http://localhost:300/authors for the 'GET' method that returns you and/or your partner's name.

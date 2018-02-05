#Instructions
* First, make sure to npm/yarn install both inside and outside the client folder (need to install package.json's for both React and the server)

* Then run "yarn start" or "npm start" (if you look inside the package.json next to server.js you'll see there's a command for "start" under the "scripts" object that runs nodemon for the server and then npm run for the client).

* Run "mongod" and run "node seedDB.js". That should insert dummy data in to your MongoDB for use with the app.

#Notes
* If you're running into an error with React it may be because there's no content to display at the moment so you may need to comment out or delete some lines to get it working
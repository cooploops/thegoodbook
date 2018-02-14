![The Good Book](client/public/img/tgb-logo-readme.png)

https://thegoodbook.herokuapp.com/

## The Good Book is a monthly edibles subscription service that delivers tasty treats in a descrete 'book' package. Browse our different subscriptions we offer and sign in with Google to purchase.

## Requirements
- ReactJS
- NodeJS and Express web server
- MongoDB
- GET and POST routes
- Heroku
- User authentication
- MVC structure

## Technologies Used
- ReactJS for front end
- NodeJS and Express for web server
- Axios for AJAX GET and POST
- Mongoose and MongoDB for database
- Firebase for Authentication

## Code Explanation
- NodeJS runs an Express server for API routes that use Axios to make calls to and from ReactJS and a Mongo database using Mongoose.

- CORS is then used to allows access control betweeen a ReactJS server on PORT 3000 and the Express server on PORT 3001.

- App.js imports all the necessary React components to be rendered in the root `<div>` container in index.html. React-router-dom, Firebase auth and all API scripts are imported as well.

- The Nav component handles all the react-router Links that render all the main site components (a.k.a. pages) and the Firebase auth login, which prompts the user to login using their Google account and stores their email, uid, displayName, and photoURL to a “customer” collection in an MLab Mongo database.

- The Carousel component on the Home page and all products on the Products page are rendered using a “products” collection from the same Mongo database.

- The “Add to Cart” button on the Products page cross-references the current Firebase auth user with that particualr product clicked and saves it as a JavaScript object to their personal MongoDB document in the “customer” collection.

- The “Cart” page then determines how many of those product objects are saved and uses a Cart Item component to display a tally of all products the current user has selected and calculates a total using lodash commands sumBy, countBy, and uniqBy.



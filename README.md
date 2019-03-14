![blogifier logo](https://github.com/medcoguy/GitTesting/blob/master/images/bloglogo-bright.png)

#### Blogifier is travel-themed blog app that makes it easy to discover new travel destinations with travel stories submitted by people who have been there. The user can read the blog posts submitted by other users or my create their own posts. If the user chooses to create a post, they are required to register as a user. Users also may search the existing posts by location or author.

-----------------------------------------------------

### This project was created as a group assignment for the Coding Bootcamp at U of MN.

### Its contributors include:

* Nick Arnold
* Drew Brooksbank
* Dave Farnick
* Jon Hernandez
* Bowie Sessions
* Tasha Shrader

-----------------------------------------------------

## Technologies Used:
* HTML
* CSS
* Sequelize
* MySQL
* MySQL2
* Passport.js
* Express
* Axios
* bcrypt-nodejs
* JavaScript
* Heroku

-----------------------------------------------------

## See the deployed app at:
https://blogifier.herokuapp.com/

-----------------------------------------------------

### Screenshots

## Registration
![registration](https://github.com/medcoguy/GitTesting/blob/master/images/Registration.png)
 
## Login
![login](https://github.com/medcoguy/GitTesting/blob/master/images/login.png)


##video
![video](https://github.com/medcoguy/GitTesting/blob/master/images/videodisplay.gif)







=====================================================
## DOCUMENTATION for Passport.js

Passport is authentication middleware for Node.js. It can be unobtrusively dropped in to any Express-based web applicationIt results in authentication using a username and password.

Despite the complexities involved in authentication, code does not have to be complicated.

![starter code](https://github.com/medcoguy/GitTesting/blob/master/images/Capture1.JPG)

## Install
$ npm install passport

## Authenticate
Authenticating requests is as simple as calling passport.authenticate() and specifying which strategy to employ. authenticate()'s function signature is standard Connect middleware, which makes it convenient to use as route middleware in Express applications.

![starter code](https://github.com/medcoguy/GitTesting/blob/master/images/Capture2.JPG)

By default, if authentication fails, Passport will respond with a 401 Unauthorized status, and any additional route handlers will not be invoked. If authentication succeeds, the next handler will be invoked and the req.user property will be set to the authenticated user.
-----------------------------------------------------


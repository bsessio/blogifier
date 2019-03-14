![blogifier logo](https://github.com/medcoguy/GitTesting/blob/master/images/bloglogo-bright.png)

## Overview
#### Blogifier is travel-themed blog app that makes it easy to discover new travel destinations with travel stories submitted by people who have been there. The user can read the blog posts submitted by other users or my create their own posts. If the user chooses to create a post, they are required to register as a user. Users also may search the existing posts by location or author.

-----------------------------------------------------
## Instructions
1. Go to the webpage at https://blogifier.herokuapp.com/ 
2. Check out the posts.
3. To submit a blog post:  Click on "Submit a Blog" button. You will be prompted to either log in or register as a new user. 
4. To Register as a new user, click on the "click here to register an account" text, on the next page enter the requested information and click the "Register" button.
5. After you register, you will be lead to the Login page. Enter ypur login credentials and click "Log in". 
6. Click on "Submit a Blog" button. On the next page, you can write your blog entry. When done, click "Submit" button. You just wrote a blog post! 
7. To search the existing posts, enter the author name in the text field and click the magnifying glass to search. 
8. To search by post writers location, enter their location, select "location" from the drop-down, and click on the magnifying glass.
9. Click on the "Log in/Log out" button" to log out. 
 
-----------------------------------------------------
## Authors:

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


## video
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


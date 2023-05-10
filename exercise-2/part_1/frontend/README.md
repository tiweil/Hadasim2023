# Hadasim Exercise 2 part 1
This is a React TypeScript project with a Node/Express backend and MySQL database that does X, Y, and Z.

# Getting Started

To get started with this project, you'll need to have Node.js and MySQL installed on your machine.

## Backend Setup
First, navigate to the backend directory and create a .env file with the following contents:

```js
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=your-database-name
```

Replace your-password and your-database-name with your MySQL password and database name, respectively.

Next, install the required dependencies using the following command:
```console
npm install
```
You can then start the Node/Express server using the following command:

```console
npm run server
```
This will start the server at http://localhost:3001.

# Frontend Setup
Next, navigate to the frontend directory and install the required dependencies using the following command:

```console
npm install
```
### important!
To enable react hooks, router dom and axios, use the following command:

```console
npm install @types/react-router-dom react-router-dom axios react-hook-form
```
You can then start the development server using the following command:
```console
npm start
```
This will start a local development server at http://localhost:3000, where you can view the app in your browser.

# Built With

React - A JavaScript library for building user interfaces

TypeScript - A superset of JavaScript that adds static type-checking

Node.js - A JavaScript runtime for building server-side applications

Express - A popular Node.js framework for building web applications

MySQL - A popular relational database management system

# How to use (client side)
 while you open the upp in your browser at http://localhost:3000, you will go to the home page.

 At the top of the page is a heder that links to the home page(the current page) and the page for adding a new client, pressing on one of those will send you to the proper page:
 ![header](/frontend/screenshots/Screenshot%202023-05-10%20202851.png)
 ### Home page
 In the home page you will see a table that contains all the clients in the system with all their details.
 ![homePage](/frontend/screenshots/Screenshot%202023-05-10%20203159.png)
 ### Adding a new client page
 On this page there is a document for filling in details in which all the required details must be filled in, pay attention that all fields are mandatory except vaccination dates, choosing the type of vaccination, the dates of exposure and recovery and choosing a photo.
 ![addClientPage](/frontend/screenshots/Screenshot%202023-05-10%20204329.png)
 In the user will be asked if he have been vaccinated, if he choose "yes" option- a new field to fill in vaccination details will be shown up
 and so every time he is asked if he had another vaccination up to fourth vaccination.
 ![example1](/frontend/screenshots/Screenshot%202023-05-10%20210413.png)
 ![example2](/frontend/screenshots/Screenshot%202023-05-10%20210530.png)
 The same with the question if he had ever been exposed to the virus.
 ![example3](/frontend/screenshots/Screenshot%202023-05-10%20210732.png)
  #### upload an image
  You can pic an image which its size does not exceed 530kb otherwise it will not be possible ro add a client.
  ![uploadImage](/frontend/screenshots/Screenshot%202023-05-10%202051525.png)

When the user submit the document- the new client is added to the data base and the user is automatically transferred to the home page with the updated table.
![backHome](/frontend/screenshots/Screenshot%202023-05-10%20211350.png)
# image
![image](../frontend/public/logo192.png)

# Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

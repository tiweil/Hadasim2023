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


# image
![image](../frontend/public/logo192.png)

# Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

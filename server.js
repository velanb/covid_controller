const express = require('express');
const http = require('http');
const bodyparser = require('body-parser')

// require('dotenv').config({path:'./config/env'})

// console.log(process.env.NAME)
//Import db Connection 
const {connectDB} = require('./db')

// Importing the routes
const vehicleRestriction = require('./src/modules/vehicleRestriction/routes');
const userRoutes = require('./src/modules/users/routes');

//Port 
const PORT = process.env.PORT || 3000;

// Initialize  the application
const app =  express();

// Create the server
const server =  http.createServer(app);

connectDB();

//Body parser
app.use(bodyparser())

// App Routes
app.use('/vehicle', vehicleRestriction);
app.use('/user', userRoutes);

// Start off the application 
server.listen(PORT, () => {
    console.log(`The app is up and listening to port => ${PORT}`)
})

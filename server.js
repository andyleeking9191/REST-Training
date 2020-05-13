require('dotenv').config(); // loads all of the environment variables 
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const subscribersRoutes = require('./routes/subscribers');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to the Database'));


app.use(express.json()); // enables the server to recieve json data
app.use('/subscribers', subscribersRoutes);


app.listen(port, () => console.log(`The server has started`));
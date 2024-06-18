const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoute = require('./router/authroutes')
require('dotenv').config();

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected', process.env.MONGODB_URL ))
    .catch(err => console.log(err, 123));

app.listen(5000, () => {
    console.log("connected successfully")
})
app.use("/login", authRoute);

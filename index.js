const express = require('express');
const app = express();
var cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config();
dotenv.config();

MONGODB_URL= 'mongodb+srv://learnnodejs:learnnodejslearnnodejslearnnodejs@cluster0.wdwpr.mongodb.net/test_api_student?retryWrites=true&w=majority';

mongoose.connect(
  MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to MongoDB');
    },
);

app.use(cors());
const locationRoute = require('./api/routes/location.route');

app.use("/v1/api/location",locationRoute);


app.listen(PORT, () => console.log(`server started ${PORT}`))
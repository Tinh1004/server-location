const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');

MONGODB_URL= 'mongodb+srv://learnnodejs:learnnodejslearnnodejslearnnodejs@cluster0.wdwpr.mongodb.net/test_api_student?retryWrites=true&w=majority';
mongoose.connect(
    MONGODB_URL, 
    { useNewUrlParser: true }
  )
  .then((result) => console.log("Connection"))
  .catch((error) => console.log('Error'));


const PORT = process.env.PORT || 3000;

const locationRoute = require('./api/routes/location.route');

app.use("/v1/api/location",locationRoute);

app.listen(PORT, () => console.log(`server started ${PORT}`))
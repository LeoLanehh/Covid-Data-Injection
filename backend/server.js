//mongodb+srv://group3:group3@covid19data.9w4dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb://localhost/WeihaoDong
/*"iso_code": {
    "$ne": "nosql injection"
}
*/

// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/api');
const mongoSanitize = require('express-mongo-sanitize');




//const routes = require('./routes/api');

// Step 2

mongoose.connect('mongodb+srv://group3:group3@covid19data.9w4dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Prevent nosql injection 
/*Express 4.x middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection */
//app.use(mongoSanitize());


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));



const path = require("path");
const express = require("express");
const app = express();

const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/theRestaurant')
.then( db => console.log('successful connection to theRestaurant'))
.catch( error => console.log(error));

const indexRoutes = require('./routes/index');

app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

// Pendiente app.use (rutas - crud)
app.use('/', indexRoutes);


//_________________________________

app.listen(app.get('port'), () => {
    console.log(`the server run at http://localhost:${app.get('port')}`);
})
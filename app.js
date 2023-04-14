var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
var mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
var Guns = require("./models/guns");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gunsRouter = require('./routes/guns');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/guns',gunsRouter);
app.use('/board',boardRouter);
app.use('/selector',selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")
});

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await Guns.deleteMany();
 let instance1 = new Guns({guns_color:"red", guns_range:"500", guns_cost:"$1500"});
 instance1.save().then((res)=>{
    console.log(res)
    console.log("First object saved")}
 ).catch(err=>{
    console.error(err)
 });
 let instance2 = new Guns({guns_color:"blue", guns_range:"600", guns_cost:"$2000"});
 instance2.save().then((res)=>{
    console.log(res)
    console.log("second object saved")}
 ).catch(err=>{
    console.error(err)
 });
 let instance3 = new Guns({guns_color:"green", guns_range:"700", guns_cost:"$2500"});
 instance3.save().then((res)=>{
    console.log(res)
    console.log("third object saved")
  }).catch(err=>{
    console.error(err)
 });
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;

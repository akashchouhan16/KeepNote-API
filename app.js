const express = require('express');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const AppError = require('./AppError');

// PORT
const PORT = process.env.PORT || 5000;

// DataBase Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
 },()=>console.log(`CONNECTED TO DB, COLLECTION~ ${process.env.COLLECTION}`));

// MIDDLEWARES
app.set("view engine", "ejs"); //For testing only.
app.use(bodyParser.json()); //To handle json responses.
app.use(cors({
    origin : `127.0.0.${PORT}` || `localhost://${PORT}`
})); //for Cross Origin req-res

//ROUTES
const noteRoutes = require('./routes/notes');
app.use('/api', noteRoutes);

// Redirects and Home

app.get('/', (req,res)=>{
    res.render('Home');
});
// test error
app.get('/:anyId', (req,res)=>{
   var error = {
        status: 403,
        message : 'Invalid api endpoint request made.' 
    }
    res.render('error', {error});
})
app.get('/notes', (req,res)=>{
    var error = {
        status:403,
        message:'Invalid api endpoint request made.'
    }
    res.render('error', {error})
})
app.get('/notes/:anyId', (req,res)=>{
    var error = {
        status:403,
        message:'Invalid api endpoint request made.'
    }
    res.render('error', {error})
})

// ******** Explicitly Defined Broken ROUTES *******
app.post('/', (req,res)=>{
    const Log = {
        LOG : 'POST ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    };
    res.status(400).json(Log);
})
app.post('/:anyId', (req,res)=>{
    res.status(400).json({
        LOG : 'POST ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    })
})
app.delete('/', (req,res)=>{
    res.status(400).json({
        LOG : 'DELETE ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    })
})
app.delete('/:anyId', (req,res)=>{
     res.status(400).json({
        LOG : 'DELETE ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    })
})

app.patch('/', (req,res)=>{
    res.status(400).json({
        LOG : 'PATCH ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    })
})
app.patch('/:anyId', (req,res)=>{
    res.status(400).json({
        LOG : 'PATCH ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    })
})
app.use((err,req,res,next)=>{
    console.log(`Something went wrong, Restart the server. :)`);
    next();
})

app.listen(PORT, ()=>{
    const logs = {
        PORT : PORT,
        MSG : 'Server is up and running',
        URL : `https://localhost:${PORT}/`
    };
    console.table(logs);
})
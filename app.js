const express = require('express');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');


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
app.use(bodyParser.json()); //To handle json responses.
app.use(cors()); //for Cross Origin req-res

//ROUTES
const noteRoutes = require('./routes/notes');
app.use('/api', noteRoutes);

// Redirects and Home
app.get('/', (req,res)=>{
    const Home = {
        xyz : 'Keep Note API v1.0.1',
        Message : 'A Fully functional Node API for Notes app',
        Author : 'Akash Chouhan',
        Github : 'github.com/akashchouhan16',
        ISO : Date.now()
    };
    res.status(200).json(Home);
});
app.get('/:anyId', (req,res)=>{
    res.redirect('/');
})
// ******** Explicitly Defined Broken ROUTES *******
app.post('/', (req,res)=>{
    res.status(400).json({
        LOG : 'POST ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info'
    })
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


app.listen(PORT, ()=>{
    const logs = {
        PORT : PORT,
        MSG : 'Server is up and running',
        URL : 'https://localhost:5000/'
    };
    console.table(logs);
})
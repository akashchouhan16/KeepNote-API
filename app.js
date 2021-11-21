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
app.use(cors({
    origin : `127.0.0.${PORT}` || `localhost://${PORT}`
}));


//ROUTES
const noteRoutes = require('./routes/notes');
app.use('/api', noteRoutes);

// Redirects and Home
app.get('/', (req,res)=>{
    res.render('Home');
});

// ******** Explicitly Defined Broken ROUTES For Testing*******
const errorRoutes = require('./routes/errors');
app.use('/', errorRoutes);

app.listen(PORT, ()=>{
    const logs = {
        PORT : PORT,
        MSG : 'Server is up and running',
        URL : `http://localhost:${PORT}/`
    };
    console.table(logs);
})
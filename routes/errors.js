const express = require('express');
const router = express.Router();
const fs = require('fs');

// Log Files : Only for Development Environment
let errorLogs_GET = require('../API_ERROR_LOGS/invalidgetrequests.json');
let errorLogs_POST = require('../API_ERROR_LOGS/invalidpostrequests.json');
let errorLogs_PATCH = require('../API_ERROR_LOGS/invalidpatchrequests.json');
let errorLogs_DELETE = require('../API_ERROR_LOGS/invaliddeleterequests.json');

// GET
router.get('/:anyId', (req,res)=>{
    let time = new Date();
    let error = {
        status: 403,
        message : 'Invalid api endpoint request made.',
        endpoint: '/:anyId',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    }
    errorLogs_GET.push(error);
    if(errorLogs_GET.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invalidgetrequests.json`, JSON.stringify(errorLogs_GET), "utf8", ()=>{})
	}
    res.render('error', {error});
})
router.get('/notes', (req,res)=>{
    let time = new Date();
    let error = {
        status: 403,
        message : 'Invalid api endpoint request made.',
        endpoint: '/notes',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    }
    errorLogs_GET.push(error);
    if(errorLogs_GET.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invalidgetrequests.json`, JSON.stringify(errorLogs_GET), "utf8", () => {
			console.log("[*]");
		})
	}
    res.render('error', {error})
})
router.get('/notes/:anyId', (req,res)=>{
    let time = new Date();
    let error = {
        status: 403,
        message : 'Invalid api endpoint request made.',
        endpoint: '/notes/:anyId',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    }
    errorLogs_GET.push(error);
    if(errorLogs_GET.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invalidgetrequests.json`, JSON.stringify(errorLogs_GET), "utf8", () => {
			console.log("[*]");
		})
	}
    res.render('error', {error})
})


// POST

router.post('/', (req,res)=>{
    let time = new Date();
    const Log = {
        LOG : 'POST ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    };
    errorLogs_POST.push(Log);
    if(errorLogs_POST.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invalidpostrequests.json`, JSON.stringify(errorLogs_POST), "utf8", () => {
			console.log("[*]");
		})
	}
    res.status(400).json(Log);
})

router.post('/:anyId', (req,res)=>{
    let time = new Date();
    const log = {
        LOG : 'POST ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    };
    
    errorLogs_POST.push(log);
    if(errorLogs_POST.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invalidpostrequests.json`, JSON.stringify(errorLogs_POST), "utf8", () => {
			console.log("[*]");
		})
	}
    res.status(400).json(log)
})
router.delete('/', (req,res)=>{
    let time = new Date();
    const log = {
        LOG : 'DELETE ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    };
    errorLogs_DELETE.push(log);
    if(errorLogs_DELETE.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invaliddeleterequests.json`, JSON.stringify(errorLogs_DELETE), "utf8", () => {
			console.log("[*]");
		})
	}
    res.status(400).json(log)
})
router.delete('/:anyId', (req,res)=>{
    let time = new Date();
    const log = {
        LOG : 'DELETE ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    };
    errorLogs_DELETE.push(log);
    if(errorLogs_DELETE.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invaliddeleterequests.json`, JSON.stringify(errorLogs_DELETE), "utf8", () => {
			console.log("[*]");
		})
	}
    res.status(400).json(log)
})

router.patch('/:anyId', (req,res)=>{
    let time = new Date();
    const log = {
        LOG : 'PATCH ROUTE Not Found [Invalid Request]',
        STATUS : 400,
        Message : 'Please Visit localhost:5000/ For more info',
        time: "Logged @ " + time.getDay() + "/" + time.getMonth() + "/" 
                + time.getFullYear() + " @ " + time.getHours() + ":" 
                + time.getMinutes() + ":" + time.getSeconds()
    };
    errorLogs_PATCH.push(log);
    if(errorLogs_PATCH.length>0){
		fs.writeFile(`./API_ERROR_LOGS/invalidpatchrequests.json`, JSON.stringify(errorLogs_PATCH), "utf8", () => {
			console.log("[*]");
		})
	}
    res.status(400).json(log)
})
router.patch('/', (req,res)=>{
    res.status(400).json()
})


router.use((err,req,res,next)=>{
    console.log(`Something went wrong, Restart the server. :)`);
    console.error(err);

    next();
});

module.exports = router;
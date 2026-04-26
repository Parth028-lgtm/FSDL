const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/events');

const Event = mongoose.model('Event',{
    name: String,
    email: String,
    eventname: String
});

app.post('/add', async(req,res)=>{
    await new Event(req.body).save();
    res.send('Registered');
});

app.get('/all', async(req,res)=>{
    res.json(await Event.find());
});

app.listen(3000);
console.log('Running on port 3000');

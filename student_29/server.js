const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/students');

const Student = mongoose.model('Student',{
    name: String,
    rollno: String,
    branch: String
});

app.post('/add', async(req,res) => {
    await new Student(req.body).save();
    res.send('Student Added');
});

app.get('/all', async(req,res) => {
    res.json(await Student.find());
});

app.listen(3000);
console.log('Running on port 3000');

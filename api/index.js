const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ryanzhangformal:0ebmNFQIUxmpHn0w@cluster0.jx6krhg.mongodb.net/?retryWrites=true&w=majority');

app.get('/test', (req, res) => {
    const {username,password} = req.body;
    res.json({requestData:{username,password}});
});

app.listen(4000);

//mongodb+srv://ryanzhangformal:0ebmNFQIUxmpHn0w@cluster0.jx6krhg.mongodb.net/?retryWrites=true&w=majority
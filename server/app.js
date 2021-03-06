require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const db_url = process.env.DB_URL;
//const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, function(err) {
    if(err) console.log(`Failed to connect to db`);
    else console.log(`Connected to db `);
});

app.use('/', routes);
//app.use(errorHandler);

app.listen(PORT, ()=> console.log('Listening to port: ', PORT));
const express = require('express');
const data = require('./data.json');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/stocks', (req, res) => {
    res.json(data);
});

app.post('/stocks', (req, res) => {
    const stock = req.body;
    data.stocks.push(stock);
    fs.writeFile(path.join('src/data.json'), JSON.stringify(data, null, 2), (error) => {
        if (error) throw error;
    });
    res.json(stock);
});
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
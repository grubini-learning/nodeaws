const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome toi papa');
});

app.listen(3000, () => {
    console.log('server running at port 3k');
});



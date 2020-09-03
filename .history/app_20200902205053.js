const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to papa!!');
});

const port = process.env.po
app.listen(3000, () => {
    console.log('server running at port 3k');
});
//hey



const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to papa!!');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('server running at port 3k');
});
//hey



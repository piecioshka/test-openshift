const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const timeout = Number(process.env.TIMEOUT) || 0;
const msg = process.env.MESSAGE || 'Hello World';

app.get('/', (req, res) => {
    setTimeout(() => {
        const time = Date.now();
        console.log(`[${time}] ${msg}`);
        res.json({
            msg,
            time,
        });
    }, timeout);
});

app.listen(PORT);

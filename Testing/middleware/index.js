const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

const tetsFunc = function(req, res, next) {
    next()
};


app.get('/', function(req, res, next) {
    // next()
});

app.listen(PORT, function() {
    console.log(`Server started on post ${PORT}`);
})
const express = require('express');
const userRouter = require('./routes/user.routes');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json())
app.use('/', userRouter)

app.listen(PORT, function() {
    console.log(`Server started on post ${PORT}`);
})
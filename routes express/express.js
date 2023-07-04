const express = require('express')
const app = express()
const Router = require('./routes/routes')

app.use(Router)

app.listen(8080, () => {
    console.log('app listening on port', 8080);
})
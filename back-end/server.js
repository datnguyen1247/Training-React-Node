const express = require('express')
const db = require('./config/db')
const router = require('./routers/index')
const app = express()
const port = 3000
db.connection()
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
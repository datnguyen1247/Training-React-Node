import express from 'express';
import db from './config/db.js';
const app = express()
const port = 3000
db.connection()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
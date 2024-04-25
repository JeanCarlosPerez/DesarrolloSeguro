import app from './app.js'
import { db } from './db/db.js'



const port = process.env.PORT || 3000
db()
app.listen(port)

console.log('Server Listening on Port', port)

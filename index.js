require('dotenv').config()

const server = require('./server.js')

const PORT = process.env.PORT || 8888

server.listen(PORT, ()=> [
    console.log(`\n*** server smokin on ${PORT} ***`.bgGreen.black)
])
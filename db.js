const mongoose = require('mongoose')
const url = 'mongodb://localhost/alumnos_db'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})

const db = mongoose.connection
db.on('error', console.error.bind(console),'erroe al conectar mongoDB')
db.once( 'open', function callback(){
    console.log("¡conectado a mongoDB")
})

module.exports = db 
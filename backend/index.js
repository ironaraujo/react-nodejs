const express = require('express')
const app = express()

const cors = require("cors")


app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }));
app.use(cors())


app.get('/', (req, res) => res.send('Curso React'))

const indexRouter = require("./routers/users.js");
app.use('/users', indexRouter)

    
var mongoose = require("mongoose");
// mongo --host sigteste.sti.ufpb.br --port 5556 -u csiadmin -p 'c$!s3cret' --authenticationDatabase 'admin'
mongoose.connect(
  "mongodb://csiadmin:c$!s3cret@sigteste.sti.ufpb.br:5556/admin",
  { useNewUrlParser: true }
);

const PORT = 3001
const HOSTNAME = 'localhost'
var db = mongoose.connection;
db.on("error", (a,b) => console.error("connection error:", a, b));
db.once("open", function() {
  // we're connected!
  
  console.log("we're connected!");
  app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listning on ${HOSTNAME}:${PORT}`);
  });
});


//middelwares 
app.use((req, res, next) => {
    console.log("passa pelo middelware...e segue")
    next()
  });


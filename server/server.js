require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT;

//calling mongoDB
const connectMongo = require('./config/mongoose.config');
connectMongo();

//middlewares
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
////USER
app.use(`/api`, require('./routes/users.routers'));
////MENUS
app.use(`/api`, require('./routes/menus.routes'));

//MULTER
const multer= require('multer');
const upload = multer({dest: 'uploads/'});

app.post('/api/file', upload.single('file'), function(req, res, next){
    console.log('FILE', req.file);
    res.json({ok: true});
})



app.listen(PORT, ()=>{
    console.log(` 1 : The server is lock and loading at PORT: ${PORT}`);
});
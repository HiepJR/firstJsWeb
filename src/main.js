const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');

const app = express()
const port = 3000
//import static file
app.use(express.static(path.join(__dirname, '/assets')))
//HTTP logger
app.use(morgan('combined'))
//use template engine = handlebars
app.engine('.hbs', engine({extname : '.hbs'})); //config extendsion name of template engine
app.set('view engine', 'hbs');
app.set('views', 'resource/views');
app.set('views', path.join(__dirname, 'resource/views'));
app.get("/", (req, res) => res.render('home'))
app.listen(port, () => console.log("Example app listening on port node " + port))
// Triển khai mô hình MVC 
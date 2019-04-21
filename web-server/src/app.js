const port = process.env.PORT || 8080;

const path = require('path');

const express = require('express');
const app = express();
const hbs = require('hbs');

// define paths for express config
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'./templates/views')
const partialsPath = path.join(__dirname,'./templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicPath));

app.get('/',(req,res) => {
res.render('index',{title:'weather app'});
})

app.get('/about',(req,res) => {
    res.render('about',{title:'About Page'});
    })

    app.get('/help',(req,res) => {
        res.render('help',{title:'Help Page'});
        })

app.get('/weather',(req,res) => {
    if(!req.query.address){
return  res.send({
   error : 'please provide any address..'
})

    }
    res.send({
        forecast:'its raining',
        location:'hyderabad',
        address:req.query.address})
})

app.get('/products',(req,res) => {
    console.log(req.query)
    res.send({
        products:[]
    });
})

app.get('/help/*',(req,res) => {
    res.send('help article not found...');
})


app.get('*',(req,res) => {
  res.send('404 pages...');
})


app.listen(port,() => {
    console.log(`server running at ${port}`);
})
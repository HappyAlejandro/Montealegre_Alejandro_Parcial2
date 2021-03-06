const  express= require('express');
const hbs= require('express-handlebars');
const app= express();


app.use(express.static('public'));

app.engine('handlebars',hbs());

app.set('view engine','handlebars');

app.use(express.json());

app.get('/paginaA',function(request,response){
    response.render('paginaA');
});

app.get('/paginaB',function(request,response){
    response.render('paginaB');
});

app.get('/paginaC',function(request,response){
    response.render('paginaC');
});

app.listen(5650);
var http = require('http')
var express = require('express')
var cookieParser = require('cookie-parser');

var app = express()
app.set('view engine', 'ejs')
app.set('views', './')
app.use(cookieParser())

app.get('/', (req, res) =>
{
	var cookiefoo
	if (req.cookies.foo)
		cookiefoo = req.cookies.foo
	else
		cookiefoo = "nie ma"
	res.render('app', {cookie: cookiefoo})
})

app.get('/setcookie', (req, res) =>
{
	res.cookie('foo', 'bar')
	res.redirect('/')
})

app.get('/removecookie', (req, res) =>
{
	res.cookie('foo', '', {maxAge: -1})
	res.redirect('/')
})

var server = http.createServer(app).listen(process.env.PORT || 5000);
console.log('server started')

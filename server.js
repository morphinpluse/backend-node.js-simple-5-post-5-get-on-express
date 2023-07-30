var express = require('express')
var app = express()
//اکچولی برای اینکه کدمون بهینه تر بشه و پست و گت ها برای یه سرور بودن از اپپ دات روت استفادع کردم
//first get
app.route('/')
.get('/',function(req,res) {
res.send('get first route!');
})
.post('/',function(req,res) {
    res.send('post first route!');
    })
//secend
app.route('/signin')
.get('/signin',function(req,res) {
res.send('get a route for signin');
})
.post('/signin',function(req,res) {
    res.send('post a route for signin');
    })
//3rd
app.route('/signup')
 .get('/signup',function(req,res) {
res.send('get a route for signup');
})
.post('/signup',function(req,res) {
    res.send('post a route for signup');
    })
//4th
app.route('/account')
.get('/account',function(req,res) {
res.send('get a route for user account');
})
.post('/account',function(req,res) {
    res.send('post a route for user account');
    })
//5th
app.route('/account/dashboard')
.get('/account/dashboard',function(req,res) {
res.send('get a route for user account dashboard');
})
.post('/account/dashboard',function(req,res) {
    res.send('post a route for user account dashboard');
})

app.listen(3000 , function(){
console.log('Server is listening at 3000')
})

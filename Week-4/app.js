const express = require('express');
const router = express.Router();
const { request } = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
const encoder = bodyParser.urlencoded({ extended: false});
const mysql = require('mysql');

const db = mysql.createConnection({
	host     : 'localhost',
  	user     : 'root',
 	password : '123456',
	database : 'assignment' 	
});

db.connect((err) => {
	if(err){
		throw err;
	}
	console.log('connected');
});

router.use(express.static('public'));
router.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE assignment';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Database created');
	});	
});

router.get('/createusertable', (req, res) => {
	let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Usertable created');
	});	
});

router.post('/', encoder, (req, res) => {
	var email = req.body.email;
	var password = req.body.password;	
	let findEmail = `SELECT * FROM user WHERE email = '${req.body.email}'`;
	let findBoth = `SELECT * FROM user WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
	let sql = 'INSERT INTO user SET ?';
	if(req.body.submit==="Sign-up"){	//click sign up
		db.query(findEmail, (err, result, fields) => {
			if(err) throw err;
			if(result.length){							
				console.log('You have already registered.');
				res.redirect("/");							
			}else{
				db.query(sql, {email, password}, function(err, result, fields){
				if(err) throw err;
				console.log(result);
				res.redirect("http://localhost:3000/memberpage");
				res.end();				
				});				
			};	
		});
	}else {	//click sign in
		db.query(findBoth, (err, result, fields) => {
			if(err) throw err;
			if(result.length>0){							
				res.redirect("http://localhost:3000/memberpage");
				res.end();				
			}else{
				console.log('Wrong email or password');
				res.redirect("/");				
			};	
		});
	};	
});

router.get('/memberpage', (req, res) => {	
	res.send('Welcome');	
});

app.use('/', router);
app.listen(3000);

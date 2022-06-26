const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();

router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: false}));
router.use(cookieParser());

//Assignment 1
router.get('/', (req, res) => {
	res.send('Hello, My Server!');
});

//Assignment 2
router.get('/data', (req, res) => {	
	const number = req.query.number;
	const data = req.params.data;		
	if (!number) {		
		res.send('Lack of Parameter');
	}else {	
		if (Number.isInteger(Number(number))) {
			var count = 0;
			for (let i = 1; i <= number; i++) {
				count += i;
			}		
			res.send(`${count}`);
		}else {
			res.send('Wrong Parameter');
		}
	};		
});

//Assignment 4
router.get('/myName', (req, res) => {	
	if (req.cookies.username) {
		res.send(req.cookies.username);
	}else {
		res.send('\
			<html>\
				<body>\
					<form method="GET" action="http://localhost:3000/trackName">\
						<input type="text", name="name">\
						<button type="submit">submit</button>\
					</form>\
				</body>\
			</html>\
		');		
	};	
});

router.get('/trackName', (req, res) => {	
	res.cookie('username', req.query.name);
	res.redirect(`http://localhost:3000/myName`);	
});

app.use('/', router);
app.listen(3000);

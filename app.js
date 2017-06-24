var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.send(`<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <title>bovine corvus</title> <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet"> <link href="./assets/styles/home.scss" rel="stylesheet"> </head> <body> <div id="cs"> <img src="./assets/images/bclogo.svg" alt="bc_logo"> <h1>Coming Soon...</h1> </div> </body> </html>`);
// });

app.listen(port, () => console.log('server running on port ', port));

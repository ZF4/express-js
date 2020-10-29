const express = require('express');
let app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')



//Responds to the root with 'Hello from the web server'
// app.get('/',(req,res) => {
//     res.send('Hello from the web server');
// })


//Console logs every req.url 
// app.use((req, res, next) => {
//     console.log( `${req.url}\n`)
//     next();
// });

/////ADVANCED SECTION/////
app.use(bodyParser.urlencoded({extended: false}));


app.post('/formsubmissions', (req,res) => {
     let object = {
         name: req.body.name,
         email: req.body.email
     }
        fs.writeFile('formsubmissions.json', JSON.stringify(object), (err) => {
            console.log(err);
        });
        res.send('Thank you for submitting your contact form');
    })
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);
const express = require( 'express');
const app = express();
app.set('view engine', 'ejs');
app. get('/',
(req, res) => {
res. render('index', { title: 'My EJS App' }) ;
});
app. listen(3000, () => {
console. loa( 'Server started on port 3000');
});
// configurasi awal express
const express = require('express');
const { url } = require('inspector');
let app = express();
let path = require('path');
const port = 8000;

//static file
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));
app.use('/images',express.static(__dirname+'public/images'));
app.use('/modules',express.static(__dirname+'public/node_modules/'));

//view engine
//app.set('views','./views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
//carousel

//routing
app.get('/', (req, res) =>{
    const events = [
        {name:"Muhammad Ibrah Bayuara",text: "Seorang Mahasiswa di Universitas Singaperbangsa Karawang, jurusan Informatika. Sekarang sedang menempuh semester 4.",status:true},
        {name:"Enen Arienda Ramdayani",text: "Seorang Mahasiswi di Universitas Singaperbangsa Karawang, jurusan Informatika. Sekarang sedang menempuh semester 4.", status:true},
    ]
    res.render('index',{
        events: events
    });
});


//server
app.listen(port,() => {
    console.log('8000 is magic port')
});
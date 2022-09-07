const express = require('express');
const app = express();

const Tietovarasto = require('./tietokanta/tietovarastokerros');
const varasto = new Tietovarasto();

const { port } = require('./config.json');

app.set('view engine', 'ejs');
app.set('views', 'sivut');

app.use(express.static('sivut'));
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    try {
        const festivaalit = await varasto.haeFestivaalit();
        res.render('kotisivu', { festivaalit });
    } catch(virhe) {
        console.error(virhe);
    }
});

app.get('/artistit', async (req, res) => {
    try {
        const artistit = await varasto.haeKaikkiArtistit();
        res.render('artistit', { artistit });
    } catch(virhe) {
        console.error(virhe);
    }
});

app.get('/kaupungit', async (req, res) => {
    try {
        const kaupungit = await varasto.haeKaupungit();
        res.render('kaupungit', { kaupungit });
    } catch(virhe) {
        console.error(virhe);
    }
});

// app.get('/festivaalit', async (req, res) => {
//     try {
//         const festivaalit = await varasto.haeKaikki();
//         res.render('festivaalit', { festivaalit });
//     } catch(virhe) {
//         console.error(virhe);
//     }
// });

app.get('/festivaali', async (req, res) => {
    try {
        const festivaali = req.query.nimi;
        const artistit = await varasto.haeArtistit(festivaali);
        const kaupunki = await varasto.haeKaupunki(festivaali);

        res.render('festivaali', { festivaali, artistit, kaupunki });
    } catch(virhe) {
        console.error(virhe);
    }
});

app.listen(port, (err) => {
    if (err) return console.error(err);

    console.log(`Server is running on port ${port}`);
});
const express = require('express')
let router = express.Router()
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

const epas = require('./epas')
router.get('/epas',  (req, res) => res.send(epas))

const stammdaten = require('./stammdaten')
router.get('/stammdaten',  (req, res) => res.send(stammdaten))

const pruefungen = require('./pruefungen.js')
router.get('/pruefungen',  (req, res) => res.send(pruefungen))

const studienfortschritt = require('./studienfortschritt.js')
router.get('/studienfortschritt',  (req, res) => res.send(studienfortschritt))

const fremdbewertungen = require('./fremdbewertungen.js')
router.get('/epas/fremdbewertungen',  (req, res) => res.send(fremdbewertungen))

const anfrage = require('./anfrage.js')
router.get('/epas/fremdbewertungen/anfragen',  (req, res) => res.send(anfrage))

const bewertungen = require('./bewertungen.js')
router.get('/epas/bewertungen',  (req, res) => res.send(bewertungen))

app.use('/backend-develop/api', router)

// {
    //     url: 'fragen',
    //     data: url => ({ id: url.match(/(\d+)/)[0], fragen: DummyQuestions(80, 1) }),
    // },

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
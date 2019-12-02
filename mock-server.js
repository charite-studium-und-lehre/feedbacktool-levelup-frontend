const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

// {
    //     url: 'fragen',
    //     data: url => ({ id: url.match(/(\d+)/)[0], fragen: DummyQuestions(80, 1) }),
    // },

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
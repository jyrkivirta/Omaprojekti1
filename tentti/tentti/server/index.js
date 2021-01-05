const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')
//var bodyParser = require('body-parser')

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
const db = require('./db')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions)) // Tämä ehkäsee sen, että jokaseen GETtiin ei tarvii lisätä corssia.


app.use(express.json())


// app.use(function (req, res, next) {
//   console.log('Kello on:', Date.now())
//   next()
// })
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())


// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// }) 

//var jsonParser = bodyParser.json()

//query builder!! -> ORM Sequelize, JOOQ...
app.get('/tuotentti/:id', (req, response, next) => {   
  db.query('SELECT * FROM tentit WHERE id=$1', [req.params.id], (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows[0])
  })
})
app.get('/tuokysymys/:id', (req, response, next) => {   
  db.query('SELECT * FROM kysymykset WHERE id = $1', [req.params.id], (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows[0])
  })
})
app.get('/tuovaihtoehto/:id', (req, response, next) => {   
  db.query('SELECT * FROM vaihtoehdot WHERE id = $1', [req.params.id], (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows[0])
  })
})

app.get('/tuooppilaat', (req, response, next) => {   
  db.query('SELECT * FROM oppilaslista', (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows)
  })
})

  app.post('/tentit', (req, res, next) => {      
    db.query('INSERT INTO tentit (tentti) VALUES ($1) RETURNING id', [req.body.tentti], (err, result) => { 
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  })
  
  app.post('/kysymykset', (req, res, next) => {      
    db.query('INSERT INTO kysymykset (kysymys, tentti_id) VALUES ($1, $2) RETURNING id', 
    [req.body.kysymys, req.body.tentti_id], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  }) 
  
  app.post('/lisaavaihtoehto', (req, res, next) => {      
    db.query('INSERT INTO vaihtoehdot (vastaus, kysymys_id, valittu, oikein) VALUES ($1, $2, $3, $4) RETURNING id', 
    [req.body.vastaus, req.body.kysymys_id, req.body.valittu, req.body.oikein], (err, result) => {
      if (err) {
        return next(err)
      } 
      res.send(result.rows[0])
    })
  })


app.delete('/poistatentti/:id', (req, res) => {
    db.query('DELETE FROM tentit WHERE id=$1', [req.params.id], (err,result) => {
      if (err) {
        // return next(err)
        res.status(404).send()
      }
      res.send(result.rowCount.toString()) 
    })
})

app.delete('/poistakysymys/:id', (req, res) => {
  db.query('DELETE FROM kysymykset WHERE id=$1', [req.params.id], (err,result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rowCount.toString())
  })
})
app.delete('/poistavaihtoehto/:id', (req, res) => {
  db.query('DELETE FROM vaihtoehdot WHERE id=$1', [req.params.id], (err,result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rowCount.toString()) 
  })
})
  

//PUTIT ei toimi!!!

app.put('/paivitatentti/:id'), (req, res, next) => {
    db.query('UPDATE tentit SET tentti=$1 WHERE id=$2',[req.body.tentti, req.params.id], (err, result)=> {
      if (err) {
        return next(err)
      }
      res.send(result.rows) 
    })
}
app.put('/paivitakysymys/:id'), (req, res) => {
  db.query('UPDATE kysymykset SET kysymys=$2 WHERE id=$1',[req.params.id, req.body.kysymys], (err, result)=> {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
}
app.put('/paivitavaihtoehto/:id'), (req, res) => {
  db.query('UPDATE vaihtoehdot SET vastaus=$2, valittu=$3, oikein=$4 WHERE id=$1',
  [req.params.id, req.body.vastaus, req.body.valittu, req.body.oikein], (err, result)=> {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })
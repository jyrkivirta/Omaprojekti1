const express = require('express')
const app = express()
const port = 4000

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
const db = require('./db')

app.use(express.json())

//query builder!! -> ORM Sequelize, JOOQ...
app.get('/tentit/:id', (req, response, next) => {   
  db.query('SELECT * FROM tentti WHERE id = $1', [req.params.id], (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows[0])
  })
})
app.get('/kysymykset/:id', (req, response, next) => {   
  db.query('SELECT * FROM kysymys WHERE id = $1', [req.params.id], (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows[0])
  })
})
app.get('/vaihtoehdot/:id', (req, response, next) => {   
  db.query('SELECT * FROM vastausvaihtoehto WHERE id = $1', [req.params.id], (err, res) => {
    if (err) {  
      return next(err)
    }
    response.send(res.rows[0])
  })
})

  app.post('/tentit', (req, res, next) => {      
    db.query('INSERT INTO tentti (nimi) VALUES ($1) RETURNING id', [req.body.nimi], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  })
  
  app.post('/kysymykset/:id', (req, res, next) => {      
    db.query('INSERT INTO kysymys (teksti) VALUES ($1)', [req.body.teksti], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  }) 
  
  app.post('/vaihtoehdot/:id', (req, res, next) => {      
    db.query('INSERT INTO vastausvaihtoehto (teksti) VALUES ($1)', [req.body.teksti], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  })


app.delete('/tentit/:id', (req, res) => {
    db.query('DELETE FROM tentti WHERE id=$1', [req.params.id], (err,result) => {
      if (err) {
        // return next(err)
        res.status(404).send()
      }
      res.send(result.rowCount.toString()) 
    })
})

app.delete('/kysymykset/:id', (req, res) => {
  db.query('DELETE FROM kysymys WHERE id=$1', [req.params.id], (err,result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.delete('/vaihtoehdot/:id', (req, res) => {
  db.query('DELETE FROM vaihtoehto WHERE id=$1', [req.params.id], (err,result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows) 
  })
})
  
app.put('tentit/:id:paivitys'), (req, res) => {
    db.query('UPDATE tentti SET tentti=$2 WHERE id=$1',[req.params.id], (err, result)=> {
      if (err) {
        return next(err)
      }
      res.send(result.rows) 
    })
}
app.put('kysymykset/:id'), (req, res) => {
  db.query('UPDATE kysymys SET kysymys=$1',[req.params.id], (err, result)=> {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
}
app.put('vaihtoehdot/:id'), (req, res) => {
  db.query('UPDATE vaihtoehto SET vaihtoehto=$1',[req.params.id], (err, result)=> {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
}
// ... many other routes in this file

// app.get('/', (req, res) => {
//     res.send('Hello World! GET')
// })

// app.post('/', (req, res) => {
//     res.send('Hello World! POST')
    
// })
// app.delete('/', (req, res) => {
//     res.send('Hello World! DELETE')
// })

// app.put('/', (req, res) => {
//     res.send('Hello World! PUT')
// })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
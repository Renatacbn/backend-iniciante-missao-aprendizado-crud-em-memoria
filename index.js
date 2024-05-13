const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']
// emplementando Endpoint Read All (irá funcionar com GET)/ neste ponto pensar em qual será a entidade ex.personagem

// função para exibir em um único endpoint de Read All toda a lista 
app.get('/personagem', function (req, res){
  res.send(lista)
})


app.listen(3000)
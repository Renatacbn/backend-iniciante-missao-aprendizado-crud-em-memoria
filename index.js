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

// implementando Endpoint Read Id [Get] /personagem/:id(os dois pontos id funcionam para dizer que é uma especificação direcionada )
app.get('/personagem/:id', function (req, res){
  // função de requisição de parâmetro de rota id
  const id = req.params.id

  // função para acessar o item da lista usando ID -1
  const item = lista[id -1]
  
  // função para enviar um item como resposta
  res.send(item)
})

app.listen(3000)
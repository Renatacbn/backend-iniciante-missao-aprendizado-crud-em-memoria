const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']
// Implementando Endpoint Read All (irá funcionar com GET)/ neste ponto pensar em qual será a entidade ex.personagem

// Função para exibir em um único endpoint de Read All toda a lista 
app.get('/personagem', function (req, res){
  res.send(lista)
})

// Implementando Endpoint Read Id [Get] /personagem/:id(os dois pontos id funcionam para dizer que é uma especificação direcionada )
app.get('/personagem/:id', function (req, res){
  // função de requisição de parâmetro de rota id
  const id = req.params.id

  // Função para acessar o item da lista usando ID -1
  const item = lista[id -1]
  
  // função para enviar um item como resposta
  res.send(item)
})

// Função para sinalizar para o express que está sendo utilizado o Json no body
app.use(express.json())

// Implementando Endpoint Creat [POST] /personagem
app.post('/personagem', function (req, res){
 
  // Função para acessar o Body da requisição através do req.body
 const body = req.body

//  Função para adicionar um novo item na lista acessando a propriedade 'nome' do body
const novoItem = body.nome

// Adicionar na lista
lista.push(novoItem)

// Função para exibir uma mensagem de sucesso
  res.send('Item adicionado com sucesso: ' + novoItem)
})


app.listen(3000)
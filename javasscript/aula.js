 // console é um objeto que atraves dos seus metodos
 // conseguimos trazer informacoes em tempo de execucao

 let erro = `caiu a api de consumo`
// console.log('olá, mundo!')
// console.warn('Api lenta')
// console.error(`barraco desabou erro ${erro}`)

const fruits = ['apple', 'banana', 'orange' ]

// console.table(fruits)

// console.info('inform');
   
// variaveis
// variavel nome = valor
var a = 6
let b = 5
const c = 10 

a = 900
// console.log(a)

b = 'banana'
// console.log(b)

// console.log(c)

// const data = Date()
// console.log(data)

// tipos de dados

const name = 'Vitoria'
const age = 17
const isApproved = false
let surname = null
let email
const languages = ['Java', 'Python', 'PHP']
const numbers = [10, 200, 1]
const user = {
    email: 'vitoriasousa15331407@gmail.com',
    password: 'teste@123'
} 
// operador typeof() retorna o tipo da minha variável
// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(isApproved))
// console.log(typeof(surname))
// console.log(typeof(email))
// console.log(typeof(languagens))
// console.log(typeof(user))

// métodos de strings 
const fullName = 'Marilia Mendonça Gab'
// length restorna quantas letras tem nossa string
console.log(fullName.length) 

// split() separa string conforme a letra desejada
const separatorName = fullName.split(' ')
console.log(separatorName)

// trabalhando com array, que pode ser reconhecida como lista, de 0 a ...
// trazendo  a variável[] com conchet o numero é o que vai 
// retornat para vc
console.log(separatorName[1])

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.indexOf('Gab'))
console.log(fullName.slice(8, 16))

// metodos de array

const list = ['a', 'b', 'c', 'd', 'e']
// buscando quantidade de itens no array
console.log(list.lenght)

// buscando um item especifico no array
console.log(list[4])

// adicionado um item no array
list[5] = 'f'

console.log(list)
// adiciona um item ao array
list.push('g')
console.table(list)

console.log(list.length)
// list.length = valor de itens contando com o 0 = primeiro indice
// list.length - 1 = retorna o ultimo item do array
console.log(list[list.length - 1])
// retira o ultimo valor array
list.pop()

console.log(list)


function calcular() {
    const a = document.getElementById('numbOne').Value
    const b = document.getElementById('numbtwo').Value
    
    const soma =  parseFloat(a) + parseFloat(b)
    

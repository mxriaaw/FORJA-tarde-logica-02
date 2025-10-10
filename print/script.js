function escreva(){
var nome = document.getElementById("nome").value
var idade = document.getElementById("idade").value

console.log(typeof nome, typeof idade)

var printNome = document.getElementById("printNome")
var printIdade = document.getElementById("printIdade")

printNome.textcontent = nome 
printNome.style.color = "green"

printIdade.textContent = idade
printIdade.style.color = "red"


}   

function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var respota = document.getElementById("respSoma")

    resposta.textcontent = numero1 + numero2

}

function sub(){
    var num1 = document.getElementById("num1").valueAsNumber
    var num1 = document.getElementById("num2").valueAsNumber
    document.getElementById("respSub").textContent = num1 - num2
}

function multi(){
    var number1 = parseFloat(document.getElementById("n5").valueAsNumber)
    var number2 = parseFloat(document.getElementById("n6").value)
    document.getElementById("respmulti").textContent = number1 * number2
}

function div(){
    var a = parseFloat(document.getElementById("n7").value)
    var b = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respDiv")

    if(b !== 0){
        resp.innerHTML = a / b.toFixed(2)
    }else{
        resp.innerHTML = "nao se divide por 0"
    }
}
    
       function print(){

         var nome = document.getElementById("nome").value
         var bixo = document.getElementById("bixo").value
         var idade = parseFloat (document.getElementById("idade").value)
         var raca = document.getElementById("raca").value
         var nacionalidade = document.getElementById("nacionalidade").value

         console.log(typeof nome, typeof bixo, typeof idade, typeof raca, typeof nacionalidade)
          

         var printNome = document.getElementById("printNome")
         var printBixo = document.getElementById("printBixo")
         var printIdade = document.getElementById("idade")
         var printRaca = document.getElementById("printRaca")
         var printNacionalidade = document.getElementById("printNacionalidade")
              
           printNome.textContent = nome
           printBixo.textContent = bixo
           printIdade.textContent = idade
           printRaca.textContent = raca
           printNacionalidade.textContent = nacionalidade













    }    
// Colocar a primeira letra em Maíusculo
// casa -> Casa
// CASA -> Casa
// cASA -> Casa

function letra()
{
     // 1 pegar texto
         var texto = document.getElementById("entrada");
         // pegar somente o valor do input^
         // console.log(texto.value);

     // 2 fazer a modificação
     var letra = texto.value.charAt(0);
     var resto = texto.value.slice(1);

     // 3 Devolve para o div
         var resposta = document.getElementById("resposta");
         resposta.innerHTML = letra.toUpperCase() + resto.toLowerCase();
};

// Iverter valores
// Edir -> ridE
// Casa -> asaC
function invertido()
{
     // 1 pegar texto
         var texto = document.getElementById("entrada");

     // 2 fazer a modificação
         var fim = 0;
         var novo = "";
         for(var ini = texto.value.length -1; ini >= fim; ini--)
         {
             novo += texto.value.charAt(ini);
         };

     // 3 Devolve para o div
         var resposta = document.getElementById("resposta");
         resposta.innerHTML = novo;
};

// Separar email de usuário
// jovi@aluno.com
// usuário: Jovi
// servidor: aluno.com
function email()
{
     // 1 pegar email/Devolve para o div
     var texto = document.getElementById("entrada");
     var resposta = document.getElementById("resposta");
     
     // 2 fazer a separação
     var email = texto.value.split("@");
     resposta.innerHTML = "Usuário: " + email[0] + "<br>";
     resposta.innerHTML += "Servidor: " + email[1];   
};

// a casa azul caiu
// cs zul ciu
function remover()
{
     var texto = document.getElementById("entrada");
     var resposta = document.getElementById("resposta");

     var novo = texto.value.replaceAll("a", "");

     resposta.innerHTML = novo;
};

function zeros()
{
     var texto = document.getElementById("entrada");
     var resposta = document.getElementById("resposta");
 
     var novo = texto.value.padStart(8, "0");
 
     resposta.innerHTML = novo;
};
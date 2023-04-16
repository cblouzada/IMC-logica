// function calculadora (soma){

//     document.write(soma)
//     document.write("<br><hr><br>")

// }


// const soma = 2 


// calculadora(soma * 1)
// calculadora(soma * 2)
// calculadora(soma * 3)
// calculadora(soma * 4)
// calculadora(soma * 5)
// calculadora(soma * 6)
// calculadora(soma * 7)
// calculadora(soma * 8)
// calculadora(soma * 9)
// calculadora(soma * 10)


//     function pulaLinha() {

//         document.write("<br>");
//         document.write("<br>");

// }

//     function mostra(frase) {

//         document.write(frase);
//         pulaLinha();
// }

//     function arendoda(){

//        calcula = Math.round()

//     }

//     function calcula(peso, altura){
    
//         const imc = peso / (altura * altura)
//         mostra("o imc calculado é " + imc)

//     }

//     calcula(68 , 173)
//     calcula(73 , 182)

    // ############################################



    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function calculaImc(altura, peso) {

        const imc = peso / (altura * altura);
        return imc;
    }

    const nomePessoa = prompt("Digite seu nome")
    const calculaPeso = prompt( nomePessoa  + " , Digite seu peso");
    const calculaAltura = prompt( nomePessoa  + ", Digite sua altura");
    

    const imcCalculado = calculaImc(1.77, 75);
    mostra(nomePessoa + " Seu IMC é " + imcCalculado);

    
   
    
        
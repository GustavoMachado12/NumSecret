alert('Jogo do Número Secreto');
let numMax = 100;
let numSecreto = parseInt(Math.random() * numMax + 1);
console.log(numSecreto);
let num;
let tentativa = 1;


while(num != numSecreto){
    num = prompt(`Escolha um número entre 1 e ${numMax}`);

    if(numSecreto == num ){
        break;
    } else {
        if(numSecreto > num){
            alert(`Número secreto maior que ${num}`);
        }
        else{
            alert(`Número secreto menor que ${num}`);
        }
        tentativa++;
    }
}

let textTentativa = tentativa > 1 ? 'Tentativas' : 'Tentativas'
alert(`Parabéns! Você acertou com ${tentativa} ${textTentativa}`)

// if(tentativa > 1){
//     alert(`Parabéns! Você acertou com ${tentativa} tentativas.`);
// } else {
//     alert(`Parabéns! Você acertou com ${tentativa} tentativa.`);
// }


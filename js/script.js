let input_peso = document.getElementById('pesp');
let input_altura = document.getElementById('altura');

function calcular_imc(peso, altura){
    let calc_peso = Number(input_peso.value);
    let calc_altura = Number(input_altura.value);

    return calc_peso / (calc_altura * calc_altura);

}

function start(){
     let resultado_imc = calcular_imc(input_peso, input_altura);
     let resultado_imc_formatado = resultado_imc.toFixed(2).replace('.',',');
     let resultado = document.getElementById('resultado');
     resultado.innerHTML = ` O IMC do peso: ${input_peso.value} com altura de: ${input_altura.value} é de: ${resultado_imc_formatado}`
    
}



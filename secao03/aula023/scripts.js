// Funções Anônimas - 27/07/2023

//Forma 1
function somarNumeros(...numeros) {
    let total = numeros.reduce(function(total, proximo) {
        return total + proximo;
    } );
    console.log(total);
}

somarNumeros(1,2,3)

// Forma 2
function somarNumeros(...numeros) {
    let total = numeros.reduce((total, proximo) =>{
        let soma = total + proximo;
        return soma;
    } );
    console.log(total);
}

somarNumeros(1,2,3,4,5);

// Forma 3
function somarNumeros(...numeros) {
    let total = numeros.reduce((total, proximo) =>total + proximo );
    console.log(total);
}

somarNumeros(1,2,3,4,5,6,7,8,9,10);
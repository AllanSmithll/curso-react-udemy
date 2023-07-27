// Switch

document.write('</br> Escolha seu pedido: </br>');
document.write('</br> 0 - Sorvete / 1 - Suco </br>');
document.write('</br> 2 - Coca-cola / 3 - Água gelada </br></br>');

function pedir() {
    x = prompt('O que deseja pedir? ')
    switch (x) {
        case "0":
            alert("Voce pediu sorvete!")
            break
        case "1":
            alert("Voce pediu suco")
            break
        case "2":
            alert("Voce pediu coquinha geladinha!")
            break
        case "3":
            alert("Voce pediu agua gelada!")
            break
        default:
            alert("Peça o que está no cardápio!")
            break
    }
}
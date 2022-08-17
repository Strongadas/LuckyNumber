let nome = prompt(' Qual é o seu nome? ')

let num = prompt(' Olá ' + nome + ' Escolha um número de 1 a 3 !')

switch(num){

    case '1':
        alert( " Boa Escolha 🦸 "  + nome )
        break;
    case '2':
        alert( " Legal você acabou de ganhar $100 💵 🤑 " +nome )
        break;
    case '3' :
        alert(" Eitaaa Caramba você pegou mal 🤢 💩 " + nome)
        break

    default:
        alert(nome + ' Você não digitou nenhum número 😝! ')




}

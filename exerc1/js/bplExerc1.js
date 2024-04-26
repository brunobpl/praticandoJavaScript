let primeiraNota = prompt('Informe a primeira nota do aluno: ')
let segundaNota = prompt('Informe a segunda nota do aluno: ')

let media = primeiraNota + segundaNota / 2

if (media < 6){

    console.log('Aluno precisa fazer exame final. Média: ' + media)
    
    let notaExame = prompt('Informe a nota do exame: ')
    let novaMedia = media + notaExame / 2

    if (novaMedia >= 6)
        console.log('Aluno aprovado com média ' + novaMedia)
    else
        console.log('Aluno reprovado com média ' + novaMedia)
    
} else {

} console.log(alert('Aluno aprovado com média ' + media))
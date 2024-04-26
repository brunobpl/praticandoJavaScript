let idadeNadador = prompt('Informe a idade (anos) do nadador: ')

let categoria = [
                    'Infantil',
                    'Infanto Juvenil',
                    'Juvenil',
                    'Adulto'
                ]

if(idadeNadador <= 10)
    console.log('A categoria do nadador é: ' + categoria[0])

else if (idadeNadador <= 13)
    console.log('A categoria do nadador é: ' + categoria[1])

else if (idadeNadador <= 18)
    console.log('A categoria do nadador é: ' + categoria[2])

else
    console.log('A categoria do nadador é: ' + categoria[3])

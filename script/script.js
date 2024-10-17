// // L’utente inserisce due numeri in successione, con due prompt.
// // Il software stampa il maggiore.

// let firstNumber = prompt('Inserisci il primo numero')
// let secondNumber = prompt('Inserisci il secondo numero')
// // console.log(firstNumber, secondNumber)

// firstNumber = parseInt(firstNumber)
// secondNumber = parseInt(secondNumber)
// // console.log(firstNumber, secondNumber)

// if (firstNumber > secondNumber) {
//     console.log(firstNumber)
// } else if (secondNumber > firstNumber)
//     // console.log(secondNumber)


// // Il software deve chiedere per 10 volte all’utente di inserire un numero.
// // Il programma stampa la somma di tutti i numeri inseriti.

// // let somma = 0

// for ( i = 0; i < 10; i++) {
//     // console.log(i)
//     let number = parseInt(prompt('inserisci un numero'))
//     // console.log(number)
//     somma = somma + number
// }

// // console.log(somma)

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// const nomi = ['Marco', 'Filippo', 'Antonio', 'Susanna']
// console.log(nomi)

// const nomeInvitato = prompt('Qual\'è il tuo nome?')

// if (nomi.includes(nomeInvitato)) {
//     console.log(`Benvenuto ${nomeInvitato}`)
//     else {
//         console.log(`Mi dispiace ${nomeInvitato} non sei invitato)
//     }
// }


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// const numbers = []
// for ( let i = 0; i < 6; i++) {
//     let number = parseInt(prompt('inserisci un numero'))
//     console.log(number)

//     if (number % 2 !== 0) {
//         numbers.push(number)
//     }
// }

// console.log(numbers)


// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

// const n = parseInt(prompt('Inserisci un numero'))
// const exp = parseInt(prompt('inserisci l\'esponente'))
// console.log(n)

// for (let i = 0; i < n; i++) {
//     // console.log(i)

//     let num = i + 1
//     // console.log(num)

//     // let pow = num ** exp
//     let pow = Math.pow(num, exp)
//     console.log(pow)
// }


// Stampa le potenze di 2 fino a 1000.

// ultima potenza 1024, perchè controlla se l'ultima fatta è minore di 1000
// let num = 2
// // let pow = 0

// for (let i = 0, pow = 0; pow < 1000; i++) {
//     pow = num ** i
//     console.log(pow)
// }

// ultima potenza minore di 1000
// let num = 2
// // let pow = 0

// for (let i = 0, pow = 0; num ** i < 1000; i++) {
//     pow = num ** i
//     console.log(pow)
// }


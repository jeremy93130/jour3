// Exercice 1: Nombres Pairs


var somme = 0

for (var i = 11; i < 47; i++) {
    if (i % 2 === 0) {
        somme += i
    }
} console.log(somme)

var somme = 0
for (var i = 11; i < 47; i++)  // Version pro

    somme += (i % 2 ? 0 : i)

console.log(somme)



// Exercice 2: Nombres impairs 

var somme = 0

for (var i = 109; i < 588; i++) {
    if (i % 2 === 0) {
    } else {
        somme += i
    }
} console.log(somme)




// Exercice 3 : Puissance et racine carrée 

var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []

for (var i = 0; i < numbers.length; i++) {
    var puissance = numbers[i] ** 2
    squares.push(puissance)
} console.table(squares)

for (var i = 0; i < squares.length; i++) {
    var puissance2 = Math.sqrt(squares[i])
    roots.push(puissance2)
} console.table(roots)


// Exercice 3 / 1 : Tables de multiplications v1 : 

var results = 0

for (var i = 0; i <= 10; i++) {
    results = i * 3
    // console.log(`3x${i}=${results}`)
}

// Exercice 4 : Tables de multiplications v2 :
for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
        var results = j * i
        console.log(`${i} x ${j} = ${results}`)
    }
    console.log("\n")
}

// Exercice 5 : Factorielles V1 :
var numm = 1

for (var i = 7; i >= 1; i--) {
    var numm = numm * i
} console.log(numm)

// Eercice 6 : Factorielles V2 :

var nummber = 1

for (var i = 0; i <= 8; i++) {
    nummber = 1;
    for (var j = 1; j <= i; j++) {
        nummber *= j
    }
    console.log(i + "! = " + nummber)
}

for (var n = 1, i = 0; i < 9; i++)
    console.log(i + "! = " + (n *= (i < 1 ? 1 : i))) // Code Pro


// Exercice 8 : Somme des carrés

var number = 0

for (var i = 5; i < 11; i++) {
    number += i * i // number = number + i * i
} console.log(number)

// Exercice 9 : 

var nombresMultiples7 = 0

for (var i = 100; i < 1001; i++) {
    if (i % 7 === 0) {
        nombresMultiples7 += 1
    }
} console.log(nombresMultiples7)

// Version Pro
for (var nombresMultiples7 = 0, i = 100; i < 1001; i++)
    nombresMultiples7 += (i % 7 ? 0 : 1)
console.log(nombresMultiples7)

// Exercice 10 :

var somme = 0
var de

for (var i = 0; i < 20; i++) {
    de = Math.floor(6 * Math.random() + 1)
    if (de >= 5){
        somme += de       // somme des valeurs supérieures ou égales à 5
        // somme += 1   // nombre de tirage de dés supérieurs ou égales tiré 5 ou plus 
    }
}console.log(somme)






// Exercice 1: Nombres Pairs


var somme = 0

for (var i = 11; i < 47; i++) {
    if (i % 2 === 0) {
        somme = somme + i
    }
} console.log(somme)

// Exercice 2: Nombres impairs 

var somme = 0

for (var i = 109; i < 588; i++) {
    if (i % 2 === 0) {
    } else {
        somme = somme + i
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
    console.log(`3x${i}=${results}`)
}

// Exercice 4 : Tables de multiplications v2 :
for (var i = 0; i <= 10; i++) {
    console.log(i)
    for (var j = 0; j <= 10; j++) {
        var results = j * i
        console.log(`${i}*${j}=${results}`)
    }
}


// Exercice 5 : Factorielle v1 : 

var numm = 1

for (var i = 0; i <= 7; i++) {
    var numm= numm * i

} console.log(numm)
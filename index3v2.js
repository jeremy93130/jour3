// Exercice 1: Nombres Pairs


var somme = 0

for (var i = 11; i < 47; i++) {
    if (i % 2 === 0) {
        console.log(i)
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
    numm *= i
} console.log(numm)

// Eercice 6 : Factorielles V2 :



for (var i = 0; i < 9; i++) {
    var facto = 1
    for (var j = 1; j <= i; j++) { // J va boucler dans la boucle i et s'arreter quand on lui dit 
        // Exemple : j <= 5 la boucle se concentrera sur la 5 ème boucle et retournera 120 de 0 à 8
        facto *= j //facto = facto * j
    } console.log(i + "! = " + facto)
}

// Exercice 8 : Sommes des carrés :

var carre
var somme = 0

for (var i = 5; i < 11; i++) {
    carre = i * i; // carre = à chaque tour , la variable i va se multiplier avec elle même ( 5 x 5 , 6 x 6 )
    somme += carre; // Additionne le total de la variable carré : 5 x 5 = 25 , 6 x 6 = 36 ; Somme = somme (0) + carre (36) etc
} console.log(somme)

// Exercice 9 : Comptons :

var results = 0

for (var i = 100; i < 1001; i++) {
    if (i % 7 === 0) // Si i Modulo 7 === 0 (Si le reste de la division de 7 est zéro) 
        results += 1    // Ajoute + 1 à la variable results ( compte le nombre de multiple de 7 dans la var i et non le resultat )
} console.log(results)


// Exercice 10 : chanceux : 

var de
var somme

for (var i = 0; i <= 6; i++) {
    de = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    if (de >= 5) {
        somme += de  // somme des valeurs supérieures ou égales à 5
    }
} console.log(somme)

// Armstrong

var somme = 0
var resultat

for (var i = 100; i < 1000; i++) {
    somme = i ** 3
    for (var j = 0; j < i; j++) {
        resultat = somme + j
    }//console.log(somme)
}







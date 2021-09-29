// Exercice 1 

var fruits = ["mango", "lemon", "blueberry"]

console.log(fruits)
console.table(fruits)

// Exercice 2 

var ingredients = ["eggs", "milk", "butter"]

console.log(ingredients[1])

console.log(ingredients.indexOf("butter"))

// Exercice 3 

var objects = ["pen", "book", "lamp"]

objects.unshift("chair")
objects.pop()
objects.push("laptop")
objects.shift()

console.log(objects)

// Exercice 4 

var number = [4, 10, 8, 12, 6]

console.log(number.reverse())

console.log(number.sort((a, b) => a - b))

// Exercice 5 

var total = 0
var limit = 10

for (i = 1; i <= limit; i++) {
    total = total + i
    console.log(i)
}
console.log(total)
// Exercice 6 - Créez une variable `sentence` valant "Hello Konexio !"
/* - A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH") */

var sentence = "Hello Konexio ! "
var sentenceInverse = ""

for (i = 0; i <= sentence.length - 1; i++) {
    sentenceInverse = sentence[i] + sentenceInverse;
}
console.log(sentenceInverse)


//bonus 

for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log(i, "Fizz")
    }
    else if (i % 5 === 0) {
        console.log(i, "buzz")
    }

    else if (i % 7) {

    }

    else {
        console.log(i)
    }
}


// Bonus While

var total = 0

var limit = 10

var i = 1

while (i <= limit) {
    i++
    total = total + i
    console.log(total)
}


// Bonus III

var promo = ["Marco", "Kevin", "Jong", "Alin", "Eloi", "Hèlène", "Evan", "Salwa", "Hanna"];

var randomPromo = promo[Math.floor(Math.random() * promo.length)];

console.log(randomPromo);

// Bonus IV 

var empty = []
var number = ""

for (; empty.length <= 20; number = Math.floor(Math.random() * (100 - 0 + 1) + 0)) {
    empty.push(number)
}
console.log(empty)

var empty = []

/* for ( ; empty.length <= 20; ) {


}
console.log(emptyPush[i]) */
let a = 10;
let b =16;
let c = 9;

let somme = a + b + c;


console.log("la somme de",a ,"+" , b, "+" ,c, "est egale a",somme);

let x = 9;
let y = 20;
let z = 15;

let produit = x * y * z;

alert("Le produit de " + x + " * " + y + " * " + z + " est égal à " + produit);

for( let i = 1 ; i <= 9; i++){

    console.log(`table de multiplication de 1 à 9 pour ${i} :`);

    for (let j = 1; j <= 9; j++) {
        let produit = i * j;
        console.log(`${i} x ${j} = ${produit}`);
}
}
console.log("hola Mundo");


const inventory = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15.99,
    rating: 4.8,
    inStock: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 12.99,
    rating: 4.7,
    inStock: false,
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: 10.99,
    rating: 4.6,
    inStock: true,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 9.99,
    rating: 4.5,
    inStock: true,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    price: 8.99,
    rating: 4.0,
    inStock: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 7.99,
    rating: 3.9,
    inStock: true,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: 14.99,
    rating: 4.9,
    inStock: true,
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 11.99,
    rating: 4.6,
    inStock: false,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 6.99,
    rating: 4.2,
    inStock: true,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 9.49,
    rating: 4.3,
    inStock: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.49,
    rating: 4.8,
    inStock: false,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 25.99,
    rating: 4.9,
    inStock: true,
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    price: 8.49,
    rating: 4.1,
    inStock: true,
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    price: 17.99,
    rating: 4.4,
    inStock: false,
  },
  {
    title: "The Iliad",
    author: "Homer",
    price: 13.99,
    rating: 4.3,
    inStock: true,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    price: 18.49,
    rating: 4.7,
    inStock: false,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    price: 16.99,
    rating: 4.2,
    inStock: true,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    price: 11.49,
    rating: 4.6,
    inStock: false,
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    price: 15.49,
    rating: 4.8,
    inStock: true,
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    price: 14.49,
    rating: 4.7,
    inStock: false,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    price: 12.99,
    rating: 4.4,
    inStock: true,
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    price: 10.49,
    rating: 4.3,
    inStock: true,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    price: 7.49,
    rating: 4.1,
    inStock: false,
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    price: 8.99,
    rating: 4.5,
    inStock: true,
  },
];

console.log("------Ejercicio 1------")


inventory.forEach(element => console.log("la lectura nutre tu vocabulario, te invitamos a leer " + element.title)
    
);


console.log("------Ejercicio 3------")

let stock = inventory.filter(elemento => elemento.inStock)
console.log(stock)


console.log("------Ejercicio 4------");

let price = inventory.filter((elemento) => elemento.price <=7.2);
console.log(price);

console.log("------Ejercicio 7------");

let nuevoLibros = inventory.map(libro => {
    let original = libro.title;
    let separado = original.split("").join(",")
    let reves = original.split("").reverse().join(" ")
    let alternar = libro.title.toUpperCase()



    return {
        original: original,
        separadoComas: separado,
        tituloReves: reves,
        tituloAlternado : alternar
    }
})

console.log(nuevoLibros);

nuevoLibros.forEach(element => {
    let contenedor = document.getElementById("contenedor")
    let nuevoHijo = document.createElement("p")

    nuevoHijo.innerHTML = `${element.original} 
    ${element.separadoComas} 
    ${element.tituloReves} 
    ${element.tituloAlternado}`;

contenedor.appendChild(nuevoHijo)
    
});

console.log("------Ejercicio 8------");


let buscarIndex = inventory.findIndex((e) => (e.title == "The Iliad"));

console.log(buscarIndex);


console.log("------Ejercicio 9------");

let buscarCalificacion = inventory.filter((e) => e.rating < 3.7 || e.rating < 4);

console.log(buscarCalificacion);


 console.log("------Ejercicio 10------");   

let ordenar = inventory.sort((a, b) => {
    if (a.title < b.title) { return -1 }
    if (a.title > b.title) { return 1 }
    return 0
    
})

console.log(ordenar);


console.log("------Ejercicio 11------");   

let inventory2 = [...inventory]
let inventory3 = [...inventory]

let ascendentePrecio = inventory2.sort((a, b) => {
    if (a.price < b.price) { return -1 }
    if (a.price > b.price) { return 1 }
    return 0
})

let descendentePrecio = inventory3.sort((a, b) => {
    if (a.price > b.price) { return -1 }
    if (a.price < b.price) { return 1 }
    return 0
})

console.log(ascendentePrecio);
console.log(descendentePrecio);


console.log("------Ejercicio 12------");  


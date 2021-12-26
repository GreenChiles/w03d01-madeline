//Part 1 HTML & CSS
//5 I am very comfortable with HTML and CSS. Javascript, not so much


////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++){
    console.log(i)
} 

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i<= 200; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i<= 100; i++){
    if (i % 15 == 0){
        console.log(i + " FizzBuzz")
    } else if (i % 5 == 0){
        console.log(i + " buzz")
    } else if (i % 3 == 0){
        console.log (i + " Fizz")
    } else {
        console.log(i)
    }
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

console.log(plantee.indexOf(5000))// I dont have to indexOf to know what it is
//I could always count but its nice to have a method to do it for me. (index: 2)
plantee[2] += 1
console.log(plantee)
wolfy[3] = "Gotham City"
console.log(wolfy)
// D'Art? you mean dart?
dart.push("Hawkins")
console.log(dart)

const Gameboy = Object.assign([], wolfy)
//Object assign apperenty works on arrays. I think it might
//be unnessary tho... i guess i could of just changed the name Wolfy to Gameboy
// above or used another constant named Gameboy to store wolfy.
Gameboy[0] = "Gameboy"
console.log(Gameboy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

ninjaTurtles = ["Dontalello", "Leonardo", "Raphael", "Michaelangelo"]
for (const elem of ninjaTurtles){
    console.log(elem.toUpperCase() )
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle',
 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story',
  'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
  'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
  'Imitation of Life', 'Snatch', 'Fast and Furious'];
  console.log(favMovies)
  console.log(favMovies.indexOf("Titanic"))
  favMovies.sort() // sorts alphabetically
  console.log(favMovies)
  favMovies.pop()
  console.log(favMovies)
  favMovies.push("Guardians of the Galaxy")
  console.log(favMovies)
  favMovies.reverse()
  console.log(favMovies)
  favMovies.shift()
  console.log(favMovies)
  favMovies.unshift() // doesnt add anything, with an element. Unshift adds stuff
  //to the front of the array
  console.log(favMovies)
  console.log(favMovies.indexOf("Django Unchained")) //index:14
  favMovies.splice(14,1, "Avatar")
  console.log(favMovies)
  let whatIsTheMiddleOfArray = Math.ceil(favMovies.length / 2)
    console.log(whatIsTheMiddleOfArray) //index 9

    const firstHalf = favMovies.slice(0, whatIsTheMiddleOfArray)
    console.log(firstHalf)// did this one anyways
    const secondHalf = favMovies.slice(-whatIsTheMiddleOfArray)
    console.log(secondHalf) //This one is the last half
    //So Math.ceil makes sure that the division would always round up, thus
    //protecting me from errors, if it couldnt be split evenily
    // the array.length / 2 is what cuts it in half. 
// source: flaviocopes.com/how-to-cut-array-half-javascript/
console.log(favMovies.indexOf("Fast and Furious")) //Index: 13
//No? i get 13. I dont recall removing it.
console.log(favMovies.indexOf("Django Unchained")) //index: -1
// However if we do that on one that doesnt exist anymore, I
//get a index of -1 (showing its nonexistent)
//12. Maybe because its just the name it not any vaules that it is holding.
// I think Let would just make the vaules changable, but im not sure now.
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

                    const egg = whereIsWaldo.splice(1,1)
                    console.log(egg)
                    console.log(whereIsWaldo) //Eggbert gone.

                    whereIsWaldo[1].splice(2,1, "No One")
                    console.log(whereIsWaldo) //Neff is replaced
                    

                    console.table(whereIsWaldo) 
                    //Finding Waldo
                    console.log(whereIsWaldo)
                    console.table(whereIsWaldo)
                   const item = whereIsWaldo[2].splice(1,1)
                   const Waldo = item[0].splice(1,1)
                   console.log(item)
                   console.log(  Waldo)
        //see what i did there? i spliced a splice. */

////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
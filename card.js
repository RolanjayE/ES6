// Create two JavaScript files named app.js and card.js.
// Inside the app.js file, create an object containing your personal information.
// In the card.js file, create an arrow function that takes one parameter for the object you created in app.js.
// The arrow function should use destructuring and template literals to return a value.
// Use import and export to access the arrow function inside app.js.
// Finally, console.log the value returned by the arrow function.

let sample = "This is sample data"
let secondData = "this is second sample data"

const myArrowFunction = ( data ) => {
    // deconstruction
    const { firstName, lastName, title, paragraph } = data

    //template literal
    return `${firstName} ${lastName} ${title} ${paragraph}`
}

export { myArrowFunction, sample, secondData }


// --- First
// Differences between let, const, var:
// How to use Template Literals:
// What is an Arrow Function:
// What are Objects and how to create them:
// How to access objects using Dot Notation:
// How to use Destructuring to Access Objects:

// -- First Activity
// Create an object based on your personal information.
// Create an arrow function; inside this arrow function, use destructuring and template literals to access the data from the object you created, then return the data.


// Short Recap:
// ES6 - Why we need to adopt new features
// What are Import and Export, and why are they important, How to use it.
// What is type module


// --- Second Activity
// Create two JavaScript files named app.js and card.js.
// Inside the app.js file, create an object containing your personal information.
// In the card.js file, create an arrow function that takes one parameter for the object you created in app.js.
// The arrow function should use destructuring and template literals to return a value.
// Use import and export to access the arrow function inside app.js.
// Finally, console.log the value returned by the arrow function.


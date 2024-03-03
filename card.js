// Create two JavaScript files named app.js and card.js.
// Inside the app.js file, create an object containing your personal information.
// In the card.js file, create an arrow function that takes one parameter for the object you created in app.js.
// The arrow function should use destructuring and template literals to return a value.
// Use import and export to access the arrow function inside app.js.
// Finally, console.log the value returned by the arrow function.


const myArrowFunction = ( data ) => {
    // deconstruction
    const { firstName, lastName, title, paragraph } = data

    //template literal
    return `${firstName} ${lastName} ${title} ${paragraph}`
}

export { myArrowFunction }


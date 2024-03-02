
// app.js import
import { personalData } from './data.js';


const myFunction = () => {
    // decunstruction
    const { firstName, lastName, title } = personalData
    
    // template literal
    return `${firstName} ${lastName} ${title}`

}


console.log(myFunction())
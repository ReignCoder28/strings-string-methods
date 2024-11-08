// SLICE
// Example:
// var randomWord = "clowns";

// var substring = randomWord.slice(1,4);

// WORK:

// function slice (string, numOne, numTwo){
//     var stringSlice = "";
//     for(let i = numOne; i < numTwo; i++){
//         stringSlice += string[i];
//     };
//     console.log (stringSlice)
// }
// slice (randomWord, 2, 4);


// REPLACE
// Example:
// let harryPotter = "draco";

// var potterName = harryPotter.replace ("17", "Harry");

// console.log (potterName)

// WORK:

// let string = "marry potter"

// function replace (replace, oldChar, newChar){
//     let index = 0;
//     let newString = ""
//     for(let i = 0; i <replace.length; i++){
//         if(replace[i] === oldChar){
//             index = i;
//         }
//     }

    
//     for(let i = 0; i <replace.length; i++){
//         if(i === index){
//             newString += newChar
//         }
//         else{
//             newString += replace[i]
//         }
    
//     }
//     string = newString;

//     console.log (string);
// }
// replace(string, "m", "h")

// replaceAll:
// WORK:
// let stringAll = "harry malfoy malfoy malfoy malfoy malfoy"

// replaceAll("a", "t");

// function replaceAll (replaced, newWord){
//     let index = 0;
//     let newName = "";
//     for(let i = 0; i < stringAll.length; i++){
//         if(stringAll[i] === replaced){
//             newName += newWord;
//         }
//         else{
//             newName += stringAll[i];
//         }

//     }
//     console.log(newName);
// }



// concat
// Example:
// var firstName = "Ice";
// var lastName = " spice";

// var fullName = firstName.concat(lastName);

// console.log(fullName);
// WORK:


// let firstName = "harry"
// let lastName = " potter"


// function conCat (first, last){
//     firstName = firstName+lastName;
//     console.log(firstName)
// }
// conCat(firstName, lastName);


// charAt

let char = "ron"

function charAt (word, number){
    for(let i = 0; i < word.length; i++){
        if( i === number){
            console.log (word[i])
        }
    }
}

charAt(char, 2)
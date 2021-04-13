//---------------------------------------------------------------------------------------
// *
// * *
// * * *
// * * * *
// * * * * *

// const STAR = " * ";
// const NEW_LINE = "<br/>"   

// function drawTriangle(starCount){
//     let line = " ";
//     for(let i = 1; i <= starCount; i++){
//         line += STAR;
//         document.write(line, NEW_LINE)
//     }   
// }

// drawTriangle(5);

//---------------------------------------------------------------------------------------

// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// const STAR = "*";
// const NEW_LINE = "<br/>"   

// function drawTriangle(length){
//     let line = STAR.repeat(length);
//     for(let i = 0; i <= length; i++){
//         document.write(line, NEW_LINE)     
//         line = line.slice(1);
//     }
// }

// drawTriangle(10);

//---------------------------------------------------------------------------------------

//        *
//       * *
//      * * *
//     * * * *
//    * * * * *

// const STAR = " * ";
// const NEW_LINE = "<br/>"  
// let line = "";
// let spaces = "&nbsp";

// function drawTriangle(length){
//     let lenghtSpaces = spaces.repeat(length);
//     for(let i = 0; i < length; i++){
//         line += STAR;
//         lenghtSpaces2 = spaces.repeat(length--);
//         document.write(lenghtSpaces2, line, NEW_LINE)
//     }
// }

// drawTriangle(10);

//---------------------------------------------------------------------------------------
//Array index sort by reverse

// let arr = ["Stephan", "Armen", "Serob", "Anush", "Lia", "Marat"];

// let arr2 = arr.length -1;

// for(let i = 0; i < arr.length/2; i++){
//     let arrFirst = arr[i];
//     arr[i] = arr[arr2];
//     arr[arr2] = arrFirst;
//     arr2--;

// }

// document.write(arr.join(" "));

//---------------------------------------------------------------------------------------

//Find a pair of numbers
// for( let i = 1; i <= 79; i++){
//     if(i%2 === 0){
//         console.log(i);
//     };
// };

//---------------------------------------------------------------------------------------
// find and replace all letters "a" in the sentence with "*" 
  
// const TEXT = "The four major categories of B2B product purchasers are:";
// const CHAR = "a";
// const REPLACED_CHAR = "*";

// function changeLetter(TEXT, CHAR, REPLACED_CHAR){ 
//     let newText="";
//       for(let i = 0;  i < TEXT.length; i++){
//           newText += (TEXT[i] === CHAR) ? REPLACED_CHAR : TEXT[i];
//       }
//      document.write(newText)
//   }

//   changeLetter(TEXT, CHAR, REPLACED_CHAR);
//---------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
// find all number from string and add numbers  
  
// const TEXT = "FwrtY45KHL120mn10P";
// let newText = "";
// let x = 0;

// for (let i = 0; i < TEXT.length; i++) {
//     if (TEXT[i] !== ' ') {
//         if (!isNaN(TEXT[i])) newText += TEXT[i];
//         else {
//             x += (1 * newText);
//             newText = ""
//         }
//     } else break
// }
// console.log(x)

//---------------------------------------------------------------------------------------



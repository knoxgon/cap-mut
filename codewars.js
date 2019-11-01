/*
   Capitilize first character of the word and return the final output.
*/
const capitalizeWord = (word) => word.replace(/^\w/, (char) => {return char.toUpperCase()})
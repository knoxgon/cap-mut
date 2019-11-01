/*
  Codewars link:
  https://www.codewars.com/kata/595970246c9b8fa0a8000086

   Capitilize first character of the word and return the final output.
*/

const capitalizeWord = (word) => word.replace(/^\w/, (char) => {return char.toUpperCase()})

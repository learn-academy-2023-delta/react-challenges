group of friends creating secret society. named by the first letter of each of the friend names
take in an array of names, and returns the name of the secret society.

taking an array of elements and combining the first indexed  element in the array

contain all strings
no empty. at least one string

input array of strings
output string of all the first letters of the array elements


create a function that takes 1 input (array)
<!-- split array into names ()
  assign to variable -->
iterate through each name and get the [0] index of each word (map) return new array of first lettrs 
  assign to a variable
return join('') method 

const secretSociety = (arr) = {
  let firstLetters = arr.map(name => name[0])
  //firstLetters should be array of single letters
  return firstLetters.join('')
}

  //go look at memes
  //test inputs!
  //check in more
  //conversation during lulls



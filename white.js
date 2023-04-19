//Remove the spaces found in a string. Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed. 

const letterSpace = 'A B C';
const spaceRemoved = letterSpace.replaceAll(' ','');
console.log(spaceRemoved);

//Return a Boolean if a number is divisible by 10 Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.
function isDivisibleBy10(num) {
    if (num % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
console.log(isDivisibleBy10(100)); // true
console.log(isDivisibleBy10(50)); // true
console.log(isDivisibleBy10(25)); // false
console.log(isDivisibleBy10(1)); // true

// 10. Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. 


function countVowels(word) {
const vowels = "aeiou";
let count = 0;
for (let i = 0; i < word.length; i ++){
    if (vowels.includes(word[i])){
        count++;
    }
}
return count;
}

console.log(countVowels("Greateast of all times"))
console.log(countVowels("Goat"))


//let word = "Vowels";
//let count = 0;
//if(vowels === word.charAt())

// for(let e = 0; e < word.length; e ++){
//     if(vowels[i].localeCompare(word.charAt[e])) {
//         count ++;
//     }
//     console.log(vowels[i].localeCompare(word.charAt[e]));
//     console.log (vowels[i]);
//     console.log (word.charAt(e));

//     console.log (typeof(vowels[i]));
//     console.log (typeof(word.charAt(e)));
//     word.charAt(e) === vowels[i];
//     console.log(word.charAt(e));
//     console.log(vowels[i]);
// }
// }
// console.log (count);





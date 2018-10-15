

//Reverse a string - chaining
function reservseString(str){
    return str.split('').reverse().join('');
}
console.log('reservseString: ' + reservseString('hello'));

//Reverse a string - For Loop
function reverseStringForLoop(str){
    let revString = '';
    for(let i = str.length -1; i >= 0; i--){
        revString = revString + str[i]; // this will append onto the string
    }
    return revString;
}
console.log('reverseStringForLoop: ' + reverseStringForLoop('hello'));

//Reverse a string - ForOfLoop
function reservseStringForOfLoop(str){
    let revString = '';
    for(let char of str){
        revString = char + revString;
    }
    return revString;
}
console.log('reservseStringForOfLoop: ' + reservseStringForOfLoop('hello'));

//Reverse a string - ForEach ES6
function reservseStringForEach(str){
    let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString
}
console.log('reservseStringForEach: ' + reservseStringForEach('hello'));


//PALENDROME
function isPalendrome(str){
    const revString = str.split('').reverse().join('');
    // you can return true or false in a return like below
    return revString === str;
}
console.log('isPalendrome: ' + isPalendrome('racecar'));

//reverse an integer
function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString);
}
console.log('reverseInt: ' + reverseInt('12345'));

//CAPITALIZE FIRST LETTERS
function capitalizeFirstLetters(str){
    const strArr = str.toLowerCase().split(' ');
    for(let i in strArr){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');
}
console.log('capitalizeFirstLetters: ' + capitalizeFirstLetters('I love javascript'));

//CAPITALIZE FIRST LETTERS HI ORDER FUNCTION
function capitalizeFirstLettersMap(str){
    return str.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}
console.log('capitalizeFirstLettersMap: ' + capitalizeFirstLettersMap('I love javascript'));

//MAX CHARACTER
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
       if(charMap[char]){
           charMap[char]++;
       } else {
           charMap[char] = 1;
       }
    });
    
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log('maxCharacter: ' + maxCharacter('I love javascript'))
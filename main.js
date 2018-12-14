// Code for Part One 
function isLeapYear(year) {
    return (parseInt(year) % 400 === 0 || (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0)) ? true : false
}

console.log(isLeapYear('2012')) // returns true 
console.log(isLeapYear('2010')) // returns false
// Code for Part Two 
function vowelOrCons(letterIn) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(letterIn.toLowerCase())) {
        return ('vowel')
    } else if (letterIn === 'y') {
        return ('vowel or consonant')
    } else {
        return ('consonant')
    }

}

console.log(vowelOrCons('a')) // return 'vowel'
console.log(vowelOrCons('y')) // return 'vowel or consonant'
console.log(vowelOrCons('h')) // return 'consonant'

// Code for Part Three 






//daysInMonth('December') // returns 31
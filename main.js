// Code for Part One 
function isLeapYear(year) {
    return (parseInt(year) % 400 === 0 || (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0)) ? true : false
}

console.log(isLeapYear('2012')) // returns true 
console.log(isLeapYear('2010')) // returns false
// Code for Part Two 





/* vowelOrCons('a') // return 'vowel'
vowelOrCons('y') // return 'vowel or consonant'
vowelOrCons('h') // return 'consonant'

// Code for Part Three 






daysInMonth('December') // returns 31 */

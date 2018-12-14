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
    } else if (letterIn.toLowerCase() === 'y') {
        return ('vowel or consonant')
    } else {
        return ('consonant')
    }

}

console.log(vowelOrCons('a')) // return 'vowel'
console.log(vowelOrCons('y')) // return 'vowel or consonant'
console.log(vowelOrCons('h')) // return 'consonant'

// Code for Part Three 

function daysInMonth(month, year) {
    var monthNum = {
        'jan': 31,
        'feb': 28,
        'mar': 31,
        'apr': 30,
        "may": 31,
        'jun': 30,
        'jul': 31,
        'aug': 31,
        'sep': 30,
        'oct': 31,
        'nov': 30,
        'dec': 31
    }
    return (isLeapYear(year) && (month.slice(0, 3).toLowerCase() === 'feb')) ? ((monthNum[month.slice(0, 3).toLowerCase()]) + 1) : (monthNum[month.slice(0, 3).toLowerCase()])

}

console.log(daysInMonth('february', '2016')) // returns 31
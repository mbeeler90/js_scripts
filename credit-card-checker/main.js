// @ts-check

// arrays containing credit card numbers
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [mystery1, mystery2, mystery3, mystery4, mystery5]

// adds the current number to the previous number
const reducer = (previousValue, currentValue) => previousValue + currentValue

// Reduction of number if > 9
const largerNine = elem => {
	if (elem > 9)
		return elem - 9
	else
		return elem
}

// Function to check if a credit card number is valid. First, the double of the 
// digits is added to a new array for digits that are even (for cards with even
// digits) / uneven (for cards with uneven number of digits). Then, 9 is 
// subtracted from digits that are > 9. Finally, all digits in the new array are
// summed up. If the result is dividable by 10, the card is valid, else invalid.
const validateCred = arr => {
	let newArr = []
	let check = 0
	if (arr.length % 2 !== 0)
		check = 1
	for (let i = 0; i < arr.length; i++) {
		if ((i + check) % 2 === 0)
			newArr.push(arr[i] * 2)
		else
			newArr.push(arr[i])
	}
	newArr = newArr.map(largerNine)
	if (newArr.reduce(reducer) % 10 === 0) {
		return true
	} else {
		return false
	}
}

// Adding all invalid cards to an array.
const findInvalidCards = nestArr => nestArr.filter(arr => validateCred(arr) === false)

// Iterate through the array of invalid cards and determine the issuer of the invalid card.
const idInvalidCardCompanies = nestArr => {
	let newArr = []
	for (let i = 0; i < nestArr.length; i++) {
		if (nestArr[i][0] === 3) {
			if (!newArr.includes('Amex'))
				newArr.push('Amex')
		} else if (nestArr[i][0] === 4) {
			if (!newArr.includes('Visa'))
				newArr.push('Visa')
		} else if (nestArr[i][0] === 5) {
			if (!newArr.includes('Mastercard'))
				newArr.push('Mastercard')
		} else if (nestArr[i][0] === 6) {
			if (!newArr.includes('Discover'))
				newArr.push('Discover')
		} else
			console.log(`unknown company ${newArr[i]}`)
	}
	return newArr.sort()
}

// Print the issuers of invalid cards to the console
console.log(idInvalidCardCompanies(findInvalidCards(batch)))

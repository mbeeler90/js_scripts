// @ts-check

// Declaration of message parts, which will be randomly returned
const msgPart1 = [
	'2 Hearts',
	'A Rainy Day',
	'After we Collided',
	'Chick Fight',
	'Alone',
	'Bad and Ugly',
	'Black Bear',
	'Books of Honey',
	'Evil Eye',
	'Death',
	'Greenland',
	'Let Him Go',
	'Jingle Jangle',
	'Skylines',
	'The 40-Year Old'
]

const msgPart2 = [
	'between',
	'in',
	'in the Lonely',
	'above the',
	'or the stoned',
	'vs. the',
	'and the',
	'covered in',
	'under the',
	'of the',
	'killing in',
	'in the Name of',
	'Safely travels to the',
	'are Falling for the',
	'Digging through the'
]

const msgPart3 = [
	'Love',
	'New York',
	'Sauna',
	'Planet',
	'Insane',
	'Hair Day',
	'Blue Cheese',
	'Blood',
	'Christmas Tree',
	'Sky',
	'Half Brothers',
	'Drugs',
	'Mountain',
	'Joke',
	'Dust'
]

// generate a random movie title
function generate_movie_title() {
	const num1 = Math.floor(15 * Math.random())
	const num2 = Math.floor(15 * Math.random())
	const num3 = Math.floor(15 * Math.random())

	console.log(`${msgPart1[num1]} ${msgPart2[num2]} ${msgPart3[num3]}`)
}

generate_movie_title()

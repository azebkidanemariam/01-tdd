/*
a Skriv testfall för en funktion som kan omvandla temperatur
 från grader Fahrenheit till Celsius. Tips: C = (F - 32) / 1.8 . 
Fahrenheit till Celsius konvertering 

*/


function fahrenheitToCelsius(degrees) {
	const absZero = -459.67
	if( (typeof degrees) !== 'number' || degrees < absZero ) {
		throw new Error('Invalid degree')
	}
	return (degrees - 32) / 1.8
	// C = (F - 32) / 1.8
}

module.exports = { fahrenheitToCelsius }
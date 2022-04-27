const { generateInitials } = require('../mainFunctions')

describe('Check generated initials', () => {
	it.each([
		{ text: 'a', expected: 'A' },
		{ text: 'a b', expected: 'AB' },
		{ text: 'a b c', expected: 'AB' },
		{ text: 'Zebra', expected: 'ZE' },
		{ text: 'Admin Admin', expected: 'AA' },
	])('should return $expected if text is $text', ({ text, expected }) => {
		expect(generateInitials(text)).toBe(expected)
	})
})

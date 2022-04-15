const { generateInitials } = require('../mainFunctions')

describe('generateInitials', () => {
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

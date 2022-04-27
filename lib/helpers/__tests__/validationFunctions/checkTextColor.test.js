const { checkTextColor } = require('../../validationFunctions')

const { INVALID_TEXT_COLOR } = require('../../errorConstants')

describe('Check text color', () => {
	it.each([
		{ input: '#fff', expected: true },
		{ input: '#ffffff', expected: true },
		{ input: 'green', expected: true },
		{ input: 'LightGoldenrodYellow', expected: true },
		{ input: 'rgb(0, 0, 0)', expected: true },
		{ input: 'rgba(0, 0, 0, .45)', expected: true },
		{ input: 'hsl(4.71239rad, 60%, 70%)', expected: true },
		{ input: 'hsla(180deg 100% 50% / .8)', expected: true },
		{ input: 'hwb(180deg 0% 0% / 100%)', expected: true },
		{
			input: 'lab(2000.1337% -8.6911 -159.131231 / .987189732)',
			expected: true,
		},
		{ input: '#zzzzzz', expected: false },
		{ input: 'admin', expected: false },
	])(
		'Should return $expected when $input is passed',
		({ input, expected }) => {
			console.log = jest.fn()

			expect(checkTextColor(input)).toBe(expected)

			if (!expected) {
				expect(console.log.mock.calls.length).toBe(1)

				expect(console.log.mock.calls[0][0]).toBe(
					`Davatar: ${INVALID_TEXT_COLOR}`
				)
			} else {
				expect(console.log.mock.calls.length).toBe(0)
			}

			console.log.mockRestore()
		}
	)
})

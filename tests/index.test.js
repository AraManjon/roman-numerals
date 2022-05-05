import { giveRomanNumber } from '../src/index'

const cases = [[10, 'X'], [1, 'I'], [5, 'V'], [50, 'L'], [2, 'II'], [3, 'III'],[6, 'VI'], [7, 'VII'], [11, 'XI'], [49, 'XLIX'], [4, 'IV'], [89, 'LXXXIX'] ]
test.each(cases)('Given %p number when givenRomanNumber is called with this should return %p', (firstArg, secondArg) => {
        // Arrange o Given
        const value = firstArg

        // Act o When
        const result = giveRomanNumber(value)
    
        // Assert o Then
        expect(result).toBe(secondArg)
})

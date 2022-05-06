import { convertToRomanNumber } from '../src/convertToRomanNumber'

const cases = [[10, 'X'], [1, 'I'], [5, 'V'], [50, 'L'], [2, 'II'], [3, 'III'],[6, 'VI'], [7, 'VII'], [11, 'XI'], [49, 'XLIX'], [4, 'IV'], [89, 'LXXXIX'] ]
test.each(cases)('Given %p number when givenRomanNumber is called with this should return %p', (firstArg, resultExpcted) => {
        // Arrange o Given
        const arabicNum = firstArg

        // Act o When
        const romanNum = convertToRomanNumber(arabicNum)
    
        // Assert o Then
        expect(romanNum).toBe(resultExpcted)
})

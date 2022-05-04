import { giveRomanNumber } from '../src/index'

test('Given a 10 number when givenRomanNumber is called with this should return X', () => {

    // Arrange o Given
    const value = 10

    // Act o When
    const result = giveRomanNumber(value)

    // Assert o Then
    expect(result).toBe('X')
})
import { giveRomanNumber } from '../src/index'

test('Given a 10 number when givenRomanNumber is called with this should return X', () => {

    // Arrange o Given
    const value = 10

    // Act o When
    const result = giveRomanNumber(value)

    // Assert o Then
    expect(result).toBe('X')
})

test('Given a 1 number when givenRomanNumber is called with this should return I', () => {

    const value = 1

    const result = giveRomanNumber(value)

    expect(result).toBe('I')
})

test('Given a 5 number when givenRomanNumber is called with this should return V', () => {
    const value = 5

    const result = giveRomanNumber(value)

    expect(result).toBe('V')
})

test('Given a 50 number when givenRomanNumber is called with this should return L', () => {
    const value = 50

    const result = giveRomanNumber(value)

    expect(result).toBe('L')
})
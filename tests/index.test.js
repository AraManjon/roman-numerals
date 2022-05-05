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

test('Given a 2 number when givenRomanNumber is called with this should return II', () => {
    const value = 2

    const result = giveRomanNumber(value)

    expect(result).toBe('II')
})

test('Given a 3 number when givenRomanNumber is called with this should return III', () => {
    const value = 3

    const result = giveRomanNumber(value)

    expect(result).toBe('III')
})
test('Given a 6 number when givenRomanNumber is called with this should return VI', () => {
    const value = 6

    const result = giveRomanNumber(value)

    expect(result).toBe('VI')
})
test('Given a 7 number when givenRomanNumber is called with this should return VII', () => {
    const value = 7

    const result = giveRomanNumber(value)

    expect(result).toBe('VII')
})

test('Given a 8 number when givenRomanNumber is called with this should reeturn VIII', ()=> {
    const value = 8

    const result = giveRomanNumber(value)

    expect(result).toBe('VIII')
})

test('Given a 11 number when givenRomanNumber is called with this should return XI', () => {
    const value = 11

    const result = giveRomanNumber(value)

    expect(result).toBe('XI')
})
test('Given a 12 number when givenRomanNumber is called with this should return XII', () => {
    const value = 12

    const result = giveRomanNumber(value)

    expect(result).toBe('XII')
})

test('Given a 13 number when givenRomanNumber is called with this should reeturn XIII', ()=> {
    const value = 13

    const result = giveRomanNumber(value)

    expect(result).toBe('XIII')
})
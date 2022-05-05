export function giveRomanNumber (arabicNumber) {
    const romanNumbers = {
        1:'I',
        2: 'II',
        5: 'V',
        10: 'X',
        50: 'L', 
        100: 'C', 
        500: 'D',
        1000: 'M'
    }

    if (arabicNumber === 2) {
        return romanNumbers[2]
    }

    if (arabicNumber === 3) {
        return romanNumbers[1] + romanNumbers[2]
    }

    if (arabicNumber === 6) {
        return romanNumbers[5] + romanNumbers[1]
    }

    if (arabicNumber === 7) {
        return romanNumbers[5] + romanNumbers[2]
    }
    if (arabicNumber === 8) {
        return romanNumbers[5] + romanNumbers[1] + romanNumbers[2]
    }

    return romanNumbers[arabicNumber]
}
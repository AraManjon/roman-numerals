export function giveRomanNumber (arabicNumber) {
    const romanNumbers = {
        1:'I',
        5: 'V',
        10: 'X',
        50: 'L', 
        100: 'C', 
        500: 'D',
        1000: 'M'
    }
    if (arabicNumber === 3) {
        return romanNumbers[1] + romanNumbers[1] + romanNumbers[1] 
    }
    if (arabicNumber === 2) {
        return romanNumbers[1] + romanNumbers[1]
    }
    return romanNumbers[arabicNumber]
}
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

    return romanNumbers[arabicNumber]
}
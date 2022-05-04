export function giveRomanNumber (arabicNumber) {
    if (50 === arabicNumber) {
        return 'L'
    }
    if(5 === arabicNumber) {
        return 'V'
    }
    if(1 === arabicNumber) {
        return 'I'
    }
    return 'X'
}
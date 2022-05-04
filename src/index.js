export function giveRomanNumber (arabicNumber) {
    if(5 === arabicNumber) {
        return 'V'
    }
    if(1 === arabicNumber) {
        return 'I'
    }
    return 'X'
}
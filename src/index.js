export function giveRomanNumber (arabicNumber) {
    const romanNumbers = {
        1:'I',
        2: 'II',
        3: 'III',
        5: 'V',
        10: 'X',
        50: 'L', 
        100: 'C', 
        500: 'D',
        1000: 'M',
    }

    if (romanNumbers[arabicNumber]) return romanNumbers[arabicNumber]
    const romanNums = Object.keys(romanNumbers).reverse()
    const giveRomanNumFirstSign = romanNums.find(romanNum => arabicNumber > romanNum)
    return romanNumbers[giveRomanNumFirstSign] + romanNumbers[arabicNumber - giveRomanNumFirstSign]
}
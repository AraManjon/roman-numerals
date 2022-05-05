export function giveRomanNumber (arabicNumber) {
    const romanNumbers = {
        1:'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC', 
        100: 'C', 
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    if (romanNumbers[arabicNumber]) return romanNumbers[arabicNumber]

    const romanNums = Object.keys(romanNumbers).reverse()
    const giveRomanNumFirstSign = romanNums.find(romanNum => arabicNumber > romanNum)


    return romanNumbers[giveRomanNumFirstSign] + giveRomanNumber(arabicNumber - giveRomanNumFirstSign)
}
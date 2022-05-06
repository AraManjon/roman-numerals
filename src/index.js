import { ROMAN_SYMBOL } from './romanSymbol';

const findFirstRomaNum = (arabicNumber) => {
	const romanNums = Object.keys(ROMAN_SYMBOL).reverse();
    return romanNums.find((romanNum) => arabicNumber > romanNum);
}

export function convertToRomanNumber(arabicNumber) {

	if (ROMAN_SYMBOL[arabicNumber]) return ROMAN_SYMBOL[arabicNumber];

	const firstRomanNum = findFirstRomaNum(arabicNumber)

	return ROMAN_SYMBOL[firstRomanNum] + convertToRomanNumber(arabicNumber - firstRomanNum);
}

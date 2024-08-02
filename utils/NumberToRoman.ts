import { romanHash, specialCases } from '@/constants/RomanHash';

/**
 * This function converts an integer to a Roman numeral.
 *
 * @param num number
 * @returns string
 */
function NumberToRoman(num: number): string {
  let roman = '';

  const combinedHash = { ...specialCases, ...romanHash };
  const sortedEntries = Object.entries(combinedHash).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sortedEntries) {
    while (num >= value) {
      roman += key;
      num -= value;
    }
  }

  return roman;
}

export default NumberToRoman;

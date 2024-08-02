import { romanHash } from '@/constants/RomanHash';

/**
 * This function converts an integer to a Roman numeral.
 *
 * @param num number
 * @returns string
 */
function NumberToRoman(num: number): string {
  let roman = '';

  const values = Object.values(romanHash).sort((a, b) => b - a);
  const numerals = Object.keys(romanHash).sort((a, b) => romanHash[b] - romanHash[a]);

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += numerals[i];
      num -= values[i];
    }
  }

  return roman;
}

export default NumberToRoman;

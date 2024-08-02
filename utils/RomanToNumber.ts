import { romanHash, specialCases } from '@/constants/RomanHash';

/**
 * This function converts a Roman numeral to an integer.
 *
 * @param roman string
 * @returns number
 */
function RomanToNumber(roman: string): string {
  let attemp = 0;

  for (let i = 0; i < roman.length; i++) {
    const twoChar = roman[i] + (roman[i + 1] || '');
    if (specialCases[twoChar] !== undefined) {
      attemp += specialCases[twoChar];
      i++;
    } else {
      const value = romanHash[roman[i] as keyof typeof romanHash];
      if (value !== undefined) {
        attemp += value;
      } else {
        throw new Error(`Número invalído`);
      }
    }
  }

  return attemp.toString();
}

export default RomanToNumber;

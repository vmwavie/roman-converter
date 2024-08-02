import NumberToRoman from '@/utils/NumberToRoman';

describe('NumberToRoman', () => {
  it('should convert 1 to I', () => {
    expect(NumberToRoman(1)).toBe('I');
  });

  it('should convert 4 to IV', () => {
    expect(NumberToRoman(4)).toBe('IV');
  });

  it('should convert 9 to IX', () => {
    expect(NumberToRoman(9)).toBe('IX');
  });

  it('should convert 58 to LVIII', () => {
    expect(NumberToRoman(58)).toBe('LVIII');
  });

  it('should convert 1994 to MCMXCIV', () => {
    expect(NumberToRoman(1994)).toBe('MCMXCIV');
  });
});

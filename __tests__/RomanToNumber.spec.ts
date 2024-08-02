import RomanToNumber from '@/utils/RomanToNumber';

describe('RomanToNumber', () => {
  it('should convert I to 1', () => {
    expect(RomanToNumber('I')).toBe('1');
  });

  it('should convert IV to 4', () => {
    expect(RomanToNumber('IV')).toBe('4');
  });

  it('should convert IX to 9', () => {
    expect(RomanToNumber('IX')).toBe('9');
  });

  it('should convert LVIII to 58', () => {
    expect(RomanToNumber('LVIII')).toBe('58');
  });

  it('should convert MCMXCIV to 1994', () => {
    expect(RomanToNumber('MCMXCIV')).toBe('1994');
  });
});

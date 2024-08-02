import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  InputContainer,
  StyledTextInputContainer,
  Result,
  StyledInputLabel,
  StyledTextInput,
  Title,
  ErrorText,
} from '@/style/home';
import REGEX_VALIDATIONS from '@/constants/RegexValidations';
import NumberToRoman from '@/utils/NumberToRoman';
import RomanToNumber from '@/utils/RomanToNumber';

export default function HomeScreen() {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleConverter(input: string) {
    let newResult: string = '';

    try {
      setResult('');

      const haveCharacter = input.match(REGEX_VALIDATIONS.validRoman);
      const haveNumber = input.match(REGEX_VALIDATIONS.number);

      if ((haveCharacter && haveNumber) || (!haveCharacter && !haveNumber)) {
        setErrorMessage(t('errorMessage'));
        return;
      }

      setErrorMessage('');

      if (haveNumber && !haveCharacter) {
        newResult = NumberToRoman(Number(input));
      } else if (haveCharacter && !haveNumber) {
        newResult = RomanToNumber(input.toUpperCase());
      }

      if (newResult.length >= 100) {
        setErrorMessage(t('conversionError'));
        return;
      }

      setResult(newResult);
    } catch (error) {
      alert(t('unexpectedError'));
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>{t('title')}</Title>
      <InputContainer>
        <StyledInputLabel>{t('inputLabel')}</StyledInputLabel>
        <StyledTextInputContainer>
          <StyledTextInput
            value={text}
            onChangeText={value => {
              setText(value);
              handleConverter(value);
            }}
            placeholder={t('placeholder')}
            placeholderTextColor="#888"
          />
        </StyledTextInputContainer>
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <Result>{result}</Result>
    </Container>
  );
}

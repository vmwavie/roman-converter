import { useState } from 'react';
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
        setErrorMessage(
          'Você deve digitar um número romano ou número decimal, para a conversão do mesmo.'
        );
        return;
      }

      setErrorMessage('');

      if (haveNumber && !haveCharacter) {
        newResult = NumberToRoman(Number(input));
      } else if (haveCharacter && !haveNumber) {
        newResult = RomanToNumber(input.toUpperCase());
      }

      if (newResult.length >= 100) {
        setErrorMessage('O número convertido excede o limite de 100 caracteres.');
        return;
      }

      setResult(newResult);
    } catch (error) {
      alert('Ocorreu um erro inesperado. Tente novamente');
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Conversor de números romanos</Title>
      <InputContainer>
        <StyledInputLabel>Digite o número para conversão: </StyledInputLabel>
        <StyledTextInputContainer>
          <StyledTextInput
            value={text}
            onChangeText={value => {
              setText(value);
              handleConverter(value);
            }}
            placeholder="Ex: MMXX ou 10"
            placeholderTextColor="#888"
          />
        </StyledTextInputContainer>
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <Result>{result}</Result>
    </Container>
  );
}

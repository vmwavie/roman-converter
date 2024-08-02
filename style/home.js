import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: 60px;
  align-items: center;
`;

const Title = styled.Text`
  margin-bottom: 50px;
  font-size: 18px;
`;

const InputContainer = styled.View``;

const StyledTextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

const StyledInputLabel = styled.Text`
  margin-bottom: 7px;
`;

const StyledTextInput = styled(TextInput)`
  height: 40px;
  border-color: #37474f;
  border-width: 2px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
`;

const ErrorText = styled.Text`
  color: red;
  width: 80%;
  margin-top: 7px;
`;

const Result = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  width: 80%;
`;

export {
  Container,
  Title,
  InputContainer,
  StyledInputLabel,
  StyledTextInputContainer,
  StyledTextInput,
  ErrorText,
  Result,
};

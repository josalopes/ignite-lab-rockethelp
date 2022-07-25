import { VStack, HStack, Text } from 'native-base';


import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {


  return (
    <VStack flex={1} p={6} bg='gray.600'>
      <Header title='Nova solicitação' />

      <Input
        placeholder='Número do patrimônio'
        mt={5}
        keyboardType='number-pad'
      />

      <Input
        flex={1}
        mt={5}
        multiline
        textAlignVertical='top'
        placeholder='Descrição do problema'
      />

      <Button
        title='Cadastrar'
        mt={5}
      />
    </VStack>
  );
}
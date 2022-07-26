import { useState } from 'react';
import { Heading, VStack, Icon, useTheme, KeyboardAvoidingView } from 'native-base';

import { Envelope, Key } from 'phosphor-react-native';
import { Platform } from 'react-native';

import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  function handleSignIn() {
    console.log(name, password);
  }

  return (
      <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo />

        <Heading color="gray.100" fontSize='xl' mt={20} mb={6}>
          Acesse sua conta
        </Heading>

        <Input
          mb={4}
          placeholder='E-mail'
          InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/> } ml={4} />}
          keyboardType='email-address'
          onChangeText={setName}
          />
        <Input
          mb={8}
          placeholder='Senha'
          InputLeftElement={<Icon as={<Key color={colors.gray[300]} /> } ml={4} />}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title='Entrar' w='full' onPress={handleSignIn}/>
      </VStack>

  )
}
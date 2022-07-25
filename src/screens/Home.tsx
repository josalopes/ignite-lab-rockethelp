import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';


import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Call, CallProps } from '../components/Call';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [calls, setCalls] = useState<CallProps[]>([
    {
    id: '1',
    patrimony: '123456',
    when: '18/07/2022 às 10:00',
    status: 'open'
    },
    {
    id: '2',
    patrimony: '123456',
    when: '18/07/2022 às 10:00',
    status: 'open'
    },
    {
    id: '3',
    patrimony: '123456',
    when: '18/07/2022 às 10:00',
    status: 'open'
    },
  ]);

  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleNewCall() {
      navigation.navigate('new');
  }

  function handleOpenDetails(callId: string) {
    navigation.navigate('details', { callId })
  }

  return (
    <VStack flex={1} pb={6} bg='gray.700'>
      <HStack
        w='full'
        justifyContent='space-between'
        alignItems='center'
        bg='gray.600'
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
         icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w='full'
          justifyContent='space-between'
          alignItems='center'
          mt={8}
          mb={4}
          // px={6}
          >
          <Heading color={colors.gray[100]}>
            Solicitações
          </Heading>
          <Text color={colors.gray[200]}>
            {calls.length}
          </Text>
        </HStack>
        <HStack space={3} mb={8} mt={8} >
          <Filter
            type='open'
            title='em andamento'
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
            />
          <Filter
            type='closed'
            title='finalizados'
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={calls}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Call data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color='gray.300' fontSize='xl' mt={6} textAlign='center'>
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title='Nova solicitação' onPress={handleNewCall}/>
      </VStack>
    </VStack>
  );
}

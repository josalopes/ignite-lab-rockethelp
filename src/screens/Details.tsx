import { VStack, Text } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Header } from '../components/Header';


type RouteParams = {
  callId: string;
}

export function Details() {
  const route = useRoute();
  const { callId } = route.params as RouteParams;

  return (
    <VStack flex={1} bg='gray.700' pt={6}>
      <Header title='Solicitação' />
      <Text color='white'>
        {callId}
      </Text>
    </VStack>
  );
}
import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
}

export function Header({ title, ...rest }: Props) {
  const navigation = useNavigation();
  const { colors } = useTheme()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      w='full'
      justifyContent='center'
      alignItems='center'
      bg='gray.600'
      pt={6}
      pb={6}
      {...rest}
    >

      <IconButton
        onPress={handleGoBack}
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
      />

      <Heading color='gray.100' textAlign='center' fontSize='lg' flex={1} ml={-6}>
        {title}
      </Heading>

    </HStack>
  );
}
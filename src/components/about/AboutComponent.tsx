import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  ScaleFade,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languagecContext';
export const AboutComponent = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <Container maxW='container.xl' mb={10}>
      <ScaleFade initialScale={0.9} in={true}>
        <Flex
          direction={['column', 'column', 'column', 'row']}
          justifyContent='space-between'
          alignItems='center'
          minHeight='80vh'
        >
          <Stack mb={10} w='90%'>
            <Heading
              as='h1'
              fontWeight={800}
              bgGradient='linear(to-l, gray.800, brand.700)'
              bgClip='text'
            >
              Michael Rodriguez
            </Heading>
            <Text>{texts.aboutText}</Text>
          </Stack>
          <Box minW='30%' w={['45%', '50%', '55%']} ml={{ md: '20' }}>
            <Image
              src='https://github.com/xMichaelRodriguez/images/blob/main/killhua_.png?raw=true'
              alt='hello image'
            />
          </Box>
        </Flex>
      </ScaleFade>
    </Container>
  );
};

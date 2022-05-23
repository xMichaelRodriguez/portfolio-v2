import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ScaleFade,
  Stack,
  Tag,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languagecContext';

import hellow from '../../img/undraw_hello_re_3evm.svg';
import { LanguagesAndTools } from '../languages/LanguagesAndTools';

export const HomeScreen = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <>
      <Container maxW='container.xl' mb={90}>
        <ScaleFade initialScale={0.9} in={true}>
          <Flex
            direction={['column', 'column', 'column', 'row']}
            justifyContent='space-between'
            alignItems='center'
            minHeight='90vh'
          >
            <Stack mb={2}>
              <Heading
                as='h1'
                size='3xl'
                fontWeight={800}
                bgGradient='linear(to-l, gray.800, brand.700)'
                bgClip='text'
              >
                {texts.headerHome}
              </Heading>

              <Box pt={3}>
                <Tag
                  p={2}
                  bg='brand.500'
                  color='gray.100'
                  bgGradient='linear(to-l, gray.800, brand.700)'
                >
                  {texts.homeCite}
                </Tag>
              </Box>
            </Stack>
            <Box>
              <Image
                src='https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif'
                alt='hello image'
              />
            </Box>
          </Flex>
        </ScaleFade>
        <Box>
          <LanguagesAndTools />
        </Box>
      </Container>
    </>
  );
};

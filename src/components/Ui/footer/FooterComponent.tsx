import { Box, Center, Icon, Stack, Text } from '@chakra-ui/react';

import { ImGithub } from 'react-icons/im';

export const FooterComponent = () => {
  const handleToMiGithubProfile = () => {
    window.open('https://github.com/xmichaelrodriguez', '_blank');
  };
  return (
    <Stack>
      <Center bg='gray.200' p={4}>
        <Box m='auto'>
          <Text fontWeight='bold' colorScheme='#6C63FF'>
            Scott.dev{' '}
          </Text>

          <Text>copyright all rights reserved ©</Text>
        </Box>
        <Box m='auto' onClick={handleToMiGithubProfile}>
          <Icon
            as={ImGithub}
            _hover={{
              cursor: 'pointer',
              color: 'gray.500',
            }}
            boxSize={6}
            color='gray.600'
          />
        </Box>
      </Center>
    </Stack>
  );
};

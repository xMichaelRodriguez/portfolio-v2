import { Box, ChakraProps, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const Logo = (props: ChakraProps) => {
  const history = useHistory();

  return (
    <Box {...props} cursor='pointer' onClick={() => history.push('/')}>
      <Heading as='h3' fontSize='lg' fontWeight='extrabold'>
        {'<Scott.dev>'}
      </Heading>
    </Box>
  );
};

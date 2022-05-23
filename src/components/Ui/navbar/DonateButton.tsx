import { Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaPaypal } from 'react-icons/fa';

export const DonateButton = () => {
  return (
    <Box p={2}>
      <Button
        bgGradient='linear(to-t,#AA9DEB,#9484E5)'
        textColor={'gray.100'}
        _hover={{
          bgGradient: 'linear(to-t,#84A6E5,#9484E5)',
          transform: 'scale(0.93)',
        }}
        _active={{ bgGradient: 'linear(to-t,#AA9DEB,#9484E5)' }}
        _focus={{ bgGradient: 'linear(to-t,#AA9DEB,#9484E5)' }}
      >
        Donate <Icon as={FaPaypal} />
      </Button>
    </Box>
  );
};

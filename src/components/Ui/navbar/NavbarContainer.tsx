import { Flex } from '@chakra-ui/react';
import React from 'react';
interface Iprops {
  children: React.ReactNode;
}
export const NavbarContainer = ({ children, ...props }: Iprops) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify={[
        'space-between',
        'space-around',
        'space-around',
        'space-around',
      ]}
      wrap='wrap'
      w='95%'
      m='auto'
      mb={50}
      p={3}
      borderBottomRadius={10}
      bg='gray.200'
      color='gray.600'
      shadow='sm'
      {...props}
    >
      {children}
    </Flex>
  );
};

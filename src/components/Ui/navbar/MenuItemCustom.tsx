import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
interface Iprops {
  children: React.ReactNode;

  isLast?: any;
  to: string;
}
export const MenuItemCustom = ({
  children,
  isLast,
  to = '/',
  ...rest
}: Iprops) => {
  return (
    <Link to={to}>
      <Text
        display='block'
        p={3}
        fontWeight='medium'
        _hover={{
          bgGradient: 'linear(to-l, gray.800, brand.700)',
          bgClip: 'text',
          fontWeight: 'medium',
        }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

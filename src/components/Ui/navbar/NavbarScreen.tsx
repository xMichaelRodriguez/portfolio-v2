import { Box, ChakraProps, ScaleFade } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { MenuLinks } from './MenuLinks';
import { MenuToggle } from './MenuToggle';
import { NavbarContainer } from './NavbarContainer';
export const NavbarScreen = (props: ChakraProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo w='50%' />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <ScaleFade initialScale={0.9} in={true}>
          <MenuLinks />
        </ScaleFade>
      </Box>
    </NavbarContainer>
  );
};

import { Box, Icon } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';
import { MdCloseFullscreen } from 'react-icons/md';
import { RiMenu4Fill } from 'react-icons/ri';
interface Iprops {
  toggle: MouseEventHandler;
  isOpen: boolean;
}
export const MenuToggle = ({ toggle, isOpen }: Iprops): JSX.Element => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <Icon as={MdCloseFullscreen} boxSize={5} />
      ) : (
        <Icon as={RiMenu4Fill} boxSize={6} />
      )}
    </Box>
  );
};

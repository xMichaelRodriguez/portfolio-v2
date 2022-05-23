import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { LanguageContext } from '../../../context/languagecContext';
import { MenuItemCustom } from './MenuItemCustom';

export const MenuLinks = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);

  const handleSpanish = () => {
    console.log('hola');
    return handleLanguage('es');
  };
  const handleEnglish = () => {
    console.log('salu');
    handleLanguage('en');
  };
  return (
    <Stack
      align='center'
      justify={['center', 'space-between', 'space-around', 'space-around']}
      direction={['column', 'column', 'row', 'row']}
      pt={[4, 4, 4, 0]}
    >
      <MenuItemCustom to='/'>{texts.menuHome}</MenuItemCustom>

      <MenuItemCustom to='/about'>{texts.menuAbout}</MenuItemCustom>

      <MenuItemCustom to='/projects'>{texts.menuProjects}</MenuItemCustom>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='1px'
          _hover={{ color: 'brand.400' }}
          _expanded={{ color: 'brand.400' }}
        >
          {texts.titleToggleLanguage} <Icon as={FaChevronCircleDown} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleSpanish}>
            <Icon as={GrLanguage} m='0.5' marginRight='5' />{' '}
            {texts.spanishToggle}
          </MenuItem>
          <MenuItem onClick={handleEnglish}>
            <Icon as={GrLanguage} m='0.5' marginRight='5' />{' '}
            {texts.englishToggle}
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

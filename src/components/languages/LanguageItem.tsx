import { Avatar, Tooltip } from '@chakra-ui/react';

interface IProps {
  id: number;
  name: string;
  src: string;
}

export const LanguageItem = ({ id, name, src }: IProps) => {
  return (
    <Tooltip label={name}>
      <Avatar
        transition='0.3s'
        _hover={{
          transform: 'translateY(-3px)',
          boxShadow: 'lg ',
        }}
        name='id'
        src={src}
        size='lg'
      />
    </Tooltip>
  );
};

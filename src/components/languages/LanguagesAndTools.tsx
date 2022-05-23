import {
  Container,
  Divider,
  Heading,
  ScaleFade,
  SimpleGrid,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languagecContext';
import { LanguageItem } from './LanguageItem';
type TIcons = {
  id: number;
  name: string;
  src: string;
};
const icons: TIcons[] = [
  {
    id: 1,
    name: 'TypeScript',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
  },
  {
    id: 2,
    name: 'React.js',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
  },
  {
    id: 3,
    name: 'Node.js',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
  },
  {
    id: 4,
    name: 'MySQL',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png',
  },
  {
    id: 5,
    name: 'PostgreSQL',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png',
  },
  {
    id: 6,
    name: 'MongoDB',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
  },
  {
    id: 7,
    name: 'Firebase',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png',
  },
  {
    id: 8,
    name: 'Git',
    src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
  },
];
export const LanguagesAndTools = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <Container maxW='container.xl' mb={90}>
      <ScaleFade initialScale={0.9} in={true}>
        <Heading
          marginBottom='3'
          fontWeight={800}
          bgGradient='linear(to-l, gray.800, brand.700)'
          bgClip='text'
        >
          {texts.languagesAndTools}
        </Heading>
        <Divider marginBottom={9} variant='dashed' />
        <SimpleGrid
          justifyItems='center'
          minChildWidth='250px'
          columns={3}
          spacing={10}
        >
          {icons.map((icon: TIcons) => (
            <LanguageItem key={icon.id} {...icon} />
          ))}
        </SimpleGrid>
      </ScaleFade>
    </Container>
  );
};

import {
    Box,
    Text,
    Grid,
    GridItem,
    Container,
    Stack,
    Link,
} from '@chakra-ui/react';
import theme from '../theme'
import { 
    BsFillPersonFill,
 } from 'react-icons/bs';
import {
  FaSearch,
  FaList,
  FaHome,
  FaUser
} from 'react-icons/fa';


const footerStyle = {
    bottom:'0',
    right:'0',
    width:'100%'
}

const Footer = () => {
  const experience = 10  
  return (
    <Box bgColor={theme.colors.main} color={'gray.700'} style={{...footerStyle}} pos='absolute'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        >
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}><FaHome size={'2rem'} style={{margin:'0 auto'}} />ホーム</Link>
          <Link href={'#'}><FaUser size={'2rem'} style={{margin:'0 auto'}} />マイページ</Link>
          <Link href={'#'}><FaList size={'2rem'} style={{margin:'0 auto'}} />タスク</Link>
          <Link href={'#'}><FaSearch size={'2rem'} style={{margin:'0 auto'}} />検索</Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

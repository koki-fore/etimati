import {
    Box,
    Text,
    Grid,
    Button,
    GridItem,
    HStack,
    VStack,
} from '@chakra-ui/react';
import theme from '../theme'
import {
    FaSearch,
    FaList,
    FaHome,
    FaUser,
    FaCommentMedical
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const footerStyle = {
    bottom:'0',
    right:'0',
    width:'100%'
}

const Footer = () => {
  const navigate = useNavigate()
  const experience = 10  
  return (
    <Box bgColor={theme.colors.main} style={{...footerStyle}} pos='fixed' align={'center'}>
      <Grid  templateColumns='repeat(8, 1fr)'>
        <GridItem as='button' height={'65px'} _hover={{bg: theme.colors.sub}} colSpan={2} onClick={() => navigate('/mypage')}><FaUser size={'2rem'} style={{margin:'0 auto'}} />マイページ</GridItem>
        <GridItem as='button' height={'65px'} _hover={{bg: theme.colors.sub}} colSpan={2} onClick={() => navigate('/')}><FaHome size={'2rem'} style={{margin:'0 auto'}} />ホーム</GridItem>
        <GridItem as='button' height={'65px'} _hover={{bg: theme.colors.sub}} colSpan={2} onClick={() => navigate('/taskList')}><FaList size={'2rem'} style={{margin:'0 auto'}} />チャレンジ</GridItem>
        <GridItem as='button' height={'65px'} _hover={{bg: theme.colors.sub}} colSpan={2} onClick={() => navigate('/postPage')}><FaCommentMedical size={'2rem'} style={{margin:'0 auto',transform:'scale(-1,1)'}} />投稿</GridItem>
      </Grid>
    </Box>
  );
}

export default Footer;

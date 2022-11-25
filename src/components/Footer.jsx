import {
    Box,
    Text,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import theme from '../theme'
import { 
    BsFillPersonFill,
 } from 'react-icons/bs';
import {
    FaSearch,
    FaList,
    FaHome
} from 'react-icons/fa';


const footerStyle = {
    bottom:'0',
    width:'100%'
}

const Footer = () => {
    const experience = 10  
    return (
        <Box bgColor={theme.colors.main} style={{...footerStyle}} pos='absolute'>
            <Grid  templateColumns='repeat(8, 1fr)'>
                <GridItem colSpan={2}><FaHome size={'2rem'} style={{margin:'0 auto'}} />ホーム</GridItem>
                <GridItem colSpan={2}><BsFillPersonFill size={'2rem'} style={{margin:'0 auto'}} />マイページ</GridItem>
                <GridItem colSpan={2}><FaList size={'2rem'} style={{margin:'0 auto'}} />タスク</GridItem>
                <GridItem colSpan={2}><FaSearch size={'2rem'} style={{margin:'0 auto'}} />検索</GridItem>
            </Grid>
        </Box>
    );
}

export default Footer;

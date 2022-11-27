import { 
  useState,
} from 'react'
import {
    Box,
    Text,
    Grid,
    GridItem,
    Progress,
    CircularProgress,
    CircularProgressLabel
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostButton from '../components/PostButton';
import theme from '../theme'



const perLevelup=20;
const avatarStyle = {

}

function Mypage() {
  const avatar=reactLogo;
  const name='名前';
  const level=1;
  const totalExperience=10;
  /*バーの使えそうな色
  "blackAlpha" | "gray" |"orange"|  "linkedin"  | "twitter" 
  */
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header/>
      <Text fontSize='4xl'>{name}</Text>
      <Box style={{padding:'10px',height:'40vh'}}>
        <Image src={reactLogo} alt='Avatar' style={{margin: '0 auto', border:'3px solid'}} boxSize={'100%'} />
      </Box>
      <Box style={{width:'80%', margin:'0 auto'}} >
        <CircularProgress value={totalExperience%perLevelup} max={perLevelup} color={theme.colors.main} size={'100%'} >
          <CircularProgressLabel>
          <Text fontSize='4xl'>Lv.{level}</Text>
            <Text style={{padding:'0.4rem'}} fontSize='2xl' >
              総経験値 : {totalExperience%perLevelup},<br/>
              あと : {perLevelup-(totalExperience%perLevelup)}
            </Text>
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
      <PostButton/>
      <Footer/>
    </Box>
  )
}

export default Mypage;

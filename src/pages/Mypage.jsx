import { 
  useState,
} from 'react'
import {
    Box,
    Text,
    Grid,
    GridItem,
    Progress,
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
    <Box style={{textAlign: 'center'}}>
      <Box style={{padding:'10px'}}>
        <Image src={reactLogo} alt='Avatar' style={{margin: '0 auto', border:'3px solid'}} boxSize={'30vw'} />
      </Box>
      <Text fontSize='4xl'>{name}</Text>
      <Text fontSize='4xl'>Lv.{level}</Text>
      <Box style={{width:'80%', margin:'0 auto'}} >
        <Progress value={(totalExperience%perLevelup)} max={perLevelup} colorScheme={'twitter'} />
        総経験値 : {totalExperience%perLevelup},
        Lv.UPまで : {perLevelup-(totalExperience%perLevelup)}
      </Box>
      <Box style={{borderTop:'3px solid',borderBottom:'3px solid',width:'90%',margin:'10px auto'}}>
        <Text fontSize='2xl'>過去の投稿</Text>
      </Box>
      <PostButton/>
      <Footer/>
    </Box>
  )
}

export default Mypage;

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
    CircularProgressLabel,
    Textarea,
    Heading,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostButton from '../components/PostButton';
import theme from '../theme'


const PostPage = () => {
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
      <Heading as='h3' size='lg' style={{margin:'0.7rem'}}>
        投稿メッセージ
      </Heading>
      <Textarea resize={'none'} style={{height:'30vh',width:'80vw'}} />
      <Heading as='h3' size='lg' style={{margin:'0.7rem'}}>
        達成タスク
      </Heading>
      <Popover>
        <PopoverTrigger>
          <Button>選択する</Button>
        </PopoverTrigger>
        <PopoverContent>
        <PopoverHeader>報告したいタスクを選択してください</PopoverHeader>
          <PopoverBody>ここに一覧を表示する</PopoverBody>
        </PopoverContent>
      </Popover>
      <Heading as='h4' size='md' style={{margin:'0.7rem'}}>
        選択しているタスク
      </Heading>
      <Box style={{margin:'0.7rem'}}>
        <Button>送信</Button>
      </Box>
      
      <Footer/>
    </Box>
  )
}

export default PostPage;

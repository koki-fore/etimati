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

function TaskList() {
  const avatar=reactLogo;
  const name='名前';
  const level=1;
  const totalExperience=10;
  const todoContents = [
    {
      id:1,
      status:true,
      content:'水2L',
      experience:6,
    },
    {
      id:2,
      status:false,
      content:'枕元にスリッパ',
      experience:6,
    }
  ]
  /*バーの使えそうな色
  "blackAlpha" | "gray" |"orange"|  "linkedin"  | "twitter" 
  */
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header/>
      {todoContents.map((todo) => {
        return (
          <Todo 
            key={todo.id} 
            status={todo.status} 
            content={todo.content} 
            experience={todo.experience} />
        );
      })}
      <PostButton/>
      <Footer/>
    </Box>
  )
}

export default TaskList;

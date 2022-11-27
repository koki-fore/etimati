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
import theme from '../theme';
import Todo from '../components/Todo'


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
      contentReason:'水がないと死ぬ',
      experience:6,
    },
    {
      id:2,
      status:false,
      content:'枕元にスリッパ',
      contentReason:'窓などが割れてガラスの破片が散らばるため',
      experience:6,
    }
  ]
  /*バーの使えそうな色
  "blackAlpha" | "gray" |"orange"|  "linkedin"  | "twitter" 
  */
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header/>
      <Grid templateColumns='repeat(6, 1fr)'>
        <GridItem colSpan={1}>達成</GridItem>
        <GridItem colSpan={3}>内容</GridItem>
        <GridItem colSpan={1}>経験値</GridItem>
        <GridItem colSpan={1}>報告</GridItem>
      </Grid>
      {todoContents.map((todo) => {
        return (
          <Todo 
            key={todo.id} 
            status={todo.status} 
            content={todo.content} 
            contentReason={todo.contentReason}
            experience={todo.experience} />
        );
      })}
      <PostButton/>
      <Footer/>
    </Box>
  )
}

export default TaskList;

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
import Todo from '../components/Todo';
import allChallenges from '../assets/challenges.json';
import MakeListOfAccomplishments from '../MakeListOfAccomplishments';


const perLevelup=20;
const avatarStyle = {

}

const TaskList = () => {
  const name='名前';
  const level=1;
  const totalExperience=10;
  const todoContents = allChallenges;
  const achievements = [
    {
        "title": "スリッパを履くようにする",
        "text": "災害が発生すると、割れた窓ガラスが部屋の中に散乱したり、土砂などが入り込んでしまったりすることがあります。そういった状況を素足や靴下などで歩くのは危険です。防災スリッパという頑丈で足元を守ってくれる商品もありますので是非一度ご覧ください。",
        "experience_point": 50,
        "id": 2
    }
  ];
  const ChallengesList=MakeListOfAccomplishments(todoContents,achievements,'status');
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header/>
      <Grid templateColumns='repeat(6, 1fr)'>
        <GridItem colSpan={1}>達成</GridItem>
        <GridItem colSpan={3}>内容</GridItem>
        <GridItem colSpan={1}>経験値</GridItem>
        <GridItem colSpan={1}>報告</GridItem>
      </Grid>
      {ChallengesList.map((todo) => {
        return (
          <Todo 
            key={todo.id} 
            status={todo.status} 
            content={todo.title} 
            contentReason={todo.text}
            experience={todo.experience_point} />
        );
      })}
      <PostButton/>
      <Footer/>
    </Box>
  )
}

export default TaskList;

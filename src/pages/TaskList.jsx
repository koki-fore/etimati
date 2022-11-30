import { 
  useLayoutEffect,
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
import {onAuthStateChanged} from 'firebase/auth';
import auth from '../firebaseEnv';
import axios from 'axios';


const perLevelup=20;
const avatarStyle = {

}

const TaskList = () => {
  const name='名前';
  const level=1;
  const totalExperience=10;
  const todoContents = allChallenges;
  const [userData, setUserData] = useState();
  const [ChallengesList, setChallengesList] = useState();
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user = '+user.uid)
      axios.get('http://localhost:8080/users/me/'+user.uid)
      .then((res) => {
        console.log('userdata = '+JSON.stringify(res.data))
        console.log('challenge_completed = '+JSON.stringify(res.data.challenge_completed))
        setUserData(res.data)
        setChallengesList(MakeListOfAccomplishments(todoContents,res.data.challenge_completed,'status'));
        console.log('status = '+JSON.stringify(MakeListOfAccomplishments(todoContents,res.data.challenge_completed,'status')))
      })
      .catch((err) => {
        console.log(err)
      })})
  },[])
  if (!userData){
    return null;
  } 
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header userInfo={userData} />
      <Grid templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={1}>達成</GridItem>
        <GridItem colSpan={3}>内容</GridItem>
        <GridItem colSpan={1}>経験値</GridItem>
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

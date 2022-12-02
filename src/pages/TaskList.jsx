import { 
  useEffect,
  useState,
} from 'react'
import {
    Box,
    Text,
    Grid,
    GridItem,
    Progress,
    Heading
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../theme';
import Todo from '../components/Todo';
import allChallenges from '../assets/challenges.json';
import MakeListOfAccomplishments from '../MakeListOfAccomplishments';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebaseEnv';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react'


const avatarStyle = {

}

const TaskList = () => {
  const todoContents = allChallenges;
  const [userData, setUserData] = useState();
  const [ChallengesList, setChallengesList] = useState();
  useEffect(() => {
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
  if (!userData) return(
    <Box textAlign='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color={theme.colors.main}
        size='xl'
      />
    </Box>
  ) 
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header userInfo={userData} />
      <Grid templateColumns='repeat(31, 1fr)'>
        <GridItem colSpan={2}></GridItem>
        <GridItem colSpan={5}>
          <Heading as='h4' size='md'>経験値</Heading>
          </GridItem>
        <GridItem colSpan={24}><Heading as='h4' size='md'>内容</Heading></GridItem>

      </Grid>
      <Box style={{paddingBottom:'70px'}}>
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
      </Box>
      
      <Footer/>
    </Box>
  )
}

export default TaskList;

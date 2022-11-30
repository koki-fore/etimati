import { 
  useLayoutEffect,
  useEffect,
  useState,
} from 'react'
import {
    Box,
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
    Radio, 
    RadioGroup,
    Stack,
    Select
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostButton from '../components/PostButton';
import theme from '../theme'
import axios from 'axios';
import { useAuthContext } from '../contexts/AuthContext';
import {onAuthStateChanged} from 'firebase/auth';
import auth from '../firebaseEnv'
import allChallenges from '../assets/challenges.json';
import MakeListOfAccomplishments from '../MakeListOfAccomplishments';
import { Spinner } from '@chakra-ui/react'


const PostPage = () => {
  const avatar=reactLogo;
  const name='名前';
  const level=1;
  const totalExperience=10;
  const todoContents = allChallenges;
  //firebaseのuser情報
  //const { user } = useAuthContext();
  //BDのuser情報
  const [userData, setUserData] = useState()
  //達成したタスクを表示するためのchallengeId
  const [value, setValue] = useState('')
  const [ChallengesList, setChallengesList] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user = '+user.uid)
      axios.get('http://localhost:8080/users/me/'+user.uid)
      .then((res) => {
        console.log('userdata = '+JSON.stringify(res.data))
        console.log('challenge_completed = '+JSON.stringify(res.data.challenge_completed))
        setUserData(res.data)
        setChallengesList(MakeListOfAccomplishments(todoContents,res.data.challenge_completed,'only'));
      })
      .catch((err) => {
        console.log(err)
      })})
  },[])
  const handleSubmit = (event) => {
    event.preventDefault()
    
  }
  const handleSelect = (e) => {
    setValue(e)
    console.log('handleSelect'+e)
  }
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
  
  console.log('userData = '+JSON.stringify(userData))
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
        <Select placeholder='達成したチャレンジを選択してください' value={value} onChange={handleSelect}>
            {ChallengesList.map(challenge => (
              <option value={challenge.id} key={challenge.id} >{challenge.title}</option>
            ))}
        </Select>
      <Heading as='h4' size='md' style={{margin:'0.7rem'}}>
        選択しているタスク{value}
      </Heading>
      <Box style={{margin:'0.7rem'}}>
        <Button onClick={handleSubmit} >送信</Button>
      </Box>
      
      <Footer/>
    </Box>
  )
}

export default PostPage;

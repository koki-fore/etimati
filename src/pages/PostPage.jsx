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
import { auth } from '../firebaseEnv'
import allChallenges from '../assets/challenges.json';
import MakeListOfAccomplishments from '../MakeListOfAccomplishments';
import { Spinner } from '@chakra-ui/react'


const PostPage = () => {
  const todoContents = allChallenges;
  //BDのuser情報
  const [userData, setUserData] = useState()
  //textareaの情報
  const [text, setText] = useState()
  //達成したタスクを表示するためのchallengeId
  const [value, setValue] = useState()
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
    event.preventDefault();
    //console.log('cF= '+value);
    axios.post('http://localhost:8080/posts',{
      user_FK:userData.id,
      challenge_FK:value,
      text:text,
      picture_path_01:null,
      picture_path_02:null,
      picture_path_03:null,
      picture_path_04:null
    })
    .then((res)=>{
      console.log(res);
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err);
    })
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
      <Header userInfo={userData} />
      <form onSubmit={handleSubmit} >
        <Heading as='h3' size='lg' style={{margin:'0.7rem'}}>
          投稿メッセージ
        </Heading>
        <Textarea placeholder="コメントを記入" resize={'none'} style={{height:'30vh',width:'80vw'}} value={text} onChange={(event) => setText(event.target.value)}/>
        <Heading as='h3' size='lg' style={{margin:'0.7rem'}}>
          達成タスク
        </Heading>
          <Select value={value} onChange={(event) => setValue(event.target.value)}>
            <option value={null} key={null} >なし</option>
            {ChallengesList.map(challenge => (
              <option value={challenge.id} key={challenge.id} >{challenge.title}</option>
            ))}
          </Select>
        <Box style={{margin:'0.7rem'}}>
          <Button type='submit'  bg={theme.colors.main} color={'white'} _hover={{bg: theme.colors.sub}}>送信</Button>
        </Box>
      </form>
      <Footer/>
    </Box>
  )
}

export default PostPage;

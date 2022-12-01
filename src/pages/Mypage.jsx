import { 
  useState,
  useEffect
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
import theme from '../theme';
import palpal from '../assets/palpal_bg_p0.png';
import { Spinner } from '@chakra-ui/react';
import {onAuthStateChanged} from 'firebase/auth';
import auth from '../firebaseEnv';
import axios from 'axios';


const perLevelup=20;
const avatarStyle = {

}

function Mypage() {
  const avatar=reactLogo;
  const name='名前';
  const level=1;
  const totalExperience=10;
  const [userData, setUserData] = useState();
  /*バーの使えそうな色
  "blackAlpha" | "gray" |"orange"|  "linkedin"  | "twitter" 
  */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user = '+user.uid)
      axios.get('http://localhost:8080/users/me/'+user.uid)
      .then((res) => {
        console.log('userdata = '+JSON.stringify(res.data))
        console.log('challenge_completed = '+JSON.stringify(res.data.challenge_completed))
        setUserData(res.data)
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
      <Header userInfo={userData}/>
      <Text fontSize='4xl'>{userData.screen_name}</Text>
      <Box style={{height:'40vh'}}>
        <Image src={palpal} alt='Avatar' style={{margin: '0 auto', border:'0px solid'}} boxSize={'100%'} />
      </Box>
      <Box style={{width:'75%', margin:'0 auto'}} >
        <CircularProgress value={totalExperience%perLevelup} max={perLevelup} color={theme.colors.main} size={'100%'} >
          <CircularProgressLabel>
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

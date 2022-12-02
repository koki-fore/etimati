import { useEffect, useState } from "react"
import { Spinner } from '@chakra-ui/react'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text, IconButton } from "@chakra-ui/react"
import { AiFillLike, AiOutlineLike} from "react-icons/ai"
import { BiChat } from "react-icons/bi"
// import { useAuthContext } from '../contexts/AuthContext';
import axios from "axios";
import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import palpal from '../assets/palpal_1.png';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebaseEnv';

const Home = () => {
  const [posts, setPosts] = useState()
  const [active, setActive] = useState(false)
  const [userData, setUserData] = useState()
  const navigate = useNavigate()

  const onClickGood = () => {
    setActive(!active)
    console.log(active)
  }

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
    .then((res) => {
      console.log(res.data)
      setPosts(res.data.sort((a, b) => b.id - a.id))
    })
    .catch((err) => {
      console.log(err)
    })
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
  if (!userData || !posts) return(
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
    <Box style={{paddingBottom:'70px'}}>
      {posts?.map((post) => (
        <Card maxW='md'>
          <CardHeader>
            <Flex spacing='1'>
              <Flex flex='4' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='palpal' src={palpal} />
                <Box>
                  <Heading textAlign='left' size='sm'>{post.user.screen_name}</Heading>
                  <Text color={theme.colors.accent} textAlign='left'>{post.user.user_id}</Text>
                </Box>
              </Flex>
              <Text>{post.created_at}</Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Heading as='h4' size='md' style={{textAlign: 'center'}}>{post.challenge.title}</Heading>
            <Text style={{textAlign: 'left'}}>
              {post.text}
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src={post.picture_path_01}
            alt='Chakra UI'
          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            
          >
            <Button
              onClick={onClickGood}
              flex='1' 
              variant='ghost' 
              leftIcon={active ? <AiFillLike color={theme.colors.sub} /> : <AiOutlineLike  />}
              _hover={{bg: 'none'}}
              >
              いいね
            </Button>
            <Button 
              onClick={() => navigate('/commentList/'+post.id)}
              flex='1' 
              variant='ghost' 
              _hover={{bg: 'none'}}
              leftIcon={<BiChat />}>
              コメント
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Box>
    
  <Footer/>
  </Box>
  )
}

export default Home;

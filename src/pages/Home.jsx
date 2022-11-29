import { useLayoutEffect, useState } from "react"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiFillLike, AiOutlineLike} from "react-icons/ai"
import { BiChat, BiLike } from "react-icons/bi"
// import { useAuthContext } from '../contexts/AuthContext';
import axios from "axios";
import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
  const [posts, setPosts] = useState()
  const [usersMe, setUsersMe] = useState()
  const [active, setActive] = useState(false)

  const goodClick = () => {
    setActive(!active)
    console.log(active)
  }

  useLayoutEffect(() => {
    axios.get('http://localhost:8080/posts/')
    .then((res) => {
      console.log(res.data)
      setPosts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  if (!posts) return null
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
    <Header/>
    {posts?.map((post) => (
      <Card maxW='md'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              <Box>
                <Heading color={theme.colors.accent} size='sm'>{post.user.screen_name}</Heading>
                <Text >{post.user.user_id}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Heading as='h3' size='lg' >水を3日分準備する</Heading>
          <Text>
            {post.text}
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
        />

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button onClick={goodClick} flex='1' variant='ghost' leftIcon={active ? <AiFillLike color={theme.colors.sub} /> : <AiOutlineLike  />}>
            いいね
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
            コメント
          </Button>
        </CardFooter>
      </Card>
    ))}
  <Footer/>
  </Box>
  )
}
export default Home;

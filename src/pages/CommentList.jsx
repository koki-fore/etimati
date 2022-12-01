import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import theme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AiFillLike, AiOutlineLike} from "react-icons/ai"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text, IconButton, Textarea, Spacer, Stack, HStack } from "@chakra-ui/react"
import { useAuthContext } from "../contexts/AuthContext";
import palpal from '../assets/palpal_1.png'
import { Spinner } from '@chakra-ui/react'

const CommentList = () => {

  const { user } = useAuthContext();

  const [post, setPost] = useState();
  const [postComment, setPostComment] = useState();
  const [userData, setUserData] = useState();
  
  const {id} = useParams()

  useEffect(() => {
    axios.get('http://localhost:8080/posts/' + id)
    .then((res) => {
      setPost(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    axios.get('http://localhost:8080/users/me/'+user.uid)
    .then((res) => {
      console.log(res.data)
      setUserData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/comments/', {
      user_FK: res.data.id,
      post_FK: post.id,
      text: postComment
    })
    .then((res)=>{
      console.log(res)
      window.location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if (!post) return(
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
      <Header/>
      <Card maxW='md'>
        <CardHeader>
          <Flex spacing='1'>
            <Flex flex='4' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Palpal' src={palpal} />
              <Box>
                <Heading textAlign='left' size='sm'>{post.user.screen_name}</Heading>
                <Text color={theme.colors.accent} textAlign='left'>{post.user.user_id}</Text>
              </Box>
            </Flex>
            <Text>{post.created_at}</Text>
          </Flex>
        </CardHeader>
        <CardBody >
          <Heading as='h4' size='md' style={{textAlign: 'center'}}>{post.challenge.title}</Heading>
          <Text style={{textAlign: 'left'}}>
            {post.text}
          </Text>
        </CardBody>
        {/* <Image
          objectFit='cover'
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
        /> */}
      </Card>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} >
          <Textarea 
            type='text'
            name="postComment"
            placeholder="コメントを記入"
            isRequired={true}
            size='md'
            value={postComment}
            onChange={(e) => {setPostComment(e.target.value)}}
          />
          <Flex minWidth='max-content' alignItems='center' gridGap={2} gap='2'>
            <Box p='2'>
            </Box>
            <Spacer />
            <Button type='submit' loadingText='送信中' bg={theme.colors.main} color={'white'} _hover={{bg: theme.colors.sub}}>コメントをする</Button>
          </Flex>
        </Stack>
      </form>

      {post.comments.sort((a, b) => b.id - a.id)?.map((comment) => (
      <Card maxW='md'>
        <CardHeader>
          <Stack>
            <Flex spacing='1'>
              <Flex flex='4' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Palpal' src={palpal} />
                <Box>
                  <Heading textAlign='left' size='sm'>{comment.user.screen_name}</Heading>
                  <Text color={theme.colors.accent} textAlign='left'>{comment.user.user_id}</Text>
                </Box>
              </Flex>
              <Text>{comment.created_at}</Text>
            </Flex>
            <Text>{comment.text}</Text>
          </Stack>
        </CardHeader>
      </Card>
      ))}
      
      <Footer/>
    </Box>
  )
}
export default CommentList

import { useLayoutEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import theme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AiFillLike, AiOutlineLike} from "react-icons/ai"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text, IconButton, Textarea, Spacer, Stack, HStack } from "@chakra-ui/react"

const CommentList = () => {
  const [post, setPost] = useState()
  const [comment, setComment] = useState()
  
  const {id} = useParams()

  useLayoutEffect(() => {
    axios.get('http://localhost:8080/posts/' + id)
    .then((res) => {
      setPost(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  if (!post) return null

  return (
    <Box style={{textAlign: 'left',paddingTop:'4rem'}}>
      <Header/>
      <Card maxW='md'>
        <CardHeader>
          <Flex spacing='1'>
            <Flex flex='4' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
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
          <Text>
            {post.text}
          </Text>
        </CardBody>
        {/* <Image
          objectFit='cover'
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
        /> */}
      </Card>
      
        <Stack spacing={2} >
          <Textarea 
            type='text'
            name="comment"
            placeholder="コメントを記入"
            isRequired={true}
            size='md'
            value={comment}
            onChange={(e) => {setComment(e.target.value)}}
          />
          <Flex minWidth='max-content' alignItems='center' gridGap={2} gap='2'>
            <Box p='2'>
            </Box>
            <Spacer />
            <Button type='submit' loadingText='送信中' bg={theme.colors.main} color={'white'} _hover={{bg: theme.colors.sub}}>コメントをする</Button>
          </Flex>
        </Stack>
      <Card maxW='md'>
        <CardHeader>
          <Stack>
            <Flex spacing='1'>
              <Flex flex='4' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Box>
                  <Heading textAlign='left' size='sm'>{post.user.screen_name}</Heading>
                  <Text color={theme.colors.accent} textAlign='left'>{post.user.user_id}</Text>
                </Box>
              </Flex>
              <Text>{post.created_at}</Text>
            </Flex>
            <Text>素晴らしいですね！楽しい楽しい楽しい</Text>
          </Stack>
        </CardHeader>
        
      </Card>
      
      {/* <Footer/> */}
    </Box>
  )
}
export default CommentList
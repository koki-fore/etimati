import { useLayoutEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import theme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AiFillLike, AiOutlineLike} from "react-icons/ai"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text, IconButton } from "@chakra-ui/react"

const CommentList = () => {
  const [post, setPost] = useState()
  
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


  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
      <Header/>
      <Card maxW='md'>
        <CardHeader>
          <Flex spacing='1'>
            <Flex flex='4' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              <Box>
                <Heading textAlign='left' size='sm'>title</Heading>
                <Text color={theme.colors.accent} textAlign='left'>text</Text>
              </Box>
            </Flex>
            <Text>ddd</Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Heading as='h4' size='md' >title</Heading>
          <Text>
            text
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
          {/* <Button onClick={onClickGood} flex='1' variant='ghost' leftIcon={active ? <AiFillLike color={theme.colors.sub} /> : <AiOutlineLike  />}>
            いいね
          </Button> */}
        </CardFooter>
      </Card>
      <Footer/>
    </Box>
  )
}
export default CommentList
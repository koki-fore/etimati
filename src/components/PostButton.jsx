import { 
  Box
} from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'
import {
  BiCommentAdd
} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


const postButtonStyle = {
  bottom:'5rem',
  right:'1.6rem',
  width:'4rem',
  height:'4rem',
  borderRadius:'2rem',
}

const PostButton = () => {
  const navigate = useNavigate()
  return (
    <Box as='button' _hover={{bg: theme.colors.sub}} onClick={() => navigate('/postPage')} bgColor={theme.colors.main} pos='absolute' style={{...postButtonStyle}} >
      <BiCommentAdd size={'1.6rem'} style={{margin:'0 auto',transform:'scale(-1,1)'}} /> 投稿
    </Box>
  )
}; 

export default PostButton;

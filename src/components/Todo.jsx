import { 
  useState,
} from 'react'
import {
    Box,
    Text,
    Grid,
    GridItem,
    Progress,
    MenuButton,
    MenuItem,
    Menu,
    Button,
    MenuList
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import reactLogo from '../assets/react.svg'
import '../App.css';
import theme from '../theme';
import {
  BiCommentAdd
} from 'react-icons/bi'


const avatarStyle = {

}
const reportButtonStyle = {
  bottom:'5rem',
  right:'1.6rem',
  width:'3rem',
  height:'3rem',
  borderRadius:'2rem',
}

const Todo = (props) => {
  const avatar=reactLogo;
  const name='名前';
  const level=1;
  const totalExperience=10;
  const {key, status,content,contentReason,experience}= props;

  /*バーの使えそうな色
  "blackAlpha" | "gray" |"orange"|  "linkedin"  | "twitter" 
  */
  /* 達成しているかを表示する */
  let statusBox;
  if(status){
    statusBox = <Box style={{border:'2px double red',width:'2rem',height:'2rem',margin:'6px auto',borderRadius:'2rem',padding:'auto',color:'red',transform:'rotate(-0.05turn)'}}>済</Box>
  } else {
    statusBox = <Box style={{border:'2px solid #000000',width:'1.6rem',height:'1.6rem',margin:'6px auto'}}>&emsp;</Box>
  }

  return (
    <Box style={{textAlign: 'center',margin:'0.5rem auto'}}>
      <Grid templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={1}>{statusBox}</GridItem>
        <GridItem colSpan={3}>
          <Menu>
            <MenuButton as={Button} >
              {content}
            </MenuButton>
            <MenuList>
              <MenuItem style={{width:'78vw'}}>
                {contentReason}
              </MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem colSpan={1}>{experience}</GridItem>
      </Grid>

    </Box>
  )
}

export default Todo;

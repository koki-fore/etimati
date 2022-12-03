import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import theme from '../theme';
import logo from '../assets/logo.jpg';
import {experience2various} from '../experience2various';
import SignOutButton from './SignOutButton';
import palpal from '../assets/palpal_1.png'
import SelectAvatar from './SelectAvator';


const headerStyle = {
  top:'0',
  left:'0',
  width:'100%',
  height: '65px'
}

const Header = (props) => {
  // console.log('userInfo = '+JSON.stringify(userInfo));
  // const experience = 10;  //仮置き
  const userName = props.userInfo.user_id;
  const {level, upto,avatar}=experience2various(props.userInfo.experience_point_num);
  const userData = props.userInfo;
  

  return (
    <>
      <Box bg={theme.colors.main} style={{...headerStyle}} zIndex={600} pos='fixed' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} pl={4} >
          <Box style={{display:'flex'}}>
            <Box>
              <Image src={logo} alt='Logo' style={{height:'30px',margin:'auto 0'}} ></Image>
            </Box>
            <Box>
              <Text pl={4} fontSize='2xl'>
                Lv.{level}
              </Text>
            </Box>
          </Box>
          <Flex alignItems={'center'} pr={4} >
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  {/*<Avatar
                    size={'sm'}
                    src={palpal}
                  />*/}
                  <SelectAvatar all={userData.experience_point_num} version={2} />

                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    {/*<Avatar
                      size={'2xl'}
                      src={palpal}/>*/}
                    <SelectAvatar all={userData.experience_point_num} version={1}/>
                  </Center>
                  <br />
                  <Center>
                    <p>{userName} </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <SignOutButton/>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;

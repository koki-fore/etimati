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
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import theme from '../theme';
import logo from '../assets/react.svg';//仮置き
import experience2various from '../experience2various';
import SignOutButton from './SignOutButton';
import palpal from '../assets/palpal_1.png'


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue(theme.colors.main, 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const headerStyle = {
  top:'0',
  left:'0',
  width:'100%',
  height: '65px'
}

const Header = (props) => {
  const userInfo=props.userInfo;
  console.log('userInfo = '+JSON.stringify(userInfo));
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const experience = 10;  //仮置き
  const userName = userInfo.user_id;
  const {level, upto,avatar}=experience2various(userInfo.experience_point_num);
  

  return (
    <>
      <Box bg={theme.colors.main} style={{...headerStyle}} pos='fixed' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} pl={4} >
          <Box style={{display:'flex'}}>
            <Box><img src={logo} /></Box>
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
                  <Avatar
                    size={'sm'}
                    src={palpal}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={palpal}
                    />
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

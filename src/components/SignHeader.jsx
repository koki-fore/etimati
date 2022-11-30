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
import theme from '../theme';
import logo from '../assets/react.svg';//仮置き


const headerStyle = {
    top:'0',
    left:'0',
    width:'100%'
}

const SignHeader = () => {
    return (
        <>
          <Box bg={useColorModeValue(theme.colors.main, 'gray.900')} style={{...headerStyle}} pos='absolute' >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} pl={4} >
              <Box style={{display:'flex'}}>
                <Box><img src={logo} /></Box>
              </Box>
            </Flex>
          </Box>
        </>
      );
}
export default SignHeader
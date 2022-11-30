import { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import axios from "axios";
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import SignHeader from "../components/SignHeader";
import theme from "../theme";

const UserRegister = () => {
  const [screenName, setScreenName] = useState()
  const [userID, setUserID] = useState()
  const [alreadyUserError, setAlreadyUserError] = useState(false);
  const [description, setDescription] = useState()

  const navigate = useNavigate()

  const { user } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/users/', {
      firebase_FK: user.uid,
      user_id: userID,
      screen_name: screenName,
      first_name: 'string',
      last_name: 'string',
      profile_picture_path: 'string',
      description: description
    })
    .then((res) => {
      console.log(res)
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
      setAlreadyUserError(true)
    })
  }

  return (
    <Box>
      <SignHeader />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          {/* ロゴ入れる */}
        </Stack>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} color={theme.colors.accent}>ユーザー情報</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="screenName" isRequired>
                <FormLabel>表示名</FormLabel>
                <Input type="text" name="screenName" value={screenName} onChange={(e) => {setScreenName(e.target.value)}}/>
              </FormControl>
              <FormControl id="userID" isRequired>
                <FormLabel>ユーザーID</FormLabel>
                <InputGroup>
                  <Input
                    type='text'
                    name="userID"
                    pattern="^[a-zA-Z0-9]+$"
                    value={userID} 
                    onChange={(e) => {setUserID(e.target.value)}}
                  />  
                </InputGroup>
                <FormHelperText>※半角英数字で入力してください</FormHelperText>
              </FormControl>
              {alreadyUserError && (
                <Alert status='error'>
                  <AlertIcon />
                  <AlertDescription>ユーザー情報がすでに登録されているかこのユーザーIDがすでに使われています。</AlertDescription>
                </Alert>
              )}
              <FormControl id="description">
                <FormLabel>自己紹介</FormLabel>
                <Textarea
                  type='text'
                  name="description"
                  placeholder=""
                  value={description}
                  onChange={(e) => {setDescription(e.target.value)}}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={theme.colors.main}
                  color={'white'}
                  _hover={{
                    bg: theme.colors.sub,
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  >
                  登録
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    </Box>
  );
};

export default UserRegister;

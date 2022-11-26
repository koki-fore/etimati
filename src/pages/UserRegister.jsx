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
} from '@chakra-ui/react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'


const UserRegister = () => {
  const [screenName, setScreenName] = useState()
  const [userID, setUserID] = useState()
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          {/* ロゴ入れる */}
        </Stack>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>ユーザー情報</Heading>
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
                    value={userID} 
                    onChange={(e) => {setUserID(e.target.value)}}
                  />
                </InputGroup>
              </FormControl>
              {showAlert && (
                <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription>すでにそのIDは使われています。</AlertDescription>
                </Alert>
              )}
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  登録
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserRegister;

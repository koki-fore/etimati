import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SignHeader from '../components/SignHeader';
import theme from '../theme';

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Box style={{textAlign: 'center',paddingTop:'4rem'}}>
    <SignHeader/>
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient='linear(to-r, #FFB23B, #F17816)'
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        お探しのページは存在しないようです。
      </Text>

      <Button
        _hover={{bg: theme.colors.sub}}
        bgGradient="linear(to-r, #FFBF5D, #FFB23B, #F17816)"
        color="white"
        variant="solid"
        onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
    </Box>
  );
}
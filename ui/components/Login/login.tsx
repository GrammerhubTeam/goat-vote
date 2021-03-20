import { Center, Box,FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, InputGroup, InputRightElement, Stack, Checkbox, Button, Link } from "@chakra-ui/react"
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import React from "react"

//TODO Validate maxlenght and type of inputs
export default function LoginComponent() {
    //let render: boolean = true;
    const [render, setRender] = React.useState(true);

    const clickMe = () => setRender(false);
  return (
    <Center height="100vh" background="#d2d6de">
      {/* Global Box */}
      <Stack padding="20px" spacing={5} background="white">
        {/* Title */}
        <Center><Link fontSize="25px" fontWeight="bold" textAlign="center">MY APP</Link></Center>
        {/* Instructions */}
        <Center textAlign="center"> Use your contact email to login or create new account.</Center>
        {/* Form */}
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <InputGroup>
            <Input type="email"/>
            <InputRightElement children={<EmailIcon />}></InputRightElement>
          </InputGroup>  
          {/* <FormHelperText>Use your contact email to login or create new account.</FormHelperText> */}
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type="password"/>
            <InputRightElement children={<LockIcon />}></InputRightElement>
          </InputGroup>  
          {/* <FormHelperText>Use your existing password, or create a new one.</FormHelperText> */}
        </FormControl>
        {/* remember me and sign in */}
        <Box justifyContent="space-between" display="flex">
          <Checkbox>Remember Me</Checkbox>
          <Button background="#3c8dbc" color="white" width="35%">Login</Button>
        </Box>
        <Button colorScheme="facebook">Sign in with Facebook</Button>
        <Button variant="ghost">Sign in with Google</Button>
        <Box justifyContent="space-between" display="flex">
          <Button variant="link">Forgot Password</Button>
          <Button variant="link">Create New Account</Button>
        </Box>
      </Stack>
    </Center>
  )
}
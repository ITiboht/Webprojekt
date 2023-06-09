import { 
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast
} from '@chakra-ui/react';

import { Formik, Field } from 'formik'
import React, { useState } from 'react';
import { AuthService } from './auth-service.tsx';
import { Link } from 'react-router-dom';

const Account = () => {
  const toast = useToast();
  const [username] = useState('');
  const [password] = useState('');

  return (
    <Flex bg="radial-gradient(circle, #333 0%, #000000 100%)" align="center" justify="center" h="100vh" color="#F4722B">
      <Box boxShadow="inset 0 0 0 2px #e7b920" p={6} height="300px" width="400px" borderWidth={1} borderRadius={8}>
        <Box textAlign={"center"}>
          <Heading color='#e7b920'>
            Login
          </Heading>
        </Box>
        <Formik
          enableReinitialize
          initialValues={{
            username: username,
            password: password
          }}
          onSubmit={async (values) => {
            try {
              await AuthService.login(values.username, values.password);
        
            } catch (e: any) {
              if (e.response.status === 401) {
                toast({
                  title: 'Login',
                  description: "Wrong username or password!",
                  status: 'error',
                  position: 'top',
                  duration: 5000,
                  isClosable: true,
                });
              } else if (e.response.status !== 200) {
                toast({
                  title: 'Login',
                  description: "Something bad happpened, try again!",
                  status: 'error',
                  position: 'top',
                  duration: 5000,
                  isClosable: true,
                });
              }
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl
                  isInvalid={!!errors.username && touched.username}>
                  <FormLabel marginBottom='10px' fontSize='20px' color='#e7b920' htmlFor="username">Username</FormLabel>
                  <Field
                    as={Input}
                    marginBottom='20px'
                    placeholder="Enter Username"
                    width="50vh"
                    height="4vh"
                    id="username"
                    name="username"
                    type="username"
                    variant="filled"
                    />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.password && touched.password}>
                  <FormLabel marginBottom='10px' fontSize='20px' color='#e7b920' htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    width="50vh"
                    height="4vh"
                    marginBottom='20px'
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                   />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button marginBottom='30px' color='white' bg='blue' type="submit"  width="50vh" height='6vh' mt={4}>
                  Login
                </Button>
                <span className="psw"  style={{ color: "aqua", fontSize:"20px" }}>
                  Dont have an account?
                  <Link to="/register">
                    Register!
                  </Link>
                  </span>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Account
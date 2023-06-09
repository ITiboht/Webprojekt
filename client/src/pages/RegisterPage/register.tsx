import React, { useState } from 'react';
import { Formik, Field } from 'formik'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack, useToast } from '@chakra-ui/react';
import { AuthService } from '../AccountPage/auth-service.tsx';
import { Link } from 'react-router-dom';

const Registration = () => {
  const toast = useToast();
  const [password, setPassword] = useState("");
  return (
    <Flex bg="radial-gradient(circle, #333 0%, #000000 100%)" align="center" justify="center" h="100vh" color="#F4722B">
      <Box boxShadow="inset 0 0 0 2px #e7b920" p={6} height="400px" width="400px" borderWidth={1} borderRadius={8} >
        <Box textAlign={"center"}>
          <Heading color='#e7b920'>
            Registration
          </Heading>
        </Box>
        <Formik
          initialValues={{
            username: "",
            password: "",
            passwordMatch: ""
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              await AuthService.registration(values.username, values.password, toast);
            } catch (e: any) {
              if (e.response.status === 409) {
                toast({
                  title: 'Registration',
                  description: "Username already taken!",
                  status: 'error',
                  position: 'top',
                  duration: 5000,
                  isClosable: true,
                });
              } else if (e.response.status !== 201) {
                toast({
                  title: 'Registration',
                  description: "Something bad happened!",
                  status: 'error',
                  position: 'top',
                  duration: 5000,
                  isClosable: true,
                });
              }
            }
            resetForm();
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
                    width="50vh"
                    height="4vh"
                    placeholder="Enter Username"
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.password && touched.password}>
                  <FormLabel marginBottom='10px' fontSize='20px' color='#e7b920' htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    width="50vh"
                    height="4vh"
                    marginBottom='20px'
                    placeholder="Enter Password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value: string) => {
                      if (value.length <= 8) {
                        return "Password must be a minimum of 8 characters!";
                      } else if (!/^[A-Z]/.test(value)) {
                        return "Password must start with a capital letter!";
                      } else {
                        setPassword(value);
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.passwordMatch && touched.passwordMatch}>
                  <FormLabel marginBottom='10px' fontSize='20px' color='#e7b920' htmlFor="passwordMatch">Again password</FormLabel>
                  <Field
                    as={Input}
                    id="passwordMatch"
                    width="50vh"
                    height="4vh"
                    marginBottom='20px'
                    placeholder="Enter Password Again"
                    name="passwordMatch"
                    type="password"
                    variant="filled"
                    validate={(value: string) => {
                      if (value !== password) {
                        return "Passwords don't matching!"
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.passwordMatch}</FormErrorMessage>
                </FormControl>
                <Button marginBottom='30px' color='white' bg='blue' type="submit"  width="50vh" height='6vh' mt={4}>
                  Make account
                </Button>
                <span className="tologin" style={{ color: "aqua", fontSize:"20px" }}>Already have an account? <Link to="/account">Login!</Link></span>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Registration
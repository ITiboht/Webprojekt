import { ChakraProvider, Box, Flex, VStack, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { Formik, Field } from "formik";
import './account.css'


export default function Account() {


  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={200}>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      if (value.length < 6) {
                        return "Password should be over 6 characters.";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="green" w="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
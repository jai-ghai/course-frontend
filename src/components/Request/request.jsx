import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Request = () => {
    const [name,setName]  = useState();
    const [email,setEmail]  = useState();
    const [course,setCourse]  = useState();
  return (
    <Container h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children="Request a Course"/>
            <form style={{ width: '100%' }}>

            <Box my={'4'}>
          <FormLabel htmlFor="name" children="Name" />
          <Input
          required
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="abc"
          focusBorderColor="yellow.500"
        />
        </Box>
        <Box my={'4'}>
          <FormLabel htmlFor="email" children="Email address" />
          <Input
          required
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          focusBorderColor="yellow.500"
        />
        </Box>

        <Box my={'4'}>
          <FormLabel htmlFor="Course" children="Course" />
          <Textarea
          required
          id="course"
          value={course}
          onChange={e => setCourse(e.target.value)}
          placeholder="explain the course ..."
          focusBorderColor="yellow.500"
        />
        </Box>


        <Button colorScheme='yellow' my={'4'} type='submit'>Send Mail</Button>

        <Box my={4}>
        See available courses! <Link to={'/courses'}>
        <Button colorScheme='yellow' variant={'link'}>Click
        </Button>{" "}here
        </Link>
        </Box>
     

        </form>
        </VStack>
    </Container>
  )
}


export default Request
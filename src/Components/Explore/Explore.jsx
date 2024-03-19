import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, Button, Show, Hide } from '@chakra-ui/react';

function Explore() {
    return (
        <div>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Event'
        />

        <Stack>
            <CardBody>
            <Heading size='md'>Event Name</Heading>

            <Text py='2'>
                Event Description
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='purple'>
                Join Event
            </Button>
            </CardFooter>
        </Stack>
        </Card>
        </div>
    )
}

export default Explore()
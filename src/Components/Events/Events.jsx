import { Input, Stack, Button, ButtonGroup } from '@chakra-ui/react'

function Events(){
    return (
        <div>
            <Stack spacing={3}>
            <Input variant='outline' placeholder='Event Name' />
            <Input variant='outline' placeholder='Description' />
            <Input variant='outline' placeholder="Select Date and Time" size="md" type="datetime-local" />
                <Stack>
                <Input variant='outline' placeholder='Street Address' />
                <Input variant='outline' placeholder='City' />
                <Input variant='outline' placeholder='County' />
                <Input variant='outline' placeholder='Postcode' />
                </Stack>
            </Stack>
            <Button colorScheme='purple'>Create Event</Button>
        </div>
    )
}

export default Events()
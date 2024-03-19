import './Events.css';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Events() {
    return (
    <Grid container spacing={3}>
        <FormGrid item xs={12}>
            <FormLabel>
            Event Name
            </FormLabel>
            <OutlinedInput
            id="event_name"
            name="event_name"
            type="event_name"
            placeholder="Event Name"
            required
            />
        </FormGrid>
        <FormGrid item xs={12}>
            <FormLabel>
            Description
            </FormLabel>
            <OutlinedInput
            id="description"
            name="description"
            type="description"
            placeholder="Description"
            required
            />
        </FormGrid>
        <FormGrid item xs={12}>
            <FormLabel>
            City
            </FormLabel>
            <OutlinedInput
            id="city"
            name="city"
            type="city"
            placeholder="City Name"
            required
            />
        </FormGrid>
        </Grid>
    );
}
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
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
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
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
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
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City Name"
            required
            />
        </FormGrid>
        </Grid>
    );
}
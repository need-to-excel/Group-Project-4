import './../assets/events.css';
import { useState, editData } from "react";
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Events() {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ("");
    const [city, setCity] = useState ("");

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
            value={editData ? title : ''}
            placeholder="Event Name"
            onChange={(e) => setTitle(e.target.value)}
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
            value={editData ? description : ''}
            onChange={(e) => setDescription(e.target.value)}
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
            value={editData ? city :''}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
            required
            />
        </FormGrid>
        <Button
        onClick={handleSubmission}
        variant="contained" 
        type="submit"
        >
        Create Event
        </Button>
        </Grid>
    );

    function handleSubmission() {
        let eventData = {
            Title: title,
            Description: description,
            City: city,
        };
        localStorage.setItem("eventInfo", JSON.stringify(eventData));
        alert("Data recorded!");
        window.location.reload();
    }
};
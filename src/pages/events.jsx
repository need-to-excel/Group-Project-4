import './../assets/css/events.css';
import { useState, useEffect } from "react";
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Events() {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ("");
    const [city, setCity] = useState ("");

    useEffect(() => {
        localStorage.setItem('titleKey', JSON.stringify(title));
    }, [title]);
    useEffect(() => {
        localStorage.setItem('descriptionKey', JSON.stringify(description));
    }, [description]);
    useEffect(() => {
        localStorage.setItem('cityKey', JSON.stringify(city));
    }, [city]);

    return (
    <Grid container spacing={3}>
        <FormGrid item xs={12}>
            <FormLabel>
            Event Name
            </FormLabel>
            <OutlinedInput
            id="title"
            name="title"
            type="input"
            value={title}
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
            value={description}
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
            value={city}
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
    }
};
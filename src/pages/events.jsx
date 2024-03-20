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
    const storeTitle = JSON.parse(localStorage.getItem('title'));
    const storeDescription = JSON.parse(localStorage.getItem('description'));
    const storeCity = JSON.parse(localStorage.getItem('city'));

    const [title, setTitle] = useState (storeTitle);
    const [description, setDescription] = useState (storeDescription);
    const [city, setCity] = useState (storeCity);

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
    <Grid id="createForm" container spacing={3}>
        <FormGrid item xs={12} className="forms">
            <FormLabel>
            Event Name
            </FormLabel>
            <OutlinedInput
            className="input"
            name="title"
            type="input"
            value={title}
            placeholder="Event Name"
            onChange={(e) => setTitle(e.target.value)}
            />
        </FormGrid>
        <FormGrid item xs={12} className="forms">
            <FormLabel>
            Description
            </FormLabel>
            <OutlinedInput
            className="input"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            />
        </FormGrid>
        <FormGrid item xs={12} className="forms">
            <FormLabel>
            City
            </FormLabel>
            <OutlinedInput
            className="input"
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
            required
            />
        </FormGrid>
        <Button
        id="button"
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

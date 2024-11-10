import React, {useState} from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
    MenuItem,
    Box
} from '@mui/material';
import BMIService from "../services/BMIService.js";
import BMIResultDialog from "./BMIResultDialog.jsx";

const BMICalculator = () => {
    const [formData, setFormData] = useState({
        weight: '',
        height: '',
        country: '',
        age: '',
        gender: '',
        sport: '',
        workouts: '',
        mealPlan: ''
    });
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            weight: Number(formData.weight),
            height: Number(formData.height)
        };

        try {
            console.log(payload);
            const response = await BMIService.calculateBMI(payload);
            console.log("response : ", response);
            setResponse(response);
            setOpen(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const selectOptions = {
        gender: ['Male', 'Female', 'Other'],
        yesNo: ['Yes', 'No']
    };

    return (
        <Card sx={{maxWidth: 800, mx: 'auto', backgroundColor: '#F3F3F3', p: 2}}>
            <CardContent>
                <Box sx={{textAlign: 'center', mb: 4}}>
                    <Typography variant="h5" component="h2" sx={{fontWeight: 'bold', mb: 1}}>
                        Calculate Your Personalized BMI and Meal Plan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Enter your details to calculate your BMI, get a personalized meal plan, and access doctor
                        recommendations and
                        channeling for a healthier lifestyle
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="Weight"
                                name="weight"
                                type="number"
                                inputProps={{step: "0.1"}}
                                placeholder="Enter Your Weight (in Kg)"
                                value={formData.weight}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="Height"
                                name="height"
                                type="number"
                                inputProps={{step: "0.01"}}
                                placeholder="Enter Your Height (in Meters)"
                                value={formData.height}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        {/* Country and Age */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Country"
                                name="country"
                                placeholder="Enter Your Country"
                                value={formData.country}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Age"
                                name="age"
                                type="number"
                                placeholder="Enter Your Age"
                                value={formData.age}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        {/* Gender and Sport */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                variant="outlined"
                                placeholder="Enter Your Gender"
                            >
                                {selectOptions.gender.map((option) => (
                                    <MenuItem key={option} value={option.toLowerCase()}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Are You Involve in Sport"
                                name="sport"
                                value={formData.sport}
                                onChange={handleChange}
                                variant="outlined"
                                placeholder="Enter Your Result"
                            >
                                {selectOptions.yesNo.map((option) => (
                                    <MenuItem key={option} value={option.toLowerCase()}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Doing Workouts"
                                name="workouts"
                                value={formData.workouts}
                                onChange={handleChange}
                                variant="outlined"
                                placeholder="Enter Your Result"
                            >
                                {selectOptions.yesNo.map((option) => (
                                    <MenuItem key={option} value={option.toLowerCase()}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Do You Have Existing Meal Plan"
                                name="mealPlan"
                                value={formData.mealPlan}
                                onChange={handleChange}
                                variant="outlined"
                                placeholder="Enter Your Result"
                            >
                                {selectOptions.yesNo.map((option) => (
                                    <MenuItem key={option} value={option.toLowerCase()}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#F69334',
                                    '&:hover': {
                                        backgroundColor: '#F69355'
                                    },
                                    py: 1.5
                                }}
                            >
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
            <BMIResultDialog open={open}
                             onClose={() => {
                                 setOpen(false);
                                 setFormData({
                                     weight: '',
                                     height: '',
                                     country: '',
                                     age: '',
                                     gender: '',
                                     sport: '',
                                     workouts: '',
                                     mealPlan: ''
                                 });
                             }}
                             response={response}
            />
        </Card>
    );
};

export default BMICalculator;
import React from 'react';
import {Box, Grid} from "@mui/material";
import BMIImg from '../assets/BMIImg.png';
import BMICalculator from "./BMICalculator.jsx";

const Bmi = () => {
    return (
        <Grid container mb={4}>
            <Grid item xs={12} md={6}>
                <Box component='img' src={BMIImg} width={650} height={625}/>
            </Grid>
            <Grid item xs={12} md={6} pr={5} display={'flex'} alignItems={"center"}>
                <BMICalculator/>
            </Grid>
        </Grid>
    );
};

export default Bmi;
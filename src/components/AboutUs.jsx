import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import AboutUsImg from "../assets/AboutUsImg.png";

const AboutUs = () => {
    return (
        <Grid container sx={{display: 'flex', alignItems: 'center'}}>
            <Grid item xs={12} md={6} p={5}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{fontWeight: 600, fontSize: 20}}>
                        ABOUT US
                    </Typography>
                    <Typography sx={{fontWeight: 600, fontSize: 20}}>
                        Transforming Health, One Meal at a Time
                    </Typography>
                    <Typography sx={{fontWeight: 500, color: '#757575', mt: 2}}>
                        At Meal Fit, we believe a balanced life starts with a balanced meal. Our mission is to make
                        healthy eating enjoyable and accessible through personalized meal plans, BMI tracking, and
                        expert guidance—all tailored to your unique health goals.
                    </Typography>
                    <Typography sx={{fontWeight: 500, color: '#757575', mt: 2}}>
                        With Meal Fit, track your progress using our BMI calculator and adjust your plan as you go. Our
                        dedicated nutritionists and doctors provide expert guidance and direct access to healthcare
                        support, empowering you with the tools for a healthier, happier life.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center'}}>
                <Box component='img' src={AboutUsImg} width={500} height={550}/>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
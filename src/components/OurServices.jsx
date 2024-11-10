import React from 'react';
import {Box, Typography, Grid} from '@mui/material';
import Service1 from '../assets/OurServices/Service1.png';
import Service2 from '../assets/OurServices/Service2.png';
import Service3 from '../assets/OurServices/Service3.png';
import Service4 from '../assets/OurServices/Service4.png';
import Service5 from '../assets/OurServices/Service5.png';

const services = [
    {title: 'Personalized Meal Plans', image: Service1},
    {title: 'Fitness Guidance', image: Service2},
    {title: 'Doctor Consultation', image: Service3},
    {title: 'Health & Wellness Coaching', image: Service4},
    {title: 'Healthy Recipes', image: Service5},
];

const OurServices = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Box sx={{p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{fontWeight: 600, color: '#9F9F9F', fontSize: 14}}>
                    OUR SERVICES
                </Typography>
                <Typography sx={{fontWeight: 600, fontSize: 22, mt: 2, maxWidth: 600}}>
                    Explore Some Of Our Services At MealFit
                </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center">
                {services.map((pckg, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Box
                                component='img'
                                src={pckg?.image}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: 224,
                                    maxHeight: 312,
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            />
                            <Typography sx={{fontWeight: 600, fontSize: 18, mt: 1, textAlign: 'center'}}>
                                {pckg.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{mt: 5, p: 4, textAlign: 'center'}}>
                <Typography sx={{fontWeight: 500, color: "#757575"}}>
                    At Meal Fit, we offer a comprehensive approach to wellness with personalized meal plans tailored to
                    your dietary needs and health goals. Our services include BMI tracking, expert guidance from
                    certified nutritionists and healthcare professionals, and access to doctor recommendations and
                    appointments—all designed to support your journey toward a healthier lifestyle. With Meal Fit, you
                    get the tools, insights, and professional support needed to make healthy eating accessible,
                    enjoyable, and effective, ensuring you achieve your wellness goals with confidence
                </Typography>
            </Box>

        </Box>

    );
};

export default OurServices;
import React from 'react';
import {Box, Typography, IconButton, Link} from '@mui/material';
import MealFit from '../assets/MealFit.png';
import Facebook from '../assets/SocialMedia/Facebook.png';
import Instagram from '../assets/SocialMedia/Instagram.png';
import Tiktok from '../assets/SocialMedia/Tiktok.png';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#333',
                color: '#FFFFFF',
                padding: '40px 20px',
                textAlign: 'center',
            }}
        >
            <Typography variant="subtitle1" sx={{color: '#CCCCCC', letterSpacing: 2}}>
                MEAL FIT
            </Typography>

            <Typography variant="h5" sx={{fontWeight: 'bold', marginTop: '10px'}}>
                Your Complete Health & Meal Planning Companion
            </Typography>

            <Typography variant="body1" sx={{marginTop: '10px', color: '#AAAAAA', maxWidth: '600px', marginX: 'auto'}}>
                Take control of your health journey with personalized meal plans, BMI insights, and seamless doctor
                recommendations. From meal planning to doctor channeling, we're here to support a healthier, happier
                you!
            </Typography>

            <Box sx={{marginTop: '20px', borderBottom: '1px solid #555', width: '80%', marginX: 'auto'}}></Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 25}}>
                <Box component='img' src={MealFit} width={130} height={35}/>
                <Box sx={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
                    <Typography variant="body2" sx={{cursor: 'pointer', color: '#FFFFFF'}}>Home</Typography>
                    <Typography variant="body2" sx={{cursor: 'pointer', color: '#FFFFFF'}}>BMI</Typography>
                    <Typography variant="body2" sx={{cursor: 'pointer', color: '#FFFFFF'}}>MEALS</Typography>
                    <Typography variant="body2" sx={{cursor: 'pointer', color: '#FFFFFF'}}>DOCTORS</Typography>
                    <Typography variant="body2" sx={{cursor: 'pointer', color: '#FFFFFF'}}>Contact Us</Typography>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                    <Box component='img' src={Facebook} width={45} height={45}/>
                    <Box component='img' src={Instagram} width={45} height={45}/>
                    <Box component='img' src={Tiktok} width={45} height={45}/>
                </Box>
            </Box>

        </Box>
    );
};

export default Footer;

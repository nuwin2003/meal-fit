import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import InitialViewImg from '../assets/InitialView.png';

const InitialView = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '90vh',
                backgroundImage: `url(${InitialViewImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '5%',
                paddingLeft: '5%',
                color: '#000',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: '650px',
                    textAlign: 'right',
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{ fontWeight: 600, color: '#000'}}
                >
                    Fuel <span style={{ color: '#C76200' }}>Your Body</span>,
                    <br />
                    Transform Your Life
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginTop: 3,
                        fontWeight: 600,
                        fontSize: 20,
                        color: '#454545',
                        lineHeight: '1.5',
                    }}
                >
                    Healthy eating made simple. Get personalized meal plans, track your BMI, and connect with health experts – all in one place. Your journey to wellness starts here.
                </Typography>
                <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginTop: 3 }}
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default InitialView;

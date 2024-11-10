import React from 'react';
import {Box} from "@mui/material";
import InitialViewImg from '../assets/InitialView.png';

const InitialView = () => {
    return (
        <Box
            component='img'
            src={InitialViewImg}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        />
    );
};

export default InitialView;
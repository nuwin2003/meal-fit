import React from 'react';
import InitialView from "../components/InitialView.jsx";
import OurServices from "../components/OurServices.jsx";
import AboutUs from "../components/AboutUs.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import {Box} from "@mui/material";

const Home = () => {
    return (
        <>
            <InitialView />
            <Box m={5}>
                <WhyChooseUs />
                <AboutUs/>
                <OurServices />
            </Box>


        </>

    );
};

export default Home;
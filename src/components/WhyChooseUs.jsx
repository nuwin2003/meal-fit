import {Box, Typography, Grid, Card, CardContent, Icon} from '@mui/material';
import Choose1 from '../assets/whyChooseUs/Choose1.png'
import Choose2 from '../assets/whyChooseUs/Choose2.png'
import Choose3 from '../assets/whyChooseUs/Choose3.png'
import Choose4 from '../assets/whyChooseUs/Choose4.png'

const WhyChooseUs = () => {

    const features = [
        {
            icon: Choose2,
            title: 'Expert Team',
            description: 'Our team comprises highly skilled professionals with extensive experience in software development, web and mobile applications, and IT solutions. Their expertise ensures the delivery of top-tier, reliable, and efficient solutions tailored to your needs.',
        },
        {
            icon: Choose1,
            title: 'Client-Centric Approach',
            description: 'We prioritize your business goals and initiatives, working collaboratively to create customized solutions that drive success. Our commitment to understanding and addressing your specific needs sets us apart.',
        },
        {
            icon: Choose3,
            title: 'Innovative Solutions',
            description: 'At RoadWave, we stay ahead of industry trends and leverage the latest technologies to develop innovative solutions. Our forward-thinking approach ensures that your business remains competitive and future-ready.',
        },
        {
            icon: Choose4,
            title: 'Comprehensive Support',
            description: 'We offer ongoing support and maintenance to keep your applications running smoothly. Our dedicated support team is always available to assist you, ensuring minimal downtime and continuous improvement.',
        },
    ];

    return (
        <Box sx={{p: 4}}>
            <Typography sx={{color: '#9F9F9F', fontWeight: 600, fontSize: {lg: 15, sm: 18}}} align="center" gutterBottom>
                WHY US
            </Typography>
            <Typography sx={{fontWeight: 600, fontSize: {sm: 25}}} align="center" paragraph>
                Why Choose Us for Your Healthy Meal Plan
            </Typography>
            <Grid container spacing={3}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} mt={2}>
                        <Card sx={{
                            height: '335px',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '286px',
                            borderRadius: 2,
                            backgroundColor: '#F2F2F2',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                backgroundColor: '#F6933433'
                            },
                            '&:focus': {
                                outline: 'none'
                            }
                        }} elevation={0}>
                            <CardContent sx={{flexGrow: 1}}>
                                <Box sx={{display: 'flex', justifyContent: 'center', mb: 2}}>
                                    <img src={feature.icon} alt="image" style={{
                                        width: '70px',
                                        height: '70px'
                                    }}/>
                                </Box>
                                <Typography sx={{fontWeight: 600, fontSize: {sm: 20, xs: 18}, mb: 3}} align="center" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography sx={{color: '#757575', fontWeight: 500, fontSize: 14}} align="center">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default WhyChooseUs;
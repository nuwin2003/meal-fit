import React from 'react';
import {
    Dialog,
    DialogContent,
    Typography,
    IconButton,
    Button,
    Box
} from '@mui/material';
import {X as CloseIcon} from 'lucide-react';
import UNDERWEIGHT from '../assets/States/UNDERWEIGHT.png';
import OVERWEIGHT from '../assets/States/OVERWEIGHT.png';
import OBESITY_CLASS2 from '../assets/States/OBESITY_CLASS2.png';
import OBESITY_CLASS1 from '../assets/States/OBESITY_CLASS1.png';
import NORMAL_WEIGHT from '../assets/States/NORMAL_WEIGHT.png';
import EXTREME_OBESITY from '../assets/States/EXTREME_OBESITY.png';

const StateDescriptions = {
    UNDERWEIGHT: "Based on the results we analyzed, your BMI indicates you are underweight. This may impact your overall health and energy levels. We recommend gradually increasing your caloric intake with nutrient-rich foods and consulting with a healthcare provider to develop a healthy weight gain plan. Regular health check-ups can help monitor your progress.",

    NORMAL_WEIGHT: "Great news! Your BMI falls within the healthy weight range. This suggests a good balance between your height and weight. To maintain this healthy status, continue with regular physical activity and a balanced diet. Remember that maintaining a healthy lifestyle is an ongoing journey - keep up the good work!",

    OVERWEIGHT: "Based on the results we analyzed, your BMI indicates you are slightly above the healthy weight range. While this is common, making small lifestyle changes can help improve your health. Consider incorporating more physical activity into your daily routine and consulting with a nutrition expert for personalized dietary advice.",

    OBESITY_CLASS1: "Based on the results we analyzed, your BMI indicates a Class 1 obesity range, which may increase health risks. We strongly recommend consulting with healthcare professionals who can provide personalized guidance. Small, consistent changes to diet and activity levels, under medical supervision, can lead to significant health improvements.",

    OBESITY_CLASS2: "Based on the results we analyzed, your BMI indicates a Class 2 obesity range, which requires attention to prevent potential health complications. We strongly advise scheduling a consultation with healthcare professionals who can create a comprehensive health management plan tailored to your specific needs and circumstances.",

    EXTREME_OBESITY: "Based on the results we analyzed, your BMI indicates a range that requires immediate medical attention. This level can significantly impact your health and quality of life. We strongly urge you to seek professional medical guidance. Healthcare providers can develop a supervised, comprehensive plan to help you achieve better health outcomes safely and effectively."
};

const stateIconMap = {
    UNDERWEIGHT: UNDERWEIGHT,
    NORMAL_WEIGHT: NORMAL_WEIGHT,
    OVERWEIGHT: OVERWEIGHT,
    OBESITY_CLASS1: OBESITY_CLASS1,
    OBESITY_CLASS2: OBESITY_CLASS2,
    EXTREME_OBESITY: EXTREME_OBESITY
};

const HealthRecommendations = {
    UNDERWEIGHT: [
        "Increase protein and healthy fat intake",
        "Consider strength training exercises",
        "Track your daily caloric intake",
        "Have regular health check-ups",
        "Consider working with a registered dietitian"
    ],

    NORMAL_WEIGHT: [
        "Maintain regular physical activity",
        "Continue balanced nutrition",
        "Get regular health check-ups",
        "Stay hydrated",
        "Ensure adequate sleep"
    ],

    OVERWEIGHT: [
        "Increase daily physical activity",
        "Monitor portion sizes",
        "Keep a food diary",
        "Stay hydrated",
        "Consider consulting a nutritionist"
    ],

    OBESITY_CLASS1: [
        "Seek professional medical guidance",
        "Start monitored physical activity",
        "Keep detailed food and activity logs",
        "Consider stress management techniques",
        "Join support groups or programs"
    ],

    OBESITY_CLASS2: [
        "Consult with healthcare providers",
        "Get regular health screenings",
        "Consider supervised exercise programs",
        "Work with a registered dietitian",
        "Monitor other health markers regularly"
    ],

    EXTREME_OBESITY: [
        "Seek immediate medical consultation",
        "Get comprehensive health assessment",
        "Consider medical weight management options",
        "Work with a healthcare team",
        "Monitor vital signs regularly"
    ]
};

const BMIResultDialog = ({open, onClose, response}) => {
    const bmiState = response?.bmi?.state || '';
    const bmiValue = response?.bmi?.bmivalue?.toFixed(2) || response?.bmi?.bmivalue;
    const needsConsultation = bmiState !== 'NORMAL_WEIGHT';

    const handleRedirect = () => {
        window.location.href = 'https://www.echannelling.com/';
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    p: 2,
                }
            }}
        >
            <Box sx={{position: 'absolute', right: 8, top: 8}}>
                <IconButton onClick={onClose} size="small">
                    <CloseIcon size={20}/>
                </IconButton>
            </Box>

            <DialogContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 2
                }}>
                    <Box component='img' src={stateIconMap[bmiState] || stateIconMap.NORMAL_WEIGHT} width={80}
                         height={80}/>

                    <Typography variant="h5" component="h2" sx={{fontWeight: 600}}>
                        BMI : {bmiValue}
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{fontWeight: 600}}>
                        Result : {bmiState}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{mb: 2}}>
                        {StateDescriptions[bmiState] || StateDescriptions['NORMAL_WEIGHT']}
                    </Typography>

                    <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                        {(HealthRecommendations[bmiState] || HealthRecommendations['NORMAL_WEIGHT']).map((recommendation, index) => (
                            <Typography key={index} fontWeight={600} color="#757575" p={0.2}>
                                {recommendation}
                            </Typography>
                        ))}
                    </Box>


                    {needsConsultation && (
                        <Button
                            onClick={handleRedirect}
                            sx={{textTransform: "none"}}
                        >
                            https://www.echannelling.com/
                        </Button>
                    )}

                    <Button
                        variant="contained"
                        fullWidth
                        onClick={onClose}
                        sx={{
                            backgroundColor: '#F69334',
                            color: 'white',
                            py: 1.5,
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: '#F69334',
                            }
                        }}
                    >
                        OK
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default BMIResultDialog;
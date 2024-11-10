import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/bmi",
});

const BMIService = {

    // Calculate BMI
    calculateBMI: async (requestBody) => {

        try {
            const response = await axiosInstance.post('/calculate', requestBody);
            return response.data;
        } catch (error) {
            console.error("Error on Calculate BMI", error);
            throw error;
        }
    },
};

export default BMIService;
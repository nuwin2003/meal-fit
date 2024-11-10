import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import MainLayout from "./layout/MainLayout.jsx";
import Bmi from "./components/BMI.jsx";
import Meals from "./components/Meals.jsx";
import Doctors from "./components/Doctors.jsx";
import ContactUs from "./components/ContactUs.jsx";
import theme from "./theme.js";

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="bmi" element={<Bmi />} />
                        <Route path="meals" element={<Meals/>} />
                        <Route path="doctors" element={<Doctors />} />
                        <Route path="contact-us" element={<ContactUs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App

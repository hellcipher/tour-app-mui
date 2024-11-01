import { ThemeProvider } from "@mui/material";
import "./App.css";
import SearchAppBar from "./components/AppBar";
import theme from "./theme/theme";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SearchAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Tour />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

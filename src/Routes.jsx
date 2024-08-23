import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ChatPage } from "./pages/Chat/ChatPage";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />;
                <Route path="/home" element={<Home />} />;
                <Route path="/chat" element={<ChatPage />} />;
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

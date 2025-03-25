import React from 'react';
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ROUTES_MAP } from './constants/routes';
import ContactForm from './routes/ContactForm';
import Home from './routes/Home';

const Component: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path={ROUTES_MAP.home.href} />
                <Route element={<ContactForm />} path={ROUTES_MAP.contact.href} />
                <Route path="*" element={<Navigate to={ROUTES_MAP.home.href} replace={true} />} />
            </Routes>
        </Router>
    );
};

export default Component;

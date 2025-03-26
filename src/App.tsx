import React from 'react';
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ROUTES_MAP } from './constants/routes';
import ContactForm from './routes/ContactForm';
import GeneralUseConditions from './routes/GeneralConditionsOfUse';
import Home from './routes/Home';
import LegalMentions from './routes/LegalMentions';

const Component: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path={ROUTES_MAP.home.href} />
                <Route element={<ContactForm />} path={ROUTES_MAP.contact.href} />
                <Route element={<GeneralUseConditions />} path={ROUTES_MAP.generalUseConditions.href} />
                <Route element={<LegalMentions />} path={ROUTES_MAP.legalMentions.href} />
                <Route path="*" element={<Navigate to={ROUTES_MAP.home.href} replace={true} />} />
            </Routes>
        </Router>
    );
};

export default Component;

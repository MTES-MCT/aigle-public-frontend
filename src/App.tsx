import React from 'react';
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ROUTES_MAP } from './constants/routes';
import About from './routes/About';
import Accessibility from './routes/Accessibility';
import Collectivities from './routes/Collectivities';
import ContactForm from './routes/ContactForm';
import GeneralUseConditions from './routes/GeneralConditionsOfUse';
import Home from './routes/Home';
import LegalMentions from './routes/LegalMentions';
import PersonalData from './routes/PersonalData';
import StateServices from './routes/StateServices';

const Component: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path={ROUTES_MAP.home.href} />
                <Route element={<Collectivities />} path={ROUTES_MAP.collectivities.href} />
                <Route element={<StateServices />} path={ROUTES_MAP.stateServices.href} />
                <Route element={<About />} path={ROUTES_MAP.about.href} />
                <Route element={<ContactForm />} path={ROUTES_MAP.contact.href} />
                <Route element={<GeneralUseConditions />} path={ROUTES_MAP.generalUseConditions.href} />
                <Route element={<LegalMentions />} path={ROUTES_MAP.legalMentions.href} />
                <Route element={<Accessibility />} path={ROUTES_MAP.accessibility.href} />
                <Route element={<PersonalData />} path={ROUTES_MAP.personalData.href} />
                {/* Toute ancienne adresse ou adresse inconnue renvoie vers l’accueil */}
                <Route path="*" element={<Navigate to={ROUTES_MAP.home.href} replace={true} />} />
            </Routes>
        </Router>
    );
};

export default Component;

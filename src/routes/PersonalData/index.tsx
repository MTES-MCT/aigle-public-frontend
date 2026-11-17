import React from 'react';

import Layout from '../../components/Layout';
import { CONTACT_EMAIL } from '../../constants/contact';

const DPO_EMAIL = 'dpo@ecologie.gouv.fr';

const Component: React.FC = () => {
    return (
        <Layout routeId="personalData">
            <div className="fr-container">
                <div className="legal-content">
                    <h1>Données personnelles</h1>

                    <h2>Généralités</h2>
                    <p>
                        Le site Aigle ne collecte aucune donnée personnelle sans le consentement explicite de
                        l&apos;utilisateur.
                    </p>

                    <h2>Création des comptes</h2>
                    <p>
                        Les comptes utilisateurs sont créés manuellement dans le cadre de conventions signées avec les
                        collectivités, ou d&apos;accords avec les services de l&apos;État. Aucune donnée personnelle
                        n&apos;est utilisée à des fins commerciales.
                    </p>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez exercer vos
                        droits (accès, rectification, suppression) en écrivant à :<br />
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou{' '}
                        <a href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>
                    </p>

                    <h2>Formulaire de contact</h2>
                    <p>
                        Les données collectées via notre formulaire de contact (nom, prénom, adresse email, numéro de
                        téléphone, etc.) sont traitées par l’équipe Aigle, responsable de traitement, et hébergées par
                        notre sous-traitant Brevo (société française, données hébergées en UE). Ces données sont
                        utilisées pour la prise de contact, la création et la gestion des nouveaux contrats,
                        l’amélioration du suivi des comptes. Elles sont conservées pendant 2 ans à compter de leur
                        collecte par le responsable de traitement ou du dernier contact émanant de l’utilisateur
                        prospect pour les données relatives à ces derniers.
                    </p>
                    <p>
                        Vous pouvez exercer vos droits (accès, rectification, suppression) en nous contactant à :<br />
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Component;

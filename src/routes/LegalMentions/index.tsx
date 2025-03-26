import React from 'react';

import Layout from '../../components/Layout';
import { getHref } from '../../constants/routes';
import { AIGLE_PUBLIC_URL } from '../../constants/urls';

const HOSTING_URL = 'https://www.scaleway.com/';
const ACCESSIBILITY_CONTACT_EMAIL = 'accessibilite@aigle.beta.gouv.fr';
const RGPD_CONTACT_EMAIL = 'dpo@ecologie.gouv.fr';
const TEAM_CONTACT_EMAIL = 'aigle@beta.gouv.fr';

const Component: React.FC = () => {
    return (
        <Layout>
            <div className="fr-container">
                <div className="legal-content">
                    <h1>Mentions légales du service numérique AIGLE</h1>

                    <p className="last-update-text">Dernière mise à jour : mars 2025</p>
                    <ol className="legal-list">
                        <li>Éditeur du site </li>
                        <p>
                            Le site <a href={AIGLE_PUBLIC_URL}>{AIGLE_PUBLIC_URL}</a> est édité par :
                        </p>

                        <div className="grouped-paragraphs">
                            <p className="bold">
                                Ministère de la Transition Écologique et de la Cohésion des Territoires
                            </p>
                            <p>Direction Générale de l'Aménagement, du Logement et de la Nature (DGALN)</p>
                            <p>
                                Hébergé par : <span className="bold">La Fabrique Numérique de l'Écologie</span>
                            </p>
                            <p>Adresse : 92055 La Défense Cedex, France</p>
                        </div>

                        <li>Responsable de la publication</li>
                        <p>
                            <span className="bold">Responsable éditorial</span> : Équipe AIGLE (
                            <a href={`mailto:${TEAM_CONTACT_EMAIL}`}>{TEAM_CONTACT_EMAIL}</a>)
                        </p>
                        <p>
                            <span className="bold">Directeur de publication</span> : DGALN - Ministère de la Transition
                            Écologique
                        </p>

                        <li>Hébergement</li>

                        <p>Le site est hébergé par :</p>
                        <div className="grouped-paragraphs">
                            <p className="bold">Scaleway - Groupe Iliad</p>
                            <p>8 rue de la Ville l'Évêque, 75008 Paris, France</p>
                            <p>
                                <a href={HOSTING_URL}>{HOSTING_URL}</a>
                            </p>
                        </div>

                        <li>Accessibilité</li>
                        <p>
                            Ce site est partiellement conforme au RGAA (Référentiel Général d'Amélioration de
                            l'Accessibilité). Des améliorations sont en cours.
                        </p>
                        <div className="grouped-paragraphs">
                            <p>Pour signaler un problème d'accessibilité :</p>
                            <p>
                                📧 <a href={`mailto:${ACCESSIBILITY_CONTACT_EMAIL}`}>{ACCESSIBILITY_CONTACT_EMAIL}</a>
                            </p>
                        </div>

                        <li>Données personnelles</li>
                        <p>
                            Le site AIGLE ne collecte aucune donnée personnelle sans le consentement explicite de
                            l'utilisateur.
                        </p>
                        <p>
                            Le site AIGLE ne collecte aucune donnée personnelle sans le consentement explicite de
                            l'utilisateur. Les comptes utilisateurs sont créés manuellement dans le cadre de conventions
                            signées avec les collectivités, ou d'accords avec les services de l'État. Aucune donnée
                            personnelle n'est utilisée à des fins commerciales.
                        </p>
                        <div className="grouped-paragraphs">
                            <p>
                                Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez
                                exercer vos droits (accès, rectification, suppression) en écrivant à :
                            </p>
                            <p>
                                📧 <a href={`mailto:${RGPD_CONTACT_EMAIL}`}>{RGPD_CONTACT_EMAIL}</a>
                            </p>
                        </div>

                        <li>Propriété intellectuelle</li>
                        <p>
                            L'outil AIGLE et ses contenus sont protégés par les droits de propriété intellectuelle
                            détenus par l'État. Toute reproduction ou réutilisation non autorisée est interdite, sauf
                            mention contraire.
                        </p>

                        <li>Conditions d'utilisation</li>
                        <p>
                            L'utilisation de la plateforme AIGLE est réservée aux agents habilités des collectivités
                            signataires d'une convention de mise à disposition.
                        </p>

                        <p>
                            Pour consulter les Conditions Générales d'Utilisation, cliquez{' '}
                            <a href={getHref('generalUseConditions')}>ici</a>.
                        </p>
                    </ol>
                </div>
            </div>
        </Layout>
    );
};

export default Component;

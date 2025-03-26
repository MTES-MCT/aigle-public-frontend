import React from 'react';

import Layout from '../../components/Layout';
import { CONTACT_EMAIL } from '../../constants/contact';
import { AIGLE_APP_URL } from '../../constants/urls';

const Component: React.FC = () => {
    return (
        <Layout>
            <div className="fr-container">
                <div className="legal-content">
                    <h1>Conditions Générales d'Utilisation (CGU) du service numérique AIGLE</h1>

                    <p className="last-update-text">Dernière mise à jour : mars 2025</p>
                    <ol className="legal-list">
                        <li>Objet</li>
                        <p>
                            L'application AIGLE est un outil numérique permettant la détection de constructions et
                            installations illégales en zones agricoles et naturelles, à l'aide d'intelligence
                            artificielle appliquée à des données aériennes.{' '}
                        </p>
                        <p>
                            Ces Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès
                            et d'utilisation de l'application AIGLE par les utilisateurs autorisés appartenant à une
                            collectivité.
                        </p>
                        <li>Accès au service</li>
                        <p>
                            L'accès à AIGLE est réservé aux agents habilités d'une collectivité, et aux services de
                            l'État. L'accès se fait via un compte nominatif et sécurisé, délivré après validation par
                            l'équipe AIGLE.
                        </p>
                        <li>Conditions d'utilisation</li>
                        <ul>
                            <li>
                                L'utilisation de l'outil est strictement limitée à des fins professionnelles, dans le
                                cadre des missions d'urbanisme de la collectivité, ou des services de l'État.
                            </li>
                            <li>
                                Toute réutilisation, diffusion, extraction ou archivage des données en dehors de l'outil
                                est interdite.
                            </li>
                            <li>Aucune exploitation commerciale des données n'est autorisée.</li>
                            <li>
                                L'utilisateur s'engage à ne pas tenter d'extraire, copier ou manipuler les données hors
                                du cadre d'usage de la plateforme AIGLE.
                            </li>
                        </ul>
                        <li>Responsabilités de l'utilisateur</li>
                        <p>L'utilisateur est responsable :</p>
                        <ul>
                            <li>de la confidentialité de ses identifiants ;</li>
                            <li>
                                du bon usage de l'outil dans le respect de la réglementation et de la convention signée
                                par sa collectivité ;
                            </li>
                            <li>
                                de la vérification des détections fournies par AIGLE avant toute décision administrative
                                ;
                            </li>
                            <li>
                                de signaler toute anomalie ou suggestion d'amélioration à l'équipe AIGLE via
                                contact@aigle.beta.gouv.fr.
                            </li>
                        </ul>
                        <li>Propriété intellectuelle</li>
                        <p>
                            L'application AIGLE, son interface et les données associées sont protégées par le droit
                            d'auteur et le droit des bases de données. Aucune cession de droits n'est accordée à
                            l'utilisateur. Toute reproduction, modification ou ré-utilisation non autorisée est
                            interdite.
                        </p>
                        <li>Sécurité et confidentialité</li>
                        <ul>
                            <li>
                                Les données consultées sur AIGLE ne doivent pas être partagées avec des tiers non
                                autorisés.
                            </li>
                            <li>
                                L'utilisateur s'engage à respecter les règles de confidentialité énoncées dans la
                                convention.
                            </li>
                            <li>
                                Toute perte ou suspicion d'usage frauduleux du compte doit être immédiatement signalée.
                            </li>
                        </ul>
                        <li>Mises à jour</li>
                        <p>
                            Des mises à jour de l'outil et des données peuvent être effectuées. L'utilisateur s'engage à
                            utiliser uniquement la version la plus récente de l'application.
                        </p>
                        <li>Suspension et résiliation</li>
                        <p>
                            L'accès d'un utilisateur peut être suspendu ou résilié à tout moment en cas de non-respect
                            des présentes CGU ou des engagements de la convention. En cas de résiliation de la
                            convention par la collectivité, l'accès de tous les utilisateurs concernés sera
                            automatiquement clôturé.
                        </p>
                        <li>Contact</li>
                        <p>Pour toute question ou signalement :</p>
                        <p>
                            📧 <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                        </p>
                        <p>
                            🌐 <a href={AIGLE_APP_URL}>{AIGLE_APP_URL}</a>
                        </p>
                    </ol>
                </div>
            </div>
        </Layout>
    );
};

export default Component;

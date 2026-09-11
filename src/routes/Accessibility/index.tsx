import React from 'react';

import Layout from '../../components/Layout';
import { CONTACT_EMAIL } from '../../constants/contact';
import { AIGLE_PUBLIC_URL } from '../../constants/urls';

const MULTI_YEAR_PLAN_URL = 'https://www.ecologie.gouv.fr/schema-pluriannuel-daccessibilite-numerique-2025-2027';
const ANNUAL_PLAN_URL = 'https://www.ecologie.gouv.fr/plan-annuel-2026';
const DEFENDER_OF_RIGHTS_FORM_URL = 'https://formulaire.defenseurdesdroits.fr/';
const DEFENDER_OF_RIGHTS_DELEGATES_URL = 'https://www.defenseurdesdroits.fr/saisir/delegues';
const DECLARATION_GENERATOR_URL = 'https://betagouv.github.io/a11y-generateur-declaration/#create';

const Component: React.FC = () => {
    return (
        <Layout>
            <div className="fr-container">
                <div className="legal-content">
                    <h1>Déclaration d’accessibilité</h1>

                    <p className="last-update-text">Établie le 11 septembre 2026.</p>
                    <p>
                        Le Ministère de la Transition Écologique et de la Cohésion des Territoires s’engage à rendre son
                        service accessible, conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.
                    </p>
                    <p>À cette fin, nous mettons en œuvre la stratégie et les actions suivantes&nbsp;:</p>
                    <ul>
                        <li>
                            <a href={MULTI_YEAR_PLAN_URL}>Schéma pluriannuel</a>
                        </li>
                        <li>
                            <a href={ANNUAL_PLAN_URL}>Plan 2026</a>
                        </li>
                    </ul>
                    <p>
                        Cette déclaration d’accessibilité s’applique à <span className="bold">Aigle</span> (
                        <a href={AIGLE_PUBLIC_URL}>{AIGLE_PUBLIC_URL}</a>).
                    </p>

                    <h2>État de conformité</h2>
                    <p>
                        <span className="bold">Aigle</span> est <span className="bold">non conforme</span> avec le{' '}
                        <abbr title="Référentiel général d’amélioration de l’accessibilité">RGAA</abbr>. Le site n’a
                        encore pas été audité.
                    </p>

                    <h2>Amélioration et contact</h2>
                    <p>
                        Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le
                        responsable d’Aigle pour être orienté vers une alternative accessible ou obtenir le contenu sous
                        une autre forme.
                    </p>
                    <ul>
                        <li>
                            E-mail&nbsp;: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                        </li>
                    </ul>
                    <p>Nous essayons de répondre dans les 2 jours ouvrés.</p>

                    <h2>Voie de recours</h2>
                    <p>
                        Cette procédure est à utiliser dans le cas suivant&nbsp;: vous avez signalé au responsable du
                        site internet un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des
                        services du portail et vous n’avez pas obtenu de réponse satisfaisante.
                    </p>
                    <p>Vous pouvez&nbsp;:</p>
                    <ul>
                        <li>
                            Écrire un message au <a href={DEFENDER_OF_RIGHTS_FORM_URL}>Défenseur des droits</a>
                        </li>
                        <li>
                            Contacter{' '}
                            <a href={DEFENDER_OF_RIGHTS_DELEGATES_URL}>
                                le délégué du Défenseur des droits dans votre région
                            </a>
                        </li>
                        <li>
                            Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre)&nbsp;:
                            <br />
                            Défenseur des droits
                            <br />
                            Libre réponse 71120 75342 Paris CEDEX 07
                        </li>
                    </ul>

                    <hr />
                    <p>
                        Cette déclaration d’accessibilité a été créée le 11 septembre 2026 grâce au{' '}
                        <a href={DECLARATION_GENERATOR_URL}>Générateur de Déclaration d’Accessibilité</a>.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Component;

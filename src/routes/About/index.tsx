import React from 'react';

import { fr } from '@codegouvfr/react-dsfr';
import { Banner, BannerButtons, ContactButton, ExternalButton, Picture, Section } from '../../components/Blocks';
import Layout from '../../components/Layout';
import { BETA_GOUV_URL } from '../../constants/content';
import { ILLUSTRATIONS, IMAGES } from '../../constants/images';
import { ROUTES_MAP } from '../../constants/routes';
import classes from '../shared.module.scss';

const Component: React.FC = () => {
    return (
        <Layout routeId="about">
            {/* Blocs 1 et 2 */}
            <Banner
                title="Aigle, start-up d’État portée par la Fabrique Numérique de l’Écologie"
                illustration={ILLUSTRATIONS.aPropos}
                breadcrumbLabel={ROUTES_MAP.about.title}
            >
                <BannerButtons>
                    <ExternalButton label="Découvrir beta.gouv" href={BETA_GOUV_URL} />
                </BannerButtons>
            </Banner>

            {/* Bloc 3 */}
            <Section>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-7')}>
                        <h2>Aigle, service public à destination des collectivités &amp; services de l’État</h2>
                        <p>Aigle est une start-up d’État portée par la Fabrique Numérique de l’Écologie (MTE).</p>
                        <p>
                            Ce service numérique est soutenu par la Direction départementale des territoires et de la
                            mer de l’Hérault, la Direction générale de l’aménagement, du logement et de la nature et la
                            Direction de l’habitat, de l’urbanisme et des paysages.
                        </p>
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-5')}>
                        <Picture
                            image={IMAGES.partenaires}
                            alt="Logos de la Préfète de l’Hérault et des ministères de la Transition écologique, de l’Aménagement du territoire, des Transports, de la Ville et du Logement"
                            className={classes['logo-card']}
                        />
                    </div>
                </div>
            </Section>

            {/* Bloc 4 */}
            <Section background="blue">
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-8')}>
                        <h2>Notre incubation dans le programme beta.gouv</h2>
                        <p>
                            Aigle fait partie du programme{' '}
                            <a
                                href={BETA_GOUV_URL}
                                target="_blank"
                                rel="noopener"
                                title="beta.gouv.fr – nouvelle fenêtre"
                            >
                                beta.gouv.fr
                            </a>
                            . Il s’agit d’un programme d’incubation qui aide les administrations publiques à construire
                            des services numériques utiles, simples, faciles à utiliser et qui répondent vraiment aux
                            besoins des gens.
                        </p>
                        <p>
                            Après une expérimentation réussie,{' '}
                            <strong>
                                la plateforme Aigle est aujourd’hui déployée sur 56 territoires en France métropolitaine
                                et dans les départements d’outre-mer.
                            </strong>
                        </p>
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-4')}>
                        <Picture image={IMAGES.betagouv} alt="beta.gouv.fr" className={classes['logo-card']} />
                    </div>
                </div>
            </Section>

            {/* Bloc 5 */}
            <Section>
                <h2>Rencontrez Magali Migeon, intrapreneure Aigle &amp; Lucca</h2>
                <p>
                    Ingénieure en agriculture et environnement, Magali a développé une expertise autour des enjeux
                    territoriaux, notamment en matière de lutte contre les installations et constructions illégales en
                    milieu naturel, agricole et forestier.
                </p>
                <p>
                    Aujourd’hui, elle met cette connaissance du terrain et son expertise métier au service de
                    l’intrapreneuriat, dans le cadre du programme beta.gouv. Intrapreneure, elle pilote{' '}
                    <strong>Aigle et Lucca</strong>, en mobilisant sa connaissance des besoins des agents et des
                    politiques publiques.
                </p>
                <p className={fr.cx('fr-mb-0')}>
                    Elle incarne ainsi une approche de l’innovation publique ancrée dans les métiers : faire de
                    l’expertise opérationnelle un moteur de transformation et mettre l’innovation au service de celles
                    et ceux qui font vivre le service public.
                </p>
            </Section>

            {/* Bloc 6 */}
            <Section background="blue">
                <h2>Contacter l’équipe</h2>
                <ContactButton label="Effectuer une demande d’information" />
            </Section>
        </Layout>
    );
};

export default Component;

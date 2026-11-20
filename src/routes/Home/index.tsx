import React from 'react';

import { fr } from '@codegouvfr/react-dsfr';
import { Tile } from '@codegouvfr/react-dsfr/Tile';
import DataVisualization from '@codegouvfr/react-dsfr/picto/DataVisualization';
import Environment from '@codegouvfr/react-dsfr/picto/Environment';
import Firefighter from '@codegouvfr/react-dsfr/picto/Firefighter';
import JusticeScales from '@codegouvfr/react-dsfr/picto/JusticeScales';
import MapPin from '@codegouvfr/react-dsfr/picto/MapPin';
import Money from '@codegouvfr/react-dsfr/picto/Money';
import Notification from '@codegouvfr/react-dsfr/picto/Notification';
import clsx from 'clsx';
import { ContactButton, ExternalButton, MultilineTitle, PictoTiles, Picture, Section } from '../../components/Blocks';
import Layout from '../../components/Layout';
import { LUCCA_URL } from '../../constants/content';
import { IMAGES } from '../../constants/images';
import { getHref } from '../../constants/routes';
import classes from './index.module.scss';

const PICTO_SIZE = '80px';

const SERVICE_ITEMS = [
    {
        pictogram: <DataVisualization fontSize={PICTO_SIZE} />,
        title: 'Connaître l’ampleur du problème',
        desc: 'La détection automatique localise et quantifie les parcelles détournées, et mesure leur évolution.',
    },
    {
        pictogram: <MapPin fontSize={PICTO_SIZE} />,
        title: 'Prioriser et définir son plan de contrôle',
        desc: 'Croisez les détections avec les enjeux du territoire : zones inondables, risque incendie, espaces naturels remarquables, captages d’eau potable.',
    },
    {
        pictogram: <Notification fontSize={PICTO_SIZE} />,
        title: 'Agir et suivre l’évolution',
        desc: 'Lancez la procédure et suivez les statistiques de votre territoire pour piloter votre action.',
    },
];

const WHY_ITEMS = [
    {
        pictogram: <Firefighter fontSize={PICTO_SIZE} />,
        title: 'Sécurité',
        desc: 'Des personnes exposées aux inondations et aux feux de forêt, sans accès possible pour les secours.',
    },
    {
        pictogram: <Environment fontSize={PICTO_SIZE} />,
        title: 'Environnement',
        desc: 'Des espaces et paysages dégradés, des eaux usées non traitées, des terres agricoles détournées, des risques d’incendie accrus.',
    },
    {
        pictogram: <JusticeScales fontSize={PICTO_SIZE} />,
        title: 'Équité',
        desc: 'Un sentiment d’impunité chez les contrevenants, une inégalité entre administrés.',
    },
    {
        pictogram: <Money fontSize={PICTO_SIZE} />,
        title: 'Coût',
        desc: 'Une augmentation de la spéculation foncière, et des décisions de justice longues et coûteuses.',
    },
];

const TERRITORIES = [
    {
        name: 'Vic-la-Gardiole, Hérault (34)',
        detected: 209,
        controls: 26,
        reports: 24,
        restorations: 10,
    },
    {
        name: 'Marseillan, Hérault (34)',
        detected: 500,
        controls: 148,
        reports: 143,
        restorations: 20,
    },
];

const Component: React.FC = () => {
    return (
        <Layout routeId="home">
            {/* Bloc 1 */}
            <Section>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-lg-6')}>
                        <h1>
                            Détecter, cibler et agir contre les installations illégales sur les territoires naturels
                            &amp; agricoles
                        </h1>
                        <p className={fr.cx('fr-text--lead')}>
                            Aigle accompagne les collectivités et les services de l’État à repérer, prioriser et suivre
                            les installations illégales dans les espaces naturels, agricoles et forestiers, grâce à
                            l’imagerie aérienne et à l’intelligence artificielle.
                        </p>
                        <ContactButton label="Nous contacter" />
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-lg-6')}>
                        <Picture
                            image={IMAGES.mockups}
                            alt="Maquettes de l’application Aigle sur ordinateur, tablette et smartphone"
                            eager
                        />
                    </div>
                </div>
            </Section>

            {/* Bloc 2 */}
            <Section>
                <h2>
                    <MultilineTitle
                        lines={[
                            'Un service public pour détecter & cibler les installations illégales',
                            'sur les territoires naturels, agricoles et forestiers',
                        ]}
                    />
                </h2>
                <PictoTiles items={SERVICE_ITEMS} columnClassName={fr.cx('fr-col-12', 'fr-col-md-4')} />
            </Section>

            {/* Bloc 3 */}
            <Section background="blue">
                <h2 className={classes.centered}>Aigle accompagne les collectivités &amp; services de l’État</h2>
                <ul className={clsx(fr.cx('fr-grid-row', 'fr-grid-row--gutters'), classes['raw-list'])}>
                    <li className={fr.cx('fr-col-12', 'fr-col-md-6')}>
                        <Tile
                            className={classes.tile}
                            orientation="horizontal"
                            titleAs="h3"
                            title="Utiliser Aigle à l’échelle d’un territoire"
                            desc="Vous représentez une collectivité : commune ou EPCI"
                            linkProps={{ href: getHref('collectivities') }}
                            enlargeLinkOrButton
                        />
                    </li>
                    <li className={fr.cx('fr-col-12', 'fr-col-md-6')}>
                        <Tile
                            className={classes.tile}
                            orientation="horizontal"
                            titleAs="h3"
                            title="Déployer Aigle dans un département"
                            desc="Vous représentez un service de l’État : DDT, DDTM, DEAL"
                            linkProps={{ href: getHref('stateServices') }}
                            enlargeLinkOrButton
                        />
                    </li>
                </ul>
            </Section>

            {/* Bloc 4 */}
            <Section>
                <h2 className={classes.centered}>Pourquoi agir contre les installations illégales ?</h2>
                <PictoTiles items={WHY_ITEMS} columnClassName={fr.cx('fr-col-12', 'fr-col-sm-6', 'fr-col-lg-3')} />
            </Section>

            {/* Bloc 5 */}
            <Section>
                <h2 className={classes.centered}>Aigle, un outil complémentaire à Lucca</h2>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-6')}>
                        <h3>2 outils numériques pour lutter contre les constructions &amp; installations illégales</h3>
                        <p>
                            Notre équipe travaille sur une large mission : la{' '}
                            <strong>préservation des espaces naturels et agricoles</strong>.
                            <br />
                            Nous déployons notre action à travers{' '}
                            <strong>
                                2 outils numériques pour lutter contre les constructions &amp; installations illégales
                            </strong>
                            , de la détection aux procédures.
                        </p>
                    </div>
                    <div className={clsx(fr.cx('fr-col-12', 'fr-col-md-6'), classes['separated-column'])}>
                        <Picture
                            image={IMAGES.aigleLucca}
                            alt="Logos Aigle, détecter et cibler, et Lucca, faciliter les procédures"
                            className={classes['aigle-lucca']}
                        />
                    </div>
                </div>
                <hr className={fr.cx('fr-mt-6w', 'fr-pb-6w')} />
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-6')}>
                        <figure className={fr.cx('fr-content-media', 'fr-my-0')} role="group">
                            <Picture
                                image={IMAGES.localisation}
                                alt="Carte des territoires utilisateurs d’Aigle et Lucca. Lucca et Aigle : Somme, Val-d’Oise, Morbihan, Gironde, Ardèche, Tarn, Haute-Garonne, Hérault. Aigle uniquement : Manche, Seine-et-Marne, Charente-Maritime, Dordogne, Lot, Gard, Vaucluse, Bouches-du-Rhône, Pyrénées-Atlantiques, Réunion, Guadeloupe, Martinique, Guyane. Lucca uniquement : Ille-et-Vilaine, Aveyron, Hautes-Pyrénées, Pyrénées-Orientales."
                            />
                        </figure>
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-6')}>
                        <h3>Ils utilisent Aigle &amp; Lucca</h3>
                        {TERRITORIES.map((territory) => (
                            <div key={territory.name} className={fr.cx('fr-mb-3w')}>
                                <p
                                    className={clsx(
                                        fr.cx('fr-text--lg', 'fr-text--bold', 'fr-mb-1w'),
                                        classes.territory,
                                    )}
                                >
                                    {territory.name}
                                </p>
                                <p className={fr.cx('fr-mb-0')}>
                                    {territory.detected} parcelles ayant une installation illégale détectées sur{' '}
                                    <strong>Aigle</strong>
                                    <br />
                                    {territory.controls} contrôles conduits avec <strong>Lucca</strong>
                                    <br />
                                    {territory.reports} PV dressés avec <strong>Lucca</strong>
                                    <br />À date, {territory.restorations} remises en état des espaces naturels &amp;
                                    agricoles
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bloc 6 : Découvrir Lucca, dans la même section, sous un séparateur */}
                <hr className={fr.cx('fr-mt-6w', 'fr-pb-6w')} />
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-7')}>
                        <h2 className={fr.cx('fr-mb-2w')}>Découvrir Lucca</h2>
                        <p>
                            Un outil complémentaire à Aigle pour faciliter, automatiser et sécuriser les procédures
                            d’infraction au code de l’urbanisme : rédaction guidée des PV, courriers pré-remplis, suivi
                            des dossiers jusqu’à la remise en état.
                        </p>
                        <ExternalButton label="Découvrir Lucca" href={LUCCA_URL} priority="secondary" />
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-5')}>
                        <Picture
                            image={IMAGES.luccaLogo}
                            alt="Lucca, faciliter les procédures"
                            className={classes['logo-card']}
                        />
                    </div>
                </div>
            </Section>

            {/* Bloc 7 */}
            <Section background="blue">
                <h2 className={fr.cx('fr-mb-2w')}>Échangeons ensemble</h2>
                <p>
                    Vous souhaitez savoir si cela pourrait vous être utile ou comment mettre en place Aigle ou Lucca sur
                    votre territoire ?
                </p>
                <ContactButton label="Nous contacter pour découvrir Aigle & Lucca" />
            </Section>
        </Layout>
    );
};

export default Component;

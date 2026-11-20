import React from 'react';

import { fr } from '@codegouvfr/react-dsfr';
import CityHall from '@codegouvfr/react-dsfr/picto/CityHall';
import DataVisualization from '@codegouvfr/react-dsfr/picto/DataVisualization';
import LocationFrance from '@codegouvfr/react-dsfr/picto/LocationFrance';
import Search from '@codegouvfr/react-dsfr/picto/Search';
import {
    Banner,
    BannerButtons,
    ContactButton,
    ContactFooterBlock,
    DownloadButton,
    Faq,
    FeatureItem,
    FeatureShowcase,
    KeyFigures,
    MultilineTitle,
    PictoTiles,
    Section,
    StepsAccordion,
    Testimonials,
} from '../../components/Blocks';
import Layout from '../../components/Layout';
import { AIGLE_NOM_SVG, AVATARS, ILLUSTRATIONS, IMAGES } from '../../constants/images';
import { ROUTES_MAP } from '../../constants/routes';
import classes from '../shared.module.scss';

const PICTO_SIZE = '80px';

const BENEFITS = [
    {
        pictogram: <LocationFrance fontSize={PICTO_SIZE} />,
        title: 'Diagnostic du département',
        desc: 'Mesurez l’ampleur des installations illégales dans chaque EPCI ou commune, et identifiez les territoires à risque.',
    },
    {
        pictogram: <Search fontSize={PICTO_SIZE} />,
        title: 'Action ciblée sur les installations illégales prioritaires',
        desc: 'Repérez les communes les plus concernées, les moins actives et les plus prêtes à agir, pour concentrer vos efforts là où ils comptent.',
    },
    {
        pictogram: <CityHall fontSize={PICTO_SIZE} />,
        title: 'Mobilisation des communes',
        desc: 'Alertez une commune avec une fiche de signalement officielle et accompagnez-la dans le passage à l’action.',
    },
    {
        pictogram: <DataVisualization fontSize={PICTO_SIZE} />,
        title: 'Pilotage du département',
        desc: 'Suivez l’activité des communes et l’évolution des installations illégales, et rendez compte au préfet.',
    },
];

const FEATURES: FeatureItem[] = [
    {
        iconId: 'fr-icon-road-map-line',
        title: 'Visualisez les installations illégales',
        desc: 'détectées sur l’ensemble du département, par commune ou par EPCI.',
    },
    {
        iconId: 'fr-icon-send-plane-line',
        title: 'Transmettez une fiche de signalement',
        desc: 'en PDF à une commune pour l’alerter.',
    },
    {
        iconId: 'fr-icon-team-line',
        title: 'Suivez l’activité des communes',
        desc: 'communes engagées, communes actives sur les 30 derniers jours, agents formés, signalements qualifiés ou traités, taux de traitement.',
    },
    {
        iconId: 'fr-icon-line-chart-line',
        title: 'Suivez les statistiques du territoire',
        desc: 'part de parcelles détournées, taux de remise en état, nombre de signalements.',
    },
    {
        iconId: 'fr-icon-calendar-todo-line',
        title: 'Consultez les plans de contrôle',
        desc: 'définis par les communes, et construisez votre plan de contrôle territorial.',
    },
    {
        iconId: 'fr-icon-government-line',
        title: 'Agissez en appui d’une commune',
        desc: 'en défaut ou en demande de soutien, grâce à l’accès à toutes les informations du territoire.',
    },
];

const STEPS = [
    {
        title: 'Cadrage & engagement',
        desc: 'Un premier échange avec notre équipe permet de faire le point : problématiques du territoire, actions déjà menées, communes mobilisées. Vous nommez ensuite un référent projet et choisissez 3 à 5 collectivités test. Le préfet signe une lettre d’engagement adressée à la DGALN.',
    },
    {
        title: 'Préparation du territoire (1 mois)',
        desc: 'Complétez le formulaire de pré-intégration et transmettez vos couches géographiques (aléas feu de forêt, PPRI, espaces naturels sensibles, trame verte et bleue). Notre équipe génère les zones à enjeux puis les détections, nettoie les faux positifs et crée les accès.',
    },
    {
        title: 'Formation (1 mois)',
        desc: '1h30 pour les référents DDT(M) : navigation, zones à enjeux, qualification d’une détection, pilotage départemental. Puis formation des collectivités test, co-animée avec notre équipe.',
    },
    {
        title: 'Expérimentation (3 mois)',
        desc: 'Les collectivités test transforment les détections en actions : contrôles, courriers, PV. Un point mensuel, puis un bilan Go / No-Go, décident de l’ouverture au reste du territoire.',
    },
    {
        title: 'Ouverture par vagues (M5 → M12)',
        desc: 'Un questionnaire d’éligibilité vous aide à repérer les collectivités prêtes à rejoindre Aigle. Elles arrivent en 2 à 3 vagues. Votre DDT(M) prend progressivement la main sur les formations.',
    },
    {
        title: 'Pilotage & support',
        desc: 'Suivez l’activité des communes dans le tableau de suivi territorial, envoyez des fiches de signalement et construisez votre plan de contrôle territorial. Notre équipe reste en appui : support 5 jours sur 7, webinaires trimestriels, bilan annuel.',
    },
];

const DEPLOYMENT_KIT_URL = `${import.meta.env.BASE_URL}documents/kit-deploiement-aigle-lucca-ddtm.pdf`;

const TESTIMONIALS = [
    {
        text: 'Aigle permet de cibler les contrôles de manière plus pertinente et plus efficiente, en tenant compte des différents enjeux et notamment des risques potentiels pour les populations.',
        author: 'Correspondante territoriale',
        avatarUrl: AVATARS.elue,
        source: 'DDTM de l’Hérault',
    },
    {
        text: 'Aigle est simple, efficace et motivant. On gagne du temps, c’est plus fluide.',
        author: 'Directeur d’une DDTM',
        avatarUrl: AVATARS.elu,
    },
    {
        text: 'Avant l’intervention de l’État par le biais d’Aigle, nous n’avions pas d’action sur la cabanisation.',
        author: 'Commandant de gendarmerie',
        avatarUrl: AVATARS.gendarme,
    },
];

const FAQ = [
    {
        question: 'Pourquoi agir contre les installations illégales ?',
        answer: 'Pour protéger le foncier agricole et naturel, prévenir les risques (incendies, inondations, accès des secours), préserver l’environnement et les paysages, et réduire la charge administrative et financière des communes. Intervenir dès les premières installations évite des procédures longues et coûteuses.',
    },
    {
        question: 'Comment déployer Aigle progressivement ?',
        answer: 'Nous formons d’abord vos référents, puis vous lancez quelques communes pilotes déjà engagées. Leurs retours permettent d’ajuster l’organisation avant d’élargir, sans saturer vos équipes.',
    },
    {
        question: 'Quelles communes accompagner en priorité ?',
        answer: 'Celles qui réunissent trois conditions : une équipe disponible et formée à la police de l’urbanisme, des installations illégales déjà identifiées localement, et le soutien du maire. Un questionnaire de maturité vous aide à les choisir.',
    },
    {
        question: 'Comment les communes rejoignent-elles Aigle ?',
        answer: 'Vous leur présentez l’outil et identifiez leurs agents référents. Chaque commune signe ensuite une convention d’utilisation en ligne ; notre équipe prépare son territoire et crée les accès.',
    },
    {
        question: 'Comment suivre l’action des communes ?',
        answer: 'Avec le tableau de suivi territorial : communes engagées, communes actives sur les 30 derniers jours, agents formés, signalements qualifiés ou traités, taux de traitement.',
    },
    {
        question: 'Aigle est-il fiable ?',
        answer: 'Environ 15 % des détections sont des « faux positifs ». Notre équipe en retire une grande partie lors de la préparation du territoire, et chaque détection reste à vérifier par un agent. Vous gagnez du temps mais gardez la main.',
    },
];

const Component: React.FC = () => {
    return (
        <Layout routeId="stateServices">
            {/* Blocs 1 et 2 */}
            <Banner
                title="Services de l’État : Déployer Aigle dans un département"
                illustration={ILLUSTRATIONS.etat}
                breadcrumbLabel={ROUTES_MAP.stateServices.title}
            >
                <p className={fr.cx('fr-text--lead', 'fr-mb-0')}>
                    L’outil Aigle à destination
                    <br />
                    des DDT, DDTM et DEAL.
                </p>
                <BannerButtons>
                    <ContactButton label="Nous contacter" />
                </BannerButtons>
            </Banner>

            {/* Bloc 3 */}
            <Section background="blue">
                <h2>
                    Détection des détournements d’usage des espaces naturels &amp; agricoles : mobilisez les
                    collectivités, suivez leur action
                </h2>
                <PictoTiles items={BENEFITS} columnClassName={fr.cx('fr-col-12', 'fr-col-md-6', 'fr-col-lg-3')} />
            </Section>

            {/* Bloc 4 */}
            <Section>
                <KeyFigures showDistribution />
            </Section>

            {/* Bloc 5 */}
            <Section background="blue">
                <h2>
                    <MultilineTitle
                        lines={[
                            'Un service public pour lutter contre les installations illégales',
                            'en territoire naturel & agricole',
                        ]}
                    />
                </h2>
                <FeatureShowcase
                    rows={[
                        {
                            image: IMAGES.captureFicheObjet,
                            imageAlt:
                                'Capture de l’application Aigle : fiche d’un objet détecté avec le téléchargement des fiches de signalement',
                            items: FEATURES.slice(0, 3),
                        },
                        {
                            image: IMAGES.captureStatutsControle,
                            imageAlt:
                                'Graphique de l’application Aigle : changements de statut de contrôle par période (courrier préalable envoyé, contrôlé terrain, PV dressé, remis en état)',
                            items: FEATURES.slice(3),
                        },
                    ]}
                />
            </Section>

            {/* Bloc 6 */}
            <Section>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-7')}>
                        <h2>Intégrez Aigle à vos outils &amp; à ceux de vos collectivités</h2>
                        <ul>
                            <li>
                                Un service de l’État,{' '}
                                <strong>sans coût pour la DDT(M) ni pour les collectivités</strong>, mais nécessitant un
                                engagement formalisé par une lettre signée du préfet.
                            </li>
                            <li>
                                <strong>Aigle est relié à Lucca</strong> : la procédure lancée dans Aigle se poursuit
                                dans Lucca.
                            </li>
                        </ul>
                        <ContactButton label="Nous contacter" />
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-5')}>
                        <img className={classes['aigle-name']} src={AIGLE_NOM_SVG} alt="Aigle" width={400} />
                    </div>
                </div>
            </Section>

            {/* Bloc 7 */}
            <Section background="blue">
                <h2>Déployer Aigle dans votre département, étape par étape</h2>
                <StepsAccordion items={STEPS} />
                <div className={classes['centered-cta']}>
                    <DownloadButton
                        label="En savoir plus : télécharger le kit de déploiement"
                        detail="PDF, 2,6 Mo"
                        href={DEPLOYMENT_KIT_URL}
                    />
                </div>
            </Section>

            {/* Bloc 9 */}
            <Section>
                <h2>Ce qu’en pensent les services de l’État</h2>
                <Testimonials items={TESTIMONIALS} />
            </Section>

            {/* Bloc 10 */}
            <Section>
                <Faq title="Questions fréquentes sur le déploiement d’Aigle dans un département" items={FAQ} />
            </Section>

            {/* Bloc 11 */}
            <Section background="blue">
                <h2 className={fr.cx('fr-h3')}>Découvrir notre kit pour déployer Lucca dans votre département</h2>
                <DownloadButton
                    label="Télécharger le kit de déploiement"
                    detail="PDF, 2,6 Mo"
                    href={DEPLOYMENT_KIT_URL}
                />
            </Section>

            {/* Bloc 12 */}
            <ContactFooterBlock background="white" />
        </Layout>
    );
};

export default Component;

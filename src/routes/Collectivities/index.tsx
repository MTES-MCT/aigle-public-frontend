import React from 'react';

import { fr } from '@codegouvfr/react-dsfr';
import Community from '@codegouvfr/react-dsfr/picto/Community';
import DocumentAdd from '@codegouvfr/react-dsfr/picto/DocumentAdd';
import MapPicto from '@codegouvfr/react-dsfr/picto/Map';
import MapPin from '@codegouvfr/react-dsfr/picto/MapPin';
import {
    Banner,
    BannerButtons,
    ContactButton,
    ContactFooterBlock,
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
        pictogram: <MapPicto fontSize={PICTO_SIZE} />,
        title: 'Gagner du temps sur le repérage',
        desc: 'Fini les heures sur Google Earth et les visites sur des terrains difficiles d’accès : les installations illégales de votre territoire viennent à vous.',
    },
    {
        pictogram: <MapPin fontSize={PICTO_SIZE} />,
        title: 'Agir là où c’est prioritaire',
        desc: 'Concentrez vos moyens sur les zones à risque pour les habitants et l’environnement, et intervenez avant la prescription.',
    },
    {
        pictogram: <DocumentAdd fontSize={PICTO_SIZE} />,
        title: 'Sécuriser vos procédures',
        desc: 'Appuyez vos courriers et vos PV sur des preuves aériennes datées, pour des procédures plus solides.',
    },
    {
        pictogram: <Community fontSize={PICTO_SIZE} />,
        title: 'Prévenir les récidives',
        desc: 'Montrez que le territoire est surveillé, rendez compte aux élus et dissuadez les nouvelles installations.',
    },
];

const FEATURES: FeatureItem[] = [
    {
        iconId: 'fr-icon-road-map-line',
        title: 'Détectez les installations illégales',
        desc: "Grâce à l'utilisation de l'IA sur les images aériennes : constructions, piscines, mobil-homes, caravanes et bateaux.",
    },
    {
        iconId: 'fr-icon-filter-line',
        title: 'Filtrez selon les enjeux de la parcelle',
        desc: 'Sans jongler entre Géoportail, le cadastre, le PLU(i) et SITADEL.',
    },
    {
        iconId: 'fr-icon-calendar-todo-line',
        title: 'Définissez votre plan de contrôle',
        desc: 'Priorisez les contrôles à effectuer selon les zones à enjeux et les risques de récidives.',
    },
    {
        iconId: 'fr-icon-download-line',
        title: <MultilineTitle lines={['Exportez les photos aériennes', '& données']} />,
        desc: 'À joindre aux documents administratifs ou à exporter vers votre SIG.',
    },
    {
        iconId: 'fr-icon-file-text-line',
        title: 'Lancez les procédures',
        desc: 'Complétez le courrier préalable à la visite pré-rempli depuis Aigle, puis poursuivez la procédure dans Lucca sans double saisie.',
    },
    {
        iconId: 'fr-icon-time-line',
        title: 'Suivez l’historique d’une parcelle',
        desc: "et les statistiques d’évolution du territoire : parcelles concernées, taux d'installations illégales, agents assermentés actifs sur Aigle, taux de remise en état, etc.",
    },
];

const STEPS = [
    {
        title: 'Vérifier votre éligibilité',
        desc: 'Votre DDT(M) vous transmet un questionnaire d’éligibilité. Selon le résultat, vous rejoignez la prochaine vague de déploiement ou vous êtes d’abord accompagné (identifier un agent, obtenir le soutien des élus).',
    },
    {
        title: 'Signer la convention',
        desc: 'La convention d’utilisation vous est envoyée par e-mail et se signe en ligne. Aucune autre démarche contractuelle n’est nécessaire. Aigle est gratuit.',
    },
    {
        title: 'Préparer votre territoire',
        desc: 'Notre équipe intègre vos zones à enjeux et les détections, puis nettoie une grande partie des faux positifs avant d’ouvrir vos accès. Comptez environ 3 semaines.',
    },
    {
        title: 'Vous former',
        desc: '1h30 pour passer de la détection au contrôle : repérer une détection, l’évaluer, mettre à jour son statut, préparer le contrôle terrain.',
    },
    {
        title: 'Passer à l’action',
        desc: 'Vous construisez un premier plan de contrôle. Pendant 4 semaines, nous vous accompagnons de près sur vos premiers cas.',
    },
    {
        title: 'Être accompagné dans la durée',
        desc: 'Notre équipe reste joignable 5 jours sur 7 par mail et téléphone. Des webinaires trimestriels présentent les bonnes pratiques et les nouveautés de l’outil.',
    },
];

const TESTIMONIALS = [
    {
        text: 'On organise mieux nos actions sur le territoire — la carte nous change tout.',
        author: 'Policier municipal',
        source: 'Commune',
        avatarUrl: AVATARS.policier,
    },
    {
        text: 'Aigle me permet de pouvoir repérer les infractions sur les parcelles plus vite qu’avec Google Earth que j’utilisais avant.',
        author: 'Équipe ADS',
        avatarUrl: AVATARS.elue,
        source: 'Commune du Gard',
    },
    {
        text: 'Aigle permet de détecter de nouvelles infractions. Lors des mises en demeure, la fiche de signalement permet d’avoir un document officiel qui a un impact sur les habitants.',
        author: 'Commune de l’Hérault',
        avatarUrl: AVATARS.elu,
    },
];

const FAQ = [
    {
        question: 'Aigle augmente-t-il mon temps de travail ?',
        answer: 'Aigle vous permet de détecter de nombreuses parcelles sujettes au détournement d’usage des sols, mais vous fait gagner du temps sur les repérages sur Google Earth et sur le terrain. De plus, Aigle est conçu pour faciliter la construction de votre plan de contrôle, et donc de pouvoir prioriser votre intervention suite aux détections.',
    },
    {
        question: 'Aigle est-il fiable ?',
        answer: 'Environ 15 % des détections sont des « faux positifs » : il s’agit de parcelles sur lesquelles l’IA détecte une installation, qui n’est finalement pas réelle (il peut s’agir d’un arbre ou d’un camion par exemple). Notre équipe vous accompagne pour identifier ces « faux positifs ». À savoir : chaque détection reste à vérifier par un agent, vous gagnez du temps mais gardez donc la main.',
    },
    {
        question: 'À quelle fréquence les images sont-elles mises à jour ?',
        answer: 'Tous les 3 ans aujourd’hui ; l’équipe travaille à une mise à jour annuelle grâce aux satellites. Même des images de 3 ans permettent aux territoires de détecter de nouvelles priorités. Vous pouvez aussi ajouter manuellement une parcelle détournée récemment.',
    },
    {
        question: 'J’ai déjà un SIG. Aigle reste-t-il utile ?',
        answer: 'Oui. Aigle détecte automatiquement les installations illégales grâce à l’IA, ce que peu de SIG permettent. Il permet aussi d’agir : lancer une procédure, suivre l’historique d’une parcelle. Il est relié à Lucca pour rédiger la procédure de bout en bout. Et vous pouvez exporter les données Aigle vers votre SIG.',
    },
    {
        question: 'L’outil est-il facile à utiliser ?',
        answer: 'Oui. Après la signature du partenariat, une formation de 1h30 en visioconférence vous rend autonome. Notre équipe reste disponible 5 jours sur 7, et des webinaires réguliers présentent les nouveautés.',
    },
];

const Component: React.FC = () => {
    return (
        <Layout routeId="collectivities">
            {/* Blocs 1 et 2 */}
            <Banner
                title="Collectivités : Utiliser Aigle sur mon territoire"
                illustration={ILLUSTRATIONS.collectivites}
                breadcrumbLabel={ROUTES_MAP.collectivities.title}
            >
                <p className={fr.cx('fr-text--lead', 'fr-mb-0')}>
                    L’outil Aigle à destination des agents assermentés
                    <br />
                    &amp; des services urbanisme, aménagement et ADS.
                </p>
                <BannerButtons>
                    <ContactButton label="Nous contacter" />
                </BannerButtons>
            </Banner>

            {/* Bloc 3 */}
            <Section background="blue">
                <h2>
                    <MultilineTitle
                        lines={[
                            'Détecter, cibler et suivre la lutte contre les installations illégales',
                            'sur les territoires naturels & agricoles',
                        ]}
                    />
                </h2>
                <PictoTiles items={BENEFITS} columnClassName={fr.cx('fr-col-12', 'fr-col-md-6', 'fr-col-lg-3')} />
            </Section>

            {/* Bloc 4 */}
            <Section>
                <KeyFigures showDistribution />
            </Section>

            {/* Bloc 5 */}
            <Section background="blue">
                <h2>Un service public pour détecter, cibler et suivre les installations illégales</h2>
                <FeatureShowcase
                    rows={[
                        {
                            image: IMAGES.captureFiltres,
                            imageAlt:
                                'Capture de l’application Aigle : carte des détections avec le panneau de filtres par catégorie et la fiche d’un objet détecté',
                            items: FEATURES.slice(0, 3),
                        },
                        {
                            image: IMAGES.captureHistorique,
                            imageAlt:
                                'Capture de l’application Aigle : fiche d’une détection avec son statut de contrôle et l’historique des images de 2017 à 2024',
                            items: FEATURES.slice(3),
                        },
                    ]}
                />
            </Section>

            {/* Bloc 6 */}
            <Section>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-7')}>
                        <h2>Un outil gratuit, utilisable simplement</h2>
                        <ul>
                            <li>
                                Un service de l’État, <strong>sans coût pour la collectivité</strong>.
                            </li>
                            <li>
                                <strong>Accessible au bureau comme sur le terrain</strong>, grâce à la possibilité
                                d’utiliser Aigle avec une tablette.
                            </li>
                            <li>
                                <strong>Relié à Lucca</strong> : la procédure lancée dans Aigle se poursuit dans Lucca.
                            </li>
                        </ul>
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-5')}>
                        <img className={classes['aigle-name']} src={AIGLE_NOM_SVG} alt="Aigle" width={400} />
                    </div>
                </div>
            </Section>

            {/* Bloc 8 */}
            <Section background="blue">
                <h2>Rejoindre Aigle en 6 étapes</h2>
                <StepsAccordion items={STEPS} />
            </Section>

            {/* Bloc 9 */}
            <Section>
                <h2>Ce qu’en pensent nos utilisateurs</h2>
                <Testimonials items={TESTIMONIALS} />
            </Section>

            {/* Bloc 10 */}
            <Section>
                <Faq title="Questions fréquentes sur l’utilisation d’Aigle" items={FAQ} />
            </Section>

            {/* Bloc 11 */}
            <ContactFooterBlock />
        </Layout>
    );
};

export default Component;

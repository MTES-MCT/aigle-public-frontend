import missionImg from '@/assets/mission.png';
import { Button } from '@codegouvfr/react-dsfr/Button';
import clsx from 'clsx';
import React from 'react';
import Layout from '../../components/Layout';
import { MAIL_TO_LINK } from '../../constants/routes';
import classes from './index.module.scss';

const Component: React.FC = () => {
    return (
        <Layout>
            <div className={classes['sections-container']}>
                <section className={classes['section-mission']}>
                    <section className={classes['text-section']}>
                        <h1>
                            Facilitez la lutte contre les constructions ou installations illégales, la cabanisation et
                            les détournements d'usages dans les espaces naturels, agricoles et forestiers afin de les
                            préserver
                        </h1>
                        <p className="bold">
                            AIGLE, grâce à la détection automatisée par intelligence artificielle, vous aide en quelques
                            clics à connaître, mesurer, localiser et identifier les parcelles naturelles et agricoles
                            artificialisées illégalement de votre territoire.
                        </p>
                        <p>
                            Dégradation (pollution des eaux, déchets) de la nature, gaspillage (mitage, détournement de
                            l'usage…) des terres agricoles, insécurité des personnes face aux risques inondation et feu
                            de forêt, sont quelques-unes des raisons pour lutter contre ce phénomène.
                        </p>
                        <p>
                            AIGLE est destiné aux collectivités et aux services de l'État au service de leur stratégie
                            de lutte contre les constructions ou installations illégales. Il permet de prioriser et
                            cibler son action, mobiliser et dissuader.
                        </p>
                        <p>
                            Facilement utilisable depuis son bureau ou sur le terrain via une tablette ou un smartphone,
                            et doté d'une interface cartographique et de diverses fonctionnalités “utilisateur”, il
                            identifie différents types d'installations comme les constructions (maison, chalets,
                            mazets…), les mobil-homes, les caravanes, piscines et les bateaux.
                        </p>

                        <Button
                            linkProps={{
                                href: MAIL_TO_LINK,
                            }}
                        >
                            Demander une démo
                        </Button>
                    </section>

                    <img className={classes['section-mission-img']} src={missionImg} />
                </section>

                <section className={clsx(classes['text-section'], classes['section-definition'])}>
                    <h1>
                        Qu'appelle-t-on constructions/installations illégales, cabanisation ou détournements d'usage ?
                    </h1>
                    <p>
                        C'est l'implantation sans autorisation de constructions ou d'installations diverses (maisons,
                        bâtis, caravanes, mobil-homes, chalets, yourtes…) occupées épisodiquement ou de façon permanente
                        à des fins d'habitat ou de commerce, dans des zones inconstructibles, agricoles ou naturelles et
                        le plus souvent en zone à risque inondation ou feux de forêt.
                    </p>

                    <h1>Pourquoi est-il important de se mobiliser pour lutter contre ?</h1>
                    <p>
                        Outre le fait qu'elle constitue un délit, la cabanisation a de nombreuses conséquences néfastes
                        :
                    </p>
                    <ul>
                        <li>
                            Elle <span className="bold">expose les personnes aux risques</span> d'inondation et de feux
                            de forêts, sans possibilité d'intervention des secours (accès difficile, habitation non
                            légale et par conséquent non connue).
                        </li>
                        <li>
                            Elle <span className="bold">dégrade les espaces naturels</span>, agricoles ou forestiers
                            ainsi que les paysages et favorise la pollution des sols et de l'eau (déversement d'eaux
                            usées, absence de collecte de déchets…).
                        </li>
                        <li>
                            Elle entraîne le <span className="bold">gaspillage des terres agricoles</span> (pollution,
                            pression foncière, mitage…) et réduit les capacités de production.
                        </li>
                        <li>
                            Elle peut engendrer des <span className="bold">départs de feux</span> et entraîner des
                            dégâts considérables.
                        </li>
                        <li>
                            Elle contribue au <span className="bold">sentiment d'impunité</span> et d'iniquité entre
                            citoyens, face à la loi et provoque des tensions entre agents de collectivités ou élus et
                            administrés
                        </li>
                        <li>
                            Elle <span className="bold">coûte très cher</span>, en mobilisant de nombreux acteurs (la
                            DDTM, la DDFIP, les forces de l'ordre, les parquets, les collectivités). Les procédures
                            judiciaires sont longues de plusieurs années, complexes avec une issue incertaine. Des
                            moyens humains et financiers considérables sont ainsi engagés pour une seule affaire.
                        </li>
                    </ul>

                    {/* <Button onClick={() => {}}>Plus d'info</Button> */}
                </section>

                <section className={clsx(classes['text-section'], classes['section-why'])}>
                    <h1>Pourquoi utiliser Aigle ?</h1>
                    <p>Aigle permet aux collectivités et aux services de l'État de : </p>

                    <div className={classes['section-why-boxes-container']}>
                        <section className={clsx(classes['text-section'], classes['section-why-box'])}>
                            <h2>🔎 Connaître l'ampleur du phénomène</h2>
                            <p className={classes['section-why-box-text']}>
                                Grâce à la détection automatique des parcelles détournées, AIGLE permet de quantifier,
                                qualifier et localiser le phénomène sur un territoire donné et d'en mesurer l'évolution.
                            </p>
                        </section>
                        <section className={clsx(classes['text-section'], classes['section-why-box'])}>
                            <h2>☝️ Prioriser et cibler les actions en fonction des enjeux</h2>
                            <p className={classes['section-why-box-text']}>
                                La connaissance du problème croisée aux enjeux notamment du territoire (zones
                                inondables, à risque d'incendie de forêt, naturelles remarquables, périmètres de captage
                                d'eau potable, en expansion, etc.) permet de définir une stratégie d'intervention et
                                d'être plus efficace en terme de contrôle et de remise en état.
                            </p>
                        </section>
                        <section className={clsx(classes['text-section'], classes['section-why-box'])}>
                            <h2>👮‍♂️ D'être plus efficace dès les premiers signaux et de mieux prévenir</h2>
                            <p className={classes['section-why-box-text']}>
                                Surveiller de manière générale permet d'intervenir au plus tôt dès les premiers signaux
                                et de favoriser pour les situations encore simples la remise en état. AIGLE est un
                                également un outil de communication pour mieux prévenir et on imagine favoriser la
                                dissuasion.
                            </p>
                        </section>
                    </div>

                    <Button
                        linkProps={{
                            href: MAIL_TO_LINK,
                        }}
                    >
                        Demander une démo
                    </Button>
                </section>
            </div>
        </Layout>
    );
};

export default Component;

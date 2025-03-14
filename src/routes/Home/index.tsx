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
                            Lutter contre la cabanisation et les détournements d'usages d'espaces naturels, agricoles et
                            forestiers.
                        </h1>
                        <p>
                            Aigle est un outil innovant de détection automatique des parcelles détournées, basé sur
                            l'intelligence artificielle appliquée à des images aériennes.
                        </p>
                        <p>
                            Il identifie différents types de constructions, comme des maisons, chalets, mazets,
                            mobil-homes, caravanes, piscines ou bateaux. Doté d'une interface cartographique, cet outil
                            est entièrement intégré dans le processus de lutte contre la cabanisation et peut être
                            utilisé sur le terrain via une tablette.
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
                    <h1>Qu'est-ce que la cabanisation ?</h1>
                    <p>
                        La cabanisation désigne la construction ou l'installation illégale d'habitations précaires ou de
                        cabanes, souvent sur des terrains non constructibles ou protégés (comme les zones agricoles,
                        naturelles ou littorales).
                    </p>
                    <p>
                        Ce phénomène peut également inclure la transformation illégale de cabanes à usage temporaire
                        (abris de jardin, cabanons de pêcheurs, etc.) en résidences principales ou secondaires.
                    </p>

                    {/* <Button onClick={() => {}}>Plus d'info</Button> */}
                </section>

                <section className={clsx(classes['text-section'], classes['section-why'])}>
                    <h1>Pourquoi utiliser Aigle ?</h1>
                    <p>Aigle offre aux collectivités et aux services de l'État les fonctionnalités suivantes :</p>

                    <div className={classes['section-why-boxes-container']}>
                        <section className={clsx(classes['text-section'], classes['section-why-box'])}>
                            <h2>🔎 Évaluer l'ampleur du phénomène</h2>
                            <p className={classes['section-why-box-text']}>
                                Grâce à la détection automatique des parcelles détournées, il permet d'avoir une vision
                                globale du problème sur un territoire donné et d'en suivre l'évolution dans le temps.
                            </p>
                        </section>
                        <section className={clsx(classes['text-section'], classes['section-why-box'])}>
                            <h2>☝️ Prioriser les contrôles</h2>
                            <p className={classes['section-why-box-text']}>
                                En croisant les résultats des détections avec des zones sensibles (zones inondables, à
                                risque d'incendie, naturelles remarquables, périmètres de captage d'eau potable, etc.),
                                il aide à cibler les interventions.
                            </p>
                        </section>
                        <section className={clsx(classes['text-section'], classes['section-why-box'])}>
                            <h2>👮‍♂️ Agir en amont et assurer un suivi efficace</h2>
                            <p className={classes['section-why-box-text']}>
                                Avec des fiches de détection prêtes à imprimer, les collectivités peuvent envoyer des
                                courriers aux contrevenants pour traiter les infractions dès les premiers signaux.
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

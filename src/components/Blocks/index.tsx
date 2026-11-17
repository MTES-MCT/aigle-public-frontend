import React, { Fragment, PropsWithChildren, ReactNode } from 'react';

import { fr, FrIconClassName } from '@codegouvfr/react-dsfr';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';
import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { Button, ButtonProps } from '@codegouvfr/react-dsfr/Button';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { Quote } from '@codegouvfr/react-dsfr/Quote';
import { Tile } from '@codegouvfr/react-dsfr/Tile';
import avatarDefaultUrl from '@codegouvfr/react-dsfr/dsfr/artwork/pictograms/digital/avatar.svg';
import clsx from 'clsx';
import { KEY_FIGURES } from '../../constants/content';
import { getHref } from '../../constants/routes';
import classes from './index.module.scss';

/** Rend un titre où « / » marque un retour à la ligne voulu. */
export const MultilineTitle: React.FC<{ lines: string[] }> = ({ lines }) => (
    <>
        {lines.map((line, index) => (
            <Fragment key={index}>
                {index > 0 && <br className={classes['desktop-only-break']} />}
                {index > 0 && ' '}
                {line}
            </Fragment>
        ))}
    </>
);

// ----- Images

export interface ImageSources {
    webp: string;
    fallback: string;
    width: number;
    height: number;
}

export const Picture: React.FC<{ image: ImageSources; alt: string; className?: string; eager?: boolean }> = ({
    image,
    alt,
    className,
    eager,
}) => (
    <picture>
        <source srcSet={image.webp} type="image/webp" />
        <img
            className={clsx(classes.picture, className)}
            src={image.fallback}
            alt={alt}
            width={image.width}
            height={image.height}
            loading={eager ? 'eager' : 'lazy'}
        />
    </picture>
);

// ----- Sections

type SectionProps = PropsWithChildren<{
    background?: 'white' | 'blue';
    id?: string;
    className?: string;
}>;

export const Section: React.FC<SectionProps> = ({ background = 'white', id, className, children }) => (
    <section id={id} className={clsx(classes.section, background === 'blue' && classes['section-blue'], className)}>
        <div className={fr.cx('fr-container')}>{children}</div>
    </section>
);

// ----- Bannière (pages Collectivités, État, À propos)

type BannerProps = PropsWithChildren<{
    title: string;
    /** Illustration sans fond, affichée à droite du texte. */
    illustration: { url: string; width: number; height: number };
    breadcrumbLabel: string;
}>;

export const Banner: React.FC<BannerProps> = ({ title, illustration, breadcrumbLabel, children }) => (
    <>
        <div className={classes.banner}>
            <div className={fr.cx('fr-container')}>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-lg-5')}>
                        <h1>{title}</h1>
                        {children}
                    </div>
                    <div className={fr.cx('fr-col-12', 'fr-col-lg-7')}>
                        <img
                            className={classes['banner-illustration']}
                            src={illustration.url}
                            alt=""
                            width={illustration.width}
                            height={illustration.height}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={fr.cx('fr-container')}>
            <Breadcrumb
                className={classes.breadcrumb}
                currentPageLabel={breadcrumbLabel}
                homeLinkProps={{ href: getHref('home') }}
                segments={[]}
            />
        </div>
    </>
);

// ----- Tuiles avec pictogramme

export interface PictoTileItem {
    title: ReactNode;
    desc: ReactNode;
    pictogram: ReactNode;
}

export const PictoTiles: React.FC<{
    items: PictoTileItem[];
    columnClassName: string;
    orientation?: 'horizontal' | 'vertical';
}> = ({ items, columnClassName, orientation = 'vertical' }) => (
    <ul className={clsx(fr.cx('fr-grid-row', 'fr-grid-row--gutters'), classes['raw-list'])}>
        {items.map((item, index) => (
            <li key={index} className={columnClassName}>
                <Tile
                    className={classes.tile}
                    title={item.title}
                    desc={item.desc}
                    pictogram={item.pictogram}
                    orientation={orientation}
                    titleAs="h3"
                />
            </li>
        ))}
    </ul>
);

// ----- Fonctionnalités : rangées « capture d’écran + liste », image alternativement à gauche et à droite

export interface FeatureItem {
    iconId: FrIconClassName;
    title: ReactNode;
    desc: ReactNode;
}

export interface FeatureRow {
    image: ImageSources;
    imageAlt: string;
    items: FeatureItem[];
}

export const FeatureShowcase: React.FC<{ rows: FeatureRow[] }> = ({ rows }) => (
    <>
        {rows.map((row, rowIndex) => (
            <div
                key={rowIndex}
                className={clsx(
                    fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle'),
                    rowIndex > 0 && fr.cx('fr-mt-5w'),
                )}
            >
                <div
                    className={clsx(fr.cx('fr-col-12', 'fr-col-lg-7'), rowIndex % 2 === 1 && classes['order-lg-last'])}
                >
                    <figure className={fr.cx('fr-content-media', 'fr-my-0')} role="group">
                        <Picture image={row.image} alt={row.imageAlt} className={classes.screenshot} />
                    </figure>
                </div>
                <div className={fr.cx('fr-col-12', 'fr-col-lg-5')}>
                    <ul className={clsx(classes['raw-list'], classes['feature-list'])}>
                        {row.items.map((item, index) => (
                            <li key={index} className={classes['feature-item']}>
                                <span className={clsx(item.iconId, classes['feature-icon'])} aria-hidden="true" />
                                <div>
                                    <h3 className={fr.cx('fr-h6', 'fr-mb-1v')}>{item.title}</h3>
                                    <p className={fr.cx('fr-mb-0')}>{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </>
);

// ----- Emplacement vidéo (vidéo à fournir)

export const VIDEO_SECTION_ID = 'video';

export const VideoPlaceholder: React.FC = () => (
    <figure
        className={clsx(fr.cx('fr-content-media'), classes['video-figure'])}
        role="group"
        aria-label="L’outil Aigle en vidéo"
    >
        {/* TODO : remplacer cet emplacement par la vidéo Aigle lorsqu’elle sera fournie */}
        <div className={clsx(fr.cx('fr-responsive-vid'), classes['video-placeholder'])}>
            <p className={fr.cx('fr-mb-0')}>Vidéo Aigle (à venir)</p>
        </div>
        <figcaption className={fr.cx('fr-content-media__caption')}>L’outil Aigle en vidéo</figcaption>
    </figure>
);

// ----- Chiffres clés

export const KeyFigures: React.FC<{ showDistribution?: boolean }> = ({ showDistribution }) => (
    <>
        <h2>56 territoires utilisent Aigle chaque mois. Et le vôtre ?</h2>
        {showDistribution && <UsersDistribution />}
        <ul className={clsx(fr.cx('fr-grid-row', 'fr-grid-row--gutters'), classes['raw-list'])}>
            {KEY_FIGURES.map(({ value, label, source }) => (
                <li key={value} className={fr.cx('fr-col-12', 'fr-col-md-6')}>
                    <p className={clsx(fr.cx('fr-display--sm', 'fr-mb-1w'), classes['key-figure-value'])}>{value}</p>
                    <p className={fr.cx('fr-text--lg', 'fr-mb-1w')}>{label}</p>
                    <p className={clsx(fr.cx('fr-text--sm', 'fr-mb-0'), 'fr-text-mention--grey')}>{source}</p>
                </li>
            ))}
        </ul>
    </>
);

// ----- Répartition des utilisateurs (barre empilée, page Services de l’État)

const UsersDistribution: React.FC = () => (
    <div className={classes.distribution}>
        <p className={fr.cx('fr-text--lg', 'fr-text--bold', 'fr-mb-2w')}>Répartition des utilisateurs d’Aigle</p>
        <div className={classes['distribution-bar']} role="img" aria-label="88 % de collectivités, 12 % de DDT(M)">
            <div className={classes['distribution-collectivities']} style={{ width: '88%' }} aria-hidden="true">
                88 % collectivités
            </div>
            <div className={classes['distribution-ddt']} style={{ width: '12%' }} aria-hidden="true">
                12 %
            </div>
        </div>
        <ul className={clsx(classes['raw-list'], classes['distribution-legend'])} aria-hidden="true">
            <li className={classes['legend-item']}>
                <span className={clsx(classes['legend-swatch'], classes['distribution-collectivities'])} />
                Collectivités : communes &amp; EPCI
            </li>
            <li className={classes['legend-item']}>
                <span className={clsx(classes['legend-swatch'], classes['distribution-ddt'])} />
                DDT(M)
            </li>
        </ul>
    </div>
);

// ----- Étapes numérotées

export interface StepItem {
    title: string;
    desc: string;
}

export const Steps: React.FC<{ items: StepItem[]; columnClassName: string }> = ({ items, columnClassName }) => (
    <ol className={clsx(fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--center'), classes['raw-list'])}>
        {items.map((item, index) => (
            <li key={index} className={clsx(columnClassName, classes.step)}>
                <span className={clsx(fr.cx('fr-h4'), classes['step-number'])} aria-hidden="true">
                    {index + 1}
                </span>
                <p className={fr.cx('fr-mb-1w')}>
                    <span className={fr.cx('fr-sr-only')}>Étape {index + 1} : </span>
                    <strong>{item.title}</strong>
                </p>
                <p className={fr.cx('fr-mb-0')}>{item.desc}</p>
            </li>
        ))}
    </ol>
);

// ----- Témoignages

export interface Testimonial {
    text: string;
    author: string;
    source?: string;
    avatarUrl?: string;
}

export const Testimonials: React.FC<{ items: Testimonial[] }> = ({ items }) => (
    <ul className={clsx(fr.cx('fr-grid-row', 'fr-grid-row--gutters'), classes['raw-list'])}>
        {items.map((item, index) => (
            <li key={index} className={clsx(fr.cx('fr-col-12', 'fr-col-md-4'), classes['testimonial-col'])}>
                <Quote
                    className={classes.testimonial}
                    classes={{ text: classes['testimonial-text'], image: classes['testimonial-image'] }}
                    size="medium"
                    text={item.text}
                    author={item.author}
                    source={item.source ? <li>{item.source}</li> : undefined}
                    // TODO : remplacer l’avatar DSFR par défaut par une photo lorsqu’elle sera fournie
                    imageUrl={item.avatarUrl || avatarDefaultUrl}
                />
            </li>
        ))}
    </ul>
);

// ----- FAQ

export interface FaqItem {
    question: string;
    answer: string;
}

export const Faq: React.FC<{ title: string; items: FaqItem[] }> = ({ title, items }) => (
    <>
        <h2>{title}</h2>
        <div className={fr.cx('fr-accordions-group')}>
            {items.map((item, index) => (
                <Accordion key={index} label={item.question} titleAs="h3">
                    <p className={fr.cx('fr-mb-0')}>{item.answer}</p>
                </Accordion>
            ))}
        </div>
    </>
);

// ----- Boutons

const CONTACT_BUTTON_ICON: Pick<ButtonProps.WithIcon, 'iconId' | 'iconPosition'> = {
    iconId: 'fr-icon-arrow-right-line',
    iconPosition: 'right',
};

export const ContactButton: React.FC<{ label: string; priority?: ButtonProps['priority'] }> = ({
    label,
    priority = 'primary',
}) => (
    <Button {...CONTACT_BUTTON_ICON} priority={priority} linkProps={{ href: getHref('contact') }}>
        {label}
    </Button>
);

export const ExternalButton: React.FC<{ label: string; href: string; priority?: ButtonProps['priority'] }> = ({
    label,
    href,
    priority = 'primary',
}) => (
    <Button
        priority={priority}
        linkProps={{ href, target: '_blank', rel: 'noopener', title: `${label} – nouvelle fenêtre` }}
    >
        {label}
    </Button>
);

export const VideoButton: React.FC = () => (
    <Button
        priority="secondary"
        iconId="fr-icon-play-circle-line"
        iconPosition="right"
        linkProps={{ href: `#${VIDEO_SECTION_ID}` }}
    >
        Voir la vidéo
    </Button>
);

export const BannerButtons: React.FC<PropsWithChildren> = ({ children }) => (
    <div className={classes['banner-buttons']}>{children}</div>
);

// ----- Bloc « Nous contacter » (bas des pages Collectivités et État)

export const ContactFooterBlock: React.FC = () => (
    <Section background="blue">
        <h2 className={fr.cx('fr-h3')}>Nous contacter</h2>
        {/* Le bouton « Utilisateurs actifs : accéder au centre d’aide » sera ajouté lorsque le centre d’aide existera. */}
        <ButtonsGroup
            inlineLayoutWhen="md and up"
            buttons={[
                {
                    children: 'Demander un RDV pour découvrir Aigle',
                    ...CONTACT_BUTTON_ICON,
                    linkProps: { href: getHref('contact') },
                },
            ]}
        />
    </Section>
);

// ----- Image + texte

type MediaTextProps = PropsWithChildren<{
    media: ReactNode;
    mediaPosition?: 'left' | 'right';
    textColumnClassName?: string;
    mediaColumnClassName?: string;
}>;

export const MediaText: React.FC<MediaTextProps> = ({
    media,
    mediaPosition = 'right',
    textColumnClassName = fr.cx('fr-col-12', 'fr-col-md-7'),
    mediaColumnClassName = fr.cx('fr-col-12', 'fr-col-md-5'),
    children,
}) => (
    <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-grid-row--middle')}>
        <div className={clsx(textColumnClassName, mediaPosition === 'left' && classes['order-md-last'])}>
            {children}
        </div>
        <div className={mediaColumnClassName}>{media}</div>
    </div>
);

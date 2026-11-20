import React, { PropsWithChildren, useEffect } from 'react';

import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { SkipLinks } from '@codegouvfr/react-dsfr/SkipLinks';
import { useLocation } from 'react-router-dom';
import { AIGLE_LOGO_SVG } from '../../constants/images';
import { CONTACT_HREF, getHref, RouteId, ROUTES_MAP } from '../../constants/routes';
import { AIGLE_APP_URL } from '../../constants/urls';
import classes from './index.module.scss';

const SERVICE_NAME = 'Aigle';
const SERVICE_TAGLINE = 'Détecter, cibler et agir contre les installations illégales';
const MAIN_CONTENT_ID = 'contenu';
const FOOTER_ID = 'footer';

const BRAND_TOP = (
    <>
        Ministères
        <br />
        Transition écologique
        <br />
        Aménagement du territoire
        <br />
        Transports
        <br />
        Ville et logement
    </>
);

/** Logo opérateur (comme sur le site de Lucca) : pictogramme Aigle, à côté du bloc-marque. */
const OPERATOR_LOGO = { orientation: 'vertical', imgUrl: AIGLE_LOGO_SVG, alt: 'Aigle' } as const;

const HEADER_ROUTES = (Object.keys(ROUTES_MAP) as RouteId[]).filter((routeId) => ROUTES_MAP[routeId].displayedInHeader);

/**
 * Le site utilise un routage en hash (`#/accueil`) : les ancres internes (`#video`, `#contenu`)
 * doivent donc être interceptées pour faire défiler la page sans changer de route.
 */
const handleInPageAnchorClick = (event: MouseEvent) => {
    const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
    if (!anchor) {
        return;
    }
    const href = anchor.getAttribute('href') || '';
    if (href.startsWith('#/') || href.length < 2) {
        return;
    }
    const target = document.getElementById(decodeURIComponent(href.slice(1)));
    if (!target) {
        return;
    }
    event.preventDefault();
    if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
    }
    target.scrollIntoView();
    target.focus({ preventScroll: true });
};

type ComponentProps = PropsWithChildren<{
    routeId: RouteId;
}>;

const Component: React.FC<ComponentProps> = ({ children, routeId }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = `${ROUTES_MAP[routeId].title} | ${SERVICE_NAME}`;
    }, [routeId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        document.addEventListener('click', handleInPageAnchorClick);
        return () => document.removeEventListener('click', handleInPageAnchorClick);
    }, []);

    return (
        <div className={classes.container}>
            <SkipLinks
                links={[
                    { anchor: `#${MAIN_CONTENT_ID}`, label: 'Contenu' },
                    { anchor: `#${FOOTER_ID}`, label: 'Pied de page' },
                ]}
            />
            <Header
                brandTop={BRAND_TOP}
                operatorLogo={OPERATOR_LOGO}
                serviceTitle={
                    <>
                        {SERVICE_NAME}{' '}
                        <Badge as="span" noIcon severity="success" small>
                            Beta
                        </Badge>
                    </>
                }
                serviceTagline={SERVICE_TAGLINE}
                homeLinkProps={{
                    href: getHref('home'),
                    title: `Accueil - ${SERVICE_NAME}`,
                }}
                quickAccessItems={[
                    {
                        iconId: 'fr-icon-account-circle-line',
                        text: 'Connexion',
                        linkProps: {
                            href: AIGLE_APP_URL,
                            target: '_blank',
                            rel: 'noopener',
                            title: 'Connexion à l’application Aigle – nouvelle fenêtre',
                        },
                    },
                ]}
                navigation={HEADER_ROUTES.map((headerRouteId) => {
                    const route = ROUTES_MAP[headerRouteId];
                    return {
                        linkProps: { href: headerRouteId === 'contact' ? CONTACT_HREF : getHref(headerRouteId) },
                        isActive: pathname === route.href,
                        text: 'navTitle' in route ? route.navTitle : route.title,
                    };
                })}
            />
            <main id={MAIN_CONTENT_ID} className={classes.main} tabIndex={-1}>
                {children}
            </main>
            <Footer
                id={FOOTER_ID}
                brandTop={BRAND_TOP}
                operatorLogo={OPERATOR_LOGO}
                homeLinkProps={{
                    href: getHref('home'),
                    title: `Accueil - ${SERVICE_NAME}`,
                }}
                accessibility="non compliant"
                accessibilityLinkProps={{
                    href: getHref('accessibility'),
                }}
                termsLinkProps={{
                    href: getHref('legalMentions'),
                }}
                bottomItems={[
                    {
                        text: 'CGU',
                        linkProps: {
                            href: getHref('generalUseConditions'),
                        },
                    },
                    {
                        text: 'Données personnelles',
                        linkProps: {
                            href: getHref('personalData'),
                        },
                    },
                    headerFooterDisplayItem,
                ]}
            />
        </div>
    );
};

export default Component;

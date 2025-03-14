import React, { PropsWithChildren } from 'react';

import { Badge } from '@codegouvfr/react-dsfr/Badge';
import Button from '@codegouvfr/react-dsfr/Button';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { useLocation } from 'react-router-dom';
import { ROUTES_MAP } from '../../constants/routes';
import classes from './index.module.scss';

const isNavigationItemActive = (routeId: keyof typeof ROUTES_MAP, pathname: string) =>
    pathname.includes(ROUTES_MAP[routeId].href);

type ComponentProps = PropsWithChildren;

const Component: React.FC<ComponentProps> = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <div className={classes.container}>
            <Header
                brandTop={
                    <>
                        Ministère
                        <br />
                        de la transition
                        <br />
                        écologique
                    </>
                }
                quickAccessItems={[
                    <Button
                        iconId="fr-icon-account-circle-fill"
                        priority="secondary"
                        linkProps={{
                            href: import.meta.env.VITE_AIGLE_APP_URL || 'https://app.aigle.beta.gouv.fr/',
                        }}
                    >
                        Se connecter
                    </Button>,
                ]}
                serviceTitle={
                    <>
                        Aigle
                        <Badge as="span" noIcon severity="success">
                            Beta
                        </Badge>
                    </>
                }
                serviceTagline="Détection par IA des irrégularités d'occupation du sol"
                homeLinkProps={{
                    href: ROUTES_MAP.home.href,
                    title: 'Accueil - Aigle',
                }}
                navigation={Object.entries(ROUTES_MAP).map(([routeId, { title, href, external }]) => ({
                    linkProps: {
                        href,
                        target: external ? '_blank' : '_self',
                    },
                    isActive: isNavigationItemActive(routeId, pathname),
                    text: title,
                }))}
            />
            <div className="fr-container">{children}</div>
            <Footer
                accessibility="partially compliant"
                termsLinkProps={{
                    href: '#',
                }}
                websiteMapLinkProps={{
                    href: '#',
                }}
                bottomItems={[
                    // other other bottom items...
                    headerFooterDisplayItem,
                ]}
            />
        </div>
    );
};

export default Component;

export interface RouteDisplayedInHeader {
    href: string;
    title: string;
    external?: boolean;
    displayedInHeader: true;
}

export interface RouteNotDisplayedInHeader {
    href: string;
    title?: string;
    external?: boolean;
    displayedInHeader: false;
}

type Route = RouteDisplayedInHeader | RouteNotDisplayedInHeader;

export const ROUTES_MAP: {
    [id: string]: Route;
} = {
    home: {
        href: '/accueil',
        title: 'Accueil',
        displayedInHeader: true
    },
    generalUseConditions: {
        href: '/cgu',
        displayedInHeader: false,
    },
    legalMentions: {
        href: '/mentions-legales',
        displayedInHeader: false
    },
    about: {
        href: 'https://beta.gouv.fr/startups/aigle.html',
        title: 'A propos',
        external: true,
        displayedInHeader: true
    },
    contact: {
        href: '/contact',
        title: 'Nous contacter',
        displayedInHeader: true
    },
} as const;

export const getHref = (routeId: keyof typeof ROUTES_MAP) => `/#${ROUTES_MAP[routeId].href}`;
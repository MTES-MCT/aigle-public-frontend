export interface RouteDisplayedInHeader {
    href: string;
    title: string;
    navTitle: string;
    displayedInHeader: true;
}

export interface RouteNotDisplayedInHeader {
    href: string;
    title: string;
    displayedInHeader: false;
}

type Route = RouteDisplayedInHeader | RouteNotDisplayedInHeader;

export const ROUTES_MAP = {
    home: {
        href: '/accueil',
        title: 'Accueil',
        navTitle: 'Accueil',
        displayedInHeader: true,
    },
    collectivities: {
        href: '/collectivites',
        title: 'Collectivités : Utiliser Aigle sur mon territoire',
        navTitle: 'Collectivités - Utiliser Aigle sur mon territoire',
        displayedInHeader: true,
    },
    stateServices: {
        href: '/services-etat',
        title: 'Services de l’État : Déployer Aigle dans un département',
        navTitle: 'Services de l’État - Déployer Aigle dans un département',
        displayedInHeader: true,
    },
    about: {
        href: '/a-propos',
        title: 'À propos',
        navTitle: 'À propos',
        displayedInHeader: true,
    },
    contact: {
        href: '/contact',
        title: 'Nous contacter',
        navTitle: 'Contact',
        displayedInHeader: true,
    },
    generalUseConditions: {
        href: '/cgu',
        title: 'Conditions générales d’utilisation',
        displayedInHeader: false,
    },
    legalMentions: {
        href: '/mentions-legales',
        title: 'Mentions légales',
        displayedInHeader: false,
    },
    accessibility: {
        href: '/accessibilite',
        title: 'Déclaration d’accessibilité',
        displayedInHeader: false,
    },
    personalData: {
        href: '/donnees-personnelles',
        title: 'Données personnelles',
        displayedInHeader: false,
    },
} as const satisfies Record<string, Route>;

export type RouteId = keyof typeof ROUTES_MAP;

export const getHref = (routeId: RouteId) => `/#${ROUTES_MAP[routeId].href}`;

/** Page de contact (formulaire Brevo), avec le motif « demande de démo » présélectionné dans l’adresse. */
export const CONTACT_HREF = `${getHref('contact')}?reason=DEMO`;

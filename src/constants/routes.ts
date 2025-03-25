export const ROUTES_MAP: {
    [id: string]: {
        href: string;
        title: string;
        external?: boolean;
    };
} = {
    home: {
        href: '/home',
        title: 'Accueil',
    },
    about: {
        href: 'https://beta.gouv.fr/startups/aigle.html',
        title: 'A propos',
        external: true,
    },
    contact: {
        href: '/contact',
        title: 'Nous contacter'
    },
} as const;

export const getHref = (routeId: keyof typeof ROUTES_MAP) => `/#${ROUTES_MAP[routeId].href}`;
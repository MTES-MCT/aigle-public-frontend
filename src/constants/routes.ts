export const MAIL_TO_LINK = 'mailto:contact@aigle.beta.gouv.fr';

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
    impact: {
        href: '/impact',
        title: 'Notre impact',
    },
    contactUs: {
        href: MAIL_TO_LINK,
        title: 'Nous contacter',
        external: true,
    },
} as const;

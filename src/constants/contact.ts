export const ContactReasons = ['DEMO', 'BASIC'] as const;
export type ContactReason = (typeof ContactReasons)[number];

export const CONTACT_EMAIL = 'contact@aigle.beta.gouv.fr';

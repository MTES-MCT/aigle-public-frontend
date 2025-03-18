
export const ContactReasons = ['DEMO', 'BASIC'] as const;
export type ContactReason = (typeof ContactReasons)[number];
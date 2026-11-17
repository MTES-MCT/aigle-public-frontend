import React, { FormEvent, useRef, useState } from 'react';

import { fr } from '@codegouvfr/react-dsfr';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { Select } from '@codegouvfr/react-dsfr/Select';
import Layout from '../../components/Layout';
import { CONTACT_EMAIL } from '../../constants/contact';
import { getHref } from '../../constants/routes';
import classes from './index.module.scss';

/**
 * Formulaire Brevo (anciennement intégré en iframe) : les données sont envoyées au même formulaire,
 * mais l’affichage est réalisé avec les composants DSFR.
 */
const BREVO_FORM_URL =
    'https://44a5646e.sibforms.com/serve/MUIFAFGl8jyCp-5dECdNnMUjtWUL8N6wKwJ22B3m3nH5ZQzbxW-N9O85BR84H_RfpfJUrlqepOo09fFcKCsMtuy2TIl0SXP5kAXmt7Ld1pgpEbpiuk6jupuoCteTV7VHURI1CmfWhCsCj_Vpv82xZI2gknN0lmGUyW_4WZp9Oowysu0jkcrgs4P_T1Fp9IfYtIxb-q2zAjz2HkHohw==';

const ADMINISTRATION_OPTIONS = [
    { value: 'collectivite_territoriale', label: 'Collectivité territoriale' },
    { value: 'communaute_d_agglomeration', label: 'Communauté d’agglomération' },
    { value: 'communaute_de_communes', label: 'Communauté de communes' },
    { value: 'communaute_urbaine', label: 'Communauté urbaine' },
    { value: 'metropole', label: 'Métropole' },
    { value: 'ddt_m', label: 'DDT(M)' },
    { value: 'autre', label: 'Autre' },
];

const PROBLEM_OPTIONS = [
    { value: 'un_probleme_critique', label: 'Un problème critique' },
    { value: 'un_simple_probleme_parmi_d_autres', label: 'Un simple problème parmi d’autres' },
    { value: 'pas_un_probleme', label: 'Pas un problème' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

/** Brevo attend l’indicatif sans « + » suivi du numéro sans le 0 initial (ex. : 33612345678). */
const formatPhoneForBrevo = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    if (!digits) {
        return '';
    }
    if (digits.startsWith('33')) {
        return digits;
    }
    return `33${digits.replace(/^0/, '')}`;
};

const Component: React.FC = () => {
    const [status, setStatus] = useState<Status>('idle');
    const alertRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.reportValidity()) {
            return;
        }

        const formData = new FormData(form);
        const phone = formatPhoneForBrevo(String(formData.get('SMS') || ''));
        formData.set('SMS', phone);
        if (phone) {
            formData.set('SMS__COUNTRY_CODE', '+33');
        }
        formData.set('email_address_check', '');
        formData.set('locale', 'fr');

        setStatus('sending');
        try {
            const response = await fetch(`${BREVO_FORM_URL}?isAjax=1`, { method: 'POST', body: formData });
            const result = await response.json().catch(() => ({}));
            const success = response.ok && result?.success !== false;
            setStatus(success ? 'success' : 'error');
            if (success) {
                form.reset();
            }
        } catch {
            setStatus('error');
        }
        requestAnimationFrame(() => alertRef.current?.focus());
    };

    return (
        <Layout routeId="contact">
            <div className={fr.cx('fr-container', 'fr-py-6w')}>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--center')}>
                    <div className={fr.cx('fr-col-12', 'fr-col-md-10', 'fr-col-lg-8')}>
                        <h1>Nous contacter</h1>
                        <p className={fr.cx('fr-text--lead')}>
                            Vous souhaitez en savoir plus sur Aigle ? Renseignez ce formulaire et nous reviendrons très
                            rapidement vers vous pour vous proposer un moment d’échange afin de mieux comprendre votre
                            contexte et vos besoins. Nous vous présenterons également Aigle et ferons une démonstration
                            de l’outil lors de notre rendez-vous.
                        </p>

                        <div ref={alertRef} tabIndex={-1} className={classes.alert} aria-live="polite">
                            {status === 'success' && (
                                <Alert
                                    severity="success"
                                    title="Merci pour votre demande de contact !"
                                    description="Un membre de l’équipe va revenir vers vous rapidement afin d’organiser un temps d’échange pour répondre à vos questions. Bonne journée, l’équipe Aigle & Lucca."
                                />
                            )}
                            {status === 'error' && (
                                <Alert
                                    severity="error"
                                    title="Nous n’avons pas réussi à envoyer votre demande de contact."
                                    description={
                                        <>
                                            Réessayez dans quelques minutes, et si le problème persiste vous pouvez nous
                                            écrire à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                                        </>
                                    }
                                />
                            )}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <p className={fr.cx('fr-text--sm', 'fr-mb-3w')}>
                                Sauf mention contraire, tous les champs sont obligatoires.
                            </p>

                            <fieldset className={fr.cx('fr-fieldset')}>
                                <legend className={fr.cx('fr-fieldset__legend', 'fr-h4')}>Vous</legend>
                                <div className={fr.cx('fr-fieldset__element', 'fr-col-12', 'fr-col-md-6')}>
                                    <Input
                                        label="Votre nom"
                                        nativeInputProps={{ name: 'NOM', required: true, autoComplete: 'family-name' }}
                                    />
                                </div>
                                <div className={fr.cx('fr-fieldset__element', 'fr-col-12', 'fr-col-md-6')}>
                                    <Input
                                        label="Votre prénom"
                                        nativeInputProps={{
                                            name: 'PRENOM',
                                            required: true,
                                            autoComplete: 'given-name',
                                        }}
                                    />
                                </div>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Input
                                        label="Votre fonction"
                                        hintText="Ex : Responsable du service ADS"
                                        nativeInputProps={{
                                            name: 'JOB_TITLE',
                                            required: true,
                                            autoComplete: 'organization-title',
                                        }}
                                    />
                                </div>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Input
                                        label="Laissez-nous votre email afin que nous puissions vous recontacter"
                                        hintText="Format attendu : nom@domaine.fr"
                                        nativeInputProps={{
                                            name: 'EMAIL',
                                            type: 'email',
                                            required: true,
                                            autoComplete: 'email',
                                        }}
                                    />
                                </div>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Input
                                        label="Votre numéro de téléphone (facultatif)"
                                        hintText="Ex : 06 12 34 56 78"
                                        nativeInputProps={{ name: 'SMS', type: 'tel', autoComplete: 'tel' }}
                                    />
                                </div>
                            </fieldset>

                            <fieldset className={fr.cx('fr-fieldset')}>
                                <legend className={fr.cx('fr-fieldset__legend', 'fr-h4')}>Votre structure</legend>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Select
                                        label="Votre administration"
                                        nativeSelectProps={{
                                            name: 'COMPANY:type_d_administration__nouveau',
                                            required: true,
                                            defaultValue: '',
                                        }}
                                    >
                                        <option value="" disabled>
                                            Choisissez une valeur
                                        </option>
                                        {ADMINISTRATION_OPTIONS.map(({ value, label }) => (
                                            <option key={value} value={value}>
                                                {label}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Input
                                        label="Votre collectivité, DDT(M), organisme, etc."
                                        hintText="Ex : Marseille ou SAFER 34 ou DDTM 64"
                                        nativeInputProps={{
                                            name: 'COMPANY:name',
                                            required: true,
                                            autoComplete: 'organization',
                                        }}
                                    />
                                </div>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Input
                                        label="Votre département"
                                        hintText="Ex : Hérault (34)"
                                        nativeInputProps={{ name: 'COMPANY:departement', required: true }}
                                    />
                                </div>
                            </fieldset>

                            <fieldset className={fr.cx('fr-fieldset')}>
                                <legend className={fr.cx('fr-fieldset__legend', 'fr-h4')}>Votre besoin</legend>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <RadioButtons
                                        legend="Les constructions illégales dans les espaces naturels, agricoles ou forestiers sont pour vous :"
                                        name="COMPANY:problematique_cabanisation"
                                        options={PROBLEM_OPTIONS.map(({ value, label }, index) => ({
                                            label,
                                            nativeInputProps: { value, required: index === 0 },
                                        }))}
                                    />
                                </div>
                                <div className={fr.cx('fr-fieldset__element')}>
                                    <Input
                                        textArea
                                        label="À quel problème souhaitez-vous répondre avec Aigle ? (facultatif)"
                                        hintText="N’hésitez pas à nous préciser votre contexte"
                                        nativeTextAreaProps={{ name: 'COMMENTAIRE', rows: 5 }}
                                    />
                                </div>
                            </fieldset>

                            {/* Champ piège anti-robots attendu par Brevo : doit rester vide */}
                            <input
                                type="text"
                                name="email_address_check"
                                defaultValue=""
                                className={classes.honeypot}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                            />

                            <p className={fr.cx('fr-text--sm')}>
                                Les données saisies sont utilisées uniquement pour vous recontacter. En savoir plus :{' '}
                                <a href={getHref('personalData')}>données personnelles</a>.
                            </p>

                            <Button type="submit" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Component;

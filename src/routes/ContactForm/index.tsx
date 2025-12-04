import Button from '@codegouvfr/react-dsfr/Button';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Notice } from '@codegouvfr/react-dsfr/Notice';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { clsx } from 'clsx';
import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { CONTACT_EMAIL, ContactReason, ContactReasons } from '../../constants/contact';
import { API_BASE_URL } from '../../constants/urls';
import classes from './index.module.scss';

const CONTACT_ENDPOINT = `${API_BASE_URL}/api/utils/contact-us/`;

type InputState = 'error' | 'default';

const criticities = ['CRITICAL', 'NORMAL', 'NON_EXISTENT'] as const;
type Criticity = (typeof criticities)[number];
const CRITICITIES_NAMES_MAP: {
    [criticity in Criticity]: string;
} = {
    CRITICAL: 'Un problème critique',
    NORMAL: "Un simple problème parmi d'autres",
    NON_EXISTENT: 'Pas un problème',
} as const;

const interests = ['RESOLVE_AN_ISSUE', 'UNKNOWN'] as const;
type Interest = (typeof interests)[number];
const INTERESTS_NAMES_MAP: {
    [interest in Interest]: string;
} = {
    RESOLVE_AN_ISSUE: 'Aigle répond précisément à un problème que je rencontre',
    UNKNOWN: "Je ne sais pas si Aigle m'intéresse, je cherche à comprendre à quoi ça sert",
} as const;

const FORM_STEP_TOTAL = 2;

interface FormValues {
    collectivity: string;
    criticity: Criticity;

    interest: Interest;
    issue: string;
    name: string;
    job: string;
    phone: string;
    email: string;
}

const FORM_FIELDS_VALIDATE = {
    collectivity: isNotEmpty('Veuillez renseigner votre collectivité'),
    criticity: isNotEmpty('Veuillez renseigner la criticité'),

    interest: isNotEmpty("Veuillez renseigner l'intérêt"),
    name: isNotEmpty('Veuillez renseigner votre nom et prénom'),
    email: isEmail('Veuillez renseigner une adresse e-mail valide'),

    job: isNotEmpty('Veuillez renseigner votre fonction'),
    phone: isNotEmpty('Veuillez renseigner votre numéro de téléphone'),

    issue: isNotEmpty('Veuillez décrire votre problème'),
};

const Component: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [formStep, setFormStep] = useState(1);
    const contactReason: ContactReason = useMemo(
        () =>
            searchParams.get('reason') || '' in ContactReasons
                ? (searchParams.get('reason') as ContactReason)
                : 'BASIC',
        [searchParams],
    );
    const [contactLoading, setContactLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useForm<FormValues>({
        validate: FORM_FIELDS_VALIDATE,
        initialValues: {
            criticity: 'CRITICAL',
            collectivity: '',

            interest: 'RESOLVE_AN_ISSUE',
            issue: '',

            name: '',
            job: '',
            phone: '',
            email: '',
        },
    });

    const handleSubmit = async (values: FormValues) => {
        setError(false);
        setSuccess(false);
        setContactLoading(true);
        const params = new URLSearchParams();
        Object.entries(values).forEach(([key, value]) => {
            params.append(key, value);
        });
        params.append('contactReason', contactReason);

        const res = await fetch(`${CONTACT_ENDPOINT}?${params.toString()}`);

        setError(!res.ok);
        setSuccess(res.ok);

        setContactLoading(false);
    };

    const getInputProps = (field: keyof FormValues) => ({
        ...form.getInputProps(field),
        nativeInputProps: form.getInputProps(field),
        className: clsx({
            [classes.required]: field in FORM_FIELDS_VALIDATE,
        }),
        state: form.errors[field] ? 'error' : ('default' as InputState),
        onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => form.setFieldValue(field, value),
        stateRelatedMessage: form.errors[field],
    });

    return (
        <Layout>
            <div className="fr-container">
                <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
                    <h1>Accédez à Aigle</h1>
                    <p>Merci pour votre intérêt pour Aigle !</p>
                    <p>
                        Avant tout, dites-nous en plus sur vous et votre besoin, afin que nous puissions y répondre au
                        mieux.
                    </p>

                    <Stepper currentStep={formStep} stepCount={FORM_STEP_TOTAL} title="" />

                    {error ? (
                        <Notice
                            className={classes.notice}
                            severity="alert"
                            title="Une erreur est survenue lors de l'envoi du formulaire."
                            description={
                                <span>
                                    Si l'erreur persiste, veuillez contacter directement{' '}
                                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                                </span>
                            }
                        />
                    ) : null}
                    {success ? (
                        <Notice
                            className={classes.notice}
                            severity="info"
                            title="Votre prise de contact a bien été prise en compte."
                            description="Nous revenons vers vous au plus vite."
                        />
                    ) : null}

                    {formStep === 1 ? (
                        <>
                            <Input
                                label={
                                    <span className={classes.label}>
                                        Indiquez le nom de votre collectivité , DDT(M), organisme, etc.
                                    </span>
                                }
                                {...getInputProps('collectivity')}
                            />
                            <RadioButtons
                                legend={
                                    <span className={classes.label}>
                                        Les constructions illégales dans les espaces naturels, agricoles ou forestiers
                                        (appelées aussi cabanisation, détournements d'usage, mitage,...) sont pour vous
                                        :
                                    </span>
                                }
                                options={criticities.map((criticity) => ({
                                    label: CRITICITIES_NAMES_MAP[criticity],
                                    nativeInputProps: {
                                        value: criticity,
                                        checked: form.values.criticity === criticity,
                                    },
                                }))}
                                {...getInputProps('criticity')}
                            />
                        </>
                    ) : null}

                    {formStep === FORM_STEP_TOTAL ? (
                        <>
                            <RadioButtons
                                legend={
                                    <span className={classes.label}>Dites-nous pourquoi Aigle vous intéresse :</span>
                                }
                                options={interests.map((interest) => ({
                                    label: INTERESTS_NAMES_MAP[interest],
                                    nativeInputProps: {
                                        value: interest,
                                        checked: form.values.interest === interest,
                                    },
                                }))}
                                {...getInputProps('interest')}
                            />

                            {/* @ts-expect-error TS2322 */}
                            <Input
                                label={
                                    <span className={classes.label}>
                                        A quel problème souhaitez-vous répondre avec Aigle ?
                                    </span>
                                }
                                textArea
                                {...getInputProps('issue')}
                            />
                            <Input
                                label={<span className={classes.label}>Votre nom et prénom</span>}
                                {...getInputProps('name')}
                            />
                            <Input
                                label={<span className={classes.label}>Votre fonction</span>}
                                {...getInputProps('job')}
                            />
                            <Input
                                label={<span className={classes.label}>Votre numéro de téléphone</span>}
                                {...getInputProps('phone')}
                            />
                            <Input
                                label={<span className={classes.label}>Votre adresse email</span>}
                                {...getInputProps('email')}
                            />
                        </>
                    ) : null}

                    <div className={classes['form-actions']}>
                        <div className={classes['form-actions-left']}>
                            <Button
                                type="button"
                                disabled={contactLoading || (formStep === 1 && !form.getValues().collectivity)}
                                onClick={() => setFormStep(formStep === 1 ? FORM_STEP_TOTAL : 1)}
                                priority="secondary"
                            >
                                {formStep === 1 ? 'Suivant' : 'Retour'}
                            </Button>
                            {formStep === FORM_STEP_TOTAL ? (
                                <Button type="submit" disabled={contactLoading}>
                                    Envoyer
                                </Button>
                            ) : null}
                        </div>

                        <Button
                            type="reset"
                            disabled={contactLoading}
                            onClick={() => form.reset()}
                            priority="tertiary no outline"
                        >
                            Effacer le formulaire
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Component;

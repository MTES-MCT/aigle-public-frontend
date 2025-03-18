import Button from '@codegouvfr/react-dsfr/Button';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ContactReason, ContactReasons } from '../../constants/contact';
import classes from './index.module.scss';

const CONTACT_ENDPOINT = `${import.meta.env.VITE_API_BASE_URL}/api/utils/contact-us/`;

type InputState = 'error' | 'default';

interface FormValues {
    firstName: string;
    lastName: string;
    collectivity: string;
    job: string;
    phone: string;
    email: string;
}

const Component: React.FC = () => {
    const [searchParams] = useSearchParams();
    const contactReason: ContactReason = useMemo(
        () =>
            searchParams.get('reason') || '' in ContactReasons
                ? (searchParams.get('reason') as ContactReason)
                : 'BASIC',
        [searchParams],
    );
    const [contactLoading, setContactLoading] = useState(false);

    const form = useForm<FormValues>({
        validate: {
            firstName: isNotEmpty('Veuillez renseigner votre prénom'),
            lastName: isNotEmpty('Veuillez renseigner votre nom'),
            collectivity: isNotEmpty('Veuillez renseigner votre collectivité'),
            job: isNotEmpty('Veuillez renseigner votre poste'),
            phone: isNotEmpty('Veuillez renseigner votre numéro de téléphone'),
            email: isEmail('Veuillez renseigner une adresse e-mail valide'),
        },
    });

    const handleSubmit = async (values: FormValues) => {
        setContactLoading(true);
        const params = new URLSearchParams();
        Object.entries(values).forEach(([key, value]) => {
            params.append(key, value);
        });
        params.append('contactReason', contactReason);

        try {
            await fetch(`${CONTACT_ENDPOINT}?${params.toString()}`);
        } catch (err) {}

        setContactLoading(false);
    };

    const getInputProps = (field: keyof FormValues) => ({
        ...form.getInputProps(field),
        key: form.key(field),
        state: form.errors[field] ? 'error' : ('default' as InputState),
        onChange: ({ target: { value } }) => form.setFieldValue(field, value),
        stateRelatedMessage: form.errors[field],
    });

    console.log(getInputProps('lastName'));
    console.log(form.values);
    console.log(form.errors);

    return (
        <Layout>
            <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
                <h1>Formulaire de prise de contact</h1>

                <Input label={<span className={classes.label}>Nom</span>} {...getInputProps('lastName')} />
                <Input label={<span className={classes.label}>Prénom</span>} {...getInputProps('firstName')} />
                <Input label={<span className={classes.label}>Collectivité</span>} {...getInputProps('collectivity')} />
                <Input label={<span className={classes.label}>Poste</span>} {...getInputProps('job')} />
                <Input label={<span className={classes.label}>Téléphone</span>} {...getInputProps('phone')} />
                <Input label={<span className={classes.label}>Adresse e-mail</span>} {...getInputProps('email')} />

                <div className={classes['form-actions']}>
                    <Button type="reset" onClick={() => form.reset()} priority="secondary">
                        Réinitialiser
                    </Button>
                    <Button type="submit" disabled={contactLoading}>
                        Envoyer
                    </Button>
                </div>
            </form>
        </Layout>
    );
};

export default Component;

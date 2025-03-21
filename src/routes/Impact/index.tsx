import React from 'react';
import Layout from '../../components/Layout';
import classes from './index.module.scss';
import clsx from 'clsx';

const Component: React.FC = () => {
    return (
        <Layout>
            <div className={clsx('fr-container', classes.container)}>
                <h1>Découvrez l'impact positif d'Aigle</h1>
                <iframe
                    src="https://metabase.aigle.beta.gouv.fr/public/dashboard/b35fe033-9bb4-4f10-a0a8-bf5809383fba"
                    frameBorder="0"
                    width="100%"
                    className={classes['embedded-metabase']}
                    allowTransparency
                />
            </div>
        </Layout>
    );
};

export default Component;

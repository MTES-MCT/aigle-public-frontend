import React from 'react';
import Layout from '../../components/Layout';
import classes from './index.module.scss';

const Component: React.FC = () => {
    return (
        <Layout>
            <div className="fr-container">
                <iframe
                    className={classes['contact-iframe']}
                    src="https://44a5646e.sibforms.com/v2/serve/MUIFAFGl8jyCp-5dECdNnMUjtWUL8N6wKwJ22B3m3nH5ZQzbxW-N9O85BR84H_RfpfJUrlqepOo09fFcKCsMtuy2TIl0SXP5kAXmt7Ld1pgpEbpiuk6jupuoCteTV7VHURI1CmfWhCsCj_Vpv82xZI2gknN0lmGUyW_4WZp9Oowysu0jkcrgs4P_T1Fp9IfYtIxb-q2zAjz2HkHohw=="
                    allowFullScreen
                ></iframe>
            </div>
        </Layout>
    );
};

export default Component;

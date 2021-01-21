import { Container } from '@material-ui/core';
import React from 'react';
import MainLayout from '../components/Layout';

export const index: React.FC = () => {
    return (
        <Container>
            <MainLayout>
                <div></div>
            </MainLayout>
        </Container>
    );
};

export default index;

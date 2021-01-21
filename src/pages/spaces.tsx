import Container from '@material-ui/core/Container';
import React from 'react';
import MainLayout from '../components/Layout';
import ListSpaces from '../components/ListSpaces';

export const spaces: React.FC = () => {
    return (
        <Container>
            <MainLayout>
                <ListSpaces />
            </MainLayout>
        </Container>
    );
};

export default spaces;

import Link from 'next/link';
import { Button, Container } from '@material-ui/core';
import React from 'react';
import MainLayout from '../components/Layout';

export const Home: React.FC = () => {
    const buttonText = 'List Spaces';
    return (
        <Container>
            <MainLayout>
                <Link href="/spaces">
                    <Button size="large" variant="outlined">
                        {buttonText}
                    </Button>
                </Link>
            </MainLayout>
        </Container>
    );
};

export default Home;

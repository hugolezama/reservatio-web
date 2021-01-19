import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PrimarySearchAppBar from '../components/layout';
import ListSpaces from '../components/ListSpaces';

export const spaces: React.FC = () => {
    return (
        <Container>
            <PrimarySearchAppBar>
                <ListSpaces />
            </PrimarySearchAppBar>
        </Container>
    );
};

export default spaces;

import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Space } from '../@types';
import SpaceCard from './SpaceCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(2)
    }
}));

export const ListSpaces: React.FC = () => {
    const [stateSpaces, setStateSpaces] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const spaces: Space[] = [
            { _id: '1', name: 'Condesa 1', city: 'CDMX', type: 'OFICINA' },
            { _id: '2', name: 'Minerva', city: 'Guadalajara', type: 'OFICINA' },
            { _id: '3', name: 'Condesa 2', city: 'CDMX', type: 'COWORKING' },
            { _id: '4', name: 'Condesa 1', city: 'CDMX', type: 'OFICINA' },
            { _id: '5', name: 'Minerva', city: 'Guadalajara', type: 'OFICINA' },
            { _id: '6', name: 'Condesa 2', city: 'CDMX', type: 'COWORKING' }
        ];
        setStateSpaces(spaces);
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {stateSpaces.map((space: Space) => (
                            <Grid key={space._id} item>
                                <SpaceCard space={space} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
export default ListSpaces;

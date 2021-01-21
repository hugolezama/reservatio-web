import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
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
            { _id: '6', name: 'Condesa 2', city: 'CDMX', type: 'COWORKING' },
            { _id: '11', name: 'Condesa 1', city: 'CDMX', type: 'OFICINA' },
            { _id: '12', name: 'Minerva', city: 'Guadalajara', type: 'OFICINA' },
            { _id: '13', name: 'Condesa 2', city: 'CDMX', type: 'COWORKING' },
            { _id: '14', name: 'Condesa 1', city: 'CDMX', type: 'OFICINA' },
            { _id: '15', name: 'Minerva', city: 'Guadalajara', type: 'OFICINA' },
            { _id: '16', name: 'Condesa 2', city: 'CDMX', type: 'COWORKING' }
        ];
        setStateSpaces(spaces);
    }, []);

    return (
        <React.Fragment>
            <Button variant="contained">default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="outlined">default</Button>
            <Button variant="outlined" color="primary">
                Primary
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary
            </Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <br /> <br />
            <TextField id="filled-basic" label="outlined" variant="outlined" color="primary" />
            <br />
            <Grid container className={classes.root} spacing={2}>
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
        </React.Fragment>
    );
};
export default ListSpaces;

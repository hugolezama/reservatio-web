import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import React from 'react';
import { Space } from '../@types';
interface SpaceCardProps {
    space: Space;
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: 300
    },
    media: {
        height: 150
    },

    avatar: {
        backgroundColor: red[500]
    }
}));

export const SpaceCard: React.FC<SpaceCardProps> = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label={props.space.type} className={classes.avatar}>
                        {props.space.type.substr(0, 1)}
                    </Avatar>
                }
                title={props.space.name}
                subheader={props.space.type}
            />
            <CardActionArea>
                <CardMedia className={classes.media} image="/images/NoImage.png" title="Paella dish" />
                <CardContent>
                    <p>{props.space.city}</p>
                </CardContent>
            </CardActionArea>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default SpaceCard;

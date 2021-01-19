import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Box, Button, Container } from '@material-ui/core';

interface Props {
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children } = props;

    return React.cloneElement(children, {
        elevation: 4
    });
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {},
        grow: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block'
            }
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            }
        },
        bodyContainer: {
            paddingTop: 100
        }
    })
);

export default function PrimarySearchAppBar(props: Props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
                        </Typography>

                        <Button variant="contained">default</Button>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        <Button variant="contained" color="secondary">
                            Secondary
                        </Button>

                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Container className={classes.bodyContainer}>
                <Box>{props.children}</Box>
            </Container>
        </React.Fragment>
    );
}

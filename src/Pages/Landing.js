import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        COVID-19 DATA INJECTION
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Data Injection Comparison
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            The web application is used to compare both NoSQL and SQL Databases in detecting
                            and preventing SQL Injection Attack based on Covid-19 dataset.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Link href="/login">
                                        <Button variant="contained" color="primary">
                                            Sign In
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register">
                                        <Button variant="outlined" color="primary">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/dashboard">
                                        <Button variant="outlined" color="primary">
                                            dashboard
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    COVID-19 DATA INJECTION
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    © Copyright 2021.
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    All rights reserved. Created by Group 3 - Advanced Database Topics
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
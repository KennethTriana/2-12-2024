import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Drawer, IconButton, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        margin: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        width: '15%',
        height: 'auto',
        padding: '1%',
    },
}));

const normalizeText = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-'); 
};

export default function Navbar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <div className={classes.drawer}>
            <List>
                {['Home', 'Productos', 'Usuarios', 'MasInformacion'].map((text) => (
                    <ListItem button component={Link} to={`/${text}`} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <img src={logo} alt='Logo' className={classes.logo} />
                    <Typography variant="h6" className={classes.title}>
                        "Autoservicio La Gran Cosecha"
                    </Typography>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
}
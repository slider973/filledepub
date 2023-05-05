import {Container, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from "react";
import Link from "next/link";

const Content = () => {
    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap:20,
        }}>
            <img
                alt="image"
                className="img-fluid"
                src="/assets/images/PEARLLL PNG.png"
            />
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquid amet animi aspernatur
                consectetur consequuntur culpa debitis est maxime, minima molestias nobis nostrum nulla odio omnis
                possimus, qui ullam vero!
            </Typography>
            <Box style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: 20,
                WebkitGap: 20
            }}>
                <Link legacyBehavior href="/register">
                    <Button variant="contained" disableElevation={true} size="large" style={{
                        padding: 15,
                        width: 300,
                        fontSize: 15,
                        color: 'white',
                        fontFamily: 'Exo 2',
                    }}>M'inscrire</Button>
                </Link>
                <Link legacyBehavior href="/login">
                    <Button variant="contained" disableElevation={true} size="large" style={{
                        padding: 15,
                        width: 300,
                        fontSize: 15,
                        color: 'white',
                    }}>Me connecter</Button>
                </Link>
            </Box>
        </Container>)


}

export default Content;
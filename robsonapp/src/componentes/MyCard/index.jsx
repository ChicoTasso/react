import * as React from 'react';
import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';



export default function MyCard(props) {
    return (
        <>
            <StyledCard sx={{
                width: '311px',
                height: '200px',
                textAlign: 'start',
            }}>
                <CardContent>

                    <Typography sx={{
                        display: 'flex',
                        color: '#339CFF',
                    }}>
                        {props.icon}
                        <Typography sx={{
                            display: 'flex',
                            color: '#339CFF',
                            marginLeft: '10px',
                            fontWeight: 'bold',

                        }}>{props.text}</Typography>

                    </Typography>

                    {props.subtitle}
                    {props.button}
                </CardContent>
            </StyledCard>
        </>

    );
};


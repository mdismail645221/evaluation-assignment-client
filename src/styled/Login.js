import { Box, styled } from "@mui/material";

export const LOGIN = styled('section')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    // background: '#adea',
    display: 'grid',
    placeItems: 'center',
    margin: 'auto'
}));
export const LOGINTITLE = styled('h3')(({ theme }) => ({
    color: '#000',
    fontSize: '1.5rem',
    textAlign: 'center'
}));
export const LOGINSOCAILICONS = styled(Box)(({ theme }) => ({
    color: 'red',
    textAlign: 'center',

    '& button svg': {
        fontSize: '1.5em',
    }
}));
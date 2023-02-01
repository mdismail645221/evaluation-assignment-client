import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            bgShap: '#FFFCFB',
            borderColor: '#F4CCCC',
            iconColor: '#F45442'
        }

    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.6rem 2.5rem'
                }
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary'
            }
        }
    }
});
import { styled, TableCell } from "@mui/material";



export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: '#ffffff',
    fontWeight: '900'
}));


export const LI = styled('li')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'left',
    justifyItems: 'left',
    alignItems: 'center',
    // color: '#fff',
    textAlign: "left",
    transition: '3ms',
    
     '& a':{
        paddingLeft: '10px'
     },

    '&:hover': {
        background: "#F45442",
        color: '#fff',
        border: '1px solid #F45442',
        borderRadius: '10px',
        transition: '3ms'
    },
}));
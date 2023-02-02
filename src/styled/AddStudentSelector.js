import { styled, TableCell } from "@mui/material";


export const AddStudentSelector = styled('select')(({ theme }) => ({
    width: '100%',
    // boxSizing: 'content-box'
}))


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: '#ffffff',
    fontWeight: '900'
}));
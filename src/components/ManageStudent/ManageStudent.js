import { Box, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, styled } from '@mui/material';
import React from 'react';
import { StyledTableCell } from '../../styled/ManageStudent';


function createData(name, calories, fat, carbs, protein) {
    console.log({ name, calories, fat, carbs, protein })
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const ManageStudent = () => {
    return (
        <Box>
            {/* manage student title  */}
            <Box className='addStudent-title'>
                <h3>Manage Student</h3>
                <span>25 Jul 2022  16:10</span>
            </Box>

            {/* manage student table start */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead  sx={{
                        background: "#F45442",
                    }}>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Class</StyledTableCell>
                            <StyledTableCell align="right">Roll No.</StyledTableCell>
                            <StyledTableCell align="right">View</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default ManageStudent;
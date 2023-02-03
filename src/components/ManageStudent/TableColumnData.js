import { TableCell } from '@mui/material';
import React from 'react';

const TableColumnData = ({ student }) => {
    console.log(student)
    return (
        <>
            <TableCell component="th" scope="row">
                000
            </TableCell>
            <TableCell sx={{
                textAlign: 'center'
            }}>0</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">4</TableCell>
        </>
    );
};

export default TableColumnData;
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, styled, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { StyledTableCell } from '../../styled/ManageStudent';
// import TableColumnData from './TableColumnData';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { toast } from 'react-hot-toast';

const ManageStudent = () => {


    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allStudents`)
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    console.log(students)





    // specific student delete method 
    const deleteStudent = (student) => {
        console.log(student._id)
        fetch(`http://localhost:5000/deleteStudent/${student._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged > 0) {
                    
                }
            })
    }



    return (
        <Box sx={{
            marginTop: '4rem'
        }}>
            {/* manage student title  */}
            <Box className='addStudent-title'>
                <h3>Manage Student</h3>
                <span>25 Jul 2022  16:10</span>
            </Box>

            {/* manage student table start */}
            <TableContainer>
                <Table className="table w-full">
                    {/* <!-- head --> */}
                    <TableHead sx={{
                        background: '#F33823',
                        '& tr th': {
                            color: '#ffffff',
                            fontWeight: "900"
                        }
                    }}>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>CLASS</TableCell>
                            <TableCell>ROLL NO.</TableCell>
                            <TableCell>VIEW</TableCell>
                            <TableCell>EDIT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            students.map((student, idx) => <TableRow key={student._id}>
                                <TableCell >{`${student?.firstName} ${student?.middleName} ${student?.lastName}`}</TableCell>
                                <TableCell>{student?.classes}</TableCell>
                                <TableCell>{student?.rollNumber}</TableCell>
                                {/* view button */}
                                <TableCell>
                                    <IconButton sx={{ color: '#F4503E' }}>
                                        <RemoveRedEyeOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                                {/* edit button ==> */}
                                <TableCell>
                                    <IconButton sx={{ color: '#F4503E' }}>
                                        <ModeOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                                {/* delete button ==> */}
                                <TableCell >
                                    <IconButton onClick={() => deleteStudent(student)} sx={{ color: '#F4503E' }}>
                                        <DeleteForeverOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default ManageStudent;
import { Box, FormControl, FormHelperText, Input, MenuItem, Select } from '@mui/material';
import React from 'react';
import '../AddStudent/AddStudent.css'




const AddStudent = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(age)
    };

    return (
        <section className='addStudent-container'>
            {/* add student title  */}
            <div className='addStudent-title'>
                <h3>add Student</h3>
                <span>25 Jul 2022  16:10</span>
            </div>

            {/* add student form */}
            <form >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd',
                            padding: '16.5px 14px',
                        }} type="text" placeholder='FirstName' />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd',
                            padding: '16.5px 14px',
                        }} type="text" placeholder='Middle Name' />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd',
                            padding: '16.5px 14px',
                        }} type="text" placeholder='LastName' />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>
                        <FormControl sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }}>
                            <Select
                                // value={age}
                                // onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <select>
                            <option value="ONE">ONE</option>
                            <option value="TWO">TWO</option>
                        </select>

                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} type="text" placeholder='Enter Roll Number in Digits' />
                    </Box>
                </Box>

                {/*  info address two */}
                <Box sx={{
                    marginTop: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} type="text" placeholder='Select Class' />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} type="text" placeholder='Select Division' />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} type="text" placeholder='Select Class' />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} type="text" placeholder='Select Division' />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} type="text" placeholder='Enter Roll Number in Digits' />
                    </Box>
                </Box>
            </form>

        </section>
    );
};

export default AddStudent;
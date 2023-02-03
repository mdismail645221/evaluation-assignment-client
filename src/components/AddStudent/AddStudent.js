import { Box, Button, FormControl, FormHelperText, Input, MenuItem, Select } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { AddStudentSelector } from '../../styled/AddStudentSelector.js';
// import { ADDSTUDENTSELECTOR } from '../../styled/ADDSTUDENTSELECTOR.JS';
import '../AddStudent/AddStudent.css'




const AddStudent = () => {

    // const [fastName, setFastName] = useState("");
    // const [middleName, setMiddleName] = useState("");
    // const [classes, setClasses] = useState("");
    // const [division, setDivision] = useState("");
    // const [rollNumber, setRollNumber] = useState("");
    // const [addressLineOne, setAddressLineOne] = useState("");
    // const [addressLineTwo, setAddressLineTwo] = useState("");
    // const [landmark, setLandmark] = useState(""); 
    // const [city, setCity] = useState(""); 
    // const [pincode, setPincode] = useState(""); 



    const initialState = {
        firstName: "",
        middleName: "",
        lastName: "",
        classes: "",
        division: "",
        rollNumber: "",
        addressLineOne: "",
        addressLineTwo: "",
        landmark: "",
        city: "",
        pincode: ""

    };

    const reducer = (state, action) => {
        console.log(action)
        if (action.type === "INPUT") {
            return {
                ...state,
                [action.playload.name]: action.playload.value
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
    }


    return (
        <section className='addStudent-container'>
            {/* add student title  */}
            <div className='addStudent-title'>
                <h3>add Student</h3>
                <span>25 Jul 2022  16:10</span>
            </div>

            {/* add student form */}
            <form onSubmit={handleSubmit}>
                {/* student row info number one start */}
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
                            // padding: '16.5px 14px',
                        }}

                            required
                            type="text"
                            placeholder='FirstName'
                            name="firstName"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd',
                            // padding: '16.5px 14px',

                        }}
                            required
                            type="text"
                            placeholder='Middle Name'
                            name="middleName"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd',
                            // padding: '16.5px 14px',
                        }}
                            required
                            type="text"
                            placeholder='LastName'
                            name="lastName"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>

                        <AddStudentSelector 
                            required
                            name="classes"
                            onChange={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        >
                            <option value="Select Class">Select Class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </AddStudentSelector>

                        <AddStudentSelector
                            required
                            name="division"
                            onChange={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        >
                            <option value="Selected Division">Selected Division</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </AddStudentSelector>

                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }}
                            required
                            type="number"
                            placeholder='Enter Roll Number in Digits'
                            name="rollNumber"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                    </Box>
                </Box>

                {/* student row info number Two start */}
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
                        }}
                            required
                            type="text"
                            placeholder='Address Line 1'
                            name="addressLineOne"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }}
                            required
                            type="text"
                            placeholder='Address Line 2'
                            name="addressLineTwo"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }}
                            required
                            type="text"
                            placeholder='Landmark'
                            name="landmark"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }}
                            required
                            type="text"
                            placeholder='City'
                            name="city"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                        />
                        <Input sx={{
                            width: '100%',
                            border: '1px solid #ddd'
                        }} 
                            required
                        type="number"
                         placeholder='PinCode'
                            name="pincode"
                            onBlur={(e) => dispatch({ type: "INPUT", playload: { name: e.target.name, value: e.target.value } })}
                          />
                    </Box>
                </Box>
                <Box>
                    <Button type='submit'>add Student</Button>
                </Box>
            </form>

        </section>
    );
};

export default AddStudent;
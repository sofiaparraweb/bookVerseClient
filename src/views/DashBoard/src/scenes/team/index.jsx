import { Box, Typography, useTheme, Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import AdminPanelSettingsOutlinedIcon from  '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from  '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from  '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'
import React from "react";
import {getDashboardUsers} from "../../../../../Redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Team = () =>{
    const dispatch = useDispatch();
    const teamData = useSelector((state) => state.LocalPersist?.teamData);
    const [enabledUsers, setEnabledUsers] = useState({});
    console.log("estoy en teamdata", teamData);
    console.log("estoy en enabledUsers", enabledUsers);


      useEffect(() => {
        dispatch(getDashboardUsers());
       
      }, [dispatch]);

      const URL = "https://bookverse-m36k.onrender.com";
      const handleToggleUsers = async (id) => {
          if (enabledUsers[id]) {
              await axios.post(`${URL}/dashboard/user/restore/${id}`);
          } else {
              await axios.delete(`${URL}/dashboard/user/delete/${id}`);
          }
          setEnabledUsers((prevEnabledUsers) => ({
              ...prevEnabledUsers,
              [id]: !prevEnabledUsers[id],
          }));
          dispatch(getDashboardUsers());
      };

      useEffect(() => { 
        const initialEnabledUsers = teamData?.reduce((acc, user) => {
            acc[user.id] = user.deletedAt !== null;
            return acc;
        }, {});
        setEnabledUsers(initialEnabledUsers);
    }, [teamData]);

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field:'id', headerName: 'ID'},
        {field:'name', headerName:'Name', flex:1, cellClassName:'name-column--cell'},
        {field:'country', headerName:'Country', type: 'text',headerAlign:"left",aling: 'left'},
        {field:'phone', headerName:'Phone Number', flex:1},
        {field:'email', headerName:'Email', flex:1},
        {field:'access', 
        headerName:'Access Level', 
        flex:1, 
        renderCell: ({row:{access, id, isBanned} })=> {
            const isEnabled = enabledUsers[id];
            const buttonColor = isEnabled ? 'primary' : 'secondary';

            return(
                <Box
                width='60%'
                m='0 auto'
                p='5px'
                display='flex'
                justifyContent='center'
                backgroundColor={
                    access === 'user' ? colors.greenAccent[600] : colors.greenAccent[700]
                }
                borderRadius='4px'
                >
                    
                    {/* {access ==='manager' && <SecurityOutlinedIcon />} */}
                    {access ==='user' && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
                        {access}
                    </Typography>
                    <Button
                        variant='contained'
                        disableElevation
                        color={buttonColor}
                        onClick={() => handleToggleUsers(id)}
                        >
                        {isEnabled ? 'Off' : 'On'}
                    </Button>
                   
                </Box>
            )
        }},
    ]
      
    return(
        <Box m='20px' marginTop="70px">
        <Header title='USERS' subtitle='Managing the Users' />
            <Box
            m='40px 0 0 0'
            height='75vh'
            sx={{
                '& .MuiDataGrid-root' :{
                    border: 'none'
                },
                '& .MuiDataGrid-cell' :{
                    borderBottom: 'none'
                } ,
                '& .name-column--cell':{
                    color: colors.greenAccent[300]
                } ,
                '& .MuiDataGrid-ColumnHeaders':{
                    backgroundColor : colors.blueAccent[700],
                    borderBottom:'none'
                } ,
                '& .MuiDataGrid-virtualScroller' :{
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer':{
                    borderTop:'none',
                    backgroundColor: colors.blueAccent[700]
                
                },  

            }}
            >
                <DataGrid 
                rows={teamData || []}
                columns={columns}
                />

            </Box>

        </Box>
    )
}
export default Team
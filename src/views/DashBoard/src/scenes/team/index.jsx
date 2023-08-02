import { Box, Typography, useTheme} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import {mockDataTeam} from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from  '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from  '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from  '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'
//import { aD } from '@fullcalendar/core/internal-common'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const Team = () =>{
    const [teamData, setTeamData] = useState([]);

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field:'id', headerName: 'ID'},
        {field:'name', headerName:'Name', flex:1, cellClassName:'name-column--cell'},
        {field:'country', headerName:'country', type: 'text',headerAlign:"left",aling: 'left'},
        {field:'phone', headerName:'Phone Number', flex:1},
        {field:'email', headerName:'Email', flex:1},
        {field:'access', headerName:'Access Level', flex:1, renderCell: ({row:{access}})=> {
            return(
                <Box
                width='60%'
                m='0 auto'
                p='5px'
                display='flex'
                justifyContent='center'
                backgroundColor={
                    access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
                }
                borderRadius='4px'
                >
                    {access ==='admin' && <AdminPanelSettingsOutlinedIcon />}
                    {access ==='manager' && <SecurityOutlinedIcon />}
                    {access ==='user' && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
                        {access}
                    </Typography>
                </Box>
            )
        }},
    ]

    useEffect(() => {
        
        fetchTeamData();
      }, []);

      const fetchTeamData = async () => {
        try {
          // Realizar la solicitud GET al endpoint en el backend
          const url = "https://bookverse-m36k.onrender.com";
          //const url = "http://localhost:3001";
          const response = await Axios.get(`${url}/user`);
          console.log('Respuesta del backend:', response.data);
          setTeamData(response.data);
        } catch (error) {
          console.error('Error al obtener los datos del equipo:', error);
        }
      };


    return(
        <Box m='20px'>
            <Header title='' subtitle='Managing the Users' />

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
                rows={teamData}
                columns={columns}
                />

            </Box>

        </Box>
    )
}
export default Team
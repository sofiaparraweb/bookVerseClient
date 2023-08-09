import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import axios from 'axios'

const Invoices = () =>{

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [salesData, setSalesData] = useState([]);

    const columns = [
    { field: 'user_email', headerName: 'User Email', flex: 1 },
    { field: 'book', headerName: 'Book', flex: 1 },
    { field: 'book_price', headerName: 'Price', flex: 1 },
    { field: 'book_quantity', headerName: 'Quantity', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  useEffect(() => {
    // Realizar la solicitud al backend para obtener los datos de ventas
    axios.get('https://bookverse-m36k.onrender.com/dashboard/sales/all')
      .then(response => {
        setSalesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching sales data:', error);
      });
  }, []);

    return(
        <Box m='20px' marginTop='70px'>
            <Header title='SALES' subtitle='List of Invoice Balance' />

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
                '& .MuiCheckbox-root':{
                    color: `${colors.greenAccent[200]} !important`
                }

            }}
            >
                <DataGrid
          checkboxSelection
          rows={salesData}
          columns={columns}
               
                />

            </Box>

        </Box>
    )
}

export default Invoices
import { Box} from '@mui/material'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import Header from '../../components/Header'
//import { aD } from '@fullcalendar/core/internal-common'

const Products = () =>{

    const allbooks = useSelector(state => state.LocalPersist.allbooks);
    console.log(allbooks)

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Update the local state with the data from allbooks
        setRows(allbooks);
      }, [allbooks]);

    const columns = [
        {field:'image', headerName:'Image', flex:0.4, renderCell: (params) => (
            <img src={params.value} alt={`Book ${params.row.title}`} style={{ width: '100%', height: "100%", objectFit: 'cover' }} />
          )},
        {field:'author', headerName:'Author', flex:1, cellClassName:'name-column--cell'},
        {field:'title', headerName:'Title', flex:1.5, cellClassName:'name-column--cell'},
        {field:'price', headerName:'Price', type: 'number', headerAlign: "left", align: 'left', valueFormatter: (params) => `USD ${params.value}.0`},        
        {field: 'Genres', valueGetter: (params) => params.row.Genres[0].name, headerName:'Genre', flex:1},        
        {field:'publicationDate', headerName:'Publication date', flex:1},        
    ]

    return(
        <Box m='20px'>
            <Header title='' subtitle='List of Books available' />

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
                '& .MuiDataGrid-toolbarContainer .MuiButton-text' :{
                    color: `${colors.grey[100]} !important`
                }

            }}
            >
                <DataGrid 
                rows={rows}
                columns={columns}
                components={{Toolbar: GridToolbar}}
                rowHeight={100}
                />

            </Box>
        </Box>
    )
}

export default Products;
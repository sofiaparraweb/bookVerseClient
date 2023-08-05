import Axios from 'axios';
import { Box, Typography, useTheme, Button} from '@mui/material'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { getBooksDashboard, deleteProduct } from '../../../../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import LockOpenOutlinedIcon from  '@mui/icons-material/LockOpenOutlined'

const Products = () =>{

    const dispatch = useDispatch();
    const products = useSelector(state => state.LocalPersist.products);
    const [enabledBooks, setEnabledBooks] = useState({});

    const handleToggleBooks = (id, isBanned) => {
        dispatch(deleteProduct(id));
        setEnabledBooks((prevEnabledBooks) => ({
            ...prevEnabledBooks,
            [id]: !prevEnabledBooks[id],
        }));
    };
    
    useEffect(() => {
        dispatch(getBooksDashboard());
    }, [dispatch]); 

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field:'image', headerName:'Image', flex:0.4, renderCell: (params) => (
            <img src={params.value} alt="Book" style={{ width: '100%', height: "100%", objectFit: 'cover' }} />
          )},
        {field:'id', headerName:'ID', flex:0.3, type: 'number', headerAlign: "left", align: 'left'},
        {field:'author', headerName:'Author', flex:1, cellClassName:'name-column--cell'},
        {field:'title', headerName:'Title', flex:1.5, cellClassName:'name-column--cell'},
        {field:'price', headerName:'Price', type: 'number', headerAlign: "left", align: 'left', valueFormatter: (params) => `USD ${params.value}.0`},        
        {field:'publicationDate', headerName:'Publication date', flex:0.6},
        {field:'access', 
        headerName:'Access Level', 
        flex:0.5, 
        renderCell: ({row:{access, id, isBanned} })=> {
            const isEnabled = enabledBooks[id];
            const buttonColor = isEnabled ? 'primary' : 'secondary';

            return(
                <Box
                width='80%'
                m='auto'
                p='5px'
                display='flex'
                justifyContent='center'
                borderRadius='4px'
                >
                    {access ==='user' && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
                        {access}
                    </Typography>
                    <Button
                        variant='contained'
                        disableElevation
                        color={buttonColor}
                        onClick={() => {handleToggleBooks(id, !isBanned)}}
                        >
                        {isEnabled ? 'Off' : 'On'}
                    </Button>
                </Box>
            )
        }},
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
                rows={products || []}
                columns={columns}
                components={{Toolbar: GridToolbar}}
                rowHeight={100}
                />

            </Box>
        </Box>
    )
}

export default Products;
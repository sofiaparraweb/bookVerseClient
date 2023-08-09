import axios from 'axios';
import { Box, Typography, useTheme, Button} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { getBooksDashboard } from '../../../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.LocalPersist.products);
    console.log(products)
    const [enabledBooks, setEnabledBooks] = useState({});

    useEffect(() => {
        dispatch(getBooksDashboard());
    }, [dispatch]);

    const URL = "https://bookverse-m36k.onrender.com";
    const handleToggleBooks = async (id) => {
        if (enabledBooks[id]) {
            await axios.post(`${URL}/dashboard/books/restore/${id}`);
        } else {
            await axios.delete(`${URL}/dashboard/books/delete/${id}`);
        }
        setEnabledBooks((prevEnabledBooks) => ({
            ...prevEnabledBooks,
            [id]: !prevEnabledBooks[id],
        }));
        dispatch(getBooksDashboard());
    };

    useEffect(() => {
        const initialEnabledBooks = products?.reduce((acc, product) => {
            acc[product.id] = product.deletedAt !== null;
            return acc;
        }, {});
        setEnabledBooks(initialEnabledBooks);
    }, [products]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
        renderCell: ({row:{access, id} })=> {
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
                        onClick={() => handleToggleBooks(id)}
                        >
                        {isEnabled ? 'Off' : 'On'}
                    </Button>
                </Box>
            );
        }},
    ]; 

    return(
        <Box m='20px' marginTop="70px">
            <Header title={<h1 style={{ fontSize: '30px' }}>Our books</h1>} subtitle='List of Books available' />

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
                rowHeight={100}
                />
            </Box>
        </Box>
    )
}

export default Products;
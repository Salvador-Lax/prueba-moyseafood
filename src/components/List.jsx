import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const List = ({data}) => {
    const rows = data.map((row) => (
        {
            id: row.id, 
            name: row.name,
            username: row.username,
            email: row.email,
            phone: row.phone
        }
    ));
    
    const columns = [
        {
            field: 'name', 
            headerName: 'Name', 
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>            )
        },
        {
            field: 'username', 
            headerName: 'User Name', 
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>
            )
        },
        {
            field: 'email',
            headerName: 'Email', 
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>
            )
        },
        {
            field: 'phone', 
            headerName: 'Phone', 
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>
            )
        },
    ];

    return (
        <Box sx={{ height: 400, width: '25%', margin: '0 auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>   
    );  
}

export default List;
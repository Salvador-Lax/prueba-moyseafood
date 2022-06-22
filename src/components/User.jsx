import { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { Box, TextField, Input } from '@mui/material';


const User = ({data}) => {
    const location = useLocation();
    const [user, setUser] = useState(data.find( user => user.id === location.state));
    let navigation = useNavigate();

    const updateData = (e) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/' + user.id, {
            method: 'PATCH',
            body: JSON.stringify({
                email: user.email,
                phone: user.phone,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            navigation('/');
        });
    }

    return (
        <Box component="form" onSubmit={updateData} sx={{ width: 'fit-content', margin: '0 auto' }}>
            <TextField disabled defaultValue={user.name} /><br />
            <TextField disabled defaultValue={user.username} /><br />
            <TextField defaultValue={user.email} onChange={e => setUser({...user, email: e.target.value})} /><br />
            <TextField defaultValue={user.phone} onChange={p => setUser({...user, phone: p.target.value})} /><br />
            <Input type="submit" value={'Send'}/>
        </Box>
        
    )
}

export default User;
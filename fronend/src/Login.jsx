import React, { useState } from "react";
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box width={300}>
                <Typography variant="h5" gutterBottom>Login</Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
                <Link> create new account </Link>
            </Box>
        </Box>
    );
}
export default Login
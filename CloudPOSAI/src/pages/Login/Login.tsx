import Button from '../../components/items/Button';
import api from '../../api/client';
import { useNavigate } from 'react-router-dom';

type LoginProps = {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
    const navigate = useNavigate();
    const username = 'dev';

    const handleLogin = async () => {
        const response = await api.post('/auth/login', { username });
        const token = response.data.token;

        localStorage.setItem('jwtToken', token);

        setIsAuthenticated(true);
        navigate("/");
    }

    return (
        <center>
            <div>Login
                <Button onClick={handleLogin} >Login</Button>
            </div>
        </center>
    )
}

export default Login
import {GET_USER_ENDPOINT} from '../constants/endpoints';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

function Home() {
    const navigate = useNavigate();
    const { setUser } = useUserContext();
    // User relevant attributes to store
    const RELEVANT_ATTRIBUTES = ['address', 'age', 'email', 'firstName', 'lastName', 'username', 'phone', 'image'];

    /* Retrieve data from endpoint and store it in context */
    const getUser = () => {
        fetch(GET_USER_ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                const user = RELEVANT_ATTRIBUTES.reduce((acc, key) => {
                    if (key in data) acc[key] = data[key];
                    return acc;
                }, {});
                // Set data in context and redirect
                setUser(user);
                navigate('/profile');
            })
            .catch((error) => {
                console.log('Unable to retrieve customer', error)
            })
    }

    return <button onClick={getUser}>Get user</button>
}

export default Home;
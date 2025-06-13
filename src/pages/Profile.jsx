import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Profile () {
    const { user } = useUserContext();
    const navigate = useNavigate();
    const [localUser, setLocalUser] = useState(null);

    useEffect(() => {
        if (user) {
            setLocalUser(user);
        } else {
            navigate('/');
        }
    }, [user])

    if (localUser) {
        return (
            <div>
                <h1>Profile Page</h1>
                <hr></hr>
                {localUser?.image && (<img src={localUser.image} alt='User Image' />)}
                <table>
                    <tbody>
                        {localUser?.firstName && (
                            <tr>
                                <td>First Name</td>
                                <td>{localUser.firstName}</td>
                            </tr>
                        )}
                        {localUser?.lastName && (
                            <tr>
                                <td>Last Name</td>
                                <td>{localUser.lastName}</td>
                            </tr>
                        )}
                        {localUser?.age && (
                            <tr>
                                <td>Age</td>
                                <td>{localUser.age}</td>
                            </tr>
                        )}
                        {localUser?.email && (
                            <tr>
                                <td>Email</td>
                                <td>{localUser.email}</td>
                            </tr>
                        )}
                        {localUser?.username && (
                            <tr>
                                <td>Username</td>
                                <td>{localUser.username}</td>
                            </tr>
                        )}
                        {localUser?.phone && (
                            <tr>
                                <td>Phone</td>
                                <td>{localUser.phone}</td>
                            </tr>
                        )}
                        {localUser?.address && (
                            <tr>
                                <td>Address</td>
                                <td>{localUser.address.address}, {localUser.address.city}, {localUser.address.stateCode} {localUser.address.postalCode}, {localUser.address.country}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Profile Page</h1>
            </div>
        );
    }
}

export default Profile;
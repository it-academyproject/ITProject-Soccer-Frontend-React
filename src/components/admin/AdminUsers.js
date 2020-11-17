import React from 'react';
import Image from 'react-bootstrap/Image';
import image from '../img/Admin-Managers.png';
import {Link} from 'react-router-dom';

const AdminUsers = () => {
    return (
        <Link to="/adminUsers/Single">
            <Image src={image} fluid />
        </Link>
    );
}

export default AdminUsers;
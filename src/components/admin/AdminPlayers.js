import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import image from '../img/Admin-Players.png';

const AdminPlayers = () => {
    return (
        <Link to="/adminPlayers/Single">
            <Image src={image} fluid />
        </Link>
        
    );
}

export default AdminPlayers;
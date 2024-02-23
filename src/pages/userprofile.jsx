import React from 'react';
import { useLocation } from "react-router-dom";

import UserDetails from "../components/UserDetails/UserDetails";
import orders from "../data/orders.json";
import MyTable from '../components/table';

const UserProfile = () => {
    const location = useLocation();

    const user = location.state;
    const userOrders = orders.filter(order => order.user_id === user.id);

    console.log(userOrders);

    return (
        <div className='user-profile-container'>
            <UserDetails user={user} />
            <MyTable 
                data={userOrders}
                headerLabels={['No', 'Product name', 'Product code', 'Total', 'Date']} />
        </div>
    );
}

export default UserProfile;
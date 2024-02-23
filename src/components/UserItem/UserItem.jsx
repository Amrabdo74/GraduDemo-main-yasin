import { useState } from 'react';

import './UserItem.css';

export default function UserItem({ user }) {
    const maxBalanceLength = 13;

    const formattedBalance = user.balance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EGP',
    });

    return (
        <div className="user-card">
            <div className="user-img"><img src={user.img} /> </div>
            <div className="name">{user.name}</div>
            <div className={user.status === 'active' ? 'status-active status' : 'status-blocked status'}>
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
            </div>
            <hr className='dashed'></hr>
            <div className="row">
                <div className='col'>
                    <span className='prop-name'>Orders</span>
                    <span className='prop-val'>{user.orders}</span>
                </div>
                <div className='col'>
                    <span className='prop-name'>Balance</span>
                    <span className='prop-val'>
                        {formattedBalance.length >= maxBalanceLength ? formattedBalance.substring(0, maxBalanceLength - 3) + '...' : formattedBalance}
                    </span>
                </div>
            </div>
        </div>
    );
};
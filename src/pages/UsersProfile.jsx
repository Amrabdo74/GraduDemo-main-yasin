import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserItem from "../components/UserItem/UserItem";
import ListFilter from "../components/ListFilter";
import users from "../data/users.json";
import MyTable from '../components/table';

const UsersProfile = (props) => {
  const navigate = useNavigate();
  const navToProfie = (user) => {
    navigate('/user-profile', { state: user });
  }
  const selections = ['All customers', 'Active', 'Blocked'];

  const [selected, setSelected] = useState(selections[0]);
  const handleChange = (e) => {
    setSelected(e.target.innerText);
  };

  const filteredUsers = users.filter((user) => {
    if (selected === selections[0]) return true;
    return user.status.toLowerCase() === selected.toLowerCase();
  });

  return (
    <>
      <ListFilter
        selection={selections}
        handleChange={handleChange}
        selected={selected} />
      <ul className="users-list">
        {
          filteredUsers.map((user, index) => {
            return <li key={index} className='users-item' onClick={() => navToProfie(user)}>
              <UserItem user={user} />
            </li>
          })
        }
      </ul >
    </>
  );
}

export default UsersProfile;
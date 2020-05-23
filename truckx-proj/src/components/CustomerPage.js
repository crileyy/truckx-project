import React, { useState } from 'react';
import { CustomerTable } from './CustomerTable';
import { Header } from './Header';
import { Search } from './Search';

const customers = [
  {
    id: 1,
    name: 'Jim Smith',
    username: 'jimmy',
    email: 'jimmy@gmail.com',
    phone: '6178194455',
    created_date: '04-22-2020',
  },
  {
    id: 2,
    name: 'Sam Jones',
    username: 'samname',
    email: 'sam@gmail.com',
    phone: '4128182909',
    created_date: '01-01-2020',
  },
];

export const CustomerPage = ({}) => {

  const [searchVal, setSearchVal] = useState('');

  const updateSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  const deleteCust = () => {

  };

  const editCust = () => {
    
  };

  const onAddUserClick = () => {

  };

  return <>
    <Header headerText={'My Customers'}/>
    <Search searchVal={searchVal} updateSearchVal={updateSearchVal}/>
    <button type="button" onClick={onAddUserClick}>Add user</button>
    <CustomerTable customers={customers}
      deleteCust={deleteCust} editCust={editCust}/>
    </>;
};
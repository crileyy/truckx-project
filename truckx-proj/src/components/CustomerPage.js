import React, { useState } from 'react';
import { CustomerTable } from './CustomerTable';
import { Header } from './Header';

const customers = [
  {
    id: 1,
    name: 'Jim Smith',
    username: 'jimmy',
    email: 'jimmy@gmail.com',
    phone: '6178194455',
    created_date: '04-22-2020',
  }
];

export const CustomerPage = ({}) => {

  const deleteCust = () => {

  };

  const editCust = () => {
    
  };

  return <>
    <Header headerText={'My Customers'}/>
    <CustomerTable customers={customers}
      deleteCust={deleteCust} editCust={editCust}/>
    </>;
};
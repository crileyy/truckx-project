import React, { useState } from 'react';
import { CustViewRow } from './CustViewRow';

export const CustomerTable = ({ customers, deleteCust, editCust }) => {

  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Created Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {customers.map(cust => 
        <CustViewRow customer={cust}
          deleteCust={deleteCust} editCust={editCust}/>)}
    </tbody>
  </table>;
};
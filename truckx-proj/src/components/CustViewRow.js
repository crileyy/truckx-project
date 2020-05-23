import React from 'react';

export const CustViewRow = ({ customer, deleteCust, editCust }) => {

  return <tr>
    <td>{customer.name}</td>
    <td>{customer.username}</td>
    <td>{customer.email}</td>
    <td>{customer.phone}</td>
    <td>{customer.created_date}</td>
    <td><button type="button" onClick={() => editCust(customer.id)}>Edit</button>
    <button type="button" onClick={() => deleteCust(customer.id)}>Delete</button></td>
  </tr>;
};
import React, { useState } from 'react';

export const Search = ({ searchVal, updateSearchVal }) => {

  return <input type="text" placeholder="Search for names, username, email, phone, etc." value={searchVal} onChange={updateSearchVal} />;
};
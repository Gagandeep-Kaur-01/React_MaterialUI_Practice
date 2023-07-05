import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, TextField } from '@mui/material';
import items from '../Utilities/constant';

const Searchbar = ( ) => {
  const [checkboxes, setCheckboxes] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(items);

  console.log("----filteredData-----", filteredData);

  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [id]: checked }));
  };

  

  const handleSelectAll = () => {
    const allChecked = Object.values(checkboxes).every(Boolean);
    const updatedCheckboxes = {};

    for (const { id } of items) {
      updatedCheckboxes[id] = !allChecked;
    }
    setCheckboxes(updatedCheckboxes);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = items.filter((row) => {
        const { name, category,  } = row;
        const lowerCaseTerm = searchTerm.toLowerCase();
        return name.toLowerCase().includes(lowerCaseTerm) || category.toLowerCase().includes(lowerCaseTerm);
    });
    setFilteredData(filtered);
  }, [items, searchTerm]);

  useEffect(() => {
    const checkedIds = Object.entries(checkboxes)
      .filter(([id, checked]) => checked)
      .map(([id]) => id);
    console.log('Checked IDs:', checkedIds);
  }, [checkboxes]);



  return (
    <>
    <h2>Searchbar</h2>
    <TableContainer>
        <TextField 
           label="Search"
           variant="outlined"
           value={searchTerm}
           onChange={handleSearchChange}
           style={{ marginBottom: 16 }}
        />   
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                onChange={handleSelectAll}
                checked={Object.values(checkboxes).every(Boolean)}
              />
            </TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Spend date</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  onChange={(event) => handleCheckboxChange(event, row.id)}
                  checked={ checkboxes[row.id] || false}
                />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.spendDate}</TableCell>
              <TableCell>{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Searchbar;
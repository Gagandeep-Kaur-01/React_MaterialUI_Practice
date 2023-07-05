import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
import items from '../Utilities/constant';

const CheckboxSelection = ( ) => {
  const [checkboxes, setCheckboxes] = useState({});
  const [selectedValues, setSelectedValues] = useState([]);

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

  const checkedItems = [];

  useEffect(() => {
    // const checkedIds = Object.entries(checkboxes)
    //   .filter(([id, name, checked]) => checked)
    //   .map(([id, name]) => id);
    // console.log('Checked IDs:', checkedIds);
    // setSelectedValues(checkedIds);

   

    for (const { id, name } of items) {
      if (checkboxes[id]) {
        selectedValues.push({ id, name });
      }
    }

    console.log("******inside*******", selectedValues);

  }, [checkboxes]);

  console.log("----selectedValues out---", selectedValues);

  // console.log("******outside*******", checkedItems);

  return (
    <>
    <h2>Checkbox selection</h2>
    <TableContainer>
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
          {items.map((row) => (
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

export default CheckboxSelection;

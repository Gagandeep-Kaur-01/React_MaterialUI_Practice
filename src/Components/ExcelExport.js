import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx';

import CourseList from './Course/CourseList'

const ExcelExport = (props) => {
    // console.log("---items--", props.items);   
    const {tableData} = props;
 

  const handleExport = () => {
    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(tableData);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'table_data.xlsx');
  };

  return (
    <div>
        <h1>Generate excelsheet of table data</h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
            <Button variant="contained" onClick={handleExport}>
                Export to Excel
            </Button>
        </div>       
       
       <CourseList items={tableData} />       
    </div>

      
   
  );
};

export default ExcelExport;

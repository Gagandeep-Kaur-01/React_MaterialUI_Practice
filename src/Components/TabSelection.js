import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

const TabSelection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
        <h2>Tabs</h2>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>

      <Typography component="div" role="tabpanel" hidden={activeTab !== 0}>
        <Box p={3}>Content for Tab 1</Box>
      </Typography>
      <Typography component="div" role="tabpanel" hidden={activeTab !== 1}>
        <Box p={3}>Content for Tab 2</Box>
      </Typography>
      <Typography component="div" role="tabpanel" hidden={activeTab !== 2}>
        <Box p={3}>Content for Tab 3</Box>
      </Typography>
    </div>
  );
};

export default TabSelection;

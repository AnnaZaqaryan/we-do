import React from 'react';

import { Box, FormControl, MenuItem, Select } from '@material-ui/core';

import Am from '../../images/am.png';
import Ru from '../../images/ru.png';
import En from '../../images/en.png';

import './style.scss';

export default function BasicSelect() {
  const [age, setAge] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box >
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}><img src={Ru} className="menuItemLeng" /></MenuItem>
          <MenuItem value={20}><img src={Am} className="menuItemLeng" /></MenuItem>
          <MenuItem value={30}><img src={En} className="menuItemLeng" /></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

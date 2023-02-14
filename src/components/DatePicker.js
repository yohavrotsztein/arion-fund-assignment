import { useContext, useState } from "react";import TextField from '@mui/material/TextField';
// @mui
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// context
import reloadContext from '../context/reloadContext';


const DatePickerComponent =() => {

  const [value, setValue] = useState(null);
  const { setReload } = useContext(reloadContext);
  const handleChange = () => {
    setReload(true);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="pick a date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          handleChange()
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePickerComponent
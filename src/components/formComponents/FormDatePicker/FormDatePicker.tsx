import React from "react";
import {Controller} from "react-hook-form";
import {TFormProps} from "../formProps";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {TextField} from "@mui/material";

export const FormDatePicker = ({name, control}: TFormProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({field:{onChange, value}}) => (
          <DatePicker
            value={value ? value : new Date()}
            inputFormat="DD-MM-YYYY"
            onChange={onChange}
            renderInput={(props: any) => (
              <TextField {...props} helperText="invalid mask"/>
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

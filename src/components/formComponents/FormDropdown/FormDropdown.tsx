import React from "react";
import {Controller} from "react-hook-form";
import {TFormProps} from "../formProps";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const options = [
  {
    label: "Dropdown Option 1",
    value: "1",
  },
  {
    label: "Dropdown Option 2",
    value: "2",
  },
];

export const FormDropdown = (
  {
    name,
    control,
    label,
  }: TFormProps) => {

  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <Controller
        render={({field: {onChange, value}}) => (
          <>
            <InputLabel>{label}</InputLabel>
            <Select onChange={onChange} value={value}>
              {generateSingleOptions()}
            </Select>
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

import {Controller} from "react-hook-form";
import {TFormProps} from "../formProps";
import {TextField} from "@mui/material";

export const FormInput = (
  {
    name,
    label,
    control
  }: TFormProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
                 field: {onChange, value},
                 fieldState: {error}
               }) => (
        <TextField
          helperText={error ? error.message : ''}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  )
}
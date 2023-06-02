import {TFormProps} from "@/src/components/formComponents/formProps";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";

type TSelect = {
  defaultValue?: string
  options: {
    label: string
    value: string
  }[]
} & TFormProps

const InputLabelSx = {
  '&.Mui-focused': {
    bgcolor: 'white',
    padding: '0 7px',
  },
  '&.MuiFormLabel-filled': {
    bgcolor: 'white',
    padding: '0 7px',
  }
}

export const FormSelect = (
  {
    name,
    control,
    label,
    defaultValue,
    options
  }: TSelect) => {
  return (
    <FormControl fullWidth size='small'>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({
                   field: {onChange, value},
                   fieldState: {error}
                 }) => (<>
            <InputLabel sx={InputLabelSx}> Age </InputLabel>
            <Select
              label={label}
              value={value}
              onChange={onChange}
            >
              {options.map(item => (
                <>
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                </>
              ))}
            </Select>
          </>
        )}
      />

    </FormControl>
  )
}
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {Controller} from "react-hook-form";
import {TFormProps} from "../formProps";

type TRadioList = {
  options: {
    label: string
    value: string
  }[]
} & Omit<TFormProps, 'SetValue'>

const FormControlLabelSx = {
  marginLeft: '-5px',
  '&>span': {
    padding: '5px'
  }
}

export const FormRadio = (
  {
    name,
    control,
    label,
    options
  }: TRadioList) => {

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
                   field: {onChange, value},
                   fieldState: {error},
                   formState,
                 }) => (
          <RadioGroup value={value} onChange={onChange}>
            {options.map((item, idx) => (
              <FormControlLabel
                sx={FormControlLabelSx}
                key={idx}
                value={item.value}
                label={item.label}
                control={<Radio/>}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

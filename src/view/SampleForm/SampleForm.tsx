import {Button, Paper, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {
  FormDatePicker,
  FormDropdown,
  FormInput,
  FormMultiCheckbox,
  FormRadio,
  FormSlider
} from "@/src/components/formComponents";

type TForm = {
  text: string
  radio: string
  dropdown: string
  datepicker: Date
  checkbox: string[]
  slider: number
}

export function SampleForm() {

  const {handleSubmit, reset, control, setValue, watch} = useForm<TForm>()

  const onSubmit = (data: TForm) => {
    console.log('Form data: ',data)
  }

  return (
    <div>
      <h2 className={'font-bold text-3xl pb-4'}>
        Sample Form
      </h2>

      <Paper style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 5vw",
      }}>
        <Typography variant="h3"> Form Demo</Typography>

        <FormInput name='text' control={control} label='Text input'/>

        <FormRadio
          name='radio'
          control={control}
          label='Radio input'
          options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
          ]}
        />

        <FormDropdown name='dropdown' control={control} label='Dropdown input'/>

        <FormDatePicker name='datepicker' control={control} label='Date input'/>

        <FormMultiCheckbox name='checkbox' control={control} setValue={setValue} label='Checkbox input'/>

        <FormSlider name='slider' control={control} setValue={setValue} label='Slider input'/>

        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
          {" "} Submit {" "}
        </Button>

        <Button onClick={() => reset()} variant={"outlined"}>
          {" "} Reset {" "}
        </Button>

      </Paper>
    </div>
  )
}
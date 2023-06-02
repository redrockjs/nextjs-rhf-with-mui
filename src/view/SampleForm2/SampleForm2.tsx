import {Button, Paper, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {FormInput, FormRadio, FormSelect} from "@/src/components/formComponents";

const FormSchema = z.object({
  name: z.string(),
  tagLine: z.string(),
  age: z.string()
})

type TForm = z.infer<typeof FormSchema>

export const defaultValues = {
  name: '',
  tagLine: '',
  age: '',
  demo: 'true'
}

export function SampleForm2() {

  const {control, reset, handleSubmit} = useForm<TForm>({defaultValues})

  const onSubmit = (data: TForm) => {
    console.log('Form: ', data)
  }
  return (
    <>
      <h2 className={'font-bold text-3xl pb-4'}>
        Sample Form 2
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Paper style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 0px",
          minWidth: "300px",
        }}>
          <Typography variant="h6">Form Demo</Typography>

          <FormInput name={'name'} control={control} label={'Name'}/>

          <FormInput name={'tagLine'} control={control} label={'Tagline'}/>

          <FormSelect
            name={'age'}
            control={control}
            options={[
              {label: 'Ten', value: '10'},
              {label: 'Twelve', value: '20'},
              {label: 'Thirty', value: '30'},
              {label: 'Forty', value: '40'},
            ]}
          />

          <FormRadio
            name={'demo'}
            control={control}
            label={'Участие в демо-днях'}
            options={[
              {label: 'Хочу участвовать', value: 'true'},
              {label: 'Не хочу участвовать', value: 'false'},
            ]}
          />

          <Button type={'submit'} variant={"text"}>
            {" "} Submit {" "}
          </Button>

          <Button onClick={() => reset()} variant={"outlined"}>
            {" "} Reset {" "}
          </Button>
        </Paper>
      </form>
    </>
  )
}
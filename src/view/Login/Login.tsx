import {FormEvent} from "react";
import {useStateGroup} from "@/src/hooks/useStateGroup";
import {useRouter} from "next/router";

export function Login() {

  const router = useRouter()

  const [formState, setFormState] = useStateGroup({
    email: "",
    password: "",
  });

  const resetForm = () => {
    setFormState.email('')
    setFormState.password('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formState)
  }


  return (
    <div>
      <h2 className={'font-bold text-3xl pb-4'}>
        Login
      </h2>

      <form className={'flex flex-col gap-2 w-[300px] py-4'} onSubmit={handleSubmit}>
        <input
          className={'p-1 rounded'}
          type="text"
          placeholder='Email'
          autoComplete='on'
          value={formState.email}
          onChange={e => setFormState.email(e.target.value)}
        />

        <input
          className={'p-1 rounded'}
          type="password"
          placeholder='Password'
          autoComplete='on'
          value={formState.password}
          onChange={e => setFormState.password(e.target.value)}
        />

        <button className={'self-end w-[100px] border border-gray-500 rounded'}>
          Send
        </button>
      </form>

    </div>
  )
}
import { useForm } from '../hooks/useForm'

export const FormWithHook = () => {

    const {formState, handleInputChange} = useForm({
        username: '',
        email: '',
        password: '',
    })

    const { username, email, password } = formState;

  return (
    <>
    <h3>FormWithHook</h3>
    <hr />

    <input 
        type="text" 
        className='form-control' 
        placeholder='Username'
        name='username'
        value={username}
        onChange={handleInputChange}
    />

    <input 
        type="email" 
        className='form-control' 
        placeholder='youremail@gmail.com'
        name='email'
        value={email}
        onChange={handleInputChange}
    />
    
    <input 
        type="text" 
        className='form-control' 
        placeholder='password'
        name='password'
        value={password}
        onChange={handleInputChange}
    />

    </>
  )
}

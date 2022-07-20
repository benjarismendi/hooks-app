import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    
    

  return (
    <>
    <h3>SimpleForm</h3>
    <hr />

    <input 
        type="text" 
        className='form-control' 
        placeholder='Username'
        name='username'
        value={username}
        onChange={handleInputChange}
    />

    {
        username === 'Pepe' && <Message />
    }

    <input 
        type="email" 
        className='form-control' 
        placeholder='youremail@gmail.com'
        name='email'
        value={email}
        onChange={handleInputChange}
    />

    </>
  )
}

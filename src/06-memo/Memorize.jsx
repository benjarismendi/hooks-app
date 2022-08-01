import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {counter, increment} = useCounter(0)
    const [show, setShow] = useState(true)

  return (
    <>
        <h3>Memorize</h3>
        <hr />

        <h4>Counter: <Small value={counter} /></h4>

        <button
            className='btn btn-primary'
            onClick={() => increment()}>
        +1    
        </button>

        <button 
        className='btn btn-outline-primary'
        onClick={() => {setShow(!show)}}>
            Show/Hide {`${show}`}
        </button>
    </>
  )
}

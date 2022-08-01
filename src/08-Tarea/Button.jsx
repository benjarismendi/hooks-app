import React from 'react'

export const Button = React.memo(({numero, incrementar}) => {

    console.log('Me volvi a renderizar :(')
  return (
    <button
        className='btn btn-primary mr-3'
        onClick={() => incrementar(numero)}
    >
        {numero}
    </button>
  )
})

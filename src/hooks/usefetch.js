import React, { useEffect, useState } from 'react'

export const usefetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        })

        const res = await fetch(url)
        const data = await res.json()

        setState({
            data,
            isLoading: false,
        })

        console.log(data)
    }

    useEffect(() => {
      
        getFetch()
      
    }, [url])
    

  return {
    data: state.data,
    isLoading: state.isLoading,
  }
}

import { createContext, useContext, useState, useEffect } from 'react'

const PollContext = createContext()

export function PollWrapper({ children }) {
    const [ state, setState ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('data.json').then((res) => res.json())
            // console.log('fetching data from context', result)
            setState(result)
        }
        fetchData()
    }, [])

  
    return (
      <PollContext.Provider value={{ state }}>
        {children}
      </PollContext.Provider>
    )
  }
  
  export function usePollContext() {
 return useContext(PollContext)
}
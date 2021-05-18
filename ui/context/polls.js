import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
    const [ state, setState ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('data.json').then((res) => res.json())
            console.log('fetching data from context', result)
            setState(result)
        }
        fetchData()
    }, [])

  
    return (
      <AppContext.Provider value={{ state }}>
        {children}
      </AppContext.Provider>
    )
  }
  
  export function useAppContext() {
    return useContext(AppContext)
  }
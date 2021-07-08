import { createContext, useContext, useState, useEffect } from 'react'

const PollContext = createContext()

export function PollWrapper ({ children }) {
  const [state, setState] = useState([])
  const fetchData = async () => {
    const result = await fetch('data.json')
      .then((res) => res.json())
    setState(result)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PollContext.Provider value={{ state }}>
      {children}
    </PollContext.Provider>
  )
}

export function usePollContext () {
  return useContext(PollContext)
}

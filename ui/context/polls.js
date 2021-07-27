import { createContext, useContext, useState, useEffect } from 'react'

const PollContext = createContext()

export function PollWrapper ({ children }) {
  const [state, setState] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await fetch('http://localhost:8000/votes')
      .then((res) => {
        return res.json()
      })
    
    setState(result)
  }
  const postData = async (data) => {
    fetch('http://localhost:8000/votes', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) =>
      console.log(res)
    )
  }

  return (
    <PollContext.Provider value={{ state, postData }}>
      {children}
    </PollContext.Provider>
  )
}

export function usePollContext () {
  return useContext(PollContext)
}

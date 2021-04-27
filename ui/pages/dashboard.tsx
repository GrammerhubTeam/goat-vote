import React from 'react'
// import Layout from '../components/Layout/layout'
// import utilStyles from '../styles/utils.module.scss'
import CurrentPolls from '../components/CurrentPolls'
import YourPolls from '../components/YourPolls'

export default function Dashboard() {
  return (
    <>
      <CurrentPolls />
      <hr />
      <YourPolls />
    </>
  )
}

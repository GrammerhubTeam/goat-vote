import React from 'react'

function TimeDisplay({ milliseconds }) {
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))
  const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24
  const minutes = Math.floor(milliseconds / (1000 * 60)) % 60
  const seconds = (milliseconds / 1000) % 60
  return (
    <div>
      {days} Day(s) : {hours} Hour(s) : {minutes} Min : {seconds} Sec
    </div>
  )
}

export default TimeDisplay

"use client"
import React, {useEffect, useState} from "react"


export default function Tour() {
  const [tours, setTours] = useState([])
  const [toursPlayout, setToursPlayouts] = useState([])

  useEffect(() => {
    const fetchAllTours = async () => {
      const response = await fetch("http://localhost:8000/tour/list")
      const fetchedTours = await response.json()
      setTours(fetchedTours)
    }

    const interval = setInterval(fetchAllTours, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const tourItems = tours.reverse().map((item) => {
      return (
        <h1>{item.title}</h1>
      )
    })
    setToursPlayouts(tourItems)
  }, [tours])


  return (
    <div>
      {toursPlayout}
    </div>
  )
}

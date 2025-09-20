import React from 'react'
import useAuth from '../hooks/useAuth'

export default function HomePage() {
  const {auth} = useAuth();
  console.log(auth)
  return (
    <div>
        <h1>Welcome to PhotoBooth</h1>
    </div>
  )
}

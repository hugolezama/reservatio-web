import React, { useEffect, useState } from 'react'
import { Space } from '../@types'
import SpaceCard from './SpaceCard'

export const ListSpaces: React.FC = () => {
  const [stateSpaces, setStateSpaces] = useState([])

  useEffect(() => {
    const spaces: Space[] = [
      { name: 'Condesa 1', city: 'CDMX', type: 'OFICINA' },
      { name: 'Minerva', city: 'Guadalajara', type: 'OFICINA' },
      { name: 'Condesa 2', city: 'CDMX', type: 'COWORKING' },
    ]
    setStateSpaces(spaces)
  }, [])

  return (
    <div>
      {stateSpaces.map((space: Space) => (
        <SpaceCard space={space} />
      ))}
    </div>
  )
}

export default ListSpaces

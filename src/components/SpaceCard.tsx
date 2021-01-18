import React from 'react'
import { Space } from '../@types'
interface SpaceCardProps {
  space: Space
}

export const SpaceCard: React.FC<SpaceCardProps> = (props) => {
  return (
    <div>
      <h1>{props.space.name}</h1>
      <h2>{props.space.type}</h2>
      <p>{props.space.city}</p>
    </div>
  )
}

export default SpaceCard

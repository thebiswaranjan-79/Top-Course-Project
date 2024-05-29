import React from 'react'

export default function Filter({filterData}) {
  return (
    <div>
      {
        filterData.map((data) => (
          <button key={data.id}>{data.title}</button>
        ))
      }
    </div>
  )
}

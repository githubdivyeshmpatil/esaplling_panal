import React from 'react'

function PropsHeading({title}) {
  return (
    <div className="text-center my-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
        {title}</h2>
    </div>
  )
}

export default PropsHeading
import React from 'react'

type TypeEducation = {
    data: any[]
}

export const Educational: React.FC<TypeEducation> = ({data}) => {
  return (
    <div className="h-auto overflow-y-auto" dangerouslySetInnerHTML={{__html: data[6].educational}}></div>
  )
}

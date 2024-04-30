import React from 'react'

type TypeSobre = {
    msg: string
}

const Sobre: React.FC<TypeSobre> = ({msg}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: msg }}>
    </div>
  )
}

export default Sobre
import React from 'react'

type TypeSobre = {
    msg: string
}

const Sobre: React.FC<TypeSobre> = ({msg}) => {
  return (
    <div className='h-auto overflow-y-auto' dangerouslySetInnerHTML={{ __html: msg }}>
    </div>
  )
}

export default Sobre
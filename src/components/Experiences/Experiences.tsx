import React from 'react'

type TypeExperiences = {
    data: any[]
}

const Experiences: React.FC<TypeExperiences> = ({data }) => {

  return (
    <div dangerouslySetInnerHTML={ {__html: data[5].exp}}>
        
    </div>
  )
}

export default Experiences;
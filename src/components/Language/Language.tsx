import React, { useEffect } from 'react'
import './Language.css'

type PopupProps = {
    setLanguage: ( lang: string ) => void
    option: number
    lang: string
    setPopUp: (popUp: boolean) => void
}

const Language: React.FC<PopupProps> = ({ setLanguage, option, lang, setPopUp }) => {

  useEffect(() => {
    if(option === 1 && lang == ""){
      setLanguage("Pt")
    }else if(option === 2 && lang == ""){
      setLanguage("En")
    }else if(option !== 0 && lang == ""){
      setPopUp(true)
    }
  },[option])

  

  return (
    <div className="text-center self-center justify-self-center w-60 h-60">
        <p>Escolha sua lingua</p>
        <p>Choose your language</p>
        <div className="flex space-between p-6">
          <button>1 - Português</button><button>2 - English</button>
        </div>
      </div>
  )
}

export default Language
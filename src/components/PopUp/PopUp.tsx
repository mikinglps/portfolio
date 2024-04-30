import React, { useEffect } from 'react'
import './PopUp.css'

type TypePopUp = {
    lang?: string
    option?: number
    setPopUp: (popUp: boolean) => void
    popUp?: boolean
    message?: string
    setMessage: (msg: string) => void
    setClicked: (bool: boolean) => void
    git?: string
    website?: string
    clicked: boolean
}

const PopUp: React.FC<TypePopUp> = ({lang, option, setPopUp, popUp, message, setMessage, setClicked, git, website, clicked}) => {

    useEffect(() => {
        if(git == ''){
            if(lang == 'Pt'){
                setMessage('Por favor, coloque apenas números válidos.')
            }else if(lang == 'En'){
                setMessage('Please, enter a valid number.')
            }else{
                setMessage('Por favor, coloque apenas números válidos.\nPlease, enter a valid number')
            }
        }
    },[option !== 0])

    useEffect(() => {
        if(clicked){
            setPopUp(false)
        }
    },[clicked])
  return (
    <div className='popUpMessage absolute p-5 h-40 inset-y-1/4 w-80 border-b-2 border-2 border-white bg-black'>
        <div className='absolute top-0 right-0 border-2 border-white cursor-pointer px-2' onClick={() => {setClicked(true); setPopUp(!popUp)}}>X</div>
        <p>{message}</p>
        {git != '' ? 
        <div className='flex'>
            <button className="w-1/2 border-2 border-white" onClick={() => { window.open(git, '_blank')}}>GitHub</button>
            <button className="w-1/2 border-2 border-white" onClick={() => { window.open(website, '_blank')}}>Website</button>
        </div>
        :
        <button className="w-10 border-2 border-white" onClick={() => setPopUp(false)}>Ok</button>
        }
    </div>
  )
}

export default PopUp;
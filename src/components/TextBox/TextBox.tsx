'use client';
import React, { useEffect, useState } from 'react'


type TextBoxProps = {
    lang: string,
    setOption: (option: number) => void,
    option: number,
    setEqual: (equal: boolean) => void
    equal: boolean
}


const TextBox: React.FC<TextBoxProps> = ({lang, setOption, option, setEqual, equal}) => {
    const [placeholder, setPlaceholder] = useState<string>("Coloque o número da opção no terminal / Enter the option number in the terminal")
    const enterHandler = (e: any) => {
        if(e.key == 'Enter'){
            let el = (document.getElementById('options') as HTMLInputElement);
            if(Number(el?.value) == option){
              setEqual(!equal)
            }
            setOption(Number(el?.value));
            el ? el.value = "" : null;
            //Repeating code lines so I can stop line break to occur.
            if(e.key == 'Enter'){
              e.preventDefault();
            }
            
        }
    }

    useEffect(() => {
      if(lang == 'Pt' || lang == 'En'){
        lang == 'Pt' ? setPlaceholder("Coloque o número da opção no terminal") : setPlaceholder("Please, enter the option number in the terminal" )
      }
      
    },[lang])

  return (
    <textarea className=' overflow-y-hidden placeholder-greenMain bg-transparent outline-none border-l-2 border-b-2 border-greenMain p-2 resize-none pb-0 h-10' id="options" onKeyDown={(e) => {enterHandler(e);}} placeholder={placeholder}></textarea>
  )
}

export default TextBox
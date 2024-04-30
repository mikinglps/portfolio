'use client';
import React, { useEffect, useReducer, useState } from 'react'
import dataFile from '@/data.json'
import './Columns.css'
import { Sobre, Experiences, Educational } from '@/components'


type ColumnProps = {
  lang: string
  option: number
  setOption: (opt: number) => void,
  equal: boolean
  setMessage: (msg: string) => void
  setPopUp: (bool: boolean) => void
  setGit: (git: string) => void
  setWebsite: (web: string) => void
  setEqual: (bool: boolean) => void
  clicked: boolean
  setClicked: (bool: boolean) => void
  popUp: boolean
}

const Columns: React.FC<ColumnProps> = ({ lang, option, setOption, equal, setMessage, setPopUp, setGit, setWebsite, setEqual, clicked, setClicked, popUp }) => {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [fColumnSelection, setFColumnSelection] = useState<boolean>(false)
  const [fColumnOption, setFColumnOption] = useState<number>(0)
  const [sColumnSelection, setSColumnSelection] = useState<boolean>(false)
  const [sColumnOption, setSColumnOption] = useState<number>(0)
  const [tColumnSelection, setTColumnSelection] = useState<boolean>(false)
  const [tColumnOption, setTColumnOption] = useState<number>(0)
  const [reducerVal, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
      setData( lang == "Pt" ? dataFile.pt : dataFile.en );
  },[])

  useEffect(() => {
    if(loading){
    setOption(0)
    setLoading(false)
    }
  },[data])

  useEffect(() => {
    if(option > 0 && option < 6 && !loading){
      setFColumnSelection(true) //talvez o problema possa ser aqui, pois fica atrasado somente qd volta pro inicio apertando 9
    }

    if(option > 5 && !fColumnSelection && !loading){
      setPopUp(true)
    }

    if(fColumnSelection && fColumnOption == 2 || fColumnSelection && fColumnOption == 5){
      setSColumnSelection(true)
    }

    if(option == 9){
      setTColumnSelection(false)
      setTColumnOption(0)
      setSColumnSelection(false)
      setSColumnOption(0)
      setFColumnSelection(false)
      setFColumnOption(0)
      setOption(0)

    }

    if(sColumnSelection && fColumnOption == 2){
      setTColumnSelection(!tColumnSelection)
    }

    if(clicked){
      setTColumnOption(0)
      setClicked(false)
      setPopUp(false)
    }


    if(tColumnOption == 0 && option != 0 && tColumnSelection){
      setTColumnOption(option)
      forceUpdate()
    }

  }, [option, equal, reducerVal])

  useEffect(() => {
      if(fColumnSelection){
        setFColumnOption(option)
      }
  }, [fColumnSelection])


  useEffect(() => {
    if(sColumnSelection && tColumnOption != 0){
      forceUpdate()
    }
    if(sColumnSelection){
        setSColumnOption(option)
    }
    

},[sColumnSelection])



useEffect(() => {
  if(fColumnOption == 5){
    const media: any = Object.entries(data[7].social);
    if(sColumnOption >= 1 && sColumnOption <= 2){
      window.open(media[sColumnOption - 1][1])
    }else{
      setPopUp(true)
    }
  }
}, [sColumnOption])


  useEffect(() => {
    if(tColumnSelection){ 
        setTColumnOption(option) 
      }else{
        forceUpdate()
      }
  },[tColumnSelection, tColumnOption])

useEffect(() => {
    if(tColumnSelection){
      console.log(tColumnOption)
      setTColumnOption(option)
      const backend: Array<any> = Object.entries(data[3].backend)
      const frontend: Array<any> = Object.entries(data[4].frontend)
      if(sColumnOption == 1){
        console.log('backend dentro')
        window.open(backend[tColumnOption - 1][1][0]["GitHub"], '_blank')
      }else if(sColumnOption == 2){
        console.log('dentro')
        if(tColumnOption == 0){
          forceUpdate()
          console.log('force')
        }else{
        if(frontend[tColumnOption - 1][1][0]["Website"] != undefined ){
          setMessage(data[2].msg) 
          setPopUp(true) 
          setGit(frontend[tColumnOption - 1][1][0]['GitHub']) 
          setWebsite(frontend[tColumnOption - 1][1][0]["Website"])
        }else{
          window.open(frontend[tColumnOption - 1][1][0]['GitHub'], '_blank')
        }
        
      }
    }
    }
    
}, [tColumnOption])



  

  if(loading){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className='flex w-full space-y-4 md:space-x-4 flex-col md:flex-row'>
        <ul className='justify-self-start w-full md:w-1/4'>
          { data[0].fcolumn.map((text: string, idx: number) =>   (
            <li key={idx}>| - {idx + 1} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg> {text}</li>
          ))
          }
        </ul>
        {fColumnOption == 1 && fColumnSelection ? <Sobre msg={data[1].sFcolumn} /> : 
        fColumnOption == 2 && fColumnSelection ? 
        <ul className='w-full md:w-1/4'>
          <li>| 1 - Backend</li>
          <li>| 2 - Frontend</li>
          {lang == "Pt" ? 
            <li>| 9 - Sair</li> :
            <li>| 9 - Exit</li>}
        </ul>    
      
        : 
        fColumnOption == 3 && fColumnSelection ? 
        <Experiences data={data}/> 
        : null}
        {sColumnOption == 1 && fColumnOption == 2 ?
        <ul>
          {Object.keys(data[3].backend).map((value, idx) => (
            <li key={idx}>| {idx + 1} - {value}</li>
          ))}
            {lang == "Pt" ? 
            <li>| 9 - Sair</li> :
            <li>| 9 - Exit</li>}
        </ul>
        : sColumnOption == 2 && fColumnOption == 2 ?
          <ul>
            {Object.keys(data[4].frontend).map((value, idx) => (
              <li key={idx}>| {idx + 1} - {value}</li>
            ))}
            {lang == "Pt" ? 
            <li>| 9 - Sair</li> :
            <li>| 9 - Exit</li>}
          </ul>
        : null }
        {fColumnOption == 4 && fColumnSelection ?
        <Educational data={data} />
        :
        fColumnOption == 5 && fColumnSelection ? 
          <ul>
            {Object.keys(data[7].social).map((value, idx) => (
              <li key={idx}>| {idx + 1} - {value}</li>
            ))}
            {lang == "Pt" ? 
            <li>| 9 - Sair</li> :
            <li>| 9 - Exit</li>}
          </ul>
        
      : null}

    </div>
  )
}

export default Columns
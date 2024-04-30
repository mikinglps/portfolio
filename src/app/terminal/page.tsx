'use client';
import './page.css'
import { Columns, Language, PopUp, TextBox } from '@/components'
import { useState } from "react";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({ weight: [ "400" ], subsets: ["latin"]  });

export default function Home() {
  const [lang, setLang] = useState<string>("")
  const [option, setOption] = useState<number>(0)
  const [popUp, setPopUp] = useState<boolean>(false)
  const [equal, setEqual] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("");
  const [git, setGit] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <main className={`${shareTechMono.className} flex p-6 justify-center w-full h-screen flex-col text-greenMain`}>
      <div className="flex justify-center w-full h-screen">
      {lang == "" ? 
      <Language setLanguage={setLang} lang={lang} option={option} setPopUp={setPopUp}/>
      :
      <section className="flex p-24 w-full h-full">
        <Columns lang={lang} option={option} setOption={setOption} equal={equal} setMessage={setMessage} setPopUp={setPopUp} setGit={setGit} setWebsite={setWebsite} setEqual={setEqual} setClicked={setClicked} clicked={clicked} popUp={popUp}/>
      </section>
      
      }
      </div>
      <TextBox lang={lang} option={option} setOption={setOption} setEqual={setEqual} equal={equal}/>
      {popUp ? <PopUp lang={lang} option={option} setPopUp={setPopUp} popUp={popUp} message={message} setMessage={setMessage} setClicked={setClicked} git={git} website={website} clicked={clicked}/> : null}
    </main>
  );
}
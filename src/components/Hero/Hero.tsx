import React from 'react'
import Image from 'next/image'

const Hero  = () => {
  return (
    <>
    <div className='h-[100px] w-full lg:hidden'></div>
    <div className='flex w-full h-full flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 flex justify-center flex-col p-5 order-2 lg:order-1'>
            <p className='font-medium text-3xl lg:text-7xl text-bgTerminal tracking-wide'>Desenvolvedor Fullstack</p>
            <p className='font-thin text-lg lg:text-xl'>Java | NodeJS | ReactJS | NextJS | Docker | SQL & NoSQL</p>
            <p>Olá, me chamo Michel Lopes e sou um desenvolvedor fullstack focado em oferecer serviço de alta qualidade.</p>
            <p>Preparei uma experiência como portfólio. Infelizmente, só funciona em computadores, não funcionará no mobile.</p>
            <p>A experiência se baseia inteiramente no prompt de comando (Terminal do Windows). Por favor, certifique-se de escrever as opções desejadas na caixa de texto, e então você me conhecerá melhor.</p>
            <button className='bg-bgTerminal text-greenMain p-4 rounded-2xl mt-2 w-full lg:w-2/4' onClick={() => { window.location.href="https://micheloblopes.vercel.app/terminal" }}>Clique para iniciar a experiência.</button>
        </div>
        <div className='order-1 lg:order-2  w-full lg:w-1/2 h-[350px] lg:h-full bg-bgTerminal relative flex justify-center align-center items-center p-6 flex-col lg:space-y-12'>
                <div className='lg:absolute left-[-120px] top-0 lg:bg-bgTerminal lg:w-[200px] lg:h-[300px] rounded-bl-full '></div>
                <div className='lg:absolute left-[-210px] top-[-90px] lg:bg-bgTerminal lg:w-[100px] lg:h-[100px] rounded-bl-full '></div>
                <div className='bg-transparent lg:bg-bg lg:w-[500px]  lg:h-[400px] rounded-full flex justify-center items-center'>
                    <Image className='rounded-full w-[400px] h-auto' src='/ft.png' alt="Foto de perfil" width={400} height={100}/>
                </div>
                <div className='fixed top-0 left-0 lg:static flex items-center justify-center space-x-4 w-full h-[100px] bg-bg p-2 lg:p-0 self-end'>
                    <Image className="w-[40px] lg:w-[50px]" src="/react.png" alt="react" width={50} height={50} />
                    <Image className="w-[40px] lg:w-[50px]" src="/next.png" alt="next" width={50} height={50} />
                    <Image className="w-[40px] lg:w-[50px]" src="/node.png" alt="node" width={50} height={50} />
                    <Image className="w-[40px] lg:w-[50px]" src="/java.png" alt="java" width={50} height={50} />
                    <Image className="w-[40px] lg:w-[50px]" src="/sql.png" alt="sql" width={50} height={50} />
                    <Image className="w-[40px] lg:w-[50px]" src="/docker.png" alt="docker" width={50} height={50} />
                </div>
        </div>

    </div>
    </>
  )
}

export default Hero
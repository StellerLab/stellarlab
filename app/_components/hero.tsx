'use client'

import { FC } from 'react'
import TextRandomized from './text-randomized'
import AnimatedText from './cursor-follow-text'

const Hero: FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#0f1729] to-[#0a0f1d] overflow-hidden relative m-0 p-0">
      <section className="h-screen w-screen flex items-center justify-center relative m-0 p-0">
        <div className="absolute w-full h-full overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="text-center text-white z-10 relative">
          <h1 className="text-5xl mb-4 font-bold tracking-wider relative group w-fit mx-auto">
                <TextRandomized text="創星實驗室" />
          </h1>
          <p className="text-lg mb-8 text-[#a0aec0] w-[50vw] mx-auto ">
             <AnimatedText
                    text='UIUX、interactive design、 bespokes web、 digital creative'
                    className='text-lg'
             />
          </p>
        </div>
      </section>
    </div>
  )
}

export default Hero
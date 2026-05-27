import { useEffect } from 'react'
import Lenis from 'lenis'

import Loader from './components/Loader'
import FilmGrain from './components/FilmGrain'
import AmbientBackground from './components/AmbientBackground'
import VHSOverlay from './components/VHSOverlay'
import CustomCursor from './components/CustomCursor'
import Particles from './components/Particles'

import Section from './components/Section'
import FinalMessage from './components/FinalMessage'

import { sections } from './data/sections'

export default function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      smoothTouch: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])

  return (
    <>

      <Loader />

      <AmbientBackground />

      <Particles />

      <FilmGrain />

      <VHSOverlay />

      <CustomCursor />

      <main>

        {sections.map((section, index) => (

          <Section
            key={section.id}
            section={section}
            reverse={index % 2 !== 0}
          />

        ))}

        <FinalMessage />

      </main>

    </>
  )
}
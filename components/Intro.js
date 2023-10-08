'use client'
import { useEffect, useState } from 'react'

export default function Intro() {
  const [classes, setClasses] = useState('')

  useEffect(() => {
    setClasses('visible')
  }, [])

  return (
    <section id="intro" className={classes}>
      <div>
        <p>
          I&apos;m <span>Doryan Lièvre</span>
          <br />
          Full-stack javascript developer,
          <br /> curious and code lover.
        </p>
        <a href="">Contact me</a>
      </div>
      <div>
        <img
          src="images/me_grayscale.png"
          alt="Profil picture of me (Doryan Lièvre)"
        />
      </div>
    </section>
  )
}

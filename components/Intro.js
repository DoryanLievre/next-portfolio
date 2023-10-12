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
        <a href="#contact" className="contact-link">
          Contact me
        </a>
      </div>
      <div className="image-container">
        <a
          className="cv-link"
          href="documents/Doryan_Lievre_CV.pdf"
          download="Doryan_Lievre_CV.pdf"
        >
          <img
            src="images/me_grayscale.png"
            alt="Profil picture of me (Doryan Lièvre)"
          />
        </a>

        <div className="bubble">
          <p>
            Want to see my resume?
            <br /> Click on me!
          </p>
        </div>
      </div>
      <div className="scrolling-mouse">
        <div className="wheel"></div>
      </div>
    </section>
  )
}

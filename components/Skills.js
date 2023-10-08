'use client'
import { useState } from 'react'

export default function Skills() {
  const [skillsShow, setSkillsShow] = useState('')
  return (
    <section id="skills">
      <div className="center">
        <h2>My Skills</h2>
        <div className={skillsShow + 'skills-container'}>
          <div className="skill-card">
            <img src="/images/js.png" alt="" />
            <span>Javascript</span>
          </div>
          <div className="skill-card">
            <img src="/images/html-5.png" alt="" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <img src="/images/css-3.png" alt="" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <img src="/images/git.svg" alt="" />
            <span>Git</span>
          </div>
          <div className="skill-card">
            <img src="/images/react.png" alt="" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <img src="/images/nodejs.svg" alt="" />
            <span>Node Js</span>
          </div>
          <div className="skill-card">
            <img src="/images/php.png" alt="" />
            <span>Php</span>
          </div>
          <div className="skill-card">
            <img src="/images/mongodb.png" alt="" />
            <span>Mongo db</span>
          </div>
        </div>
      </div>
    </section>
  )
}

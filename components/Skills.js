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
            <img src="/img/js.png" alt="" />
            <span>Javascript</span>
          </div>
          <div className="skill-card">
            <img src="/img/html-5.png" alt="" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <img src="/img/css-3.png" alt="" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <img src="/img/git.svg" alt="" />
            <span>Git</span>
          </div>
          <div className="skill-card">
            <img src="/img/react.png" alt="" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <img src="/img/nodejs.svg" alt="" />
            <span>Node Js</span>
          </div>
          <div className="skill-card">
            <img src="/img/php.png" alt="" />
            <span>Php</span>
          </div>
          <div className="skill-card">
            <img src="/img/mongodb.png" alt="" />
            <span>Mongo db</span>
          </div>
        </div>
      </div>
    </section>
  )
}

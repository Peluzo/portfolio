import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Skills.css'

const Skills = () => {
  const { language } = useLanguage()
  const skillsRef = useRef(null)

  useEffect(() => {
    if (!skillsRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = skillsRef.current.querySelectorAll('.skill-category')
    elements.forEach((el, index) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: '🤖',
      titleKey: 'skills.ml.title',
      descriptionKey: 'skills.ml.description'
    },
    {
      icon: '💻',
      titleKey: 'skills.fullstack.title',
      descriptionKey: 'skills.fullstack.description'
    },
    {
      icon: '🐍',
      titleKey: 'skills.python.title',
      descriptionKey: 'skills.python.description'
    },
    {
      icon: '🚀',
      titleKey: 'skills.devops.title',
      descriptionKey: 'skills.devops.description'
    },
    {
      icon: '🗄️',
      titleKey: 'skills.database.title',
      descriptionKey: 'skills.database.description'
    },
    {
      icon: '⚡',
      titleKey: 'skills.performance.title',
      descriptionKey: 'skills.performance.description'
    }
  ]

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'skills.title')}</h2>
        <p className="section-subtitle">
          {getTranslation(language, 'skills.subtitle')}
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{getTranslation(language, skill.titleKey)}</h3>
              <p>{getTranslation(language, skill.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

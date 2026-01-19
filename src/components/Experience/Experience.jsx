import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Experience.css'

const Experience = () => {
  const { language } = useLanguage()
  const experienceRef = useRef(null)

  useEffect(() => {
    if (!experienceRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateX(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = experienceRef.current.querySelectorAll('.timeline-item')
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateX(-30px)'
        el.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [language])

  const getExperiences = () => {
    const dates = {
      techcolca: language === 'pt' ? 'Mai 2025 - Ago 2025' : language === 'en' ? 'May 2025 - Aug 2025' : 'Mai 2025 - Août 2025',
      dialhost: language === 'pt' ? 'Ago 2018 - Ago 2021' : language === 'en' ? 'Aug 2018 - Aug 2021' : 'Août 2018 - Août 2021',
      freelance: language === 'pt' ? 'Jun 2022 - Jun 2023' : language === 'en' ? 'Jun 2022 - Jun 2023' : 'Juin 2022 - Juin 2023'
    }

    return [
      {
        date: dates.techcolca,
        companyKey: 'experience.techcolca.company',
        roleKey: 'experience.techcolca.role',
        locationKey: 'experience.techcolca.location',
        descriptionKey: 'experience.techcolca.description',
        achievementsKey: 'experience.techcolca.achievements'
      },
      {
        date: dates.dialhost,
        companyKey: 'experience.dialhost.company',
        roleKey: 'experience.dialhost.role',
        locationKey: 'experience.dialhost.location',
        descriptionKey: 'experience.dialhost.description',
        achievementsKey: 'experience.dialhost.achievements'
      },
      {
        date: dates.freelance,
        companyKey: 'experience.freelance.company',
        roleKey: 'experience.freelance.role',
        locationKey: 'experience.freelance.location',
        descriptionKey: 'experience.freelance.description',
        achievementsKey: 'experience.freelance.achievements'
      }
    ]
  }

  const experiences = getExperiences()

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'experience.title')}</h2>
        <p className="section-subtitle">
          {getTranslation(language, 'experience.subtitle')}
        </p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const achievements = getTranslation(language, exp.achievementsKey)
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-content">
                  <h3>{getTranslation(language, exp.companyKey)}</h3>
                  <h4>{getTranslation(language, exp.roleKey)}</h4>
                  <p className="company-location">{getTranslation(language, exp.locationKey)}</p>
                  <p className="company-desc">{getTranslation(language, exp.descriptionKey)}</p>
                  <ul className="achievements">
                    {Array.isArray(achievements) ? achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    )) : (
                      <li>{achievements}</li>
                    )}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience

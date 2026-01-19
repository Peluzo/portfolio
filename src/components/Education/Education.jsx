import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Education.css'

const Education = () => {
  const { language } = useLanguage()
  const educationRef = useRef(null)

  useEffect(() => {
    if (!educationRef.current) return

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

    const elements = educationRef.current.querySelectorAll('.education-item')
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [language])

  const getEducations = () => {
    const dates = {
      lasalle: language === 'pt' ? 'Set 2023 - Ago 2025' : language === 'en' ? 'Sep 2023 - Aug 2025' : 'Sep 2023 - Août 2025',
      cotemig1: language === 'pt' ? 'Jan 2020 - Dez 2022' : language === 'en' ? 'Jan 2020 - Dec 2022' : 'Jan 2020 - Déc 2022',
      cotemig2: language === 'pt' ? '2017 - 2019' : language === 'en' ? '2017 - 2019' : '2017 - 2019'
    }

    return [
      {
        date: dates.lasalle,
        institutionKey: 'education.lasalle.institution',
        degreeKey: 'education.lasalle.degree',
        locationKey: 'education.lasalle.location',
        descriptionKey: 'education.lasalle.description',
        topicsKey: 'education.lasalle.topics',
        topics: ['Web Development', 'MySQL', 'FastAPI', 'Python', 'Machine Learning', 'Integration', 'Front-End Development', 'GitHub', 'Flask', 'Web Applications']
      },
      {
        date: dates.cotemig1,
        institutionKey: 'education.cotemig1.institution',
        degreeKey: 'education.cotemig1.degree',
        locationKey: 'education.cotemig1.location',
        descriptionKey: 'education.cotemig1.description',
        topicsKey: 'education.cotemig1.topics',
        topics: ['SQL', 'MySQL', 'React.js', 'JavaScript', 'AngularJS', 'PHP', 'HTML5', 'Web Applications', 'WordPress']
      },
      {
        date: dates.cotemig2,
        institutionKey: 'education.cotemig2.institution',
        degreeKey: 'education.cotemig2.degree',
        locationKey: 'education.cotemig2.location',
        descriptionKey: 'education.cotemig2.description',
        topicsKey: 'education.cotemig2.topics',
        topics: ['JavaScript', 'PHP', 'WordPress', 'Bootstrap', 'CSS', 'SQL', 'HTML', 'Front-End Development', 'Problem Solving']
      }
    ]
  }

  const educations = getEducations()

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'education.title')}</h2>
        <p className="section-subtitle">
          {getTranslation(language, 'education.subtitle')}
        </p>
        <div className="education-timeline">
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-date">{edu.date}</div>
              <div className="education-content">
                <h3>{getTranslation(language, edu.institutionKey)}</h3>
                <h4>{getTranslation(language, edu.degreeKey)}</h4>
                <p className="education-location">{getTranslation(language, edu.locationKey)}</p>
                <p className="education-desc">{getTranslation(language, edu.descriptionKey)}</p>
                <div className="education-topics">
                  <strong>{getTranslation(language, edu.topicsKey)}</strong>
                  <div className="topics-grid">
                    {edu.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

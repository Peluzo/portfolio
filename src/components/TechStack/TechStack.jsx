import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './TechStack.css'

const TechStack = () => {
  const { language } = useLanguage()
  const techRef = useRef(null)

  useEffect(() => {
    if (!techRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'scale(1)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = techRef.current.querySelectorAll('.tech-item')
    elements.forEach((el, index) => {
      el.style.opacity = '0'
      el.style.transform = 'scale(0.8)'
      el.style.transition = `opacity 0.4s ease ${index * 0.03}s, transform 0.4s ease ${index * 0.03}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [language])

  const techCategories = [
    {
      titleKey: 'tech.categories.languages',
      items: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
    },
    {
      titleKey: 'tech.categories.ml',
      items: ['TensorFlow', 'Keras', 'Scikit-learn', 'YOLOv5', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      titleKey: 'tech.categories.frontend',
      items: ['React', 'Vue.js', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      titleKey: 'tech.categories.backend',
      items: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSocket']
    },
    {
      titleKey: 'tech.categories.database',
      items: ['MySQL', 'SQL', 'GitHub']
    },
    {
      titleKey: 'tech.categories.devops',
      items: ['Docker', 'FastAPI', 'Git', 'GitHub', 'Web Applications']
    }
  ]

  return (
    <section id="tech" className="tech-stack" ref={techRef}>
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'tech.title')}</h2>
        <p className="section-subtitle">
          {getTranslation(language, 'tech.subtitle')}
        </p>
        <div className="tech-categories">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3>{getTranslation(language, category.titleKey)}</h3>
              <div className="tech-grid">
                {category.items.map((item, idx) => (
                  <div key={idx} className="tech-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

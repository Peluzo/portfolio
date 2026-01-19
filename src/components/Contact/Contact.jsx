import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Contact.css'

const Contact = () => {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the data to a server
    // For now, we'll just simulate an API call
    console.log('Form data:', formData)

    // Simulate API call
    setTimeout(() => {
      alert(getTranslation(language, 'contact.success'))
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)

    // In a real application, you would send this data to your backend:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   const data = await response.json()
    //   alert(getTranslation(language, 'contact.success'))
    //   setFormData({ name: '', email: '', subject: '', message: '' })
    // } catch (error) {
    //   console.error('Error:', error)
    //   alert(getTranslation(language, 'contact.error'))
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <h3>{getTranslation(language, 'contact.subtitle')}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{getTranslation(language, 'contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{getTranslation(language, 'contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{getTranslation(language, 'contact.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{getTranslation(language, 'contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? getTranslation(language, 'contact.sending') : getTranslation(language, 'contact.send')}
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3>{getTranslation(language, 'contact.contactInfo')}</h3>
            <p>{getTranslation(language, 'contact.description')}</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>{getTranslation(language, 'contact.email')}</strong>
                <p>
                  <a 
                    href="mailto:jvpeluzo@gmail.com" 
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    jvpeluzo@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <strong>{getTranslation(language, 'contact.phone')}</strong>
                <p>
                  <a 
                    href="tel:514-233-8502" 
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    514-233-8502
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <strong>LinkedIn</strong>
                <p>
                  <a 
                    href="https://www.linkedin.com/in/jo%C3%A3o-vitor-peluzo-cardoso-data-scientist/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    linkedin.com/in/joão-vitor-peluzo-cardoso-data-scientist
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <strong>GitHub</strong>
                <p>
                  <a 
                    href="https://github.com/Peluzo/git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    github.com/Peluzo/git
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <strong>{getTranslation(language, 'contact.location')}</strong>
                <p>{getTranslation(language, 'contact.locationValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

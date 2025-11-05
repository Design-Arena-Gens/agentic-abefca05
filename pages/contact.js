import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      <Head>
        <title>Contact Us - Corporate Solutions Inc.</title>
      </Head>

      <section className="page-header">
        <h1>Get In Touch</h1>
        <p>Let's discuss how we can help your business grow</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-block">
            <h3>📍 Address</h3>
            <p>123 Business Plaza<br/>
            Downtown Financial District<br/>
            New York, NY 10004<br/>
            United States</p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>Main: +1 (555) 123-4567<br/>
            Support: +1 (555) 123-4568<br/>
            Sales: +1 (555) 123-4569</p>
          </div>

          <div className="info-block">
            <h3>✉️ Email</h3>
            <p>General: info@corporatesolutions.com<br/>
            Support: support@corporatesolutions.com<br/>
            Sales: sales@corporatesolutions.com</p>
          </div>

          <div className="info-block">
            <h3>🕐 Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br/>
            Saturday: 10:00 AM - 2:00 PM EST<br/>
            Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send Us a Message</h2>
          {submitted && (
            <div className="success-message">
              Thank you! We'll get back to you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
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
              <label htmlFor="email">Email Address *</label>
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
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

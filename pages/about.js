import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - Corporate Solutions Inc.</title>
      </Head>

      <section className="page-header">
        <h1>About Our Company</h1>
        <p>Building excellence since 2009</p>
      </section>

      <section className="content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2009, Corporate Solutions Inc. has grown from a small startup to a global leader in business solutions. Our journey is marked by innovation, dedication, and an unwavering commitment to client success.</p>
          <p>We believe in creating lasting partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that drive measurable results.</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To empower businesses worldwide with innovative solutions that transform challenges into opportunities, enabling sustainable growth and competitive advantage in an ever-evolving marketplace.</p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Integrity:</strong> We conduct business with honesty and transparency</li>
            <li><strong>Excellence:</strong> We strive for the highest quality in everything we do</li>
            <li><strong>Innovation:</strong> We embrace change and drive continuous improvement</li>
            <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnership</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

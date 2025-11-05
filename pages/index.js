import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Corporate Solutions Inc.</title>
      </Head>

      <section className="hero">
        <h1>Transform Your Business with Innovation</h1>
        <p>Leading the industry with cutting-edge solutions and unparalleled expertise</p>
        <Link href="/contact" className="cta-button">Get Started</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🚀 Innovation</h3>
          <p>Pioneering solutions that drive growth and efficiency</p>
        </div>
        <div className="feature-card">
          <h3>💼 Expertise</h3>
          <p>Decades of industry experience at your service</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Global Reach</h3>
          <p>Serving clients across 50+ countries worldwide</p>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h2>500+</h2>
          <p>Clients Worldwide</p>
        </div>
        <div className="stat">
          <h2>15 Years</h2>
          <p>Industry Experience</p>
        </div>
        <div className="stat">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>
      </section>
    </Layout>
  )
}

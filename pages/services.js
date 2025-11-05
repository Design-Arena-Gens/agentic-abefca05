import Head from 'next/head'
import Layout from '../components/Layout'

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - Corporate Solutions Inc.</title>
      </Head>

      <section className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for modern businesses</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h3>Digital Transformation</h3>
          <p>Modernize your operations with cutting-edge digital solutions. We help organizations navigate the complexities of digital change, implementing technologies that streamline processes and enhance productivity.</p>
          <ul>
            <li>Process Automation</li>
            <li>Cloud Migration</li>
            <li>Data Analytics</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Strategic Consulting</h3>
          <p>Expert guidance to drive your business forward. Our consultants work closely with your team to develop actionable strategies that align with your goals and market opportunities.</p>
          <ul>
            <li>Business Strategy</li>
            <li>Market Analysis</li>
            <li>Growth Planning</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Technology Solutions</h3>
          <p>Custom software and IT infrastructure tailored to your needs. From enterprise applications to mobile solutions, we deliver technology that scales with your business.</p>
          <ul>
            <li>Custom Software Development</li>
            <li>IT Infrastructure</li>
            <li>Cybersecurity</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Business Intelligence</h3>
          <p>Turn data into actionable insights. Our BI solutions help you make informed decisions by providing real-time visibility into your operations and market trends.</p>
          <ul>
            <li>Data Visualization</li>
            <li>Predictive Analytics</li>
            <li>Performance Metrics</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Change Management</h3>
          <p>Successfully navigate organizational transformation. We provide the frameworks and support needed to implement change smoothly and minimize disruption.</p>
          <ul>
            <li>Training Programs</li>
            <li>Communication Strategy</li>
            <li>Stakeholder Engagement</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Support & Maintenance</h3>
          <p>Ongoing support to keep your systems running optimally. Our dedicated team ensures maximum uptime and quick resolution of any issues.</p>
          <ul>
            <li>24/7 Technical Support</li>
            <li>System Monitoring</li>
            <li>Regular Updates</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

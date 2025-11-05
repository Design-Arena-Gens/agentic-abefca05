import Head from 'next/head'
import Layout from '../components/Layout'

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Corporate Solutions Inc.</title>
      </Head>

      <section className="page-header">
        <h1>Our Portfolio</h1>
        <p>Success stories from our valued clients</p>
      </section>

      <section className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-category">Technology</div>
          <h3>Global Tech Corp</h3>
          <p>Implemented enterprise-wide digital transformation initiative, resulting in 40% efficiency improvement and $2M annual cost savings.</p>
          <div className="portfolio-tags">
            <span>Digital Transformation</span>
            <span>Cloud Migration</span>
            <span>Process Automation</span>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-category">Finance</div>
          <h3>Premier Bank Solutions</h3>
          <p>Developed custom banking platform serving 500K+ users with 99.9% uptime and advanced security features.</p>
          <div className="portfolio-tags">
            <span>Software Development</span>
            <span>Cybersecurity</span>
            <span>Infrastructure</span>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-category">Healthcare</div>
          <h3>MediCare Systems</h3>
          <p>Created integrated patient management system improving care coordination and reducing administrative overhead by 35%.</p>
          <div className="portfolio-tags">
            <span>Custom Software</span>
            <span>Data Analytics</span>
            <span>Integration</span>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-category">Retail</div>
          <h3>RetailPro International</h3>
          <p>Launched omnichannel e-commerce platform increasing online sales by 200% and enhancing customer experience.</p>
          <div className="portfolio-tags">
            <span>E-commerce</span>
            <span>Mobile App</span>
            <span>Analytics</span>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-category">Manufacturing</div>
          <h3>Industrial Dynamics</h3>
          <p>Implemented IoT-powered supply chain optimization reducing delivery times by 30% and improving inventory accuracy.</p>
          <div className="portfolio-tags">
            <span>IoT Solutions</span>
            <span>Supply Chain</span>
            <span>Real-time Monitoring</span>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-category">Energy</div>
          <h3>GreenEnergy Partners</h3>
          <p>Deployed smart grid management system enabling 25% energy efficiency improvement across 100+ facilities.</p>
          <div className="portfolio-tags">
            <span>Smart Systems</span>
            <span>Data Analytics</span>
            <span>Sustainability</span>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial">
          <p>"Corporate Solutions Inc. transformed our operations completely. Their expertise and dedication exceeded all expectations."</p>
          <p className="testimonial-author">- CEO, Global Tech Corp</p>
        </div>
        <div className="testimonial">
          <p>"The team's technical knowledge and strategic thinking helped us achieve results we didn't think were possible."</p>
          <p className="testimonial-author">- CTO, Premier Bank Solutions</p>
        </div>
      </section>
    </Layout>
  )
}

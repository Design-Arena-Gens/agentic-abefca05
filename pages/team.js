import Head from 'next/head'
import Layout from '../components/Layout'

export default function Team() {
  return (
    <Layout>
      <Head>
        <title>Our Team - Corporate Solutions Inc.</title>
      </Head>

      <section className="page-header">
        <h1>Meet Our Team</h1>
        <p>Experienced professionals dedicated to your success</p>
      </section>

      <section className="team-grid">
        <div className="team-member">
          <div className="member-avatar">JD</div>
          <h3>Jennifer Davis</h3>
          <p className="role">Chief Executive Officer</p>
          <p>With over 20 years of experience in technology and business strategy, Jennifer leads our company with vision and passion for innovation.</p>
        </div>

        <div className="team-member">
          <div className="member-avatar">MC</div>
          <h3>Michael Chen</h3>
          <p className="role">Chief Technology Officer</p>
          <p>Michael brings deep technical expertise and has architected solutions for Fortune 500 companies across multiple industries.</p>
        </div>

        <div className="team-member">
          <div className="member-avatar">SP</div>
          <h3>Sarah Patterson</h3>
          <p className="role">Chief Operating Officer</p>
          <p>Sarah ensures operational excellence and client satisfaction through efficient processes and strong team leadership.</p>
        </div>

        <div className="team-member">
          <div className="member-avatar">RA</div>
          <h3>Robert Anderson</h3>
          <p className="role">VP of Strategy</p>
          <p>Robert develops innovative strategies that help our clients stay ahead of market trends and achieve sustainable growth.</p>
        </div>

        <div className="team-member">
          <div className="member-avatar">EK</div>
          <h3>Emily Kim</h3>
          <p className="role">Director of Client Services</p>
          <p>Emily leads our client services team with a focus on building lasting partnerships and delivering exceptional service.</p>
        </div>

        <div className="team-member">
          <div className="member-avatar">DM</div>
          <h3>David Martinez</h3>
          <p className="role">Head of Innovation</p>
          <p>David drives our R&D initiatives, exploring emerging technologies and their applications for business transformation.</p>
        </div>
      </section>

      <section className="join-team">
        <h2>Join Our Team</h2>
        <p>We're always looking for talented individuals who share our passion for excellence. Check out our career opportunities and become part of our growing team.</p>
        <a href="/contact" className="cta-button">View Careers</a>
      </section>
    </Layout>
  )
}

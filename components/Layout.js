import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className="layout">
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">Corporate Solutions Inc.</Link>
          </div>
          <nav>
            <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link href="/services" className={router.pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
            <Link href="/team" className={router.pathname === '/team' ? 'active' : ''}>
              Team
            </Link>
            <Link href="/portfolio" className={router.pathname === '/portfolio' ? 'active' : ''}>
              Portfolio
            </Link>
            <Link href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Corporate Solutions Inc.</h3>
              <p>Transforming businesses through innovation and excellence since 2009.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>123 Business Plaza<br/>New York, NY 10004</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@corporatesolutions.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Corporate Solutions Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

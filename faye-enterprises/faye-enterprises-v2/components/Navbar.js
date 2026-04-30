import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>FE</span>
          <span className={styles.logoText}>Faye Enterprises</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <a href="#contact" className={`btn-primary ${styles.navCta} hide-mobile`}>
          Book Free Call
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
        </button>
      </div>
    </nav>
  )
}

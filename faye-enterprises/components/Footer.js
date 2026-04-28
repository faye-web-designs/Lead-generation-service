import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <div className={styles.logoMark}>FE</div>
              <span className={styles.logoText}>Faye Enterprises</span>
            </div>
            <p className={styles.tagline}>
              Done-for-you SMS lead generation for independent<br />
              life &amp; health insurance brokers.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkCol}>
              <div className={styles.colTitle}>Services</div>
              <a href="#services">What We Do</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className={styles.linkCol}>
              <div className={styles.colTitle}>Company</div>
              <a href="#contact">Contact Us</a>
              <a href="mailto:zach@fayeenterprises.com">Email Zach</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            © {new Date().getFullYear()} Faye Enterprises. All rights reserved.
          </div>
          <div className={styles.legal}>
            Results may vary. SMS campaigns are subject to TCPA compliance guidelines.
          </div>
        </div>
      </div>
    </footer>
  )
}

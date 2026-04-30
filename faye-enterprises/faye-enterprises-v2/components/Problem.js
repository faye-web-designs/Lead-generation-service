import styles from './Problem.module.css'

const PAINS = [
  { icon: '📉', text: 'Inconsistent leads make revenue unpredictable month to month' },
  { icon: '💸', text: 'Facebook & Google ads cost $30–$120+ per lead with no guarantee of results' },
  { icon: '📧', text: 'Email campaigns get 18–22% open rates — most go straight to spam' },
  { icon: '🔄', text: 'Referral-only pipelines plateau and dry up without warning' },
]

const WINS = [
  { icon: '📲', text: '95–98% SMS open rate — your message gets seen by almost everyone' },
  { icon: '🎯', text: 'Targeted contact lists built around your exact customer profile' },
  { icon: '🔥', text: 'Hot leads filtered and delivered — you only talk to ready buyers' },
  { icon: '📊', text: 'Weekly reports so you always know exactly what\'s performing' },
]

const INDUSTRIES = [
  { icon: '🏠', name: 'Real Estate' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🔨', name: 'Home Services' },
  { icon: '🚗', name: 'Automotive' },
  { icon: '💼', name: 'Insurance' },
  { icon: '☀️', name: 'Solar' },
  { icon: '🏋️', name: 'Fitness' },
  { icon: '⚖️', name: 'Legal' },
  { icon: '💰', name: 'Finance' },
  { icon: '🏗️', name: 'Construction' },
  { icon: '💆', name: 'Med Spa' },
  { icon: '📦', name: 'E-Commerce' },
]

export default function Problem() {
  return (
    <section className={`section ${styles.wrap}`} id="services">
      <div className="container">

        {/* Industry grid */}
        <div className={styles.industryBlock}>
          <div className="label">Industries We Serve</div>
          <h2 className={`section-title ${styles.industryTitle}`}>
            If your business needs leads,<br />
            <span className={styles.blue}>SMS outreach works.</span>
          </h2>
          <div className={styles.industryGrid}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className={styles.industryCard}>
                <span className={styles.industryIcon}>{ind.icon}</span>
                <span className={styles.industryName}>{ind.name}</span>
              </div>
            ))}
          </div>
          <p className={styles.industryNote}>
            Don't see your industry? <a href="#contact" className={styles.link}>Let's talk anyway</a> — SMS works for virtually any B2C or B2B business.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Problem */}
          <div className={styles.col}>
            <div className="label">The Problem</div>
            <h2 className={`section-title ${styles.h2}`}>
              Most businesses are stuck<br />
              <span className={styles.red}>chasing leads.</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Without a consistent outreach system, growth stalls and
              revenue stays unpredictable no matter how good your product or service is.
            </p>
            <ul className={styles.list}>
              {PAINS.map((p, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.itemIcon}>{p.icon}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerBadge}>vs</div>
            <div className={styles.dividerLine} />
          </div>

          {/* Solution */}
          <div className={styles.col}>
            <div className="label">The Solution</div>
            <h2 className={`section-title ${styles.h2}`}>
              We fill your pipeline.<br />
              <span className={styles.blue}>You close deals.</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Faye Enterprises runs fully managed SMS campaigns so you wake up
              to qualified conversations — without spending a dollar on ads.
            </p>
            <ul className={styles.list}>
              {WINS.map((w, i) => (
                <li key={i} className={`${styles.item} ${styles.itemWin}`}>
                  <span className={styles.itemIcon}>{w.icon}</span>
                  <span>{w.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

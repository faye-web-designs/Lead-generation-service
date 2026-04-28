import styles from './Problem.module.css'

const PAINS = [
  { icon: '📉', text: 'Inconsistent leads make revenue unpredictable month to month' },
  { icon: '💸', text: 'Facebook & Google ads cost $30–$120+ per lead with no guarantee' },
  { icon: '📧', text: 'Email campaigns get 18–22% open rates — most go unread' },
  { icon: '🔄', text: 'Referral-only pipelines plateau and dry up without warning' },
]

const WINS = [
  { icon: '📲', text: '95–98% SMS open rate — your message gets seen every time' },
  { icon: '🎯', text: 'Targeted lists of life & health insurance prospects, built for you' },
  { icon: '🔥', text: 'Hot leads filtered and delivered — you only talk to ready buyers' },
  { icon: '📊', text: 'Weekly reports so you always know exactly what\'s working' },
]

export default function Problem() {
  return (
    <section className={`section ${styles.wrap}`} id="services">
      <div className="container">
        <div className={styles.grid}>
          {/* Problem */}
          <div className={styles.col}>
            <div className="label">The Problem</div>
            <h2 className={`section-title ${styles.h2}`}>
              Most brokers are stuck<br />
              <span className={styles.red}>chasing leads.</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Independent life and health brokers work hard — but without a
              consistent lead system, growth stalls and income stays unpredictable.
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
              We fill your calendar.<br />
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

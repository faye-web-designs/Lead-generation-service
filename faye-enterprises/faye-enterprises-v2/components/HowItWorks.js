import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Book a Free 15-Min Call',
    body: 'We learn your target market, licensed states, and goals. No pressure — just a quick discovery to see if we\'re a fit.',
    detail: 'Takes 15 minutes. Completely free.',
  },
  {
    num: '02',
    title: 'We Build & Launch Your Campaign',
    body: 'We source your contact list, write every message, load the full 5-touch sequence, and launch your campaign within 48–72 hours.',
    detail: 'Zero effort on your part.',
  },
  {
    num: '03',
    title: 'Hot Leads Land in Your Inbox',
    body: 'We monitor all replies daily, filter out the noise, and deliver only hot leads — tagged and summarized — directly to you.',
    detail: 'Delivered within 24 hours of response.',
  },
  {
    num: '04',
    title: 'You Close. We Scale.',
    body: 'Focus on what you do best. Every Monday we send a performance report. When you\'re ready to grow, we increase volume.',
    detail: 'Weekly reporting. Month-to-month.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <div className="label">The Process</div>
          <h2 className="section-title">
            From zero to booked<br />appointments in 3 weeks.
          </h2>
          <p className="section-sub">
            A simple, proven 4-step system. No technical setup on your end.
            No learning curve. Just results.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{s.num}</div>
                {i < STEPS.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.body}</p>
                <div className={styles.stepDetail}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
                    <path d="M7 6v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  {s.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn-primary">
            Start Your Pilot Campaign
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

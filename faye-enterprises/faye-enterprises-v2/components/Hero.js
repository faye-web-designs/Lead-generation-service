import styles from './Hero.module.css'

const STATS = [
  { value: '95–98%', label: 'SMS Open Rate' },
  { value: '10–20',  label: 'Booked Appts / Month' },
  { value: '$0',     label: 'Ad Spend Required' },
  { value: '3 Wks',  label: 'Pilot Duration' },
]

const INDUSTRIES = [
  'Insurance Brokers', 'Real Estate Investors', 'Roofing Companies',
  'Auto Dealerships', 'Med Spas & Clinics', 'Solar Companies',
  'HVAC & Plumbers', 'Mortgage Brokers', 'Law Firms', 'Gyms & Fitness',
]

export default function Hero() {
  return (
    <section className={`${styles.hero} grid-bg`}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className="label fade-up">Done-For-You SMS Marketing</div>

          <h1 className={`${styles.title} fade-up delay-1`}>
            Your Business.<br />
            <span className={styles.accent}>More Leads.</span><br />
            Zero Ad Spend.
          </h1>

          <p className={`${styles.sub} fade-up delay-2`}>
            Faye Enterprises runs fully managed SMS outreach campaigns for
            businesses across every industry. We build your list, write every
            message, filter all replies, and deliver hot leads straight to you.
          </p>

          <div className={`${styles.pills} fade-up delay-2`}>
            {INDUSTRIES.map((ind, i) => (
              <span key={i} className={styles.pill}>{ind}</span>
            ))}
          </div>

          <div className={`${styles.ctas} fade-up delay-3`}>
            <a href="#contact" className="btn-primary">
              Book Free 15-Min Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-ghost">See How It Works</a>
          </div>

          <div className={`${styles.liveBar} fade-up delay-4`}>
            <span className={styles.dot} />
            <span>Currently accepting new clients across all industries</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className={`${styles.mockupWrap} fade-up delay-2`}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneHeader}>
                <div className={styles.phoneSender}>
                  <div className={styles.senderAvatar}>FE</div>
                  <div>
                    <div className={styles.senderName}>Faye Enterprises</div>
                    <div className={styles.senderTime}>SMS Campaign</div>
                  </div>
                </div>
              </div>
              <div className={styles.messages}>
                <div className={styles.msgOut}>
                  Hi Mike! We help businesses like yours get more customers
                  without spending a dime on ads. Interested in a free quote? 🙏
                </div>
                <div className={styles.msgIn}>
                  Actually yeah — we've been looking for better leads. What does this look like?
                </div>
                <div className={styles.msgOut}>
                  We run SMS campaigns that get 95–98% open rates.
                  15 min to show you on a call — worth it?
                </div>
                <div className={`${styles.msgIn} ${styles.hot}`}>
                  🔥 Absolutely. I'm free Thursday at 2pm!
                </div>
                <div className={styles.hotBadge}>Hot Lead Delivered ✓</div>
              </div>
              <div className={styles.statsRow}>
                {['3,000 sent', '287 replies', '22 booked'].map((s, i) => (
                  <div key={i} className={styles.phoneStat}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats ticker */}
      <div className={styles.statsBar}>
        <div className={styles.statsTrack}>
          {[...STATS, ...STATS].map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

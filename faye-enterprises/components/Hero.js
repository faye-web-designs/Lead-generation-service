import styles from './Hero.module.css'

const STATS = [
  { value: '95–98%', label: 'SMS Open Rate' },
  { value: '10–20', label: 'Booked Appts / Month' },
  { value: '$0',    label: 'Ad Spend Required' },
  { value: '3 Wks', label: 'Pilot Duration' },
]

export default function Hero() {
  return (
    <section className={`${styles.hero} grid-bg`}>
      {/* Glow orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={`label fade-up`}>SMS Lead Generation for Insurance Brokers</div>

          <h1 className={`${styles.title} fade-up delay-1`}>
            Wake Up to <br />
            <span className={styles.accent}>Booked Appointments.</span><br />
            Every Morning.
          </h1>

          <p className={`${styles.sub} fade-up delay-2`}>
            Faye Enterprises runs fully managed SMS outreach campaigns for independent
            life &amp; health insurance brokers. No ad spend. No cold calling.
            Just qualified conversations — delivered to your inbox.
          </p>

          <div className={`${styles.ctas} fade-up delay-3`}>
            <a href="#contact" className="btn-primary">
              Book Free 15-Min Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-ghost">See How It Works</a>
          </div>

          {/* Live indicator */}
          <div className={`${styles.liveBar} fade-up delay-4`}>
            <span className={styles.dot} />
            <span>Currently accepting new broker clients</span>
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
                  Hi Sarah! My name is Alex with Summit Life Agency.
                  Are you currently covered, or would you like a free quote? 🙏
                </div>
                <div className={styles.msgIn}>
                  Actually yes, I've been meaning to look into this. What plans do you offer?
                </div>
                <div className={styles.msgOut}>
                  We have several options that could save you 20–30% vs. what you're paying now.
                  Can I grab 10 minutes this week?
                </div>
                <div className={`${styles.msgIn} ${styles.hot}`}>
                  🔥 YES — I'm free Thursday afternoon!
                </div>
                <div className={styles.hotBadge}>Hot Lead Delivered ✓</div>
              </div>

              <div className={styles.statsRow}>
                {['3,000 sent', '312 replies', '18 booked'].map((s, i) => (
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

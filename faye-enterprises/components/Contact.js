import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', agency: '', email: '', phone: '', plan: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    // Replace with your form endpoint (Formspree, EmailJS, etc.)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <section className={`section ${styles.wrap}`} id="contact">
      <div className="container">
        <div className={styles.grid}>

          {/* Left — copy */}
          <div className={styles.left}>
            <div className="label">Get Started</div>
            <h2 className={`section-title ${styles.h2}`}>
              Ready to wake up<br />
              to <span className={styles.accent}>booked appointments?</span>
            </h2>
            <p className={styles.sub}>
              Book a free 15-minute discovery call. No pitch, no pressure —
              just a quick look at whether SMS outreach is the right fit for your agency.
            </p>

            <div className={styles.bullets}>
              {[
                'We\'ll review your target market and states',
                'Walk through a sample campaign concept',
                'Answer every question you have',
                'No commitment required',
              ].map((b, i) => (
                <div key={i} className={styles.bullet}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8.5" stroke="var(--blue)"/>
                    <path d="M6 9l2 2 4-4" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </div>
              ))}
            </div>

            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>zach@fayeenterprises.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🏢</span>
                <span>Faye Enterprises — SMS Marketing Services</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.right}>
            {sent ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>✅</div>
                <h3 className={styles.successTitle}>You&apos;re on the list!</h3>
                <p className={styles.successText}>
                  Zach will be in touch within 24 hours to schedule your free discovery call.
                  Check your inbox (and spam, just in case).
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={submit}>
                <h3 className={styles.formTitle}>Book Your Free Call</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Your Name *</label>
                    <input
                      name="name" value={form.name} onChange={handle}
                      className={styles.input} placeholder="First Last" required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Agency Name *</label>
                    <input
                      name="agency" value={form.agency} onChange={handle}
                      className={styles.input} placeholder="Your Agency" required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handle}
                      className={styles.input} placeholder="you@agency.com" required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                      name="phone" value={form.phone} onChange={handle}
                      className={styles.input} placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Interested In</label>
                  <select name="plan" value={form.plan} onChange={handle} className={styles.select}>
                    <option value="">Select a plan...</option>
                    <option value="pilot">$400 Pilot (3-Week Trial)</option>
                    <option value="growth">Growth Plan ($1,500/mo)</option>
                    <option value="pro">Pro Plan ($2,000/mo)</option>
                    <option value="unsure">Not sure yet — let's talk</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Anything else we should know?</label>
                  <textarea
                    name="message" value={form.message} onChange={handle}
                    className={styles.textarea} rows={3}
                    placeholder="Target states, current lead sources, monthly policy goal..."
                  />
                </div>

                <button type="submit" className={`btn-primary ${styles.submit}`} disabled={loading}>
                  {loading ? 'Sending...' : 'Book My Free Call'}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>

                <p className={styles.fine}>
                  No spam. No commitment. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

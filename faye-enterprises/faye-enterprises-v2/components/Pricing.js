import { useState } from 'react';
import styles from './Pricing.module.css';

const PLANS = [
  {
    id: 'pilot',
    name: 'Pilot',
    price: '$400',
    period: 'one time',
    sub: '3-week campaign — no commitment required',
    highlight: false,
    badge: null,
    features: [
      '3,000 targeted contacts',
      '5-touch SMS sequence',
      'Reply filtering & hot lead delivery',
      '10–20 booked conversations',
      'Performance summary report',
      'Transitions to retainer after pilot',
    ],
    cta: 'Start Pilot',
    ctaStyle: 'ghost',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$1,500',
    period: '/ month',
    sub: 'Most popular plan for growing businesses',
    highlight: true,
    badge: '⭐ Best Value',
    features: [
      '5,000 targeted contacts / mo',
      '2 campaigns per month',
      'Full 5-touch follow-up sequence',
      'Reply filtering & hot lead delivery',
      'Weekly performance report',
      'Dedicated targeting strategy',
      'Month-to-month — cancel anytime',
    ],
    cta: 'Get Started',
    ctaStyle: 'primary',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$2,000',
    period: '/ month',
    sub: 'For high-volume businesses ready to scale',
    highlight: false,
    badge: null,
    features: [
      '10,000 targeted contacts / mo',
      'Unlimited campaigns',
      'Custom SMS scripts per audience',
      'Same-day lead delivery',
      'Daily monitoring & reporting',
      'Monthly 1-on-1 strategy call',
      'Priority support',
    ],
    cta: 'Get Started',
    ctaStyle: 'ghost',
  },
];

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState(null);

  async function handleCheckout(planId) {
    setLoadingPlan(planId);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again.');
        setLoadingPlan(null);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      setLoadingPlan(null);
    }
  }

  return (
    <section className={`section ${styles.wrap}`} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <div className="label">Pricing</div>
          <h2 className="section-title">
            Simple pricing.<br />Serious results.
          </h2>
          <p className="section-sub">
            No setup fees. No long-term contracts. Start with a risk-free
            3-week pilot and scale when you see results.
          </p>
        </div>

        <div className={styles.cards}>
          {PLANS.map((p, i) => (
            <div key={i} className={`${styles.card} ${p.highlight ? styles.featured : ''}`}>
              {p.badge && <div className={styles.badge}>{p.badge}</div>}
              <div className={styles.cardHead}>
                <div className={styles.planName}>{p.name}</div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{p.price}</span>
                  <span className={styles.period}>{p.period}</span>
                </div>
                <div className={styles.planSub}>{p.sub}</div>
              </div>
              <ul className={styles.features}>
                {p.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke={p.highlight ? '#2E86DE' : 'rgba(46,134,222,0.4)'}/>
                      <path d="M5 8l2 2 4-4" stroke={p.highlight ? '#2E86DE' : 'rgba(46,134,222,0.6)'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(p.id)}
                disabled={loadingPlan === p.id}
                className={p.ctaStyle === 'primary' ? `btn-primary ${styles.cardCta}` : `btn-ghost ${styles.cardCta}`}
                style={{ cursor: loadingPlan === p.id ? 'wait' : 'pointer', border: 'none' }}
              >
                {loadingPlan === p.id ? 'Redirecting...' : p.cta}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.roi}>
          <div className={styles.roiIcon}>💰</div>
          <div>
            <div className={styles.roiTitle}>The ROI Math Is Simple</div>
            <div className={styles.roiText}>
              SMS gets 95–98% open rates vs. 18–22% for email. Even at a modest response rate,
              the leads generated far outpace the cost of the service. Most clients see positive
              ROI within their first 30 days.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

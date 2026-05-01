import Link from 'next/link';

const PLAN_NAMES = {
    pilot: 'Pilot Campaign',
    growth: 'Growth Plan',
    pro: 'Pro Plan',
};

export default function Success({ plan }) {
    const planName = PLAN_NAMES[plan] || 'your plan';

  return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0e1a',
          color: '#fff',
          textAlign: 'center',
          padding: '2rem',
          fontFamily: 'Inter, system-ui, sans-serif',
  }}>
      <div style={{
          background: 'rgba(46,134,222,0.1)',
          border: '1px solid rgba(46,134,222,0.3)',
          borderRadius: '1.5rem',
          padding: '3rem 4rem',
          maxWidth: '560px',
          width: '100%',
}}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#2E86DE' }}>
          Payment Successful!
            </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
          You are now enrolled in the <strong style={{ color: '#fff' }}>{planName}</strong>.
            </p>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
          We will be in touch within 1 business day to get your campaign set up.
                      Check your email for a confirmation receipt.
            </p>
        <Link href="/" style={{
                      display: 'inline-block',
                      background: '#2E86DE',
                      color: '#fff',
                      padding: '0.875rem 2rem',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      transition: 'opacity 0.2s',
          }}>
          Back to Home
            </Link>
            </div>
            </div>
  );
}

export async function getServerSideProps(context) {
    const { plan } = context.query;
    return { props: { plan: plan || null } };
}

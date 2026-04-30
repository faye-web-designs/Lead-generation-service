import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICES = {
  pilot: {
    name: 'Pilot — 3-Week SMS Campaign',
    amount: 40000,
    mode: 'payment',
  },
  growth: {
    name: 'Growth Plan — Monthly SMS Marketing',
    amount: 150000,
    mode: 'subscription',
  },
  pro: {
    name: 'Pro Plan — Monthly SMS Marketing',
    amount: 200000,
    mode: 'subscription',
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { plan } = req.body;
  const priceConfig = PRICES[plan];

  if (!priceConfig) {
    return res.status(400).json({ error: 'Invalid plan' });
  }

  try {
    const baseUrl = req.headers.origin || 'https://' + req.headers.host;

    const sessionParams = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: priceConfig.name,
            },
            unit_amount: priceConfig.amount,
            ...(priceConfig.mode === 'subscription' && { recurring: { interval: 'month' } }),
          },
          quantity: 1,
        },
      ],
      mode: priceConfig.mode,
      success_url: baseUrl + '/success?plan=' + plan,
      cancel_url: baseUrl + '/#pricing',
    };

    const session = await stripe.checkout.sessions.create(sessionParams);
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}

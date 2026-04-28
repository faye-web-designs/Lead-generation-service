import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Faye Enterprises | SMS Lead Generation for Insurance Brokers</title>
        <meta name="description" content="Faye Enterprises delivers done-for-you SMS outreach campaigns for independent life & health insurance brokers. 10–20 booked appointments per month. No ad spend." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Faye Enterprises | SMS Lead Generation for Insurance Brokers" />
        <meta property="og:description" content="Wake up to booked appointments every morning. We run fully managed SMS campaigns so you close more policies." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

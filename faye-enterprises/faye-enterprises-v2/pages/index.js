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
        <title>Faye Enterprises | Done-For-You SMS Marketing for Any Business</title>
        <meta name="description" content="Faye Enterprises runs fully managed SMS outreach campaigns for businesses across every industry. 10–20 booked conversations per month. No ad spend. No cold calling." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Faye Enterprises | SMS Lead Generation for Any Business" />
        <meta property="og:description" content="We fill your pipeline with hot leads using SMS outreach — 95–98% open rates, zero ad spend, done completely for you." />
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

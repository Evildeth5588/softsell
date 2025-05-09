import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Logo from './components/Logo'
import ScrollToTop from './components/ScrollToTop'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
            <a href="#why-choose-us" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a>
          </nav>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Sell My License
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo />
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
              <a href="#why-choose-us" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Why Choose Us</a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
              © 2024 SoftSell. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

export default App

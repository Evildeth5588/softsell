import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-blue-600 to-purple-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Unused Software into Cash
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Sell your unused software licenses and get paid instantly. 
            Fast, secure, and hassle-free.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Sell My Licenses
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero 
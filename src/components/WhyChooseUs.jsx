import React from 'react'

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Instant Payments",
      description: "Get paid within minutes after verification. No waiting periods."
    },
    {
      icon: "🔒",
      title: "Secure Process",
      description: "Bank-level security for all transactions. Your data is always protected."
    },
    {
      icon: "💎",
      title: "Best Market Rates",
      description: "Get the highest value for your licenses. We offer competitive rates."
    },
    {
      icon: "🎯",
      title: "Easy Process",
      description: "Simple 3-step process. No technical knowledge required."
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make selling your software licenses simple, secure, and profitable. 
            Here's why thousands of businesses trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs 
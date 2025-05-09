import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      icon: "📤",
      title: "Upload License",
      description: "Simply upload your software license details or enter the license key"
    },
    {
      icon: "💰",
      title: "Get Valuation",
      description: "Receive an instant quote based on current market rates"
    },
    {
      icon: "💳",
      title: "Get Paid",
      description: "Get paid instantly after quick verification process"
    }
  ]

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selling your software licenses is simple and straightforward. 
            Follow these three easy steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="text-center">
                <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

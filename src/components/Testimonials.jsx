import React from 'react'

const Testimonials = () => {
  const reviews = [
    {
      quote: "SoftSell made selling our unused Microsoft licenses incredibly easy. The process was smooth and we received payment within hours!",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      avatar: "👩‍💼"
    },
    {
      quote: "As a small business owner, I was skeptical at first, but SoftSell's platform is incredibly user-friendly and secure. Highly recommended!",
      name: "Michael Chen",
      role: "CEO",
      company: "Innovate Labs",
      avatar: "👨‍💼"
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{review.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials 
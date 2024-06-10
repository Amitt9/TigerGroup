import React from 'react'

const AboutUs = () => {
  return (
    <div className="">
        <div className="container mx-auto p-4 flex flex-wrap items-center justify-between bg-white shadow-lg rounded-lg">
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start">
        <div className="mb-4">
          <div className="bg-green-500 text-white text-center p-4 rounded-lg shadow-lg mb-4">
            <button className="flex items-center justify-center">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
              </svg>
              PLAY VIDEO
            </button>
          </div>
          <img className="rounded-lg shadow-lg mb-4" src="https://via.placeholder.com/400x300" alt="Main" />
          <div className="bg-green-500 text-white text-center p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <svg className="h-12 w-12 text-white mr-2" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="16"
                />
                <circle
                  className="text-green-500"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="80, 100"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="16"
                />
              </svg>
              <span className="text-lg font-semibold">80%</span>
            </div>
            <p className="text-sm">Just Get 80% fund</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Joining Hands for Justice and Equality</h2>
        <p className="mb-4">
          NGOs, or Non-Governmental Organizations, are private, nonprofit entities that operate independently of
          government involvement.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">ध्येय आणि उद्दिष्ट:</h3>
          <p>
          टायगर ग्रुप ही संस्था महाराष्ट्रातील अपंग, अनाथ आणि निराधार लोकांसाठी काम करते. आमचे ध्येय आहे समाजातील दुर्बल घटकांना मदत करून त्यांना आत्मनिर्भर बनवणे. विविध सेवांच्या माध्यमातून आम्ही त्यांच्या जीवनात सकारात्मक बदल घडवतो. पर्यावरण संवर्धनासाठी आम्ही पाणी आडवा पाणी जिरवा, झाडे लावा झाडे जगवा आणि स्वच्छ भारत अभियान यांसारख्या मोहिमा राबवतो.
          </p>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
          Donate Now
        </button>
      </div>
    </div>
      
    </div>
  )
}

export default AboutUs

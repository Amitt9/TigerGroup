import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
    <footer className="bg-green-700 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-white mr-2">टायगर ग्रुप</div>
            </div>
            <p>आमच्या कार्यासाठी तुमची मदत आवश्‍यक आहे. कृपया आम्हाला सहकार्य करा आणि समाजाच्या उन्नतीसाठी हातभार लावा.</p>
            <div className="flex mt-4 space-x-2">
              <a href="#" className="text-gray-200 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">द्रुत दुवे</h3>
            <ul className="list-none space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white">मुख्य पृष्ठ</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">आमच्याबद्दल</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">सेवा</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">ब्लॉग</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">संपर्क</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">आमचा पत्ता</h3>
            <p>212 मुख्य रस्ता, NY, 121A23</p>
            <p className="mt-2 flex items-center">
              <span className="mr-2">📞</span> +91-94037 63702
            </p>
            <p className="mt-2 flex items-center">
              <span className="mr-2">📧</span> business@domain.com
            </p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer

import React from 'react'

const teamMembers = [
    { id: 1, name: 'Jenny Lewis', title: 'CEO & Founder', imgSrc: 'path_to_image1', social: { facebook: '#', instagram: '#', twitter: '#' } },
    { id: 2, name: 'Jenny Lewis', title: 'CEO & Founder', imgSrc: 'path_to_image2', social: { facebook: '#', instagram: '#', twitter: '#' } },
    { id: 3, name: 'Jenny Lewis', title: 'CEO & Founder', imgSrc: 'path_to_image3', social: { facebook: '#', instagram: '#', twitter: '#' } },
    { id: 4, name: 'Jenny Lewis', title: 'CEO & Founder', imgSrc: 'path_to_image4', social: { facebook: '#', instagram: '#', twitter: '#' } }
  ];

const Team = () => {
  return (
    <div>
      <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-bold text-indigo-600 tracking-wide uppercase">आमची टीम</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img className="w-24 h-24 rounded-full mx-auto border" src={member.imgSrc} alt={member.name} />
                <h3 className="mt-6 text-gray-900 text-lg font-medium">{member.name}</h3>
                <p className="mt-2 text-gray-600">{member.title}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href={member.social.facebook} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.437 9.876v-6.987H7.898v-2.89h2.539V9.847c0-2.507 1.493-3.89 3.778-3.89 1.096 0 2.238.196 2.238.196v2.47h-1.261c-1.243 0-1.631.771-1.631 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
                    </svg>
                  </a>
                  <a href={member.social.instagram} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.314 3.608 1.288.976.976 1.227 2.243 1.288 3.609.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.314 2.633-1.288 3.608-.976.976-2.243 1.227-3.609 1.288-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.314-3.608-1.288-.976-.976-1.227-2.243-1.288-3.609-.059-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.314-2.633 1.288-3.608.976-.976 2.243-1.227 3.609-1.288 1.266-.059 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.776.131 4.659.383 3.718 1.324 2.777 2.265 2.525 3.382 2.466 4.659 2.407 5.939 2.393 6.347 2.393 9.605s.014 3.666.073 4.947c.059 1.276.311 2.393 1.252 3.334.941.941 2.058 1.193 3.334 1.252 1.28.059 1.688.073 4.947.073s3.666-.014 4.947-.073c1.276-.059 2.393-.311 3.334-1.252.941-.941 1.193-2.058 1.252-3.334.059-1.28.073-1.688.073-4.947s-.014-3.666-.073-4.947c-.059-1.276-.311-2.393-1.252-3.334-.941-.941-2.058-1.193-3.334-1.252-1.28-.059-1.688-.073-4.947-.073s-3.666.014-4.947.073C8.333.014 8.741 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.163a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.882 1.44 1.44 0 0 0 0-2.882z" />
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.954 4.569c-.885.385-1.83.644-2.825.758 1.014-.609 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.953-2.173-1.55-3.591-1.55-2.717 0-4.917 2.207-4.917 4.917 0 .386.045.762.127 1.124-4.083-.205-7.704-2.158-10.126-5.126-.423.722-.666 1.561-.666 2.456 0 1.692.861 3.184 2.169 4.063-.802-.026-1.555-.246-2.212-.616v.061c0 2.363 1.675 4.337 3.894 4.782-.407.111-.838.171-1.282.171-.314 0-.615-.03-.912-.086.631 1.956 2.445 3.379 4.6 3.419-1.68 1.316-3.809 2.103-6.102 2.103-.396 0-.787-.023-1.174-.069 2.179 1.397 4.768 2.21 7.548 2.21 9.051 0 14.003-7.496 14.003-13.986 0-.21 0-.423-.016-.635.961-.694 1.8-1.56 2.462-2.548l-.047-.02z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team

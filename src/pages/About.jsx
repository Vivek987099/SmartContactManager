import React from 'react'

function About() {
  return (
     <div className='w-full h-screen  flex justify-center items-center'>
      <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-600">About Smart Contact</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Smart Contact is your personal contact management app where you can securely store and manage all your contacts in one place.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2 text-green-600">🔒 Secure Contact Storage</h2>
          <p className="text-gray-600">All your contacts are safely stored and accessible only by you using secure authentication.</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">📷 Profile Picture Support</h2>
          <p className="text-gray-600">Upload and manage profile pictures for each contact to make your list more personalized and organized.</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">🛠️ Full CRUD Functionality</h2>
          <p className="text-gray-600">Easily Create, Read, Update, and Delete contacts with a simple and intuitive user interface.</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2 text-red-600">💡 Smart UI/UX</h2>
          <p className="text-gray-600">Experience a clean and modern design with responsive layout and smooth user experience.</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">Built with ❤️ using React, Spring Boot, and Tailwind CSS.</p>
      </div>
    </div>
     </div>
  )
}

export default About

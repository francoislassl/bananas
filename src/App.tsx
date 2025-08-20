import React, { useState } from 'react';

const LandingPage = () => {
  // State to manage form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!fullName || !email) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      // Sending data to the specified webhook
      const response = await fetch('https://n8n.techtalentflow.com/webhook-test/ca3853e0-b6c4-49a8-b518-2c9a614d5699', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert(`Thank you, ${fullName}!`);
    } catch (error) {
      alert('There was an error submitting the form. Please try again later.');
    }
    // Reset form
    setFullName('');
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-yellow-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-800">Welcome to the World of Bananas!</h1>
        <p className="mt-4 text-xl text-gray-700">Discover the benefits and joys of bananas.</p>
      </header>
      <main className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Join our Banana Lovers Community!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            required
            aria-label="Full Name"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            required
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white font-bold py-2 rounded hover:bg-yellow-700 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </main>
      <footer className="mt-8 text-center">
        <p className="text-gray-600">© 2023 Banana Lovers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
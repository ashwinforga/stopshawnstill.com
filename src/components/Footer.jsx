import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { email, zip });
    // You would typically send this data to a server or API
  };

  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='container mx-auto px-4'>
{/*         <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <h3 className='text-3xl font-bold mb-6 text-center'>
            Sign up to receive updates
          </h3>
          <div className='mb-4'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
              className='w-full p-3 text-gray-800 border rounded'
            />
          </div>
          <div className='mb-6'>
            <input
              type='text'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder='ZIP Code'
              required
              className='w-full p-3 text-gray-800 border rounded'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-red-700 text-white p-3 rounded hover:bg-red-600 transition duration-300'>
            Sign Up
          </button>
        </form> */}
        <p className='mt-12 text-center text-sm'>
          PAID FOR BY ASHWIN FOR GEORGIA, INC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

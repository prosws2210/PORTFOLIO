import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="mx-auto px-4 py-4 bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <p>Facebook | Twitter | Instagram</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <p>About | Careers | Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between bg-black px-96 pt-2'>
        <p className="mb-2">© {new Date().getFullYear()} Your Website. All rights reserved.</p>
        <p>Designed with <span role="img" aria-label="heart">❤️</span> by Shakti Swaroop Sahu</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';

const Footer = () => {
    return (
    <footer className="bg-white text-gray-800 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-black flex items-center gap-2">
            🍔 Local Food Lovers
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Discover local foods, share honest reviews, and explore
            amazing restaurants near you. A community for true food lovers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/reviews" className="hover:text-primary">All Reviews</a></li>
            <li><a href="/addReviews" className="hover:text-primary">Add Review</a></li>
            <li><a href="/myReviews" className="hover:text-primary">My Reviews</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-black mb-3">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <a className="hover:text-primary">🌐</a>
            <a className="hover:text-primary">📘</a>
            <a className="hover:text-primary">📸</a>
            <a className="hover:text-primary">❌</a> {/* New X logo */}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Local Food Lovers Network
          </p>
        </div>

      </div>
    </footer>
  );
};


export default Footer;
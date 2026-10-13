import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex flex-col mb-4">
                            <span className="text-2xl font-black text-white tracking-wider">LANE STAR</span>
                            <span className="text-sm font-bold text-primary-500 tracking-widest uppercase">Dispatch</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Your trusted partner in truck dispatching. We find the best-paying loads and handle all paperwork for owner-operators.
                        </p>
                        <div className="inline-block py-1 px-3 rounded text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                            FMCSA Registered
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-3 font-medium">
                            <li><a href="/" className="hover:text-primary-500 transition-colors">Home</a></li>
                            <li><a href="#/services" className="hover:text-primary-500 transition-colors">Services</a></li>
                            <li><a href="/#about" className="hover:text-primary-500 transition-colors">About Us</a></li>
                            <li><a href="#/contact" className="hover:text-primary-500 transition-colors">Get a Quote</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                                <span>San Francisco, California</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-primary-500 text-xl flex-shrink-0" />
                                <a href="tel:+19433009678" className="hover:text-white transition-colors">+1 (943) 300-9678</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="text-primary-500 text-xl flex-shrink-0" />
                                <span>info@lanestardispatch.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Lane Star Dispatch. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
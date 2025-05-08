import React from 'react';
import './Home.css';

const Navbar = () => (
    <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-blue-900">InventoryPro</span>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="/" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
                        <a href="/additem" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Add Item</a>
                        <a href="/displayitem" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">View Inventory</a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Contact</a>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Login</button>
                </div>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <div className="hero-bg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    Streamline Your Inventory Management
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Professional, efficient, and user-friendly inventory management system for businesses of all sizes.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a href="/additem" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                            Get Started
                        </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="/displayitem" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                            View Inventory
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Dashboard = () => (
    <div className="home-container">
        <h1>Inventory Management System</h1>
        <p>Welcome to the Inventory Dashboard. Use the buttons below to manage your inventory.</p>
        <button className="add-item-btn" onClick={() => (window.location.href = '/additem')}>
            ➕ Add New Item
        </button>
        <button className="add-item-btn" onClick={() => (window.location.href = '/displayitem')}>
            📋 View Inventory
        </button>
    </div>
);

const Features = () => (
    <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Everything you need to manage your inventory efficiently and effectively.
                </p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="mt-5 text-lg font-medium text-gray-900">Real-time Tracking</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Monitor your inventory levels in real-time with accurate updates.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="mt-5 text-lg font-medium text-gray-900">Analytics Dashboard</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Gain insights with comprehensive reports and analytics.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="mt-5 text-lg font-medium text-gray-900">Team Collaboration</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Enable seamless collaboration across your team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">InventoryPro</h3>
                    <p className="mt-4 text-base text-gray-300">
                        The ultimate solution for professional inventory management.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Links</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="/" className="text-base text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="/additem" className="text-base text-gray-300 hover:text-white">Add Item</a></li>
                        <li><a href="/displayitem" className="text-base text-gray-300 hover:text-white">View Inventory</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                    <ul className="mt-4 space-y-4">
                        <li className="text-base text-gray-300">support@inventorypro.com</li>
                        <li className="text-base text-gray-300">+1 (800) 123-4567</li>
                        <li className="text-base text-gray-300">123 Business Ave, Suite 100</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8">
                <p className="text-base text-gray-400 xl:text-center">
                    © 2025 InventoryPro. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

const Home = () => (
    <div>
        <Navbar />
        <Hero />
        <Dashboard />
        <Features />
        <Footer />
    </div>
);

export default Home;
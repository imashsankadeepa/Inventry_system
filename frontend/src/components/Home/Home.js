import React from 'react';
import './Home.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="container">
            <div className="nav-content">
                <div className="logo">
                    <span className="logo-text">InventoryPro</span>
                </div>
                <div className="nav-links">
                    <a href="/" className="nav-link active">Home</a>
                    <a href="/additem" className="nav-link">Add Item</a>
                    <a href="/displayitem" className="nav-link">View Inventory</a>
                    <a href="#" className="nav-link">Contact</a>
                </div>
                <div className="nav-actions">
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <div className="hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Streamline Your Inventory Management
                </h1>
                <p className="hero-subtitle">
                    Professional, efficient, and user-friendly inventory management system for businesses of all sizes.
                </p>
                <div className="hero-buttons">
                    <a href="/additem" className="hero-btn primary">
                        Get Started
                    </a>
                    <a href="/displayitem" className="hero-btn secondary">
                        View Inventory
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Dashboard = () => (
    <div className="dashboard">
        <h1 className="dashboard-title">Inventory Management System</h1>
        <p className="dashboard-text">Welcome to the Inventory Dashboard. Use the buttons below to manage your inventory.</p>
        <div className="dashboard-buttons">
            <button className="dashboard-btn" onClick={() => (window.location.href = '/additem')}>
                ➕ Add New Item
            </button>
            <button className="dashboard-btn" onClick={() => (window.location.href = '/displayitem')}>
                📋 View Inventory
            </button>
        </div>
    </div>
);

const Features = () => (
    <div className="features">
        <div className="container">
            <div className="features-header">
                <h2 className="features-title">Key Features</h2>
                <p className="features-subtitle">
                    Everything you need to manage your inventory efficiently and effectively.
                </p>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Real-time Tracking</h3>
                    <p className="feature-text">
                        Monitor your inventory levels in real-time with accurate updates.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Analytics Dashboard</h3>
                    <p className="feature-text">
                        Gain insights with comprehensive reports and analytics.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Team Collaboration</h3>
                    <p className="feature-text">
                        Enable seamless collaboration across your team.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-section">
                    <h3 className="footer-title">InventoryPro</h3>
                    <p className="footer-text">
                        The ultimate solution for professional inventory management.
                    </p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Links</h3>
                    <ul className="footer-links">
                        <li><a href="/" className="footer-link">Home</a></li>
                        <li><a href="/additem" className="footer-link">Add Item</a></li>
                        <li><a href="/displayitem" className="footer-link">View Inventory</a></li>
                        <li><a href="#" className="footer-link">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-contact">
                        <li className="footer-contact-item">support@inventorypro.com</li>
                        <li className="footer-contact-item">+1 (800) 123-4567</li>
                        <li className="footer-contact-item">123 Business Ave, Suite 100</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © 2025 InventoryPro. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

const Home = () => (
    <div className="home">
        <Navbar />
        <Hero />
        <Dashboard />
        <Features />
        <Footer />
    </div>
);

export default Home;

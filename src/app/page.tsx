'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStatus('loading');
      setTimeout(() => {
        setEmail('');
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="content-wrapper">
        <header>
          <Image src="/logo.svg" alt="Century Logo" width={200} height={200} priority className="logo-img" />
        </header>

        <main>
          <div style={{ color: 'var(--gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>Coming Soon</div>
          <h1 className="main-title">
            Crafted for Memories
          </h1>
          
          <div className="divider">
            <div className="divider-icon"></div>
          </div>
          
          <p className="description">
            We are preparing something extraordinary. Join our exclusive waitlist to be the first to know.
          </p>

          <div className="waitlist-container">
            <form className="input-group" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                className="submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Wait...' : 'Notify Me'}
              </button>
            </form>
            <p className={`success-message ${status === 'success' ? 'show' : ''}`}>
              Thank you for joining our waitlist!
            </p>
          </div>
        </main>
        
        <footer>
          <p>&copy; 2026 Century Convention Center</p>
        </footer>
      </div>
    </div>
  );
}

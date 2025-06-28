import React, { useState, useEffect } from 'react';
import './style.css';
import { Menu, Bot, BarChart3, Layers, MessageCircle, Bookmark, X, MessageSquare } from 'lucide-react';



const Hero = () => {
  const [animatedNodes, setAnimatedNodes] = useState([]);

  useEffect(() => {
    const nodes = [
      { id: 1, x: 15, y: 25, delay: 0 },
      { id: 2, x: 85, y: 35, delay: 1 },
      { id: 3, x: 25, y: 65, delay: 2 },
      { id: 4, x: 75, y: 75, delay: 0.5 },
      { id: 5, x: 45, y: 45, delay: 1.5 },
    ];
    setAnimatedNodes(nodes);
  }, []);

  return (
    <section className="hero">
      {/* Background Layer */}
      <div className="hero-background">
        <div className="grid-lines"></div>
        
        <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="20%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <line x1="10" y1="20" x2="90" y2="80" stroke="url(#lineGlow)" strokeWidth="0.3" filter="url(#glow)" className="animate-line-1" />
          <line x1="0" y1="40" x2="70" y2="90" stroke="url(#lineGlow)" strokeWidth="0.2" filter="url(#glow)" className="animate-line-2" />
          <line x1="30" y1="10" x2="100" y2="60" stroke="url(#lineGlow)" strokeWidth="0.25" filter="url(#glow)" className="animate-line-3" />
          <line x1="20" y1="70" x2="80" y2="30" stroke="url(#lineGlow)" strokeWidth="0.2" filter="url(#glow)" className="animate-line-4" />
        </svg>

        {/* Animated Nodes */}
        {animatedNodes.map(node => (
          <div
            key={node.id}
            className="glow-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.delay}s`
            }}
          >
            <div className="node-inner"></div>
            <div className="node-glow"></div>
          </div>
        ))}
        
        <div className="geometric-overlay">
          <div className="hex-pattern"></div>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Update Notification */}
        <div className="update-notification">
          <span>New update roll-out 🎉</span>
        </div>

        {/* Main Heading */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Trade seamlessly on Sui with</span>
            <br />low fees + high speeds.
          </h1>
          <p className="hero-description">
            Unlock Features Like DCA, Multi-Wallet Support & Live Position Tracking
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <Bot className="btn-icon" />
             Launch Bot
        </button>
          <button className="btn btn-secondary">
            <BarChart3 className="btn-icon" />
             Leaderboard
        </button>
          <button className="btn btn-secondary">
            <Layers className="btn-icon" />
             Litepaper
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
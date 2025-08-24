import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Brain,
  GraduationCap,
  Star,
  Award,
  Target
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain size={48} />,
      title: 'Smart Assessment',
      description: 'Take our comprehensive career guidance assessment to discover your strengths, interests, and potential career paths.',
      color: '#667eea',
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <BookOpen size={48} />,
      title: 'Career Path Explorer',
      description: 'Explore hundreds of career paths with detailed information about required skills, courses, and certifications.',
      color: '#8b5cf6',
      bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Users size={48} />,
      title: 'Skill Development',
      description: 'Get personalized recommendations for courses, certifications, and skills you need to develop for your chosen career.',
      color: '#06b6d4',
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Learning Resources',
      description: 'Access comprehensive learning materials, tools, and resources to accelerate your career development journey.',
      color: '#10b981',
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const stats = [
    { number: '500+', label: 'Career Paths', icon: <Target size={24} /> },
    { number: '50K+', label: 'Users Helped', icon: <Users size={24} /> },
    { number: '95%', label: 'Success Rate', icon: <Star size={24} /> },
    { number: '24/7', label: 'Support', icon: <Award size={24} /> }
  ];

  const ageGroups = [
    { range: '13-15', description: 'High School Students', bgColor: 'rgba(102, 126, 234, 0.1)' },
    { range: '16-18', description: 'College Preparation', bgColor: 'rgba(139, 92, 246, 0.1)' },
    { range: '19-22', description: 'Undergraduate Students', bgColor: 'rgba(6, 182, 212, 0.1)' },
    { range: '23-30', description: 'Early Career Professionals', bgColor: 'rgba(16, 185, 129, 0.1)' },
    { range: '30+', description: 'Career Changers', bgColor: 'rgba(245, 158, 11, 0.1)' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '2rem' 
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
              }}>
                <GraduationCap size={40} color="white" />
              </div>
            </div>
            <h1>Discover Your Perfect Career Path</h1>
            <p>
              Get personalized career guidance and skill development recommendations based on your age, education, and interests. 
              Find the career that matches your passion and potential.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/assessment" className="btn">
                Start Assessment
                <ArrowRight size={20} />
              </Link>
              <Link to="/explorer" className="btn btn-secondary">
                Explore Career Paths
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
              Trusted by Thousands
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
              Join our community of successful career seekers
            </p>
          </motion.div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ 
                  color: '#667eea', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why Choose CareerGuide?</h2>
            <p className="section-subtitle">
              Our comprehensive platform helps you make informed career decisions and develop essential skills
            </p>
          </motion.div>

          <div className="card-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                  zIndex: -1
                }} />
                <div style={{ 
                  color: feature.color, 
                  marginBottom: '2rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1rem' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="age-groups-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="section-title">Guidance for All Ages</h2>
            <p className="section-subtitle">
              Tailored career guidance and skill development for every stage of your educational and professional journey
            </p>
          </motion.div>

          <div className="age-groups-grid">
            {ageGroups.map((group, index) => (
              <motion.div
                key={index}
                className="age-group-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{ background: group.bgColor }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem' 
                }}>
                  <div className="age-badge">
                    {group.range}
                  </div>
                  <CheckCircle size={24} color="#667eea" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>
                  {group.description}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-icon">
              <GraduationCap size={64} />
            </div>
            <h2 className="cta-title">Ready to Start Your Career Development Journey?</h2>
            <p className="cta-description">
              Take the first step towards discovering your ideal career path and developing the skills you need. 
              Our assessment takes just 10 minutes and provides personalized guidance.
            </p>
            <Link to="/assessment" className="btn">
              Begin Your Assessment
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
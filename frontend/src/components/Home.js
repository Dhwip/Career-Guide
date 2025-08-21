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
  GraduationCap
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain size={48} />,
      title: 'Smart Assessment',
      description: 'Take our comprehensive career guidance assessment to discover your strengths, interests, and potential career paths.',
      color: '#667eea'
    },
    {
      icon: <BookOpen size={48} />,
      title: 'Career Path Explorer',
      description: 'Explore hundreds of career paths with detailed information about required skills, courses, and certifications.',
      color: '#764ba2'
    },
    {
      icon: <Users size={48} />,
      title: 'Skill Development',
      description: 'Get personalized recommendations for courses, certifications, and skills you need to develop for your chosen career.',
      color: '#f093fb'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Learning Resources',
      description: 'Access comprehensive learning materials, tools, and resources to accelerate your career development journey.',
      color: '#4facfe'
    }
  ];

  const stats = [
    { number: '500+', label: 'Career Paths' },
    { number: '50K+', label: 'Users Helped' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const ageGroups = [
    { range: '13-15', description: 'High School Students' },
    { range: '16-18', description: 'College Preparation' },
    { range: '19-22', description: 'Undergraduate Students' },
    { range: '23-30', description: 'Early Career Professionals' },
    { range: '30+', description: 'Career Changers' }
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
            <h1>Discover Your Perfect Career Path</h1>
            <p>
              Get personalized career guidance and skill development recommendations based on your age, education, and interests. 
              Find the career that matches your passion and potential.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/assessment" className="btn">
                Start Assessment
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/explorer" className="btn btn-secondary">
                Explore Career Paths
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ opacity: 0.9 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
              Why Choose CareerGuide?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>
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
                whileHover={{ y: -10 }}
              >
                <div style={{ 
                  color: feature.color, 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
              Guidance for All Ages
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              Tailored career guidance and skill development for every stage of your educational and professional journey
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {ageGroups.map((group, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem' 
                }}>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 'bold'
                  }}>
                    {group.range}
                  </div>
                  <CheckCircle size={24} color="#667eea" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>
                  {group.description}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <GraduationCap size={64} style={{ color: '#667eea', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
              Ready to Start Your Career Development Journey?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
              Take the first step towards discovering your ideal career path and developing the skills you need. 
              Our assessment takes just 10 minutes and provides personalized guidance.
            </p>
            <Link to="/assessment" className="btn">
              Begin Your Assessment
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
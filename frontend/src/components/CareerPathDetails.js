import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Globe, 
  Target, 
  Users, 
  BookOpen, 
  Video, 
  Download, 
  ExternalLink,
  Star,
  Clock,
  Award,
  MapPin,
  DollarSign,
  Briefcase,
  GraduationCap,
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart3
} from 'lucide-react';

const CareerPathDetails = ({ career, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const careerPaths = {
    'Software Development': {
      overview: {
        description: 'Software development is a dynamic field focused on creating applications, systems, and software solutions. It combines technical skills with problem-solving abilities to build digital solutions that meet user needs.',
        demand: 'Very High',
        growthRate: '22% (2020-2030)',
        entrySalary: '$65,000 - $85,000',
        midSalary: '$85,000 - $120,000',
        seniorSalary: '$120,000 - $180,000+',
        workLifeBalance: 'Good',
        internationalOpportunities: 'Excellent',
        remoteWork: 'Very Common'
      }
    },
    'Data Science': {
      overview: {
        description: 'Data science combines statistics, programming, and domain expertise to extract meaningful insights from data. It involves collecting, analyzing, and interpreting large datasets to drive business decisions.',
        demand: 'Very High',
        growthRate: '31% (2020-2030)',
        entrySalary: '$70,000 - $90,000',
        midSalary: '$90,000 - $130,000',
        seniorSalary: '$130,000 - $200,000+',
        workLifeBalance: 'Good',
        internationalOpportunities: 'Excellent',
        remoteWork: 'Common'
      }
    }
  };

  const careerData = careerPaths[career] || careerPaths['Software Development'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '1200px', maxHeight: '90vh', overflow: 'auto' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
              {career} Career Path
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
              Comprehensive guide to building a successful career in {career.toLowerCase()}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#6b7280'
            }}
          >
            ×
          </button>
        </div>

        {/* Overview Content */}
        <div style={{ minHeight: '400px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                Career Overview
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#374151', marginBottom: '2rem' }}>
                {careerData.overview.description}
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div className="career-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <TrendingUp size={20} color="#10b981" />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>Market Demand</h3>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#10b981', marginBottom: '0.5rem' }}>
                  {careerData.overview.demand}
                </div>
                <div style={{ color: '#6b7280' }}>
                  Growth Rate: {careerData.overview.growthRate}
                </div>
              </div>

              <div className="career-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <DollarSign size={20} color="#f59e0b" />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>Salary Range</h3>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Entry: {careerData.overview.entrySalary}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Mid: {careerData.overview.midSalary}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Senior: {careerData.overview.seniorSalary}</div>
                </div>
              </div>

              <div className="career-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Globe size={20} color="#3b82f6" />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>Work Environment</h3>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Work-Life: {careerData.overview.workLifeBalance}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>International: {careerData.overview.internationalOpportunities}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Remote: {careerData.overview.remoteWork}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerPathDetails;

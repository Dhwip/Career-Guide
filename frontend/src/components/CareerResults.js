import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  BookOpen, 
  Users, 
  ArrowRight,
  RefreshCw,
  TrendingUp
} from 'lucide-react';

// Career guidance database with skill development focus - moved outside component
const careerDatabase = {
  technology: [
    {
      title: 'Software Development',
      description: 'Build applications and systems using programming languages and frameworks.',
      skills: ['Programming', 'Problem Solving', 'Teamwork', 'Version Control'],
      courses: [
        'Complete Web Development Bootcamp',
        'Python for Data Science',
        'JavaScript Fundamentals',
        'React.js Masterclass'
      ],
      certifications: ['AWS Certified Developer', 'Microsoft Certified: Azure Developer'],
      growthAreas: ['Cloud Computing', 'DevOps', 'Machine Learning', 'Mobile Development']
    },
    {
      title: 'Data Science',
      description: 'Analyze complex data to extract insights and drive decision-making.',
      skills: ['Statistics', 'Programming', 'Data Visualization', 'Machine Learning'],
      courses: [
        'Data Science Specialization',
        'Machine Learning A-Z',
        'Python for Data Analysis',
        'SQL for Data Science'
      ],
      certifications: ['IBM Data Science Professional', 'Google Data Analytics'],
      growthAreas: ['Deep Learning', 'Big Data', 'AI Ethics', 'Business Intelligence']
    },
    {
      title: 'UI/UX Design',
      description: 'Create user-friendly and visually appealing digital interfaces.',
      skills: ['Design', 'Creativity', 'User Research', 'Prototyping'],
      courses: [
        'UI/UX Design Bootcamp',
        'Figma Masterclass',
        'User Research Methods',
        'Design Thinking'
      ],
      certifications: ['Google UX Design', 'Adobe Creative Suite'],
      growthAreas: ['Design Systems', 'Accessibility', 'Mobile Design', 'Design Leadership']
    }
  ],
  healthcare: [
    {
      title: 'Medical Practice',
      description: 'Provide patient care and medical treatment in various specialties.',
      skills: ['Medical Knowledge', 'Communication', 'Empathy', 'Critical Thinking'],
      courses: [
        'Medical Terminology',
        'Patient Communication Skills',
        'Healthcare Ethics',
        'Clinical Procedures'
      ],
      certifications: ['Basic Life Support (BLS)', 'Advanced Cardiac Life Support (ACLS)'],
      growthAreas: ['Specialization', 'Research', 'Healthcare Technology', 'Public Health']
    },
    {
      title: 'Nursing',
      description: 'Provide patient care and support in healthcare settings.',
      skills: ['Patient Care', 'Communication', 'Teamwork', 'Clinical Skills'],
      courses: [
        'Nursing Fundamentals',
        'Patient Assessment',
        'Medical-Surgical Nursing',
        'Pediatric Nursing'
      ],
      certifications: ['Registered Nurse (RN)', 'Certified Nursing Assistant (CNA)'],
      growthAreas: ['Specialty Nursing', 'Nurse Leadership', 'Research', 'Education']
    }
  ],
  business: [
    {
      title: 'Business Analysis',
      description: 'Analyze business processes and recommend improvements.',
      skills: ['Analytics', 'Communication', 'Problem Solving', 'Process Modeling'],
      courses: [
        'Business Analysis Fundamentals',
        'Process Modeling with BPMN',
        'Requirements Gathering',
        'Business Intelligence'
      ],
      certifications: ['CBAP (Certified Business Analysis Professional)', 'PMP'],
      growthAreas: ['Data Analytics', 'Digital Transformation', 'Strategy', 'Consulting']
    },
    {
      title: 'Financial Planning',
      description: 'Help clients with financial planning and investment decisions.',
      skills: ['Financial Knowledge', 'Communication', 'Sales', 'Risk Assessment'],
      courses: [
        'Financial Planning Fundamentals',
        'Investment Analysis',
        'Tax Planning',
        'Estate Planning'
      ],
      certifications: ['CFP (Certified Financial Planner)', 'Chartered Financial Analyst (CFA)'],
      growthAreas: ['Wealth Management', 'Retirement Planning', 'Tax Advisory', 'Insurance']
    }
  ],
  engineering: [
    {
      title: 'Mechanical Engineering',
      description: 'Design and build mechanical devices and systems.',
      skills: ['Technical Skills', 'Problem Solving', 'Design', 'CAD Software'],
      courses: [
        'Engineering Fundamentals',
        'CAD/CAM Design',
        'Thermodynamics',
        'Materials Science'
      ],
      certifications: ['Professional Engineer (PE)', 'SolidWorks Certification'],
      growthAreas: ['Robotics', 'Automation', 'Sustainable Design', 'Manufacturing']
    },
    {
      title: 'Civil Engineering',
      description: 'Design and oversee construction of infrastructure projects.',
      skills: ['Technical Skills', 'Project Management', 'Leadership', 'Structural Analysis'],
      courses: [
        'Structural Engineering',
        'Construction Management',
        'Environmental Engineering',
        'Transportation Engineering'
      ],
      certifications: ['Professional Engineer (PE)', 'LEED Certification'],
      growthAreas: ['Sustainable Infrastructure', 'Smart Cities', 'Disaster Management', 'Urban Planning']
    }
  ],
  education: [
    {
      title: 'Teaching',
      description: 'Educate students in various subjects and grade levels.',
      skills: ['Communication', 'Patience', 'Leadership', 'Curriculum Development'],
      courses: [
        'Teaching Methods',
        'Classroom Management',
        'Educational Psychology',
        'Curriculum Design'
      ],
      certifications: ['Teaching License', 'TESOL Certification'],
      growthAreas: ['Educational Technology', 'Special Education', 'Administration', 'Curriculum Development']
    },
    {
      title: 'Educational Technology',
      description: 'Integrate technology into educational settings.',
      skills: ['Technology Integration', 'Instructional Design', 'Digital Tools', 'Training'],
      courses: [
        'Educational Technology',
        'Instructional Design',
        'Learning Management Systems',
        'Digital Assessment'
      ],
      certifications: ['Google Certified Educator', 'Microsoft Certified Educator'],
      growthAreas: ['Online Learning', 'Gamification', 'AI in Education', 'EdTech Leadership']
    }
  ]
};

const CareerResults = () => {
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  const analyzeAnswers = useCallback((answers) => {
    const recommendations = [];
    
    // Analyze interests
    if (answers.interests && Array.isArray(answers.interests)) {
      answers.interests.forEach(interest => {
        if (careerDatabase[interest]) {
          recommendations.push(...careerDatabase[interest]);
        }
      });
    }

    // Add recommendations based on personality
    if (answers.personality === 'analytical') {
      recommendations.push(...careerDatabase.technology.filter(career => 
        career.title === 'Data Science' || career.title === 'Software Development'
      ));
    }

    if (answers.personality === 'creative') {
      recommendations.push(careerDatabase.technology.find(career => 
        career.title === 'UI/UX Design'
      ));
    }

    if (answers.personality === 'leadership') {
      recommendations.push(...careerDatabase.business.filter(career => 
        career.title === 'Business Analysis'
      ));
    }

    if (answers.personality === 'supportive') {
      recommendations.push(...careerDatabase.healthcare.filter(career => 
        career.title === 'Nursing'
      ));
    }

    // Remove duplicates and limit to top 5
    const uniqueRecommendations = recommendations.filter((career, index, self) => 
      index === self.findIndex(c => c.title === career.title)
    ).slice(0, 5);

    return uniqueRecommendations;
  }, []);

  useEffect(() => {
    if (location.state?.answers) {
      // Simulate analysis time
      setTimeout(() => {
        const recommendations = analyzeAnswers(location.state.answers);
        setResults(recommendations);
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  }, [location.state, analyzeAnswers]);

  if (loading) {
    return (
      <div className="container">
        <div className="results-container">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '3rem' }}
          >
            <div className="loading">
              <div className="spinner"></div>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '1rem', color: '#333' }}>
              Analyzing your responses...
            </h2>
            <p style={{ color: '#666', marginTop: '0.5rem' }}>
              Generating personalized career guidance and skill development recommendations
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!location.state?.answers) {
    return (
      <div className="container">
        <div className="results-container">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '3rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
              No Assessment Results
            </h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Please complete the career guidance assessment to see your personalized recommendations.
            </p>
            <Link to="/assessment" className="btn">
              Take Assessment
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="results-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Your Career Guidance Report
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            Based on your assessment, here are personalized career paths and skill development recommendations
          </p>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '2rem' }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
            Assessment Summary
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={20} color="#667eea" />
              <span><strong>Interests:</strong> {location.state.answers.interests?.join(', ') || 'Not specified'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} color="#667eea" />
              <span><strong>Personality:</strong> {location.state.answers.personality}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="#667eea" />
              <span><strong>Education:</strong> {location.state.answers.education}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} color="#667eea" />
              <span><strong>Learning Goals:</strong> {location.state.answers.learning_goals?.length || 0} selected</span>
            </div>
          </div>
        </motion.div>

        {/* Career Recommendations */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
            Recommended Career Paths
          </h2>
          {results?.map((career, index) => (
            <motion.div
              key={career.title}
              className="career-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 className="career-title">{career.title}</h3>
                  <p className="career-description">{career.description}</p>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Key Skills to Develop:</strong>
                <div className="career-tags">
                  {career.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Recommended Courses:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  {career.courses.map((course, courseIndex) => (
                    <div key={courseIndex} style={{ 
                      padding: '0.5rem', 
                      background: '#f8f9ff', 
                      marginBottom: '0.5rem', 
                      borderRadius: '8px',
                      borderLeft: '3px solid #667eea'
                    }}>
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Professional Certifications:</strong>
                <div className="career-tags">
                  {career.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="tag" style={{ background: '#e8f5e8', color: '#2d5a2d' }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong>Growth Areas:</strong>
                <div className="career-tags">
                  {career.growthAreas.map((area, areaIndex) => (
                    <span key={areaIndex} className="tag" style={{ background: '#fff3cd', color: '#856404' }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
            Next Steps
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/explorer" className="btn">
              Explore More Careers
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/resources" className="btn btn-secondary">
              Find Learning Resources
            </Link>
            <Link to="/assessment" className="btn btn-secondary">
              <RefreshCw size={20} style={{ marginRight: '8px' }} />
              Retake Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerResults; 
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  BookOpen,
  Users,
  ArrowRight,
  RefreshCw,
  TrendingUp,
  Globe,
  Star
} from 'lucide-react';

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
      growthAreas: ['Cloud Computing', 'DevOps', 'Machine Learning', 'Mobile Development'],
      salaryRange: { entry: '$60K-$80K', mid: '$80K-$120K', senior: '$120K-$180K', executive: '$180K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Germany', 'Australia', 'Singapore'],
      advancementPaths: ['Tech Lead', 'Engineering Manager', 'CTO', 'Startup Founder', 'Technical Consultant'],
      workLifeBalance: 'Good',
      successMetrics: ['High demand globally', 'Remote work opportunities', 'Continuous learning', 'High earning potential']
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
      growthAreas: ['Deep Learning', 'Big Data', 'AI Ethics', 'Business Intelligence'],
      salaryRange: { entry: '$70K-$90K', mid: '$90K-$130K', senior: '$130K-$200K', executive: '$200K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Netherlands', 'Switzerland', 'Japan'],
      advancementPaths: ['Senior Data Scientist', 'Data Science Manager', 'Chief Data Officer', 'AI Research Lead', 'Data Consultant'],
      workLifeBalance: 'Good',
      successMetrics: ['High demand in all industries', 'Remote work friendly', 'High salary potential', 'Global opportunities']
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
      growthAreas: ['Design Systems', 'Accessibility', 'Mobile Design', 'Design Leadership'],
      salaryRange: { entry: '$50K-$70K', mid: '$70K-$100K', senior: '$100K-$150K', executive: '$150K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Germany', 'Australia', 'Netherlands'],
      advancementPaths: ['Senior Designer', 'Design Manager', 'Creative Director', 'Design Consultant', 'Design Agency Owner'],
      workLifeBalance: 'Excellent',
      successMetrics: ['Creative fulfillment', 'Remote work opportunities', 'Freelance potential', 'Global demand']
    },
    {
      title: 'DevOps Engineering',
      description: 'Bridge development and operations to improve software delivery and infrastructure.',
      skills: ['Linux Administration', 'Cloud Platforms', 'Automation', 'CI/CD'],
      courses: [
        'DevOps Bootcamp',
        'AWS Solutions Architect',
        'Docker & Kubernetes',
        'Infrastructure as Code'
      ],
      certifications: ['AWS Certified DevOps Engineer', 'Kubernetes Administrator'],
      growthAreas: ['Site Reliability Engineering', 'Cloud Architecture', 'Security', 'Platform Engineering'],
      salaryRange: { entry: '$80K-$100K', mid: '$100K-$140K', senior: '$140K-$200K', executive: '$200K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Germany', 'Netherlands', 'Singapore'],
      advancementPaths: ['Senior DevOps Engineer', 'DevOps Manager', 'Site Reliability Engineer', 'Cloud Architect', 'DevOps Consultant'],
      workLifeBalance: 'Good',
      successMetrics: ['High demand', 'Excellent salary', 'Remote work friendly', 'Continuous learning']
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
      growthAreas: ['Specialization', 'Research', 'Healthcare Technology', 'Public Health'],
      salaryRange: { entry: '$200K-$250K', mid: '$250K-$350K', senior: '$350K-$500K', executive: '$500K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'New Zealand', 'UAE'],
      advancementPaths: ['Specialist Physician', 'Medical Director', 'Healthcare Administrator', 'Medical Researcher', 'Healthcare Consultant'],
      workLifeBalance: 'Challenging',
      successMetrics: ['High salary potential', 'Job security', 'Global demand', 'Professional respect']
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
      growthAreas: ['Specialty Nursing', 'Nurse Leadership', 'Research', 'Education'],
      salaryRange: { entry: '$50K-$70K', mid: '$70K-$90K', senior: '$90K-$120K', executive: '$120K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'New Zealand', 'Germany'],
      advancementPaths: ['Nurse Practitioner', 'Nurse Manager', 'Clinical Nurse Specialist', 'Nurse Educator', 'Nurse Consultant'],
      workLifeBalance: 'Moderate',
      successMetrics: ['High demand globally', 'Job security', 'Flexible schedules', 'Career advancement']
    },
    {
      title: 'Healthcare Administration',
      description: 'Manage healthcare facilities and coordinate patient care services.',
      skills: ['Leadership', 'Healthcare Knowledge', 'Management', 'Communication'],
      courses: [
        'Healthcare Management',
        'Health Policy',
        'Healthcare Finance',
        'Quality Improvement'
      ],
      certifications: ['Fellow of the American College of Healthcare Executives', 'Certified Healthcare Manager'],
      growthAreas: ['Hospital Administration', 'Health Policy', 'Healthcare Technology', 'Public Health'],
      salaryRange: { entry: '$60K-$80K', mid: '$80K-$120K', senior: '$120K-$180K', executive: '$180K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Switzerland'],
      advancementPaths: ['Hospital Administrator', 'Healthcare Director', 'Chief Executive Officer', 'Health Policy Advisor', 'Healthcare Consultant'],
      workLifeBalance: 'Good',
      successMetrics: ['Stable career', 'Good salary', 'Leadership opportunities', 'Healthcare impact']
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
      growthAreas: ['Data Analytics', 'Digital Transformation', 'Strategy', 'Consulting'],
      salaryRange: { entry: '$60K-$80K', mid: '$80K-$110K', senior: '$110K-$150K', executive: '$150K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Singapore'],
      advancementPaths: ['Senior Business Analyst', 'Business Analysis Manager', 'Strategy Consultant', 'Product Manager', 'Business Consultant'],
      workLifeBalance: 'Good',
      successMetrics: ['High demand', 'Good salary progression', 'Remote work opportunities', 'Career flexibility']
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
      growthAreas: ['Wealth Management', 'Retirement Planning', 'Tax Advisory', 'Insurance'],
      salaryRange: { entry: '$50K-$70K', mid: '$70K-$100K', senior: '$100K-$150K', executive: '$150K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'Singapore', 'Switzerland'],
      advancementPaths: ['Senior Financial Planner', 'Wealth Manager', 'Financial Director', 'Financial Consultant', 'Financial Services Owner'],
      workLifeBalance: 'Good',
      successMetrics: ['High earning potential', 'Client relationships', 'Flexible work', 'Global opportunities']
    },
    {
      title: 'Digital Marketing',
      description: 'Create and execute marketing strategies using digital channels.',
      skills: ['Marketing', 'Analytics', 'Creativity', 'Communication'],
      courses: [
        'Digital Marketing Fundamentals',
        'Google Analytics',
        'Social Media Marketing',
        'Content Marketing'
      ],
      certifications: ['Google Digital Marketing', 'HubSpot Marketing', 'Facebook Blueprint'],
      growthAreas: ['Marketing Automation', 'Data Analytics', 'E-commerce', 'Brand Management'],
      salaryRange: { entry: '$40K-$60K', mid: '$60K-$90K', senior: '$90K-$130K', executive: '$130K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Netherlands'],
      advancementPaths: ['Marketing Manager', 'Digital Marketing Director', 'Chief Marketing Officer', 'Marketing Consultant', 'Agency Owner'],
      workLifeBalance: 'Excellent',
      successMetrics: ['Remote work friendly', 'Creative opportunities', 'High demand', 'Entrepreneurial potential']
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
      growthAreas: ['Robotics', 'Automation', 'Sustainable Design', 'Manufacturing'],
      salaryRange: { entry: '$60K-$80K', mid: '$80K-$110K', senior: '$110K-$150K', executive: '$150K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Germany', 'Australia', 'Japan'],
      advancementPaths: ['Senior Engineer', 'Engineering Manager', 'Technical Director', 'Engineering Consultant', 'Startup Founder'],
      workLifeBalance: 'Good',
      successMetrics: ['Stable career', 'Good salary', 'Global opportunities', 'Innovation potential']
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
      growthAreas: ['Sustainable Infrastructure', 'Smart Cities', 'Disaster Management', 'Urban Planning'],
      salaryRange: { entry: '$55K-$75K', mid: '$75K-$100K', senior: '$100K-$140K', executive: '$140K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'UAE'],
      advancementPaths: ['Senior Engineer', 'Project Manager', 'Engineering Director', 'Engineering Consultant', 'Infrastructure Developer'],
      workLifeBalance: 'Moderate',
      successMetrics: ['Job security', 'Infrastructure impact', 'Global projects', 'Professional growth']
    },
    {
      title: 'Electrical Engineering',
      description: 'Design and develop electrical systems and electronic devices.',
      skills: ['Circuit Design', 'Programming', 'Problem Solving', 'Technical Analysis'],
      courses: [
        'Electrical Engineering Fundamentals',
        'Circuit Analysis',
        'Power Systems',
        'Electronics Design'
      ],
      certifications: ['Professional Engineer (PE)', 'IEEE Certification'],
      growthAreas: ['Renewable Energy', 'IoT', 'Power Systems', 'Electronics'],
      salaryRange: { entry: '$65K-$85K', mid: '$85K-$115K', senior: '$115K-$160K', executive: '$160K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Germany', 'Japan', 'South Korea'],
      advancementPaths: ['Senior Engineer', 'Engineering Manager', 'Technical Director', 'Engineering Consultant', 'Technology Entrepreneur'],
      workLifeBalance: 'Good',
      successMetrics: ['High demand', 'Good salary', 'Innovation opportunities', 'Global projects']
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
      growthAreas: ['Educational Technology', 'Special Education', 'Administration', 'Curriculum Development'],
      salaryRange: { entry: '$40K-$50K', mid: '$50K-$70K', senior: '$70K-$90K', executive: '$90K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'New Zealand', 'UAE'],
      advancementPaths: ['Department Head', 'Principal', 'Educational Administrator', 'Educational Consultant', 'Curriculum Developer'],
      workLifeBalance: 'Excellent',
      successMetrics: ['Job security', 'Summer breaks', 'Impact on students', 'Global opportunities']
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
      growthAreas: ['Online Learning', 'Gamification', 'AI in Education', 'EdTech Leadership'],
      salaryRange: { entry: '$50K-$70K', mid: '$70K-$90K', senior: '$90K-$120K', executive: '$120K+' },
      internationalOpportunities: ['USA', 'Canada', 'UK', 'Australia', 'Netherlands', 'Singapore'],
      advancementPaths: ['EdTech Specialist', 'EdTech Manager', 'Learning Technology Director', 'EdTech Consultant', 'EdTech Entrepreneur'],
      workLifeBalance: 'Excellent',
      successMetrics: ['Growing field', 'Remote work opportunities', 'Innovation potential', 'Educational impact']
    }
  ]
};

const CareerResults = () => {
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  const analyzeAnswers = useCallback((answers) => {
    const scoredCareers = [];

    // Analyze interests
    if (answers.interests && Array.isArray(answers.interests)) {
      answers.interests.forEach(interest => {
        if (careerDatabase[interest]) {
          careerDatabase[interest].forEach(career => {
            let score = 0;
            
            // Base score for interest match
            score += 10;
            
            // Personality alignment
            if (answers.personality === 'analytical' && 
                (career.title === 'Data Science' || career.title === 'Software Development' || career.title === 'DevOps Engineering')) {
              score += 8;
            }
            if (answers.personality === 'creative' && 
                (career.title === 'UI/UX Design' || career.title === 'Digital Marketing')) {
              score += 8;
            }
            if (answers.personality === 'leadership' && 
                (career.title === 'Business Analysis' || career.title === 'Healthcare Administration')) {
              score += 8;
            }
            if (answers.personality === 'supportive' && 
                (career.title === 'Nursing' || career.title === 'Teaching')) {
              score += 8;
            }
            if (answers.personality === 'technical' && 
                (career.title === 'Software Development' || career.title === 'Mechanical Engineering' || career.title === 'Electrical Engineering')) {
              score += 8;
            }

            // Salary expectations alignment
            if (answers.salary_expectations) {
              if (answers.salary_expectations === 'entry_level' && career.salaryRange.entry.includes('$60K')) {
                score += 5;
              } else if (answers.salary_expectations === 'mid_level' && career.salaryRange.mid.includes('$80K')) {
                score += 5;
              } else if (answers.salary_expectations === 'senior_level' && career.salaryRange.senior.includes('$120K')) {
                score += 5;
              } else if (answers.salary_expectations === 'executive' && career.salaryRange.executive.includes('$180K')) {
                score += 5;
              }
            }

            // International opportunities alignment
            if (answers.international_opportunities) {
              if (answers.international_opportunities === 'very_interested' && career.internationalOpportunities.length >= 5) {
                score += 6;
              } else if (answers.international_opportunities === 'somewhat_interested' && career.internationalOpportunities.length >= 3) {
                score += 4;
              } else if (answers.international_opportunities === 'remote_international' && career.successMetrics.includes('Remote work opportunities')) {
                score += 6;
              }
            }

            // Career advancement alignment
            if (answers.career_advancement && Array.isArray(answers.career_advancement)) {
              answers.career_advancement.forEach(advancement => {
                if (advancement === 'management' && career.advancementPaths.some(path => path.includes('Manager') || path.includes('Director'))) {
                  score += 3;
                }
                if (advancement === 'entrepreneurship' && career.advancementPaths.some(path => path.includes('Founder') || path.includes('Owner') || path.includes('Entrepreneur'))) {
                  score += 3;
                }
                if (advancement === 'consulting' && career.advancementPaths.some(path => path.includes('Consultant'))) {
                  score += 3;
                }
                if (advancement === 'research' && career.advancementPaths.some(path => path.includes('Research') || path.includes('Development'))) {
                  score += 3;
                }
              });
            }

            // Work-life balance alignment
            if (answers.work_life_balance) {
              if (answers.work_life_balance === 'very_important' && career.workLifeBalance === 'Excellent') {
                score += 4;
              } else if (answers.work_life_balance === 'moderately_important' && (career.workLifeBalance === 'Good' || career.workLifeBalance === 'Excellent')) {
                score += 3;
              }
            }

            // Education level consideration
            if (answers.education) {
              if (answers.education === 'phd' && career.title === 'Medical Practice') {
                score += 5;
              } else if (answers.education === 'masters' && (career.title === 'Data Science' || career.title === 'Healthcare Administration')) {
                score += 3;
              }
            }

            scoredCareers.push({ ...career, score });
          });
        }
      });
    }

    // Sort by score and get top recommendations
    const sortedCareers = scoredCareers
      .sort((a, b) => b.score - a.score)
      .filter((career, index, self) => index === self.findIndex(c => c.title === career.title))
      .slice(0, 6);

    return sortedCareers;
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
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '1rem', color: '#1f2937' }}>
              Analyzing your responses...
            </h2>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
              No Assessment Results
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              Please complete the career guidance assessment to see your personalized recommendations.
            </p>
            <Link to="/assessment" className="btn">
              Take Assessment
              <ArrowRight size={18} />
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
            Your Career Guidance Report
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
            Based on your assessment, here are personalized career paths and skill development recommendations
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '2rem' }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
            Assessment Summary
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={20} color="#3b82f6" />
              <span style={{ color: '#374151' }}><strong>Interests:</strong> {location.state.answers.interests?.join(', ') || 'Not specified'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} color="#3b82f6" />
              <span style={{ color: '#374151' }}><strong>Personality:</strong> {location.state.answers.personality}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="#3b82f6" />
              <span style={{ color: '#374151' }}><strong>Education:</strong> {location.state.answers.education}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} color="#3b82f6" />
              <span style={{ color: '#374151' }}><strong>Salary Expectations:</strong> {location.state.answers.salary_expectations}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={20} color="#3b82f6" />
              <span style={{ color: '#374151' }}><strong>International:</strong> {location.state.answers.international_opportunities}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={20} color="#3b82f6" />
              <span style={{ color: '#374151' }}><strong>Career Goals:</strong> {location.state.answers.career_advancement?.join(', ') || 'Not specified'}</span>
            </div>
          </div>
        </motion.div>

        {/* Career Recommendations */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
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
                <div style={{ flex: 1 }}>
                  <h3 className="career-title">{career.title}</h3>
                  <p className="career-description">{career.description}</p>
                </div>
                <div style={{ textAlign: 'right', marginLeft: '1rem' }}>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    Match Score: {career.score}
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#1f2937' }}>Success Metrics:</strong>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '1rem',
                  marginTop: '0.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <TrendingUp size={16} color="#10b981" />
                    <span><strong>Salary Range:</strong> {career.salaryRange.entry} - {career.salaryRange.executive}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Globe size={16} color="#3b82f6" />
                    <span><strong>International:</strong> {career.internationalOpportunities.length} countries</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Target size={16} color="#f59e0b" />
                    <span><strong>Work-Life Balance:</strong> {career.workLifeBalance}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#1f2937' }}>Key Skills to Develop:</strong>
                <div className="career-tags">
                  {career.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#1f2937' }}>Career Advancement Paths:</strong>
                <div className="career-tags">
                  {career.advancementPaths.map((path, pathIndex) => (
                    <span key={pathIndex} className="tag" style={{ background: '#dbeafe', color: '#1e40af' }}>
                      {path}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#1f2937' }}>Recommended Courses:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  {career.courses.map((course, courseIndex) => (
                    <div key={courseIndex} style={{
                      padding: '0.75rem',
                      background: '#f8fafc',
                      marginBottom: '0.5rem',
                      borderRadius: '8px',
                      borderLeft: '3px solid #3b82f6',
                      color: '#374151',
                      fontSize: '0.875rem'
                    }}>
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#1f2937' }}>Professional Certifications:</strong>
                <div className="career-tags">
                  {career.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="tag" style={{ background: '#ecfdf5', color: '#065f46' }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#1f2937' }}>Growth Areas:</strong>
                <div className="career-tags">
                  {career.growthAreas.map((area, areaIndex) => (
                    <span key={areaIndex} className="tag" style={{ background: '#fef3c7', color: '#92400e' }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong style={{ color: '#1f2937' }}>Why This Career:</strong>
                <div className="career-tags">
                  {career.successMetrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="tag" style={{ background: '#f3e8ff', color: '#7c3aed' }}>
                      {metric}
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
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
            Next Steps
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/explorer" className="btn">
              Explore More Careers
              <ArrowRight size={18} />
            </Link>
            <Link to="/resources" className="btn btn-secondary">
              Find Learning Resources
            </Link>
            <Link to="/assessment" className="btn btn-secondary">
              <RefreshCw size={18} />
              Retake Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerResults; 
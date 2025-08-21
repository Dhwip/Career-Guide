import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  Clock,
  Target
} from 'lucide-react';

const CareerExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const allCareers = [
    // Technology
    {
      title: 'Software Development',
      field: 'technology',
      description: 'Build applications and systems using programming languages and frameworks.',
      level: 'Intermediate',
      education: 'Bachelor\'s in Computer Science',
      skills: ['Programming', 'Problem Solving', 'Teamwork', 'Version Control'],
      courses: ['Web Development Bootcamp', 'Python Programming', 'JavaScript Fundamentals'],
      certifications: ['AWS Certified Developer', 'Microsoft Azure Developer'],
      duration: '6-12 months',
      location: 'Worldwide'
    },
    {
      title: 'Data Science',
      field: 'technology',
      description: 'Analyze complex data to extract insights and drive decision-making.',
      level: 'Advanced',
      education: 'Bachelor\'s/Master\'s in Statistics/CS',
      skills: ['Statistics', 'Programming', 'Data Visualization', 'Machine Learning'],
      courses: ['Data Science Specialization', 'Machine Learning A-Z', 'Python for Data Analysis'],
      certifications: ['IBM Data Science Professional', 'Google Data Analytics'],
      duration: '8-15 months',
      location: 'Worldwide'
    },
    {
      title: 'UI/UX Design',
      field: 'technology',
      description: 'Create user-friendly and visually appealing digital interfaces.',
      level: 'Beginner',
      education: 'Design degree or certification',
      skills: ['Design', 'Creativity', 'User Research', 'Prototyping'],
      courses: ['UI/UX Design Bootcamp', 'Figma Masterclass', 'Design Thinking'],
      certifications: ['Google UX Design', 'Adobe Creative Suite'],
      duration: '4-8 months',
      location: 'Worldwide'
    },
    // Healthcare
    {
      title: 'Medical Practice',
      field: 'healthcare',
      description: 'Provide patient care and medical treatment in various specialties.',
      level: 'Advanced',
      education: 'MBBS + Specialization',
      skills: ['Medical Knowledge', 'Communication', 'Empathy', 'Critical Thinking'],
      courses: ['Medical Terminology', 'Patient Communication', 'Healthcare Ethics'],
      certifications: ['Basic Life Support (BLS)', 'Advanced Cardiac Life Support (ACLS)'],
      duration: '5-8 years',
      location: 'Worldwide'
    },
    {
      title: 'Nursing',
      field: 'healthcare',
      description: 'Provide patient care and support in healthcare settings.',
      level: 'Intermediate',
      education: 'Nursing degree',
      skills: ['Patient Care', 'Communication', 'Teamwork', 'Clinical Skills'],
      courses: ['Nursing Fundamentals', 'Patient Assessment', 'Medical-Surgical Nursing'],
      certifications: ['Registered Nurse (RN)', 'Certified Nursing Assistant (CNA)'],
      duration: '2-4 years',
      location: 'Worldwide'
    },
    // Business
    {
      title: 'Business Analysis',
      field: 'business',
      description: 'Analyze business processes and recommend improvements.',
      level: 'Intermediate',
      education: 'Business/Management degree',
      skills: ['Analytics', 'Communication', 'Problem Solving', 'Process Modeling'],
      courses: ['Business Analysis Fundamentals', 'Process Modeling', 'Requirements Gathering'],
      certifications: ['CBAP (Certified Business Analysis Professional)', 'PMP'],
      duration: '6-12 months',
      location: 'Worldwide'
    },
    {
      title: 'Financial Planning',
      field: 'business',
      description: 'Help clients with financial planning and investment decisions.',
      level: 'Intermediate',
      education: 'Finance/Economics degree',
      skills: ['Financial Knowledge', 'Communication', 'Sales', 'Risk Assessment'],
      courses: ['Financial Planning Fundamentals', 'Investment Analysis', 'Tax Planning'],
      certifications: ['CFP (Certified Financial Planner)', 'Chartered Financial Analyst (CFA)'],
      duration: '1-3 years',
      location: 'Worldwide'
    },
    // Engineering
    {
      title: 'Mechanical Engineering',
      field: 'engineering',
      description: 'Design and build mechanical devices and systems.',
      level: 'Advanced',
      education: 'Mechanical Engineering degree',
      skills: ['Technical Skills', 'Problem Solving', 'Design', 'CAD Software'],
      courses: ['Engineering Fundamentals', 'CAD/CAM Design', 'Thermodynamics'],
      certifications: ['Professional Engineer (PE)', 'SolidWorks Certification'],
      duration: '4-6 years',
      location: 'Worldwide'
    },
    {
      title: 'Civil Engineering',
      field: 'engineering',
      description: 'Design and oversee construction of infrastructure projects.',
      level: 'Advanced',
      education: 'Civil Engineering degree',
      skills: ['Technical Skills', 'Project Management', 'Leadership', 'Structural Analysis'],
      courses: ['Structural Engineering', 'Construction Management', 'Environmental Engineering'],
      certifications: ['Professional Engineer (PE)', 'LEED Certification'],
      duration: '4-6 years',
      location: 'Worldwide'
    },
    // Education
    {
      title: 'Teaching',
      field: 'education',
      description: 'Educate students in various subjects and grade levels.',
      level: 'Intermediate',
      education: 'Teaching degree + certification',
      skills: ['Communication', 'Patience', 'Leadership', 'Curriculum Development'],
      courses: ['Teaching Methods', 'Classroom Management', 'Educational Psychology'],
      certifications: ['Teaching License', 'TESOL Certification'],
      duration: '2-4 years',
      location: 'Worldwide'
    },
    {
      title: 'Educational Technology',
      field: 'education',
      description: 'Integrate technology into educational settings.',
      level: 'Intermediate',
      education: 'Education degree + technology background',
      skills: ['Technology Integration', 'Instructional Design', 'Digital Tools', 'Training'],
      courses: ['Educational Technology', 'Instructional Design', 'Learning Management Systems'],
      certifications: ['Google Certified Educator', 'Microsoft Certified Educator'],
      duration: '6-12 months',
      location: 'Worldwide'
    },
    // Marketing
    {
      title: 'Digital Marketing',
      field: 'marketing',
      description: 'Develop and execute digital marketing strategies.',
      level: 'Beginner',
      education: 'Marketing/Business degree',
      skills: ['Digital Marketing', 'Analytics', 'Creativity', 'Social Media'],
      courses: ['Digital Marketing Bootcamp', 'SEO Fundamentals', 'Social Media Marketing'],
      certifications: ['Google Digital Marketing', 'Facebook Blueprint', 'HubSpot Certification'],
      duration: '3-6 months',
      location: 'Worldwide'
    },
    {
      title: 'Content Creation',
      field: 'marketing',
      description: 'Create engaging content for various platforms and audiences.',
      level: 'Beginner',
      education: 'Any degree + creativity',
      skills: ['Content Creation', 'Social Media', 'Creativity', 'Writing'],
      courses: ['Content Writing', 'Video Production', 'Social Media Strategy'],
      certifications: ['Content Marketing Institute', 'Copywriting Certification'],
      duration: '2-4 months',
      location: 'Worldwide'
    }
  ];

  const fields = [
    { value: 'all', label: 'All Fields' },
    { value: 'technology', label: 'Technology & IT' },
    { value: 'healthcare', label: 'Healthcare & Medicine' },
    { value: 'business', label: 'Business & Finance' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'education', label: 'Education & Teaching' },
    { value: 'marketing', label: 'Marketing & Sales' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const filteredCareers = allCareers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesField = selectedField === 'all' || career.field === selectedField;
    const matchesLevel = selectedLevel === 'all' || career.level.toLowerCase() === selectedLevel;

    return matchesSearch && matchesField && matchesLevel;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#10b981';
      case 'Intermediate': return '#3b82f6';
      case 'Advanced': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
          Career Path Explorer
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          Discover career paths and explore skill development opportunities across different fields
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Search size={20} color="#667eea" />
          <input
            type="text"
            placeholder="Search career paths..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
            style={{ flex: 1 }}
          />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem' 
        }}>
          <div>
            <label className="form-label">Field of Interest</label>
            <select 
              value={selectedField} 
              onChange={(e) => setSelectedField(e.target.value)}
              className="form-select"
            >
              {fields.map(field => (
                <option key={field.value} value={field.value}>{field.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">Skill Level</label>
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="form-select"
            >
              {levels.map(level => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem',
        color: 'white'
      }}>
        <span>{filteredCareers.length} career paths found</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={16} />
            Skill Level
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={16} />
            Development Path
          </span>
        </div>
      </div>

      {/* Career Cards */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {filteredCareers.map((career, index) => (
          <motion.div
            key={career.title}
            className="career-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ flex: 1 }}>
                <h3 className="career-title">{career.title}</h3>
                <p className="career-description">{career.description}</p>
              </div>
              <div style={{ marginLeft: '1rem' }}>
                <div style={{ 
                  background: getLevelColor(career.level),
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {career.level}
                </div>
              </div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span><strong>Education:</strong> {career.education}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} color="#667eea" />
                <span><strong>Duration:</strong> {career.duration}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} color="#667eea" />
                <span><strong>Location:</strong> {career.location}</span>
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
              <div className="career-tags">
                {career.courses.map((course, courseIndex) => (
                  <span key={courseIndex} className="tag" style={{ background: '#f8f9ff', color: '#667eea' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <strong>Professional Certifications:</strong>
              <div className="career-tags">
                {career.certifications.map((cert, certIndex) => (
                  <span key={certIndex} className="tag" style={{ background: '#e8f5e8', color: '#2d5a2d' }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredCareers.length === 0 && (
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: '3rem' }}
        >
          <Search size={64} style={{ color: '#667eea', marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
            No career paths found
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Try adjusting your search criteria or filters to find more career options.
          </p>
          <button
            className="btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedField('all');
              setSelectedLevel('all');
            }}
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CareerExplorer; 
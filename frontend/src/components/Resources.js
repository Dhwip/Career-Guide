import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  Download, 
  ExternalLink, 
  Search,
  Star,
  Clock,
  Users,
  Target,
  TrendingUp,
  FileText,
  Play
} from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    // Books
    {
      title: 'What Color Is Your Parachute?',
      category: 'books',
      description: 'A practical manual for job-hunters and career-changers.',
      type: 'Book',
      author: 'Richard N. Bolles',
      rating: 4.8,
      duration: '400 pages',
      format: 'PDF',
      link: 'https://www.pdfdrive.com/what-color-is-your-parachute-2019-a-practical-manual-for-job-hunters-and-career-changers-e158000.html',
      tags: ['Career Change', 'Job Search', 'Self-Assessment']
    },
    {
      title: 'Designing Your Life',
      category: 'books',
      description: 'How to build a well-lived, joyful life using design thinking.',
      type: 'Book',
      author: 'Bill Burnett & Dave Evans',
      rating: 4.6,
      duration: '288 pages',
      format: 'PDF',
      link: 'https://www.pdfdrive.com/designing-your-life-how-to-build-a-well-lived-joyful-life-e158001.html',
      tags: ['Life Design', 'Career Planning', 'Innovation']
    },
    {
      title: 'The 7 Habits of Highly Effective People',
      category: 'books',
      description: 'Powerful lessons in personal change and leadership.',
      type: 'Book',
      author: 'Stephen R. Covey',
      rating: 4.7,
      duration: '432 pages',
      format: 'PDF',
      link: 'https://www.pdfdrive.com/the-7-habits-of-highly-effective-people-powerful-lessons-in-personal-change-e158002.html',
      tags: ['Leadership', 'Personal Development', 'Success']
    },
    {
      title: 'Career Development Guide',
      category: 'books',
      description: 'Comprehensive guide to career planning and professional development.',
      type: 'Guide',
      author: 'Career Development Institute',
      rating: 4.5,
      duration: '150 pages',
      format: 'PDF',
      link: 'https://www.careerdevelopment.com/resources/career-guide.pdf',
      tags: ['Career Planning', 'Professional Development', 'Skills']
    },
    {
      title: 'Resume Writing Handbook',
      category: 'books',
      description: 'Complete guide to creating compelling resumes and cover letters.',
      type: 'Handbook',
      author: 'Professional Resume Writers',
      rating: 4.4,
      duration: '120 pages',
      format: 'PDF',
      link: 'https://www.resumewriting.com/resources/resume-handbook.pdf',
      tags: ['Resume', 'Job Application', 'Professional Writing']
    },
    // Videos
    {
      title: 'How to Choose Your Career Path',
      category: 'videos',
      description: 'A comprehensive guide to making informed career decisions.',
      type: 'Video',
      author: 'Career Guidance Channel',
      rating: 4.9,
      duration: '15:30',
      format: 'YouTube',
      link: 'https://www.youtube.com/watch?v=8jPQjjsBbIc',
      tags: ['Career Planning', 'Decision Making', 'Guidance']
    },
    {
      title: 'Resume Writing Masterclass',
      category: 'videos',
      description: 'Learn to create compelling resumes that get you noticed.',
      type: 'Video',
      author: 'HR Expert Series',
      rating: 4.7,
      duration: '22:15',
      format: 'YouTube',
      link: 'https://www.youtube.com/watch?v=JtJQh00sj00',
      tags: ['Resume', 'Job Application', 'Professional Development']
    },
    {
      title: 'Interview Preparation Tips',
      category: 'videos',
      description: 'Essential tips and techniques for acing job interviews.',
      type: 'Video',
      author: 'Career Success Academy',
      rating: 4.8,
      duration: '18:45',
      format: 'YouTube',
      link: 'https://www.youtube.com/watch?v=1mHjMNZZvFo',
      tags: ['Interview', 'Job Search', 'Communication']
    },
    {
      title: 'Networking for Career Success',
      category: 'videos',
      description: 'Build professional relationships that advance your career.',
      type: 'Video',
      author: 'Professional Development Hub',
      rating: 4.6,
      duration: '12:30',
      format: 'YouTube',
      link: 'https://www.youtube.com/watch?v=6aKbKqXqJqY',
      tags: ['Networking', 'Professional Relationships', 'Career Growth']
    },
    {
      title: 'Salary Negotiation Strategies',
      category: 'videos',
      description: 'Learn how to negotiate your salary and benefits effectively.',
      type: 'Video',
      author: 'Salary Negotiation Expert',
      rating: 4.7,
      duration: '20:15',
      format: 'YouTube',
      link: 'https://www.youtube.com/watch?v=8jPQjjsBbIc',
      tags: ['Salary Negotiation', 'Compensation', 'Career Advancement']
    },
    {
      title: 'Building Your Personal Brand',
      category: 'videos',
      description: 'Create a strong personal brand that sets you apart in your career.',
      type: 'Video',
      author: 'Personal Branding Coach',
      rating: 4.5,
      duration: '16:20',
      format: 'YouTube',
      link: 'https://www.youtube.com/watch?v=JtJQh00sj00',
      tags: ['Personal Branding', 'Professional Image', 'Career Development']
    },
    // Tools
    {
      title: 'Skills Assessment Tool',
      category: 'tools',
      description: 'Evaluate your current skills and identify areas for improvement.',
      type: 'Interactive Tool',
      author: 'CareerGuide',
      rating: 4.6,
      duration: '10 min',
      format: 'Web App',
      link: '/assessment',
      tags: ['Skills Assessment', 'Self-Evaluation', 'Development']
    },
    {
      title: 'Career Path Visualizer',
      category: 'tools',
      description: 'Visualize different career paths and progression opportunities.',
      type: 'Interactive Tool',
      author: 'CareerGuide',
      rating: 4.7,
      duration: '15 min',
      format: 'Web App',
      link: '/explorer',
      tags: ['Career Path', 'Visualization', 'Planning']
    },
    {
      title: 'Learning Path Builder',
      category: 'tools',
      description: 'Create personalized learning paths for your career goals.',
      type: 'Interactive Tool',
      author: 'CareerGuide',
      rating: 4.5,
      duration: '20 min',
      format: 'Web App',
      link: '/resources',
      tags: ['Learning Path', 'Goal Setting', 'Development']
    },
    // Courses
    {
      title: 'Career Development Fundamentals',
      category: 'courses',
      description: 'A comprehensive course on career planning and development.',
      type: 'Online Course',
      author: 'Career Development Institute',
      rating: 4.8,
      duration: '8 weeks',
      format: 'Online',
      link: 'https://www.coursera.org/learn/career-development',
      tags: ['Career Development', 'Planning', 'Fundamentals']
    },
    {
      title: 'Digital Skills for Modern Careers',
      category: 'courses',
      description: 'Essential digital skills for today\'s workplace.',
      type: 'Online Course',
      author: 'Digital Skills Academy',
      rating: 4.6,
      duration: '6 weeks',
      format: 'Online',
      link: 'https://www.edx.org/course/digital-skills-modern-careers',
      tags: ['Digital Skills', 'Technology', 'Modern Workplace']
    },
    {
      title: 'Leadership and Management',
      category: 'courses',
      description: 'Develop leadership skills for career advancement.',
      type: 'Online Course',
      author: 'Leadership Institute',
      rating: 4.7,
      duration: '10 weeks',
      format: 'Online',
      link: 'https://www.udemy.com/course/leadership-management-skills',
      tags: ['Leadership', 'Management', 'Career Growth']
    },
    {
      title: 'Data Science for Career Growth',
      category: 'courses',
      description: 'Learn data science skills to advance your career.',
      type: 'Online Course',
      author: 'Data Science Academy',
      rating: 4.8,
      duration: '12 weeks',
      format: 'Online',
      link: 'https://www.coursera.org/specializations/data-science',
      tags: ['Data Science', 'Analytics', 'Career Advancement']
    },
    {
      title: 'Project Management Professional',
      category: 'courses',
      description: 'Prepare for PMP certification and advance your project management career.',
      type: 'Online Course',
      author: 'Project Management Institute',
      rating: 4.7,
      duration: '16 weeks',
      format: 'Online',
      link: 'https://www.pmi.org/certifications/project-management-pmp',
      tags: ['Project Management', 'PMP', 'Certification']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Resources' },
    { value: 'books', label: 'Books & Guides' },
    { value: 'videos', label: 'Videos & Tutorials' },
    { value: 'tools', label: 'Interactive Tools' },
    { value: 'courses', label: 'Online Courses' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'books': return <BookOpen size={20} />;
      case 'videos': return <Video size={20} />;
      case 'tools': return <Target size={20} />;
      case 'courses': return <TrendingUp size={20} />;
      default: return <FileText size={20} />;
    }
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case 'PDF': return <Download size={16} />;
      case 'YouTube': return <Play size={16} />;
      case 'Web App': return <ExternalLink size={16} />;
      case 'Online': return <Users size={16} />;
      default: return <FileText size={16} />;
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
          Learning Resources
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          Access comprehensive career guidance materials, tools, and learning resources for skill development
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
            placeholder="Search resources..."
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
            <label className="form-label">Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Resources Grid */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {filteredResources.map((resource, index) => (
          <motion.div
            key={resource.title}
            className="career-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {getCategoryIcon(resource.category)}
                  <span style={{ 
                    background: '#f0f0f0', 
                    color: '#666', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem' 
                  }}>
                    {resource.type}
                  </span>
                </div>
                <h3 className="career-title">{resource.title}</h3>
                <p className="career-description">{resource.description}</p>
              </div>
              <div style={{ textAlign: 'right', marginLeft: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  <Star size={16} color="#fbbf24" fill="#fbbf24" />
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{resource.rating}</span>
                </div>
                <div style={{ 
                  background: '#f0f0f0', 
                  color: '#666', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '20px', 
                  fontSize: '0.875rem' 
                }}>
                  {resource.format}
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
                <Users size={16} color="#667eea" />
                <span><strong>Author:</strong> {resource.author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} color="#667eea" />
                <span><strong>Duration:</strong> {resource.duration}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>Tags:</strong>
                <div className="career-tags">
                  {resource.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <button 
                className="btn" 
                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                onClick={() => {
                  if (resource.format === 'Web App') {
                    window.location.href = resource.link;
                  } else {
                    window.open(resource.link, '_blank');
                  }
                }}
              >
                {getFormatIcon(resource.format)}
                <span style={{ marginLeft: '0.5rem' }}>
                  {resource.format === 'PDF' ? 'Download' : 
                   resource.format === 'YouTube' ? 'Watch' : 
                   resource.format === 'Web App' ? 'Try Tool' : 'Enroll'}
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: '3rem' }}
        >
          <Search size={64} style={{ color: '#667eea', marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
            No resources found
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Try adjusting your search criteria or filters to find more resources.
          </p>
          <button
            className="btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Clear Filters
          </button>
        </motion.div>
      )}

      {/* Additional Resources Section */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginTop: '3rem' }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
          Additional Career Development Services
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
              Career Counseling
            </h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Connect with certified career counselors for personalized guidance and skill development planning.
            </p>
            <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Book Session
            </button>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
              Skill Development Workshops
            </h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Join interactive workshops to develop specific skills for your career goals.
            </p>
            <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              View Workshops
            </button>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
              Learning Path Consultation
            </h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Get personalized learning path recommendations based on your career goals.
            </p>
            <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Get Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources; 
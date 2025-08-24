import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  Brain,
  Users,
  BookOpen,
  Target,
  Heart,
  Zap,
  Shield,
  Globe,
  Lightbulb,
  TrendingUp,
  Star
} from 'lucide-react';

const CareerAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'age',
      title: 'What is your current age?',
      type: 'single_select',
      options: [
        { value: '13-15', label: '13-15 years (High School)', icon: <BookOpen size={20} /> },
        { value: '16-18', label: '16-18 years (College Prep)', icon: <Target size={20} /> },
        { value: '19-22', label: '19-22 years (Undergraduate)', icon: <Users size={20} /> },
        { value: '23-30', label: '23-30 years (Early Career)', icon: <TrendingUp size={20} /> },
        { value: '30+', label: '30+ years (Career Change)', icon: <Star size={20} /> }
      ]
    },
    {
      id: 'interests',
      title: 'What are your primary areas of interest?',
      type: 'multi_select',
      options: [
        { value: 'technology', label: 'Technology & Computing', icon: <Zap size={20} /> },
        { value: 'healthcare', label: 'Healthcare & Medicine', icon: <Heart size={20} /> },
        { value: 'business', label: 'Business & Finance', icon: <TrendingUp size={20} /> },
        { value: 'engineering', label: 'Engineering & Science', icon: <Shield size={20} /> },
        { value: 'education', label: 'Education & Teaching', icon: <BookOpen size={20} /> },
        { value: 'arts', label: 'Arts & Creative', icon: <Lightbulb size={20} /> },
        { value: 'environment', label: 'Environment & Sustainability', icon: <Globe size={20} /> },
        { value: 'psychology', label: 'Psychology & Human Behavior', icon: <Brain size={20} /> }
      ]
    },
    {
      id: 'personality',
      title: 'Which personality trait best describes you?',
      type: 'single_select',
      options: [
        { value: 'analytical', label: 'Analytical & Logical', icon: <Brain size={20} /> },
        { value: 'creative', label: 'Creative & Innovative', icon: <Lightbulb size={20} /> },
        { value: 'leadership', label: 'Leadership & Management', icon: <Users size={20} /> },
        { value: 'supportive', label: 'Supportive & Caring', icon: <Heart size={20} /> },
        { value: 'technical', label: 'Technical & Detail-oriented', icon: <Shield size={20} /> }
      ]
    },
    {
      id: 'education',
      title: 'What is your highest level of education?',
      type: 'single_select',
      options: [
        { value: 'high_school', label: 'High School', icon: <BookOpen size={20} /> },
        { value: 'some_college', label: 'Some College', icon: <Target size={20} /> },
        { value: 'bachelors', label: "Bachelor's Degree", icon: <Users size={20} /> },
        { value: 'masters', label: "Master's Degree", icon: <TrendingUp size={20} /> },
        { value: 'phd', label: 'PhD/Doctorate', icon: <Star size={20} /> }
      ]
    },
    {
      id: 'current_skills',
      title: 'What skills do you currently have?',
      type: 'multi_select',
      options: [
        { value: 'communication', label: 'Communication', icon: <Users size={20} /> },
        { value: 'leadership', label: 'Leadership', icon: <Target size={20} /> },
        { value: 'technical', label: 'Technical Skills', icon: <Zap size={20} /> },
        { value: 'creative', label: 'Creative Skills', icon: <Lightbulb size={20} /> },
        { value: 'analytical', label: 'Analytical Skills', icon: <Brain size={20} /> },
        { value: 'writing', label: 'Writing', icon: <BookOpen size={20} /> },
        { value: 'languages', label: 'Languages', icon: <Globe size={20} /> },
        { value: 'none', label: 'None (Just starting)', icon: <Star size={20} /> }
      ]
    },
    {
      id: 'learning_goals',
      title: 'What are your learning goals?',
      type: 'multi_select',
      options: [
        { value: 'technical_skills', label: 'Develop Technical Skills', icon: <Zap size={20} /> },
        { value: 'leadership', label: 'Build Leadership Skills', icon: <Target size={20} /> },
        { value: 'communication', label: 'Improve Communication', icon: <Users size={20} /> },
        { value: 'creativity', label: 'Enhance Creativity', icon: <Lightbulb size={20} /> },
        { value: 'business', label: 'Learn Business Skills', icon: <TrendingUp size={20} /> },
        { value: 'research', label: 'Develop Research Skills', icon: <Brain size={20} /> }
      ]
    },
    {
      id: 'values',
      title: 'What values are most important to you in a career?',
      type: 'multi_select',
      options: [
        { value: 'helping_others', label: 'Helping Others', icon: <Heart size={20} /> },
        { value: 'innovation', label: 'Innovation & Creativity', icon: <Lightbulb size={20} /> },
        { value: 'stability', label: 'Job Security & Stability', icon: <Shield size={20} /> },
        { value: 'growth', label: 'Personal Growth', icon: <TrendingUp size={20} /> },
        { value: 'impact', label: 'Making an Impact', icon: <Target size={20} /> },
        { value: 'flexibility', label: 'Work-Life Balance', icon: <Globe size={20} /> }
      ]
    },
    {
      id: 'work_environment',
      title: 'What type of work environment do you prefer?',
      type: 'single_select',
      options: [
        { value: 'office', label: 'Traditional Office', icon: <Users size={20} /> },
        { value: 'remote', label: 'Remote/Flexible', icon: <Globe size={20} /> },
        { value: 'outdoor', label: 'Outdoor/Field Work', icon: <Shield size={20} /> },
        { value: 'creative', label: 'Creative/Studio', icon: <Lightbulb size={20} /> },
        { value: 'laboratory', label: 'Laboratory/Research', icon: <Brain size={20} /> }
      ]
    },
    {
      id: 'salary_expectations',
      title: 'What are your salary expectations for your career?',
      type: 'single_select',
      options: [
        { value: 'entry_level', label: 'Entry Level ($30K-$50K)', icon: <Target size={20} /> },
        { value: 'mid_level', label: 'Mid Level ($50K-$80K)', icon: <TrendingUp size={20} /> },
        { value: 'senior_level', label: 'Senior Level ($80K-$120K)', icon: <Star size={20} /> },
        { value: 'executive', label: 'Executive ($120K+)', icon: <Users size={20} /> },
        { value: 'flexible', label: 'Flexible (Focus on growth)', icon: <Globe size={20} /> }
      ]
    },
    {
      id: 'international_opportunities',
      title: 'Are you interested in international career opportunities?',
      type: 'single_select',
      options: [
        { value: 'very_interested', label: 'Very Interested (Want to work abroad)', icon: <Globe size={20} /> },
        { value: 'somewhat_interested', label: 'Somewhat Interested (Open to opportunities)', icon: <TrendingUp size={20} /> },
        { value: 'not_interested', label: 'Not Interested (Prefer local work)', icon: <Target size={20} /> },
        { value: 'remote_international', label: 'Remote International (Work from home for foreign companies)', icon: <Users size={20} /> }
      ]
    },
    {
      id: 'career_advancement',
      title: 'What type of career advancement are you seeking?',
      type: 'multi_select',
      options: [
        { value: 'management', label: 'Management Positions', icon: <Users size={20} /> },
        { value: 'specialization', label: 'Technical Specialization', icon: <Brain size={20} /> },
        { value: 'entrepreneurship', label: 'Entrepreneurship/Startup', icon: <Lightbulb size={20} /> },
        { value: 'consulting', label: 'Consulting/Freelancing', icon: <Globe size={20} /> },
        { value: 'research', label: 'Research & Development', icon: <Shield size={20} /> },
        { value: 'teaching', label: 'Teaching/Mentoring', icon: <BookOpen size={20} /> }
      ]
    },
    {
      id: 'work_life_balance',
      title: 'How important is work-life balance to you?',
      type: 'single_select',
      options: [
        { value: 'very_important', label: 'Very Important (Flexible hours)', icon: <Heart size={20} /> },
        { value: 'moderately_important', label: 'Moderately Important (Some flexibility)', icon: <Target size={20} /> },
        { value: 'less_important', label: 'Less Important (Focus on career growth)', icon: <TrendingUp size={20} /> },
        { value: 'not_important', label: 'Not Important (Dedicated to work)', icon: <Star size={20} /> }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const question = questions.find(q => q.id === questionId);
    
    if (question.type === 'multi_select') {
      setAnswers(prev => ({
        ...prev,
        [questionId]: prev[questionId] 
          ? prev[questionId].includes(value)
            ? prev[questionId].filter(v => v !== value)
            : [...prev[questionId], value]
          : [value]
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isOptionSelected = (questionId, value) => {
    const answer = answers[questionId];
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  const canProceed = () => {
    const currentQ = questions[currentQuestion];
    const answer = answers[currentQ.id];
    return answer && (Array.isArray(answer) ? answer.length > 0 : true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const estimatedTime = Math.ceil((questions.length - currentQuestion - 1) * 1.5);

  return (
    <div className="container">
      <div className="assessment-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '1rem' 
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}>
              <Brain size={28} color="white" />
            </div>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>
            Career Guidance Assessment
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Answer these questions to get personalized career guidance and skill development recommendations
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Progress Info */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          color: '#6b7280',
          fontSize: '0.875rem',
          fontWeight: '500'
        }}>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} />
            <span>~{estimatedTime} min remaining</span>
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          className="question-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="question-title">{questions[currentQuestion].title}</h2>
          
          <div className="options-grid">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={option.value}
                className={`option-btn ${isOptionSelected(questions[currentQuestion].id, option.value) ? 'selected' : ''}`}
                onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  width: '100%'
                }}>
                  <div style={{ 
                    color: isOptionSelected(questions[currentQuestion].id, option.value) ? '#667eea' : '#6b7280',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {option.icon}
                  </div>
                  <span style={{ 
                    fontWeight: isOptionSelected(questions[currentQuestion].id, option.value) ? '600' : '500',
                    color: isOptionSelected(questions[currentQuestion].id, option.value) ? '#1e40af' : '#374151'
                  }}>
                    {option.label}
                  </span>
                  {isOptionSelected(questions[currentQuestion].id, option.value) && (
                    <CheckCircle size={20} color="#667eea" style={{ marginLeft: 'auto' }} />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '2rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: currentQuestion === 0 ? '#f3f4f6' : 'rgba(255, 255, 255, 0.9)',
              color: currentQuestion === 0 ? '#9ca3af' : '#374151',
              border: '2px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '12px',
              cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: canProceed() ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f3f4f6',
              color: canProceed() ? 'white' : '#9ca3af',
              border: 'none',
              borderRadius: '12px',
              cursor: canProceed() ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: canProceed() ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none'
            }}
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerAssessment; 
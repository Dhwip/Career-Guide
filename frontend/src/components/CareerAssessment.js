import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Clock
} from 'lucide-react';

const CareerAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 'age',
      title: 'What is your current age?',
      type: 'select',
      options: [
        { value: '13-15', label: '13-15 years (High School)' },
        { value: '16-18', label: '16-18 years (College Prep)' },
        { value: '19-22', label: '19-22 years (Undergraduate)' },
        { value: '23-30', label: '23-30 years (Early Career)' },
        { value: '30+', label: '30+ years (Career Change)' }
      ]
    },
    {
      id: 'education',
      title: 'What is your highest level of education?',
      type: 'select',
      options: [
        { value: 'high_school', label: 'High School (10th/12th)' },
        { value: 'diploma', label: 'Diploma' },
        { value: 'bachelor', label: 'Bachelor\'s Degree' },
        { value: 'master', label: 'Master\'s Degree' },
        { value: 'phd', label: 'PhD/Doctorate' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'interests',
      title: 'Which fields interest you? (Select multiple)',
      type: 'multi_select',
      options: [
        { value: 'technology', label: 'Technology & IT' },
        { value: 'healthcare', label: 'Healthcare & Medicine' },
        { value: 'business', label: 'Business & Finance' },
        { value: 'arts', label: 'Arts & Creative' },
        { value: 'science', label: 'Science & Research' },
        { value: 'education', label: 'Education & Teaching' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'marketing', label: 'Marketing & Sales' },
        { value: 'law', label: 'Law & Legal' },
        { value: 'environment', label: 'Environment & Sustainability' },
        { value: 'psychology', label: 'Psychology & Counseling' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'personality',
      title: 'How would you describe your personality?',
      type: 'select',
      options: [
        { value: 'introvert', label: 'Introverted - I prefer working alone' },
        { value: 'extrovert', label: 'Extroverted - I enjoy working with people' },
        { value: 'analytical', label: 'Analytical - I like solving complex problems' },
        { value: 'creative', label: 'Creative - I enjoy expressing myself' },
        { value: 'leadership', label: 'Leadership - I like taking charge' },
        { value: 'supportive', label: 'Supportive - I like helping others' }
      ]
    },
    {
      id: 'work_style',
      title: 'What type of work environment do you prefer?',
      type: 'select',
      options: [
        { value: 'office', label: 'Traditional office setting' },
        { value: 'remote', label: 'Remote/Work from home' },
        { value: 'outdoor', label: 'Outdoor/Field work' },
        { value: 'travel', label: 'Traveling/On-site work' },
        { value: 'flexible', label: 'Flexible/Hybrid work' },
        { value: 'startup', label: 'Startup/Fast-paced environment' }
      ]
    },
    {
      id: 'current_skills',
      title: 'Which skills do you currently have? (Select all that apply)',
      type: 'multi_select',
      options: [
        { value: 'programming', label: 'Programming/Coding' },
        { value: 'communication', label: 'Communication Skills' },
        { value: 'leadership', label: 'Leadership Skills' },
        { value: 'analytics', label: 'Data Analytics' },
        { value: 'design', label: 'Design & Creativity' },
        { value: 'management', label: 'Project Management' },
        { value: 'research', label: 'Research Skills' },
        { value: 'sales', label: 'Sales & Marketing' },
        { value: 'writing', label: 'Content Writing' },
        { value: 'languages', label: 'Foreign Languages' },
        { value: 'technical', label: 'Technical Skills' },
        { value: 'none', label: 'I\'m just starting to develop skills' }
      ]
    },
    {
      id: 'learning_goals',
      title: 'What are your learning goals? (Select multiple)',
      type: 'multi_select',
      options: [
        { value: 'technical_skills', label: 'Develop technical skills' },
        { value: 'soft_skills', label: 'Improve soft skills' },
        { value: 'leadership', label: 'Build leadership abilities' },
        { value: 'industry_knowledge', label: 'Gain industry knowledge' },
        { value: 'certification', label: 'Get professional certifications' },
        { value: 'networking', label: 'Build professional network' },
        { value: 'entrepreneurship', label: 'Learn entrepreneurship' },
        { value: 'research', label: 'Develop research skills' },
        { value: 'creativity', label: 'Enhance creative abilities' },
        { value: 'problem_solving', label: 'Improve problem-solving skills' }
      ]
    },
    {
      id: 'values',
      title: 'What matters most to you in a career? (Select multiple)',
      type: 'multi_select',
      options: [
        { value: 'impact', label: 'Making a positive impact' },
        { value: 'growth', label: 'Career growth opportunities' },
        { value: 'stability', label: 'Job security & stability' },
        { value: 'creativity', label: 'Creative expression' },
        { value: 'learning', label: 'Continuous learning' },
        { value: 'balance', label: 'Work-life balance' },
        { value: 'recognition', label: 'Recognition & prestige' },
        { value: 'independence', label: 'Independence & autonomy' },
        { value: 'innovation', label: 'Innovation & cutting-edge work' },
        { value: 'helping_others', label: 'Helping others' }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
      // Navigate to results with answers
      setTimeout(() => {
        navigate('/results', { state: { answers } });
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const currentQ = questions[currentQuestion];

  if (isCompleted) {
    return (
      <div className="container">
        <div className="assessment-container">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '3rem' }}
          >
            <CheckCircle size={64} style={{ color: '#667eea', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#333' }}>
              Assessment Complete!
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
              Analyzing your responses to provide personalized career guidance and skill development recommendations...
            </p>
            <div className="loading">
              <div className="spinner"></div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="assessment-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Career Guidance Assessment
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            Answer these questions to get personalized career guidance and skill development recommendations
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Info */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem',
          color: 'white'
        }}>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} />
            <span>~{Math.ceil((questions.length - currentQuestion) * 1.5)} min remaining</span>
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          className="question-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <h2 className="question-title">{currentQ.title}</h2>
          
          <div className="options-grid">
            {currentQ.type === 'select' ? (
              currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${answers[currentQ.id] === option.value ? 'selected' : ''}`}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                >
                  {option.label}
                </button>
              ))
            ) : (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {currentQ.options.map((option, index) => (
                  <label
                    key={index}
                    className={`option-btn ${answers[currentQ.id]?.includes(option.value) ? 'selected' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <input
                      type="checkbox"
                      checked={answers[currentQ.id]?.includes(option.value) || false}
                      onChange={(e) => {
                        const currentAnswers = answers[currentQ.id] || [];
                        if (e.target.checked) {
                          handleAnswer(currentQ.id, [...currentAnswers, option.value]);
                        } else {
                          handleAnswer(currentQ.id, currentAnswers.filter(a => a !== option.value));
                        }
                      }}
                      style={{ marginRight: '1rem' }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginTop: '2rem'
        }}>
          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            style={{ 
              opacity: currentQuestion === 0 ? 0.5 : 1,
              cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Previous
          </button>

          <button
            className="btn"
            onClick={handleNext}
            disabled={!answers[currentQ.id] || (Array.isArray(answers[currentQ.id]) && answers[currentQ.id].length === 0)}
            style={{ 
              opacity: (!answers[currentQ.id] || (Array.isArray(answers[currentQ.id]) && answers[currentQ.id].length === 0)) ? 0.5 : 1,
              cursor: (!answers[currentQ.id] || (Array.isArray(answers[currentQ.id]) && answers[currentQ.id].length === 0)) ? 'not-allowed' : 'pointer'
            }}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next'}
            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerAssessment; 
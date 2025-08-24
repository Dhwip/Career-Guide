from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Global variable to store the predictor
predictor = None

def load_model():
    """Load the trained model"""
    global predictor
    try:
        from ml_model import CareerSuccessPredictor
        predictor = CareerSuccessPredictor()
        predictor.load_model('career_success_model.pkl')
        print("Model loaded successfully")
        return True
    except Exception as e:
        print(f"Error loading model: {e}")
        return False

@app.route('/')
def home():
    """Home endpoint"""
    return jsonify({
        'message': 'Career Success Prediction API',
        'status': 'running',
        'endpoints': {
            '/predict': 'POST - Predict career success',
            '/health': 'GET - Health check',
            '/model-info': 'GET - Model information'
        }
    })

@app.route('/health')
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': predictor is not None,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/model-info')
def model_info():
    """Get model information"""
    if predictor is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    return jsonify({
        'model_type': type(predictor.model).__name__,
        'feature_columns': predictor.feature_columns,
        'categorical_columns': list(predictor.label_encoders.keys()),
        'model_loaded': True
    })

@app.route('/predict', methods=['POST'])
def predict_career_success():
    """Predict career success based on user input"""
    if predictor is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    try:
        # Get user data from request
        user_data = request.json
        
        # Validate required fields
        required_fields = [
            'age', 'education', 'personality', 'interests', 'field', 'career',
            'technical_skills', 'communication_skills', 'leadership_skills',
            'problem_solving', 'creativity', 'salary_expectations',
            'international_opportunities', 'work_life_balance', 'career_advancement'
        ]
        
        missing_fields = [field for field in required_fields if field not in user_data]
        if missing_fields:
            return jsonify({
                'error': f'Missing required fields: {missing_fields}'
            }), 400
        
        # Prepare user data for prediction with better error handling
        try:
            # Handle age parsing
            age = user_data['age']
            if isinstance(age, str) and '-' in age:
                age = int(age.split('-')[0])
            else:
                age = int(age)
            
            # Handle interests
            interests = user_data['interests']
            if isinstance(interests, list):
                interests = ','.join(interests)
            
            # Handle career advancement
            career_advancement = user_data['career_advancement']
            if isinstance(career_advancement, list):
                career_advancement = ','.join(career_advancement)
            
            prediction_data = {
                'age': age,
                'gender': user_data.get('gender', 'Other'),
                'education': user_data['education'],
                'years_experience': user_data.get('years_experience', 0),
                'personality': user_data['personality'],
                'interests': interests,
                'field': user_data['field'],
                'career': user_data['career'],
                'technical_skills': int(user_data['technical_skills']),
                'communication_skills': int(user_data['communication_skills']),
                'leadership_skills': int(user_data['leadership_skills']),
                'problem_solving': int(user_data['problem_solving']),
                'creativity': int(user_data['creativity']),
                'salary_expectations': user_data['salary_expectations'],
                'international_opportunities': user_data['international_opportunities'],
                'work_life_balance': user_data['work_life_balance'],
                'advancement_goals': career_advancement,
                'market_demand': user_data.get('market_demand', 0.8),
                'economic_conditions': user_data.get('economic_conditions', 0.9),
                'industry_growth': user_data.get('industry_growth', 1.0)
            }
        except Exception as e:
            return jsonify({
                'error': f'Data processing failed: {str(e)}'
            }), 400
        
        # Make prediction
        try:
            prediction_result = predictor.predict_success(prediction_data)
            
            # Add additional insights
            insights = generate_career_insights(prediction_data, prediction_result)
            
            # Prepare response
            response = {
                'prediction': prediction_result,
                'insights': insights,
                'recommendations': generate_recommendations(prediction_data, prediction_result),
                'user_data': prediction_data
            }
            
            return jsonify(response)
        except Exception as e:
            return jsonify({
                'error': f'Prediction failed: {str(e)}'
            }), 500
        
    except Exception as e:
        return jsonify({
            'error': f'Prediction failed: {str(e)}'
        }), 500

def generate_career_insights(user_data, prediction):
    """Generate insights based on user data and prediction"""
    insights = {
        'strengths': [],
        'areas_for_improvement': [],
        'market_analysis': {},
        'career_advice': []
    }
    
    # Analyze strengths
    if user_data['technical_skills'] >= 8:
        insights['strengths'].append('Strong technical skills')
    if user_data['communication_skills'] >= 8:
        insights['strengths'].append('Excellent communication skills')
    if user_data['leadership_skills'] >= 8:
        insights['strengths'].append('Strong leadership potential')
    if user_data['problem_solving'] >= 8:
        insights['strengths'].append('Excellent problem-solving abilities')
    
    # Analyze areas for improvement
    if user_data['technical_skills'] < 6:
        insights['areas_for_improvement'].append('Consider improving technical skills')
    if user_data['communication_skills'] < 6:
        insights['areas_for_improvement'].append('Work on communication skills')
    if user_data['leadership_skills'] < 6:
        insights['areas_for_improvement'].append('Develop leadership skills')
    if user_data['creativity'] < 6:
        insights['areas_for_improvement'].append('Enhance creativity and innovation')
    
    # Market analysis
    insights['market_analysis'] = {
        'field_demand': 'High' if user_data['field'] in ['technology', 'healthcare'] else 'Moderate',
        'salary_potential': 'High' if user_data['salary_expectations'] in ['senior_level', 'executive'] else 'Moderate',
        'international_opportunities': 'Excellent' if user_data['international_opportunities'] == 'very_interested' else 'Good'
    }
    
    # Career advice
    if prediction['success_probability'] >= 90:
        insights['career_advice'].append('Excellent career prospects! Focus on continuous learning and networking.')
    elif prediction['success_probability'] >= 80:
        insights['career_advice'].append('Good career prospects. Consider developing additional skills to increase success probability.')
    else:
        insights['career_advice'].append('Consider focusing on skill development and gaining more experience in your chosen field.')
    
    return insights

def generate_recommendations(user_data, prediction):
    """Generate personalized recommendations"""
    recommendations = {
        'skill_development': [],
        'certifications': [],
        'networking': [],
        'education': [],
        'experience': []
    }
    
    # Skill development recommendations
    if user_data['technical_skills'] < 7:
        recommendations['skill_development'].append('Take advanced technical courses in your field')
    if user_data['communication_skills'] < 7:
        recommendations['skill_development'].append('Join public speaking clubs or take communication workshops')
    if user_data['leadership_skills'] < 7:
        recommendations['skill_development'].append('Seek leadership opportunities in projects or volunteer work')
    
    # Certification recommendations based on field
    field_certifications = {
        'technology': ['AWS Certified Developer', 'Microsoft Azure', 'Google Cloud', 'PMP'],
        'healthcare': ['BLS Certification', 'ACLS Certification', 'Specialty Certifications'],
        'business': ['PMP', 'CBAP', 'CFP', 'Six Sigma'],
        'engineering': ['PE License', 'LEED Certification', 'Industry-specific certifications'],
        'education': ['Teaching License', 'TESOL', 'Educational Technology Certifications'],
        'marketing': ['Google Digital Marketing', 'HubSpot Certification', 'Facebook Blueprint']
    }
    
    if user_data['field'] in field_certifications:
        recommendations['certifications'] = field_certifications[user_data['field']]
    
    # Networking recommendations
    recommendations['networking'].extend([
        'Join professional associations in your field',
        'Attend industry conferences and workshops',
        'Connect with professionals on LinkedIn',
        'Participate in online communities and forums'
    ])
    
    # Education recommendations
    if user_data['education'] == 'high_school':
        recommendations['education'].append('Consider pursuing a bachelor\'s degree')
    elif user_data['education'] == 'bachelors':
        recommendations['education'].append('Consider a master\'s degree for career advancement')
    
    # Experience recommendations
    recommendations['experience'].extend([
        'Seek internships or entry-level positions in your field',
        'Work on personal projects to build portfolio',
        'Volunteer in relevant organizations',
        'Consider freelance or consulting opportunities'
    ])
    
    return recommendations

@app.route('/career-stats', methods=['GET'])
def get_career_stats():
    """Get career statistics from the dataset"""
    try:
        # Load dataset for statistics
        df = pd.read_csv('career_success_dataset.csv')
        
        stats = {
            'total_records': len(df),
            'success_rate': round(df['success'].mean() * 100, 2),
            'average_salary': round(df['salary'].mean(), 0),
            'field_stats': df.groupby('field')['success'].mean().to_dict(),
            'education_stats': df.groupby('education')['success'].mean().to_dict(),
            'personality_stats': df.groupby('personality')['success'].mean().to_dict(),
            'top_careers': df.groupby('career')['success'].mean().nlargest(10).to_dict()
        }
        
        return jsonify(stats)
        
    except Exception as e:
        return jsonify({'error': f'Failed to get statistics: {str(e)}'}), 500

if __name__ == '__main__':
    # Load model on startup
    if load_model():
        print("Starting Flask API...")
        app.run(debug=True, host='0.0.0.0', port=5001)
    else:
        print("Failed to load model. Exiting...")

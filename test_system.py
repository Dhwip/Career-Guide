#!/usr/bin/env python3
"""
Test script to verify the Career Success Prediction System
"""

import requests
import json
import time

def test_flask_api():
    """Test the Flask API endpoints"""
    base_url = "http://localhost:5001"
    
    print("🧪 Testing Flask API...")
    
    # Test health endpoint
    try:
        response = requests.get(f"{base_url}/health")
        if response.status_code == 200:
            print("✅ Health check passed")
        else:
            print("❌ Health check failed")
            return False
    except Exception as e:
        print(f"❌ Health check error: {e}")
        return False
    
    # Test model info endpoint
    try:
        response = requests.get(f"{base_url}/model-info")
        if response.status_code == 200:
            print("✅ Model info endpoint working")
        else:
            print("❌ Model info endpoint failed")
            return False
    except Exception as e:
        print(f"❌ Model info error: {e}")
        return False
    
    # Test prediction endpoint
    test_data = {
        "age": "23-30",
        "education": "bachelors",
        "personality": "analytical",
        "interests": ["technology", "business"],
        "field": "technology",
        "career": "Software Development",
        "technical_skills": 8,
        "communication_skills": 7,
        "leadership_skills": 6,
        "problem_solving": 9,
        "creativity": 6,
        "salary_expectations": "mid_level",
        "international_opportunities": "very_interested",
        "work_life_balance": "moderately_important",
        "career_advancement": ["management", "specialization"]
    }
    
    try:
        response = requests.post(
            f"{base_url}/predict",
            headers={"Content-Type": "application/json"},
            json=test_data
        )
        if response.status_code == 200:
            result = response.json()
            print("✅ Prediction endpoint working")
            print(f"   Success Probability: {result['prediction']['success_probability']}%")
            print(f"   Confidence: {result['prediction']['confidence']}%")
        else:
            print(f"❌ Prediction endpoint failed: {response.status_code}")
            print(f"   Error: {response.text}")
            return False
    except Exception as e:
        print(f"❌ Prediction error: {e}")
        return False
    
    # Test career stats endpoint
    try:
        response = requests.get(f"{base_url}/career-stats")
        if response.status_code == 200:
            stats = response.json()
            print("✅ Career stats endpoint working")
            print(f"   Total Records: {stats['total_records']}")
            print(f"   Success Rate: {stats['success_rate']}%")
        else:
            print("❌ Career stats endpoint failed")
            return False
    except Exception as e:
        print(f"❌ Career stats error: {e}")
        return False
    
    return True

def test_react_frontend():
    """Test the React frontend"""
    print("\n🧪 Testing React Frontend...")
    
    try:
        response = requests.get("http://localhost:3000")
        if response.status_code == 200:
            print("✅ React frontend is running")
            return True
        else:
            print(f"❌ React frontend failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ React frontend error: {e}")
        return False

def test_dataset():
    """Test the dataset"""
    print("\n🧪 Testing Dataset...")
    
    try:
        import pandas as pd
        df = pd.read_csv('career_success_dataset.csv')
        print(f"✅ Dataset loaded successfully")
        print(f"   Records: {len(df)}")
        print(f"   Success Rate: {df['success'].mean()*100:.1f}%")
        print(f"   Average Salary: ${df['salary'].mean():,.0f}")
        return True
    except Exception as e:
        print(f"❌ Dataset error: {e}")
        return False

def test_model():
    """Test the ML model"""
    print("\n🧪 Testing ML Model...")
    
    try:
        from ml_model import CareerSuccessPredictor
        predictor = CareerSuccessPredictor()
        predictor.load_model('career_success_model.pkl')
        print("✅ ML model loaded successfully")
        
        # Test prediction
        test_data = {
            'age': 25,
            'gender': 'Male',
            'education': 'bachelors',
            'years_experience': 3,
            'personality': 'analytical',
            'interests': 'technology,business',
            'field': 'technology',
            'career': 'Software Development',
            'technical_skills': 8,
            'communication_skills': 7,
            'leadership_skills': 6,
            'problem_solving': 9,
            'creativity': 6,
            'salary_expectations': 'mid_level',
            'international_opportunities': 'very_interested',
            'work_life_balance': 'moderately_important',
            'advancement_goals': 'management,specialization',
            'market_demand': 0.8,
            'economic_conditions': 0.9,
            'industry_growth': 1.1
        }
        
        prediction = predictor.predict_success(test_data)
        print(f"✅ Model prediction working")
        print(f"   Success Probability: {prediction['success_probability']}%")
        print(f"   Confidence: {prediction['confidence']}%")
        return True
    except Exception as e:
        print(f"❌ ML model error: {e}")
        return False

def main():
    """Run all tests"""
    print("🚀 Career Success Prediction System - System Test")
    print("=" * 60)
    
    tests = [
        test_dataset,
        test_model,
        test_flask_api,
        test_react_frontend
    ]
    
    passed = 0
    total = len(tests)
    
    for test in tests:
        try:
            if test():
                passed += 1
        except Exception as e:
            print(f"❌ Test failed with exception: {e}")
    
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! System is working correctly.")
        print("\n🌐 Access the application:")
        print("   Frontend: http://localhost:3000")
        print("   API: http://localhost:5001")
        print("\n📚 Available endpoints:")
        print("   GET  /health - Health check")
        print("   GET  /model-info - Model information")
        print("   POST /predict - Career success prediction")
        print("   GET  /career-stats - Dataset statistics")
    else:
        print("⚠️  Some tests failed. Please check the errors above.")
    
    return passed == total

if __name__ == "__main__":
    main()

import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

def generate_career_dataset(n_samples=5000):
    """
    Generate a comprehensive career success dataset with 5000+ entries
    """
    
    # Career fields and their success factors
    career_fields = {
        'technology': {
            'careers': ['Software Development', 'Data Science', 'UI/UX Design', 'DevOps Engineering', 'Cybersecurity', 'AI/ML Engineer'],
            'base_success_rate': 0.75,
            'salary_multiplier': 1.2,
            'international_demand': 0.9
        },
        'healthcare': {
            'careers': ['Medical Practice', 'Nursing', 'Healthcare Administration', 'Pharmacy', 'Physical Therapy', 'Mental Health'],
            'base_success_rate': 0.85,
            'salary_multiplier': 1.1,
            'international_demand': 0.8
        },
        'business': {
            'careers': ['Business Analysis', 'Financial Planning', 'Digital Marketing', 'Project Management', 'Consulting', 'Entrepreneurship'],
            'base_success_rate': 0.70,
            'salary_multiplier': 1.0,
            'international_demand': 0.85
        },
        'engineering': {
            'careers': ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Chemical Engineering', 'Biomedical Engineering'],
            'base_success_rate': 0.80,
            'salary_multiplier': 1.15,
            'international_demand': 0.85
        },
        'education': {
            'careers': ['Teaching', 'Educational Technology', 'Curriculum Development', 'School Administration', 'Special Education'],
            'base_success_rate': 0.65,
            'salary_multiplier': 0.8,
            'international_demand': 0.7
        },
        'marketing': {
            'careers': ['Digital Marketing', 'Content Creation', 'Brand Management', 'Market Research', 'Social Media Marketing'],
            'base_success_rate': 0.68,
            'salary_multiplier': 0.9,
            'international_demand': 0.75
        }
    }
    
    # Personality types and their success factors
    personality_types = {
        'analytical': {'success_boost': 0.1, 'tech_affinity': 0.8, 'leadership_affinity': 0.3},
        'creative': {'success_boost': 0.05, 'tech_affinity': 0.4, 'leadership_affinity': 0.6},
        'leadership': {'success_boost': 0.15, 'tech_affinity': 0.5, 'leadership_affinity': 0.9},
        'supportive': {'success_boost': 0.08, 'tech_affinity': 0.3, 'leadership_affinity': 0.7},
        'technical': {'success_boost': 0.12, 'tech_affinity': 0.9, 'leadership_affinity': 0.4}
    }
    
    # Education levels and their impact
    education_levels = {
        'high_school': {'success_boost': 0.0, 'salary_boost': 0.0},
        'some_college': {'success_boost': 0.05, 'salary_boost': 0.1},
        'bachelors': {'success_boost': 0.1, 'salary_boost': 0.2},
        'masters': {'success_boost': 0.15, 'salary_boost': 0.3},
        'phd': {'success_boost': 0.2, 'salary_boost': 0.4}
    }
    
    # Generate data
    data = []
    
    for i in range(n_samples):
        # Basic demographics
        age = random.randint(18, 65)
        gender = random.choice(['Male', 'Female', 'Other'])
        
        # Education and background
        education = random.choice(list(education_levels.keys()))
        years_experience = max(0, age - 22 - random.randint(0, 8))
        
        # Personality and interests
        personality = random.choice(list(personality_types.keys()))
        interests = random.sample(list(career_fields.keys()), random.randint(1, 3))
        
        # Career choice
        field = random.choice(interests)
        career = random.choice(career_fields[field]['careers'])
        
        # Skills and competencies
        technical_skills = random.randint(1, 10)
        communication_skills = random.randint(1, 10)
        leadership_skills = random.randint(1, 10)
        problem_solving = random.randint(1, 10)
        creativity = random.randint(1, 10)
        
        # Career preferences
        salary_expectations = random.choice(['entry_level', 'mid_level', 'senior_level', 'executive', 'flexible'])
        international_opportunities = random.choice(['very_interested', 'somewhat_interested', 'not_interested', 'remote_international'])
        work_life_balance = random.choice(['very_important', 'moderately_important', 'less_important', 'not_important'])
        
        # Career advancement goals
        advancement_goals = random.sample(['management', 'specialization', 'entrepreneurship', 'consulting', 'research', 'teaching'], 
                                        random.randint(1, 3))
        
        # Market conditions and external factors
        market_demand = random.uniform(0.5, 1.0)
        economic_conditions = random.uniform(0.6, 1.0)
        industry_growth = random.uniform(0.4, 1.2)
        
        # Calculate success probability
        base_success = career_fields[field]['base_success_rate']
        
        # Personality impact
        personality_boost = personality_types[personality]['success_boost']
        
        # Education impact
        education_boost = education_levels[education]['success_boost']
        
        # Skills impact
        skills_boost = (technical_skills + communication_skills + leadership_skills + problem_solving + creativity) / 50
        
        # Experience impact
        experience_boost = min(0.2, years_experience * 0.01)
        
        # Market conditions impact
        market_boost = (market_demand + economic_conditions + industry_growth) / 3 - 0.8
        
        # Calculate final success probability
        success_probability = min(0.95, max(0.05, 
            base_success + personality_boost + education_boost + skills_boost + experience_boost + market_boost
        ))
        
        # Determine success outcome (1 for success, 0 for not successful)
        success = 1 if random.random() < success_probability else 0
        
        # Calculate salary based on various factors
        base_salary = 50000
        if salary_expectations == 'entry_level':
            base_salary = 40000
        elif salary_expectations == 'mid_level':
            base_salary = 70000
        elif salary_expectations == 'senior_level':
            base_salary = 100000
        elif salary_expectations == 'executive':
            base_salary = 150000
        
        # Apply multipliers
        field_multiplier = career_fields[field]['salary_multiplier']
        education_multiplier = 1 + education_levels[education]['salary_boost']
        experience_multiplier = 1 + (years_experience * 0.02)
        success_multiplier = 1.2 if success else 0.8
        
        final_salary = int(base_salary * field_multiplier * education_multiplier * experience_multiplier * success_multiplier)
        
        # Career satisfaction (1-10 scale)
        career_satisfaction = random.randint(1, 10) if success else random.randint(1, 6)
        
        # Job stability (years in current role)
        job_stability = random.randint(1, 15) if success else random.randint(1, 5)
        
        # International opportunities taken
        international_experience = random.randint(0, 3) if international_opportunities in ['very_interested', 'somewhat_interested'] else 0
        
        # Career advancement achieved
        advancement_achieved = random.randint(0, len(advancement_goals)) if success else 0
        
        # Work-life balance satisfaction
        work_life_satisfaction = random.randint(6, 10) if work_life_balance == 'very_important' else random.randint(4, 9)
        
        # Create record
        record = {
            'id': i + 1,
            'age': age,
            'gender': gender,
            'education': education,
            'years_experience': years_experience,
            'personality': personality,
            'interests': ','.join(interests),
            'field': field,
            'career': career,
            'technical_skills': technical_skills,
            'communication_skills': communication_skills,
            'leadership_skills': leadership_skills,
            'problem_solving': problem_solving,
            'creativity': creativity,
            'salary_expectations': salary_expectations,
            'international_opportunities': international_opportunities,
            'work_life_balance': work_life_balance,
            'advancement_goals': ','.join(advancement_goals),
            'market_demand': round(market_demand, 2),
            'economic_conditions': round(economic_conditions, 2),
            'industry_growth': round(industry_growth, 2),
            'success_probability': round(success_probability, 3),
            'success': success,
            'salary': final_salary,
            'career_satisfaction': career_satisfaction,
            'job_stability': job_stability,
            'international_experience': international_experience,
            'advancement_achieved': advancement_achieved,
            'work_life_satisfaction': work_life_satisfaction,
            'success_rate': round(success_probability * 100, 1)
        }
        
        data.append(record)
    
    return pd.DataFrame(data)

# Generate the dataset
print("Generating career success dataset...")
df = generate_career_dataset(5000)

# Save to CSV
df.to_csv('career_success_dataset.csv', index=False)

print(f"Dataset generated successfully with {len(df)} records")
print(f"Success rate: {df['success'].mean()*100:.1f}%")
print(f"Average salary: ${df['salary'].mean():,.0f}")
print(f"Dataset saved to 'career_success_dataset.csv'")

# Display sample statistics
print("\nDataset Statistics:")
print(df.describe())

print("\nSuccess rates by field:")
print(df.groupby('field')['success'].mean().sort_values(ascending=False))

print("\nSuccess rates by education:")
print(df.groupby('education')['success'].mean().sort_values(ascending=False))

print("\nSuccess rates by personality:")
print(df.groupby('personality')['success'].mean().sort_values(ascending=False))

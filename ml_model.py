import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import joblib
import pickle

class CareerSuccessPredictor:
    def __init__(self):
        self.model = None
        self.label_encoders = {}
        self.scaler = StandardScaler()
        self.feature_columns = []
        
    def load_and_preprocess_data(self, csv_file):
        """Load and preprocess the career success dataset"""
        print("Loading dataset...")
        df = pd.read_csv(csv_file)
        
        # Create a copy for preprocessing
        data = df.copy()
        
        # Define categorical columns for encoding
        categorical_columns = [
            'gender', 'education', 'personality', 'field', 'career',
            'salary_expectations', 'international_opportunities', 'work_life_balance'
        ]
        
        # Encode categorical variables
        for col in categorical_columns:
            if col in data.columns:
                le = LabelEncoder()
                data[f'{col}_encoded'] = le.fit_transform(data[col].astype(str))
                self.label_encoders[col] = le
        
        # Handle interests and advancement_goals (comma-separated values)
        if 'interests' in data.columns:
            # Count number of interests
            data['interests_count'] = data['interests'].str.count(',') + 1
        
        if 'advancement_goals' in data.columns:
            # Count number of advancement goals
            data['advancement_goals_count'] = data['advancement_goals'].str.count(',') + 1
        
        # Define feature columns for the model
        self.feature_columns = [
            'age', 'years_experience', 'technical_skills', 'communication_skills',
            'leadership_skills', 'problem_solving', 'creativity', 'market_demand',
            'economic_conditions', 'industry_growth', 'interests_count', 'advancement_goals_count'
        ]
        
        # Add encoded categorical columns
        for col in categorical_columns:
            if col in data.columns:
                self.feature_columns.append(f'{col}_encoded')
        
        # Prepare features and target
        X = data[self.feature_columns].fillna(0)
        y = data['success']
        
        # Scale numerical features
        numerical_features = [
            'age', 'years_experience', 'technical_skills', 'communication_skills',
            'leadership_skills', 'problem_solving', 'creativity', 'market_demand',
            'economic_conditions', 'industry_growth', 'interests_count', 'advancement_goals_count'
        ]
        
        X[numerical_features] = self.scaler.fit_transform(X[numerical_features])
        
        return X, y, data
    
    def train_model(self, X, y):
        """Train the career success prediction model"""
        print("Training model...")
        
        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Try different models
        models = {
            'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
            'Gradient Boosting': GradientBoostingClassifier(random_state=42),
            'Logistic Regression': LogisticRegression(random_state=42, max_iter=1000)
        }
        
        best_model = None
        best_score = 0
        
        for name, model in models.items():
            print(f"Training {name}...")
            model.fit(X_train, y_train)
            y_pred = model.predict(X_test)
            accuracy = accuracy_score(y_test, y_pred)
            print(f"{name} Accuracy: {accuracy:.4f}")
            
            if accuracy > best_score:
                best_score = accuracy
                best_model = model
        
        self.model = best_model
        print(f"\nBest model selected with accuracy: {best_score:.4f}")
        
        # Final evaluation
        y_pred = self.model.predict(X_test)
        print("\nClassification Report:")
        print(classification_report(y_test, y_pred))
        
        return best_score
    
    def predict_success(self, user_data):
        """Predict career success for a user"""
        if self.model is None:
            raise ValueError("Model not trained. Please train the model first.")
        
        # Preprocess user data
        processed_data = self.preprocess_user_data(user_data)
        
        # Make prediction
        success_probability = self.model.predict_proba(processed_data)[0][1]
        success_prediction = self.model.predict(processed_data)[0]
        
        return {
            'success_probability': round(success_probability * 100, 2),
            'success_prediction': bool(success_prediction),
            'confidence': round(max(success_probability, 1 - success_probability) * 100, 2)
        }
    
    def preprocess_user_data(self, user_data):
        """Preprocess user input data for prediction"""
        # Create a DataFrame with the same structure as training data
        data = pd.DataFrame([user_data])
        
        # Encode categorical variables
        for col, le in self.label_encoders.items():
            if col in data.columns:
                data[f'{col}_encoded'] = le.transform(data[col].astype(str))
        
        # Handle interests count
        if 'interests' in data.columns:
            data['interests_count'] = data['interests'].str.count(',') + 1
        else:
            data['interests_count'] = 1
        
        # Handle advancement goals count
        if 'advancement_goals' in data.columns:
            data['advancement_goals_count'] = data['advancement_goals'].str.count(',') + 1
        else:
            data['advancement_goals_count'] = 1
        
        # Select features
        X = data[self.feature_columns].fillna(0)
        
        # Scale numerical features
        numerical_features = [
            'age', 'years_experience', 'technical_skills', 'communication_skills',
            'leadership_skills', 'problem_solving', 'creativity', 'market_demand',
            'economic_conditions', 'industry_growth', 'interests_count', 'advancement_goals_count'
        ]
        
        X[numerical_features] = self.scaler.transform(X[numerical_features])
        
        return X
    
    def save_model(self, filepath):
        """Save the trained model and preprocessors"""
        model_data = {
            'model': self.model,
            'label_encoders': self.label_encoders,
            'scaler': self.scaler,
            'feature_columns': self.feature_columns
        }
        
        with open(filepath, 'wb') as f:
            pickle.dump(model_data, f)
        
        print(f"Model saved to {filepath}")
    
    def load_model(self, filepath):
        """Load a trained model and preprocessors"""
        with open(filepath, 'rb') as f:
            model_data = pickle.load(f)
        
        self.model = model_data['model']
        self.label_encoders = model_data['label_encoders']
        self.scaler = model_data['scaler']
        self.feature_columns = model_data['feature_columns']
        
        print(f"Model loaded from {filepath}")

def main():
    """Train and save the career success prediction model"""
    # Initialize predictor
    predictor = CareerSuccessPredictor()
    
    # Load and preprocess data
    X, y, data = predictor.load_and_preprocess_data('career_success_dataset.csv')
    
    # Train model
    accuracy = predictor.train_model(X, y)
    
    # Save model
    predictor.save_model('career_success_model.pkl')
    
    print(f"\nModel training completed with accuracy: {accuracy:.4f}")
    
    # Test prediction with sample data
    sample_user = {
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
    
    prediction = predictor.predict_success(sample_user)
    print(f"\nSample prediction: {prediction}")

if __name__ == "__main__":
    main()

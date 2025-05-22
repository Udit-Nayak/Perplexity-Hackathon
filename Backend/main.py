from flask import Flask, render_template, request, url_for, redirect, session, flash, send_from_directory, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user
import requests
from flask_cors import CORS
import datetime


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key-goes-here'
CORS(app)

def hash_password(password):
    hashed_pass = generate_password_hash(
        password=password,
        method="pbkdf2:sha256",
        salt_length=16
    )
    return hashed_pass

# @app.route('/')
# def home():
#     return render_template("index.html",  logged_in=current_user.is_authenticated)








@app.route('/api/message', methods=['POST'])
def receive_message():
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    role="user"
    if not request.is_json:
        return jsonify({"status": "error", "message": "Invalid JSON"}), 400
    
    data = request.json
    if data is None:
        return jsonify({"status": "error", "message": "No JSON data provided"}), 400
        
    content = data.get('message', '')
    print(f"[{timestamp}] Received message: {content}")  # This will print the message in the terminal with timestamp
    return jsonify({"status": "success", "message": "Message received", "timestamp": timestamp})

def send_message_to_api(message_content):
    """
    Function to send messages to the API endpoint using requests
    Returns the response from the API
    """
    url = "https://api.perplexity.ai/chat/completions"
    headers = {
        "Content-Type": "application/json"
    }
    payload = {
    "model": "sonar",
    "messages": [
        {
            "role": "system",
            "content": "Be precise and concise."
        },
        {
            "role": "user",
            "content": "How many stars are there in our galaxy?"
        }
    ]
    }
    headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response.text)
    
    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()  # Raise an exception for bad status codes
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error sending message: {e}")
        return None

# Example usage of the function
@app.route('/test-api', methods=['GET'])
def test_api():
    result = send_message_to_api("Test message from API")
    if result:
        return jsonify(result)
    return jsonify({"status": "error", "message": "Failed to send message"}), 500







if __name__ == "__main__":
    app.run(debug=True)

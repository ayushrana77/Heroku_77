from flask import Flask,send_from_directory
from flask_cors import CORS,cross_origin

app = Flask(__name__,static_folder='my-app/build',static_url_path='')
CORS(app)
@app.route('/api', methods=['GET'])
@cross_origin()
def index():
    return {
        "tutorial": "Flask React Heroku add github"
    }

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
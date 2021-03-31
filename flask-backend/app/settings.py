import os

from decouple import config


BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'app', 'midea')
MAX_CONTENT_LENGTH = 1024 * 1024
UPLOAD_EXTENSIONS = ['.jpg', '.png', '.gif']
SECRET_KEY = config("SECRET_KEY")
SQLALCHEMY_DATABASE_URI = 'sqlite:////' + os.path.join(BASE_DIR, 'database.sqlite')
SQLALCHEMY_TRACK_MODIFICATIONS = False

FLASK_APPS = [
    'restaurant'
]

FLASK_EXTENSIONS = [
    'database',
    'migrate',
    'serializer',
]
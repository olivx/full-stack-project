import os

from decouple import config


BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
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
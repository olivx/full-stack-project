from importlib import import_module

from flask import Flask


def load_apps(app):
    for flask_app in app.config.get('FLASK_APPS'):
        bp = import_module(f'app.{flask_app}')
        bp.init_app(app)


def load_extensions(app):
    for flask_extensions in app.config.get('FLASK_EXTENSIONS'):
        ext = import_module(f'app.ext.{flask_extensions}')
        ext.init_app(app)


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('settings.py')

    load_extensions(app)
    load_apps(app)
    return app

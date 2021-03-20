from flask_restful import Api
from flask import Blueprint
from .models import *

from .views import RestaurantResources

bp = Blueprint('restaurants', __name__)
api = Api(bp)


def init_app(app):
    api.add_resource(RestaurantResources, '/restaurants')
    app.register_blueprint(bp)

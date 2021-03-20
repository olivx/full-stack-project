from flask_restful import Resource
from flask import jsonify
from .models import Restaurant, RestaurantSerializer


class RestaurantResources(Resource):

    def get(self):
        restaurants = Restaurant.query.all()
        serializer = RestaurantSerializer(many=True)
        return serializer.dump(restaurants)

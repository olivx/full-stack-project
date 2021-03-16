from rest_framework import serializers

from .models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = (
            'id', 'name', 'category', 'deliveryEstimate', 'rating', 'imagePath', 'about', 'hours',
        )

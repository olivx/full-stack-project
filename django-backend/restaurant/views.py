from rest_framework import viewsets
from .serializers import RestaurantSerializer
from .models import Restaurant


# Create your views here.

class RestaurantsViewSet(viewsets.ModelViewSet):
    name = 'restaurant'
    serializer_class = RestaurantSerializer
    model = Restaurant
    queryset = Restaurant.objects.all()

from rest_framework.routers import DefaultRouter
from .views import RestaurantsViewSet

routes = DefaultRouter(trailing_slash=True)

routes.register('', RestaurantsViewSet, basename=RestaurantsViewSet.name)
urlpatterns = routes.urls

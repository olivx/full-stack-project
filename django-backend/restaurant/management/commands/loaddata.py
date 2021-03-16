import json

from django.core.files import File
from django.core.management.base import BaseCommand
from restaurant.models import Restaurant


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('restaurant', action='store_true', help='load data from restaurant fixture')

    def handle(self, *args, **options):
        path_fixtures = 'fixtures/'
        with open(path_fixtures + 'fixture.json') as load:
            data = json.loads(load.read())
            if options['restaurant']:
                Restaurant.objects.all().delete()
                restaurants = []
                for restaurant in data['restaurants']:
                    image_file = open(path_fixtures + restaurant['imagePath'], 'rb')
                    restaurant['imagePath'] = File(image_file)
                    restaurants.append(Restaurant(**restaurant))
                Restaurant.objects.bulk_create(restaurants)
                self.stdout.write(self.style.SUCCESS('It Works ! restaurants:'))

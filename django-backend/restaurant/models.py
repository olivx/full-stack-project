import os

from django.db import models
from django.utils.http import urlsafe_base64_encode
from uuid import uuid4


def upload_to(instance, filename):
    path = 'restaurants/'
    ext = filename.split('.')[-1]
    file_name = '%s.%s' % (uuid4(), ext)
    return os.path.join(path, file_name)


# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    deliveryEstimate = models.CharField(max_length=10, null=True, blank=True)
    rating = models.FloatField(null=True, blank=True)
    imagePath = models.ImageField(upload_to=upload_to, null=True, blank=True)
    about = models.TextField(max_length=100, null=True, blank=True)
    hours = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name

import json
import os
import click

from flask.cli import with_appcontext
from werkzeug.datastructures import FileStorage

from ..restaurant import models as restaurant_module
from ..settings import BASE_DIR
from ..utils.utils import upload_to


@click.command(name='loadata')
@click.option('--all-data', '-a', is_flag=True, help="import all initial data")
@with_appcontext
def loadata(all_data):
    fixtures_json = os.path.join(BASE_DIR, 'app', 'commands', 'fixtures', 'fixture.json')
    fixtures_image = os.path.join(BASE_DIR, 'app', 'commands', 'fixtures')

    if all_data:

        to_import = {
            'restaurant': restaurant_module
        }

        for app, model in to_import.items():
            with open(fixtures_json) as f:
                data = json.loads(f.read())

            for obj in data[app]:
                instance = getattr(model, app.title())(**obj)
                fp = open(f"{os.path.join(fixtures_image, obj['imagePath'])}", 'rb')
                upload_file = FileStorage(fp)
                obj['imagePath'] = upload_to(instance, upload_file)
                obj = getattr(model, app.title())(**obj)
                obj.save()
            print(f'data fom model {app} was imported')

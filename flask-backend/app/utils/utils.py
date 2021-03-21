import os
from uuid import uuid4

from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename

from ..settings import UPLOAD_FOLDER


def upload_to(instance, uploaded_file):
    filename = secure_filename(uploaded_file.filename)
    if filename != '':
        filename = f"{uuid4()}.{uploaded_file.filename.split('.', -1)[-1]}"
        to_path = os.path.join(UPLOAD_FOLDER, instance.__class__.__name__.lower())

        if not os.path.isdir(to_path):
            os.mkdir(to_path)
        to_file = os.path.join(to_path, filename)
        uploaded_file.save(to_file)
        uploaded_file.close()
        return to_file
    return None

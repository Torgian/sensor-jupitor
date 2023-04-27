## SensorAtlas

SensorAtlas is a Django App that serves an OGC SensorThings API implementation in Python.

Detailed documentation is in the "docs" directory.

#### Dependencies

Before you can run SensorAtlas, we need to install dependencies for Geolocation purposes.

1) Postgresql database <-- version 14 or above
2) postgres-postGIS <-- `sudo apt install postgis postgresql-14-postgis-3`
2) GDAL
3) GEOS
4) PROJ <-- you can install this with `sudo apt-get install proj-bin`


#### Known issues with installation

When you run `python manage.py runserver`, you may run into errors related with psycop2g.

The most common error is `libpq-dev` dependencies. Your system may not have these installed
even after installing postgresql.

#### Database setup

You will need to create a postgis extension in your postgresql database.

Run the command `psql -U username databasename -c "create extension postgis"`

#### Quick start

The following steps will explain how to add Sensor Atlas to an existing django application. If you do not have a django application, create one and install Sensor Atlas to get started.

NOTE: Sensor Atlas requires that django uses a PostGIS backend for its Database Settings.

    Install sensorAtlas (e.g. pip install <path-to-file>/sensorAtlas-0.1.tar.gz)
    You can also run `pip install sensorAtlas`

    Add "sensorAtlas" to your INSTALLED_APPS setting like this (note rest_framework must be included in INSTALLED_APPS):

INSTALLED_APPS = [
    ...
    'rest_framework,
    'sensorAtlas',
]

    Also include the following Django Rest Framework settings in your settings.py file:

REST_FRAMEWORK = {
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.URLPathVersioning',
    'URL_FIELD_NAME': 'selfLink',
    'ORDERING_PARAM': '$orderby',
    'DEFAULT_PAGINATION_CLASS': 'sensorAtlas.pagination.SensorThingsPagination',
    'PAGE_SIZE': 100,
    'TEST_REQUEST_DEFAULT_FORMAT': 'json'
}

    Include the sensorAtlas URLconf in your project urls.py urlpatterns like this::

urlpatterns = [
    ...
    path('api/', include('sensorAtlas.urls')),
]

    Run python manage.py makemigrations sensorAtlas && python manage.py migrate to create the sensorAtlas models.

    Start the development server with python manage.py runserver and visit http://127.0.0.1:8000/api/v1.0/

#### Tests

python setup.py test
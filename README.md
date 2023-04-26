### Sensor Jupitor

Sensor Jupitor uses SensorAtlas as its main dependency.

For the frontend, we are using Vue3, Nuxt3, and Vuetify3.

There are currently some issues with the frontend.

### Docker instructions.

Pretty straightforward. Simply run `docker compose up`.

All the settings are housed in the Dockerfile and docker-compose.yml files. 

There is also a dockerfile in the sa-frontend folder.

### Migrations

FOr database migrations, run the following:

`docker compose exec sa-backend python manage.py makemigrations sensorAtlas`
`docker compose exec sa-backend python manage.py migrate`

